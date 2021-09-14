import { createSlice } from "@reduxjs/toolkit";
import { AutoConnected, Resources } from "../data/resources";
import produce from "immer";

/**
 * @param {string} name
 * @param {saveState.items} items
 * @returns
 */
function canBuy(name, items) {
  const Resource = Resources[name];
  // if (items[name].startTime !== null) return;

  const cost = Resource.cost(items[name].have);
  console.log(JSON.stringify(cost));

  let bulk = Infinity;
  if (cost === null) return bulk;

  for (const resourceName in cost) {
    const _cost = cost[resourceName];
    const _have = items[resourceName].have;
    if (_cost > _have) return false;
    bulk = Math.min(bulk, _have / _cost);
  }
  return Math.floor(bulk);
}

/**
 * @param {string} name
 * @param {saveState} save
 * @param {number} curTime
 * @param {boolean} doBulk
 * @returns
 */
const buyItem = (name, save, curTime, doBulk = false) =>
  produce(save, (draft) => {
    const items = draft.items;
    const Resource = Resources[name];

    const cost = Resource.cost(items[name].have);
    const bulk = doBulk ? canBuy(name, items) : 1;

    if (!bulk) return false;

    for (const resourceName in cost) {
      const _cost = bulk * cost[resourceName];
      items[resourceName].have -= _cost;
    }

    items[Resource.name].startTime = curTime;

    return draft;
  });

/**
 * @typedef {Object} saveState
 *
 * @property {Object.<string, { have: number, startTime: number, unlocked: boolean }>} items
 */

/** @type {saveState} */
export const initialState = {
  items: Object.fromEntries(
    Object.entries(Resources).map((e) => [
      e[0],
      { have: e[0] === "TreeSeed" ? 1 : 0, startTime: null, unlocked: false },
    ])
  ),
  automations: [],
};

const saveSlice = createSlice({
  name: "save",
  initialState,
  reducers: {
    /**
     * @param {saveState} state
     * @param {{ action: string, payload: { item: string, count: number } }} action
     */
    changeAmount(state, action) {
      state.items[action.payload.item] += action.payload.count;
      if (state.items[action.payload.item] < 0)
        state.items[action.payload.item] = 0;
    },
    buy: {
      prepare(name) {
        return {
          payload: {
            name,
            Time: new Date().getTime(),
          },
        };
      },
      reducer(state, action) {
        state = buyItem(action.payload.name, state, action.payload.Time, true);
      },
    },
    tick: {
      prepare() {
        return {
          payload: { Time: new Date().getTime() },
        };
      },
      reducer(state, action) {
        const Time = action.payload.Time;

        for (const Resource of Resources) {
          const ResName = Resource.name;

          // Check Unlocked

          // Start Automate
          if (Resource.automates) {
            for (let j = 0; j < Resource.automates.length; j++) {
              const IngName = Resource.automates[j];
              state = buyItem(IngName, state, Time);
            }
          }

          // Check craft end
          if (state.items[ResName].startTime !== null) {
            let craftTime = Resource.craftTime * 1000;
            if (AutoConnected[ResName]) {
              craftTime /= state[AutoConnected[ResName]].have;
            }
            if (Time >= state[ResName].startTime + craftTime) {
              state[ResName].startTime = null;
              state[ResName].have += Math.floor(
                (Time - state[ResName].startTime) / craftTime
              );
            }
          }
        }
      },
    },
  },
});

export const { tick, buy } = saveSlice.actions;

export default saveSlice.reducer;
