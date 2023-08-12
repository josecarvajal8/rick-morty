/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './card.styles';
export const Card: FC<{ children: React.ReactNode, onPress?: () => void }> = ({ children, onPress }) => {
    return (
        <>
            {onPress ?
                <TouchableOpacity onPress={onPress} style={styles.container}>
                    {children}
                </TouchableOpacity> :
                <View style={styles.container}>{children}</View>}
        </>

    );
};
