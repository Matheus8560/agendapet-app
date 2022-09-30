import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Preload from "../screens/Preload";
import Login from "../screens/Login";
import Recovery from "../screens/Recovery";

import AdminDrawer from "./AdminDrawer";
import UsuarioDrawer from "./UsuarioDrawer";

const Stack = createNativeStackNavigator();

export default () => (
    <Stack.Navigator 
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Recovery" component={Recovery} />
        <Stack.Screen name="AdminDrawer" component={AdminDrawer} />
        <Stack.Screen name="UsuarioDrawer" component={UsuarioDrawer} />
    </Stack.Navigator>
)