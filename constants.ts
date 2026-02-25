
import { MatchResult, NewsItem, Product, Sponsor } from './types';
import { Trophy, Users, MapPin, Shield } from 'lucide-react';

// Placeholder Logo URL (using a generic shield for demo purposes)
export const LOGO_URL = "https://res.cloudinary.com/dc7zy0p4q/image/upload/v1768903055/608195712_1464591145667195_3693066190005632417_n-removebg-preview_sz4jxd.png"; 
export const OPPONENT_LOGO_1 = "https://cdn-icons-png.flaticon.com/512/1273/1273736.png";
export const OPPONENT_LOGO_2 = "https://cdn-icons-png.flaticon.com/512/3135/3135768.png";
export const OPPONENT_LOGO_3 = "https://cdn-icons-png.flaticon.com/512/1828/1828884.png";

export const NAV_LINKS = [
  { name: 'PÁGINA INICIAL', href: '#' },
  { name: 'CLUBE', href: '#clube' },
  { name: 'EQUIPAS', href: '#equipas' },
  { name: 'CLASSIFICAÇÕES', href: '#classificacoes' },
  { name: 'SÓCIOS', href: '#socios' },
  { name: 'PATROCINADORES', href: '#patrocinadores' },
  { name: 'GALERIA', href: '#galeria' },
  { name: 'CONTACTOS', href: '#contactos' },
];

export const TEAM_LOGOS: Record<string, string> = {
  'Guarda FC': 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771244467/242110_imgbank_1733843844_vg7tsw.png',
  'Ginásio Figueirense (C.Rodrigo)': 'https://cdn-img.zerozero.pt/img/logos/equipas/5668_imgbank_1744801569.png',
  'SC Sabugal': 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1768920336/490251963_4004355053157291_3391975504175105859_n-removebg-preview_dc3zyf.png',
  'SC Celoricense': 'https://cdn-img.zerozero.pt/img/logos/equipas/11074_imgbank.png',
  'Fornos de Algodres': 'https://cdn-img.zerozero.pt/img/logos/equipas/3583_imgbank_1740563759.png',
  'Aguiar da Beira': 'https://cdn-img.zerozero.pt/img/logos/equipas/3546_imgbank.png',
  'Os Vilanovenses': 'https://cdn-img.zerozero.pt/img/logos/equipas/10485_imgbank.png',
  'Trancoso': 'https://cdn-img.zerozero.pt/img/logos/equipas/6839_imgbank.png',
  'AD São Romão': 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1768903055/608195712_1464591145667195_3693066190005632417_n-removebg-preview_sz4jxd.png',
  'Vila Cortez': 'https://cdn-img.zerozero.pt/img/logos/equipas/6845_imgbank_1744816765.png',
  'Sp. Mêda': 'https://cdn-img.zerozero.pt/img/logos/equipas/6841_imgbank.png',
  'Vilar Formoso': 'https://cdn-img.zerozero.pt/img/logos/equipas/6838_imgbank.png',
  'GD Foz Côa': 'https://cdn-img.zerozero.pt/img/logos/equipas/6846_imgbank.png',
  'VF Naves': 'https://cdn-img.zerozero.pt/img/logos/equipas/11083_imgbank.png',
  'CD Gouveia': 'https://cdn-img.zerozero.pt/img/logos/equipas/4344_imgbank.png',
  'NDS Guarda': 'https://cdn-img.zerozero.pt/img/logos/equipas/10044_imgbank.png',
  'Penaverdense': 'https://cdn-img.zerozero.pt/img/logos/equipas/11072_imgbank_1741687922.png',
  'Pinhelenses': 'https://cdn-img.zerozero.pt/img/logos/equipas/6843_imgbank.png',
  'ED Gouveia': 'https://cdn-img.zerozero.pt/img/logos/equipas/19007_imgbank.png',
  'ED Gouveia B': 'https://cdn-img.zerozero.pt/img/logos/equipas/19007_imgbank.png',
  'Seia FC': 'https://cdn-img.zerozero.pt/img/logos/equipas/16479_imgbank.png',
  'Seia FC B': 'https://cdn-img.zerozero.pt/img/logos/equipas/16479_imgbank.png',
  // Adiciona as restantes equipas da liga
};

