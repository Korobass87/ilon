import {Header} from './components/header'
import Router from "./constans/routers/routers";
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="planet"></div>
<Header/>

        <Router />
    </div>
  );
}

export default App;
