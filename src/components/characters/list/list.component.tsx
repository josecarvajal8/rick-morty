/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { Card } from '../../';
import { FlatList } from 'react-native';
import { styles } from './list.styles';
import { InfoCharacter } from '../info/info.component';
import { useNavigation } from '@react-navigation/native';

export const CharactersList: FC<{ characters: Array<{ name: string, id: number, species: string, image: string }> }> = ({ characters }) => {
    const navigation = useNavigation();
    return (
        <FlatList
            style={styles.list}
            data={characters}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                const { id, name, image, species } = item;
                return (
                    <Card key={id} onPress={() => navigation.navigate('Detail', { name, id })}>
                        <InfoCharacter name={name} image={image} species={species} />
                    </Card>
                );
            }}
        />
    );
};
