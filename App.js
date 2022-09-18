import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/routes/MainStack';

export default () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
}
