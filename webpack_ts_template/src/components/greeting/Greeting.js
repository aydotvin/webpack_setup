import styles from "./Greeting.module.scss";

const Greeting = () => {
    return <div className={styles.greetingContainer}>
		<h2 className={styles.heading}>Hello John</h2>
	</div>;
};

export default Greeting;
