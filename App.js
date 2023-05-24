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
import { View } from "react-native-web";

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
      activeColor="#000"
      inactiveColor="#000"
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
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bird" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="AnimeScreen"
        component={AnimeScreen}
        options={{
          tabBarLabel: "Anime",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="television" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="CarroScreen"
        component={CarroScreen}
        options={{
          tabBarLabel: "Carro",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="car" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="FilmeScreen"
        component={FilmeScreen}
        options={{
          tabBarLabel: "Filme",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="JogoScreen"
        component={JogoScreen}
        options={{
          tabBarLabel: "Jogo",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="game" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="ProdutoScreen"
        component={ProdutoScreen}
        options={{
          tabBarLabel: "Fruta",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="apple" color={color} size={26} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
