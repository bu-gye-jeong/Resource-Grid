import { createSlice } from "@reduxjs/toolkit";
import { AutoConnected, Resources } from "../data/resources";
import { mergeObject } from "../utils/merge";

/**
 * @param {string} name
 * @param {saveState.items} items
 * @returns
 */
function canBuy(name, items) {
  const Resource = Resources[name];
  if (items[name].startTime !== 0) return false;

  const cost = Resource.cost(items[name].have);

  let bulk = Infinity;
  if (cost === null) return false;

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
const buyItem = (name, _items, curTime, doBulk = false) => {
  const items = mergeObject(_items, {});
  const Resource = Resources[name];

  const cost = Resource.cost(items[name].have);
  const buyable = canBuy(name, items);
  if (buyable === false) return _items;
  const bulk = doBulk ? buyable : 1;

  for (const resourceName in cost) {
    const _cost = bulk * cost[resourceName];
    items[resourceName].have -= _cost;
  }

  items[Resource.name].startTime = curTime;

  return items;
};

/**
 * @param {string} name
 * @param {saveState} save
 * @param {number} curTime
 * @returns
 */
const buyItemAuto = (name, _items, curTime) => {
  const items = mergeObject(_items, {});
  if (items[name].startTime !== 0) return _items;
  const Resource = Resources[name];

  const req = AutoConnected[name];
  if (items[req].have <= 0) return _items;

  items[Resource.name].startTime = curTime;

  return items;
};

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
      { have: e[0] === "TreeSeed" ? 1 : 0, startTime: 0, unlocked: false },
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
        state.items = buyItem(
          action.payload.name,
          state.items,
          action.payload.Time
        );
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

        for (const ResName in Resources) {
          const Resource = Resources[ResName];

          // Check Unlocked

          // Check craft end
          if (state.items[ResName].startTime !== 0) {
            let craftTime = Resource.craftTime * 1000;
            if (
              AutoConnected[ResName] &&
              state.items[AutoConnected[ResName]] >= 1
            ) {
              craftTime /= state.items[AutoConnected[ResName]].have;
            }

            if (Time >= state.items[ResName].startTime + craftTime) {
              state.items[ResName].have += Math.floor(
                (Time - state.items[ResName].startTime) / craftTime
              );
              state.items[ResName].startTime = 0;
            }
          }

          // Start Automate
          if (Resource.automates) {
            for (let j = 0; j < Resource.automates.length; j++) {
              const IngName = Resource.automates[j];
              state.items = buyItemAuto(IngName, state.items, Time);
            }
          }
        }
      },
    },
  },
});

export const { tick, buy } = saveSlice.actions;

export default saveSlice.reducer;
