import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Rajeev Kumar Singh",
    email: "dummy@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
