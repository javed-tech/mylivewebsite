import './App.css';
import'./index.css' 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {Switch,Route, Redirect} from 'react-router-dom'
import Student from './components/Student'
import Lession from './components/Lession';
import Setting from './components/Setting';
import Common from './components/Common';
function App() {
  return (
    <>
      <Switch>
      <Route exact path="/" component={Common} />
          <Route exact path="/Student" component={Student} />
          <Route exact path="/Lession" component={Lession} />
          <Route exact path="/Setting" component={Setting} />
          <Redirect to="/"/>
      </Switch>
    </>
  );
}

export default App;
