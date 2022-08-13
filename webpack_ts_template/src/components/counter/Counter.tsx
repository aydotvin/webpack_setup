import { useState } from "react";
import styles from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h3 className={`${styles.heading}`}>Counter</h3>
            <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
			<hr />
        </div>
    );
};

export default Counter;
