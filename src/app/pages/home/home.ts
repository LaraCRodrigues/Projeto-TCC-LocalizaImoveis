import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Imovel {
  id: number;
  titulo: string;
  localizacao: string;
  preco: string;
  imagem: string;
  quartos: number;
  banheiros: number;
  vagas: number;
  area: number;
  tipo: string;
  destaque?: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  imoveis: Imovel[] = [
    {
      id: 1,
      titulo: 'Cobertura Duplex com Vista para a Baía',
      localizacao: 'Vitória • Salvador/BA',
      preco: 'R$ 3.850.000',
      imagem:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA3blaN2K5AQTvucNrSyYMYNFpMIvNrEw5St2PAFat8mNYOfAgpEeeZLy-KdU8gww8erDtjq8AtZYhBQQfKX1pCrzlev9fRxWERzdn4Jpi6rANF-Fmk_mElGdjjae37X9x9ZylkcH3UaR0PtPfoqx4L-Yi4Si1s1g3Vy0eLsOYAPMivIZ6q4jQfFxNNSaxp-b98T636g7p6FnVHYEU0BwM8LsXt32hUHtLuasaD7JtnvlOxjjKeeXuy',
      quartos: 4,
      banheiros: 5,
      vagas: 4,
      area: 310,
      tipo: 'Cobertura',
      destaque: true
    },

    {
      id: 2,
      titulo: 'Apartamento de Alto Padrão',
      localizacao: 'Barra • Salvador/BA',
      preco: 'R$ 1.950.000',
      imagem:
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      quartos: 3,
      banheiros: 4,
      vagas: 2,
      area: 185,
      tipo: 'Apartamento',
      destaque: true
    },

    {
      id: 3,
      titulo: 'Apartamento Moderno com Varanda',
      localizacao: 'Ondina • Salvador/BA',
      preco: 'R$ 980.000',
      imagem:
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
      quartos: 3,
      banheiros: 2,
      vagas: 2,
      area: 120,
      tipo: 'Apartamento'
    },

    {
      id: 4,
      titulo: 'Casa Ampla com Piscina',
      localizacao: 'Praia do Flamengo • Salvador/BA',
      preco: 'R$ 2.400.000',
      imagem:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      quartos: 4,
      banheiros: 5,
      vagas: 4,
      area: 350,
      tipo: 'Casa'
    },

    {
      id: 5,
      titulo: 'Apartamento com Vista para o Mar',
      localizacao: 'Rio Vermelho • Salvador/BA',
      preco: 'R$ 1.350.000',
      imagem:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      quartos: 3,
      banheiros: 3,
      vagas: 2,
      area: 145,
      tipo: 'Apartamento'
    },

    {
      id: 6,
      titulo: 'Cobertura Moderna',
      localizacao: 'Graça • Salvador/BA',
      preco: 'R$ 2.750.000',
      imagem:
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      quartos: 4,
      banheiros: 4,
      vagas: 3,
      area: 270,
      tipo: 'Cobertura'
    }
  ];

  termoBusca = '';

  get imoveisFiltrados(): Imovel[] {
    const termo = this.termoBusca.trim().toLowerCase();

    if (!termo) {
      return this.imoveis;
    }

    return this.imoveis.filter(imovel =>
      imovel.titulo.toLowerCase().includes(termo) ||
      imovel.localizacao.toLowerCase().includes(termo) ||
      imovel.tipo.toLowerCase().includes(termo)
    );
  }

  pesquisar(): void {
    // A filtragem já acontece automaticamente pelo getter.
  }

  limparBusca(): void {
    this.termoBusca = '';
  }
}