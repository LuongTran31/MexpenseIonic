import {
    IonBackButton, IonButton, IonButtons, IonContent, IonDatetime, IonHeader,
    IonIcon, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption,
    IonTextarea, IonTitle, IonToolbar
} from '@ionic/react';
import { trash } from 'ionicons/icons';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { deleteExpense, getExpenseById } from '../ExpenseDataHelper';
import { Expense } from '../models/Expense';

interface IdParam {
        id: string
    }
const DetailExpense: React.FC = () => {
    const [expense,setExpense] = useState('')
    const [time, setTime] = useState('')
    const [amount, setAmount] = useState('')
    const [comment, setComment] = useState('')
    const [tripname, setTripName] = useState('')
      

    const { id } = useParams<IdParam>()

    async function fetchData() {
        const result = await getExpenseById(Number.parseInt(id)) as Expense;
        setExpense(result.expense);
        setTime(result.time);
        setAmount(result.amount);
        setComment(result.comment);
        setTripName(result.tripname);
    }
    async function deleteExpenseById() {
        
        await deleteExpense(Number.parseInt(id));
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
                <IonLabel>Expense name: </IonLabel>
                    <IonInput value={expense} onIonChange={e => setExpense(e.detail.value!)} ></IonInput>
                </IonItem>
                <IonItem>
                <IonLabel>Amout: </IonLabel>
                    <IonInput value={amount} onIonChange={e => setExpense(e.detail.value!)} ></IonInput>
                </IonItem>
                <IonItem>
                <IonLabel>time: </IonLabel>
                    <IonInput value={time} onIonChange={e => setExpense(e.detail.value!)} ></IonInput>
                </IonItem>
                <IonItem>
                <IonLabel>comment: </IonLabel>
                    <IonInput value={comment} onIonChange={e => setExpense(e.detail.value!)} ></IonInput>
                </IonItem>
                <IonItem>
                <IonLabel>trip name: </IonLabel>
                    <IonInput value={tripname} onIonChange={e => setExpense(e.detail.value!)} ></IonInput>
                </IonItem>

                   
                    </IonContent> 
                      <IonButton color="danger" onClick={deleteExpenseById}  routerLink={'/showexpense'} slot="end" >
                        Delete 
                    </IonButton>
                    </IonPage>
    )
};
export default DetailExpense;
