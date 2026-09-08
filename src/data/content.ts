import { ServiceItem, PortfolioCase, TestimonialItem, FAQItem } from '../types';

export const BRAND_INFO = {
  name: 'MDE Eventos',
  handle: '@mde.eventos',
  tagline: 'Transformando eventos corporativos em experiências memoráveis e estratégicas.',
  phone: '5582999990000', // Default Alagoas DDD 82 format
  displayPhone: '(82) 99999-0000',
  email: 'contato@mdeeventos.com.br',
  instagramUrl: 'https://instagram.com/mde.eventos',
  address: 'Maceió - Alagoas | Atendimento em todo o Nordeste',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'planejamento-gestao',
    title: 'Planejamento e Gestão de Eventos Corporativos',
    shortDescription: 'Organização de ponta a ponta para feiras, congressos, fóruns e simpósios de grande porte.',
    fullDescription: 'Gestão 360° desde a concepção temática, cronograma executivo, contratação de fornecedores homologados, montagem de infraestrutura, logística de palestrantes até a entrega final com métricas de resultado.',
    icon: 'Briefcase',
    badge: 'Mais Solicitado',
    features: [
      'Feiras e Congressos Estaduais e Regionais',
      'Fóruns, Simpósios e Convenções Anuais',
      'Curadoria e Logística de Palestrantes Nacionais',
      'Cenografia Corporativa e Montagem Estrutural',
      'Gestão de Fornecedores e Licenciamentos em AL',
    ],
    deliverables: [
      'Cronograma mestre de produção e matriz de riscos',
      'Gestão financeira e prestação de contas transparente',
      'Coordenação de equipe de receptivo e cerimonial',
      'Relatório de pós-evento com métricas e NPS',
    ],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'treinamentos-encontros',
    title: 'Treinamentos e Encontros Empresariais',
    shortDescription: 'Workshops imersivos, rodadas de negócios B2B e encontros de liderança estratégica.',
    fullDescription: 'Estruturação de ambientes propícios para aprendizagem acelerada, conexões de alto valor e alinhamento de equipes corporativas com dinâmicas de alto padrão.',
    icon: 'Users',
    badge: 'Alto Engajamento',
    features: [
      'Workshops Práticos e Imersões Executivas',
      'Rodadas de Negócios B2B com Agendamento Prévia',
      'Encontros de Diretoria e Convenções de Vendas',
      'Coffee Breaks Premium e Almoços de Negócios',
      'Materiais Didáticos e Kits Personalizados',
    ],
    deliverables: [
      'Roteirização de dinâmicas e cronograma de imersão',
      'Espaços selecionados com acústica e conforto premium',
      'Coordenação técnica de áudio, vídeo e transmissão',
      'Certificados de participação personalizados',
    ],
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'marketing-sympla',
    title: 'Criação de Conteúdo e Marketing de Eventos',
    shortDescription: 'Divulgação estratégica, captação ativa de patrocinadores e gestão de credenciamento via Sympla.',
    fullDescription: 'Estratégia completa de tração de público para lotar seu evento, captação profissional de cotas de patrocínio com dossiê comercial e credenciamento ágil com leitor QR code.',
    icon: 'Megaphone',
    badge: 'Vendas & Ingressos',
    features: [
      'Planejamento de Divulgação e Tráfego Pago',
      'Dossiê Comercial e Captação de Patrocinadores',
      'Configuração e Gestão Completa no Sympla',
      'Credenciamento Ágil com Totens e QR Code',
      'Cobertura Fotográfica e Audiovisual em Tempo Real',
    ],
    deliverables: [
      'Página de vendas de ingressos otimizada',
      'Controle financeiro de bilheteria e lotes',
      'Zero filas no credenciamento da portaria',
      'Banco de imagens e vídeos para mídias sociais',
    ],
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'palestras-talkshows',
    title: 'Palestras e Talk Shows Corporativos',
    shortDescription: 'Organização, curadoria e mediação de painéis corporativos dinâmicos (ex: L.I.V.R.E. Talks).',
    fullDescription: 'Formatos inspiradores no estilo talk show, mesas-redondas e palestras magnéticas que prendem a atenção do início ao fim com dinamismo e relevância.',
    icon: 'Mic',
    badge: 'Formato Exclusivo',
    features: [
      'Estruturação de Talk Shows e Podcasts ao Vivo',
      'Mediação Profissional de Painéis de Debates',
      'Curadoria de Conteúdo e Roteirização de Apresentadores',
      'Iluminação Cênica e Cenários Sofisticados',
      'Transmissão Híbrida e Gravação em 4K',
    ],
    deliverables: [
      'Roteiro minucioso de perguntas e timing dos blocos',
      'Cenografia moderna com poltronas e painéis de LED',
      'Sonorização cristalina com microfones sem fio',
      'Cortes em vídeo (reels) dos melhores momentos',
    ],
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop',
  },
];

