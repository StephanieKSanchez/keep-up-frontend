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
import Home from "./components/Home";
import Footer from "./components/Footer";

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
                <Route
                  path="/add"
                  // element={!user ? <Login /> : <AddDestination />}
                />
                <Route
                  path="/login"
                  element={!user ? <Login /> : <DestinationList />}
                />
                <Route
                  path="/destinations"
                  element={!user ? <Login /> : <DestinationList />}
                />
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<h1>Invalid Request</h1>} />
              </Routes>
              <Footer />
            </Content>
          </Layout>
        </DestinationsContextProvider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
