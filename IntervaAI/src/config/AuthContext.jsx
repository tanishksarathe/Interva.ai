import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const ContextFile = ({ children }) => {
  const [user, setUser] = useState(sessionStorage.getItem("IntervaAI") || "");
  const [login, setLogin] = useState(false);
  return (
    <>
      <AuthContext.Provider value={{ user, setUser, login, setLogin }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => useContext(AuthContext);
