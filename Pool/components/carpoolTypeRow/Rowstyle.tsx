import { StyleSheet } from "react-native";

const StyleRow = StyleSheet.create({
  Container: {
    borderRadius: 25,
    padding: 20,
    borderWidth: 2,
    borderColor: 'white',
    margin: 0,
    marginTop: -30,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  Sedan: {
    flexDirection: 'column',
    marginTop: -5, 
    padding: 20,
    borderWidth: 2,
    borderColor: '#7B18E3',
    borderRadius: 25,
    
  },
  Van: {
    flexDirection: 'column', 
  },
  SUV: {
    flexDirection: 'column', 
    
  },
  Price: {
    position: 'absolute', 
    top: 40, 
    right: 10, 
    fontWeight: 'bold',
     
  },
  iconUser: {
    flexDirection: 'row', // Change to column to stack items vertically
    alignItems: 'center', // Center items horizontally
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    marginBottom: -40
  },
  Text: {
    marginTop: 5,
    marginBottom: 5, 
    fontWeight: "bold",
    color: '#696969'
     
  },

  divider:{
    borderBottomWidth: 1,
    borderBottomColor: '#7B18E3',
    marginVertical: 10,
  },

  TextTime:{
    color: '#696969'

  }
});

export default StyleRow;