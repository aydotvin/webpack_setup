import styles from "./App.module.scss";

const App = () => {
	return (
		<div className={styles.app}>
			<h2 className={styles.heading}>App</h2>
			<p className={styles.title}>This is a title</p>
			<p className="alert alert-success alert-danger">test</p>
		</div>
	);
};

export default App;