export const LATEST_RESULTS: MatchResult[] = [
  {
    id: 1,
    category: 'SENIORES',
    homeTeam: 'AD São Romão',
    awayTeam: 'G. Figueirense',
    homeScore: 1,
    awayScore: 1,
    status: 'Finalizado',
    location: 'Casa',
    logoHome: LOGO_URL,
    logoAway: OPPONENT_LOGO_1
  },
  {
    id: 2,
    category: 'SUB 18 (JUNIORES)',
    homeTeam: 'Vilanovenses',
    awayTeam: 'AD São Romão',
    homeScore: 1,
    awayScore: 0,
    status: 'Finalizado',
    location: 'Fora',
    logoHome: OPPONENT_LOGO_2,
    logoAway: LOGO_URL
  },
  {
    id: 3,
    category: 'SUB 16 (JUVENIS)',
    homeTeam: 'AD São Romão',
    awayTeam: 'SC Sabugal',
    homeScore: 3,
    awayScore: 1,
    status: 'Finalizado',
    location: 'Casa',
    logoHome: LOGO_URL,
    logoAway: OPPONENT_LOGO_1
  },
  {
    id: 4,
    category: 'SUB 14 (INICIADOS)',
    homeTeam: 'Trancoso',
    awayTeam: 'AD São Romão',
    homeScore: 0,
    awayScore: 4,
    status: 'Finalizado',
    location: 'Fora',
    logoHome: OPPONENT_LOGO_2,
    logoAway: LOGO_URL
  },
  {
    id: 5,
    category: 'SUB 12 (INFANTIS)',
    homeTeam: 'AD São Romão',
    awayTeam: 'NDS Guarda',
    homeScore: 2,
    awayScore: 2,
    status: 'Finalizado',
    location: 'Casa',
    logoHome: LOGO_URL,
    logoAway: OPPONENT_LOGO_3
  },
  {
    id: 6,
    category: 'SUB 10 (BENJAMINS)',
    homeTeam: 'Seia FC',
    awayTeam: 'AD São Romão',
    homeScore: 1,
    awayScore: 5,
    status: 'Finalizado',
    location: 'Fora',
    logoHome: OPPONENT_LOGO_1,
    logoAway: LOGO_URL
  },
  {
    id: 7,
    category: 'SUB 8 (TRAQUINAS)',
    homeTeam: 'AD São Romão',
    awayTeam: 'Gouveia',
    homeScore: 8,
    awayScore: 8,
    status: 'Finalizado',
    location: 'Casa',
    logoHome: LOGO_URL,
    logoAway: OPPONENT_LOGO_2
  },
];

