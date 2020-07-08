import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Animated} from 'react-native';
import { Image } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
//import {Firebase} from 'react-native-firebase';


export default function Home({ navigation }) {

    const [offset]= useState(new Animated.ValueXY({x: 0, y: 95}));
    const [opacity] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20,
                useNativeDriver:true
            }),
            Animated.timing(opacity, {
                toValue:1,
                duration:200,
                useNativeDriver: true
            })
        ]).start();
    }, []);

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Image
                    source={{uri: 'https://i.dlpng.com/static/png/5043217-eagles-png-logo-free-transparent-png-logos-png-logo-1175_675_preview.png'}}
                    style={{ width: 200, height:110}}
                />
            </View>

            <Animated.View 
                style={[
                    styles.container,
                    {
                    opacity: opacity,
                    useNativeDriver:true,
                    transform:[
                        {translateY: offset.y}
                    ]  
                    }
                ]}>
                <TextInput 
                style={styles.input}
                placeholder="Email"
                autoCorrect={false}
                onChangeText={()=>{}}
                />

                <TextInput
                style={styles.input} 
                secureTextEntry={true}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={()=>{}}
                />

                <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.submitText} onPress={()=>(navigation.navigate('Produtos'))}>Acessar</Text>
                </TouchableOpacity>

                
                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.textRegister} onPress={()=> (navigation.navigate('Cadastro'))}>Criar conta gratuita</Text>
                </TouchableOpacity>
            </Animated.View>


        </KeyboardAvoidingView>



    );

}

const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor:"#191919"
    },
    containerLogo:{
        flex:1,
        justifyContent:'center',
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        width: '90%'

    },
    input: {
        backgroundColor:"#fff",
        width:'90%',
        marginBottom:15,
        color: '#222',
        fontSize: 17,
        borderRadius:7,
        padding:13
    },
    btnSubmit: {
        backgroundColor: '#b7a369',
        width: '40%',
        height: 45,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitText:{
        color:"#fff",
        fontSize:17
    },
    btnRegister:{
        marginTop:15,

    },
    textRegister:{
        color:"#FFF"
    }

});