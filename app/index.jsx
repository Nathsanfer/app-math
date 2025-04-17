import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Home() {
    const floatAnim1 = useRef(new Animated.Value(0)).current;
    const floatAnim2 = useRef(new Animated.Value(0)).current;
    const floatAnim3 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const float = (animation) => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(animation, {
                        toValue: -10,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(animation, {
                        toValue: 10,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        };

        float(floatAnim1);
        float(floatAnim2);
        float(floatAnim3);
    }, [floatAnim1, floatAnim2, floatAnim3]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Trabalho Escolar</Text>
            <Text style={styles.text}>
                Este é um trabalho escolar onde desenvolvemos três funcionalidades principais:
            </Text>
            <View style={styles.iconContainer}>
                <Animated.View style={[styles.iconBox, { transform: [{ translateY: floatAnim1 }] }]}>
                    <FontAwesome name="calculator" size={60} color="#f39c12" />
                    <Text style={styles.item}>Calculadora</Text>
                </Animated.View>
                <Animated.View style={[styles.iconBox, { transform: [{ translateY: floatAnim2 }] }]}>
                    <FontAwesome name="key" size={60} color="#3498db" />
                    <Text style={styles.item}>Gerador de Senhas</Text>
                </Animated.View>
                <Animated.View style={[styles.iconBox, { transform: [{ translateY: floatAnim3 }] }]}>
                    <FontAwesome name="hand-pointer-o" size={60} color="#2ecc71" />
                    <Text style={styles.item}>Contador de Cliques</Text>
                </Animated.View>
            </View>
            <Text style={styles.footer}>Aproveite para explorar cada funcionalidade!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#1e1e2f",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#f5f5f5",
        textAlign: "center",
    },
    text: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 30,
        color: "#dcdcdc",
    },
    iconContainer: {
        width: "100%",
        alignItems: "center",
    },
    iconBox: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c2c3e",
        padding: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 20, 
        width: "80%", 
    },
    item: {
        fontSize: 16,
        marginTop: 10,
        textAlign: "center",
        color: "#f5f5f5",
    },
    footer: {
        marginTop: 20,
        fontSize: 16,
        fontStyle: "italic",
        color: "#a9a9a9",
        textAlign: "center",
    },
});