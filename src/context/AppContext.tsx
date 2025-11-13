import React, { createContext, useContext, useState } from "react";

interface AppContextType {
  isPreviewOpen: boolean;
  setIsPreviewOpen: (isOpen: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <AppContext.Provider value={{ isPreviewOpen, setIsPreviewOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
