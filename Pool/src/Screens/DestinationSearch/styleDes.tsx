import { StyleSheet } from "react-native";

const styleDes = StyleSheet.create({
    InvincibleCont:{
        borderRadius: 25,
        padding: 20,
        borderWidth: 2,
        borderColor: 'white',
        margin: 20, 
        marginTop: 30,
        position: 'relative',
        height: 450
    },

Container:{
        borderRadius: 35,
        padding: 20,
        borderWidth: 2,
        borderColor: '#7B18E3',
        margin: 1, 
        marginTop: -20,
        position: 'relative',
        height: 150,
        width: 350

        
},



divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#696969',
    marginVertical: 10,
    
},

InputText:{

    marginLeft: 50,
    marginBottom: 10,
    height: 500,

},
iconArrow:{
    
    position: 'absolute', 
    top: 15, 
    left: 18,  

},
icon:{

},

seperator:{
    backgroundColor: '#7B18E3',
    height: 1,
},

iconSearch:{
flexDirection: 'column',
margin: 20,
right: 30,
top: 4

},

row:{
flexDirection: 'row',
alignItems: 'center',
marginVertical: 10,
},

iconContainer:{
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,

},

locationText:{

},



});

export default styleDes;