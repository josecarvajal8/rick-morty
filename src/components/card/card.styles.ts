/* eslint-disable prettier/prettier */
import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 4,
        backgroundColor: colors.white,
        maxWidth: '97%',
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        ...Platform.select({
            android: {
                elevation: 5,
            },
        }),
    },
});
