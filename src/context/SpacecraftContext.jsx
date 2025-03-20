import { createContext, useState, useEffect } from "react";

// Create Context
export const SpacecraftContext = createContext();

// Context Provider Component
export const SpacecraftProvider = ({ children }) => {
  const [ships, setShips] = useState([]);

  // Load spacecrafts from localStorage when the app starts
  useEffect(() => {
    const savedShips = JSON.parse(localStorage.getItem("spacecrafts"));
    if (savedShips) {
      setShips(savedShips);
    }
  }, []);

  // Save spacecrafts to localStorage whenever the list updates
  useEffect(() => {
    localStorage.setItem("spacecrafts", JSON.stringify(ships));
  }, [ships]);

  // Add new spacecraft to the list
  const addSpacecraft = (newShip) => {
    setShips((prevShips) => {
      const updatedShips = [...prevShips, { ...newShip, id: prevShips.length + 1 }];
      localStorage.setItem("spacecrafts", JSON.stringify(updatedShips));
      return updatedShips;
    });
  };

  // Delete spacecraft
  const deleteSpacecraft = (id) => {
    setShips((prevShips) => {
      const updatedShips = prevShips.filter((ship) => ship.id !== id);
      localStorage.setItem("spacecrafts", JSON.stringify(updatedShips));
      return updatedShips;
    });
  };

  return (
    <SpacecraftContext.Provider value={{ ships, addSpacecraft, deleteSpacecraft }}>
      {children}
    </SpacecraftContext.Provider>
  );
};
