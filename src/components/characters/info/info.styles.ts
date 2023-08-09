/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
    },
    photo: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 3,
    },
    name:{
        fontSize: 18,
        fontWeight: '600',
        color: colors.secondary_variant,
    }
});
