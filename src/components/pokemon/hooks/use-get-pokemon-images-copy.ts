'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  pokemonNum: number;
};

export const useGetPokemonImagesCopy = (props: Props) => {
  const { pokemonNum } = props;
  const [pokemonImages, setPokemonImages] = useState<string[]>([]);
  const isMountedRef = useRef(true);

  // MEMO: 2024年9月時点でのポケモンの最大数
  const maxPokemonNum = 1025;
  const pokemonCount = Math.min(pokemonNum, maxPokemonNum);

  // 複数のポケモンを取得する関数
  const fetchPokemon = async (pokemonCount: number) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonCount}`,
    );
    const pokemon = await response.json();
    return pokemon.sprites.front_default; // ポケモンの画像URLを取得
  };

  useEffect(() => {
    const fetchAllPokemonImages = async () => {
      try {
        const images = await Promise.all(
          Array.from({ length: pokemonCount }, (_, index) =>
            fetchPokemon(index + 1),
          ),
        );
        if (isMountedRef.current) {
          setPokemonImages(images);
        }
      } catch (error) {
        console.error('Error fetching Pokemon images:', error);
      }
    };

    if (pokemonCount > 0) {
      fetchAllPokemonImages();
    }

    return () => {
      isMountedRef.current = false;
    };
  }, [pokemonCount]); // 依存関係は `pokemonCount` のみにする

  return pokemonImages;
};
