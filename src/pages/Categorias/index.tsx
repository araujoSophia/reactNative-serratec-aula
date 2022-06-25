import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Text } from 'react-native-elements';

const Categorias = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.texto_entrada}>{'CATEGORIAS'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#8E61E9',
        padding: 16,
        alignItems: 'stretch',
        justifyContent: 'center'
    },

    texto_entrada:{
        fontWeight: 'bold',
        fontSize:30,
        marginBottom:20,
        color: '#fff',
        alignSelf:'center',
    }

});

export default Categorias;