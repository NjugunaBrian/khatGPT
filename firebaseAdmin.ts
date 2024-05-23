import firebaseAdmin from "firebase-admin"
import { getApps } from "firebase-admin/app";  


const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string);

if (!getApps().length){
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount)
    })
}

const adminDb  = firebaseAdmin.firestore();

export { adminDb };