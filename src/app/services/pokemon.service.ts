import { Injectable } from '@angular/core';
import { Result, Data } from '../interfaces/pokeapi';
import { IPokemon } from '../interfaces/pokemon'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'https://pokeapi.co/api/v2/pokemon/'

  constructor() { }

  async getBypage(page: number, size: number = 40): Promise<Result[]> {
    if (page > 5) return []
    const offset = size * (page - 1)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`)
    const data = await res.json()
    if (data.results.length > 0) return data.results
    return [];
  }

  async getById(id: string): Promise<IPokemon> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    return await data
  }

  async getDescription(id: string | number):Promise<string> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const data = await res.json()
    const text = data.flavor_text_entries.find((text: any )=> text.language.name === 'es' )
    return text.flavor_text
  }
}
