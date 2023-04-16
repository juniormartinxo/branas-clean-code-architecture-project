### Descrição
Para começar, faremos um projeto estruturado de forma simples, faça do jeito que você souber, depois vamos ir refatorando juntos.


### Testes
1 - Deve criar um pedido com 3 produtos (com descrição, preço e quantidade) e calcular o valor total
2 - Deve criar um pedido com 3 produtos, associar um cupom de desconto e calcular o total (percentual sobre o total do pedido)
3 - Não deve criar um pedido com cpf inválido (lançar algum tipo de erro)


### Considere
Utilizar e refatorar o algoritmo de validação de cpf: https://github.com/rodrigobranas/cccat7_refactoring/blob/master/src/example2/cpfBefore.ts

### Sugestões
- Faça a modelagem da forma que desejar e não se preocupe por enquanto, vamos implementar juntos na aula seguinte com influências de DDD e Clean Architecture
- Utilize a sua linguagem e biblioteca de teste de sua preferência
- Devem existir no mínimo 2 arquivos, um de teste e outro que é a aplicação
- Como mecanismo de persistência você pode utilizar um banco de dados, um array em memória, um arquivo, qualquer coisa que desejar
- Como entrada você pode utilizar uma API HTTP, um CLI ou qualquer outro mecanismo que permita a entrada dos dados
- Tente seguir com disciplina, criando primeiro um teste que falha, depois fazendo e teste passar e refatorando
