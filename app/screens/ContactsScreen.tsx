import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

// Define the type for each contact item
interface Contact {
  id: string;
  name: string;
  phone: string;
}

const contacts: Contact[] = [
  { id: '1', name: 'Mom', phone: '+91 9876543210' },
  { id: '2', name: 'Best Friend', phone: '+91 9123456789' },
  { id: '3', name: 'Local Police', phone: '100' },
];

const ContactsScreen = () => {
  // Define renderItem with proper type for item
  const renderItem = ({ item }: { item: Contact }) => (
    <View style={styles.contactItem}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.phone}>{item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Contacts</Text>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff0f5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff1493',
    marginBottom: 20,
  },
  contactItem: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    width: '90%',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff1493',
  },
  phone: {
    fontSize: 16,
    color: '#8b008b',
  },
});

export default ContactsScreen;
