import React, { useEffect } from 'react'
import Posting from '../components/Posting';
import { useState } from 'react';
import { User, getUsers } from '../data/users';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonThumbnail,
  IonImg,
  IonLabel
} from '@ionic/react';
import './Home.css';
import styled from 'styled-components';




const Home: React.FC = () => {

  const [input, setInput] = useState<string>('')

  useEffect(() =>{
    console.log(input)
  }, [input])

  // type Item= {
  //   src: string;
  //   text: string;
  // };

  return (
    <IonPage id="home-page">
      <IonHeader>
        {/* <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar> */}
      </IonHeader>
      {/* <IonTitle>Roomate</IonTitle> */}
      <IonContent className="ion-padding">
        <IonImg src="assets/title-screen.png" class="center"></IonImg>
        <IonButton routerLink="/login" color="primary" class="center">Login</IonButton>
        <IonButton routerLink="/register" color="primary" class="center">Register</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
