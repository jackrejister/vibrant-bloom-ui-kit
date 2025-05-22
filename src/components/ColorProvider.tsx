
import { createContext, useContext } from "react";

export type ColorPalette = {
  primary?: string;
  secondary?: string;
  accent?: string;
  muted?: string;
};

type ColorProviderProps = {
  children: React.ReactNode;
  palette?: ColorPalette;
};

type ColorProviderState = {
  palette: ColorPalette;
};

const initialState: ColorProviderState = {
  palette: {
    primary: "luminance-primary",
    secondary: "luminance-teal",
    accent: "luminance-purple",
    muted: "luminance-neutral",
  },
};

const ColorProviderContext = createContext<ColorProviderState>(initialState);

export function ColorProvider({
  children,
  palette = initialState.palette,
  ...props
}: ColorProviderProps) {
  const value = {
    palette,
  };

  return (
    <ColorProviderContext.Provider {...props} value={value}>
      {children}
    </ColorProviderContext.Provider>
  );
}

export const useColors = () => {
  const context = useContext(ColorProviderContext);
  
  if (context === undefined)
    throw new Error("useColors must be used within a ColorProvider");
    
  return context;
};
