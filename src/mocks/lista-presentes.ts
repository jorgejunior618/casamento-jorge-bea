const listaPresentes = [
  {
    id: "Gelagua_de_mesa",
    item: "Gelagua de mesa",
    imagem:
      "https://m.media-amazon.com/images/I/417cAXNnVQL._AC_SY300_SX300_QL70_ML2_.jpg",
    url: "https://a.co/d/4AA8JOA",
  },
  {
    id: "Mesa_para_gelagua",
    item: "Mesa para gelagua",
    imagem: "https://m.media-amazon.com/images/I/41U9BYqNuGL._AC_SX679_.jpg",
    url: "https://www.amazon.com.br/dp/B08FXNZ6WV?ref_=cm_sw_r_cp_ud_dp_XHP88F0B75JHGQQ63J7W",
  },
  {
    id: "Multiprocessador_de_alimentos",
    item: "Multiprocessador de alimentos",
    imagem: "https://m.media-amazon.com/images/I/61gn+nJP9PL._AC_SX679_.jpg",
    url: "https://a.co/d/4l29bgR",
  },
  {
    id: "Microondas_20L",
    item: "Microondas 20L",
    imagem:
      "https://m.media-amazon.com/images/I/41kqTIgvPML._AC_SY300_SX300_QL70_ML2_.jpg",
    url: "https://a.co/d/0T2begY",
  },
  {
    id: "Cafeteira_elétrica",
    item: "Cafeteira elétrica",
    imagem:
      "https://m.media-amazon.com/images/I/41HPi4fiyzL._AC_SY300_SX300_QL70_ML2_.jpg",
    url: "https://a.co/d/bm4MNTe",
  },
  {
    id: "Air_frier",
    item: "Air frier",
    imagem:
      "https://m.media-amazon.com/images/I/81DHdkzgECL._AC_SY300_SX300_QL70_ML2_.jpg",
    url: "https://a.co/d/1qFabcT",
  },
  {
    id: "Batedeira",
    item: "Batedeira",
    imagem:
      "https://m.media-amazon.com/images/I/71Tv8iuW8+L._AC_SY300_SX300_QL70_ML2_.jpg",
    url: "https://a.co/d/ca4fU8e",
  },
  {
    id: "Fogao_4_bocas_Atlas",
    item: "Fogao 4 bocas Atlas",
    imagem:
      "https://m.magazineluiza.com.br/a-static/420x420/fogao-atlas-4-bocas-preto-atenas-glass-com-acendimento-automatico-bivolt-atlas-eletrodomesticos/atlaseletrodomesticos3/300001171/298942e33277b619bddee1eb0624726b.jpeg",
    url: "https://www.magazineluiza.com.br/fogao-atlas-4-bocas-preto-atenas-glass-com-acendimento-automatico-bivolt-atlas-eletrodomesticos/p/ebj5e7063h/ed/fg4b/",
  },
  {
    id: "Depurador_de_ar_de_cozinha",
    item: "Depurador de ar de cozinha",
    imagem: "https://m.media-amazon.com/images/I/51SAgReCb7L._AC_SX679_.jpg",
    url: "https://a.co/d/gS0VbQw",
  },
  {
    id: "Jogo_de_panelas_7_peças",
    item: "Jogo de panelas 7 peças",
    imagem:
      "https://lebiscuit.vtexassets.com/arquivos/ids/65298224-600-600/5177666_00000_01.jpg?v=638978623610100000?width=720&format=webp",
    url: "https://www.lebiscuit.com.br/cj-7pcs-aa-linz-28299-006-tramontina-pt-5177666/p",
  },
  {
    id: "Panela_de_Pressao",
    item: "Panela de Pressão",
    imagem:
      "https://lebiscuit.vtexassets.com/arquivos/ids/60443568-600-600/5098778_00000_01.jpg?v=638926864643300000?width=720&format=webp",
    url: "https://www.lebiscuit.com.br/panela-pressao-multiflon-4-5l-67145-5098778/p",
  },
  {
    id: "Aparelho_de_jantar_louças_16_peças",
    item: "Aparelho de jantar (louças) 16 peças",
    imagem:
      "https://lebiscuit.vtexassets.com/arquivos/ids/62896372-600-600/5133691_00000_01.jpg?v=638960621459470000?width=720&format=webp",
    url: "https://www.lebiscuit.com.br/ap-jantar-c-16-petala-430ml-duralex-5133691/p",
  },
  {
    id: "Jogo_de_Copos",
    item: "Jogo de Copos",
    imagem:
      "https://lebiscuit.vtexassets.com/arquivos/ids/56066902-600-600/5149819_00000_01.jpg?v=638876659506130000?width=720&format=webp",
    url: "https://www.lebiscuit.com.br/cj-6cops-260ml-galleria-cv244594-5149819/p",
  },
  {
    id: "Conjunto_de_potes_para_mantimentos",
    item: "Conjunto de potes para mantimentos",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_737353-MLA95660361490_102025-F.webp",
    url: "https://www.mercadolivre.com.br/p/MLB37246326?pdp_filters=item_id:MLB3733990167#origin=share&sid=share&wid=MLB3733990167&action=whatsapp",
  },
  {
    id: "Escorredor_De_Louça",
    item: "Escorredor De Louça",
    imagem: "https://m.media-amazon.com/images/I/51JI2j1k2mL._AC_.jpg",
    url: "https://a.co/d/gEkUSaP",
  },
  {
    id: "Kit_Utensílios_De_Cozinha",
    item: "Kit Utensílios De Cozinha",
    imagem: "https://m.media-amazon.com/images/I/51RDO+bHUiL._AC_SX679_.jpg",
    url: "https://m.media-amazon.com/images/I/51RDO+bHUiL._AC_SX679_.jpg",
  },
  {
    id: "Kit_Talheres",
    item: "Kit Talheres",
    imagem:
      "https://lebiscuit.vtexassets.com/arquivos/ids/62896376-600-600/5134857_00000_01.jpg?v=638969282314130000?width=720&format=webp",
    url: "https://www.lebiscuit.com.br/faqueiro-tramont-laguna-c30-inx-6690-645-5134857/p",
  },
  {
    id: "Jogo_De_Facas_Tramontina",
    item: "Jogo De Facas Tramontina",
    imagem: "https://m.media-amazon.com/images/I/61PPolYwilL._AC_SX679_.jpg",
    url: "https://a.co/d/bz1ZvYF",
  },
  {
    id: "Rack_Com_Painel",
    item: "Rack Com Painel",
    imagem:
      "https://tfcvih.vtexassets.com/arquivos/ids/191026-1200-auto?v=638965782231800000&width=1200&height=auto&aspect=true",
    url: "https://www.zenirmoveis.com.br/rack-com-painel-caemmun-oscar-freijo-off-white/p",
  },
  {
    id: "Lava_e_Seca_Midea",
    item: "Lava e Seca Midea",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_617223-MLB71173180569_082023-F-lava-e-seca-105kg-midea-healthguard-titanium-conectada.webp",
    url: "https://produto.mercadolivre.com.br/MLB-3415054777-lava-e-seca-105kg-midea-healthguard-titanium-conectada-_JM?attributes=COLOR_SECONDARY_COLOR%3AQ2luemEtZXNjdXJv%2CVOLTAGE%3AMjIwVg%3D%3D#origin%3Dshare%26sid%3Dshare",
  },
  {
    id: "Porta_Copo_Bambus",
    item: "Porta Copo Bambus",
    imagem: "https://img.camicado.com.br/item/000000000000033050/zoom/3.jpg",
    url: "https://www.camicado.com.br/p/porta-copo-home-style-bambus/-/A-300033050-br.lc?sku=000000000000033050",
  },
  {
    id: "Porta_Paes_Bambus",
    item: "Porta Paes Bambus",
    imagem: "https://m.media-amazon.com/images/I/61aRmV+bsnL._AC_SX679_.jpg",
    url: "https://a.co/d/5eCynGV",
  },
  {
    id: "Tabua_de_carnes_de_Bambu",
    item: "Tábua de carnes de Bambu",
    imagem: "https://m.media-amazon.com/images/I/51rQu1-JOkL._AC_SX679_.jpg",
    url: "https://a.co/d/hCKoNPp",
  },
  {
    id: "Porta_Condimentos_Temperos_Giratorio",
    item: "Porta Condimentos Temperos Giratório",
    imagem: "https://m.media-amazon.com/images/I/71mFSaxTGpL._AC_SX679_.jpg",
    url: "https://a.co/d/bQzmRcL",
  },
  {
    id: "Porta_Bolo_Madeira_Com_Tampa_Acrilica",
    item: "Porta Bolo Madeira Com Tampa Acrilica",
    imagem: "https://m.media-amazon.com/images/I/51A4wjKW-EL._AC_SX679_.jpg",
    url: "https://a.co/d/758MA1O",
  },
  {
    id: "Conjunto_2_Peças_para_Bolo ",
    item: "Conjunto 2 Peças para Bolo ",
    imagem: "https://m.media-amazon.com/images/I/31+Opy9pBFL._AC_SX679_.jpg",
    url: "https://a.co/d/7E54Su4",
  },
  {
    id: "Kit_Potes_Organizadores_de_Geladeira ",
    item: "Kit Potes Organizadores de Geladeira ",
    imagem: "https://m.media-amazon.com/images/I/61knbGppsRL._AC_SX679_.jpg",
    url: "https://a.co/d/0oFPgd8",
  },
  {
    id: "Garrafa_Termica_de_cafe ",
    item: "Garrafa Térmica de café ",
    imagem: "https://m.media-amazon.com/images/I/41oYLWpphGL._AC_SX679_.jpg",
    url: "https://a.co/d/ailAq4Q",
  },
  {
    id: "Bandeja_de_Servir_de_Bambu ",
    item: "Bandeja de Servir de Bambu ",
    imagem:
      "https://img.camicado.com.br/banner/000000000000033006/000000000000033006_top.png",
    url: "https://www.camicado.com.br/p/bandeja-de-servir-home-style-bambus-23-cm-x-30-cm/-/A-300033006-br.lc?sku=000000000000033006",
  },
];

export default listaPresentes;
