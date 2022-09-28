import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from '../components/DrawerContent'

import ServicoStack from "./ServicoStack";
import UsuarioStack from "./UsuarioStack";
import Perfil from "../screens/Perfil";
import Horarios from "../screens/Horarios";
import Agendamentos from "../screens/Agendamentos";

const Drawer = createDrawerNavigator();

export default () => (
    <Drawer.Navigator 
        drawerContent={props => <DrawerContent {...props} />} 
        initialRouteName="Agendamentos"
        screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: "#758918",
            drawerActiveTintColor: "#fff"
        }}
    >
        <Drawer.Screen name="Perfil" component={Perfil} />
        <Drawer.Screen name="Horários" component={Horarios} />
        <Drawer.Screen name="Servicos" component={ServicoStack} />
        <Drawer.Screen name="Usuarios" component={UsuarioStack} />
        <Drawer.Screen name="Agendamentos" component={Agendamentos} />
    </Drawer.Navigator>
)