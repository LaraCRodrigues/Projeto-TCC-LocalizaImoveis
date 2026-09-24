import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Imovel } from '../../../models/imovel';
import { ImoveisCadastradosService } from '../../../services/imoveis-cadastrados';

@Component({
  selector: 'app-cadastrar-imoveis',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-imoveis.html',
  styleUrl: './cadastrar-imoveis.css'
})
export class CadastrarImoveis {

  titulo = '';
  tipo = '';
  finalidade = '';
  preco = '';
  area = '';
  quartos = '';
  banheiros = '';
  vagas = '';
  endereco = '';
  cidade = '';
  estado = '';
  descricao = '';

  imagemSelecionada: File | null = null;
  imagemPreview = '';
  nomeImagem = '';

  constructor(
    private imoveisCadastradosService: ImoveisCadastradosService,
    private router: Router
  ) {}

  selecionarImagem(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const arquivo = input.files[0];

    if (!arquivo.type.startsWith('image/')) {
      return;
    }

    this.imagemSelecionada = arquivo;
    this.nomeImagem = arquivo.name;

    const leitor = new FileReader();

    leitor.onload = () => {
      this.imagemPreview = leitor.result as string;
    };

    leitor.readAsDataURL(arquivo);
  }

  removerImagem(): void {
    this.imagemSelecionada = null;
    this.imagemPreview = '';
    this.nomeImagem = '';
  }

  enviarAnuncio(): void {

    const usuario = localStorage.getItem('usuario');

    if (!usuario) {
      alert('Você precisa estar logado para cadastrar um imóvel.');
      this.router.navigate(['/login']);
      return;
    }

    let dadosUsuario: any;

    try {
      dadosUsuario = JSON.parse(usuario);
    } catch {
      alert('Não foi possível identificar o usuário logado.');
      return;
    }

    if (
      !this.titulo ||
      !this.tipo ||
      !this.finalidade ||
      !this.preco ||
      !this.cidade ||
      !this.estado
    ) {
      alert('Preencha os campos obrigatórios do imóvel.');
      return;
    }

    const novoImovel: Imovel = {
      id: Date.now(),
      titulo: this.titulo,
      tipo: this.tipo,

      localizacao: `${this.endereco}, ${this.cidade} - ${this.estado}`,

      area: Number(this.area) || 0,
      quartos: Number(this.quartos) || 0,
      banheiros: Number(this.banheiros) || 0,
      vagas: Number(this.vagas) || 0,

      preco: this.preco,

      imagem: this.imagemPreview || '/imagens/imoveis/1.png',

      destaque: false,

      descricao: this.descricao,

      caracteristicas: [],
      comodidades: [],

      avaliacaoRegiao: 0,
      seguranca: 0,
      transporte: 0,
      comercio: 0,
      escolas: 0,
      hospitais: 0,
      lazer: 0,

      comentarios: [],

      nomeProprietario: dadosUsuario.nome || 'Usuário',
      emailProprietario: dadosUsuario.email || '',
      telefoneProprietario: dadosUsuario.telefone || '',

      tempoCadastro: 'Anúncio publicado agora'
    };

    this.imoveisCadastradosService.salvarImovel(novoImovel);

    alert('Imóvel cadastrado com sucesso!');

    this.router.navigate(['/meus-imoveis']);
  }
}