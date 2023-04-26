import { Injectable } from '@angular/core';
import { Cromos } from '../models/cromos.interface';

@Injectable({
  providedIn: 'root',
})
export class FirebaseDBService {
  ligaF: Cromos[] = [
    {
      title: 'Liga F Escudo',
      items: [{ id: 1, isChecked: false, hidden: false }],
    },
    {
      title: 'Escudos y Plantillas 1',
      items: Array.from({ length: 24 }, (_, index) => ({
        id: index + 2,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'Escudos y Plantillas 2',
      items: Array.from({ length: 24 }, (_, index) => ({
        id: index + 26,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'Deportivo Alavés',
      items: Array.from({ length: 17 }, (_, index) => ({
        id: index + 50,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'Alhama el Pozo',
      items: Array.from({ length: 17 }, (_, index) => ({
        id: index + 67,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'Athletic Club',
      items: Array.from({ length: 17 }, (_, index) => ({
        id: index + 84,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'Atlético Madrid',
      items: Array.from({ length: 17 }, (_, index) => ({
        id: index + 101,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'FC Barcelona',
      items: Array.from({ length: 17 }, (_, index) => ({
        id: index + 118,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'Real Betis',
      items: Array.from({ length: 17 }, (_, index) => ({
        id: index + 135,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'UDG Tenerife',
      items: Array.from({ length: 17 }, (_, index) => ({
        id: index + 152,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'Levante Las Planas',
      items: Array.from({ length: 17 }, (_, index) => ({
        id: index + 169,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'Levante UD',
      items: Array.from({ length: 17 }, (_, index) => ({
        id: index + 186,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'Madrid CFF',
      items: Array.from({ length: 17 }, (_, index) => ({
        id: index + 203,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'Real Madrid',
      items: Array.from({ length: 17 }, (_, index) => ({
        id: index + 220,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'Real Sociedad',
      items: Array.from({ length: 17 }, (_, index) => ({
        id: index + 237,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'Sevilla FC',
      items: Array.from({ length: 17 }, (_, index) => ({
        id: index + 254,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'Sporting Huelva',
      items: Array.from({ length: 17 }, (_, index) => ({
        id: index + 271,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'Valencia CF',
      items: Array.from({ length: 17 }, (_, index) => ({
        id: index + 288,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'Villarreal CF',
      items: Array.from({ length: 17 }, (_, index) => ({
        id: index + 305,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'F Stars	1',
      items: Array.from({ length: 17 }, (_, index) => ({
        id: index + 322,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'F Stars	2',
      items: Array.from({ length: 18 }, (_, index) => ({
        id: index + 339,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'Alexia Balón de Oro',
      items: Array.from({ length: 1 }, (_, index) => ({
        id: index + 357,
        isChecked: false,
        hidden: false,
      })),
    },
    {
      title: 'F Rookies',
      items: Array.from({ length: 8 }, (_, index) => ({
        id: index + 358,
        isChecked: false,
        hidden: false,
      })),
    },
  ];
  constructor() {}
}
