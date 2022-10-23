import { db } from "../../config/firebase"
import { getDatabase, push, ref, set } from "firebase/database";

// API that allows a user to sign up and stores their information
export default async (userID: string, password: string, firstName: string, lastName: string, buildingCode: string) => {
    set(ref(db, 'users/' + userID), {
        firstName: firstName,
        lastName: lastName,
        buildings: [buildingCode],
        password: password
    })
};