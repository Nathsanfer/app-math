# Atividade Prática – Criando um App com Navegação Drawer no Expo Router

## Contexto:
Você foi contratado por uma empresa de tecnologia que está desenvolvendo um aplicativo multifuncional simples, com foco em produtividade e utilitários. Sua missão é criar uma aplicação mobile utilizando React Native com Expo, organizando a navegação entre as telas com Drawer (menu lateral), utilizando o Expo Router.

## Objetivo da Atividade:
Desenvolver um app com 3 funcionalidades principais, cada uma acessada por uma rota diferente no menu lateral:
1. 🔢 Calculadora Simples: deve permitir operações básicas como soma, subtração, multiplicação e divisão entre dois números.
2. ⏱️ Contador: botão para incrementar um número e botão para zerar.
3. 🔐 Gerador de Senha: botão para gerar uma senha aleatória com letras, números e símbolos.

## Integrantes e Contribuições:
- Fernanda Alves: Responsável pela implementação da tela do gerador de senhas.
- Nathalia Santos: Responsável pela implementação da tela do contador.
- Samuel Braga: Responsável pela implementação da tela da calculadora simples, tela do gerador de lorem ipsum e o skeleton loader.

## Tecnologias Utilizadas:
- React Native
- Expo Router
- Expo
- Expo Go
- React Native Paper (para UI)
- React Native Vector Icons (para ícones)
- React Native Reanimated (para animações)
- React Native Gesture Handler (para gestos)

## Passo a Passo para Execução do Projeto:
1. **Criação do Projeto**: Crie um novo projeto com o Expo Router utilizando o seguinte comando:
   ```bash
    npx create-expo-app@latest app-math --template blank
    ```
2. **Navegação Drawer**: Instale as dependências necessárias para a navegação Drawer:
    ```bash
    npx expo install expo-router @react-navigation/drawer react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
    ```
3. **Configurar o ponto de entrada no `package.json`**:
     ```json
     "main": "expo-router/entry",
     ```
4. **Adicionar o esquema de URL no `app.json`**:
    ```json
    "expo": {
        "scheme": "app-math"
      }
    ```
5. **Limpar o cache do bundler**:
    ```bash
     npx expo start --clear
     ```
6. **Criar as telas**: Crie as telas para cada funcionalidade dentro da pasta `app`:
   - `app/index.js`: Tela inicial com o menu lateral.
   - `app/calculator.js`: Tela da calculadora simples.
   - `app/count.js`: Tela do contador.
   - `app/generator.js`: Tela do gerador de senha.
   - `app/_layout.js`: Componente de layout para o menu lateral.
7. **Implementar a lógica de cada funcionalidade**: Utilize os componentes do React Native e do React Native Paper para criar a interface e implementar a lógica de cada funcionalidade.
8. **Executar o App**: Inicie o projeto.
    ``npx expo start``
9. **Testar no Expo Go**: Utilize o aplicativo Expo Go para escanear o QR code e testar o aplicativo em um dispositivo físico ou emulador.


## Estrutura do Projeto:
```
app-math
├── app
│   ├── _layout.js
│   ├── index.js
│   ├── calculator.js
│   ├── count.js
│   ├── generator.js
|   ├── lorem.js
│   └── skeleton.js

```

## Considerações Finais:
Este projeto foi concluído com sucesso, cumprindo todos os requisitos estabelecidos inicialmente. A aplicação multifuncional foi desenvolvida utilizando React Native com Expo Router, implementando as três funcionalidades principais e mais duas funcionalidades extras. O código está organizado e modularizado, facilitando futuras manutenções e expansões. A equipe trabalhou em conjunto para garantir a qualidade e a funcionalidade do aplicativo, utilizando boas práticas de desenvolvimento e seguindo as diretrizes do React Native.
A aplicação está pronta para ser testada e utilizada, oferecendo uma experiência de usuário fluida e intuitiva. Agradecemos a oportunidade de trabalhar neste projeto e estamos abertos a feedbacks e sugestões para melhorias futuras.