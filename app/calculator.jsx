import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
} from "react-native";

const { width, height } = Dimensions.get("window");

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [info, setInfo] = useState("");
  const [fishAnimations, setFishAnimations] = useState([]);

  const handlePress = (value) => {
    setDisplay((prev) => prev + value);
  };

  const handleClear = () => {
    setDisplay("");
    setInfo("");
    setFishAnimations([]);
  };

  const handleBackspace = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const handleOperation = (operation) => {
    try {
      const currentValue = parseFloat(display);
      if (isNaN(currentValue)) {
        setDisplay("Erro");
        return;
      }

      let result;
      switch (operation) {
        case "sin":
          result = Math.sin((currentValue * Math.PI) / 180); // Convertendo para radianos
          break;
        case "cos":
          result = Math.cos((currentValue * Math.PI) / 180); // Convertendo para radianos
          break;
        case "tan":
          result = Math.tan((currentValue * Math.PI) / 180); // Convertendo para radianos
          break;
        case "sqrt":
          result = Math.sqrt(currentValue);
          break;
        default:
          result = "Erro";
      }

      setDisplay(formatDisplay(result));
    } catch {
      setDisplay("Erro");
    }
  };

  const handleCalculate = () => {
    try {
      const result = eval(display);

      // Ativar animação dos peixinhos se o resultado for 4
      if (result === 4) {
        triggerFishRain();
      }

      setDisplay(formatDisplay(result));
    } catch {
      setDisplay("Erro");
    }
  };

  const formatDisplay = (value) => {
    if (isNaN(value)) return "Erro";

    // Limitar o número de dígitos no display
    const maxDigits = 10;

    if (value.toString().length > maxDigits) {
      // Usar notação científica para números muito grandes
      return parseFloat(value).toExponential(5);
    }

    return value.toString();
  };

  const triggerFishRain = () => {
    const newFishAnimations = [];
    const totalFish = 50;

    for (let i = 0; i < totalFish; i++) {
      const animation = new Animated.Value(0);
      newFishAnimations.push({
        animation,
        emoji: i === Math.floor(totalFish / 2) ? "🍍" : "🐟",
      });

      Animated.timing(animation, {
        toValue: height,
        duration: 3000,
        delay: i * 50,
        useNativeDriver: true,
      }).start();
    }

    setFishAnimations(newFishAnimations);

    setTimeout(() => {
      setFishAnimations([]);
    }, 4000);
  };

  const renderFishRain = () => {
    return fishAnimations.map((item, index) => {
      const randomLeft = Math.random() * width;
      return (
        <Animated.Text
          key={index}
          style={[
            styles.fishEmoji,
            {
              position: "absolute",
              top: 0,
              left: randomLeft,
              transform: [{ translateY: item.animation }],
            },
          ]}
        >
          {item.emoji}
        </Animated.Text>
      );
    });
  };

  const renderButton = (label, onPress, style = {}) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calculadora</Text>
      <View style={styles.resultContainer}>
        <ScrollView horizontal contentContainerStyle={styles.scrollContent}>
          <Text style={styles.resultText}>{display || "0"}</Text>
        </ScrollView>
      </View>
      {renderFishRain()}
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          {renderButton("C", handleClear, styles.clearButton)}
          {renderButton("<", handleBackspace, styles.backspaceButton)}
          {renderButton("√", () => handleOperation("sqrt"), styles.operatorButton)}
          {renderButton("^", () => handlePress("^"), styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton("sin", () => handleOperation("sin"), styles.operatorButton)}
          {renderButton("cos", () => handleOperation("cos"), styles.operatorButton)}
          {renderButton("tan", () => handleOperation("tan"), styles.operatorButton)}
          {renderButton("/", () => handlePress("/"), styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton("7", () => handlePress("7"))}
          {renderButton("8", () => handlePress("8"))}
          {renderButton("9", () => handlePress("9"))}
          {renderButton("*", () => handlePress("*"), styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton("4", () => handlePress("4"))}
          {renderButton("5", () => handlePress("5"))}
          {renderButton("6", () => handlePress("6"))}
          {renderButton("-", () => handlePress("-"), styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton("1", () => handlePress("1"))}
          {renderButton("2", () => handlePress("2"))}
          {renderButton("3", () => handlePress("3"))}
          {renderButton("+", () => handlePress("+"), styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton("0", () => handlePress("0"), styles.zeroButton)}
          {renderButton(".", () => handlePress("."))}
          {renderButton("=", handleCalculate, styles.equalsButton)}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
  },
  resultContainer: {
    backgroundColor: "#333",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  resultText: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "right",
  },
  fishEmoji: {
    fontSize: 30,
  },
  buttonsContainer: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#444",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  operatorButton: {
    backgroundColor: "#f39c12",
  },
  clearButton: {
    backgroundColor: "#e74c3c",
  },
  backspaceButton: {
    backgroundColor: "#3498db",
  },
  equalsButton: {
    backgroundColor: "#2ecc71",
    flex: 1,
  },
  zeroButton: {
    width: 150,
  },
});

export default Calculator;