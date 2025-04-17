import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert,
} from "react-native";
import * as Clipboard from "expo-clipboard";

export default function LoremGenerator() {
    const [wordCount, setWordCount] = useState("");
    const [loremText, setLoremText] = useState("");

    const generateLoremIpsum = (count) => {
        const loremWords = [
            "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
            "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
            "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
            "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea",
            "commodo", "consequat", "duis", "aute", "irure", "dolor", "in", "reprehenderit",
            "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla",
            "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident",
            "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"
        ];

        let result = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * loremWords.length);
            result.push(loremWords[randomIndex]);
        }

        return result.join(" ");
    };

    const handleGenerate = () => {
        const count = parseInt(wordCount);
        if (!isNaN(count) && count > 0) {
            setLoremText(generateLoremIpsum(count));
        } else {
            setLoremText("Por favor, insira um número válido.");
        }
    };

    const handleCopy = async () => {
        if (loremText) {
            await Clipboard.setStringAsync(loremText);
            Alert.alert("Texto copiado!", "O texto foi copiado para a área de transferência.");
        } else {
            Alert.alert("Nada para copiar", "Gere um texto antes de copiar.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gerador de Lorem Ipsum</Text>
            <Text style={styles.subtitle}>
                Insira o número de palavras que deseja gerar:
            </Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Digite um número"
                placeholderTextColor="#aaa"
                value={wordCount}
                onChangeText={setWordCount}
            />
            <TouchableOpacity style={styles.button} onPress={handleGenerate}>
                <Text style={styles.buttonText}>Gerar</Text>
            </TouchableOpacity>
            <ScrollView style={styles.resultContainer}>
                <Text style={styles.resultText}>{loremText}</Text>
            </ScrollView>
            <TouchableOpacity style={styles.copyButton} onPress={handleCopy}>
                <Text style={styles.copyButtonText}>Copiar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e1e2f",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#f5f5f5",
        marginBottom: 10,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        color: "#dcdcdc",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        width: "80%",
        height: 50,
        backgroundColor: "#2c2c3e",
        borderRadius: 10,
        paddingHorizontal: 15,
        color: "#fff",
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#f39c12",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    resultContainer: {
        marginTop: 20,
        width: "100%",
        backgroundColor: "#2c2c3e",
        borderRadius: 10,
        padding: 15,
        maxHeight: "50%",
    },
    resultText: {
        color: "#f5f5f5",
        fontSize: 16,
        textAlign: "justify",
    },
    copyButton: {
        backgroundColor: "#3498db",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 20,
    },
    copyButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
});