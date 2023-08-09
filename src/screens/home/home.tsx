/* eslint-disable prettier/prettier */
import React, { FC, useEffect, useState } from 'react';
import { BaseLayout } from '../../layouts';
import { useNavigation } from '@react-navigation/native';
import { fetchData } from '../../utils/fetcher';
import { Card, CharactersList } from '../../components';
export const Home: FC = () => {
    const navigation = useNavigation();
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
                <CharactersList characters={characters} />
        </BaseLayout>
    );
};
