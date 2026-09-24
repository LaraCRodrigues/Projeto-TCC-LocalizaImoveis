import { Injectable } from '@angular/core';
import { Atendimento } from '../models/atendimento';

@Injectable({
  providedIn: 'root'
})
export class AtendimentosService {

  private chave = 'atendimentos';

  getAtendimentos(): Atendimento[] {
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

  criarAtendimento(atendimento: Atendimento): void {
    const atendimentos = this.getAtendimentos();

    atendimentos.push(atendimento);

    localStorage.setItem(
      this.chave,
      JSON.stringify(atendimentos)
    );
  }

  getAtendimentosDoUsuario(email: string): Atendimento[] {
    return this.getAtendimentos().filter(
      atendimento => atendimento.emailUsuario === email
    );
  }

  atualizarAtendimento(atendimentoAtualizado: Atendimento): void {
    const atendimentos = this.getAtendimentos();

    const indice = atendimentos.findIndex(
      atendimento => atendimento.id === atendimentoAtualizado.id
    );

    if (indice === -1) {
      return;
    }

    atendimentos[indice] = atendimentoAtualizado;

    localStorage.setItem(
      this.chave,
      JSON.stringify(atendimentos)
    );
  }
}