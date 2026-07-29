// Central content file — all texts as placeholders, consumed by components via .map()

export const site = {
  name: "Nadya Tanan",
  role: "Psicóloga e Neuropsicóloga",
  crp: "CRP 00/000000",
  whatsappUrl: "https://wa.me/55XXXXXXXXXXX",
  whatsappLabel: "Conversar no WhatsApp",
  email: "contato@nadyatanan.com.br",
  phone: "(00) 00000-0000",
  hours: "Segunda a sexta · 09h às 19h",
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/",
};

export const nav = [
  { href: "#hero", label: "Início" },
  { href: "#como-ajudo", label: "Como te ajudo" },
  { href: "#atuacao", label: "Área de atuação" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export const hero = {
  eyebrow: "Psicologia clínica & Neuropsicologia",
  title: "Um espaço para pensar,\nsentir e recomeçar.",
  lead:
    "Atendimento humano e cuidadoso para adolescentes e adultos — presencial e online. Um processo construído no seu tempo, com escuta, técnica e verdade.",
  tags: ["Atendimento online", "Presencial", "Adolescentes e adultos"],
  ctaPrimary: "Agendar uma conversa",
  ctaSecondary: "Conhecer o trabalho",
};

export const comoAjudo = {
  eyebrow: "Como posso te ajudar",
  title: "Temas que costumo acompanhar em consultório",
  lead:
    "Cada história é única. Estes são alguns dos pontos de partida mais comuns que chegam até mim.",
  items: [
    { icon: "wind", title: "Ansiedade", text: "Compreender gatilhos, corpo e pensamento em um ritmo mais respirável." },
    { icon: "heart", title: "Autoestima", text: "Reconstruir a relação com quem você é para além do que produz." },
    { icon: "users", title: "Relacionamentos", text: "Vínculos afetivos, familiares e profissionais que pedem revisão." },
    { icon: "leaf", title: "Luto e perdas", text: "Espaço para atravessar despedidas — de pessoas, planos ou identidades." },
    { icon: "flame", title: "Estresse e burnout", text: "Recuperar limites, energia e sentido no trabalho e na rotina." },
    { icon: "compass", title: "Questões existenciais", text: "Momentos de virada, escolhas, propósito e busca de sentido." },
  ],
};

export const atuacao = {
  eyebrow: "Área de atuação",
  title: "Três frentes de trabalho,\numa mesma escuta.",
  lead:
    "Atendimento clínico, avaliação neuropsicológica e consultoria — sempre com base em evidência e respeito pelo tempo de cada pessoa.",
  services: [
    {
      icon: "message-circle",
      title: "Terapia",
      text:
        "Atendimento clínico individual, presencial ou online, em processo contínuo. Um espaço de escuta ética para adolescentes e adultos.",
      cta: "Saber mais",
    },
    {
      icon: "brain",
      title: "Avaliação Psicológica",
      text:
        "Avaliações neuropsicológicas e psicodiagnósticos com devolutiva cuidadosa e laudo detalhado, para escola, trabalho ou tratamento.",
      cta: "Como funciona",
    },
    {
      icon: "briefcase",
      title: "Consultoria",
      text:
        "Apoio a empresas, profissionais da saúde e times que buscam repensar cultura, saúde mental e desenvolvimento humano.",
      cta: "Solicitar proposta",
    },
  ],
};

export const sobre = {
  eyebrow: "Sobre mim",
  title: "Nadya Tanan",
  paragraphs: [
    "Sou psicóloga clínica e neuropsicóloga. Acredito em uma clínica atenta, sem pressa e feita a duas vozes — onde o consultório vira um lugar seguro para revisitar histórias, nomear o que dói e imaginar novos caminhos.",
    "Meu trabalho reúne rigor técnico e uma escuta afetiva. Atendo adolescentes e adultos em processos de terapia e avaliação, sempre respeitando o tempo de cada pessoa.",
  ],
  credentials: [
    { label: "Formação", value: "Graduação em Psicologia — [Universidade]" },
    { label: "Especialização", value: "Neuropsicologia clínica — [Instituição]" },
    { label: "Abordagem", value: "Psicoterapia integrativa de base fenomenológica" },
  ],
};

export const depoimentos = {
  eyebrow: "Depoimentos",
  title: "O que meus pacientes contam",
  items: [
    {
      name: "M. R.",
      age: "34 anos",
      stars: 5,
      text:
        "Encontrei um espaço em que consigo pensar em voz alta sem medo de ser julgada. A terapia com a Nadya mudou o modo como me relaciono comigo.",
    },
    {
      name: "L. A.",
      age: "27 anos",
      stars: 5,
      text:
        "A avaliação neuropsicológica foi conduzida com um cuidado que eu não esperava. Sai com respostas e com um plano concreto.",
    },
    {
      name: "J. P.",
      age: "41 anos",
      stars: 5,
      text:
        "Escuta rara. A Nadya combina técnica e sensibilidade de um jeito que faz muita diferença no processo.",
    },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  title: "Perguntas frequentes",
  items: [
    {
      q: "Como funciona a primeira consulta?",
      a: "O primeiro encontro é uma conversa de acolhimento: entendemos o que te trouxe, esclarecemos dúvidas e alinhamos como o processo pode acontecer.",
    },
    {
      q: "Qual a duração das sessões?",
      a: "As sessões de terapia têm em média 50 minutos. Avaliações neuropsicológicas variam conforme o protocolo, com encontros de cerca de 60–90 minutos.",
    },
    {
      q: "Você atende por plano de saúde?",
      a: "No momento, o atendimento é particular. Emito recibo para reembolso pelo seu plano, quando previsto em contrato.",
    },
    {
      q: "As sessões online funcionam?",
      a: "Sim. O atendimento online segue os mesmos princípios éticos e a mesma qualidade técnica do presencial, em plataforma segura.",
    },
    {
      q: "E se eu precisar remarcar ou cancelar?",
      a: "Remarcações podem ser feitas com até 24h de antecedência, sem custo. Após esse prazo, a sessão é cobrada integralmente.",
    },
    {
      q: "Quanto tempo dura o processo terapêutico?",
      a: "Depende dos seus objetivos e do seu ritmo. Alguns processos são curtos e focais, outros mais longos — sempre conversados juntos.",
    },
  ],
};

export const contato = {
  eyebrow: "Vamos conversar",
  title: "O primeiro passo\npode ser hoje.",
  lead:
    "Se algo aqui te tocou, me escreva. Respondo pessoalmente cada mensagem e podemos alinhar o melhor caminho para começar.",
};
