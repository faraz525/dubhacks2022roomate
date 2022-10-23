import { useEffect, useState } from 'react';
import { Message, getMessage } from '../data/messages';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { Link } from 'react-router-dom'
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';

const Home: React.FC = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    function loginUser(){
        console.log(username, password)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Roommate</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    <IonItem>
                        <IonLabel>Email</IonLabel>
                        <IonInput 
                        placeholder="enter email" 
                        onIonChange={(e: any) => setUsername(e.target.value)}
                    />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Password</IonLabel>
                        <IonInput 
                            type="password"
                            placeholder="enter password" 
                            onIonChange={(e: any) => setPassword(e.target.value)}
                        />
                    </IonItem>
                </IonList>
                <IonButton onClick={loginUser} routerLink ="/selectbuilding">Login</IonButton>
                <p>Don't have an account?</p>
                <p><Link to="/register">Sign Up</Link></p>
            </IonContent>
        </IonPage>
    )
}

export default Home