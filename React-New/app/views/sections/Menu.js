import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export class Menu extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    onPress = () => {
        Alert.alert('You tapped the button');
    }


    render() {
        return (
            <View>
                <View>
                    <TouchableOpacity onPress={this.props.navigate('ContactRT')}>
                        <Text>Contact</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}