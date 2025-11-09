export interface PresenteType {
  id: string; // Chave unica (identificador do presente)
  item: string; // Nome do item
  imagem: string; // Url para a imagem do produto
  url: string | null; // Url para o produto em uma loja online a minha escolha ou nulo, caso eu nao encontrado em uma loja online
  confirmado: boolean; // Caso algum amigo selecione o presente para me dar devera ser `true` (`false` por padrão)
  comprador: string | null; // O nome da pessoa que está me presenteando com este item, ou nulo caso ninguem tenha comprado ainda
}
