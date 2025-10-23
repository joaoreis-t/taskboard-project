import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react"

interface ThemeProviderProps{
  children: ReactNode
}

interface ThemeContextType {
  isLight: boolean;
  setIsLight: Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [isLight, setIsLight] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved !== null) return JSON.parse(saved);

    // Se não houver valor salvo, pega a preferência do sistema
    return !window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  return(
    <ThemeContext.Provider value={{isLight, setIsLight}}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};