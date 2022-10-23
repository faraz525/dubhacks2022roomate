import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SelectBuilding from './pages/SelectBuilding';
import AllPostings from './pages/AllPostings';
import ViewMessage from './pages/ViewMessage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { displayAll, login, signup } from "./config/firebase";

setupIonicReact();
console.log("test");
displayAll();
login("pookie@gmail.com", "pass");
signup("faraz@gmail.com", "pass", "faraz", "qurs", "maple");

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={Home} exact/>
        <Route path ="/login" component = {Login} exact/>
        <Route path ="/register" component = {Register} exact/>
        <Route path="/selectbuilding" component = {SelectBuilding} exact/>
        <Route path="/allpostings" component = {AllPostings} exact/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
