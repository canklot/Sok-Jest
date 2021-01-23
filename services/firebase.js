import firebase from "firebase/app"
import "firebase/auth"

const config={
    apiKey: "AIzaSyBfyiqPmnNbxjoV3jUnOyuAgq6MG83aIiA",
    authDomain: "sok-market-1d4d1.firebaseapp.com",
    projectId: "sok-market-1d4d1",
    storageBucket: "sok-market-1d4d1.appspot.com",
    messagingSenderId: "280915402606",
    appId: "1:280915402606:web:82c751ad284ba0bdb7ab7f"
  }

  !firebase.apps.length ? firebase.initializeApp(config):"";
  export const auth =firebase.auth();