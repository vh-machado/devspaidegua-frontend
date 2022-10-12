import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import cores from "../../assets/cores";
import BotaoVoltar from "../../components/BotaoVoltar";
import Texto from "../../components/Texto";
import BotaoCompra from "./components/BotaoCompra";

export default function Produto() {
  const route = useRoute();
  const navigation = useNavigation();
  const { nome, preco, imagem, descricao } = route.params;

  useEffect(() => {
    // Esconde a barra de navegação
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });

    // Mostra a barra de navegação novamente ao fechar a tela
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: estilos.tabBar,
      });
  }, [navigation]);

  const InfoProduto = () => {
    return (
      <View style={estilos.info}>
        <Texto style={estilos.tituloProduto}>{nome}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Texto style={estilos.descricao}>{descricao}</Texto>
        </ScrollView>

      </View>
    );
  };

  const BarraCompra = () => {
    return (
      <View style={estilos.barraCompra}>
        <BotaoCompra tipo={"cesta"} />
        <BotaoCompra tipo={"contato"} nomeProduto={nome} />
      </View>
    );
  };

  return (
    <SafeAreaView style={estilos.safeArea}>
      <View style={estilos.fundo}>
        <ImageBackground source={imagem} style={estilos.imagemProduto}>
          <BotaoVoltar tipo={"branco"} />
        </ImageBackground>

        <InfoProduto />

        <BarraCompra />
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: cores.persianGreen,
  },

  fundo: {
    height: "100%",
    backgroundColor: cores.cultured,
    paddingBottom: 70
  },

  imagemProduto: {
    height: 350,
    paddingTop: 30,
  },

  info: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 10,
  },

  tituloProduto: {
    color: cores.onyx,
    fontSize: 18,
    fontWeight: "600",
  },

  preco: {
    color: cores.persianGreen,
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 12,
  },

  descricao: {
    flex: 1,
    color: cores.onyx,
    fontSize: 12,
    fontWeight: "normal",
    marginVertical: 10,
  },

  barraCompra: {
    padding: 8,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    //iOS
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    //Android
    elevation: 3,
  },

  tabBar: {
    position: "absolute",
    bottom: 0,
    height: 53,
    backgroundColor: "white",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
});
