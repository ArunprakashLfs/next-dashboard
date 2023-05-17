"use client"
// In a new file called UserContext.js
import { createContext, useContext, useState } from "react";
import { Users } from "@/Components/UserData";

// Create a context to store the user data
const UserContext = createContext();

// Create a component to provide the user data
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    Users
    // name: "John Doe",
    // email: "john.doe@example.com",
    // avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

export { UserProvider, useUser };

// useUser must be used within a UserProvider