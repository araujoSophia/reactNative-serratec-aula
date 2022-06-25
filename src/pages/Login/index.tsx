import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {Input, Text, Icon, Button} from 'react-native-elements';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleLogin = ({email, senha}) => {
        console.log(`Email: ${email} - Senha: ${senha}`);
        navigation.navigate('Home');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.texto_entrada}>{'Bem-vindo'}</Text>
            <Input
            placeholder='E-mail'
            onChangeText={setEmail}
            value={email}
            leftIcon={<Icon name='user' color='#000' type='font-awesome' size={20}/>}
            inputStyle={styles.imputs}
            placeholderTextColor={'white'}
            />
            <Input
            placeholder='Senha'
            onChangeText={setSenha}
            value={senha}
            leftIcon={<Icon name='key' color='#000' type='font-awesome' size={20}/>}
            inputStyle={styles.imputs}
            placeholderTextColor={'white'}
            secureTextEntry={true}
            />
            <Button
            title='Entrar'
            onPress={() => handleLogin({email, senha})}
            titleStyle={styles.tituloButton}
            containerStyle={styles.containerButton}
            buttonStyle={styles.styleButton}
            />
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
    },

    tituloButton: {
        color: '#fff',
    },

    styleButton:{
        backgroundColor:'#000'
      },

    containerButton:{
        alignSelf:'center',
        justifyContent:'center',
        marginTop: 15,
        borderRadius:15,
        width:150,
      },

      imputs:{
        color: '#fff',
      }
});

export default Login;