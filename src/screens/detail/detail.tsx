/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { Text } from 'react-native';
import { BaseLayout } from '../../layouts';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAppContext } from '../../flux/context';
export const Detail: FC = () => {
    const navigation = useNavigation();
    const { state } = useAppContext();
    console.log(state);
    const { params: { name = '' } = {} } = useRoute();
    return (<BaseLayout title={name} onRightButtonClick={navigation.goBack}>
        <Text>{'Detail'}</Text>
    </BaseLayout>);
};
