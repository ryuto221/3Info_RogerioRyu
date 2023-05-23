import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./src/utils/styles";
import HomeScreen from "./src/screens/HomeScreen";
import AnimalScreen from "./src/screens/AnimalScreen";
import AnimeScreen from "./src/screens/AnimeScreen";
import ProdutoScreen from "./src/screens/ProdutoScreen";
import FilmeScreen from "./src/screens/FilmeScreen";
import CarroScreen from "./src/screens/CarroScreen";
import JogoScreen from "./src/screens/JogoScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tabs.Navigator
      initialRouteName="LoginScreen"
      style={styles.menuzin}
      barStyle={{ backgroundColor: "#415A77" }}
      activeColor="#000000"
      inactiveColor="#FFFFFF"
    >
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="AnimalScreen"
        component={AnimalScreen}
        options={{
          tabBarLabel: "Animal",
        }}
      />
      <Tabs.Screen
        name="AnimeScreen"
        component={AnimeScreen}
        options={{
          tabBarLabel: "Anime",
        }}
      />
      <Tabs.Screen
        name="CarroScreen"
        component={CarroScreen}
        options={{
          tabBarLabel: "Carro",
        }}
      />
      <Tabs.Screen
        name="FilmeScreen"
        component={FilmeScreen}
        options={{
          tabBarLabel: "Filme",
        }}
      />
      <Tabs.Screen
        name="JogoScreen"
        component={JogoScreen}
        options={{
          tabBarLabel: "Jogo",
        }}
      />
      <Tabs.Screen
        name="ProdutoScreen"
        component={ProdutoScreen}
        options={{
          tabBarLabel: "Fruta",
        }}
      />
    </Tabs.Navigator>
  );
}
