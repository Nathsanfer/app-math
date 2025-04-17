import React, { useState } from "react";
import { ImageBackground, View, Text, Button, TextInput } from "react-native";

export default function GeradorSenha() {
  const [senha, setSenha] = useState("");
  const [tamanho, setTamanho] = useState("8"); // Estado para o tamanho da senha

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

  return (
    <ImageBackground
      source={require("../assets/image.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Gerador de Senhas</Text>
        <TextInput
          value={senha}
          style={styles.input}
          placeholder="Senha gerada"
        />
        <TextInput
          value={tamanho}
          onChangeText={setTamanho}
          style={styles.input}
          placeholder="Tamanho da senha"
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Gerar Senha"
            onPress={() => gerarSenha(Number(tamanho))}
            color="#A0522D"
          />
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
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD449",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: "80%",
    textAlign: "center",
    marginBottom: 20,
    borderColor: "#FFE082",
    borderRadius: 20,
    backgroundColor: "#FFF",
    color: "#000000",
  },
  buttonContainer: {
    width: "80%",
    borderRadius: 20,
    overflow: "hidden",
  },
};
