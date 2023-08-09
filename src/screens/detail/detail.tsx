/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { Text } from 'react-native';
import { BaseLayout } from '../../layouts';
import { useNavigation, useRoute } from '@react-navigation/native';
export const Detail: FC = () => {
    const navigation = useNavigation();
    const { params: { name = '' } = {} } = useRoute();
    return (<BaseLayout title={name} onRightButtonClick={navigation.goBack}>
        <Text>{'Detail'}</Text>
    </BaseLayout>);
};
