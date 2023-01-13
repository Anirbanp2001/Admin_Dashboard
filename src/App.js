import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

function App() {
  return (
    <div className="app">
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/> 
        <Route path="users" element={<List />} />
        <Route path="/users/:userId" element={<Single />} />
        <Route path="/users/new" element={<New inputs={userInputs}/>}/>
        <Route path="/products/:productId" element={<Single  />} />
        <Route path="/products/new" element={<New inputs={productInputs}/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
