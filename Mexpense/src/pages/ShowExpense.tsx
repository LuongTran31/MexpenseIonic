import { IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { Expense } from '../models/Expense';
import { getAllExpense } from '../ExpenseDataHelper';
import { Trip } from '../models/Trip';
import { getAllTrip } from '../DatabaseHelper';

const ShowExpense: React.FC = () => {
    const [allExpense,setAllExpense] = useState<Expense[]>([])
    const [tripname, setAllTripName] = useState<Trip[]>([])
    const fetchData = async () => {
        const data = await getAllExpense()
        setAllExpense(data)
      }
      useEffect(() => {
        fetchData();
    }, [])
    const fetchData1 = async () => {
        const data = await getAllTrip()
        setAllTripName(data)
      }
      useEffect(() => {
        fetchData1();
    }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Show Expense</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent>
     {allExpense &&
          <IonList>
            {allExpense.map(c =>
              <IonItem  button  routerLink={'detailexpense/' + c.id} key={c.id}>
                
                <IonLabel>
                   Expense name: {c.expense} 
                  <IonLabel>Amount: {c.amount}</IonLabel>      
                  <IonLabel>Time :{c.time}</IonLabel>      
                  <IonLabel>Trip Name: {c.tripname}</IonLabel>
                </IonLabel>               
              </IonItem>
            )}
          </IonList>
          }
            
            
    
        
    </IonContent>
    
    </IonPage>
  );
};

export default ShowExpense;