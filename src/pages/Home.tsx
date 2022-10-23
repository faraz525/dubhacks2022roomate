import React, { useEffect } from 'react'
import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
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
        <IonImg src="assets/homepage.png" class="center"></IonImg>
        <IonButton routerLink="/login" color="primary" class="center">Login</IonButton>
        <IonButton routerLink="/register" color="primary" class="center">Register</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
