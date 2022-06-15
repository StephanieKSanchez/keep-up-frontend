import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddDestination from "./components/AddDestination";
import DestinationList from "./components/DestinationList";
import Menubar from "./components/Menubar";
import { DestinationsContextProvider } from "./components/DestinationContext";
import DestinationPage from "./components/DestinationPage";
import { createContext, useState } from "react";
import Login from "./components/Login";

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
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
                <Route
                  path="/login"
                  element={!user ? <Login /> : <DestinationList />}
                />
                <Route path="/" element={<DestinationList />} />
                <Route path="/*" element={<h1>Invalid Request</h1>} />
              </Routes>
            </Content>
          </Layout>
        </DestinationsContextProvider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
