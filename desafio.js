/**Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" */
let nome="livia";
let exp=1;
switch (exp){
    case (exp<=1000) :
        
       console.log( "O Herói de nome  "+nome+" está no nível de ferro");
        break;
    case (exp>=1000 && exp<=2001) :
        
       console.log( "O Herói de nome  "+nome+" está no nível de Bronze");
        break;
        case (exp>=2000 && exp<=3001) :
        
       console.log( "O Herói de nome  "+nome+" está no nível de Prata");
        break;    
        case (exp=>3000 && exp<=4001) :
        
       console.log( "O Herói de nome  "+nome+" está no nível de Ouro");
        break;
        case (exp>=4000 &&  exp<=5001) :
        
       console.log( "O Herói de nome  "+nome+" está no nível de Platina");
        break;
        case (exp=>5000 && exp<=6001) :
        
       console.log( "O Herói de nome  "+nome+" está no nível de Ascendente");
        break;
        case (exp>=6000 && exp<=7001) :
        
       console.log( "O Herói de nome  "+nome+" está no nível de Imortal");
        break;
        case (exp>=7000) :
        
       console.log( "O Herói de nome  "+nome+" está no nível de Radiante");
        break;

}