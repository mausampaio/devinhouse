# DEVinHouse

## Semana 02 - Javascript

### Exercício 01

Utilizando JavaScript, emita um alerta para o usuário com alguma informação importante.

### Exercício 02

Utilizando JavaScript, peça a confirmação do usuário ao clicar em algum botão, perguntando se ele deseja realmente realizar aquela ação (você pode utilizar a página criada nos exercícios da semana 1, ou criar uma nova).

### Exercício 03

Faça com que o navegador do usuário pergunte o nome dele(a). Utilizando o método alert, exiba o nome inserido pelo usuário.

### Exercício 04

Pergunte ao usuário: nome (prompt), idade (prompt) e se gosta de praticar algum esporte (confirm). Crie 3 variáveis para guardar as respostas do usuário: uma deve receber um valor textual (string), outra deve receber um valor numérico (number), e outra um valor de verdadeiro ou falso (boolean). Faça com que esses 3 valores sejam exibidos no console do navegador.

### Exercício 05

Faça 2 prompts ao usuário: No primeiro, pergunte o seu sobrenome. No segundo, pergunte o seu nome. Em seguida, exiba na tela um alert contendo o nome completo do usuário, na ordem correta (ou seja: Nome Sobrenome).

### Exercício 06

Pergunte ao usuário seu último sobrenome e em seguida exiba na tela um alert contendo o texto “Olá, X. Seu sobrenome contém y letras”, onde X é o sobrenome em letras maiúsculas, e y é a quantidade de letras desse sobrenome.

### Exercício 07

Faça 2 prompts ao usuário: No primeiro, pergunte o ano de nascimento. No segundo, pergunte o ano atual. Em seguida, exiba na tela um alert contendo o texto “Sua idade é x ou y”, onde x é a idade do usuário caso ele já tenha feito aniversário neste ano, e y é a idade caso ele ainda não tenha aniversariado no ano corrente.

### Exercício 08

Faça uma página HTML contendo um label que exiba a mensagem “Insira sua data de nascimento”, um campo de texto que só permita inserir data (dica: input type date) e um botão rotulado “calcular idade”. 

Programe uma função a ser executada quando o usuário clicar no botão, que faça o cálculo da idade do usuário, e então exiba a idade em um texto na página HTML.

### Exercício 09

Faça uma página HTML contendo 2 campos de texto (dica: input type number), para que o usuário possa inserir, em cada um, o valor que deseja calcular. 

Coloque também na sua página 4 botões, um indicando soma, outro subtração, outro multiplicação, e outro divisão. 

Adicione um outro campo de texto, apenas leitura (readonly). 

Quando o usuário clicar no botão de soma (multiplicação, divisão ou subtração), a sua página deve somar (multiplicar, dividir ou subtrair) os 2 valores inseridos pelo usuário e exibir o resultado no campo de texto readonly.

### Exercício 10

Em uma página HTML, insira um campo de texto para que o usuário insira um número.

Programe uma função em JavaScript para verificar se o número inserido pelo usuário é par ou ímpar, e informe o usuário através de um texto na página HTML.

### Exercício 11

Construa uma página HTML contendo um texto que informa o horário no momento de acesso, no formato “23:59” (HH:mm).

### Exercício 12

Construa uma página HTML contendo um texto que informa o horário atual, no formato “23:59”, e que atualize automaticamente o valor, sempre que mudar o horário.

### Exercício 13

Sua página deve conter um texto e uma imagem, ambos representando a estação. Ao carregar a página, baseado na data atual, seu código deve verificar qual a estação atual do ano no hemisfério sul, e deve alterar o texto e a imagem, para que passem a representar a estação correta.

### Exercício 14

Sua página deve possibilitar ao usuário inserir itens em uma lista e exibir a lista atualizada a medida que forem sendo adicionados novos itens. 

A página deve conter um rótulo () “Item a adicionar:” seguido de um campo de texto onde o usuário possa digitar o item. 

Deve conter também um botão “Adicionar”, que no momento do clique do usuário deve inserir o item digitado na lista. Se o texto estiver vazio (length), deve mostrar uma mensagem ao usuário solicitando a inserção de algum texto. 

A página também deve conter uma lista (), que exibirá os itens adicionados pelo usuário.

### Exercício 15

Utilizando a mesma página do exercício 14 adicione um novo botão “Salvar lista”. Quando o usuário clicar nesse botão, a lista de itens de mercado deve ser salva no Local Storage do navegador.

### Exercício 16

Utilizando a mesma página dos exercícios 14 e 15 crie um novo botão “Carregar lista”, que ao ser clicado deve buscar no Local Storage se existe uma lista de itens de mercado salva, e em caso positivo deve mostrar os itens no elemento da página. Caso não haja nenhuma lista previamente salva, deve informar o usuário “Não há itens salvos”.

### Exercício 17

Na página HTML devem existir 2 campos de texto (dica: input type number): um rotulado (label) “valor inicial”, e outro rotulado “raiz”. Também deve ter 2 botões: um rotulado “Calcular P.A.” e outro rotulado “Calcular P.G.”. 

O evento click de cada botão deve chamar uma função que: verifica se os campos estão preenchidos (dica: length) e, se estiverem vazios, deve mostrar uma mensagem ao usuário pedindo para inserir os valores; caso os campos estejam preenchidos, deve calcular os 10 primeiros valores da sequência e exibir na tela. 

>Relembrando: P.A. (Progressão Aritmética) é uma sequência numérica em que cada termo, a partir do segundo, é igual à soma do termo anterior com a raiz. Exemplo: Valor inicial = 1; raiz = 3; P.A. = 1, 4, 7, 10, 13, 16, 19, 22, 25, 28. 
>P.G. (Progressão Geométrica) é como uma P.A., mas em vez de somar, multiplica-se a raiz. Exemplo: Valor inicial = 1; raiz = 3; P.G. = 1, 3, 9, 27, 81…