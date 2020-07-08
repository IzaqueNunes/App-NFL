import React from 'react';
import {View, Text, StyleSheet, Animated,Image , TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';



export default function ListItem({data, handleLeft, handleRight}){

    function LeftActions(progress, dragX){

        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        })



        return(
            <View style={styles.leftaction}>
                <Animated.Text style={[styles.textaction, { transform:[{ scale }] }]}>Você votou no {data.time1}</Animated.Text>

            </View>
            
        );
    }

    function RightActions(progress, dragX){

        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        })



        return(
            
                <View style={styles.rightaction}>
                    <Animated.Text style={[styles.textaction, { transform: [{ scale }] }]}>Você votou no {data.time2}
                        {/* <Image
                            source={{uri: 'https://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Find.png'}}
                            style={{width: 60, height:60, paddingVertical:10}}
                        /> */}
                    </Animated.Text>

                </View>
            
            
        );
    }





    return(
        <Swipeable
        renderLeftActions={LeftActions}
        renderRightActions={RightActions}
        onSwipeableLeftOpen={handleLeft}
        onSwipeableRightWillOpen={handleRight}
        >
            <View style={styles.container}>
                <Text style={styles.text}> <Image style={{width:50, height:50}} source={{uri:data.img1}}/> vs <Image style={{width:50, height:50}} source={{uri:data.img2}}/></Text>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFF",
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal: 10,
        paddingVertical: 55,
    },
    text:{
        alignItems:'center',
        justifyContent: 'center',
        fontSize: 17,
        color:"#191919" 
    },
    leftaction:{
        backgroundColor:"#b7a369",
        justifyContent:'center',
    },
    textaction:{
        color:"#191919",
        paddingHorizontal: 10,
        fontSize: 17
    },
    rightaction:{
        backgroundColor:"#b7a369",
        justifyContent:'center',
        
    },
});
