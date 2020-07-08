import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

import ListItem from '../../ListItem';





export default function Produtos({navigation}){

const jogosNFL = [
    {id: '1', time1: 'Colts', time2:'Eagles', img1:'https://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Find.png', img2: 'https://i.pinimg.com/originals/08/c9/b8/08c9b80976757934e448ed23b5beeb50.png'},
    {id: '2', time1: 'Jets', time2: 'Giants', img1:'https://a3.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Fnyj.png', img2: 'https://www.clipartmax.com/png/middle/421-4210741_nfl-new-york-popsockets-new-york-giants.png'},
    {id: '3', time1: 'Panthers', time2: 'Jaguars', img1:'https://img2.gratispng.com/20180618/ysu/kisspng-carolina-panthers-nfl-denver-broncos-atlanta-falco-carolina-panthers-5b27565d7c28c5.9042469715293046695086.jpg', img2: 'https://i.pinimg.com/originals/5b/e5/9e/5be59ec6bbcfca32d5cd069f9605322c.png'},
    {id: '4', time1: 'Patriots', time2: 'Lions', img1:'https://upload.wikimedia.org/wikipedia/pt/thumb/b/b9/New_England_Patriots_logo.svg/1200px-New_England_Patriots_logo.svg.png', img2:'https://lh3.googleusercontent.com/proxy/0Y0YjM4zC3_5QJk-BJkjtM5_Vaxm2wqd2iHliFLUaglsd-dWBbZBapL8wk9Wz_dy7fFt0qmA-bD8mExZRBLyzxTYaBcQ66vK1BRha1Tu5FZrll5h9nk'},
    {id: '5', time1: 'Chiefs', time2: 'Bengals', img1: 'https://lh3.googleusercontent.com/proxy/qbZhmuIOPmxOFjlh47HTCBE83DjuvR5toMcbxMu_fYKGqPKQGOlp3Bidm1v6JeKIEpKmgUuTTn8D6ccvLR3gKomEOIOldCLdypVMWq2IQaxe7HcM9mY', img2:'https://img2.gratispng.com/20180830/gap/kisspng-cincinnati-bengals-logo-american-football-nfl-deca-cinncinati-bengals-logo-svg-vector-amp-png-trans-5b888628c19024.8368538915356738967928.jpg'},
    {id: '6', time1: 'Redskins', time2: 'Titans', img1:'https://images.vexels.com/media/users/3/142052/isolated/preview/4b88c0089ba7a3e9fbd2e4879b791624-washington-redskins-futebol-americano-by-vexels.png', img2:'https://img2.gratispng.com/20180326/kpq/kisspng-tennessee-titans-nfl-draft-kansas-city-chiefs-san-nfl-5ab8f613528283.205001101522071059338.jpg'},
];



    return(
        <View style={styles.container}>
            <FlatList
                data={jogosNFL}
                keyExtractor={item=> item.id}
                renderItem={({ item }) => (
                    <ListItem
                    data={item}
                    handleLeft={()=> alert('Obrigado pelo seu voto!')}
                    handleRight={()=> alert('Obrigado pelo seu voto!')}
                    />
                )}
                ItemSeparatorComponent={()=> <Separator/>}
            />
        </View>            
    );
}

const Separator= ()=> <View style={{flex:1, height: 2, backgroundColor:'#b7a369'}}></View>

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF',
        paddingTop: 10,
        paddingHorizontal:20,
    },
    item:{
        alignContent:'center',
        marginTop:15,
        padding: 30,
        backgroundColor:'#36063B',
        color:'#fff',
        fontSize: 22,
        marginHorizontal:10,

    },
    preco:{

    },
    descricao:{

    }


});