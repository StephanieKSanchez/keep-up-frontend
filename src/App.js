import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddDestination from "./components/AddDestination";
import DestinationList from "./components/DestinationList";
// import DestinationPage from "./components/DestinationPage";
import Menubar from "./components/Menubar";
import { DestinationsContextProvider } from "./components/DestinationContext";
import DetailsPage from "./components/DetailsPage";
import DestinationPage from "./components/DestinationPage";

function App() {
  return (
    <BrowserRouter>
      <DestinationsContextProvider>
        <Layout className="layout">
          <Header>
            <Menubar />
          </Header>
          <Content>
            <Routes>
              <Route
                path="/destinations/:destinationId"
                element={<DestinationPage />}
              />
              <Route path="/add" element={<AddDestination />} />
              <Route path="/login" element={<h1>Login </h1>} />
              <Route path="/" element={<DestinationList />} />
              <Route path="/*" element={<h1>Invalid Request</h1>} />
            </Routes>
          </Content>
        </Layout>
      </DestinationsContextProvider>
    </BrowserRouter>
  );
}

export default App;
