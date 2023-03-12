import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      // screenOptions={{
      //   headerStyle: { backgroundColor: '#3c0a6b' },
      //   headerTintColor: 'white',
      //   tabBarActiveTintColor: '#3c0a6b'
      // }}
      >
        <Tab.Screen name="Home" component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />,
          }}
        />

        <Tab.Screen name="Settings" component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='settings' color={color} size={size} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName='User'
    //     screenOptions={{
    //       drawerActiveBackgroundColor: '#f0e1ff',
    //       drawerActiveTintColor: '#3c0a6b',
    //       // drawerStyle: { direction: 'rtl', backgroundColor: '#ccc' },
    //     }}
    //   >
    //     <Drawer.Screen name='Welcome' component={WelcomeScreen}
    //       options={{
    //         headerStyle: { backgroundColor: '#3c0a6b' },
    //         headerTintColor: 'white',
    //         drawerLabel: 'Welcome ',
    //         title: 'Home Screen',
    //         drawerIcon: ({ color, size }) => <Ionicons name='home' size={size} color={color} />,
    //       }}
    //     />
    //     <Drawer.Screen name='User' component={UserScreen}
    //       options={{
    //         drawerIcon: ({ color, size }) => <Ionicons name='person' size={size} color={color} />,
    //       }}
    //     />
    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
}
