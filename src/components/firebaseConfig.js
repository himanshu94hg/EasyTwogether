import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyD3OjkmWyxbWp7XRRCLmKbfprrjhpcSe_c",
  authDomain: "easy-twogether-project.firebaseapp.com",
  projectId: "easy-twogether-project",
  storageBucket: "easy-twogether-project.appspot.com",
  messagingSenderId: "299056591348",
  appId: "1:299056591348:web:ee72e2391fda78460889a1",
  measurementId: "G-HRQXSB094X"
})

export const auth = app.auth()
export default app