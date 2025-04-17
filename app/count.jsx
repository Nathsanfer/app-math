import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

export default function CountScreen() {
    const [contador, setContador] = useState(0);

    function aumentar() {
        setContador(contador + 1);
    }
    function diminuir() {
        setContador(contador - 1);
    }
    function resetar() {
        setContador(0);
    }

    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Contador Moderno</Text>
            </View>

            {/* Imagem decorativa */}
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2917/2917995.png' }}
                style={styles.image}
            />

            {/* Conteúdo principal */}
            <View style={styles.content}>
                <Text style={styles.welcomeText}>Bem-vindo!</Text>
                <Text style={styles.subtitle}>Use os botões abaixo para interagir com o contador.</Text>
            </View>

            {/* Contador */}
            <View style={styles.counterContainer}>
                <Text style={styles.counter}>{contador}</Text>

                <View style={styles.buttonGroup}>
                    <TouchableOpacity onPress={aumentar} style={[styles.button, styles.buttonIncrease]}>
                        <Ionicons name="add" size={32} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={diminuir} style={[styles.button, styles.buttonDecrease]}>
                        <Ionicons name="remove" size={32} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={resetar} style={[styles.button, styles.buttonReset]}>
                        <Ionicons name="refresh" size={32} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Rodapé */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Feito com ❤️ por sua equipe</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff8e1", // tom pastel claro
        paddingTop: 40,
    },
    header: {
        backgroundColor: "#f9a620", // laranja vibrante
        height: 90,
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 6,
    },
    headerTitle: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: "center",
        marginVertical: 20,
    },
    content: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
    },
    welcomeText: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#a0522d", // marrom bonito
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: "#5c4033",
        textAlign: "center",
        marginBottom: 20,
    },
    counterContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    counter: {
        fontSize: 100,
        fontWeight: "bold",
        color: "#f9a620",
        marginBottom: 30,
        textShadowColor: '#ffe082',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%",
    },
    button: {
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 8,
    },
    buttonIncrease: {
        backgroundColor: "#ffd449", // amarelo dourado
    },
    buttonDecrease: {
        backgroundColor: "#f44336", // vermelho (mantido para contraste)
    },
    buttonReset: {
        backgroundColor: "#a0522d", // marrom escuro
    },
    footer: {
        backgroundColor: "#f9a620",
        padding: 12,
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    footerText: {
        color: "#fff",
        fontSize: 14,
    },
});
