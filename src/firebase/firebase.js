import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./config";

const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

export default firebase;
