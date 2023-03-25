import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import AllRoutes from './Pages/AllRoutes';
import Task from './Pages/Task';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">

     <Navbar/>
     <Task/>
     <Home/>

    </div>
  );
}

export default App;
