let cpf = document.querySelector ("#cpf")
let cnpj = document.querySelector ("#cnpj")

// querySelector pega qualquer elemento que eu queira
// o ("input") é o que eu quero q ele pegue, então ele vai pegar o input, poderia ser uma div ou um button, até mesmo um id ou class, colocando (".class") ou ("#id")

cpf.addEventListener("keypress", () => {

    let tamanho = cpf.value.length

    if (tamanho==3 || tamanho==7){
        cpf.value+= "."        
    }
    else if (tamanho==11){
        cpf.value+= "-"
    }

})

cnpj.addEventListener("keypress", () => {

    let tamanho = cnpj.value.length

    if (tamanho==2 || tamanho==6){
        cnpj.value+= "."
    }
    else if (tamanho==11){
        cnpj.value+= "/"
    }
    else if (tamanho==15){
        cnpj.value+= "-"
    }
})

//input.value+= é um resumo do comando abaixo 
//input.value = input.value+"." 

// função anonima '()' é para trabalhar com arrow fuction '=>'
// arrow fuction é para simplificar o codigo por exemplo
// input.addEventListener significa que vai ativar um evento a minha escolha, no caso seria o pressionar de alguma tecla


