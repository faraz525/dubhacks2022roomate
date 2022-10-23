import Posting from '../components/Posting';
import { useState } from 'react';
import { User, getUsers } from '../data/users';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import { useForm, Controller } from 'react-hook-form';

const Home: React.FC = () => {

  const [users, setUsers] = useState<User[]>([]);

  useIonViewWillEnter(() => {
    const users = getUsers();
    setUsers(users);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  // for the popup when the user wants to create a new posting
  const [myModal, setMyModal] = useState({isOpen:false});
  
  // initial values for posting input form fields
  const initialValues = {
    subject: '',
    item: '',
    timeNeeded: '',
    user: ''
  };

  // for the create new postings form
  const { handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialValues
  });

  // use to set the content that the user enters for their posting
  const [subject, setSubject] = useState();
  const [item, setItem] = useState();
  const [timeNeededBy, setTimeNeededBy] = useState();

  // save the contents of the "Create New Posting" form
  const saveClicked = () => {
    alert("Subject: " + JSON.stringify(subject) + "\n" + "Item: " + JSON.stringify(item) + "\n" + "Time Needed By: " + JSON.stringify(timeNeededBy));
  }

  // what happens when the user submits their new posting form
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  }

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Roomate</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Postings
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {users.map(u => <Posting key={u.email} user={u} />)}
        </IonList>

        <IonModal isOpen={myModal.isOpen}>
          <h1>New Posting</h1>

          <IonCard>
            <form onSubmit={handleSubmit(onSubmit)}>
              <IonCardContent>
                <IonItem>
                  <IonLabel>Post Subject:</IonLabel>
                  <IonInput
                    type="text"
                    name="subject"
                    onIonChange={(e: any) => setSubject(e.target.value)}
                  />
                </IonItem>

                <IonItem>
                  <IonLabel>Item:</IonLabel>
                  <IonInput
                    type="text"
                    name="item"
                    onIonChange={(e: any) => setItem(e.target.value)}
                  />
                </IonItem>

                <IonItem>
                  <IonLabel>Time Needed By:</IonLabel>
                  <IonSelect onIonChange={(e: any) => setTimeNeededBy(e.target.value)}>
                    <IonSelectOption value="12:00AM">12:00 AM</IonSelectOption>
                    <IonSelectOption value="12:30AM">12:30 AM</IonSelectOption>
                    <IonSelectOption value="1:00AM">1:00 AM</IonSelectOption>
                    <IonSelectOption value="1:30AM">1:30 AM</IonSelectOption>
                    <IonSelectOption value="2:00AM">2:00 AM</IonSelectOption>
                    <IonSelectOption value="2:30AM">2:30 AM</IonSelectOption>
                    <IonSelectOption value="3:00AM">3:00 AM</IonSelectOption>
                    <IonSelectOption value="3:30AM">3:30 AM</IonSelectOption>
                    <IonSelectOption value="4:00AM">4:00 AM</IonSelectOption>
                    <IonSelectOption value="4:30AM">4:30 AM</IonSelectOption>
                    <IonSelectOption value="5:00AM">5:00 AM</IonSelectOption>
                    <IonSelectOption value="5:30AM">5:30 AM</IonSelectOption>
                    <IonSelectOption value="6:00AM">6:00 AM</IonSelectOption>
                    <IonSelectOption value="6:30AM">6:30 AM</IonSelectOption>
                    <IonSelectOption value="7:00AM">7:00 AM</IonSelectOption>
                    <IonSelectOption value="7:30AM">7:30 AM</IonSelectOption>
                    <IonSelectOption value="8:00AM">8:00 AM</IonSelectOption>
                    <IonSelectOption value="8:30AM">8:30 AM</IonSelectOption>
                    <IonSelectOption value="9:00AM">9:00 AM</IonSelectOption>
                    <IonSelectOption value="9:30AM">9:30 AM</IonSelectOption>
                    <IonSelectOption value="10:00AM">10:00 AM</IonSelectOption>
                    <IonSelectOption value="10:30AM">10:30 AM</IonSelectOption>
                    <IonSelectOption value="11:00AM">11:00 AM</IonSelectOption>
                    <IonSelectOption value="11:30AM">11:30 AM</IonSelectOption>
                    <IonSelectOption value="12:00PM">12:00 PM</IonSelectOption>
                    <IonSelectOption value="12:30PM">12:30 PM</IonSelectOption>
                    <IonSelectOption value="1:00PM">1:00 PM</IonSelectOption>
                    <IonSelectOption value="1:30PM">1:30 PM</IonSelectOption>
                    <IonSelectOption value="2:00PM">2:00 PM</IonSelectOption>
                    <IonSelectOption value="2:30PM">2:30 PM</IonSelectOption>
                    <IonSelectOption value="3:00PM">3:00 PM</IonSelectOption>
                    <IonSelectOption value="3:30PM">3:30 PM</IonSelectOption>
                    <IonSelectOption value="4:00PM">4:00 PM</IonSelectOption>
                    <IonSelectOption value="4:30PM">4:30 PM</IonSelectOption>
                    <IonSelectOption value="5:00PM">5:00 PM</IonSelectOption>
                    <IonSelectOption value="5:30PM">5:30 PM</IonSelectOption>
                    <IonSelectOption value="6:00PM">6:00 PM</IonSelectOption>
                    <IonSelectOption value="6:30PM">6:30 PM</IonSelectOption>
                    <IonSelectOption value="7:00PM">7:00 PM</IonSelectOption>
                    <IonSelectOption value="7:30PM">7:30 PM</IonSelectOption>
                    <IonSelectOption value="8:00PM">8:00 PM</IonSelectOption>
                    <IonSelectOption value="8:30PM">8:30 PM</IonSelectOption>
                    <IonSelectOption value="9:00PM">9:00 PM</IonSelectOption>
                    <IonSelectOption value="9:30PM">9:30 PM</IonSelectOption>
                    <IonSelectOption value="10:00PM">10:00 PM</IonSelectOption>
                    <IonSelectOption value="10:30PM">10:30 PM</IonSelectOption>
                    <IonSelectOption value="11:00PM">11:00 PM</IonSelectOption>
                    <IonSelectOption value="11:30PM">11:30 PM</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCardContent>
            </form>
          </IonCard>

          <IonButton color="tertiary" onClick={() => saveClicked()}>Post</IonButton>

          <IonButton color="danger" onClick={() => setMyModal({isOpen:false})}>Cancel</IonButton>
        </IonModal>

        <IonButton color="primary" onClick={() => setMyModal({isOpen:true})}>Create new posting...</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;