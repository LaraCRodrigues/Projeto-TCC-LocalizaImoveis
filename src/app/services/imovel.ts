import { Injectable } from '@angular/core';
import { IMOVEIS, Imovel } from '../models/imovel';

@Injectable({
  providedIn: 'root'
})
export class ImoveisService {

  private imoveis: Imovel[] = IMOVEIS;

  getImoveis(): Imovel[] {
    return this.imoveis;
  }

  getImovelById(id: number): Imovel | undefined {
    return this.imoveis.find(imovel => imovel.id === id);
  }

  getImovel(id: number): Imovel | undefined {
    return this.getImovelById(id);
  }
}