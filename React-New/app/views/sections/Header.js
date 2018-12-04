import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    toggleUser = () => {
        this.setState(previousState => {
            return { isLoggedIn: !previousState.isLoggedIn };
        });
    }

    render() {
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        return (
            <View>
                <Image
                    source={require('./images/download.png')} />
                < Text onPress={this.toggleUser} > {display}</Text >
            </View>
        );
    }
}