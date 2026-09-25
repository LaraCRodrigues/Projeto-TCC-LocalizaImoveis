import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ImoveisService } from '../../../services/imovel';
import { AtendimentosService } from '../../../services/atendimentos';
import { Imovel } from '../../../models/imovel';

@Component({
  selector: 'app-detalhes-imoveis',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './detalhes-imoveis.html',
  styleUrl: './detalhes-imoveis.css',
})
export class DetalhesImoveis implements OnInit {

  // ==============================
  // USUÁRIO / MENU
  // ==============================

  usuarioLogado = false;
  usuarioNome = '';
  perfilUsuario: 'usuario' | 'corretor' = 'usuario';
  menuUsuarioAberto = false;

  // ==============================
  // IMÓVEL
  // ==============================

  imovel?: Imovel;
  mensagemImovel = '';

  // ==============================
  // AVALIAÇÃO
  // ==============================

  comentando = false;
  verificandoLocalizacao = false;
  localizacaoValidada = false;
  mensagemLocalizacao = '';
  novaAvaliacao = 5;
  novoComentario = '';

  // ==============================
  // CONTATO COM PROPRIETÁRIO
  // ==============================

  telefoneVisivel = false;
  mensagemAberta = false;
  mensagemContato = '';
  mensagemEnviada = false;

  // ==============================
  // ATENDIMENTO COM CORRETOR
  // ==============================

  atendimentoAberto = false;
  mensagemAtendimento = '';
  atendimentoEnviado = false;
  mensagemAtendimentoStatus = '';

  // ==============================
  // FAVORITOS
  // ==============================

  favoritoAdicionado = false;
  animandoFavorito = false;
  mensagemFavorito = '';

  constructor(
    private route: ActivatedRoute,
    private imoveisService: ImoveisService,
    private atendimentosService: AtendimentosService
  ) {}

  // ==============================
  // MENU DO USUÁRIO
  // ==============================

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

  // ==============================
  // TELEFONE DO PROPRIETÁRIO
  // ==============================

  mostrarTelefone(): void {
    this.telefoneVisivel = !this.telefoneVisivel;
  }

  // ==============================
  // MENSAGEM PARA O PROPRIETÁRIO
  // ==============================

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

    this.mensagemEnviada = true;
    this.mensagemContato = '';

    console.log('Mensagem enviada ao proprietário.');
  }

  // ==============================
  // ATENDIMENTO COM CORRETOR
  // ==============================

  abrirAtendimentoCorretor(): void {
    const usuarioLogado = localStorage.getItem('usuarioLogado');

    if (usuarioLogado !== 'true') {
      this.mensagemAtendimentoStatus =
        'Você precisa estar logado para falar com um corretor.';
      return;
    }

    this.atendimentoAberto = true;
    this.atendimentoEnviado = false;
    this.mensagemAtendimentoStatus = '';
  }

  fecharAtendimentoCorretor(): void {
    this.atendimentoAberto = false;
    this.mensagemAtendimento = '';
    this.atendimentoEnviado = false;
    this.mensagemAtendimentoStatus = '';
  }

  enviarAtendimentoCorretor(): void {
    if (!this.imovel) {
      return;
    }

    if (!this.mensagemAtendimento.trim()) {
      this.mensagemAtendimentoStatus =
        'Digite uma mensagem antes de enviar.';
      return;
    }

    const usuarioSalvo = localStorage.getItem('usuario');

    if (!usuarioSalvo) {
      this.mensagemAtendimentoStatus =
        'Você precisa estar logado para abrir um atendimento.';
      return;
    }

    try {
      const usuario = JSON.parse(usuarioSalvo);

      const novoAtendimento = {
        id: Date.now(),
        imovelId: this.imovel.id,
        imovelTitulo: this.imovel.titulo,
        nomeUsuario: usuario.nome || 'Usuário',
        emailUsuario: usuario.email || '',
        telefoneUsuario: usuario.telefone || '',
        mensagem: this.mensagemAtendimento.trim(),
      };

      this.atendimentosService.criarAtendimento(novoAtendimento);

      this.atendimentoEnviado = true;
      this.mensagemAtendimento = '';

      this.mensagemAtendimentoStatus =
        'Atendimento enviado com sucesso! Um corretor poderá responder sua solicitação.';

      console.log('Atendimento criado:', novoAtendimento);

    } catch (erro) {
      console.error('Erro ao criar atendimento:', erro);

      this.mensagemAtendimentoStatus =
        'Não foi possível enviar o atendimento.';
    }
  }

  // ==============================
  // WHATSAPP DO PROPRIETÁRIO
  // ==============================

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

  // ==============================
  // AVALIAÇÃO
  // ==============================

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

        console.log(
          'Localização aproximada:',
          latitude,
          longitude
        );

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

    try {
      const usuario = JSON.parse(usuarioSalvo);

      this.imovel.comentarios.unshift({
        nome: usuario.nome || 'Usuário',
        data: new Date().toLocaleDateString('pt-BR'),
        avaliacao: this.novaAvaliacao,
        comentario: this.novoComentario.trim(),
      });

      this.cancelarAvaliacao();

    } catch (erro) {
      console.error(
        'Erro ao publicar avaliação:',
        erro
      );
    }
  }

  // ==============================
  // FAVORITOS
  // ==============================

  adicionarAosFavoritos(): void {
    const usuarioLogado =
      localStorage.getItem('usuarioLogado') === 'true';

    if (!usuarioLogado) {
      this.mensagemFavorito =
        'Você precisa estar logado para adicionar imóveis aos favoritos.';
      return;
    }

    this.favoritoAdicionado =
      !this.favoritoAdicionado;

    this.animandoFavorito = true;

    this.mensagemFavorito =
      this.favoritoAdicionado
        ? 'Imóvel adicionado aos favoritos!'
        : 'Imóvel removido dos favoritos.';

    setTimeout(() => {
      this.animandoFavorito = false;
    }, 400);
  }

  // ==============================
  // INICIALIZAÇÃO
  // ==============================

  ngOnInit(): void {

    // ------------------------------
    // Carrega o imóvel
    // ------------------------------

    const idParam =
      this.route.snapshot.paramMap.get('id');

    const id = Number(idParam);

    if (!idParam || Number.isNaN(id)) {
      this.mensagemImovel =
        'Imóvel não encontrado.';
      return;
    }

    this.imovel =
      this.imoveisService.getImovelById(id);

    if (!this.imovel) {
      this.mensagemImovel =
        'Imóvel não encontrado.';
      return;
    }

    // ------------------------------
    // Carrega usuário
    // ------------------------------

    const usuarioLogado =
      localStorage.getItem('usuarioLogado');

    if (usuarioLogado === 'true') {

      this.usuarioLogado = true;

      const usuario =
        localStorage.getItem('usuario');

      if (usuario) {

        try {

          const dadosUsuario =
            JSON.parse(usuario);

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

  // ==============================
  // ESTRELAS
  // ==============================

  getEstrelas(avaliacao: number): string {
    const valor = Math.max(
      0,
      Math.min(5, Math.round(avaliacao))
    );

    return (
      '★'.repeat(valor) +
      '☆'.repeat(5 - valor)
    );
  }
}