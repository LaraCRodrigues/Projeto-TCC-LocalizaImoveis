import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ImoveisService } from '../../../services/imovel';
import { Imovel } from '../../../models/imovel';

@Component({
  selector: 'app-detalhes-imoveis',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './detalhes-imoveis.html',
  styleUrl: './detalhes-imoveis.css'
})
export class DetalhesImoveis implements OnInit {

  imovel?: Imovel;

  constructor(
    private route: ActivatedRoute,
    private imoveisService: ImoveisService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.imovel = this.imoveisService.getImovelById(id);
  }

  getEstrelas(avaliacao: number): string {
    const valor = Math.max(0, Math.min(5, Math.round(avaliacao)));

    return '★'.repeat(valor) + '☆'.repeat(5 - valor);
  }
}