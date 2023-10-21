

// Henüz işlevsel değil !!!

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Burada kullanıcı adı ve şifreyi kontrol ederek yetkilendirme yapabilirsiniz
    if (username === "admin" && password === "adminpassword") {
      setUser({ username, role: "admin" });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
