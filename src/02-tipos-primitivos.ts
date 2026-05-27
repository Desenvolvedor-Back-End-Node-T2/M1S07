// PASSO 2: TIPOS PRIMITIVOS

//2.1 STRING

let linguagem: string = 'Typescript'
let versao: string = '5.4'

//Template literals continuam funcionando normalmente
let apresentacao: string = `Seja Bem-Vindo ao ${linguagem} vs. ${versao}`

//Métodos de string 
let maiuscula: string = linguagem.toLocaleUpperCase()
let tamanho: number = linguagem.length

console.log('=== 2.1 String ===')
console.log(apresentacao)
console.log('Maiúscula:', maiuscula, "| Tamanho:", tamanho)

//2.2 NUMBER

//Typescript usa um único tipo 'number' para inteiros e decimais
let inteiro: number = 42
let decimal: number = 3.14
let negativo: number = -100
let hexadecimal: number = 0xff
let binario: number = 0b1010
let octal: number = 0o17
let grandeNumero: number = 1_000_000

console.log('=== 2.2 NUMBER ===')
console.log('Inteiro:', inteiro)
console.log('Decimal:', decimal)
console.log('Negativo:', negativo)
console.log('Hexadecimal:', hexadecimal)
console.log('Binário:', binario)
console.log('Octal:', octal)
console.log('Grande Número:', grandeNumero)

//2.3 BOOLEAN

let estaLogado: boolean = true
let temPermissao: boolean = false
let modoEscuro: boolean = false

function verificarAcesso(usuario: string, logado: boolean): string {
    if(logado){
        return `Acesso liberado para: ${usuario}`
    }
    return `Acesso negado. Faça login.`
}

console.log('=== 2.3 Boolean ===')
console.log(verificarAcesso("Ana", temPermissao))
console.log(verificarAcesso("José", estaLogado))

//2.4 NULL e UNDEFINED

//undefined: variável está declarada mas não nenhum valor atribuído
let endereco: string | undefined = undefined

//null: ausência intencional de valor
let usuarioDeletado: string | null = null

function buscarUsuario(id: number): string | null {
    if (id === 1) return 'Ana'
    return null
}

console.log('=== 2.3 Null e Undefined ===')
console.log('Buscar id=1: ', buscarUsuario(1))
console.log('Buscar id=2: ', buscarUsuario(2))

//2.4 ANY

// any desativa completamente a verificação de tipos

let dadosExternos: any = 'pode ser qualquer coisa'
dadosExternos = 42
dadosExternos = true
dadosExternos = {nome: 'Davi'}

console.log('=== 2.3 Any ===')
console.log('Dados Externos: ', dadosExternos)

//2.4 UNKNOWN

//unknown aceitar qualquer valor, mas exige uma verificação antes de usar
//Use quando não souber o tipo

let respostaApi: unknown = JSON.parse('{"status": 200}')

// Erro - sem verificação
//console.log(respostaApi.status)

if (typeof respostaApi === 'object' && respostaApi !== null){
    console.log("Resposta API: ", respostaApi)
}

function processarEntrada(valor: unknown): string{
    if (typeof valor === "string") return `Texto: ${valor}`
    if (typeof valor === "number") return `Número: ${valor}`
    if (typeof valor === "boolean") return `Boolean: ${valor}`
    return `Tipo Desconhecido`
}

console.log(processarEntrada(`Typescript`))
console.log(processarEntrada(2026))
console.log(processarEntrada(true))