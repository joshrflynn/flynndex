import React, { createContext, useContext, useState, useEffect } from "react";
import { PokedexData } from "../types/types";
import { GetPokedexData } from "../service/apiService";

type PokedexContextType = {
  pokedexData: PokedexData;
  isLoading: boolean;
};
const PokedexContext = createContext<PokedexContextType | undefined>(undefined);

export const PokedexProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pokedexData, setPokedexData] = useState<PokedexData>({
    data: {
      pokemon: [],
    },
    errors: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result: PokedexData = await GetPokedexData();
      if (!result.errors) {
        setPokedexData(result);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <PokedexContext.Provider value={{ pokedexData, isLoading }}>
      {children}
    </PokedexContext.Provider>
  );
};

// Custom hook for cleaner access
export const usePokedexContext = (): PokedexContextType => {
  const context = useContext(PokedexContext);
  if (!context) throw new Error("useData must be used within a DataProvider");
  return context;
};
