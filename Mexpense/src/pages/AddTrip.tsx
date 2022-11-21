import { IonButton, IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { insertTrip } from '../DatabaseHelper';
import { Trip } from '../models/Trip';



const AddTrip: React.FC = () => {
  const[name,setName] = useState('')
  const[destination,setDestination] = useState('')
  const[startdate,setStartDate] = useState('')
  const[endDate,setEndDate] = useState('')
  const[risk,setRisk] = useState("")
  const[transportation,setTransportation] = useState('')
  const[description,setDescription] = useState('')

  async function addTrip() {
    // add trip

    if (!name || !destination || !startdate || !endDate || !risk || !transportation || !description ) {
        alert('Please enter all fields in RED color')
        return;
    } else {
        const newTrip: Trip  = {
            name: name, destination: destination,
            startdate: startdate, enddate: endDate, transportation: transportation, risk : risk,
            description: description
        }
        await insertTrip(newTrip);
        alert('Added ' + name + ' trip!' );
        console.log("add success");
        
    }
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Trip management!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel>Name: </IonLabel>
          <IonInput onIonChange={e => setName(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Destination: </IonLabel>
          <IonInput onIonChange={e => setDestination(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>StartDate: </IonLabel>
          <IonDatetime onIonChange={e => setStartDate(e.detail.value!.toString())}></IonDatetime>
        </IonItem>
        <IonItem>
          <IonLabel>EndDate: </IonLabel>
          <IonDatetime onIonChange={e => setEndDate(e.detail.value!.toString())}></IonDatetime>
        </IonItem>
      
        <IonItem>
                    <IonLabel color="danger">•	Requires risk assessment:</IonLabel>
                    <IonSelect placeholder="Select One" onIonChange={e => setRisk(e.detail.value)} >
                        <IonSelectOption value="Yes">Yes</IonSelectOption>
                        <IonSelectOption value="No">No</IonSelectOption>
                    </IonSelect>
                </IonItem>  
        <IonItem>
          <IonLabel>Transportation: </IonLabel>
          <IonInput onIonChange={e => setTransportation(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Description: </IonLabel>
          <IonInput onIonChange={e => setDescription(e.detail.value!)}></IonInput>
        </IonItem>

        <IonButton onClick={addTrip} expand='block' class='ion-margin'>Save</IonButton>  
      </IonContent>

    </IonPage>
  );
};

export default AddTrip;
