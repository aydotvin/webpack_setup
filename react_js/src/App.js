import styles from "./App.module.scss";
import Counter from "Component/counter/Counter"

const App = () => {
    console.log(process.env.ENVKEY1);
    console.log(process.env.flag1);

    return (
        <div className={styles.app}>
            <h2 className={styles.heading}>App</h2>
            <p className={styles.title}>This is a title</p>
            <Counter></Counter>
        </div>
    );
};

export default App;
