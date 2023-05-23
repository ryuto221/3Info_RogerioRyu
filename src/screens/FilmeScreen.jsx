import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { FlatList, View } from "react-native-web";
import { db } from "../config/firebase";


export default function FilmeScreen() {
    const [busca, setBusca] = useState(''); // o useState é o responsável por criar variáveis ou estados no React
    const [resultadoFilme, setResultado] = useState([]);

    async function buscarFilme() {
        const filmeRef = collection( db, 'filme'); // o nome da coleção lá no Firestore
        const buscaFilme = query(filmeRef, where('NomeFilme', '==', busca)); 
        // neste momento que a busca é realmente executada no banco de dados
        const resultado = await getDocs(buscaFilme);
        const listaFilme = resultado.docs.map(doc => doc.data());
        console.log(listaFilme);
        setResultado(listaFilme);
    }  
    
    useEffect(
        () => {
            buscarFilme();
        }, [busca]
    )

    return (
        <View>
            <Text>Filmes</Text>
            <TextInput
                label="Busca"
                value={busca}
                onChangeText={ setBusca }
            />
            <FlatList
            data={resultadoFilme}
            renderItem={({item}) => (
                <View>
                <Text>Nome: {item.NomeFilme}</Text>
                <Text>Ano: {item.AnoFilme}</Text>
                <Text>Diretor: {item.DiretorFilme}</Text>
                </View>
            )}
            key={(item) => item.id}
            />
        </View>
    )
}   