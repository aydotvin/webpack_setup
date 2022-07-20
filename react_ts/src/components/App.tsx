import Counter from "Component/counter/Counter";
import ghost2 from "Asset/ghost2.jpg";
import Greeting from "Component/greeting/Greeting.js";

const App = () => {
    console.log(process.env.ENVKEY1); //	From .env file
    console.log(process.env.flag1); //	From the package.json script

    return (
        <div>
            <h2>
                App 6 - {process.env.flag1} - {process.env.NODE_ENV}
            </h2>
            <Counter></Counter>
            <img src={ghost2} alt="" width={500} />
            <Greeting></Greeting>
        </div>
    );
};

export default App;
