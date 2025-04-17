import React from "react";
import { View, StyleSheet, Animated, ActivityIndicator } from "react-native";

export default function SkeletonLoader() {
    const shimmerAnim = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(shimmerAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(shimmerAnim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [shimmerAnim]);

    const shimmerStyle = {
        opacity: shimmerAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0.3, 1],
        }),
    };

    return (
        <View style={styles.container}>
            {/* Bolinha girando no topo */}
            <ActivityIndicator size="large" color="#f39c12" style={styles.loader} />

            {/* Simulando um título */}
            <Animated.View style={[styles.skeletonBox, styles.title, shimmerStyle]} />

            {/* Simulando uma imagem */}
            <Animated.View style={[styles.skeletonBox, styles.image, shimmerStyle]} />

            {/* Simulando texto */}
            <Animated.View style={[styles.skeletonBox, styles.text, shimmerStyle]} />
            <Animated.View style={[styles.skeletonBox, styles.text, shimmerStyle]} />
            <Animated.View style={[styles.skeletonBox, styles.text, shimmerStyle]} />

            {/* Simulando cards adicionais */}
            <View style={styles.card}>
                <Animated.View style={[styles.skeletonBox, styles.cardImage, shimmerStyle]} />
                <View style={styles.cardContent}>
                    <Animated.View style={[styles.skeletonBox, styles.cardTitle, shimmerStyle]} />
                    <Animated.View style={[styles.skeletonBox, styles.cardText, shimmerStyle]} />
                </View>
            </View>
            <View style={styles.card}>
                <Animated.View style={[styles.skeletonBox, styles.cardImage, shimmerStyle]} />
                <View style={styles.cardContent}>
                    <Animated.View style={[styles.skeletonBox, styles.cardTitle, shimmerStyle]} />
                    <Animated.View style={[styles.skeletonBox, styles.cardText, shimmerStyle]} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#1e1e2f",
    },
    loader: {
        marginBottom: 20,
    },
    skeletonBox: {
        backgroundColor: "#2c2c3e",
        borderRadius: 10,
        marginBottom: 15,
    },
    title: {
        width: "60%",
        height: 20,
    },
    image: {
        width: "100%",
        height: 150,
    },
    text: {
        width: "90%",
        height: 15,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#2c2c3e",
        borderRadius: 10,
        marginBottom: 15,
        padding: 10,
    },
    cardImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    cardContent: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
    },
    cardTitle: {
        width: "70%",
        height: 15,
        marginBottom: 10,
    },
    cardText: {
        width: "90%",
        height: 10,
    },
});