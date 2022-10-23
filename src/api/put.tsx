import { db } from "../config/firebase";
import { getDatabase, push, get, ref, set } from "firebase/database";


class apiService {

    signup(userID: string, password: string, firstName: string, lastName: string, buildingCode: string) {
        set(ref(db, 'users/' + userID), {
            firstName: firstName,
            lastName: lastName,
            password: password
        });
    }

    getAllUsers() {
        const data = get(ref(db, 'users/'));
        return data;
    }
    
  
   
  }
  
  export default new apiService();