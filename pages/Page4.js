import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';


export default class Page4 extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 1, backgroundColor: 'gray'}}>
                <Text style={styles.welcome}>
                    欢迎来到Page4
                </Text>
                <Button
                    title="Open Drawer"
                    onPress={() => {
                navigation.navigate('DrawerOpen')
            }}
                />
                <Button
                    title="Toggle Drawer"
                    onPress={() => {
                        navigation.navigate('DrawerToggle')
                    }}
                />
                <Button
                    title="Go to Page5"
                    onPress={() => {
                        navigation.navigate('Page5')
                    }}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
