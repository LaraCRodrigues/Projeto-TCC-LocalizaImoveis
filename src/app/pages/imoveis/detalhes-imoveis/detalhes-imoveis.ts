import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ImoveisService } from '../../../services/imovel';
import { AtendimentosService } from '../../../services/atendimentos';
import { Imovel } from '../../../models/imovel';

@Component({
  selector: 'app-detalhes-imoveis',
  imports: [FormsModule, RouterLink],
  templateUrl: './detalhes-imoveis.html',
  styleUrl: './detalhes-imoveis.css'
})
export class DetalhesImoveis implements OnInit {

  comentando = false;
  verificandoLocalizacao = false;
  localizacaoValidada = false;
  mensagemLocalizacao = '';

  novaAvaliacao = 5;
  novoComentario = '';

  telefoneVisivel = false;

  mensagemAberta = false;
  mensagemContato = '';
  mensagemEnviada = false;

  favoritoAdicionado = false;
  animandoFavorito = false;
  mensagemFavorito = '';

  usuarioLogado = false;
  usuarioNome = '';
  perfilUsuario: 'usuario' | 'corretor' = 'usuario';
  menuUsuarioAberto = false;

  imovel?: Imovel;
  constructor(
    private route: ActivatedRoute,
    private imoveisService: ImoveisService,
    private atendimentosService: AtendimentosService
  ) { }
  toggleMenuUsuario(): void {
    this.menuUsuarioAberto = !this.menuUsuarioAberto;
  }

  fecharMenuUsuario(): void {
    this.menuUsuarioAberto = false;
  }

  sair(): void {
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('usuario');

    this.usuarioLogado = false;
    this.usuarioNome = '';
    this.perfilUsuario = 'usuario';
    this.menuUsuarioAberto = false;
  }

  mostrarTelefone(): void {
    this.telefoneVisivel = !this.telefoneVisivel;
  }

  abrirMensagem(): void {
    this.mensagemAberta = true;
    this.mensagemEnviada = false;
  }

  fecharMensagem(): void {
    this.mensagemAberta = false;
    this.mensagemContato = '';
  }

  enviarMensagem(): void {

    if (!this.mensagemContato.trim()) {
      return;
    }

    if (!this.imovel) {
      return;
    }

    const usuarioSalvo =
      localStorage.getItem('usuario');

    if (!usuarioSalvo) {
      return;
    }

    try {

      const usuario = JSON.parse(usuarioSalvo);

      const novoAtendimento = {
        id: Date.now(),

        imovelId: this.imovel.id,

        imovelTitulo: this.imovel.titulo,

        nomeUsuario:
          usuario.nome || 'Usuário',

        emailUsuario:
          usuario.email || '',

        mensagem:
          this.mensagemContato.trim()
      };

      this.atendimentosService
        .criarAtendimento(novoAtendimento);

      this.mensagemEnviada = true;

      this.mensagemContato = '';

      console.log(
        'Atendimento enviado:',
        novoAtendimento
      );

    } catch (erro) {

      console.error(
        'Erro ao enviar atendimento:',
        erro
      );

    }
  }
  abrirWhatsApp(): void {
    if (!this.imovel) {
      return;
    }

    const telefone = this.imovel.telefoneProprietario.replace(/\D/g, '');

    const mensagem = encodeURIComponent(
      `Olá! Tenho interesse no imóvel "${this.imovel.titulo}" que vi no LocalizaImóveis.`
    );

    window.open(
      `https://wa.me/55${telefone}?text=${mensagem}`,
      '_blank'
    );
  }

  abrirAvaliacao(): void {
    const usuarioLogado = localStorage.getItem('usuarioLogado');

    if (usuarioLogado !== 'true') {
      this.mensagemLocalizacao =
        'Você precisa estar logado para avaliar esta região.';
      return;
    }

    this.comentando = true;
    this.mensagemLocalizacao = '';
  }

