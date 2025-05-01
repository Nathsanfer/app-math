import React, { useState } from "react";
import { ImageBackground, View, Text, TouchableOpacity, TextInput } from "react-native";
import * as Clipboard from "expo-clipboard";

export default function GeradorSenha() {
  const [senha, setSenha] = useState("");
  const [tamanho, setTamanho] = useState("");

  const gerarSenha = (tamanho = 8) => {
    const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()-_=+{}[]<>?/";

    const caracteres = letrasMaiusculas + letrasMinusculas + numeros + simbolos;
    let novaSenha = "";

    for (let i = 0; i < tamanho; i++) {
      const index = Math.floor(Math.random() * caracteres.length);
      novaSenha += caracteres[index];
    }

    setSenha(novaSenha);
  };

  const copiarSenha = async () => {
    if (senha) {
      await Clipboard.setStringAsync(senha);
      alert("Senha copiada para a área de transferência!");
    } else {
      alert("Nenhuma senha gerada para copiar.");
    }
  }

  return (
    <ImageBackground
      source={require("../assets/image.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Gerador de Senhas</Text>
        <Text style={styles.subtitle}>
          Insira o tamanho da senha que deseja gerar:
        </Text>
        <TextInput
          value={senha}
          style={styles.input}
          placeholder="Senha gerada"
          placeholderTextColor="#AB7343"
        />
        <TextInput
          value={tamanho}
          onChangeText={setTamanho}
          style={styles.input}
          placeholder="Tamanho da senha"
          placeholderTextColor="#AB7343"
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => gerarSenha(Number(tamanho))}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Gerar Senha</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={copiarSenha}
            style={styles.button}>
            <Text style={styles.buttonText}>Copiar Senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = {
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F5F5F5",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#FFD700",
    textAlign: "center",
    marginBottom: 25,
  },
  input: {
    width: "80%",
    height: 50,
    textAlign: "center",
    marginBottom: 20,
    borderWidth: 0,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    color: "#4A2600",
    paddingHorizontal: 15,
    fontSize: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonContainer: {
    width: "80%",
    overflow: "hidden",
    gap: 15,
  },
  button: {
    backgroundColor: "#FFD449",
    padding: 12,
    borderRadius: 20,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
};
