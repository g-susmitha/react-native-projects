import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { home , dashboard } from "../screens";

type RootStackParamList = {
    home: undefined;
    dashboard: undefined;
  };

const { Navigator, Screen }:any = createNativeStackNavigator<RootStackParamList>()

const AppStack: FC = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
           <Screen name="home" component={home} />
           <Screen name="dashboard" component={dashboard} />
        </Navigator>
    ) 
}

export default AppStack;