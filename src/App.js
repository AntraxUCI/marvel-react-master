import React from 'react'
import ReactDOM from 'react-dom'



import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Comics from './pages/Comics';
import Error404 from './pages/Error404';

function App() {
  return (
     <div>
       <Router>
        <Switch>
          <Route path='/'  exact component={()=><Home/>}/>
          <Route path='/inicio'  component={()=><Home/>}/>
          <Route path='/series'  component={()=><Series/>}/>
          <Route path='/comics'  exact component={()=><Comics/>}/>
          <Route component={()=><Error404/>}/>
          </Switch>
       </Router>
     </div>
  );
}

export default App;
