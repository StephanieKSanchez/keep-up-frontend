import { createContext, useState } from "react";

export const DestinationsContext = createContext({});

export const DestinationsContextProvider = ({ children }) => {
  const { Provider } = DestinationsContext;
  const [destinations, setDestinations] = useState();
  const [destination, setDestination] = useState();

  const value = {
    destinations,
    setDestinations,
    destination,
    setDestination,
  };
  return <Provider value={value}>{children}</Provider>;
};
