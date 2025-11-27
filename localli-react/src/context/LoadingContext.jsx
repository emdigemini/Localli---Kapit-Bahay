import { createContext, useState } from "react";

export const LoadingData = createContext();

export function LoadingProvider({ children }){
  const [ isLoading, setIsLoading ] = useState(true);

  return (
    <LoadingData.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingData.Provider>
  )
}