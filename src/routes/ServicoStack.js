import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Servicos from "../screens/Servicos";
import ServicosForm from "../screens/Servicos/ServicoForm";
import Agendar from "../screens/Servicos/Agendar";

const Stack = createNativeStackNavigator();

export default () => (
    <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Home" component={Servicos} />
        <Stack.Screen name="ServicosForm" component={ServicosForm} />
        <Stack.Screen name="Agendar" component={Agendar} />
    </Stack.Navigator>
)