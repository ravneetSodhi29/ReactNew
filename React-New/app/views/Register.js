import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Alert } from 'react-native';

export class Register extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: ''
        }
    }

    cancelRegistration = () => {
        Alert.alert("Registration Cancelled");
        this.props.navgation.navigate('HomeRT');
    }

    registerAccount = () => {
        if (!this.state.username) {
            Alert.alert('Username is empty');
        }//similarly for other fields
        else {
            AsyncStorage.getItem(this.state.username, (err, result) => {
                if (result !== null) {
                    Alert.alert('Username already exists.');
                } else {
                    AsyncStorage.setItem(this.state.username, this.state.password, (err, result) => {
                        Alert('User created successfully');
                        this.props.navgation.navgate('HomeRT');
                    })
                }
            })
        }
    }

    render() {
        return (
            <View>
                <Header />
                <Text>Contact Us</Text>

                <TextInput
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name} />

                <TextInput
                    onChangeText={(text) => this.setState({ message: text })}
                    value={this.state.message}
                    multiline={true}
                    numberOfLines={4}
                />

                <TouchableHighlight>
                    <Text>Send Message</Text>
                </TouchableHighlight>

                <TouchableHighlight>
                    <Text>Reset Form</Text>
                </TouchableHighlight>
            </View>
        )
    }
}