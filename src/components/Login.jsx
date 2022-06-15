import { initializeApp } from "firebase/app";
import { useContext } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Button, Form, Input } from "antd";
import { UserContext } from "../App";

const firebaseConfig = {
  apiKey: "AIzaSyDyL4LqoosWiEjj8not4UfM1GACTP8esa0",
  authDomain: "keep-up-sks.firebaseapp.com",
  projectId: "keep-up-sks",
  storageBucket: "keep-up-sks.appspot.com",
  messagingSenderId: "783721153247",
  appId: "1:783721153247:web:f2260d3fd0ba60a0445f6a",
  measurementId: "G-TNCEYHZMV0",
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
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter a valid email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button onClick={handleGoogleLogin}>Google Login</Button>
        </Form.Item>
      </Form>
    </section>
  );
}