export const PORTFOLIO_CASES: PortfolioCase[] = [
  {
    id: 'conecta-contabil',
    title: '3º Conecta Contábil Alagoas',
    edition: '3ª Edição Consolidada',
    category: 'Congresso & Feira de Negócios',
    location: 'Centro Cultural e de Exposições Ruth Cardoso / Maceió - AL',
    participants: '+800 Profissionais & Empresários',
    description: 'O maior encontro de contabilidade, tecnologia e gestão de negócios de Alagoas. Produção completa da MDE Eventos, reunindo feira de expositores, palestras de renome nacional e rodadas de networking.',
    highlights: [
      'Mais de 800 congressistas em 2 dias intensos',
      '18 estandes de patrocinadores e marcas de tecnologia',
      'Credenciamento 100% digital integrado com Sympla',
      'Painéis simultâneos e talk shows de inovação fiscal',
    ],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop',
    ],
    testimonialQuote: 'A MDE Eventos elevou o Conecta Contábil a um patamar que Alagoas nunca tinha visto. Organização cirúrgica, pontualidade britânica e um cuidado com os detalhes que encantou todos os patrocinadores.',
    testimonialAuthor: 'Comissão Organizadora',
    testimonialRole: 'Conecta Contábil Alagoas',
  },
  {
    id: 'educonecta',
    title: 'EduConecta - Congresso de Educação & Inovação',
    edition: 'Edição Regional',
    category: 'Congresso Educacional & Workshops',
    location: 'Hotel Jatiúca / Maceió - AL',
    participants: '+500 Educadores e Gestores',
    description: 'Encontro focado no futuro da educação, tecnologias pedagógicas e liderança acadêmica. Espaço multi-salas com dinâmicas práticas, keynotes e feira de soluções educacionais.',
    highlights: [
      '500+ educadores e diretores de instituições',
      '4 salas temáticas rodando simultaneamente',
      'Kit congressista personalizado e cerimonial impecável',
      'Transmissão ao vivo para polos regionais',
    ],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    ],
    testimonialQuote: 'Uma das melhores experiências de evento que já realizamos. Toda a gestão de credenciamento e áudio visual funcionou perfeitamente.',
    testimonialAuthor: 'Diretoria Executiva',
    testimonialRole: 'Rede Educacional Alagoana',
  },
  {
    id: 'livre-talks',
    title: 'L.I.V.R.E. Talks - Liderança, Inovação e Visão',
    edition: 'Painéis Corporativos',
    category: 'Talk Show & Networking B2B',
    location: 'Auditório Empresarial / Maceió - AL',
    participants: '+250 CEOs & Executivos',
    description: 'Formato inovador de talk show corporativo com palco intimista de alta sofisticação, mediação dinâmica e conexões de alto escalão entre empresários alagoanos.',
    highlights: [
      'Cenografia estilo estúdio de TV com iluminação warm gold',
      'Debates ágeis de 20 minutos com pitchs e perguntas da plateia',
      'Welcome Coffee e Coquetel de Networking com som ambiente',
      'Geração de cortes de vídeo estratégicos para redes sociais',
    ],
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop',
    ],
    testimonialQuote: 'O dinamismo e a elegância do L.I.V.R.E. Talks proporcionaram um ambiente incomparável para geração de parcerias estratégicas.',
    testimonialAuthor: 'Rodrigo M.',
    testimonialRole: 'Palestrante & Empreendedor',
  },
  {
    id: 'jovem-aprendiz-negocios',
    title: 'Encontro Jovem Aprendiz & Rodadas de Negócios',
    edition: 'Fórum de Integração',
    category: 'Fórum Corporativo & Empregabilidade',
    location: 'Centro de Convenções / Maceió - AL',
    participants: '+600 Jovens e Líderes de RH',
    description: 'Evento de grande impacto social e corporativo unindo empresas contratantes, instituições formadoras e jovens talentos em busca de oportunidades.',
    highlights: [
      'Auditório principal com 600 lugares lotados',
      'Espaço de estandes para RHs de grandes empresas',
      'Distribuição rápida de credenciais e certificados',
      'Cobertura fotográfica completa e engajamento nas redes',
    ],
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop',
    ],
    testimonialQuote: 'Sensibilidade e competência na coordenação de centenas de participantes sem nenhum imprevisto na logística.',
    testimonialAuthor: 'Coordenação de RH',
    testimonialRole: 'Instituto Parceiro',
  },
];

