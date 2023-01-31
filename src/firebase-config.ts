import { initializeApp } from 'firebase/app'
import { getFirestore, collection, CollectionReference, Timestamp } from 'firebase/firestore'
import { BasicOperation, MathAnswer } from 'types/mathTypes'

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

export type RecordType = {
    answerList: MathAnswer[]
    correctAnswerNo: number
    createdAt: Timestamp
    testCategory: string
    testDuration: number
    testLength: number
    testType: BasicOperation
    testRange: [number, number]
    userName: string
}

export type RecordTypeWithId = RecordType & {
    id: string
}

export const recordsCollection = collection(db, 'records') as CollectionReference<RecordTypeWithId>
