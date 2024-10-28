import React from 'react';
import { View, Text, Button} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Choose</Text>
      <Button title="Login " onPress={() => navigation.navigate('Login')}/>
      <Button title="Register " onPress={() => navigation.navigate('Register')}/>
      <Button title="Slides " onPress={() => navigation.navigate('Slides')}/>

    </View>
  );
};



export default Home;
