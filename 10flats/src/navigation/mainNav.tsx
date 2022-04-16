import React, { FC, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { home , dashboard } from "../screens";
import AppStack from "./appStack";
import AuthStack from "./authStack";


const MainNav: FC = () => {

  const [userAuthenticated , setUserAuthenticated ] = useState(null);

    return (
        <NavigationContainer>
            { userAuthenticated !== null ? <AppStack/> : <AuthStack/> }
        </NavigationContainer>
    ) 
}

export default MainNav;