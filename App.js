import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import Slides from './screens/slides';
import Dashboard from './screens/dashboard';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Slides" component={Slides} />
        <Stack.Screen name="Dashboard" component={Dashboard} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
