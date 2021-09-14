import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAmount } from "../slices/saveSlice";

export function useCraft(data) {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.save.items);
  const [isCrafting, setCrafting] = useState(false);
  return () => {
    if (isCrafting) return;
    const costs = data.cost(items[data.name]);
    if (typeof costs === "undefined") return;
    for (const id in costs) {
      if (items[id] < costs[id]) return;
    }

    for (const id in costs) {
      dispatch(changeAmount({ item: id, count: -costs[id] }));
    }
    if (data.craftTime) {
      setCrafting(true);
      setTimeout(() => {
        dispatch(changeAmount({ item: data.name, count: 1 }));
        setCrafting(false);
      });
    } else {
      dispatch(changeAmount({ item: data.name, count: 1 }));
    }
  };
}
