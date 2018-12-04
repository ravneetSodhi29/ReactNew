import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class Hero extends React.Component {
    render() {
        return (
            <Image
                source={require('./images/download.png')} />
        )
    }
}