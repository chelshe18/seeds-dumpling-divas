import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Timer from "../components/timer";
import Ellipse from "../components/ellipse";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Button from "../components/button";

export default function Notification() {
    return (
        <View style={styles.container}>
            <Ellipse />
            <Image style={styles.image} source={require('../assets/noti.png')} />
            <Text style={styles.midText}>
                Hi Chenlu, your table is almost ready.
                Please arrive within 5 minutes or your
                position in the queue will be canceled.
            </Text>
            <Timer />
            <Button text="Cancel" onPress={() => {}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF8D6",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginTop: 60,
    },

    midText: {
        color: "#000",
        lineHeight: 23,
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "600",
        width: 275,
        height: 108,
        flexShrink: 0,
        marginTop: 68,
        marginLeft: 15,
        marginBottom: 3,
    },

    button: {
        backgroundColor: "#A4D0A4",
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#A4D0A4",
        width: 301,
        height: 60,
    },

    textButton: {
        color: "#FFF8D6",
        textAlign: "center",
        // verticalAlign:"middle",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        fontSize: 15,
        // fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
    }
});
