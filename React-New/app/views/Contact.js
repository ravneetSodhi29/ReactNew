import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { Header } from './sections/Header.js';
import { StackNavigator } from 'react-navigation';

export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Enter name',
            message: 'Enter message',
            email: 'Enter email'
        }
    }

    clearFields = () => this.setState = ({ name: '', email: '', message: '' });
    sendMessage = () => {
        Alert.alert('Message sent');
        this.props.navigation.goBack();
    }

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View>
                <Header />
                <Text>Contact Us</Text>

                <TextInput
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name}/>

                <TextInput
                    onChangeText={(text) => this.setState({ message: text })}
                    value={this.state.message}
                    multiline={true}
                    numberOfLines={4}
                />

                <TouchableHighlight onPress={this.sendMessage}>
                    <Text>Send Message</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.clearFields}>
                    <Text>Reset Form</Text>
                </TouchableHighlight>
            </View>
        )
    }
}