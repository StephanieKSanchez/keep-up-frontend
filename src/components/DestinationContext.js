import { createContext, useState } from "react";

export const DestinationsContext = createContext({});

export const DestinationContextProvider = ({ children }) => {
  const { Provider } = DestinationsContext;
  const [destinations, setDestinations] = useState();

  const value = {
    destinations,
    setDestinations,
  };
  return <Provider value={value}>{children}</Provider>;
};
