/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: { alignItems: 'center', flex: 1, marginTop: 8 },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
    },
    button: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.primary,
        padding:10,
    },
});
