import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text>Usuarios</Text>
            </View>
        </SafeAreaView>
    )
}