import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-foto-pokemon',
  templateUrl: './foto-pokemon.component.html',
  styleUrls: ['./foto-pokemon.component.scss']
})
export class FotoPokemonComponent implements OnInit {

  @Input() Pokemon?: IPokemon

  constructor() { }

  ngOnInit(): void {
  }

}
