import { BrowserRouter,Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return <BrowserRouter>
  <Route path="/" exact={true} component={HomePage}/>
  <Route path="/about-us" component={AboutUsPage}/>
  </BrowserRouter>;
}

export default App;
 