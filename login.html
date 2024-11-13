import React, { useState } from 'react';
import styled from 'styled-components';
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCnPhyDuGi1fjRv10SmO6ly1fkCyk6HTJY",
    authDomain: "sose-5c1f0.firebaseapp.com",
    projectId: "sose-5c1f0",
    storageBucket: "sose-5c1f0.appspot.com",
    messagingSenderId: "397548429308",
    appId: "1:397548429308:web:cb37582315661cafda9c79",
    measurementId: "G-EPWEK3N56V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Form = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successful!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Sign Up Successful!");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <StyledWrapper>
      <div className="container">
        <div className="form_area">
          <p className="title">{isLogin ? "LOGIN" : "SIGN UP"}</p>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form_group">
                <label className="sub_title" htmlFor="name">Name</label>
                <input
                  placeholder="Enter your full name"
                  className="form_style"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="form_group">
              <label className="sub_title" htmlFor="email">Email</label>
              <input
                placeholder="Enter your email"
                id="email"
                className="form_style"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="password">Password</label>
              <input
                placeholder="Enter your password"
                id="password"
                className="form_style"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button className="btn" type="submit">{isLogin ? "LOGIN" : "SIGN UP"}</button>
              <p>
                {isLogin ? "Don't have an account?" : "Have an account?"}{" "}
                <span className="link" onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? "Sign Up Here!" : "Login Here!"}
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  .form_area {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #EDDCD9;
    height: auto;
    width: auto;
    border: 2px solid #264143;
    border-radius: 20px;
    box-shadow: 3px 4px 0px 1px #E99F4C;
  }

  .title {
    color: #264143;
    font-weight: 900;
    font-size: 1.5em;
    margin-top: 20px;
  }

  .sub_title {
    font-weight: 600;
    margin: 5px 0;
  }

  .form_group {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin: 10px;
  }

  .form_style {
    outline: none;
    border: 2px solid #264143;
    box-shadow: 3px 4px 0px 1px #E99F4C;
    width: 290px;
    padding: 12px 10px;
    border-radius: 4px;
    font-size: 15px;
  }

  .form_style:focus, .btn:focus {
    transform: translateY(4px);
    box-shadow: 1px 2px 0px 0px #E99F4C;
  }

  .btn {
    padding: 15px;
    margin: 25px 0px;
    width: 290px;
    font-size: 15px;
    background: #DE5499;
    border-radius: 10px;
    font-weight: 800;
    box-shadow: 3px 3px 0px 0px #E99F4C;
  }

  .btn:hover {
    opacity: .9;
  }

  .link {
    font-weight: 800;
    color: #264143;
    cursor: pointer;
    padding: 5px;
  }
`;

export default Form;
