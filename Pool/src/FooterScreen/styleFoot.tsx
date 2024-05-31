import { StyleSheet } from "react-native"


const styleFoot = StyleSheet.create({

    FooterContainer:{
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'black',
        flexDirection: 'row',
        height: 100, // Adjusted height for a typical footer
        width: '100%', // Ensure it takes the full width
        position: 'absolute', // Position it absolutely
        bottom: 0, // Place it at the bottom
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center' 
    


    },

    FooterHome:{

    },

    FooterActivity:{

    },

    FooterNotification:{

    },

    FooterSetting:{

    },

})

export default styleFoot;