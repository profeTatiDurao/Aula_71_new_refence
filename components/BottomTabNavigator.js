import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Transação") {
                iconName = "book";
              } else if (route.name === "Pesquisa") {
                iconName = "search";
              }

              // You can return any component that you like here!
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                  //size={size}
                />
              );
            },
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "black",
            tabBarLabelStyle: {
            fontSize: 20,
            fontFamily: "Rajdhani_600SemiBold"
            },
            tabBarItemStyle: {
            
            marginTop: 25,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 30,
            borderWidth: 2,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#5653d4"
            },
            tabBarLabelPosition: "beside-icon",
            tabBarStyle: [
            {
            display: "flex",
            height:80,
            },
            null
            ]
          })}
          
        >
          <Tab.Screen name="Transação" component={TransactionScreen} />
          <Tab.Screen name="Pesquisa" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
