import {  Provider, useDispatch } from "react-redux";
import store from "./redux/store"
import Body from "./components/Body";
import { useEffect } from "react";
import { addUser } from "./redux/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";

function App() {
const dispatch = useDispatch()
  useEffect(() => {
   const unscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
        
      }
    });

  } , [])

  return (
    <div>
     
        <Body />
     
    </div>
  );
}

export default App
