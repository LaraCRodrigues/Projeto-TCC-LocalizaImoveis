import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AtendimentosService } from '../../services/atendimentos';
import { Atendimento } from '../../models/atendimento';

@Component({
  selector: 'app-corretor',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './corretor.html',
  styleUrl: './corretor.css',
})
export class Corretor implements OnInit {
  nomeCorretor = '';
  telefoneCorretor = '';
  creciCorretor = '';

  atendimentos: Atendimento[] = [];

  constructor(private atendimentosService: AtendimentosService) {}

  ngOnInit(): void {
    const usuario = localStorage.getItem('usuario');

    if (usuario) {
      try {
        const dadosUsuario = JSON.parse(usuario);

        this.nomeCorretor = dadosUsuario.nome || 'Corretor';
        this.telefoneCorretor = dadosUsuario.telefone || '';
        this.creciCorretor = dadosUsuario.creci || '';
      } catch {
        this.nomeCorretor = 'Corretor';
        this.telefoneCorretor = '';
        this.creciCorretor = '';
      }
    }

    this.carregarAtendimentos();
  }

  carregarAtendimentos(): void {
    this.atendimentos = this.atendimentosService.getAtendimentos();

    console.log('Atendimentos carregados no painel:', this.atendimentos);
  }
  abrirWhatsApp(telefone: string): void {
    if (!telefone) {
      alert('Este usuário não possui telefone cadastrado.');
      return;
    }

    const numero = telefone.replace(/\D/g, '');

    const mensagem = encodeURIComponent(
      'Olá! Estou entrando em contato pelo LocalizaImóveis sobre seu interesse no imóvel.',
    );

    window.open(`https://wa.me/55${numero}?text=${mensagem}`, '_blank');
  }
}
