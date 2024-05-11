import { Image, StyleSheet, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native-reanimated/lib/typescript/Animated';


export default function HomeScreen() {
  return (
    <View>
      <Text> Car Pool</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
