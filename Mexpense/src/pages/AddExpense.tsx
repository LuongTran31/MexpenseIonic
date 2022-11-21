import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { getAllTrip } from '../DatabaseHelper';
import { insertExpense } from '../ExpenseDataHelper';
import { Expense } from '../models/Expense';
import { Trip } from '../models/Trip';


const AddExpense: React.FC = () => {
  const[expense,setExpense] = useState('')
  const[time,setTime] = useState('')
  const[amount,setAmount] = useState('')
  const[comment,setComment] = useState('')
  const[tripname,setTripName] = useState('')
  const[name,setName] = useState<Trip[]>([])
 const [taketripname, setAllTripName] = useState<Trip[]>([])
 const fetchData1 = async () => {
  const data = await getAllTrip()
  setAllTripName(data)
}
useEffect(() => {
  fetchData1();
}, [])
  async function addExpense() {
    // add trip

    if (!expense || !time || !amount || !comment || !tripname ) {
        alert('Please enter all fields in RED color')
        return;
    } else {
        const newExpense: Expense  = {
          expense: expense, time: time,
          amount: amount, comment: comment, tripname:tripname
        }
        await insertExpense(newExpense);
        alert('Added ' + expense + ' expense!' );
        console.log("add success");
        
    }
  }
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar color="secondary">
          <IonTitle>Expense Trip!</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonList> {taketripname &&
            <IonItem> 
                <IonLabel>Trip Name:</IonLabel>
                <IonItem>
                    <IonSelect onIonChange={e => setTripName(e.detail.value)} placeholder="Select One" > 
                    {taketripname.map(c =>
                        <IonSelectOption key ={c.id}>{c.name}</IonSelectOption>
                        )} 
                    </IonSelect> 
                    
                    </IonItem>
                   
                </IonItem>         
}
                </IonList>
        <IonItem>
          <IonLabel>ExpenseName : </IonLabel>
          <IonInput onIonChange={e => setExpense(e.detail.value!)}></IonInput>
        </IonItem>
      <IonItem>
          <IonLabel>Time: </IonLabel>
          <IonInput onIonChange={e => setTime(e.detail.value!)}></IonInput>
        </IonItem>  
        <IonItem>
          <IonLabel>Amount: </IonLabel>
          <IonInput onIonChange={e => setAmount(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Comment: </IonLabel>
          <IonInput onIonChange={e => setComment(e.detail.value!)}></IonInput>
        </IonItem>
      
        <IonButton onClick={addExpense} expand='block' class='ion-margin'>Save</IonButton>  
       
          </IonContent>
    </IonPage>
  );
};

export default AddExpense;
