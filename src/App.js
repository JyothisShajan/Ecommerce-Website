import React from 'react';
import { Switch , Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage.component';

const HatsPAge =()=>(
  <div>
  <h1>Hats PAge</h1>
  </div>
)




function App() {
  return (
    <Switch>
    <Route exact path='/' component={Homepage}/>
     <Route exact path='/hats' component={HatsPAge}/>
    </Switch>

  );
}

export default App;
