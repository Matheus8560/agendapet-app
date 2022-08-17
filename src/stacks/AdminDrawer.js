import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Servicos from "../screens/Servicos";
import Usuarios from "../screens/Usuarios";

const Drawer = createDrawerNavigator();

export default () => (
    <Drawer.Navigator initialRouteName="Servicos">
        <Drawer.Screen name="Servicos" component={Servicos} />
        <Drawer.Screen name="Usuarios" component={Usuarios} />
    </Drawer.Navigator>
)