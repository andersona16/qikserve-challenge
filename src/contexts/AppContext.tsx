import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { fetchRestaurantData } from "../services/api";

interface WebSettings {
  bannerImage: string;
  navBackgroundColour: string;
  primaryColour: string;
  backgroundColour: string;
  primaryColourHover: string;
}

interface RestaurantData {
  name: string;
  locale: string;
  timeZone: string;
  currency: string;
  ccySymbol: string;
  webSettings: WebSettings;
}

interface AppContextProps {
  restaurantData: RestaurantData | null;
  loading: boolean;
  setRestaurantData: (data: RestaurantData) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [restaurantData, setRestaurantData] = useState<RestaurantData | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadRestaurantData = async () => {
      try {
        const data = await fetchRestaurantData();
        setRestaurantData(data);
      } catch (error) {
        console.error("Erro ao carregar dados do restaurante:", error);
      }

      setLoading(false);
    };
    loadRestaurantData();
  }, []);

  return (
    <AppContext.Provider value={{ restaurantData, loading, setRestaurantData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext deve ser usado dentro de um AppProvider");
  }
  return context;
};
