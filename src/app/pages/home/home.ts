import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { Imovel, IMOVEIS } from '../../models/imovel';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    FormsModule,
    RouterLink,
    NgClass
  ],

  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnDestroy {

  // ==========================================
  // USUÁRIO
  // ==========================================

  usuarioLogado = false;
  usuarioNome = '';
  menuUsuarioAberto = false;
  perfilUsuario = 'usuario';


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
  // CARROSSEL
  // ==========================================

  slideAtual = 0;

  private intervaloCarrossel:
    ReturnType<typeof setInterval> | undefined;


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

    this.iniciarCarrossel();

  }


  // ==========================================
  // CARROSSEL
  // ==========================================

  proximoSlide(): void {

    const total = this.imoveisFiltrados.length;

    if (total === 0) {
      return;
    }

    this.slideAtual =
      (this.slideAtual + 1) % total;
  }


  slideAnterior(): void {

    const total = this.imoveisFiltrados.length;

    if (total === 0) {
      return;
    }

    this.slideAtual =
      (this.slideAtual - 1 + total) % total;
  }


  irParaSlide(index: number): void {

    if (
      index >= 0 &&
      index < this.imoveisFiltrados.length
    ) {
      this.slideAtual = index;
    }

  }


  iniciarCarrossel(): void {

    this.pararCarrossel();

    this.intervaloCarrossel =
      setInterval(() => {

        this.proximoSlide();

      }, 5000);

  }


  pararCarrossel(): void {

    if (this.intervaloCarrossel) {

      clearInterval(
        this.intervaloCarrossel
      );

      this.intervaloCarrossel = undefined;
    }

  }


  // ==========================================
  // USUÁRIO LOGADO
  // ==========================================

  carregarUsuario(): void {

    const usuarioLogado =
      localStorage.getItem('usuarioLogado');

    const usuarioSalvo =
      localStorage.getItem('usuario');


    if (
      usuarioLogado === 'true' &&
      usuarioSalvo
    ) {

      try {

        const usuario =
          JSON.parse(usuarioSalvo);

        this.usuarioLogado = true;

        this.usuarioNome =
          usuario.nome || 'Usuário';

        this.perfilUsuario =
          usuario.perfil || 'usuario';

      } catch {

        this.usuarioLogado = false;
        this.usuarioNome = '';
        this.perfilUsuario = 'usuario';

      }

    } else {

      this.usuarioLogado = false;
      this.usuarioNome = '';
      this.perfilUsuario = 'usuario';

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
    localStorage.removeItem('usuario');

    this.usuarioLogado = false;
    this.usuarioNome = '';
    this.perfilUsuario = 'usuario';
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

    const busca =
      this.termoBusca
        .trim()
        .toLowerCase();


    this.imoveisFiltrados =
      this.imoveis.filter(
        (imovel: Imovel) => {

          // ================================
          // FILTRO POR TIPO
          // ================================

          const correspondeTipo =
            this.tipoFiltro === 'Todos' ||
            imovel.tipo.toLowerCase() ===
            this.tipoFiltro.toLowerCase();


          // ================================
          // FILTRO PELA BUSCA
          // ================================

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


          return (
            correspondeTipo &&
            correspondeBusca
          );

        }
      );


    // ======================================
    // CORRIGE O SLIDE APÓS FILTRAR
    // ======================================

    if (
      this.slideAtual >=
      this.imoveisFiltrados.length
    ) {

      this.slideAtual = 0;

    }

  }


  // ==========================================
  // LIMPAR PESQUISA
  // ==========================================

  limparBusca(): void {

    this.termoBusca = '';
    this.tipoFiltro = 'Todos';

    this.slideAtual = 0;

    this.filtrarImoveis();

  }


  // ==========================================
  // CONTATO COM CORRETOR
  // ==========================================

  abrirContatoCorretor(): void {

    this.contatoCorretorAberto = true;

  }


  fecharContatoCorretor(): void {

    this.contatoCorretorAberto = false;
    this.mensagemCorretor = '';

  }


  enviarMensagemCorretor(): void {

    if (
      !this.mensagemCorretor.trim()
    ) {

      return;

    }


    const mensagem =
      encodeURIComponent(
        this.mensagemCorretor.trim()
      );


    window.location.href =
      `mailto:contato@localizaimoveis.com?subject=Contato com corretor&body=${mensagem}`;

  }


  // ==========================================
  // DESTRUIR COMPONENTE
  // ==========================================

  ngOnDestroy(): void {

    this.pararCarrossel();

  }

}