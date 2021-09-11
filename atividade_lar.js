// EXERCICIO: (UTILIZAR PARAMETRO) 
//CALCULE A MEDIA DO ALUNO

//Questão: (UTILIZAR PARAMETRO) 
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)

function mediaAluno(n1, n2, n3){

    let media = ((n1 + n2 + n3)/3).toFixed(1);
    console.log(`Média do aluno: ${media}`);
    
    if (media >= 6){
        console.log("O aluno está aprovado!");
    }
    else{
        console.log("O aluno está reprovado!"); 
    }      
    return media;
}

mediaAluno(8, 6, 3);