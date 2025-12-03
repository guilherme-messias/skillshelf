# Skillshelf

## Estrutura do Projeto

```
/public
    index.php
    content_item_create.php
    content_item_detail.php
    uploads/
    assets/
    .htaccess
config.php
controllers/
models/
views/
...
```

## Segurança

- Apenas arquivos do diretório `public` são acessíveis pelo navegador.
- Diretórios sensíveis e arquivos de configuração estão protegidos por regras no `.htaccess`.

## Como rodar

Acesse o projeto via navegador apontando para o diretório `public`.

## Observações

- Todos os includes/requires usam caminhos relativos ao diretório raiz.
- Atualize referências a uploads/assets para `/public/uploads` e `/public/assets`.
