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
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [buildingCode, setBuildingCode] = useState()

    function registerUser(){
        console.log(username, password, firstName, lastName, buildingCode)
    }
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Register</IonTitle>
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
                    <IonItem>
                        <IonLabel>First Name</IonLabel>
                        <IonInput 
                        placeholder="first name" 
                        onIonChange={(e: any) => setFirstName(e.target.value)}
                    />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Last Name</IonLabel>
                        <IonInput 
                        placeholder="last name" 
                        onIonChange={(e: any) => setLastName(e.target.value)}
                    />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Building Code</IonLabel>
                        <IonInput 
                        placeholder="enter building code" 
                        onIonChange={(e: any) => setBuildingCode(e.target.value)}
                    />
                    </IonItem>
                </IonList>
                <IonButton onClick={registerUser}>Login</IonButton>

                <p>Already have an account? <Link to="/login">Login</Link></p>
            </IonContent>
        </IonPage>
    )
}

export default Home