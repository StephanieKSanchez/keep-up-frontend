import { initializeApp } from "firebase/app";
import { useContext } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Button, Form } from "antd";
import { UserContext } from "../App";
import GoogleButton from "react-google-button";
import "../styling/login.css";

const firebaseConfig = {
  apiKey: "AIzaSyDyL4LqoosWiEjj8not4UfM1GACTP8esa0",
  authDomain: "keep-up-sks.firebaseapp.com",
  projectId: "keep-up-sks",
  storageBucket: "keep-up-sks.appspot.com",
  messagingSenderId: "783721153247",
  appId: "1:783721153247:web:f2260d3fd0ba60a0445f6a",
};

export default function Login() {
  const { setUser } = useContext(UserContext);
  const handleLogin = ({ email, password }) => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => setUser(res.user))
      .catch(console.error);
  };
  const handleGoogleLogin = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => setUser(res.user))
      .catch(console.error);
  };
  return (
    <section style={{ padding: "2em" }}>
      <Form
        onFinish={handleLogin}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <h1 className="welcome">Welcome to Keep Up</h1>
          <p className="signin">Please sign in below to get started</p>
          <GoogleButton onClick={handleGoogleLogin} className="google-button">
            Sign In with Google
          </GoogleButton>
        </Form.Item>
      </Form>
    </section>
  );
}
