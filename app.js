import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import LoginScreen from './LoginScreen'; // import new screen

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">  
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Workouts" component={WorkoutsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Nutrition" component={NutritionScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>🏠 Home Screen</Text>
      <Button title="Go to Workouts" onPress={() => navigation.navigate('Workouts')} />
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Go to Nutrition" onPress={() => navigation.navigate('Nutrition')} />
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

function WorkoutsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>💪 Workouts Screen</Text>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>👤 Profile Screen</Text>
    </View>
  );
}

function NutritionScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>🍎 Nutrition Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>⚙️ Settings Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Workouts" component={WorkoutsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Nutrition" component={NutritionScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
