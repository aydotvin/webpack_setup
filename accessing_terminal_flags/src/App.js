import styles from "./App.module.scss";

const App = () => {
	return (
		<div className={styles.app}>
			<h2>App Component.</h2>
			<p>
				Environment value terminal flag, Client - <span className={styles.envValue}>{process.env.client}</span>
			</p>
			<p>
				Environment value terminal flag, Theme - <span className={styles.envValue}>{process.env.theme}</span>
			</p>
		</div>
	);
};

export default App;
