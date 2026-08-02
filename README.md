# SEORF Site

Site estático da SEORF com visual premium e versátil, produtos em imagens 1:1 e carrinho que encaminha o pedido para WhatsApp.

## Estrutura

- `index.html`: home, produtos, coleções, inspiração, sobre, FAQ, carrinho e modal de produto.
- `pages/contato.html`: informações de contato com links diretos para WhatsApp e Instagram.
- `css/styles.css`: identidade visual, responsividade e componentes.
- `js/script.js`: produtos, filtros, carrinho, modais, carrossel e loader.
- `assets/`: logos, imagens e vídeos herdados do projeto.

## Rodar localmente

```bash
npm start
```

Depois acesse `http://localhost:8000`.

## Dados da loja

- Nome: SEORF
- Instagram: `@useseorf`
- WhatsApp: `+55 (98) 9 8882-3902`

## Atualizar produtos

Edite o array `products` em `js/script.js`. Cada produto já usa imagem quadrada no layout, então basta trocar `name`, `price`, `color`, `tag`, `categories`, `image`, `description` e `specs`.
