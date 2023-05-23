import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { FlatList, View } from "react-native-web";
import { db } from "../config/firebase";


export default function CarroScreen() {
    const [busca, setBusca] = useState(''); // o useState é o responsável por criar variáveis ou estados no React
    const [resultadoCarro, setResultado] = useState([]);

    async function buscarCarro() {
        const carroRef = collection( db, 'carro'); // o nome da coleção lá no Firestore
        const buscaCarro = query(carroRef, where('NomeCarro', '==', busca)); 
        // neste momento que a busca é realmente executada no banco de dados
        const resultado = await getDocs(buscaCarro);
        const listaCarro = resultado.docs.map(doc => doc.data());
        console.log(listaCarro);
        setResultado(listaCarro);
    }  
    
    useEffect(
        () => {
            buscarCarro();
        }, [busca]
    )

    return (
        <View>
            <Text>Carros</Text>
            <TextInput
                label="Busca"
                value={busca}
                onChangeText={ setBusca }
            />
            <FlatList
            data={resultadoCarro}
            renderItem={({item}) => (
                <View>
                <Text>Nome: {item.NomeCarro}</Text>
                <Text>Marca: {item.MarcaCarro}</Text>
                <Text>Preço: R${item.PrecoCarro}</Text>
                </View>
            )}
            key={(item) => item.id}
            />
        </View>
    )
}   