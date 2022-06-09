import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native"
import { ImageBackground } from "react-native-web";

const bgImage=require("../assets/background2.png")
const appIcon=require("../assets/appIcon.png")
const appName=require("../assets/appName.png")

export default class LoginScreen extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <ImageBackground source={bgImage} style={styles.bgImage}>
                    <View style={styles.upperContainers}>
                        <Image source={appIcon} style={styles.appIcon}/>
                        <Image source={appName} style={styles.appName}/>
                    </View>
                    <View style={styles.lowerContainer}>
                        <TextInput
                        style={styles.textInput}
                        onChangeText={text => this.setState({email:text})}
                        placeholder={"ingresa correo electronico"}
                        placeholderTextColor={"#FFFFFF"}
                        autoFocus
                        />
                        <TextInput
                        style={[styles.textInput, {marginTop:20}]}
                        onChangeText={text => this.setState({password:text})}
                        placeholder={"ingresa contraseña"}
                        placeholderTextColor={"#FFFFFF"}
                        secureTextEntry
                        />
                        <TouchableOpacity style={[styles.bottom,{marginTop:20}]}
                        onPress={() => this.handleLogin(email,password)}
                        >
                            <Text style={styles.buttomText}>Ingresar</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#FFFFFF"
    },
    bgImage:{
        flex:1,
        resizeMode:"cover",
        justifyContent:"center"
    },
    upperContainers:{
        flex:0.5,
        justifyContent:"center",
        alignItems:"center"
    },
    appIcon:{
        width:280,
        height:280,
        resizeMode:"contain",
        marginTop:80
    },
    appName:{
        width:130,
        height:130,
        resizeMode:"contain"
    },
    lowerContainer:{
        flex:0.5,
        alignItems:"center"
    },
    textInput:{
        width:"75%",
        height:"55",
        padding:10,
        borderColor:"#FFFFFF",
        borderWidth:4,
        borderRadius:10,
        fontSize:2.18,
        color:"#FFFFFF",
        fontFamily:"Rajdhani_600SemiBold",
        backgroundColor:"#5653D4" 
    },
    bottom:{
        width:"43%",
        height:"55",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F48D20",
        borderRadius:15
    },
    buttomText:{
        fontSize:24,
        color:"#FFFFFF",
        fontFamily:"Rajdhani_600SemiBold"
    }
})