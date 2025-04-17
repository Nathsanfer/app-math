import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{
                    drawerActiveTintColor: "#f9a620", // Cor dos ícones ativos
                    drawerInactiveTintColor: "#666", // Cor dos ícones inativos
                    drawerStyle: {
                        backgroundColor: "#f5f5f5", // Cor de fundo do Drawer
                    },
                }}
            >
                <Drawer.Screen
                    name="index"
                    options={{
                        drawerLabel: 'Início',
                        title: 'Home',
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="calculator"
                    options={{
                        drawerLabel: 'Calculadora',
                        title: 'Calculadora',
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="calculator" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="count"
                    options={{
                        drawerLabel: 'Contador',
                        title: 'Contador',
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="stats-chart" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="generator"
                    options={{
                        drawerLabel: 'Gerador',
                        title: 'Gerador',
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="construct" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="lorem"
                    options={{
                        drawerLabel: 'Lorem Ipsum',
                        title: 'Gerador de Lorem Ipsum',
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="text" size={size} color={color} />
                        ),
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}