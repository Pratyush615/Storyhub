import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import { Header } from 'react-native-elements'

export default class WriteStoryScreen extends React.Component {
    render() {
        return (
            <View>
                <Header centerComponent={{ text: "Story Hub" }} />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Story Title"
                />
                <TextInput
                    style={styles.inputBox}

                    placeholder="Author of The Story"
                />
                <TextInput
                    style={styles.inputBox}

                    placeholder="Write your Story"
                    multiline={true}
                />
                <TouchableOpacity 
                style={styles.submitButton}
                >
                    <Text
                    style={styles.submitButtonText}
                    >Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputBox: {
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 20
    },
    submitButton: {
        backgroundColor: '#FBC02D',
        width: 100,
        height: 50
    },
    submitButtonText: {
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    }
})