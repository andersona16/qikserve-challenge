import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header/Header";
import { useAppContext } from "./contexts/AppContext";
import GlobalStyle from "./styles/GlobalStyle";

const App: React.FC = () => {
  const { restaurantData } = useAppContext();
  const [theme, setTheme] = useState<any>(null);

  useEffect(() => {
    if (restaurantData) {
      const { webSettings } = restaurantData;

      const dynamicTheme = {
        headerBgColor: webSettings.navBackgroundColour,
        primaryColour: webSettings.primaryColour,
        primaryColourHover: webSettings.primaryColourHover,
        backgroundColour: webSettings.backgroundColour,
        navBackgroundColor: webSettings.navBackgroundColour,
        bannerImage: webSettings.bannerImage,
      };

      setTheme(dynamicTheme);
    }
  }, [restaurantData]);

  if (!theme) {
    return <div>Carregando tema...</div>;
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
};

export default App;
