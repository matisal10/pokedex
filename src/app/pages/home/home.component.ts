import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Result } from 'src/app/interfaces/pokeapi';
import { PokemonService } from '../../services/pokemon.service';
import { IPokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private PokemonService: PokemonService) { }
  @ViewChild('tarjetas') tarjetasElemen!: ElementRef

  listaPokemon: Result[] = []
  page: number = 1
  cargando: boolean = false
  pokemonSelect?: IPokemon
  detalle: boolean = false

  ngOnInit(): void {
    this.cargarLista()
  }

  async cargarLista() {
    this.cargando = true
    this.listaPokemon = [...this.listaPokemon, ...await this.PokemonService.getBypage(this.page)]
    this.cargando = false
    this.page++
  }

  onScroll(e: any) {
    if (this.cargando) return

    if ((Math.round(
      this.tarjetasElemen.nativeElement.clientHeight +
      this.tarjetasElemen.nativeElement.scrollTop)
      === e.srcElement.scrollHeight)) {
      this.cargarLista()
    }

  }

  async tarjetaClick(id:string) {
    this.pokemonSelect = await this.PokemonService.getById(id)
  }

  cambiarEstado(){
    if(this.pokemonSelect)
      this.detalle = !this.detalle
  }

}