export const STATS_DATA = [
  {
    value: '+50',
    label: 'Eventos Corporativos Realizados',
    subtext: 'Congressos, feiras, fóruns e simpósios',
    icon: 'Award',
  },
  {
    value: '+15.000',
    label: 'Participantes Impactados',
    subtext: 'Público qualificado em Alagoas',
    icon: 'Users',
  },
  {
    value: '99.4%',
    label: 'Índice de Satisfação',
    subtext: 'Avaliação positiva de contratantes e público',
    icon: 'Smile',
  },
  {
    value: '100%',
    label: 'Cumprimento de Prazos',
    subtext: 'Metodologia com cronograma rigoroso',
    icon: 'CheckCircle2',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    name: 'Dra. Camila Vasconcelos',
    role: 'Diretora de Eventos',
    company: 'Associação Empresarial de AL',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    quote: 'A MDE Eventos cuidou do nosso congresso anual com uma perfeição impressionante. Desde a pré-produção até os detalhes do credenciamento, nossa diretoria pôde focar 100% no conteúdo.',
    event: 'Congresso Estadual de Gestão',
    rating: 5,
  },
  {
    id: '2',
    name: 'Carlos Eduardo Brandão',
    role: 'Coordenador Geral',
    company: 'Conecta Contábil Alagoas',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop',
    quote: 'O Conecta Contábil é um megaevento e a MDE entrega com maestria. Estandes lotados, palco com tecnologia de ponta e uma equipe atenta a cada minuto da programação.',
    event: '3º Conecta Contábil',
    rating: 5,
  },
  {
    id: '3',
    name: 'Mariana Mendonça',
    role: 'Head de Marketing',
    company: 'Fintech Regional',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
    quote: 'A captação de patrocinadores e a divulgação com a MDE superaram todas as metas de vendas no Sympla. Foi sold-out com 2 semanas de antecedência!',
    event: 'L.I.V.R.E. Talks & Rodada Tech',
    rating: 5,
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'Com quanta antecedência devo iniciar o planejamento do meu evento?',
    answer: 'Para grandes congressos e feiras com mais de 300 pessoas, recomendamos iniciar de 3 a 6 meses antes para garantir as melhores datas em centros de convenções e captação de patrocinadores. Para treinamentos e workshops menores, de 30 a 45 dias são suficientes para uma execução impecável.',
  },
  {
    question: 'A MDE Eventos atende apenas em Maceió ou em todo o estado de Alagoas?',
    answer: 'Atendemos em todo o estado de Alagoas (Maceió, Arapiraca, Marechal Deodoro, Barra de São Miguel, Penedo, etc.) e também realizamos produções em estados vizinhos do Nordeste com nossa rede de logística e fornecedores homologados.',
  },
  {
    question: 'Como funciona a integração com a plataforma Sympla para ingressos?',
    answer: 'Cuidamos de 100% da configuração: criação da página oficial do evento, configuração de lotes promocionais, cupons, formulários personalizados de inscrição e emissão de notas fiscais. No dia do evento, levamos nossa equipe treinada e leitores QR code para credenciamento instantâneo sem filas.',
  },
  {
    question: 'A MDE emite nota fiscal e atende empresas privadas e órgãos públicos?',
    answer: 'Sim! Somos uma empresa formalmente constituída, com CNPJ ativo, certidões negativas em dia e apta para emissão de Nota Fiscal de Serviços para pessoas jurídicas, associações, conselhos de classe e órgãos públicos.',
  },
  {
    question: 'Vocês também auxiliam na captação de patrocinadores para o evento?',
    answer: 'Sim! Elaboramos o Dossiê Comercial profissional com cotas de patrocínio (Cota Diamante, Ouro, Prata, Apoio), métricas de visibilidade e auxiliamos na abordagem estratégica junto a marcas parceiras do mercado regional e nacional.',
  },
  {
    question: 'Como faço para receber uma proposta e orçamento detalhado?',
    answer: 'Você pode preencher nosso formulário interativo de orçamento nesta página ou clicar no botão de WhatsApp para falar diretamente com nossa especialista de projetos, detalhando o público estimado e a data desejada.',
  },
];
