/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { Card } from '../../';
import { FlatList } from 'react-native';
import { styles } from './list.styles';
import { InfoCharacter } from '../info/info.component';
import { useNavigation } from '@react-navigation/native';
import { ActionsTypes } from '../../../flux/actions';
import { useAppContext } from '../../../flux/context';
import { ICharacter } from '../../../models/character';

export const CharactersList: FC<{ characters: Array<ICharacter>, onPagination: ()=> void }> = ({ characters, onPagination }) => {
    const { dispatch } = useAppContext();
    const navigation = useNavigation();
    const onPressCharacter = (character: ICharacter) => {
        const { name, id } = character;
        dispatch({ type: ActionsTypes.ADD_BUSTED_LIST, payload: character });
        navigation.navigate('Detail', { name, id });
    };
    return (
        <FlatList
            style={styles.list}
            data={characters}
            showsVerticalScrollIndicator={false}
            onEndReached={onPagination}
            renderItem={({ item }) => {
                const { id, name, image, species } = item;
                return (
                    <Card key={id} onPress={() => onPressCharacter(item)}>
                        <InfoCharacter name={name} image={image} species={species} />
                    </Card>
                );
            }}
        />
    );
};
