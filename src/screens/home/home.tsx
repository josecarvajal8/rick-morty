/* eslint-disable prettier/prettier */
import React, { FC, useEffect, useState } from 'react';
import { BaseLayout } from '../../layouts';
import { fetchData } from '../../utils/fetcher';
import { CharactersList } from '../../components';
import { View } from 'react-native';
export const Home: FC = () => {
    const [characters, setCharacters] = useState<Array<{ name: string, id: number, species: string, image: string }>>([]);
    const getCharacters = async () => {
        const data: any = await fetchData({ url: 'https://rickandmortyapi.com/api/character', method: 'GET' });
        setCharacters(data.results);
    }
    useEffect(() => {
        getCharacters();
    }, []);
    return (
        <BaseLayout title={'Characters'}>
            <View style={{ alignItems: 'center', flex: 1, marginTop: 8 }}>
                <CharactersList characters={characters} />
            </View>
        </BaseLayout>
    );
};
