import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home/Home';
import { fetchRestaurantData } from './services/api';
import { RootState } from './store';
import { setLoading, setTheme } from './store/themeSlice';
import GlobalStyle from './styles/GlobalStyle';

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

      <Home />
    </ThemeProvider>
  );
};

export default App;
