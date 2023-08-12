/* eslint-disable prettier/prettier */
import React, { FC, useEffect, useState } from 'react';
import { BaseLayout } from '../../layouts';
import { fetchData } from '../../utils/fetcher';
import { CharactersList } from '../../components';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from './home.styles';
import { ICharacter, PaginatedResponse, ResInfo } from '../../models/character';
export const Home: FC = () => {
    const [characters, setCharacters] = useState<Array<ICharacter>>([]);
    const [currentPage, setNewPage] = useState<number>(1);
    const [info, setInfo] = useState<ResInfo>();
    const [name, setName] = useState<string>('');
    const getCharacters = async () => {
        const baseUrl = 'https://rickandmortyapi.com/api/character';
        const url = name.length ? `${baseUrl}?page=${currentPage}&name=${name}`
            : `${baseUrl}?page=${currentPage}`;
        const data: PaginatedResponse<ICharacter[]> = await fetchData({ url, method: 'GET' });
        setCharacters(prev => [...prev, ...data.results]);
        setInfo(data.info);
    };
    useEffect(() => {
        getCharacters();
    }, [currentPage]);

    const onPagination = () => {
        if (currentPage < (info?.pages || 0)) {
            setNewPage(currentPage + 1);
        }
    };
    const onSearch = async () => {
        const url = `https://rickandmortyapi.com/api/character?name=${name}`;
        const data: PaginatedResponse<ICharacter[]> = await fetchData({ url, method: 'GET' });
        setCharacters(data.results);
        setInfo(data.info);
    }
    return (
        <BaseLayout title={'Characters'}>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        value={name}
                    />
                    <TouchableOpacity
                        onPress={onSearch}
                        style={styles.button}>
                        <Text>{'Search'}</Text>
                    </TouchableOpacity>
                </View>
                <CharactersList characters={characters} onPagination={onPagination} />
            </View>
        </BaseLayout>
    );
};
