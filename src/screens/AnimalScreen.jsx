import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { FlatList, View } from "react-native-web";
import { db } from "../config/firebase";


export default function AnimalScreen() {
    const [busca, setBusca] = useState(''); // o useState é o responsável por criar variáveis ou estados no React
    const [resultadoAnimal, setResultado] = useState([]);

    async function buscarAnimal() {
        const animalRef = collection( db, 'animalmitico'); // o nome da coleção lá no Firestore
        const buscaAnimal = query(animalRef, where('NomeAnimal', '==', busca)); 
        // neste momento que a busca é realmente executada no banco de dados
        const resultado = await getDocs(buscaAnimal);
        const listaAnimal = resultado.docs.map(doc => doc.data());
        console.log(listaAnimal);
        setResultado(listaAnimal);
    }  
    
    useEffect(
        () => {
            buscarAnimal();
        }, [busca]
    )

    return (
        <View>
            <Text>Animais Míticos</Text>
            <TextInput
                label="Busca"
                value={busca}
                onChangeText={ setBusca }
            />
            <FlatList
            data={resultadoAnimal}
            renderItem={({item}) => (
                <View>
                <Text>Nome: {item.NomeAnimal}</Text>
                <Text>Cor: {item.CorAnimal}</Text>
                <Text>Origem: {item.NasciAnimal}</Text>
                </View>
            )}
            key={(item) => item.id}
            />
        </View>
    )
}   