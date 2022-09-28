import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Usuarios from "../screens/Usuarios";
import UsuarioForm from "../screens/Usuarios/UsuarioForm";

const Stack = createNativeStackNavigator();

export default () => (
    <Stack.Navigator 
        initialRouteName="HomeUsuarios"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="HomeUsuarios" component={Usuarios} />
        <Stack.Screen name="UsuarioForm" component={UsuarioForm} />
    </Stack.Navigator>
)