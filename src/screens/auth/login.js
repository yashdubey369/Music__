import React from "react";
import { loginEndpoint } from "../../spotify";
import "./login.css";
export default function Login() {
//   let n=800;
//    let sec=document.querySelector('section');
//    let s=0;
//    while(s<n){
//     let d=document.createElement('span');
//     sec.appendChild(d);
//     s++;
// }

  return (
    <section>
      <div className="login-page">
        <a href={loginEndpoint}>
          <div className="login-btn">Log in</div>
        </a>
      </div>
    </section>
  );
}
