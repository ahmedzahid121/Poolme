import { StyleSheet } from "react-native";


const styleSearch = StyleSheet.create({

    SearchContainer:{
        backgroundColor: '#ffffff',
        margin: 0,
        borderRadius: 25,
        height: 900,

    },
 
    inputButton:{
        backgroundColor: '#7B18E3',
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 25,
    },

    inputText:{
        color: 'white',
        fontFamily: 'Maven Pro',
    },

    FavContainer:{
        borderRadius: 25,
        padding: 20,
        borderWidth: 2,
        borderColor: '#7B18E3',
        margin: 20,
    },

    logoContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    iconText:{
        marginTop: 5,
    },

    iconWithText: {
        alignItems: 'center',
    },

    favourite: {
        color: '#696969',
        fontWeight: 'bold',
        margin: 1.5,
        marginLeft: 30,
        marginTop: 10,
        marginBottom: -10
    },
    RecContainer: {
        borderRadius: 25,
        padding: 20,
        borderWidth: 1.5,
        borderColor: '#7B18E3',
        margin: 20,
    },
    RecentLogo: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    logoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10, 
    },
    icon: {
        marginRight: 5, 
    },

  

  
});

export default styleSearch;