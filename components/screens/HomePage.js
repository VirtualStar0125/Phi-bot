import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function HomePage() {
    const navigation = useNavigation();

    return (
    <Animatable.View animation="fadeIn" style={styles.container}>
        <View style={styles.notebookIcon}>
        <View style={styles.notebook}>
            <View style={styles.note}></View>
        </View>
        </View>
        <View style={styles.creatorMode}>
        <View style={styles.innerButton}></View>
        </View>
        <Text style={styles.creatorModeText}>Creator Mode</Text>
        <TouchableOpacity
        style={styles.generateButton}
        onPress={() => navigation.navigate('SecondPage')}
        >
        <Text style={styles.buttonText}>Motivate me!</Text>
        </TouchableOpacity>
        <View style={styles.textBox}>
        <View style={styles.commentIcon}>
            <View style={styles.comment}>
            <View style={styles.group}>
                <View style={styles.vector}></View>
                <View style={styles.vectorSmall}></View>
            </View>
            </View>
        </View>
        <View style={styles.likeIcon}>
            <View style={styles.like}>
            <View style={styles.maskGroup}>
                <View style={styles.vectorLike}></View>
                <View style={styles.vectorLikeOverlay}></View>
            </View>
            </View>
        </View>
        <Text style={styles.generatedText}>
            Happiness looks good on you. Savor every second of this beautiful feeling!
        </Text>
        </View>
        <Image
        style={styles.mediaVideoPhoto}
        source={{ uri: 'https://via.placeholder.com/200x200' }}
        />
        <Text style={styles.title}>Joy</Text>
        <View style={styles.leftArrow}>
        <View style={styles.vectorArrow}></View>
        </View>
        <View style={styles.rightArrow}>
        <View style={styles.vectorArrow}></View>
        </View>
    </Animatable.View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 640,
        backgroundColor: 'radial-gradient(circle at 43.86% 74.50%, white 41%, #57FFC3 100%)',
        position: 'relative',
    },
    notebookIcon: {
        width: 40,
        height: 40,
        padding: 5,
        left: 28,
        top: 580,
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notebook: {
        flex: 1,
        alignSelf: 'stretch',
        paddingTop: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    note: {
        width: 25,
        height: 26.62,
        backgroundColor: 'black',
    },
    creatorMode: {
        width: 75,
        height: 30,
        paddingTop: 3,
        paddingBottom: 2,
        paddingLeft: 3,
        left: 265,
        top: 585,
        position: 'absolute',
        backgroundColor: 'rgba(131.75, 129.55, 129.55, 0.50)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        borderRadius: 19,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    innerButton: {
        width: 25,
        height: 25,
        backgroundColor: 'white',
        borderRadius: 17,
    },
    creatorModeText: {
        width: 90,
        height: 15,
        left: 258,
        top: 567,
        position: 'absolute',
        color: 'black',
        fontSize: 12,
        fontFamily: 'Spectral SC',
        fontStyle: 'italic',
        fontWeight: '700',
    },
    generateButton: {
        width: 200,
        height: 50,
        paddingTop: 8,
        paddingBottom: 9,
        paddingLeft: 13,
        paddingRight: 12,
        left: 80,
        top: 490,
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.59)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        width: 175,
        textAlign: 'center',
        color: 'black',
        fontSize: 22,
        fontFamily: 'Spectral',
        fontWeight: '700',
    },
    textBox: {
        width: 320,
        height: 121,
        left: 20,
        top: 340,
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.60)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        borderRadius: 20,
    },
    commentIcon: {
        width: 30.48,
        height: 30,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 2,
        left: 236.7,
        top: -15,
        position: 'absolute',
        backgroundColor: '#7D7D7D',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    comment: {
        flex: 1,
        alignSelf: 'stretch',
        paddingTop: 5.42,
        justifyContent: 'center',
        alignItems: 'center',
    },
    group: {
        width: 18,
        height: 15.56,
        position: 'relative',
    },
    vector: {
        width: 18,
        height: 15.56,
        backgroundColor: '#FEFEFE',
    },
    vectorSmall: {
        width: 7.88,
        height: 3.25,
        position: 'absolute',
        left: 5.06,
        top: 4.88,
        borderColor: '#FEFEFE',
        borderWidth: 1,
    },
    likeIcon: {
        width: 30.48,
        paddingTop: 5,
        paddingBottom: 3,
        paddingLeft: 4,
        left: 280.38,
        top: -15,
        position: 'absolute',
        backgroundColor: '#7D7D7D',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    like: {
        flex: 1,
        height: 22,
        paddingTop: 3.21,
        justifyContent: 'center',
        alignItems: 'center',
    },
    maskGroup: {
        width: 18.33,
        height: 15.73,
        position: 'relative',
    },
    vectorLike: {
        width: 18.33,
        height: 15.73,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 2,
    },
    vectorLikeOverlay: {
        width: 22,
        height: 22,
        position: 'absolute',
        left: -1.83,
        top: -3.21,
        backgroundColor: 'white',
    },
    generatedText: {
        width: 280,
        height: 100,
        left: 20,
        top: 10,
        position: 'absolute',
        textAlign: 'center',
        color: 'black',
        fontSize: 17,
        fontFamily: 'Spectral',
        fontStyle: 'italic',
        fontWeight: '700',
        lineHeight: 20.4,
    },
    mediaVideoPhoto: {
        width: 200,
        height: 200,
        left: 80,
        top: 100,
        position: 'absolute',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        borderRadius: 20,
    },
    title: {
        width: 300,
        height: 50,
        left: 30,
        top: 40,
        position: 'absolute',
        textAlign: 'center',
        color: '#33E465',
        fontSize: 35,
        fontFamily: 'Spectral SC',
        fontStyle: 'italic',
        fontWeight: '700',
    },
    leftArrow: {
        width: 25,
        height: 54.35,
        paddingLeft: 7.35,
        paddingRight: 7.35,
        paddingTop: 9.78,
        left: -5,
        top: 310,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    vectorArrow: {
        width: 10.31,
        height: 34.78,
        backgroundColor: 'black',
    },
    rightArrow: {
        width: 25,
        height: 54.35,
        paddingLeft: 7.35,
        paddingRight: 7.35,
        paddingTop: 9.78,
        left: 365,
        top: 360.35,
        position: 'absolute',
        transform: [{ rotate: '-180deg' }],
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
