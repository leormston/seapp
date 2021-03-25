import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import AdminMenu from './assets/screens/admin-menu';
import UserMenu from './assets/screens/user-menu';
import Users from './assets/screens/users';
export default function App() {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      
      <StatusBar style="auto" />
      <Text style={styles.headings}>Admin Panel</Text>
      <AdminMenu />
      <UserMenu />
      <Users />
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: 'salmon',
    alignItems: 'center',
  },
  headings: {
    fontSize: 50,
  }
});
 