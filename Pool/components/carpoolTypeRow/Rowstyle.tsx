import { StyleSheet } from "react-native";

const StyleRow = StyleSheet.create({
  Container: {
    borderRadius: 25,
    padding: 20,
    borderWidth: 2,
    borderColor: 'white',
    margin: 10,
    marginTop: -30,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  Sedan: {
    flexDirection: 'column',
    marginTop: -20, 
    
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
    marginBottom: 5 // Add some margin for separation
     
  },
});

export default StyleRow;