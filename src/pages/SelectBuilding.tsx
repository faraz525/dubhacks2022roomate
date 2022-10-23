import React from 'react';
import { useState } from 'react';
import { IonToolbar, IonInput, IonButton, IonItem, IonLabel, IonList, IonTitle, IonTextarea, IonPage, IonContent, IonHeader, } from '@ionic/react';

const SelectBuilding: React.FC = () => {
  const [building, setBuilding] = useState('')
  
  function selectBuilding() {
    console.log(building)
  }

  return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Select Building</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          placeholder="Please enter building name"
          onIonChange={(e: any) => setBuilding(e.target.value)}
        />
        <IonButton onClick={selectBuilding} routerLink ="/allpostings">Select Building</IonButton>
      </IonContent>
    </IonPage>
  )
}
export default SelectBuilding