  cancelarAvaliacao(): void {
    this.comentando = false;
    this.verificandoLocalizacao = false;
    this.localizacaoValidada = false;
    this.mensagemLocalizacao = '';
    this.novoComentario = '';
    this.novaAvaliacao = 5;
  }

  verificarLocalizacao(): void {
    if (!navigator.geolocation) {
      this.mensagemLocalizacao =
        'Seu navegador não permite verificar a localização.';
      return;
    }

    this.verificandoLocalizacao = true;
    this.mensagemLocalizacao = '';

    navigator.geolocation.getCurrentPosition(
      (posicao) => {
        const latitude = posicao.coords.latitude;
        const longitude = posicao.coords.longitude;

        console.log('Localização aproximada:', latitude, longitude);

        /*
         * Aqui vamos comparar a localização do usuário
         * com a região do imóvel.
         *
         * Por enquanto, vamos considerar a localização
         * validada para testar o formulário.
         */

        this.localizacaoValidada = true;
        this.verificandoLocalizacao = false;

        this.mensagemLocalizacao =
          'Localização validada. Você pode avaliar esta região.';
      },
      () => {
        this.verificandoLocalizacao = false;
        this.mensagemLocalizacao =
          'Não foi possível verificar sua localização. Permita o acesso à localização para continuar.';
      }
    );
  }

  adicionarAosFavoritos(): void {
    const usuarioLogado =
      localStorage.getItem('usuarioLogado') === 'true';

    if (!usuarioLogado) {
      this.mensagemFavorito =
        'Você precisa estar logado para adicionar imóveis aos favoritos.';
      return;
    }

    this.favoritoAdicionado = !this.favoritoAdicionado;
    this.animandoFavorito = true;

    this.mensagemFavorito = this.favoritoAdicionado
      ? 'Imóvel adicionado aos favoritos!'
      : 'Imóvel removido dos favoritos.';

    setTimeout(() => {
      this.animandoFavorito = false;
    }, 400);
  }

  publicarAvaliacao(): void {
    if (!this.imovel) {
      return;
    }

    if (!this.localizacaoValidada) {
      this.mensagemLocalizacao =
        'Sua localização precisa ser validada antes de publicar.';
      return;
    }

    if (!this.novoComentario.trim()) {
      this.mensagemLocalizacao =
        'Digite um comentário antes de publicar.';
      return;
    }

    const usuarioSalvo = localStorage.getItem('usuario');

    if (!usuarioSalvo) {
      this.mensagemLocalizacao =
        'Você precisa estar logado para publicar uma avaliação.';
      return;
    }

    const usuario = JSON.parse(usuarioSalvo);

    this.imovel.comentarios.unshift({
      nome: usuario.nome || 'Usuário',
      data: new Date().toLocaleDateString('pt-BR'),
      avaliacao: this.novaAvaliacao,
      comentario: this.novoComentario.trim()
    });

    this.cancelarAvaliacao();
  }

  ngOnInit(): void {
    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.imovel = this.imoveisService.getImovelById(id);

    const usuarioLogado =
      localStorage.getItem('usuarioLogado');

    if (usuarioLogado === 'true') {
      this.usuarioLogado = true;

      const usuario = localStorage.getItem('usuario');

      if (usuario) {
        try {
          const dadosUsuario = JSON.parse(usuario);

          this.usuarioNome =
            dadosUsuario.nome || 'Usuário';

          this.perfilUsuario =
            dadosUsuario.perfil || 'usuario';

        } catch {
          this.usuarioNome = 'Usuário';
          this.perfilUsuario = 'usuario';
        }
      }
    } else {
      this.usuarioLogado = false;
      this.usuarioNome = '';
      this.perfilUsuario = 'usuario';
    }
  }

  getEstrelas(avaliacao: number): string {
    const valor = Math.max(
      0,
      Math.min(5, Math.round(avaliacao))
    );

    return '★'.repeat(valor) +
      '☆'.repeat(5 - valor);
  }
}