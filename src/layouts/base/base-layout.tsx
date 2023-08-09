/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './base-layout.styles';
interface BaseLayoutProps {
    children: React.ReactNode,
    title: string;
    onRightButtonClick?: () => void;
}
export const BaseLayout: FC<BaseLayoutProps> = ({ children, title, onRightButtonClick }) => {
    return (
        <View style={{ height: '100%' }}>
            <SafeAreaView style={styles.navbar}>
                <View style={styles.navbarContent}>
                    {onRightButtonClick ? <TouchableOpacity
                        onPress={onRightButtonClick}>
                        <Text style={styles.backButton}>{'<'}</Text>
                    </TouchableOpacity> : <View style={styles.box} />}
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.box} />
                </View>
            </SafeAreaView>
            
            {children}
        </View>
    );
};
