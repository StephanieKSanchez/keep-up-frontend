import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DestinationList from "./components/DestinationList";
import Menubar from "./components/Menubar";

function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header>
          <Menubar />
        </Header>
        <Content>
          <Routes>
            <Route path="/add" element={<h1>Add Destination </h1>} />
            <Route path="/login" element={<h1>Login </h1>} />
            <Route path="/" element={<DestinationList />} />
            <Route path="/*" element={<h1>Invalid Request</h1>} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
