/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { View } from 'react-native';
import { styles } from './card.styles';
export const Card: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};
