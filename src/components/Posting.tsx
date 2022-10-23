import {
    IonButton,
    IonItem,
    IonLabel,
    } from '@ionic/react';
  import { User } from '../data/users';
  import './Posting.css';
  
  interface PostingProps {
    user: User;
  }
  
  const Posting: React.FC<PostingProps> = ({ user }) => {
    return (
      <div>
        <IonItem routerLink={`/message/${user.email}`} detail={false}>
          <div slot="start" className="dot dot-unread"></div>
          <IonLabel className="ion-text-wrap">
            <h2>
              {user.firstName} {user.lastName}<br></br>
              Subject: need asap!<br></br>
              Item needed: screwdriver<br></br>
              Need by: 4:30pm.<br></br>
            </h2>
            <IonButton color="success">Accept</IonButton>
          </IonLabel>
        </IonItem>
      </div>
    );
  };
  
  export default Posting;