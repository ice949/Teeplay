import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import CommunityScreen from "../screens/CommunityScreen";
import BookingsScreen from "../screens/Bookings";
import ProfileScreen from "../screens/Profile";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" color={"green"} size={25} />
          ),
        }}
      />
      <Tab.Screen name="Community" component={CommunityScreen} options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-people" color={tintColor} size={25} />
          ),
        }} />
      <Tab.Screen name="Bookings" component={BookingsScreen} options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-book" color={tintColor} size={25} />
          ),
        }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-person" color={tintColor} size={25} />
          ),
        }}/>
    </Tab.Navigator>
  );
};

export default MyTabs;
