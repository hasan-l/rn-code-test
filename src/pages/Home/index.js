import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Info from './Info';
import Market from './Market';
import Details from './Details';
import Native from './Native';

const HomeTabs = createBottomTabNavigator();

const Home = () => {
  return (
    <HomeTabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Info') {
            iconName = 'info';
          } else if (route.name === 'Market') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Details') {
            iconName = 'list-alt';
          } else if (route.name === 'Native') {
            iconName = 'smartphone';
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      backBehavior="history">
      <HomeTabs.Screen name="Info" component={Info} />
      <HomeTabs.Screen name="Market" component={Market} />
      <HomeTabs.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: 'true',
          headerTitleAlign: 'center',
        }}
      />
      <HomeTabs.Screen
        name="Native"
        component={Native}
        options={{headerShown: 'true', headerTitleAlign: 'center'}}
      />
    </HomeTabs.Navigator>
  );
};

export default Home;
