//npm module
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 

//local module
import Messenger from "./pages/messenger/Messenger.jsx";
const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element="HELLO">
        </Route>
        <Route path="/messenger" element={<Messenger/>} />
      </Routes>
    </Router>
  );
}
 
export default App