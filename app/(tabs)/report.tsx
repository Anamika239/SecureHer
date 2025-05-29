import { StyleSheet, Text, View } from 'react-native';

export default function Report() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📝 Report Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#FFA500',
  },
});
