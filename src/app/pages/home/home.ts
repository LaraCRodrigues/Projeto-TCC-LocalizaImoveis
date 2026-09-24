import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { Imovel, IMOVEIS } from '../../models/imovel';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    FormsModule,
    RouterLink
  ],

  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  // ==========================================
  // USUÁRIO
  // ==========================================

  usuarioLogado = false;
  usuarioNome = '';
  menuUsuarioAberto = false;


  // ==========================================
  // BUSCA
  // ==========================================

  termoBusca = '';


  // ==========================================
  // IMÓVEIS
  // ==========================================

  imoveis: Imovel[] = IMOVEIS;

  imoveisFiltrados: Imovel[] = [...this.imoveis];


  // ==========================================
  // CONSTRUTOR
  // ==========================================

  constructor(
    private router: Router
  ) {

    this.carregarUsuario();

  }


  // ==========================================
  // USUÁRIO LOGADO
  // ==========================================

  carregarUsuario(): void {

    const usuarioLogado =
      localStorage.getItem('usuarioLogado');

    const usuarioSalvo =
      localStorage.getItem('usuario');


    if (usuarioLogado === 'true' && usuarioSalvo) {

      try {

        const usuario = JSON.parse(usuarioSalvo);

        this.usuarioLogado = true;

        this.usuarioNome =
          usuario.nome || 'Usuário';

      } catch {

        this.usuarioLogado = false;
        this.usuarioNome = '';

      }

    } else {

      this.usuarioLogado = false;
      this.usuarioNome = '';

    }

  }


  // ==========================================
  // MENU DO USUÁRIO
  // ==========================================

  toggleMenuUsuario(): void {

    this.menuUsuarioAberto =
      !this.menuUsuarioAberto;

  }


  fecharMenuUsuario(): void {

    this.menuUsuarioAberto = false;

  }


  // ==========================================
  // SAIR
  // ==========================================

  sair(): void {

    localStorage.removeItem('usuarioLogado');

    this.usuarioLogado = false;
    this.usuarioNome = '';
    this.menuUsuarioAberto = false;

    this.router.navigate(['/home']);

  }


  // ==========================================
  // PESQUISA
  // ==========================================

  pesquisar(): void {

    const busca =
      this.termoBusca
        .trim()
        .toLowerCase();


    if (!busca) {

      this.imoveisFiltrados =
        [...this.imoveis];

      return;

    }


    this.imoveisFiltrados =
      this.imoveis.filter(
        (imovel: Imovel) =>

          imovel.titulo
            .toLowerCase()
            .includes(busca)

          ||

          imovel.tipo
            .toLowerCase()
            .includes(busca)

          ||

          imovel.localizacao
            .toLowerCase()
            .includes(busca)

      );

  }


  // ==========================================
  // LIMPAR PESQUISA
  // ==========================================

  limparBusca(): void {

    this.termoBusca = '';

    this.imoveisFiltrados =
      [...this.imoveis];

  }

}