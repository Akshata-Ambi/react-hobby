import { createContext, useReducer } from "react";

const userContext = createContext({
  LoggedInUser: "Akshata",
});

export default userContext;
