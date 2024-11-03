import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplePoketmonById = createAsyncThunk(
    'poketmon/fetchMultiplePoketmonById',
    async (maxPoketmonId) => {
        const numberArray = Array.from({ length: maxPoketmonId }, (_, index) => index + 1)

        const fetchAPI = async (poketmonId) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${poketmonId}/`)

            const data = await response.json()
            
            const poketmonData = {
                id: poketmonId,
                name: data.names.find(el => el.language.name === 'ko').name,
                description: data.flavor_text_entries.find(el => el.language.name === 'ko').flavor_text,
                front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poketmonId}.png`,
                back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${poketmonId}.png`
            }
            return poketmonData
        }
        return await Promise.all(numberArray.map((el) => fetchAPI(el)))
    }
)