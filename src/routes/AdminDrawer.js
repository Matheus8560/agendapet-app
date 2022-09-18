import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from '../components/DrawerContent'

import Servicos from "../screens/Servicos";
import Usuarios from "../screens/Usuarios";
import ServicoStack from "./ServicoStack";

const Drawer = createDrawerNavigator();

export default () => (
    <Drawer.Navigator 
        drawerContent={props => <DrawerContent {...props} />} 
        initialRouteName="Servicos"
        screenOptions={{
            headerShown: false
        }}
    >
        <Drawer.Screen name="Servicos" component={ServicoStack} />
        <Drawer.Screen name="Usuarios" component={Usuarios} />
    </Drawer.Navigator>
)