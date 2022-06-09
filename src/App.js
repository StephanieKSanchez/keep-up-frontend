import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import "./App.css";
import DestinationList from "./components/DestinationList";
import Menubar from "./components/Menubar";

function App() {
  return (
    <Layout className="layout">
      <Header>
        <Menubar />
      </Header>
      <Content>
        <DestinationList />
      </Content>
    </Layout>
  );
}

export default App;
