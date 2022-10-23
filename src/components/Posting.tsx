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
              Subject: {user.subject}<br></br>
              Item needed: {user.itemNeeded}<br></br>
              Need by: {user.needBy}<br></br>
            </h2>
            <IonButton color="success">Accept</IonButton>
          </IonLabel>
        </IonItem>
      </div>
    );
  };
  
  export default Posting;