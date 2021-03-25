import React from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native'


const User = (props) => {

    const USER = {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        uID: '000001',
        UserName: 'a@FDM.co.uk',
        DateCreated: '10-03-2021',
        FirstName: 'louie',
        LastName: 'ormston',
        Dob: '10/04/2000',
        Weight: '80',
        Height: '180',
    }
    return (
    <View>
        <View>
            <Text>Modify User</Text>
        </View>
        <View style= {styles.container}>
            <Text>ID:</Text>
            <TextInput 
                style ={styles.search}
                placeholder= {USER.id}
                s/>
            <Text>User ID:</Text>
            <TextInput 
                style ={styles.search}
                placeholder= {USER.uID}
                s/>
            <Text>UserName:</Text>
            <TextInput 
                style ={styles.search}
                placeholder= {USER.UserName}
                s/>
            <Text>Date Created:</Text>
            <TextInput 
                style ={styles.search}
                placeholder= {USER.DateCreated}
                s/>
            <Text>First Name:</Text>
            <TextInput 
                style ={styles.search}
                placeholder= {USER.FirstName}
                s/>
            <Text>Last Name:</Text>
            <TextInput 
                style ={styles.search}
                placeholder= {USER.LastName}
                s/>
            <Text>Dob:</Text>
            <TextInput 
                style ={styles.search}
                placeholder= {USER.Dob}
                s/>
            <Text>Weight:</Text>
            <TextInput 
                style ={styles.search}
                placeholder= {USER.Weight}
                s/>
            <Text>Height:</Text>
            <TextInput 
                style ={styles.search}
                placeholder= {USER.Height}
                s/>
            <Button title="Update" >
            </Button>
            <Button title="Delete" >
            </Button>
        </View>
    </View>
    );
}
export default User;

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    search: {
        backgroundColor: "white",
        width: 400,
        height: 40,
    },
})