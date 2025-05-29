import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const contacts = [
  { id: '1', name: 'Mom', phone: '+91 9876543210' },
  { id: '2', name: 'Best Friend', phone: '+91 9123456789' },
  { id: '3', name: 'Local Police', phone: '100' },
];

const ContactsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Emergency Contacts</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => Linking.openURL(`tel:${item.phone}`)}>
            <View style={styles.contactItem}>
              <FontAwesome name="phone" size={20} color="#FF69B4" />
              <Text style={styles.contactText}>{item.name} - {item.phone}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff0f5',
  },
  header: {
    fontSize: 24,
    color: '#ff1493',
    marginBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  contactText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
});

export default ContactsScreen;
