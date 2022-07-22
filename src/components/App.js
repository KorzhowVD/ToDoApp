import { BrowserRouter } from "react-router-dom";
import "../styles/App.css"
import Navbar from './UI/navbar/Navbar';
import AppRouter from './AppRouter/AppRouter';

function App() {
  return (
    <BrowserRouter>     
      <Navbar/> 
      <AppRouter/>
    </BrowserRouter>
  )
}

export {App};
