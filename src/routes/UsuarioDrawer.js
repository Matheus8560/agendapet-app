import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from '../components/DrawerContent'

import ServicoStack from "./ServicoStack";
import Perfil from "../screens/Perfil";
import Agendamentos from "../screens/Agendamentos";

const Drawer = createDrawerNavigator();

export default () => (
    <Drawer.Navigator 
        drawerContent={props => <DrawerContent {...props} />} 
        initialRouteName="Serviços"
        screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: "#758918",
            drawerActiveTintColor: "#fff"
        }}
    >
        <Drawer.Screen name="Perfil" component={Perfil} />
        <Drawer.Screen name="Serviços" component={ServicoStack} />
        <Drawer.Screen name="Agendamentos" component={Agendamentos} />
    </Drawer.Navigator>
)