import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import 'firebase/database'; 
import 'firebase/storage'; 
import Collezone from './component/Collezone';
import { login, logout, selectUser } from './features/userSlice';
import Login from "./component/auth/Login";
import { auth } from './firebase';
function App() 
{

  
  const user = useSelector(selectUser)
 
  const dispatch = useDispatch()
  

  useEffect(() =>
  {
    auth.onAuthStateChanged((authUser)=>{
     
       if(authUser){
         dispatch(

           login({
            uid : authUser.uid,
            photo : authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email
         }))
         
       } 
       else {
         dispatch(logout())
       }

    })

    
  } ,[dispatch])

  return (
    <div className="App">
      {
        user ? (<Collezone/>) : (<Login/>)
      }
      
      
    </div>
  );
}

export default App;
