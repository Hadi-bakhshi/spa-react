import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/about-us" component={AboutUsPage} />
    </BrowserRouter>
  );
}

export default App;
