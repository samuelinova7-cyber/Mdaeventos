import { ServiceItem, PortfolioCase, TestimonialItem, FAQItem } from '../types';

export const BRAND_INFO = {
  name: 'MDE Eventos',
  legalName: 'MDE - Eventos, Marketing & Soluções Empresariais',
  handle: '@mde.eventos',
  tagline: 'Conectar pessoas, empresas e oportunidades: Cada evento tem um propósito para comunicar, fortalecer relacionamentos e criar experiências.',
  purposeQuote: 'Cada evento tem um propósito.',
  segment: 'Planejamento e produção de eventos corporativos e institucionais',
  phone: '5582999990000', // Default Alagoas DDD 82 format
  displayPhone: '(82) 99999-0000',
  email: 'contato@mdeeventos.com.br',
  instagramUrl: 'https://instagram.com/mde.eventos',
  address: 'Maceió - Alagoas | Atuação em todo o Brasil',
  experienceYears: '+20 Anos de Atuação no Mercado',
  mission: 'Impulsionar o empreendedorismo por meio de soluções estratégicas, transformando sonhos em realidades empresariais sólidas e duradouras.',
  purpose: 'Facilitar a execução de estratégias em eventos para garantir maior controle de resultados e a satisfação dos participantes.',
};

export const COMPANY_OBJECTIVES = [
  {
    number: '01',
    title: 'Geração e Convite de Leads Qualificados',
    description: 'Convidar leads em potencial e tomadores de decisão para conhecer produtos, serviços e posicionamento da sua empresa.',
  },
  {
    number: '02',
    title: 'Coordenação e Execução de Projeto',
    description: 'Coordenar e executar minuciosamente todas as atividades definidas no cronograma mestre do evento.',
  },
  {
    number: '03',
    title: 'Suporte Completo à Infraestrutura',
    description: 'Organizar, testar e supervisionar o suporte à infraestrutura no local da realização (espaços, acessos e logística).',
  },
  {
    number: '04',
    title: 'Supervisão e Gestão de Terceiros',
    description: 'Contratar fornecedores homologados e supervisionar equipes de som, luz, LED, buffet, recepção e segurança.',
  },
  {
    number: '05',
    title: 'Gestão Estratégica de Pós-Evento',
    description: 'Conduzir ações de pós-evento, relatórios de métricas, certificação e relacionamento para fidelização do público.',
  },
];

export const FEATURED_CLIENTS = [
  {
    name: 'CREMAL',
    role: 'Conselho Regional de Medicina de Alagoas',
    tag: 'Parceria Institucional & Evento do Dia do Médico',
  },
  {
    name: 'Arcos Odontologia',
    role: 'Clínica & Centro de Odontologia Avançada',
    tag: 'Eventos Corporativos & Lançamentos',
  },
  {
    name: 'Conecta Contábil Alagoas',
    role: 'Maior Encontro de Negócios e Contabilidade de AL',
    tag: 'Produção Completa & +800 Congressistas',
  },
  {
    name: 'EduConecta',
    role: 'Congresso Regional de Educação & Gestão',
    tag: 'Multi-Salas & Feira de Inovação',
  },
];

