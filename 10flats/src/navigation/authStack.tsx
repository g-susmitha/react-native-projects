import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { signup, login } from '../screens';

type RootStackParamList = {
    signup: undefined;
    login: undefined;
  };

const {Navigator , Screen }:any = createNativeStackNavigator<RootStackParamList>();

const AuthStack : FC = () => {
    return (
       <Navigator screenOptions={{headerShown: false}}>
           <Screen name="signup" component={signup}/>
           <Screen name="login" component={login}/>
       </Navigator>
    )
}

export default AuthStack;