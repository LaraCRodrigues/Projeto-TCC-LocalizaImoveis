import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Imovel } from '../../models/imovel';
import { ImoveisCadastradosService } from '../../services/imoveis-cadastrados';

@Component({
  selector: 'app-meus-imoveis',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './meus-imoveis.html'
})
export class MeusImoveis implements OnInit {

  imoveis: Imovel[] = [];
  usuarioNome = '';

  constructor(
    private imoveisCadastradosService: ImoveisCadastradosService
  ) {}

  ngOnInit(): void {
    this.carregarUsuario();
    this.carregarImoveis();
  }

  carregarUsuario(): void {

    const usuario = localStorage.getItem('usuario');

    if (!usuario) {
      return;
    }

    try {

      const dadosUsuario = JSON.parse(usuario);

      this.usuarioNome = dadosUsuario.nome || 'Usuário';

    } catch {

      this.usuarioNome = 'Usuário';

    }
  }

  carregarImoveis(): void {

    const usuario = localStorage.getItem('usuario');

    if (!usuario) {
      this.imoveis = [];
      return;
    }

    try {

      const dadosUsuario = JSON.parse(usuario);

      const email = dadosUsuario.email || '';

      this.imoveis =
        this.imoveisCadastradosService.getImoveisDoUsuario(email);

    } catch {

      this.imoveis = [];

    }
  }

  excluirImovel(id: number): void {

    const confirmar = confirm(
      'Tem certeza que deseja excluir este imóvel?'
    );

    if (!confirmar) {
      return;
    }

    this.imoveisCadastradosService.removerImovel(id);

    this.carregarImoveis();
  }
}