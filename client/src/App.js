import { Link, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Home from './components/Home';

import Advice from './components/Advice';
import Food from './components/Food'; 
import Specialist from './components/Specialist';
import Supplements from './components/supplements';
import CommentForm from './components/CommentForm';
import Hope from './components/Hope';
import Rana from './components/Rana';



function App() { 



  return (

    <div className="App">

      

      <Switch> 

      <Route exact path="/MyBigBro/" > 
          <Rana /> 
        </Route>
        
        <Route path="/dizzylife/advice/"> 
          <Advice />
        </Route>

        <Route path="/dizzylife/supplements">
          <Supplements /> 
        </Route>

        <Route path="/dizzylife/comment">
          <CommentForm /> 
        </Route>

        <Route path="/food/"> 
          <Food /> 
        </Route>

        <Route path="/hope/"> 
          <Hope /> 
        </Route>

        <Route path="/specialist/"> 
          <Specialist /> 
        </Route>

        

        
        

        
        

        <Route path="/dizzylife">  
          <Home />
        </Route>

        <Route path="/">
          <Redirect to="/dizzylife" /> 
        </Route>

        

      </Switch>
      
    </div>
  );
}

export default App;
