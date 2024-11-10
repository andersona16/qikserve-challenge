import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, setLoading } from "./store/themeSlice";
import { RootState } from "./store";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header/Header";
import { fetchRestaurantData } from "./services/api";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { theme, loading } = useSelector((state: RootState) => state.theme);
  const [dynamicTheme, setDynamicTheme] = useState<any>(null);

  useEffect(() => {
    const loadRestaurantData = async () => {
      try {
        const data = await fetchRestaurantData();
        const { webSettings } = data;
        dispatch(setTheme(webSettings));
      } catch (error) {
        console.error("Erro ao carregar dados do restaurante:", error);
      }
      dispatch(setLoading(false));
    };

    loadRestaurantData();
  }, [dispatch]);

  useEffect(() => {
    if (theme) {
      setDynamicTheme({
        headerBgColor: theme.navBackgroundColour,
        primaryColour: theme.primaryColour,
        primaryColourHover: theme.primaryColourHover,
        backgroundColour: theme.backgroundColour,
        navBackgroundColor: theme.navBackgroundColour,
        bannerImage: theme.bannerImage,
      });
    }
  }, [theme]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!dynamicTheme) {
    return <div>Carregando tema...</div>;
  }

  return (
    <ThemeProvider theme={dynamicTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
};

export default App;
