import {
    IonBackButton, IonButton, IonButtons, IonContent, IonDatetime, IonHeader,
    IonIcon, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption,
    IonTextarea, IonTitle, IonToolbar
} from '@ionic/react';
import { trash } from 'ionicons/icons';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { deleteTrip, getTripById } from '../DatabaseHelper';

import { Trip } from '../models/Trip';

interface IdParam {
        id: string
    }
const DetailTrip: React.FC = () => {
    const[Name,setName] = useState('')
    const[Destination,setDestination] = useState('')
    const[startDate,setStartDate] = useState('')
    const[endDate,setEndDate] = useState('')
    const[Risk,setRisk] = useState("")
    const[Transportation,setTransportation] = useState('')
    const[Description,setDescription] = useState('')
      

    const { id } = useParams<IdParam>()

    async function fetchData() {
        const result = await getTripById(Number.parseInt(id)) as Trip;
        setName(result.name);
        setDestination(result.destination);
        setStartDate(result.startdate);
        setEndDate(result.enddate);
        setRisk(result.risk);
        setTransportation(result.transportation);
        setDescription(result.description);
    }

    async function deteletTripById() {
        
        await deleteTrip(Number.parseInt(id));
        alert(id + "is deleted!");
        
    }

    useEffect(() => {
        fetchData();
    }, [])
    
    return (
        <IonPage>
        <IonHeader>                 
                    <IonTitle>Detail of {id}</IonTitle>
            </IonHeader>
           
            <IonContent>
                 <IonItem>
                <IonLabel>trip name: </IonLabel>
                    <IonInput value={Name} onIonChange={e => setName(e.detail.value!)} ></IonInput>
                </IonItem>
                <IonItem>
                <IonLabel>Destination: </IonLabel>
                    <IonInput value={Destination} onIonChange={e => setDestination(e.detail.value!)} ></IonInput>
                </IonItem>
                <IonItem>
                <IonLabel>Start Date: </IonLabel>
                    <IonInput value={startDate} onIonChange={e => setStartDate(e.detail.value!)} ></IonInput>
                </IonItem>
                <IonItem>
                <IonLabel>End Date: </IonLabel>
                    <IonInput value={endDate} onIonChange={e => setEndDate(e.detail.value!)} ></IonInput>
                </IonItem>
                <IonItem>
                <IonLabel>Risk: </IonLabel>
                    <IonInput value={Risk} onIonChange={e => setRisk(e.detail.value!)} ></IonInput>
                </IonItem>
                <IonItem>
                <IonLabel>Tranportation: </IonLabel>
                    <IonInput value={Transportation} onIonChange={e => setTransportation(e.detail.value!)} ></IonInput>
                </IonItem>
                <IonItem>
                <IonLabel>Description: </IonLabel>
                    <IonInput value={Description}  onIonChange={e => setDescription(e.detail.value!)} ></IonInput>
                </IonItem>

                   
                    </IonContent> 
                      <IonButton color="danger" onClick={deteletTripById}  routerLink={'/showtrip'} slot="end" >
                        Delete 
                    </IonButton>
                    </IonPage>
    )
};
export default DetailTrip;