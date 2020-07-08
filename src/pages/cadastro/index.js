import React, {useState, useEffect} from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Animated } from 'react-native';

export default function Cadastro( {routes,navigation} ){
    const [offset]= useState(new Animated.ValueXY({x: 95, y: 0}));
    const [opacity] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.parallel([
            Animated.spring(offset.x, {
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
    
    return(
        <KeyboardAvoidingView style={styles.background} 
            options={{
                headerShown:false
            }}>
            <Animated.View 
                style={[
                    styles.container,
                    {
                    opacity: opacity,
                    useNativeDriver:true,
                    transform:[
                        {translateX: offset.x}
                    ]  
                    }
                ]}>

                <TextInput
                style={styles.input} 
                placeholder="Nome completo"
                autoCorrect={false}
                onChangeText={()=>{}}
                />

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
                    <Text style={styles.submitText} onPress={()=>(navigation.navigate('Home'))}>Criar conta</Text>
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

});