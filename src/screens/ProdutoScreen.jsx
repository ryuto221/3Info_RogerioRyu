import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { FlatList, View } from "react-native-web";
import { db } from "../config/firebase";


export default function ProdutoScreen() {
    const [busca, setBusca] = useState(''); // o useState é o responsável por criar variáveis ou estados no React
    const [resultadoProdutos, setResultado] = useState([]);

    async function buscarProduto() {
        const produtoRef = collection( db, 'produto'); // o nome da coleção lá no Firestore
        const buscaProduto = query(produtoRef, where('NomeProduto', '==', busca)); 
        // neste momento que a busca é realmente executada no banco de dados
        const resultado = await getDocs(buscaProduto);
        const listaProdutos = resultado.docs.map(doc => doc.data());
        console.log(listaProdutos);
        setResultado(listaProdutos);
    }  
    
    useEffect(
        () => {
            buscarProduto();
        }, [busca]
    )

    return (
        <View>
            <Text>Frutas</Text>
            <TextInput
                label="Busca"
                value={busca}
                onChangeText={ setBusca }
            />
            <FlatList
            data={resultadoProdutos}
            renderItem={({item}) => (
                <View>
                <Text>Nome: {item.NomeProduto}</Text>
                <Text>Quantidade: {item.QuantidadeProduto}</Text>
                <Text>Preço: R${item.PrecoProduto}</Text>
                </View>
            )}
            key={(item) => item.id}
            />
        </View>
    )
}   