import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/AddExpense';

import Tab3 from './pages/ShowTrip';


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
import AddTrip from './pages/AddTrip';
import AddExpense from './pages/AddExpense';
import ShowTrip from './pages/ShowTrip';
import ShowExpense from './pages/ShowExpense';
import DetailExpense from './pages/DetailExpense';
import DetailTrip from './pages/DetailTrip';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/AddExpense">
            <AddExpense />
          </Route>
          <Route exact path="/AddTrip">
            <AddTrip />
          </Route>
          <Route path="/ShowTrip">
            <ShowTrip />
          </Route>
          <Route path="/ShowExpense">
            <ShowExpense />
          </Route>
          <Route exact path="/">
            <Redirect to="/ShowTrip" />
          </Route>
        <Route exact path="/detailexpense/:id">
          <DetailExpense/>
        </Route>
        <Route exact path="/detailtrip/:id">
          <DetailTrip/>

        </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="addexpense" href="/AddExpense">
            <IonIcon icon={triangle} />
            <IonLabel>AddExpense</IonLabel>
          </IonTabButton>
          <IonTabButton tab="addtrip" href="/AddTrip">
            <IonIcon icon={ellipse} />
            <IonLabel>AddTrip</IonLabel>
          </IonTabButton>
          <IonTabButton tab="showtrip" href="/ShowTrip">
            <IonIcon icon={square} />
            <IonLabel>ShowTrip</IonLabel>
          </IonTabButton>

          <IonTabButton tab="showExpense" href="/ShowExpense">
            <IonIcon icon={square} />
            <IonLabel>ShowExpense</IonLabel>
          </IonTabButton>

          
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
