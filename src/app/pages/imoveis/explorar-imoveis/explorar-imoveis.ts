import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-explorar-imoveis',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './explorar-imoveis.html',
  styleUrl: './explorar-imoveis.css',
})
export class ExplorarImoveis {
  // ==========================================
  // LOGIN
  // ==========================================

  usuarioLogado = false;
  usuarioNome = '';
  perfilUsuario = '';

  menuUsuarioAberto = false;

  // ==========================================
  // BUSCA
  // ==========================================

  termoBusca = '';
  tipoSelecionado = '';
  precoSelecionado = '';
  quartosSelecionados = '';

  // ==========================================
  // LOCALIZAÇÃO
  // ==========================================

  carregandoLocalizacao = false;
  localizacaoAtiva = false;

  // ==========================================
  // IMÓVEIS PRÓXIMOS
  // ==========================================
  imoveisProximos = [
    {
      id: 1,
      titulo: 'Casa moderna com jardim',
      tipo: 'Casa',
      localizacao: 'Camaçari, BA',
      quartos: 3,
      banheiros: 2,
      vagas: 2,
      area: 180,
      preco: 'R$ 480.000',
      distancia: '2,3 km',
      imagem: '/imagens/imoveis/30ex.jpg',
    },
    {
      id: 2,
      titulo: 'Apartamento aconchegante',
      tipo: 'Apartamento',
      localizacao: 'Abrantes, BA',
      quartos: 2,
      banheiros: 2,
      vagas: 1,
      area: 82,
      preco: 'R$ 320.000',
      distancia: '4,1 km',
      imagem: '/imagens/imoveis/29ex.jpg',
    },
    {
      id: 3,
      titulo: 'Casa ampla em condomínio',
      tipo: 'Casa',
      localizacao: 'Guarajuba, BA',
      quartos: 4,
      banheiros: 3,
      vagas: 2,
      area: 240,
      preco: 'R$ 720.000',
      distancia: '6,7 km',
      imagem: '/imagens/imoveis/19ex.jpg',
    },
  ];

  // ==========================================
  // TODOS OS IMÓVEIS
  // ==========================================

  imoveis = [
    {
      id: 1,
      titulo: 'Casa moderna com jardim',
      tipo: 'Casa',
      localizacao: 'Camaçari, BA',
      quartos: 3,
      banheiros: 2,
      vagas: 2,
      area: 180,
      preco: 'R$ 480.000',
      destaque: true,
      imagem: '/imagens/imoveis/30ex.jpg',
    },
    {
      id: 2,
      titulo: 'Apartamento aconchegante',
      tipo: 'Apartamento',
      localizacao: 'Salvador, BA',
      quartos: 2,
      banheiros: 2,
      vagas: 1,
      area: 82,
      preco: 'R$ 320.000',
      destaque: false,
      imagem: '/imagens/imoveis/44.jpg',
    },
    {
      id: 3,
      titulo: 'Casa ampla em condomínio',
      tipo: 'Casa',
      localizacao: 'Guarajuba, BA',
      quartos: 4,
      banheiros: 3,
      vagas: 2,
      area: 240,
      preco: 'R$ 720.000',
      destaque: true,
      imagem: '/imagens/imoveis/41.jpg',
    },
    {
      id: 4,
      titulo: 'Casa em boa localização em condomínio Alphaville',
      tipo: 'Casa',
      localizacao: 'Itapuã, Salvador',
      quartos: 3,
      banheiros: 2,
      vagas: 2,
      area: 110,
      preco: 'R$ 590.000',
      destaque: false,
      imagem: '/imagens/imoveis/44.jpg',
    },
    {
      id: 5,
      titulo: 'Terreno para construir',
      tipo: 'Terreno',
      localizacao: 'Abrantes, Camaçari',
      quartos: 0,
      banheiros: 0,
      vagas: 0,
      area: 300,
      preco: 'R$ 210.000',
      destaque: false,
      imagem: '/imagens/imoveis/45.jpg',
    },
    {
      id: 6,
      titulo: 'Casa familiar espaçosa',
      tipo: 'Casa',
      localizacao: 'Lauro de Freitas, BA',
      quartos: 4,
      banheiros: 3,
      vagas: 2,
      area: 210,
      preco: 'R$ 650.000',
      destaque: false,
      imagem: '/imagens/imoveis/42.jpg',
    },
  ];

