

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

    //Operador Condicional ternário
    let age = 16
    console.log(
        age >= 18 // 1 condição
        ? "Você pode dirigir" // se true
        :"Você não pode dirigir" //se false
    );

    /*
    FALSY quando um valor é considerado false e TRUTHY quando é 
    considerado verdadeiro em contextos onde um boolean é obrigatório (condicionais e loops.)
    */

    console.log("### EXEMPLOS DE FALSY ###")
    console.log(false ? "VERDADEIRO" : "FALSO")
    console.log(0 ? "VERDADEIRO" : "FALSO")
    console.log(-0 ? "VERDADEIRO" : "FALSO")
    console.log("" ? "VERDADEIRO" : "FALSO")
    console.log(null ? "VERDADEIRO" : "FALSO")
    console.log(-0 ? "VERDADEIRO" : "FALSO")
    console.log(undefined ? "VERDADEIRO" : "FALSO")
    console.log(NaN ? "VERDADEIRO" : "FALSO")

    console.log("### EXEMPLOS DE TRUTHY ###")
    console.log(true ? "VERDADEIRO" : "FALSO")
    console.log({} ? "VERDADEIRO" : "FALSO")
    console.log([] ? "VERDADEIRO" : "FALSO")
    console.log(1 ? "VERDADEIRO" : "FALSO")
    console.log(3.22 ? "VERDADEIRO" : "FALSO")
    console.log("0" ? "VERDADEIRO" : "FALSO")
    console.log(" " ? "VERDADEIRO" : "FALSO")
    console.log("Hellen" ? "VERDADEIRO" : "FALSO")
    console.log(-1 ? "VERDADEIRO" : "FALSO")
    console.log( Infinity ? "VERDADEIRO" : "FALSO")

    //Estrutura de condição IF
    let hour = 13
    if (hour <= 12) {
        console.log ("Bom dia!")   
    }
    else {
        console.log("Boa tarde!")
    }