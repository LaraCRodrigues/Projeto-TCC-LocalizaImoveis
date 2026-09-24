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
tipoFiltro = 'Todos';

  // ==========================================
  // IMÓVEIS
  // ==========================================

  imoveis: Imovel[] = IMOVEIS;

  imoveisFiltrados: Imovel[] = [...this.imoveis];
 // ==========================================
  // CORRETORES
  // ==========================================
contatoCorretorAberto = false;
mensagemCorretor = '';
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
// PESQUISA E FILTRO
// ==========================================

pesquisar(): void {
  this.filtrarImoveis();
}

filtrarImoveis(): void {
  const busca = this.termoBusca
    .trim()
    .toLowerCase();

  this.imoveisFiltrados = this.imoveis.filter(
    (imovel: Imovel) => {

      // Filtro por tipo
      const correspondeTipo =
        this.tipoFiltro === 'Todos' ||
        imovel.tipo.toLowerCase() ===
        this.tipoFiltro.toLowerCase();

      // Filtro pela busca
      const correspondeBusca =
        !busca ||
        imovel.titulo
          .toLowerCase()
          .includes(busca) ||
        imovel.tipo
          .toLowerCase()
          .includes(busca) ||
        imovel.localizacao
          .toLowerCase()
          .includes(busca);

      return correspondeTipo && correspondeBusca;
    }
  );
}

// ==========================================
// LIMPAR PESQUISA
// ==========================================

limparBusca(): void {
  this.termoBusca = '';
  this.tipoFiltro = 'Todos';

  this.filtrarImoveis();
}
abrirContatoCorretor(): void {
  this.contatoCorretorAberto = true;
}

fecharContatoCorretor(): void {
  this.contatoCorretorAberto = false;
  this.mensagemCorretor = '';
}

enviarMensagemCorretor(): void {

  if (!this.mensagemCorretor.trim()) {
    return;
  }

  const mensagem = encodeURIComponent(
    this.mensagemCorretor.trim()
  );

  window.location.href =
    `mailto:contato@localizaimoveis.com?subject=Contato com corretor&body=${mensagem}`;
}
}