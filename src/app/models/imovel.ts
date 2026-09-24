export interface Imovel {

  // Identificação
  id: number;
  titulo: string;
  tipo: string;
  localizacao: string;

  // Características físicas
  area: number;
  quartos: number;
  banheiros: number;
  vagas: number;

  // Informações comerciais
  preco: string;
  imagem: string;
  destaque: boolean;

  // Descrição e recursos
  descricao: string;
  caracteristicas: string[];
  comodidades: string[];

  // Avaliação da região
  avaliacaoRegiao: number;
  seguranca: number;
  transporte: number;
  comercio: number;
  escolas: number;
  hospitais: number;
  lazer: number;

  // Proprietário / anunciante
  nomeProprietario: string;
  tempoCadastro: string;
  emailProprietario: string;
}


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
    imagem: '/imagens/tour-360/panorama.jpg',
    destaque: true,

    descricao: 'Casa ampla e moderna com excelente localização e vista para o mar.',

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

    nomeProprietario: 'Proprietário',
    tempoCadastro: 'Há 2 dias',
    emailProprietario: 'contato@localizaimoveis.com'
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
    imagem: '/imagens/tour-360/sala.jpg',
    destaque: true,

    descricao: 'Apartamento moderno e confortável, ideal para famílias que procuram praticidade.',

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

    nomeProprietario: 'Proprietário',
    tempoCadastro: 'Há 3 dias',
    emailProprietario: 'contato@localizaimoveis.com'
  },


  // =====================================================
  // IMÓVEL 3
  // =====================================================
  {
    id: 3,
    titulo: 'Apartamento com Varanda e Vista',
    tipo: 'Apartamento',
    localizacao: 'Salvador, Bahia',

    area: 180,
    quartos: 3,
    banheiros: 3,
    vagas: 2,

    preco: 'R$ 1.200.000',
    imagem: '/imagens/tour-360/varanda.jpg',
    destaque: false,

    descricao: 'Apartamento espaçoso com varanda ampla e excelente iluminação natural.',

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

    nomeProprietario: 'Proprietário',
    tempoCadastro: 'Há 5 dias',
    emailProprietario: 'contato@localizaimoveis.com'
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

    descricao: 'Casa ampla com área de lazer completa localizada em condomínio residencial.',

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

    nomeProprietario: 'Proprietário',
    tempoCadastro: 'Há 1 semana',
    emailProprietario: 'contato@localizaimoveis.com'
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

    descricao: 'Apartamento compacto e funcional com cozinha planejada.',

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

    nomeProprietario: 'Proprietário',
    tempoCadastro: 'Há 4 dias',
    emailProprietario: 'contato@localizaimoveis.com'
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
    imagem: '/imagens/imoveis/3.png',
    destaque: false,

    descricao: 'Apartamento de alto padrão com suíte ampla e ambientes sofisticados.',

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

    nomeProprietario: 'Proprietário',
    tempoCadastro: 'Há 6 dias',
    emailProprietario: 'contato@localizaimoveis.com'
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
    imagem: '/imagens/imoveis/2.png',
    destaque: true,

    descricao: 'Casa exclusiva em localização privilegiada próxima ao píer.',

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

    nomeProprietario: 'Proprietário',
    tempoCadastro: 'Há 2 semanas',
    emailProprietario: 'contato@localizaimoveis.com'
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
    imagem: '/imagens/imoveis/1.png',
    destaque: false,

    descricao: 'Excelente imóvel residencial com espaços amplos e boa infraestrutura.',

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

    nomeProprietario: 'Proprietário',
    tempoCadastro: 'Há 3 semanas',
    emailProprietario: 'contato@localizaimoveis.com'
  }

];