export const UPCOMING_MATCHES: MatchResult[] = [
  {
    id: 101,
    category: 'SENIORES',
    homeTeam: 'SC Sabugal',
    awayTeam: 'AD São Romão',
    homeScore: 0,
    awayScore: 0,
    status: 'Em Breve',
    location: 'Fora',
    date: 'DOM, 25 JAN',
    time: '15:15',
    competition: 'AF GUARDA 1ª DIVISÃO',
    logoHome: OPPONENT_LOGO_1,
    logoAway: LOGO_URL
  },
  {
    id: 102,
    category: 'SUB 18 (JUNIORES)',
    homeTeam: 'AD São Romão',
    awayTeam: 'Guarda FC',
    homeScore: 0,
    awayScore: 0,
    status: 'Em Breve',
    location: 'Casa',
    date: 'SÁB, 24 JAN',
    time: '17:00',
    competition: 'CAMPEONATO DISTRITAL',
    logoHome: LOGO_URL,
    logoAway: OPPONENT_LOGO_3
  },
  {
    id: 103,
    category: 'SUB 14 (INICIADOS)',
    homeTeam: 'AD São Romão',
    awayTeam: 'Vilar Formoso',
    homeScore: 0,
    awayScore: 0,
    status: 'Em Breve',
    location: 'Casa',
    date: 'SÁB, 24 JAN',
    time: '10:30',
    competition: 'CAMPEONATO DISTRITAL',
    logoHome: LOGO_URL,
    logoAway: OPPONENT_LOGO_2
  },
  {
    id: 104,
    category: 'SUB 10 (BENJAMINS)',
    homeTeam: 'Nogueirense',
    awayTeam: 'AD São Romão',
    homeScore: 0,
    awayScore: 0,
    status: 'Em Breve',
    location: 'Fora',
    date: 'DOM, 25 JAN',
    time: '11:00',
    competition: 'LIGA DE PRATA',
    logoHome: OPPONENT_LOGO_1,
    logoAway: LOGO_URL
  },
   {
    id: 105,
    category: 'SENIORES',
    homeTeam: 'AD São Romão',
    awayTeam: 'Trancoso',
    homeScore: 0,
    awayScore: 0,
    status: 'Em Breve',
    location: 'Casa',
    date: 'DOM, 01 FEV',
    time: '15:00',
    competition: 'AF GUARDA 1ª DIVISÃO',
    logoHome: LOGO_URL,
    logoAway: OPPONENT_LOGO_2
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    category: 'CLUBE',
    title: 'Associação Desportiva de São Romão conquista Galardão de Entidade Formadora 3 estrelas, atribuído pela FPF',
    date: 'Maio, 2025',
    excerpt: 'A Associação Desportiva de São Romão (ADSR) foi reconhecida como Entidade Formadora 3 Estrelas pela Federação Portuguesa de Futebol (FPF)',
    imageUrl: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1770809370/ADSR1_d4mqbk.jpg'
  },
  {
    id: 2,
    category: 'EVENTO',
    title: 'ADSR CUP 2026',
    date: '18 Jan, 2026',
    excerpt: 'A ADSR CUP 2026, na sua IV edição, promete voltar a reunir jovens talentos, clubes e famílias num ambiente de competição saudável, paixão pelo futebol e fair-play. O torneio decorrerá nos dias 13 e 14 de junho e 20 e 21 de junho de 2026, no Estádio N. S. Conceição, em São Romão.',
    imageUrl: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1770812384/Screenshot_2026-02-11_at_12.16.04_ju2kdz.png'
  },
  {
    id: 3,
    category: 'RENOVAÇÃO',
    title: 'Grandes Mudanças na ADSR',
    date: '12 Jan, 2026',
    excerpt: 'As grandes mudanças só são possíveis c/ a colaboração dos nossos associados quando estes põem à disposição materiais, tempo e conhecimento para engrandecer a Associação Desportiva de São Romão. A estes associados um agradecimento especial pelo empenho e dedicação na conclusão de mais este projeto de melhoria estrutural da nossa ADSR. Um grande Bem Hajam! 💙💛💪 ',
    imageUrl: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1770812969/615374787_1470235401769436_1958276545963551250_n_adlrv2.jpg'
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'CACHECOL OFICIAL 25/26',
    category: 'OFICIAL',
    price: "Sob Consulta",
    imageUrl: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1769598764/Gemini_Generated_Image_h7sjf4h7sjf4h7sj_noq4ai.png',
    isNew: true,
    sizes: ['ÚNICO']
  },
  {
    id: 2,
    name: 'SWEATSHIRT ADSR 25/26',
    category: 'OFICIAL',
    price: "Sob Consulta",
    imageUrl: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1769598526/Gemini_Generated_Image_iny70diny70diny7_zmmjbp.png',
    isNew: true,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3,
    name: 'SWEATSHIRT ADSR C/SIMBOLO',
    category: 'OFICIAL',
    price: "Sob Consulta",
    imageUrl: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1769598430/Gemini_Generated_Image_tdhhjctdhhjctdhh_ty53zm.png',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4,
    name: 'SWEATSHIRT ADSR 25/26 - PRETA',
    category: 'OFICIAL',
    price: "Sob Consulta",
    imageUrl: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1769598413/Gemini_Generated_Image_pvgisppvgisppvgi_se7iru.png',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 5,
    name: 'T-SHIRT ADSR 25/26 - Azul',
    category: 'CASUAL',
    price: "Sob Consulta",
    imageUrl: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1769599145/Gemini_Generated_Image_egb8hlegb8hlegb8_jqfchh.png',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 6,
    name: 'T-SHIRT ADSR 25/26 - Rosa',
    category: 'CASUAL',
    price: "Sob Consulta",
    imageUrl: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1769599091/Gemini_Generated_Image_6b9vrq6b9vrq6b9v_vmnp90.png',
    sizes: ['M', 'L', 'XL']
  },
  {
    id: 7,
    name: 'BONÉ ADSR AZUL',
    category: 'ACESSÓRIOS',
    price: "Sob Consulta",
    imageUrl: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771869362/Bone_Azul_lxg23b.png',
    isNew: true,
    sizes: ['ÚNICO']
  },
  {
    id: 8,
    name: 'BONÉ ADSR PRETO',
    category: 'ACESSÓRIOS',
    price: "Sob Consulta",
    imageUrl: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771869361/Bone_Preto_ur7bdo.png',
    isNew: true,
    sizes: ['ÚNICO']
  },
  {
    id: 9,
    name: 'BONÉ ADSR ROSA',
    category: 'ACESSÓRIOS',
    price: "Sob Consulta",
    imageUrl: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771869361/Bone_Rosa_vuojg6.png',
    isNew: true,
    sizes: ['ÚNICO']
  },
  {
    id: 10,
    name: 'CHAPÉU ADSR AZUL',
    category: 'ACESSÓRIOS',
    price: "Sob Consulta",
    imageUrl: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771869361/Chapeu_Azul_shho9x.png',
    isNew: true,
    sizes: ['ÚNICO']
  },
  {
    id: 11,
    name: 'CHAPÉU ADSR PRETO',
    category: 'ACESSÓRIOS',
    price: "Sob Consulta",
    imageUrl: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771869360/Chapeu_preto_xj3rox.png',
    isNew: true,
    sizes: ['ÚNICO']
  },
  {
    id: 12,
    name: 'EQUIPAMENTO OFICIAL ADSR 25/26 - MAGUIR',
    category: 'OFICIAL',
    price: "Sob Consulta",
    imageUrl: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771869362/equipamento_maguir_hstagy.png',
    isNew: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 13,
    name: 'SWEATSHIRT OFICIAL ADSR 25/26 - AZUL',
    category: 'OFICIAL',
    price: "Sob Consulta",
    imageUrl: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771869361/Sao_Romao_Sweet_bshag6.png',
    isNew: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
];

export const SPONSORS: Sponsor[] = [
  { id: 1, 
    name: 'Element Group', 
    category: 'Soluções Digitais' , 
    imageUrl:'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771863731/Element_Group_Solutions_k10h3d.png'   
   },
];

export const HISTORY_STATS = [
  { id: 1, value: '1962', label: 'ANO DE FUNDAÇÃO', icon: Trophy },
  { id: 2, value: '+180', label: 'ATLETAS ACTIVOS', icon: Users },
  { id: 3, value: '01', label: 'PAIXÃO ÚNICA', icon: Shield },
  { id: 4, value: '64', label: 'ANOS DE HISTÓRIA', icon: MapPin }, // Using MapPin as a placeholder for medal
];

export const TIMELINE_EVENTS = [
  { year: '1962', title: 'A Fundação', description: 'A 10 de Outubro nasce a Associação Desportiva de São Romão.' },
  { year: '1975', title: 'Primeiro Título', description: 'Conquista do Campeonato Distrital da 2ª Divisão.' },
  { year: '1988', title: 'Inauguração do Campo', description: 'Abertura oficial do Campo de Jogos da Mata.' },
  { year: '1995', title: 'Campeões Distritais', description: 'Vitória histórica no campeonato principal da AF Guarda.' },
  { year: '2008', title: 'Certificação', description: 'Início do processo de certificação da formação.' },
  { year: '2024', title: 'Modernização', description: 'Renovação das infraestruturas e relvado sintético.' },
];

export const MANAGEMENT_TEAM = [
  { name: 'Carlos Santos', role: 'Presidente', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Maria Fernandes', role: 'Vice-Presidente Financeira', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'João Silva', role: 'Vice-Presidente Desportivo', image: 'https://randomuser.me/api/portraits/men/85.jpg' },
  { name: 'Pedro Marques', role: 'Secretário Geral', image: 'https://randomuser.me/api/portraits/men/12.jpg' },
];

export const SQUAD_DATA = {
  SENIORES: [
    {
      title: 'Equipa Técnica',
      members: [
        { id: 1, name: 'Rui Fernandes', role: 'Treinador', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925039/WhatsApp_Image_2026-02-24_at_09.08.23_1_w2rfpu.jpg' },
        { id: 2, name: 'Tiago Jesus', role: 'Treinador Adjunto', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925039/WhatsApp_Image_2026-02-24_at_09.08.23_pp9nho.jpg' },
        { id: 3, name: 'Nelson Rebelo', role: 'Analista & Tr. GR', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925039/WhatsApp_Image_2026-02-24_at_09.08.22_xclamn.jpg' }, // Placeholder logic
      ]
    },
    {
      title: 'Guarda-Redes',
      members: [
        { id: 10, name: 'Rafael Santos', role: 'Guarda-Redes', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1769430560/527404676_1326346892824955_5776449259502785746_n_dr0gfc.jpg' },
        { id: 11, name: 'Duarte Cabral', role: 'Guarda-Redes', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925038/WhatsApp_Image_2026-02-24_at_09.08.25_3_rccctu.jpg' },
      ]
    },
    {
      title: 'Defesas',
      members: [
        { id: 20, name: 'FRIIKIQUE', role: 'Defesa Central', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925038/WhatsApp_Image_2026-02-24_at_09.08.26_1_lx1f33.jpg' },
        { id: 21, name: 'AFONSO CLARA', role: 'Defesa Lateral', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1769431185/547152625_1365481208911523_3218421186446011996_n_p9nnmu.jpg ' },
        { id: 22, name: 'JOÃO FREIRE', role: 'Defesa Central', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925038/WhatsApp_Image_2026-02-24_at_09.08.27_4_kjtmn5.jpg' },
        { id: 23, name: 'MIGUEL BRITO', role: 'Defesa Lateral', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925039/WhatsApp_Image_2026-02-24_at_09.08.25_1_fj6kys.jpg' },
        { id: 24, name: 'ALBANO FERRÃO', role: 'Defesa Lateral', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925037/WhatsApp_Image_2026-02-24_at_09.08.26_5_sqplew.jpg' },
        { id: 25, name: 'JOÃO COSTA', role: 'Defesa Lateral', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925036/WhatsApp_Image_2026-02-24_at_09.08.28_3_rwdjlx.jpg' },
        { id: 27, name: 'BERNARDO', role: 'Defesa Central', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925036/WhatsApp_Image_2026-02-24_at_09.08.28_2_sgp1f0.jpg' },
      ]
    },
     {
      title: 'Médios',
      members: [
        { id: 28, name: 'LUIS NUNES', role: '', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925038/WhatsApp_Image_2026-02-24_at_09.08.25_5_ji502e.jpg' },
        { id: 29, name: 'GABRIEL CRUZ', role: '', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925038/WhatsApp_Image_2026-02-24_at_09.08.26_ed7o1z.jpg' },
        { id: 30, name: 'JOÃO MARQUES', role: '', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925038/WhatsApp_Image_2026-02-24_at_09.08.25_2_qplzk6.jpg' },
        { id: 31, name: 'MARIO NUNES', role: '', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925038/WhatsApp_Image_2026-02-24_at_09.08.26_2_gvthhy.jpg' },
        { id: 32, name: 'TIAGO LEMOS', role: '', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925038/WhatsApp_Image_2026-02-24_at_09.08.26_3_rtbyiq.jpg' },
        { id: 33, name: 'RUI COSME', role: '', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925037/WhatsApp_Image_2026-02-24_at_09.08.27_pyimun.jpg' },
        { id: 34, name: 'LUIS MARTINS', role: '', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925038/WhatsApp_Image_2026-02-24_at_09.08.26_4_whuekf.jpg' },
        { id: 35, name: 'PAULO JORGE', role: '', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925038/WhatsApp_Image_2026-02-24_at_09.08.27_2_q2aai7.jpg' },
        { id: 36, name: 'KEVIN', role: '', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925037/WhatsApp_Image_2026-02-24_at_09.08.27_5_lgpkda.jpg' },
        { id: 37, name: 'PEDRO SOUSA', role: '', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925036/WhatsApp_Image_2026-02-24_at_09.08.27_1_xiwjgm.jpg' },
        { id: 38, name: 'ALIDIO MENDES', role: '', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925036/WhatsApp_Image_2026-02-24_at_09.08.28_tvl58c.jpg' },

      ]
    },
     {
      title: 'Avançados',
      members: [
        { id: 40, name: 'ADERITO PERES', role: '', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925039/WhatsApp_Image_2026-02-24_at_09.08.25_oluuka.jpg' },
        { id: 41, name: 'SANDRO GOMES', role: '', image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925038/WhatsApp_Image_2026-02-24_at_09.08.27_3_qtqz53.jpg' },
      ]
    }
  ],
  'JUNIORES (U19)': [
    {
      title: 'Plantel Completo',
      members: [
        { 
          id: 101, 
          name: 'João Coimbra', 
          role: 'Treinador', 
          image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771859342/WhatsApp_Image_2026-02-23_at_14.45.34_d9ejf5.jpg',
          isTeamPhoto: true
        }
      ]
    }
  ],
  'JUVENIS (U16)': [
    {
      title: 'Plantel Completo',
      members: [
        { 
          id: 201, 
          name: 'Gonçalo Tavares', 
          role: 'Treinador', 
          image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771859344/WhatsApp_Image_2026-02-23_at_14.38.47_poqwqf.jpg',
          isTeamPhoto: true
        }
      ]
    }
  ],
    'INICIADOS (U14)': [
    {
      title: 'Plantel Completo',
      members: [
        { 
          id: 202, 
          name: 'Prof. Davide Oliveira', 
          role: 'Treinador', 
          image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771859319/2da4292a-348b-4892-acc4-0f50cc163cab_n11bgz.jpg',
          isTeamPhoto: true
        }
      ]
    }
  ],
    'INFANTIS (U12)': [
    {
      title: 'Plantel Completo',
      members: [
        { 
          id: 203, 
          name: 'Eduardo Marques', 
          role: 'Treinador', 
          image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771859346/WhatsApp_Image_2026-02-23_at_14.34.59_wte68x.jpg',
          isTeamPhoto: true
        }
      ]
    }
  ],
 'BENJAMINS (U10)': [
    {
      title: 'Plantel Completo',
      members: [
        { 
          id: 203, 
          name: 'Válter Santos e Cláudio Silva', 
          role: 'Treinadores', 
          image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771928436/4444_vsx8gs.png',
          isTeamPhoto: true
        }
      ]
    }
  ],
 'TRAQUINAS (U8)': [
    {
      title: 'Plantel Completo',
      members: [
        { 
          id: 203, 
          name: 'FRIKIQUE', 
          role: 'Treinador', 
          image: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771925036/WhatsApp_Image_2026-02-24_at_09.09.14_pjwxzx.jpg',
          isTeamPhoto: true
        }
      ]
    }
  ],};

// GALLERY ALBUMS - Adicione aqui os seus álbuns de fotos
export const GALLERY_ALBUMS = [
  {
    id: 1,
    title: 'SENIORES: ADSR VS AGUIAR DA BEIRA',
    subtitle: 'Campeonato Distrital 2025/26',
    date: '15 Janeiro 2026',
    coverImage: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934902/641117877_1507911741335135_7980556099423733069_n_1_oz2avl.jpg',
    photos: [
      // Adicione apenas o URL da foto, sem necessidade de thumbnail
      { id: 1, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934902/641117877_1507911741335135_7980556099423733069_n_1_oz2avl.jpg' },
      { id: 2, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934897/641500395_1507911744668468_6519957087533268526_n_lz88s3.jpg' },
      { id: 3, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934896/640419389_1507911738001802_1347952288954761109_n_ixfs3n.jpg' },
      { id: 4, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934897/641047464_1507911794668463_2244622369014050009_n_b37ojb.jpg' },
      { id: 5, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934903/639075733_1507911834668459_243826725445407459_n_lnbux5.jpg' },
      { id: 6, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934896/639510325_1507911838001792_1693074675026089650_n_pavidg.jpg' },
      { id: 7, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934896/640879958_1507913178001658_3812440237684708445_n_jdlhsb.jpg' },
      { id: 8, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934896/639668645_1507914188001557_5158862520169253906_n_dhcafk.jpg' },
      { id: 9, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934896/640985465_1507913104668332_4201247680329738659_n_qj6ltn.jpg' },
      { id: 10, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934897/641500454_1507912831335026_7486725437865871891_n_xt0r9c.jpg' },
      { id: 11, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934897/641140717_1507913124668330_7722651105341360924_n_uiuor6.jpg' },
      { id: 12, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934897/641253076_1507912861335023_1193387451072469307_n_wtfhf2.jpg' },
      { id: 13, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934897/641621772_1507912844668358_3922157254721464526_n_veiziu.jpg' },
      { id: 14, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934901/641714936_1507913108001665_3139483748506834782_n_eenqha.jpg' },
      { id: 15, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934901/642291007_1507912858001690_3107960473769109234_n_bdlejc.jpg' },
      { id: 16, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934902/639139128_1507914178001558_5468609466678598465_n_yeqaua.jpg' },
      { id: 17, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934902/639406154_1507912991335010_7368140206678179691_n_ppmcgs.jpg' },
      { id: 18, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934904/638315259_1507912801335029_1518941218275146684_n_jvwi5e.jpg' },
      { id: 19, url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1771934905/637843324_1507913018001674_1075230855611365862_n_c5viob.jpg' },
      // Adicione mais fotos aqui...
    ]
  },
];