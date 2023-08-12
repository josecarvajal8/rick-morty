/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './info.styles';
import { colors } from '../../../constants/colors';

export const InfoCharacter: FC<{ name: string, image: string, species: string }> = ({ name, image, species }) => {
    const borderColor = species === 'Human' ? colors.primary : colors.secondary;
    return (
        <View style={styles.container}>
            <Image style={{ ...styles.photo, borderColor }} source={{ uri: image }} />
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};
