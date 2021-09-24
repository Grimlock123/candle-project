import Placeholder from './Placeholder';
import Navbar from './Components/Navbar/Navbar';
import AboutMe from './Components/Navbar/AboutMe';
import Contact from './Components/Navbar/Contact';
import CandleApi from './Components/Candle/CandleApi';
import CandleCard from './Components/Candle/CandleCard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Placeholder />
        </Route> 
        <Route exact path="/aboutme">
          <AboutMe />
        </Route> 
        <Route exact path="/contact">
          <Contact />
        </Route> 
        <Route exact path="/cards">
          <CandleCard />
        </Route>
        <Route exact path="/cardsApi">
          <CandleApi />
        </Route>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
