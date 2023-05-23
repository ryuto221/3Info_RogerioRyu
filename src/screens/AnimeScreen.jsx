import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { FlatList, View } from "react-native-web";
import { db } from "../config/firebase";


export default function AnimeScreen() {
    const [busca, setBusca] = useState(''); // o useState é o responsável por criar variáveis ou estados no React
    const [resultadoAnime, setResultado] = useState([]);

    async function buscarAnime() {
        const animeRef = collection( db, 'anime'); // o nome da coleção lá no Firestore
        const buscaAnime = query(animeRef, where('NomeAnime', '==', busca)); 
        // neste momento que a busca é realmente executada no banco de dados
        const resultado = await getDocs(buscaAnime);
        const listaAnime = resultado.docs.map(doc => doc.data());
        console.log(listaAnime);
        setResultado(listaAnime);
    }  
    
    useEffect(
        () => {
            buscarAnime();
        }, [busca]
    )

    return (
        <View>
            <Text>Animes</Text>
            <TextInput
                label="Busca"
                value={busca}
                onChangeText={ setBusca }
            />
            <FlatList
            data={resultadoAnime}
            renderItem={({item}) => (
                <View>
                <Text>Nome: {item.NomeAnime}</Text>
                <Text>Episódios: {item.EpisodioAnime}</Text>
                <Text>Protagonista: {item.ProtagonistaAnime}</Text>
                </View>
            )}
            key={(item) => item.id}
            />
        </View>
    )
}   