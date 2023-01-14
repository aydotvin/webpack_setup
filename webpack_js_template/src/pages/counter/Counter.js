import { useState } from "react";
import styles from "./Counter.module.scss";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./counterSlice";

const Counter = () => {
  const [syncCount, setSyncCount] = useState(0);
  const [asyncCount, setAsyncCount] = useState(0);
  const dispatch = useDispatch();

  const count = useSelector((st) => {
    return st.counterData.count;
  });

  const increaseCount = () => {
    dispatch(actions.incrementCount());
  };
  const decreaseCount = () => {
    dispatch(actions.decrementCount());
  };

  const addIfOdd = () => {
    dispatch(actions.addExtraIfOdd(asyncCount));
  };

  const asyncIncrease = () => {
    dispatch(actions.asyncIncrement(asyncCount));
  };

  const syncIncrease = () => {
    const count = Number(syncCount) || 0;
    dispatch(actions.setCount({ count }));
  };

  return (
    <div className={`${styles.counter}`}>
      <h2 className={`page-heading`}>Counter</h2>
      <div className={`${styles.counterRow}`}>
        <button onClick={decreaseCount}>-</button>
        <p className={`${styles.count}`}>{count}</p>
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
      <Outlet />
    </div>
  );
};

export default Counter;
