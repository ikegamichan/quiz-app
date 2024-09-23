'use client';

import { useGetPokemonImages } from '@/components/pokemon/hooks/use-get-pokemon-images';
import { useGetPokemonImagesCopy } from '@/components/pokemon/hooks/use-get-pokemon-images-copy';

export default function Page() {
  const pokemonNameList = ['pikachu', 'charmander', 'bulbasaur', 'squirtle'];

  const pokemonImageList = useGetPokemonImages({ pokemonNameList });
  const pokemonImageList2 = useGetPokemonImagesCopy({ pokemonNum: 1025 });
  return (
    <div className="my-2 mx-auto">
      <div className="flex items-center justify-center w-full">
        {pokemonImageList.map((image, idx) => {
          return (
            <div
              key={idx}
              className="grid gap-2 m-2 border border-y-slate-400 rounded-full"
            >
              <img src={image} />
            </div>
          );
        })}
      </div>
      <div className="min-h-screen  items-center justify-center w-full grid grid-cols-8 gap-2">
        {pokemonImageList2.map((image, idx) => {
          return (
            <div
              key={idx}
              className=" m-2 border border-y-slate-400 rounded-full"
            >
              <img src={image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
