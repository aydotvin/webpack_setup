import styles from "./App.module.scss";

const App = () => {
	console.log(process.env.ENVKEY1);
	console.log(process.env.flag1);

	const client = process.env.client;
	const theme = process.env.theme;

	return (
		<div className={styles.app}>
			<h2>App Component.</h2>
			<h3>Client is = {client}</h3>
			<h3>Theme is = {theme}</h3>
		</div>
	);
};

export default App;
