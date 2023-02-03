import { initializeApp } from 'firebase/app'
import { getFirestore, collection, CollectionReference } from 'firebase/firestore'
import { RecordTypeWithId } from 'types/appTypes'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const recordsCollection = collection(db, 'records') as CollectionReference<RecordTypeWithId>
