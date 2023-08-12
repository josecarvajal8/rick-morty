/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    navbar: {
        backgroundColor: colors.primary_variant,
    },
    navbarContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height: 55,
        alignItems: 'center',
    },
    title:{
        fontSize:30,
        color: colors.white,
        fontWeight: '400',
    },
    backButton:{
        fontSize:20,
        color: colors.white,
        fontWeight: '600',
    },
    box:{
        height:20,
        width: 20,
    },
});