export const DETAILED_SERVICES_PILLARS = [
  {
    id: 'secretariado-recepcao',
    title: 'Secretariado e Recepção Profissional',
    subtitle: 'O primeiro ponto de contato que encanta seu convidado',
    description: 'Equipe de recepcionistas profissionais treinadas para receber os convidados com calorosidade e elegância, além de prestar suporte contínuo e fornecer informações durante todo o evento.',
    items: [
      'Recepcionistas bilingues e especializadas em público corporativo',
      'Acolhimento humanizado e orientação nos fluxos do evento',
      'Entrega de kits, crachás e suporte à mesa de credenciamento',
      'Atendimento prioritário a autoridades, palestrantes e diretores',
    ],
    badge: 'Atendimento Humanizado',
  },
  {
    id: 'estrutura-apresentacao',
    title: 'Organização, Estrutura e Local da Apresentação',
    subtitle: 'Infraestrutura de ponta a ponta sem riscos técnicos',
    description: 'Gestão e alinhamento minucioso da infraestrutura completa do espaço para que o palco seja o grande espetáculo da sua marca.',
    items: [
      'Cenografia corporativa e painéis instagramáveis',
      'Sonorização cristalina, microfones sem fio e mesa digital',
      'Equipamentos de projeção e painéis de LED de alta definição',
      'Decoração sofisticada e paisagismo corporativo',
      'Monitoramento contínuo de todos os detalhes operacionais em tempo real',
    ],
    badge: 'Infraestrutura 360°',
  },
  {
    id: 'cerimonial',
    title: 'Cerimonial & Mestre de Cerimônias',
    subtitle: 'Rigor britânico e autoridade no palco',
    description: 'Condução solene ou dinâmica com Mestre de Cerimônias experiente, assegurando cumprimento impecável do protocolo e do timing.',
    items: [
      'Atuação de Mestre de Cerimônias profissional e carismático',
      'Supervisão rigorosa dos horários das apresentações',
      'Controle do tempo de fala dos oradores com sinalizadores',
      'Roteirização completa de protocolos e homenagens oficiais',
    ],
    badge: 'Pontualidade Britânica',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'planejamento-gestao',
    title: 'Planejamento e Gestão de Eventos Corporativos',
    shortDescription: 'Organização de ponta a ponta para feiras, congressos, fóruns e simpósios de grande porte em AL e no Brasil.',
    fullDescription: 'Gestão 360° com mais de 20 anos de tradição. Concepção temática, cronograma executivo, contratação de fornecedores homologados, montagem de infraestrutura, logística de palestrantes até a entrega final com métricas de resultado.',
    icon: 'Briefcase',
    badge: 'Mais de 20 Anos de Experiência',
    features: [
      'Feiras e Congressos Estaduais e Nacionais',
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
    id: 'dia-do-medico-cremal',
    title: 'Celebração do Dia do Médico (CREMAL)',
    edition: 'Homenagem Oficial',
    category: 'Solenidade & Homenagem',
    location: 'Conselho Regional de Medicina de Alagoas / Maceió - AL',
    participants: '+300 Médicos & Autoridades',
    description: 'Comemoração de alta sofisticação em homenagem ao Dia do Médico com cerimonial impecável, ambientação nobre, música ao vivo e recepção acolhedora para médicos alagoanos.',
    highlights: [
      'Parceria institucional com o Conselho Regional de Medicina (CREMAL)',
      'Cerimonial e mestre de cerimônias com protocolo rigoroso',
      'Decoração cênica refinada e coquetel de alta gastronomia',
      'Cobertura audiovisual e registros emocionantes dos homenageados',
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
    ],
    testimonialQuote: 'A MDE conduziu a homenagem do Dia do Médico com um nível de respeito, elegância e atenção que honrou toda a classe médica de Alagoas.',
    testimonialAuthor: 'Comissão Especial',
    testimonialRole: 'Conselho Regional de Medicina (CREMAL)',
  },
  {
    id: 'arcos-odontologia',
    title: 'Eventos & Lançamentos Arcos Odontologia',
    edition: 'Corporativo & Saúde',
    category: 'Lançamento & Saúde Corporativa',
    location: 'Arcos Odontologia / Maceió - AL',
    participants: '+150 Convidados VIP',
    description: 'Encontro corporativo e apresentação de tecnologias clínicas avançadas, atraindo profissionais da odontologia e clientes com recepção VIP e experiência de marca envolvente.',
    highlights: [
      'Equipe de recepcionistas profissionais com suporte integral',
      'Sonorização e projeção para apresentação clínica',
      'Ações de pós-evento com leads qualificados para novos procedimentos',
      'Cenografia contemporânea e coquetel executivo',
    ],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop',
    ],
    testimonialQuote: 'Organização cirúrgica, recepção exemplar e infraestrutura que transmitiu exatamente a sofisticação da Arcos.',
    testimonialAuthor: 'Diretoria Clínica',
    testimonialRole: 'Arcos Odontologia',
  },
  {
    id: 'conecta-contabil',
    title: '3º Conecta Contábil Alagoas',
    edition: 'Ingressos Esgotados (Sold Out)',
    category: 'Congresso & Feira de Negócios',
    location: 'Centro Cultural e de Exposições Ruth Cardoso / Maceió - AL',
    participants: '+800 Congressistas (Lotação Máxima)',
    description: 'Descrito como o "maior encontro de contabilidade e negócios de Alagoas", contando com edições de grande porte e ingressos esgotados (a exemplo da consagrada 3ª edição). Produção e execução completa da MDE Eventos.',
    highlights: [
      'Ingressos 100% esgotados com semanas de antecedência',
      '18 estandes de patrocinadores e marcas de tecnologia',
      'Credenciamento 100% digital integrado com Sympla e QR Code',
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
    title: 'EduConecta - Educação, Inovação & Gestão',
    edition: 'Centro de Convenções de Maceió',
    category: 'Congresso Educacional & Workshops',
    location: 'Centro de Convenções de Maceió / Maceió - AL',
    participants: '+500 Educadores e Gestores',
    description: 'Encontro focado em educação, inovação e gestão, realizado no Centro de Convenções de Maceió, reunindo expositores e público qualificado do setor educacional.',
    highlights: [
      'Realizado no prestigiado Centro de Convenções de Maceió',
      'Feira de soluções educacionais com múltiplos expositores',
      '4 salas temáticas simultâneas e palestras magnéticas',
      'Kit congressista personalizado e cerimonial impecável',
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
    title: 'L.I.V.R.E. Talks - Rodas de Conversa Empresariais',
    edition: 'Comunicação & Desenvolvimento',
    category: 'Talk Show & Networking B2B',
    location: 'Auditório Empresarial / Maceió - AL',
    participants: '+250 CEOs & Executivos',
    description: 'Rodas de conversa dinâmicas voltadas para empresários com foco em comunicação e desenvolvimento pessoal/profissional, unindo networking de alto nível e debates estratégicos.',
    highlights: [
      'Foco em comunicação e desenvolvimento pessoal/profissional',
      'Cenografia intimista estilo talk show com iluminação cênica',
      'Mediação qualificada e debates dinâmicos entre CEOs',
      'Welcome Coffee e geração de parcerias imediatas',
    ],
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop',
    ],
    testimonialQuote: 'O dinamismo e a elegância do L.I.V.R.E. Talks proporcionaram um ambiente incomparável para geração de parcerias estratégicas.',
    testimonialAuthor: 'Rodrigo M.',
    testimonialRole: 'Palestrante & Empreendedor',
  },
];

export const STATS_DATA = [
  {
    value: '+20 Anos',
    label: 'Experiência de Mercado',
    subtext: 'Realizando eventos de sucesso em AL e no Brasil',
    icon: 'Award',
  },
  {
    value: '+15.000',
    label: 'Participantes Impactados',
    subtext: 'Público corporativo e acadêmico qualificado',
    icon: 'Users',
  },
  {
    value: '99.4%',
    label: 'Índice de Satisfação',
    subtext: 'Aprovação unânime de diretores e congressistas',
    icon: 'Smile',
  },
  {
    value: '100%',
    label: 'Controle & Pontualidade',
    subtext: 'Supervisão técnica contínua e cronograma rigoroso',
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
    quote: 'A MDE Eventos cuidou do nosso congresso anual com uma perfeição impressionante. Com mais de 20 anos de bagagem, eles antecipam qualquer detalhe operacional.',
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
    company: 'Arcos Odontologia / Saúde',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
    quote: 'A equipe de secretariado e recepção da MDE é de uma gentileza e elegância sem igual. Nossos convidados se sentiram acolhidos desde o primeiro minuto.',
    event: 'Encontro Corporativo & Inovação',
    rating: 5,
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'Qual é o diferencial de contratar a MDE em relação a organizadores comuns?',
    answer: 'A MDE possui mais de 20 anos de experiência consolidada em Alagoas e no Brasil. Não cuidamos apenas da festa: desenhamos a estratégia para convidar leads qualificados, coordenamos toda a infraestrutura técnica (cenografia, LED, som), fornecemos recepcionistas profissionais e conduzimos o pós-evento para geração contínua de negócios.',
  },
  {
    question: 'Com quanta antecedência devo iniciar o planejamento do meu evento?',
    answer: 'Para grandes congressos e feiras com mais de 300 pessoas, recomendamos iniciar de 3 a 6 meses antes para garantir as melhores datas em centros de convenções e captação de patrocinadores. Para treinamentos e workshops menores, de 30 a 45 dias são suficientes para uma execução impecável.',
  },
  {
    question: 'A MDE atua em outros estados além de Alagoas?',
    answer: 'Sim! Com mais de 20 anos de atuação, realizamos eventos corporativos tanto em todo o estado de Alagoas (Maceió, Arapiraca, etc.) quanto em diversos outros estados do Brasil com rede de logística e fornecedores homologados.',
  },
  {
    question: 'Como funciona a equipe de recepção e cerimonial da MDE?',
    answer: 'Nossa equipe de recepção é rigorosamente treinada para acolher com cordialidade, fornecer orientações e gerenciar o credenciamento rápido. Nosso Mestre de Cerimônias coordena os protocolos oficiais, supervisiona o cumprimento estrito dos horários e controla o tempo de fala de cada orador.',
  },
  {
    question: 'A MDE emite nota fiscal e atende empresas privadas e órgãos públicos?',
    answer: 'Sim! Somos uma empresa formalmente constituída (MDE - Eventos, Marketing & Soluções Empresariais), com CNPJ ativo, certidões negativas em dia e apta para emissão de Nota Fiscal de Serviços para pessoas jurídicas, associações, conselhos de classe (como o CREMAL) e órgãos públicos.',
  },
  {
    question: 'Como faço para receber uma proposta e orçamento detalhado?',
    answer: 'Você pode preencher nosso formulário interativo de orçamento nesta página ou clicar no botão de WhatsApp para falar diretamente com nossa especialista de projetos, detalhando o público estimado e a data desejada.',
  },
];
