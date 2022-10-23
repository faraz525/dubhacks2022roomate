import { useEffect, useState } from 'react';
import { User, getUser } from '../data/users';
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
import {login} from '../config/firebase.js';
import { toast } from '../toast';

const Home: React.FC = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    var check = true


    
    async function loginUser() {
        
        const res = await login(username, password)
        console.log(res)
        if(!res){
            alert("Login failed")
        }
        console.log(`${res ? 'Login success': 'Login failed'}`);
    }

    const doRedirect = (res: boolean| undefined) => {
        if (res) {
          return 'selectbuilding';
        } else{
            return 'login';
        }
      }
      

    return(
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
                <IonButton onClick={loginUser} routerLink = {doRedirect(check)}>Login</IonButton>
                {/* <IonButton onClick={loginUser} routerLink = "/selectbuilding">Login</IonButton>
                <p>Don't have an account?</p> */}
                <p><Link to="/register">Sign Up</Link></p>
            </IonContent>
        </IonPage>
    )
}

export default Home