import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Card } from 'react-native-elements';

const Home = () =>{
    return(
        <ScrollView style={styles.container}>
            <ScrollView style={styles.scroll_categorias} horizontal={true}>
                <TouchableOpacity
                    onPress={() => console.log('Categoria 1 foi clicada')}
                    style={styles.button_categoria}
                >
                    <View style={styles.view_itens_categoria}>
                        <Text style={styles.texto_nome_categoria}>{'Categoria 1'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Categoria 2 foi clicada')}
                    style={styles.button_categoria}
                >
                    <View style={styles.view_itens_categoria}>
                        <Text style={styles.texto_nome_categoria}>{'Categoria 2'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Categoria 3 foi clicada')}
                    style={styles.button_categoria}
                >
                    <View style={styles.view_itens_categoria}>
                        <Text style={styles.texto_nome_categoria}>{'Categoria 3'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Categoria 4 foi clicada')}
                    style={styles.button_categoria}
                >
                    <View style={styles.view_itens_categoria}>
                        <Text style={styles.texto_nome_categoria}>{'Categoria 4'}</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <Text>{'Recentes'}</Text>
            <ScrollView horizontal={true}>
                <Card>
                    <Card.Image source={require('../../assets/check.png')}/>
                    <Card.Divider />
                    <Card.Title>
                        Título
                    </Card.Title>
                    <Text>Descrição</Text>
                </Card>
                <Card>
                    <Card.Image source={require('../../assets/check.png')}/>
                    <Card.Divider />
                    <Card.Title>
                        Título
                    </Card.Title>
                    <Text>Descrição</Text>
                </Card>
                <Card>
                    <Card.Image source={require('../../assets/check.png')}/>
                    <Card.Divider />
                    <Card.Title>
                        Título
                    </Card.Title>
                    <Text>Descrição</Text>
                </Card>
                <Card>
                    <Card.Image source={require('../../assets/check.png')}/>
                    <Card.Divider />
                    <Card.Title>
                        Título
                    </Card.Title>
                    <Text>Descrição</Text>
                </Card>
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#8E61E9',
        padding: 16,
    },

    scroll_categorias:{
        flexGrow:0,
    },

    view_itens_categoria:{
        width: 120,
        height: 120,
        backgroundColor: "#5F90F4",
        alignContent:'center',
        justifyContent:'center',
    },

    button_categoria:{
        alignItems:'center',
        padding: 10,
    },

    texto_nome_categoria:{
        color: '#fff',
        textAlign:'center',
    }

});

export default Home;