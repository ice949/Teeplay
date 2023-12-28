import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import CommunityScreen from "./screens/CommunityScreen";
import MyTabs from "./navigator/myTabs";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Community" component={CommunityScreen} />
      </Stack.Navigator> */}
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
