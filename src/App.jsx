import Footer from "./components/Footer";
import Header from "./components/Header";
import Massege from "./components/Massege";
import Counter from "./components/Counter";


const App = () => {
    return (
        <div>
            <Header/>
            <Massege text="hello world" sn="1" />
            <Massege text="hello univers" sn="2" />
            <Counter />
        
            <Footer/>
        </div>
    );
};

export default App;