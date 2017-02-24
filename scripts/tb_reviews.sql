create table tb_reviews
(
	id_revew	int auto_increment primary key,
    id_prod int references tb_produtos(id_prod),
    review int
);
insert into tb_reviews values(null,3,4),(null,3,5),(null,3,4),(null,3,5),(null,4,4),
(null,4,5),(null,4,5),(null,5,5),(null,5,4),(null,5,3),(null,6,2),(null,6,4),(null,6,5),(null,7,3),(null,7,4);


/* Query dos Produtos mais buscados */
SELECT 
tb_produtos.id_prod,
tb_produtos.nome_prod_curto,
tb_produtos.nome_prod_longo,
tb_produtos.codigo_interno,
tb_produtos.id_cat,
tb_produtos.preco,
tb_produtos.peso,
tb_produtos.largura_centimetro,
tb_produtos.altura_centimetro,
tb_produtos.quantidade_estoque,
tb_produtos.preco_promorcional,
tb_produtos.foto_principal,
tb_produtos.visivel,
cast(avg(review) as dec(10,2)) as media, 
count(id_prod) as total
FROM tb_produtos 
INNER JOIN tb_reviews USING(id_prod) 
GROUP BY 
tb_produtos.id_prod,
tb_produtos.nome_prod_curto,
tb_produtos.nome_prod_longo,
tb_produtos.codigo_interno,
tb_produtos.id_cat,
tb_produtos.preco,
tb_produtos.peso,
tb_produtos.largura_centimetro,
tb_produtos.altura_centimetro,
tb_produtos.quantidade_estoque,
tb_produtos.preco_promorcional,
tb_produtos.foto_principal,
tb_produtos.visivel
LIMIT 4;