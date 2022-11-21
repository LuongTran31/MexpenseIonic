import { IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { Trip } from '../models/Trip';
import { getAllTrip } from '../DatabaseHelper';

const ShowTrip: React.FC = () => {
  const [allTrip, setAllTrip] = useState<Trip[]>([])

  const fetchData = async () => {
    const data = await getAllTrip()
    setAllTrip(data)
  }
  useEffect(() => {
    fetchData();
}, [])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Show Trip</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {allTrip &&
          <IonList>
            {allTrip.map(c =>
              <IonItem routerLink={'/detailtrip/' + c.id} key={c.id}>
                <IonLabel>
                  {c.name} 
                  <IonLabel>{c.destination}</IonLabel>      
                  <IonLabel>{c.startdate}</IonLabel>      
                </IonLabel>               
              </IonItem>
            )}
          </IonList>
        }</IonContent>
    </IonPage>
  );
};

export default ShowTrip;
