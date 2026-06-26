//1 - apagar a pasta "app-example"
//2 - renomear "index.tsx" para "index.jsx"

//3 - implementar o roteador
import { useRouter } from "expo-router";
import { Text, View, Button } from "react-native";

export default function Index() {
  //4 - criar o objeto responsável por fazer a navegação entre páginas do aplicativo
  const roteador = useRouter();

  //Retorna o conteúdo da página
  return(
    //Cria uma view para organizar os elementos. A propriedade "style" é um objeto que define o estilo da view, que está delimitado, definido em javascript por chaves. Primeira = definir o objeto; segunda = propiedades do objeto
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }} >
      {/*Texto de visualização*/}
      <Text>Edit app/index.tsx to edit this screen.</Text>

      {/*Este botão, usando uma expressão lâmbida, chama a função "push" do roteador, que é responsável por abrir a página de "consulta cep"*/}
      <Button title="+ Adicionar resposável" onPress={() => roteador.push("./responsavel")} />

      <Button title="+ Adicionar cuidador" onPress={() => roteador.push("./cuidador")} />

      <Button title="+ Adicionar idoso" onPress={() => roteador.push("./idoso")} />
    </View>
  );
}

//implementar o roteador em todas as páginas import { useRouter } from "expo-router";