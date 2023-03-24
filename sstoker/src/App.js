import{
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import Home from "sstoker\src\pages\Home\Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Home />}/>
        <Route path ="/hostels" element = {<List/>}/>
        <Route path ="/hostel/:id" element = {<Hostel />}/>

       
      </Routes>
    </BrowserRouter>

  );
}

export default App;
