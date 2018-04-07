import React, {Component} from 'react';
import {Image, Text, View, Linking} from 'react-native';
import {CardSection, Button, Card} from '../common';

const AlbumDetails = ({album}) => {
    const {title, artist, thumbnail_image, image, url} = album;
    const {
        thumbnailStyles,
        headerContentStyles,
        thumbnailContainerStyles,
        headerTextStyles,
        imageStyle
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyles}>
                    <Image style={thumbnailStyles} source={{uri: thumbnail_image}}/>
                </View>
                <View style={headerContentStyles}>
                    <Text style={headerTextStyles}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{uri: image}}/>
            </CardSection>

            <CardSection>
                <Button onPressCustom={() => {
                    Linking.openURL(url)
                }}>Buy Now</Button>
            </CardSection>
        </Card>
    );
};

export default AlbumDetails;

const styles = {
    headerContentStyles: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyles: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyles: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerTextStyles: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageStyle: {
        height: 300,
        width: null,
        flex: 1
    }
};