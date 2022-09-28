import React from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default BtnAdicionar = ({onChange, value}) => {
    return (
        <View style={styles.piker}>
            <Picker
                selectedValue={value}
                onValueChange={onChange}
            >
                <Picker.Item label="00:00" value={0} />
                <Picker.Item label="00:30" value={1} />
                <Picker.Item label="01:00" value={2} />
                <Picker.Item label="01:30" value={3} />
                <Picker.Item label="02:00" value={4} />
                <Picker.Item label="02:30" value={5} />
                <Picker.Item label="03:00" value={6} />
                <Picker.Item label="03:30" value={7} />
                <Picker.Item label="04:00" value={8} />
                <Picker.Item label="04:30" value={9} />
                <Picker.Item label="05:00" value={10} />
                <Picker.Item label="05:30" value={11} />
                <Picker.Item label="06:00" value={12} />
                <Picker.Item label="06:30" value={13} />
                <Picker.Item label="07:00" value={14} />
                <Picker.Item label="07:30" value={15} />
                <Picker.Item label="08:00" value={16} />
                <Picker.Item label="08:30" value={17} />
                <Picker.Item label="09:00" value={18} />
                <Picker.Item label="09:30" value={19} />
                <Picker.Item label="10:00" value={20} />
                <Picker.Item label="10:30" value={21} />
                <Picker.Item label="11:00" value={22} />
                <Picker.Item label="11:30" value={23} />
                <Picker.Item label="12:00" value={24} />
                <Picker.Item label="12:30" value={25} />
                <Picker.Item label="13:00" value={26} />
                <Picker.Item label="13:30" value={27} />
                <Picker.Item label="14:00" value={28} />
                <Picker.Item label="14:30" value={29} />
                <Picker.Item label="15:00" value={30} />
                <Picker.Item label="15:30" value={31} />
                <Picker.Item label="16:00" value={32} />
                <Picker.Item label="16:30" value={33} />
                <Picker.Item label="17:00" value={34} />
                <Picker.Item label="17:30" value={35} />
                <Picker.Item label="18:00" value={36} />
                <Picker.Item label="18:30" value={37} />
                <Picker.Item label="19:00" value={38} />
                <Picker.Item label="19:30" value={39} />
                <Picker.Item label="20:00" value={40} />
                <Picker.Item label="20:30" value={41} />
                <Picker.Item label="21:00" value={42} />
                <Picker.Item label="21:30" value={43} />
                <Picker.Item label="22:00" value={44} />
                <Picker.Item label="22:30" value={45} />
                <Picker.Item label="23:00" value={46} />
                <Picker.Item label="23:30" value={47} />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    piker: {
        backgroundColor: "#FFF",
        width: "100%",
        paddingHorizontal: 5,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#758918"
    },
})