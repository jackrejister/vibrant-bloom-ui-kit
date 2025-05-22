
import { ThemeProvider } from "./ThemeProvider";
import { ColorProvider, type ColorPalette } from "./ColorProvider";

type LuminanceProviderProps = {
  children: React.ReactNode;
  defaultTheme?: "dark" | "light" | "system";
  colorPalette?: ColorPalette;
  storageKey?: string;
};

export function LuminanceProvider({
  children,
  defaultTheme = "dark",
  colorPalette,
  storageKey = "luminance-ui-theme",
}: LuminanceProviderProps) {
  return (
    <ThemeProvider defaultTheme={defaultTheme} storageKey={storageKey}>
      <ColorProvider palette={colorPalette}>
        {children}
      </ColorProvider>
    </ThemeProvider>
  );
}
