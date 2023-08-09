/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { Card } from '../../';
import { FlatList } from 'react-native';
import { styles } from './list.styles';
import { InfoCharacter } from '../info/info.component';

export const CharactersList: FC<{ characters: Array<{ name: string, id: number, species: string, image: string }> }> = ({ characters }) => {
    return (
        <FlatList
            style={styles.list}
            data={characters}
            renderItem={({ item }) => {
                return (
                    <Card>
                        <InfoCharacter name={item.name} image={item.image} />
                    </Card>
                );
            }}
        />
    );
};
