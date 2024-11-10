import { DefaultTheme } from "styled-components";

export const createTheme = (settings: {
  backgroundColour: string;
  bannerImage: string;
  navBackgroundColour: string;
  primaryColour: string;
  primaryColourHover: string;
}): DefaultTheme => ({
  headerBgColor: settings.navBackgroundColour,
  buttonColor: settings.primaryColour,
  bannerImage: settings.bannerImage,
  backgroundColor: settings.backgroundColour,
  buttonHoverColor: settings.primaryColourHover,
  navBackgroundColor: settings.navBackgroundColour,
});
