

//Declarando uma variável sem valor.
 var user;
//para exibir o conteudo
console.log(user);

//Declarando uma variável com valor.
 var email = "hellen@gmail.com";
 /*Neste caso, estou declarando uma variável chamada "email"
 e atribuindo a ela (através do sinal de igual "=") o valor inicial(hellen@gmail.com)*/

 //exibindo...
 console.log(email);

// substituindo o valor da variável.
 email = "daiany@gmail.com";
 //exibindo...
 console.log(email);

 //Outra maneira de criar variável é usando o "let"
 //Declarando uma variável sem valor com let;

 let User
 //exibindo...
 console.log("Dai");

 //Declarando uma variável com valor.
 let Email = "hellen@gmail.com";
 /*Neste caso, estou declarando uma variável let chamada "email"
 e atribuindo a ela (através do sinal de igual "=") o valor inicial(hellen@gmail.com)*/

 //exibindo...
 console.log(Email);

// substituindo o valor da variável.
 Email = "daiany@gmail.com";
 //exibindo...
 console.log(Email);

 // EXiste também o const, que se trata de uma variável onde o valor é fixo, ou seja, nao pode ser alterado.

 const number = 42;
//exibindo...
console.log (number);

//Tipo de dados: String
let userName = "Adriana";
//exibindo...
console.log(userName);
//para exibir o tipo de dado
console.log(typeof userName);

//existem 2 maneiras de criar variaves do tipo String

console.log ("com aspas duplas");
console.log ('com aspas simples');

//Quando utilizar uma ou outra?
console.log ('uma string com "aspas duplas" dentro de simples')
console.log ("uma string com 'aspas simples' dentro de duplas")

//para escrever multiplas linhas, usa-se o acento grave`
console.log (`uma string com acento grave 
    permite escrever
    múltiplas linhas.`);

    //INCREMENTO
    let num = 10;
    //num = num + 1;
    //ou
    num++;

    console.log (num)

    //DECREMENTO

    console.log("decremento após: ", num--);
    console.log(num--);
    console.log ("decremento antes: ", --num);

    //INCREMENTAR MAIS DE UM (COLOCAR).
    num += 10;
    console.log (num);

    //DECREMENTAR MAIS DE UM (REMOVER).
    num -= 2
    console.log (num);