// Central content file — all texts as placeholders, consumed by components via .map()

export const site = {
  name: "Nadya Tanan",
  role: "Psicóloga e Neuropsicóloga",
  crp: "CRP 06/222362",
  whatsappUrl: "https://wa.me/5511937626205?text=Ol%C3%A1%21%20Estou%20vindo%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20conversa.",
  whatsappLabel: "Conversar no WhatsApp",
  email: "psiconadyatanan@gmail.com",
  phone: "(11) 93762-6205",
  hours: "Segunda a sexta · 09h às 19h",
  instagram: "https://www.instagram.com/psico.nadyatanan",
  linkedin: "https://www.linkedin.com/in/nadyatanan/",
};

export const nav = [
  { href: "#hero", label: "Início" },
  { href: "#como-ajudo", label: "Como te ajudo" },
  { href: "#atuacao", label: "Área de atuação" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#depoimentos", label: "Feedbacks" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export const hero = {
  eyebrow: "Psicóloga e Neuropsicóloga",
  title:
    "Entre aquilo que você vive e aquilo que sua mente constrói,\nexiste uma história que merece ser compreendida.",
  lead:
    "Meu trabalho integra a Psicanálise e a Neuropsicologia para ajudar você a compreender o que sente, identificar padrões e desenvolver recursos para viver com mais equilíbrio e autenticidade.",
  tags: ["Atendimento online", "Presencial", "Adolescentes e adultos"],
  ctaPrimary: "Agendar uma conversa",
  ctaSecondary: "Conhecer o trabalho",
};

export const comoAjudo = {
  eyebrow: "Como posso te ajudar",
  title: "Principais temas que acolho em consultório",
  lead:
    "Por trás de cada sintoma existe uma história que merece ser escutada. A ansiedade, os conflitos nos relacionamentos, a baixa autoestima e outros sofrimentos emocionais são caminhos possíveis para compreender aquilo que pede elaboração e transformação.",
  items: [
    {
      icon: "wind",
      title: "Ansiedade",
      text: "Aprender a compreender os gatilhos, reduzir o excesso de preocupação e desenvolver estratégias para viver com mais equilíbrio e segurança.",
    },
    {
      icon: "heart",
      title: "Autoestima e autoconhecimento",
      text: "Fortalecer a relação consigo mesmo, construir uma identidade mais sólida e desenvolver uma autoestima menos dependente da validação externa.",
    },
    {
      icon: "users",
      title: "Relacionamentos",
      text: "Dificuldades em relacionamentos amorosos, familiares e profissionais, padrões repetitivos, comunicação, limites e dependência emocional.",
    },
    {
      icon: "leaf",
      title: "Luto e mudanças",
      text: "Espaço para elaborar perdas, separações, términos, mudanças de vida, transições profissionais e outras experiências que exigem adaptação.",
    },
    {
      icon: "flame",
      title: "Estresse, sobrecarga e burnout",
      text: "Quando o cansaço deixa de ser apenas físico e começa a afetar emoções, produtividade, relacionamentos e qualidade de vida.",
    },
    {
      icon: "compass",
      title: "Desenvolvimento emocional",
      text: "Acompanhamento para quem deseja compreender melhor suas emoções, enfrentar conflitos internos, aumentar a inteligência emocional e viver com mais autenticidade.",
    },
  ],
};

export const atuacao = {
  eyebrow: "Área de atuação",
  title: "Uma atuação integrada para compreender\na totalidade da sua jornada",
  lead: "",
  services: [
    {
      icon: "message-circle",
      title: "Psicoterapia",
      text:
        "Para quem busca compreender a origem dos próprios conflitos, desenvolver recursos emocionais e construir mudanças duradouras.",
      detail:
        "Um processo individual que integra Psicanálise e Neuropsicologia para promover autoconhecimento, regulação emocional e relações mais saudáveis, respeitando a singularidade de cada história.",
      cta: "Conheça o processo",
      link: "https://wa.me/5511937626205?text=Ol%C3%A1%21%20Estou%20vindo%20pelo%20site%20e%20me%20interessei%20na%20Psicoterapia.",
    },
    {
      icon: "brain",
      title: "Avaliação Neuropsicológica",
      text:
        "Precisão diagnóstica para decisões clínicas, acadêmicas e profissionais.",
      detail:
        "Avaliações completas com instrumentos científicos e análise clínica aprofundada para investigação de funções cognitivas, transtornos do neurodesenvolvimento, alterações emocionais e funcionamento intelectual. Laudo técnico, devolutiva detalhada e orientações personalizadas.",
      cta: "Entenda como funciona",
      link: "https://wa.me/5511937626205?text=Ol%C3%A1%21%20Estou%20vindo%20pelo%20site%20e%20me%20interessei%20na%20Avalia%C3%A7%C3%A3o%20Neuropsicol%C3%B3gica.",
    },
    {
      icon: "briefcase",
      title: "Consultoria em Saúde Mental",
      text:
        "Estratégias para fortalecer pessoas, lideranças e organizações.",
      detail:
        "Projetos personalizados para empresas que desejam desenvolver ambientes psicologicamente seguros, prevenir adoecimento emocional e potencializar desempenho por meio da saúde mental. Treinamentos, palestras e consultorias baseados em evidências.",
      cta: "Solicitar proposta",
      link: "https://wa.me/5511937626205?text=Ol%C3%A1%21%20Estou%20vindo%20pelo%20site%20e%20me%20interessei%20na%20Consultoria%20em%20Sa%C3%BAde%20Mental.",
    },
  ],
};

export const sobre = {
  eyebrow: "Sobre mim",
  title: "Nadya Tanan",
  paragraphs: [
    "Antes de tudo, desejo boas vindas.",
    "Sou Psicóloga e pós-graduanda em Neuropsicologia, com atuação clínica fundamentada na psicanálise e integrada aos conhecimentos da neurociência sobre o funcionamento humano.",
    "Acredito que cada pessoa possui uma história única e que nenhum sofrimento pode ser compreendido apenas pelos sintomas que apresenta. Por isso, meu compromisso é oferecer uma clínica ética, acolhedora e cientificamente fundamentada, proporcionando um espaço seguro para que você encontre não apenas respostas, mas desenvolva recursos internos para viver com mais consciência, autonomia, equilíbrio emocional e qualidade de vida.",
  ],
  
};

export const depoimentos = {
  eyebrow: "Feedbacks",
  title: "O que meus pacientes contam",
  items: [
    {
      stars: 5,
      text:
        "Excelente profissional! Muito humana, atenciosa e acolhedora. Sempre me sinto ouvida e respeitada durante as sessões, o que faz toda a diferença. Sou muito grata por todo o cuidado e todas as trocas.",
    },
    {
      stars: 5,
      text:
        "A Nadya pra mim é uma das profissionais mais especial que me atendeu até hoje. Paciente, generosa e sem dúvida extremamente profissional.",
    },
    {
      stars: 5,
      text:
        "Nadya, é uma psicóloga excelente, calma, acolhedora, uma escuta ativa, traz posicionamento excelentes quando necessário e estou tendo uma evolução incrível. A cada sessão que saio da terapia tenho construção importante no meu processo terapêutico!",
    },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  title: "Perguntas frequentes",
  items: [
    {
      q: "Como saber se preciso de terapia?",
      a: "Se você percebe que ansiedade, estresse, insegurança, dificuldades nos relacionamentos ou sofrimento emocional têm impactado sua qualidade de vida, a psicoterapia pode ajudar. Não é necessário esperar que o problema se torne insustentável para buscar cuidado.",
    },
    {
      q: "Como funciona a primeira sessão?",
      a: "A primeira sessão é um espaço de acolhimento e compreensão da sua história, das suas necessidades e dos objetivos que deseja alcançar. Também conversamos sobre como funciona o processo terapêutico e esclarecemos todas as dúvidas.",
    },
    {
      q: "Quanto tempo dura cada sessão?",
      a: "As sessões têm duração aproximada de 50 minutos e acontecem semanalmente.",
    },
    {
      q: "O atendimento é online ou presencial?",
      a: "Os atendimentos podem ser realizados de forma online ou presencial, conforme sua preferência e disponibilidade.",
    },
    {
      q: "Qual a diferença entre psicoterapia e conversar com alguém?",
      a: "A psicoterapia é um processo conduzido por um profissional qualificado, baseado em conhecimento científico e técnicas clínicas que ajudam a compreender padrões emocionais, pensamentos e comportamentos, promovendo mudanças consistentes.",
    },
    {
      q: "Como funciona a abordagem da psicoterapia?",
      a: "Meu trabalho integra a Psicanálise e conhecimentos da Neuropsicologia para compreender não apenas os sintomas, mas também a história, as emoções e os processos cognitivos envolvidos em cada experiência.",
    },
    {
      q: "Quanto tempo dura um processo terapêutico?",
      a: "Não existe um tempo pré-determinado. A duração depende dos objetivos, da complexidade das questões trabalhadas e do ritmo de cada pessoa.",
    },
    {
      q: "Tudo o que eu disser ficará em sigilo?",
      a: "Sim. O atendimento psicológico é protegido pelo sigilo profissional previsto no Código de Ética da Psicologia.",
    },
    {
      q: "Com que frequência acontecem as sessões?",
      a: "Em geral, os encontros são semanais, pois essa frequência favorece a continuidade do processo terapêutico.",
    },
    {
      q: "A terapia realmente funciona?",
      a: "A psicoterapia possui ampla evidência científica para o tratamento de diferentes demandas emocionais, além de favorecer autoconhecimento, desenvolvimento emocional e melhora na qualidade de vida.",
    },
  ],
};

export const contato = {
  eyebrow: "Vamos conversar",
  title: "O primeiro passo\npode ser hoje.",
  lead:
    "Se algo aqui te tocou, me escreva. Respondo pessoalmente cada mensagem e podemos alinhar o melhor caminho para começar.",
};
