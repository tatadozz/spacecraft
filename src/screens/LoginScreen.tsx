import { View, Text, StyleSheet, Touchable, Linking } from 'react-native';
import React from 'react';
import { Headline, TextInput, Button, Colors } from 'react-native-paper';
import Header from '../components/Header';

type Props = {};

const LoginScreen = (props: Props) => {
    const [text, setText] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    const [visible, setVisible] = React.useState(true);

    let vEye = "";
    visible ? vEye = "eye-off" : vEye = "eye";

    return (
        <View>
            <View style={styles.header}>
                <Headline><Text style={styles.text}>Welcome to STARPORT</Text></Headline>
            </View>
            <View style={styles.form}>

                <TextInput
                    style={styles.fields}
                    label="Email"
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    style={styles.fields}
                    label="Password"
                    value={pwd}
                    secureTextEntry={visible}
                    onChangeText={pwd => setPwd(pwd)}
                    right={<TextInput.Icon name={vEye} onPress={() => { setVisible(!visible) }} />}
                />
                <Button style={[styles.fields, styles.loginBtn]} icon="train" mode="contained" onPress={() => console.log('Tried to login')}>
                    <Text style={styles.text}>Login</Text>
                </Button>
            </View>
            <Text style={styles.link} onPress={() => Linking.openURL('http://google.com')}>Read Conditions and Terms</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.purple500,
        height: 200,
    },
    form: {
        padding: 30
    },
    fields: {
        marginVertical: 10
    },
    loginBtn: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    },
    text: {
        fontSize: 26,
        fontWeight: "bold",
        color: "white"
    },
    link: {
        textAlign: "center",
        fontSize: 18,
        color: Colors.grey500
    }
})

export default LoginScreen;
