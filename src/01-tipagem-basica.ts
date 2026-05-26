// PASSO 1: TIPAGEM BASICA

//1.1 ANOTAÇÃO EXPLÍCITA vs INFERÊNCIA DE TIPO

//Anotação explícita: você informa o tipo manualmente
let nomeCurso: string = "Migrando para Typescript"
let totalAlunos: number = 50
let aulaAtiva: boolean = true

//Inferência: o Typescript descobre o tipo pelo valor atribuído
let instrutor = 'João Silva' //string
let duracao = 3              //number
let gravado = false          //boolean

console.log("### 1.1 ANOTAÇÃO  vs INFERÊNCIA DE TIPO ###")
console.log(nomeCurso, totalAlunos, aulaAtiva)
console.log(instrutor, duracao, gravado)

//1.2 ERRO DE TIPO 

let idade: number = 25;

//idade = 'vinte e cinco'
//Error: Type 'string' is not assignable to type 'number'.

idade = 26
console.log('### 1.2 Proteção de Tipo ###')
console.log('Idade: ', idade)

// 1.3 TIPAGEM EM FUNÇÕES

/*
function somar(a, b){return a + b}
somar("10", 5) --> retorna "105" (bug)
*/

function somar(a: number, b:number): number{
    return a + b
}

const resultado = somar(10, 5)

console.log('### 1.3 Funções Tipadas ###')
console.log("10 + 5 =", resultado)

// 1.4 PARÂMETROS OPCIONAIS E VALORES DEFAULT

//O "?" torna o parâmetro opcional
function saudar(nome:string, cargo?: string): string{
    if (cargo){
        return `Olá, ${nome} (${cargo})!`
    }
    return `Olá, ${nome}!`
}

// Valor default: define um padrão quando o argumento não é passado
function calcularDesconto(preco: number, desconto: number = 10): number{
    return preco - (preco * desconto) / 100
}

console.log('### 1.4 Parâmetros Opcionais e Default ###')
console.log(saudar("Ana"))
console.log(saudar("Carlos", "Tech Lead"))
console.log("Preço com desconto padrão:", calcularDesconto(200))
console.log("Preço com 20% de desconto:", calcularDesconto(200, 20))

//1.5 RETORNO COM VOID E NEVER

//void: função que não retorna nada
function registrarLog(mensagem: string): void{
    console.log(`[LOG] ${new Date().toISOString()} - ${mensagem}`)
}

//never: função que NUNCA termina normalmente (lança erro ou loop infinito)
function lancarErro(mensagem: string): never{
    throw new Error(mensagem)
}

console.log('### 1.5 void e never ###')
registrarLog("Aula iniciada com sucesso!")

lancarErro('deu erro!')