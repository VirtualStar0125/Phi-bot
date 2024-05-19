import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function sadnessPage() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Sadness Page</Text>
        <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('HomePage')}
        >
            <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    backButton: {
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});
