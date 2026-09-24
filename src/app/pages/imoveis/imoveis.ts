import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Imovel {
  id: number;
  titulo: string;
  tipo: string;
  bairro: string;
  cidade: string;
  preco: number;
  quartos: number;
  banheiros: number;
  vagas: number;
  area: number;
  imagem: string;
}

@Component({
  selector: 'app-imoveis',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './imoveis.html',
  styleUrl: './imoveis.css'
})
export class Imoveis {

  busca = '';
  tipoSelecionado = 'Todos';

  imoveis: Imovel[] = [
    {
      id: 1,
      titulo: 'Casa moderna com piscina',
      tipo: 'Casa',
      bairro: 'Itapuã',
      cidade: 'Salvador',
      preco: 850000,
      quartos: 3,
      banheiros: 2,
      vagas: 2,
      area: 180,
      imagem: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
    },
    {
      id: 2,
      titulo: 'Apartamento com vista para o mar',
      tipo: 'Apartamento',
      bairro: 'Barra',
      cidade: 'Salvador',
      preco: 620000,
      quartos: 2,
      banheiros: 2,
      vagas: 1,
      area: 95,
      imagem: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d'
    },
    {
      id: 3,
      titulo: 'Cobertura de alto padrão',
      tipo: 'Cobertura',
      bairro: 'Ondina',
      cidade: 'Salvador',
      preco: 1800000,
      quartos: 4,
      banheiros: 4,
      vagas: 3,
      area: 220,
      imagem: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c'
    },
    {
      id: 4,
      titulo: 'Apartamento moderno',
      tipo: 'Apartamento',
      bairro: 'Pituba',
      cidade: 'Salvador',
      preco: 480000,
      quartos: 2,
      banheiros: 2,
      vagas: 1,
      area: 78,
      imagem: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea'
    }
  ];

  get imoveisFiltrados(): Imovel[] {
    const termo = this.busca.toLowerCase().trim();

    return this.imoveis.filter(imovel => {

      const correspondeBusca =
        !termo ||
        imovel.titulo.toLowerCase().includes(termo) ||
        imovel.bairro.toLowerCase().includes(termo) ||
        imovel.tipo.toLowerCase().includes(termo);

      const correspondeTipo =
        this.tipoSelecionado === 'Todos' ||
        imovel.tipo === this.tipoSelecionado;

      return correspondeBusca && correspondeTipo;
    });
  }

  formatarPreco(preco: number): string {
    return preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }
}