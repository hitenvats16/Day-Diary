import { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { signUpHandler, onAuthStateChanged } from "../firebase/firebaseHandler";
const SignIn = ()=>{
    const [email, setEmail] = useState('');
    const [pass, setpass] = useState('');
    return(
        <View style={styles.container}>
        <Text style={styles.heading}>SignIn Screen</Text>
        <KeyboardAvoidingView behavior='height'>
            <TextInput 
                placeholder="Email"
                style = {styles.input}
                onChangeText={(val)=>{setEmail(val)}}
            />
            <TextInput 
                placeholder="Password"
                style = {styles.input}
                onChangeText={(val)=>{setpass(val)}}
                secureTextEntry
            />
            <TouchableOpacity style={styles.signin}>
                <Text style={{color:'white'}}>SignIn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.register} onPress={()=>{
                signUpHandler(email,pass);
            }}>
                <Text style={{color: 'tomato'}}>Register</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        </View>
    );
};

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderColor: 'lightgrey',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
        width: 300,
        marginBottom: 5
    },
    signin: {
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        paddingHorizontal: 10,
        backgroundColor: 'tomato',
        borderRadius: 5,
        marginBottom: 5
    },
    register: {
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: 'tomato',
        borderWidth: 1,
    },
    heading: {
        margin: 20,
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default SignIn;