  // ==========================================
  // MENU DO USUÁRIO
  // ==========================================

  toggleMenuUsuario(): void {
    this.menuUsuarioAberto = !this.menuUsuarioAberto;
  }

  fecharMenuUsuario(): void {
    this.menuUsuarioAberto = false;
  }

  sair(): void {
    this.usuarioLogado = false;
    this.usuarioNome = '';
    this.perfilUsuario = '';
    this.menuUsuarioAberto = false;
  }

  // ==========================================
  // BUSCA
  // ==========================================
  // ==========================================
  // BUSCA E FILTROS
  // ==========================================

  buscarImoveis(): void {
    console.log('Filtros aplicados:', {
      termo: this.termoBusca,
      tipo: this.tipoSelecionado,
      preco: this.precoSelecionado,
      quartos: this.quartosSelecionados,
    });
  }

  // Converte "R$ 480.000" em 480000
  private converterPreco(preco: string): number {
    return Number(preco.replace(/\D/g, ''));
  }

  // Verifica se um imóvel corresponde aos filtros
  private correspondeAosFiltros(imovel: {
    titulo: string;
    tipo: string;
    localizacao: string;
    preco: string;
    quartos: number;
  }): boolean {
    const termo = this.termoBusca.trim().toLowerCase();

    const correspondeTexto =
      !termo ||
      imovel.titulo.toLowerCase().includes(termo) ||
      imovel.tipo.toLowerCase().includes(termo) ||
      imovel.localizacao.toLowerCase().includes(termo);

    const correspondeTipo = !this.tipoSelecionado || imovel.tipo === this.tipoSelecionado;

    const valor = this.converterPreco(imovel.preco);

    let correspondePreco = true;

    if (this.precoSelecionado === '300') {
      correspondePreco = valor <= 300000;
    } else if (this.precoSelecionado === '600') {
      correspondePreco = valor > 300000 && valor <= 600000;
    } else if (this.precoSelecionado === '601') {
      correspondePreco = valor > 600000;
    }

    let correspondeQuartos = true;

    if (this.quartosSelecionados === '4') {
      correspondeQuartos = imovel.quartos >= 4;
    } else if (this.quartosSelecionados) {
      correspondeQuartos = imovel.quartos === Number(this.quartosSelecionados);
    }

    return correspondeTexto && correspondeTipo && correspondePreco && correspondeQuartos;
  }

  // Resultados filtrados para a seção "Imóveis perto de você"
  get imoveisProximosFiltrados() {
    return this.imoveisProximos.filter((imovel) => this.correspondeAosFiltros(imovel));
  }

  // Resultados filtrados para a seção "Todos os imóveis"
  get imoveisFiltrados() {
    return this.imoveis.filter((imovel) => this.correspondeAosFiltros(imovel));
  }

  // ==========================================
  // LOCALIZAÇÃO
  // ==========================================

  usarLocalizacao(): void {
    if (!navigator.geolocation) {
      alert('Seu navegador não suporta localização.');

      return;
    }

    this.carregandoLocalizacao = true;

    navigator.geolocation.getCurrentPosition(
      (posicao) => {
        console.log('Latitude:', posicao.coords.latitude);

        console.log('Longitude:', posicao.coords.longitude);

        this.localizacaoAtiva = true;
        this.carregandoLocalizacao = false;
      },

      () => {
        this.carregandoLocalizacao = false;

        alert('Não foi possível obter sua localização.');
      },
    );
  }
}
