'use client';

import { useEffect, useState } from 'react';

type Props = {
  pokemonNameList: string[];
};

export const useGetPokemonImages = (props: Props) => {
  const { pokemonNameList } = props;
  const [pokemonImages, setPokemonImages] = useState<string[]>([]);

  // 複数のポケモンを取得する関数
  const fetchPokemon = async (pokemonName: string) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    );
    const pokemon = await response.json();
    return pokemon.sprites.front_default; // ポケモンの画像URLを取得
  };

  useEffect(() => {
    const fetchAllPokemonImages = async () => {
      const images = await Promise.all(
        pokemonNameList.map((pokemonName) => fetchPokemon(pokemonName)),
      );
      setPokemonImages(images); // 取得した画像URLをStateに保存
    };

    if (pokemonNameList.length > 0) {
      fetchAllPokemonImages();
    }
  }, [pokemonNameList]);

  return pokemonImages;
};
