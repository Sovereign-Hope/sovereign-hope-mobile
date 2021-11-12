import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { colors } from "./colors";

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.brand,
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.brand,
  },
};
