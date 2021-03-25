import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';


function AdminMenu() {
    return(
        <View>
            <Button title="Manage Users"/>
            <Button title="Reported Bugs"/>
            <Button title="Support Tickets"/>
        </View>
    )
    
}

export default AdminMenu;