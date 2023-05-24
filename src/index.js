import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./utils/styles";
import HomeScreen from "./screens/HomeScreen";


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
    <Tabs.Navigator initialRouteName="LoginScreen" style={styles.menuzin} barStyle={{ backgroundColor: "#415A77" }} activeColor="#FFFFFF" inactiveColor="#FFFFFF">
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
        name="RMGame"
        component={RMGameScreen}
        options={{
          tabBarLabel: "Jogo",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="gamepad-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
