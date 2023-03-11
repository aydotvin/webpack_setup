import { useState } from "react";
import styles from "./Counter.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {
  CounterState,
  addExtraIfOdd,
  asyncIncrement,
  decrementCount,
  incrementCount,
  setCount,
  CounterActions,
} from "./counterSlice";
import { RootState } from "Src/state/store";
import { ThunkDispatch } from "@reduxjs/toolkit";

type AppDispatch = ThunkDispatch<RootState, unknown, CounterActions> & Dispatch;

const Counter = () => {
  const [syncCount, setSyncCount] = useState(0);
  const [asyncCount, setAsyncCount] = useState(0);
  const dispatch: AppDispatch = useDispatch();

  const count = useSelector(({ counterData }: { counterData: CounterState }) => {
    return counterData.count;
  });

  const increaseCount = () => {
    dispatch(incrementCount());
  };
  const decreaseCount = () => {
    dispatch(decrementCount());
  };

  const addIfOdd = () => {
    dispatch(addExtraIfOdd(asyncCount));
  };

  const asyncIncrease = () => {
    dispatch(asyncIncrement(asyncCount));
  };

  const syncIncrease = () => {
    const count = Number(syncCount) || 0;
    dispatch(setCount({ count }));
  };

  return (
    <div className={`${styles.counter}`}>
      <h2 className={`page-heading`}>Counter</h2>
      <div className={`${styles.counterRow}`}>
        <button onClick={decreaseCount}>-</button>
        <span className={`${styles.count}`}>{count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
      <div className={`${styles.counterRow}`}>
        <input
          type="number"
          value={syncCount}
          onChange={(ev) => {
            const count = Number(ev.target.value);
            setSyncCount(count);
          }}
        />
        <button onClick={syncIncrease}>Synchronously increase count</button>
      </div>
      <div className={`${styles.counterRow}`}>
        <input
          type="number"
          value={asyncCount}
          onChange={(ev) => {
            const asyncNumber = Number(ev.target.value);
            setAsyncCount(asyncNumber);
          }}
        />
        <button onClick={asyncIncrease}>Asynchronously increase count</button>
        <button onClick={addIfOdd}>Add if current count is odd</button>
      </div>
    </div>
  );
};

export default Counter;
