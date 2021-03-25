import React from 'react';
import { useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import User from './user';



function Users() {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          uID: '000001',
          UserName: 'a@FDM.co.uk',
          DateCreated: '10-03-2021',
          FirstName: 'louie',
          LastName: 'ormston',
          Dob: '10/04/2000',
          Weight: '80',
          Height: '180',



        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          uID: '000002',
          UserName: 'b@FDM.co.uk',
          DateCreated: '10-03-2021',
          FirstName: 'louie',
          LastName: 'ormston',
          Dob: '10/04/2000',
          Weight: '80',
          Height: '180',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          uID: '000003',
          UserName: 'c@FDM.co.uk',
          DateCreated: '10-03-2021',
          FirstName: 'louie',
          LastName: 'ormston',
          Dob: '10/04/2000',
          Weight: '80',
          Height: '180',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',
            uID: '000004',
            UserName: 'd@FDM.co.uk',
            DateCreated: '11-03-2021',
            FirstName: 'louie',
            LastName: 'ormston',
            Dob: '10/04/2000',
            Weight: '80',
            Height: '180',
        },
      ];

    
    
    const renderItem = ({ item }) => (

        <View>
            <View  style={styles.list}> 
            <Text style={styles.idfield}>{item.uID}</Text>
            <Text style={styles.usernamefield}>{item.UserName}</Text>
            <Text style={styles.dcfield}>{item.DateCreated}</Text>
            <Button title="View" onPress={() => getUser(item)}>
            </Button>
            </View>
        </View>

        
    );
    return(
        <View style={styles.container}>
            <User />
            <Text style={styles.subheading}>Users</Text>
            <TextInput 
            style ={styles.search}
            placeholder= "Search User Table"
            s/>
            
            <View style={styles.headerlist}>
                    <Text style={styles.idheader}>ID</Text>
                    <Text style={styles.usernameheader}>UserName</Text>
                    <Text style={styles.dcheader}>Created</Text>
                </View>
            <View >
                <FlatList
                    style={styles.listcontainer}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            
        </View>
    );
    
}

export default Users;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    subheading: {
        fontSize: 40,
    },
    search: {
        backgroundColor: "white",
        width: 400,
        height: 40,
    },
    userListView: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: 'center',
    },
    list: {
        flex: 1,
        flexDirection: 'row',
        width: "100%",
    },
    headerlist: {
        flexDirection: 'row',
        width: "100%",
        marginTop: 20,
        marginBottom: 15,
    },
    idfield: {
        width: "15%",
        marginVertical: 10,
    },
    usernamefield: {
        width: "45%",
        marginVertical: 10,
    },
    dcfield: {
        width: "20%",
        marginVertical: 10,
    },
    viewuserbutton: {
        width: "20%",
        marginVertical: 5,
    },
    listcontainer: {
        
        padding: 0,
        
    },
    idheader: {
        position: 'absolute',
        left: -190,
        fontWeight: "700",
    },
    usernameheader: {
        position: 'absolute',
        left: -135,
        fontWeight: "700",
        
    },
    dcheader: {
        position: 'absolute',
        left: 38,
        fontWeight: "700",
    }
    
});