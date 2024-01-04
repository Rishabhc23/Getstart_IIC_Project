import React from "react";
import GetstartLogo from "../assets/favicon1.png";
import "../Sass/ForgotPasswordComponent.scss";
import { sendPasswordResetEmail } from "firebase/auth";
import { database } from "../firebaseConfig";


export default function ForgotPasswordComponent() {

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const emalVal = e.target.email.value;
    sendPasswordResetEmail(database, emalVal).then(data=>{
          alert("Check your Email")
    }).catch(err=>{
      alert(err.code)
    })
  }
  return (
    <div className="login-wrapper">
      <img src={GetstartLogo} className="getstartLogo" />
      <div className="App">
        <h1>Forgot Password</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <input name="email" /><br/>
          <button>Reset</button>
        </form>
      </div>
    </div>
  );
}
