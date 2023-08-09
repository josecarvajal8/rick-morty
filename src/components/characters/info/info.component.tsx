/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './info.styles';

export const InfoCharacter: FC<{ name: string, image: string }> = ({ name, image }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: image }} />
            <Text>{name}</Text>
        </View>
    );
};
