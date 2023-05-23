import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { FlatList, View } from "react-native-web";
import { db } from "../config/firebase";


export default function JogoScreen() {
    const [busca, setBusca] = useState(''); // o useState é o responsável por criar variáveis ou estados no React
    const [resultadoJogo, setResultado] = useState([]);

    async function buscarJogo() {
        const jogoRef = collection( db, 'jogos'); // o nome da coleção lá no Firestore
        const buscaJogo = query(jogoRef, where('NomeJogo', '==', busca)); 
        // neste momento que a busca é realmente executada no banco de dados
        const resultado = await getDocs(buscaJogo);
        const listaJogo = resultado.docs.map(doc => doc.data());
        console.log(listaJogo);
        setResultado(listaJogo);
    }  
    
    useEffect(
        () => {
            buscarJogo();
        }, [busca]
    )

    return (
        <View>
            <Text>Jogos</Text>
            <TextInput
                label="Busca"
                value={busca}
                onChangeText={ setBusca }
            />
            <FlatList
            data={resultadoJogo}
            renderItem={({item}) => (
                <View>
                <Text>Nome: {item.NomeJogo}</Text>
                <Text>Ano: {item.AnoJogo}</Text>
                <Text>Desenvolvedor: {item.DesenvolvedorJogo}</Text>
                </View>
            )}
            key={(item) => item.id}
            />
        </View>
    )
}   