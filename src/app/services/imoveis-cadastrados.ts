import { Injectable } from '@angular/core';
import { Imovel } from '../models/imovel';

@Injectable({
  providedIn: 'root'
})
export class ImoveisCadastradosService {

  private chave = 'imoveisCadastrados';

  getImoveis(): Imovel[] {
    const dados = localStorage.getItem(this.chave);

    if (!dados) {
      return [];
    }

    try {
      return JSON.parse(dados);
    } catch {
      return [];
    }
  }

  salvarImovel(imovel: Imovel): void {
    const imoveis = this.getImoveis();

    imoveis.push(imovel);

    localStorage.setItem(
      this.chave,
      JSON.stringify(imoveis)
    );
  }

  getImoveisDoUsuario(email: string): Imovel[] {
    return this.getImoveis().filter(
      imovel => imovel.emailProprietario === email
    );
  }

  removerImovel(id: number): void {
    const imoveis = this.getImoveis().filter(
      imovel => imovel.id !== id
    );

    localStorage.setItem(
      this.chave,
      JSON.stringify(imoveis)
    );
  }
}