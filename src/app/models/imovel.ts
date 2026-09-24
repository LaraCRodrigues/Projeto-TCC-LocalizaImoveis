// =====================================================
// INTERFACE DOS COMENTÁRIOS
// =====================================================

export interface Comentario {
  nome: string;
  comentario: string;
  avaliacao: number;
  data: string;
}


// =====================================================
// INTERFACE DO IMÓVEL
// =====================================================

export interface Imovel {
  id: number;
  titulo: string;
  tipo: string;
  localizacao: string;
  area: number;
  quartos: number;
  banheiros: number;
  vagas: number;
  preco: string;
  imagem: string;
  destaque: boolean;
  descricao: string;
  caracteristicas: string[];
  comodidades: string[];
  avaliacaoRegiao: number;
  seguranca: number;
  transporte: number;
  comercio: number;
  escolas: number;
  hospitais: number;
  lazer: number;
  comentarios: Comentario[];
  nomeProprietario: string;
  telefoneProprietario: string;
  tempoCadastro: string;
  emailProprietario: string;
}


// =====================================================
// LISTA DE IMÓVEIS
// =====================================================

export const IMOVEIS: Imovel[] = [

  // =====================================================
  // IMÓVEL 1
  // =====================================================

  {
    id: 1,
    titulo: 'Casa de Alto Padrão com Vista para o Mar',
    tipo: 'Casa',
    localizacao: 'Salvador, Bahia',

    area: 320,
    quartos: 4,
    banheiros: 3,
    vagas: 2,

    preco: 'R$ 1.850.000',
    imagem: '/imagens/imoveis/1.png',
    destaque: true,

    descricao:
      'Casa ampla e moderna com excelente localização e vista para o mar.',

      
    caracteristicas: [
      'Vista para o mar',
      'Suíte master',
      'Área gourmet',
      'Sala ampla'
    ],

    comodidades: [
      'Piscina',
      'Churrasqueira',
      'Jardim',
      'Portão eletrônico'
    ],

    avaliacaoRegiao: 5,
    seguranca: 5,
    transporte: 4,
    comercio: 5,
    escolas: 4,
    hospitais: 5,
    lazer: 5,

    comentarios: [
      {
        nome: 'Mariana S.',
        comentario:
          'A região é muito tranquila e a vista para o mar é maravilhosa. Também gostei bastante da quantidade de comércio próximo.',
        avaliacao: 5,
        data: 'Há 2 dias'
      },
      {
        nome: 'Carlos R.',
        comentario:
          'Localização muito boa. O acesso para outras regiões é fácil e o bairro parece bastante seguro.',
        avaliacao: 5,
        data: 'Há 5 dias'
      },
      {
        nome: 'Fernanda M.',
        comentario:
          'Gosto bastante da região. Tem mercados, restaurantes e vários serviços próximos.',
        avaliacao: 4,
        data: 'Há 1 semana'
      }
    ],

   nomeProprietario: 'Carlos Almeida',
  tempoCadastro: 'Anúncio publicado há 3 meses',
  emailProprietario: 'contato@localizaimoveis.com',
  telefoneProprietario: '71928345590'

  },


  // =====================================================
  // IMÓVEL 2
  // =====================================================

  {
    id: 2,
    titulo: 'Apartamento Moderno com Varanda',
    tipo: 'Apartamento',
    localizacao: 'Salvador, Bahia',

    area: 145,
    quartos: 3,
    banheiros: 2,
    vagas: 2,

    preco: 'R$ 890.000',
    imagem: '/imagens/imoveis/2.png',
    destaque: true,

    descricao:
      'Apartamento moderno e confortável, ideal para famílias que procuram praticidade.',

    caracteristicas: [
      'Varanda',
      'Sala integrada',
      'Cozinha planejada',
      'Suíte'
    ],

    comodidades: [
      'Piscina',
      'Academia',
      'Salão de festas',
      'Portaria 24 horas'
    ],

    avaliacaoRegiao: 4,
    seguranca: 5,
    transporte: 5,
    comercio: 4,
    escolas: 5,
    hospitais: 4,
    lazer: 4,

    comentarios: [
      {
        nome: 'Juliana A.',
        comentario:
          'O transporte é um dos pontos que mais gostei. É fácil encontrar ônibus e outros meios de transporte.',
        avaliacao: 5,
        data: 'Há 1 dia'
      },
      {
        nome: 'Rafael P.',
        comentario:
          'A região é movimentada, mas o condomínio é bem tranquilo e organizado.',
        avaliacao: 4,
        data: 'Há 4 dias'
      },
      {
        nome: 'Beatriz C.',
        comentario:
          'Tem bastante comércio por perto e vários serviços que facilitam bastante o dia a dia.',
        avaliacao: 4,
        data: 'Há 1 semana'
      }
    ],

    nomeProprietario: 'Arthur Oliveira',
  tempoCadastro: 'Anúncio publicado há 1 mes',
  emailProprietario: 'contato@localizaimoveis.com',
  telefoneProprietario: '71928344590'

  },


  // =====================================================
  // IMÓVEL 3
  // =====================================================

  {
    id: 3,
    titulo: 'Apartamento Luxuoso',
    tipo: 'Apartamento',
    localizacao: 'Salvador, Bahia',

    area: 180,
    quartos: 3,
    banheiros: 3,
    vagas: 2,

    preco: 'R$ 1.200.000',
    imagem: '/imagens/imoveis/3.png',
    destaque: false,

    descricao:
      'Apartamento espaçoso com varanda ampla e excelente iluminação natural.',

    caracteristicas: [
      'Varanda ampla',
      '3 quartos',
      'Suíte',
      'Iluminação natural'
    ],

    comodidades: [
      'Piscina',
      'Academia',
      'Elevador',
      'Portaria'
    ],

    avaliacaoRegiao: 4,
    seguranca: 4,
    transporte: 5,
    comercio: 5,
    escolas: 4,
    hospitais: 4,
    lazer: 5,

    comentarios: [
      {
        nome: 'Lucas M.',
        comentario:
          'A varanda é ótima, mas o que mais gostei foi da localização. Consigo resolver várias coisas sem precisar ir muito longe.',
        avaliacao: 5,
        data: 'Há 3 dias'
      },
      {
        nome: 'Camila R.',
        comentario:
          'Boa região para quem precisa de transporte público. Também existem vários restaurantes próximos.',
        avaliacao: 5,
        data: 'Há 6 dias'
      },
      {
        nome: 'André F.',
        comentario:
          'É uma região agradável e com bastante movimento durante o dia.',
        avaliacao: 4,
        data: 'Há 1 semana'
      }
    ],

   nomeProprietario: 'Barbara Souza',
  tempoCadastro: 'Anúncio publicado há 12 dias',
  emailProprietario: 'contato@localizaimoveis.com',
  telefoneProprietario: '71982645201'

  },


  // =====================================================
  // IMÓVEL 4
  // =====================================================

  {
    id: 4,
    titulo: 'Casa com Piscina em Condomínio',
    tipo: 'Casa',
    localizacao: 'Salvador, Bahia',

    area: 280,
    quartos: 4,
    banheiros: 4,
    vagas: 3,

    preco: 'R$ 1.650.000',
    imagem: '/imagens/imoveis/4.png',
    destaque: true,

    descricao:
      'Casa ampla com área de lazer completa localizada em condomínio residencial.',

    caracteristicas: [
      'Piscina privativa',
      'Área gourmet',
      '4 quartos',
      'Suíte master'
    ],

    comodidades: [
      'Piscina',
      'Churrasqueira',
      'Jardim',
      'Segurança 24 horas'
    ],

    avaliacaoRegiao: 5,
    seguranca: 5,
    transporte: 3,
    comercio: 4,
    escolas: 5,
    hospitais: 4,
    lazer: 5,

    comentarios: [
      {
        nome: 'Patrícia L.',
        comentario:
          'O condomínio é muito tranquilo e a segurança foi um dos pontos que mais me chamou atenção.',
        avaliacao: 5,
        data: 'Há 2 dias'
      },
      {
        nome: 'Gustavo N.',
        comentario:
          'A área de lazer é excelente. A região também é bastante agradável para famílias.',
        avaliacao: 5,
        data: 'Há 1 semana'
      },
      {
        nome: 'Renata B.',
        comentario:
          'O comércio não fica tão próximo quanto em outras regiões, mas o ambiente é muito tranquilo.',
        avaliacao: 4,
        data: 'Há 2 semanas'
      }
    ],

  nomeProprietario: 'Fernando Lima',
  tempoCadastro: 'Anúncio publicado há 1 ano',
  emailProprietario: 'contato@localizaimoveis.com',
  telefoneProprietario: '71999304210'

  },


  // =====================================================
  // IMÓVEL 5
  // =====================================================

  {
    id: 5,
    titulo: 'Apartamento com Cozinha Planejada',
    tipo: 'Apartamento',
    localizacao: 'Salvador, Bahia',

    area: 120,
    quartos: 2,
    banheiros: 2,
    vagas: 1,

    preco: 'R$ 720.000',
    imagem: '/imagens/imoveis/5.png',
    destaque: false,

    descricao:
      'Apartamento compacto e funcional com cozinha planejada.',

    caracteristicas: [
      'Cozinha planejada',
      '2 quartos',
      'Sala integrada',
      'Área de serviço'
    ],

    comodidades: [
      'Elevador',
      'Portaria',
      'Salão de festas',
      'Área comum'
    ],

    avaliacaoRegiao: 4,
    seguranca: 4,
    transporte: 5,
    comercio: 5,
    escolas: 3,
    hospitais: 4,
    lazer: 3,

    comentarios: [
      {
        nome: 'Ana P.',
        comentario:
          'A localização facilita bastante a rotina. Tem mercado e farmácia próximos.',
        avaliacao: 4,
        data: 'Há 2 dias'
      },
      {
        nome: 'Diego S.',
        comentario:
          'O transporte é muito bom e consigo chegar rapidamente a outras regiões.',
        avaliacao: 5,
        data: 'Há 5 dias'
      },
      {
        nome: 'Larissa G.',
        comentario:
          'É uma região prática para morar, mas senti falta de mais opções de lazer.',
        avaliacao: 3,
        data: 'Há 1 semana'
      }
    ],

 nomeProprietario: 'Bruno Costa',
  tempoCadastro: 'Anúncio publicado há 10 dias',
  emailProprietario: 'contato@localizaimoveis.com',
  telefoneProprietario: '71928345590'

  },


  // =====================================================
  // IMÓVEL 6
  // =====================================================

  {
    id: 6,
    titulo: 'Suíte de Alto Padrão',
    tipo: 'Apartamento',
    localizacao: 'Salvador, Bahia',

    area: 160,
    quartos: 3,
    banheiros: 3,
    vagas: 2,

    preco: 'R$ 980.000',
    imagem: '/imagens/imoveis/6.png',
    destaque: false,

    descricao:
      'Apartamento de alto padrão com suíte ampla e ambientes sofisticados.',

    caracteristicas: [
      'Suíte master',
      '3 quartos',
      'Sala ampla',
      'Acabamento premium'
    ],

    comodidades: [
      'Piscina',
      'Academia',
      'Sauna',
      'Salão de festas'
    ],

    avaliacaoRegiao: 5,
    seguranca: 4,
    transporte: 4,
    comercio: 5,
    escolas: 5,
    hospitais: 5,
    lazer: 5,

    comentarios: [
      {
        nome: 'Bruno T.',
        comentario:
          'Região muito agradável e com boas opções de serviços. Me senti seguro durante as visitas.',
        avaliacao: 5,
        data: 'Há 1 dia'
      },
      {
        nome: 'Isabela V.',
        comentario:
          'Gostei bastante dos restaurantes e mercados próximos. A localização é bem conveniente.',
        avaliacao: 5,
        data: 'Há 4 dias'
      },
      {
        nome: 'Thiago C.',
        comentario:
          'O transporte poderia ser um pouco melhor, mas no geral é uma ótima região.',
        avaliacao: 4,
        data: 'Há 1 semana'
      }
    ],

    nomeProprietario: 'Mariana Santos',
  tempoCadastro: 'Anúncio publicado há 1 hora',
  emailProprietario: 'contato@localizaimoveis.com',
  telefoneProprietario: '71940231290'

  },


  // =====================================================
  // IMÓVEL 7
  // =====================================================

  {
    id: 7,
    titulo: 'Casa Exclusiva Próxima ao Píer',
    tipo: 'Casa',
    localizacao: 'Salvador, Bahia',

    area: 350,
    quartos: 5,
    banheiros: 4,
    vagas: 3,

    preco: 'R$ 2.100.000',
    imagem: '/imagens/imoveis/7.png',
    destaque: true,

    descricao:
      'Casa exclusiva em localização privilegiada próxima ao píer.',

    caracteristicas: [
      '5 quartos',
      'Vista privilegiada',
      'Área externa ampla',
      'Suíte master'
    ],

    comodidades: [
      'Piscina',
      'Jardim',
      'Churrasqueira',
      'Área gourmet'
    ],

    avaliacaoRegiao: 4,
    seguranca: 4,
    transporte: 3,
    comercio: 4,
    escolas: 4,
    hospitais: 3,
    lazer: 5,

    comentarios: [
      {
        nome: 'Sofia M.',
        comentario:
          'A proximidade com o píer deixa a região muito bonita e agradável, principalmente nos finais de semana.',
        avaliacao: 5,
        data: 'Há 3 dias'
      },
      {
        nome: 'Marcelo D.',
        comentario:
          'É uma região mais tranquila e com bastante espaço para atividades ao ar livre.',
        avaliacao: 5,
        data: 'Há 1 semana'
      },
      {
        nome: 'Cláudia R.',
        comentario:
          'Gostei muito do lazer e da paisagem, mas o transporte poderia ser melhor.',
        avaliacao: 4,
        data: 'Há 2 semanas'
      }
    ],

    nomeProprietario: 'Marcos Vinícius',
  tempoCadastro: 'Anúncio publicado há 9 meses',
  emailProprietario: 'contato@localizaimoveis.com',
  telefoneProprietario: '71952301455'

  },


  // =====================================================
  // IMÓVEL 8
  // =====================================================

  {
    id: 8,
    titulo: 'Imóvel Residencial Completo',
    tipo: 'Casa',
    localizacao: 'Salvador, Bahia',

    area: 250,
    quartos: 4,
    banheiros: 3,
    vagas: 2,

    preco: 'R$ 1.400.000',
    imagem: '/imagens/imoveis/8.png',
    destaque: false,

    descricao:
      'Excelente imóvel residencial com espaços amplos e boa infraestrutura.',

    caracteristicas: [
      '4 quartos',
      'Sala ampla',
      'Área externa',
      'Cozinha espaçosa'
    ],

    comodidades: [
      'Garagem',
      'Jardim',
      'Área gourmet',
      'Portão eletrônico'
    ],

    avaliacaoRegiao: 3,
    seguranca: 4,
    transporte: 4,
    comercio: 3,
    escolas: 4,
    hospitais: 3,
    lazer: 4,

    comentarios: [
      {
        nome: 'Eduardo A.',
        comentario:
          'A região é tranquila e tem algumas boas opções de comércio próximas.',
        avaliacao: 4,
        data: 'Há 3 dias'
      },
      {
        nome: 'Priscila F.',
        comentario:
          'Gostei da segurança e do ambiente residencial. É uma região mais sossegada.',
        avaliacao: 4,
        data: 'Há 1 semana'
      },
      {
        nome: 'Mateus H.',
        comentario:
          'É uma boa região, mas algumas opções de comércio ficam um pouco mais distantes.',
        avaliacao: 3,
        data: 'Há 2 semanas'
      }
    ],

   nomeProprietario: 'Alberto Silva Meneses',
  tempoCadastro: 'Anúncio publicado há  2 meses',
  emailProprietario: 'contato@localizaimoveis.com',
  telefoneProprietario: '71940254410',
}
];

export interface ImovelCadastrado extends Imovel {
  proprietarioId: string;
  finalidade: string;
  endereco: string;
  cidade: string;
  estado: string;
  imagemArquivo?: string;
}