# `package.json` vs `tsconfig.json`

> Material de estudo — Grupo Backend

---

## Visão geral

Em projetos Node.js com TypeScript, esses dois arquivos vivem na raiz do projeto e parecem parecidos à primeira vista — mas têm responsabilidades completamente diferentes.

| | `package.json` | `tsconfig.json` |
|---|---|---|
| **Gerenciado por** | npm / yarn / pnpm | Compilador TypeScript (`tsc`) |
| **Obrigatório em** | Todo projeto Node.js | Apenas projetos TypeScript |
| **Responde à pergunta** | "O que meu projeto precisa e como rodá-lo?" | "Como o TypeScript deve compilar meu código?" |

---

## `package.json` — a ficha técnica do projeto

O `package.json` é o arquivo central de qualquer projeto Node.js. Ele descreve o projeto e gerencia tudo relacionado à sua existência: dependências, scripts e metadados.

### Principais responsabilidades

- **Metadados**: nome, versão e descrição do projeto
- **Dependências de produção** (`dependencies`): libs usadas em tempo de execução, como `express`, `prisma`, `fastify`
- **Dependências de desenvolvimento** (`devDependencies`): ferramentas usadas apenas durante o desenvolvimento, como `typescript`, `jest`, `eslint`
- **Scripts de automação**: atalhos para comandos comuns como `build`, `start`, `test` e `dev`
- **Ponto de entrada** (`main` / `exports`): indica qual arquivo o Node.js deve executar

### Exemplo

```json
{
  "name": "minha-api",
  "version": "1.0.0",
  "scripts": {
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts",
    "build": "tsc",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/express": "^4.17.21"
  }
}
```

---

## `tsconfig.json` — o manual do compilador TypeScript

O `tsconfig.json` só existe em projetos TypeScript. Ele instrui o compilador `tsc` sobre **como transformar** os arquivos `.ts` em `.js`, quão rigorosa deve ser a verificação de tipos e quais arquivos devem ser incluídos ou ignorados.

### Principais responsabilidades

- **`target`**: qual versão do JavaScript será gerada (ES2020, ESNext, etc.)
- **`module`**: sistema de módulos da saída (`commonjs` para Node.js, `ESM` para projetos modernos)
- **`outDir`**: pasta onde os arquivos compilados serão salvos (geralmente `./dist`)
- **`strict`**: ativa um conjunto rigoroso de verificações de tipo — recomendado sempre `true`
- **`include` / `exclude`**: quais arquivos compilar e quais ignorar (como `node_modules`)
- **`paths`**: configura aliases de importação (muito útil em projetos grandes e com NestJS)

### Exemplo

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "experimentalDecorators": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

## Analogia para fixar

Pense no **`package.json`** como a **ficha técnica de uma obra** — lista os materiais necessários (dependências), as ferramentas disponíveis (scripts) e quem é o responsável pelo projeto (metadados).

Já o **`tsconfig.json`** é o **manual de operação de um equipamento específico** (o compilador TypeScript) — diz como ele deve trabalhar nessa obra: com que precisão, onde entregar o resultado e quais arquivos processar.

---

## Resumo prático

- Você pode ter um projeto Node.js **sem** `tsconfig.json` (se usar JavaScript puro).
- Você **nunca** terá um projeto Node.js sem `package.json`.
- O `tsconfig.json` só entra em cena quando o TypeScript está no jogo.
- Quando você roda `npm run build`, o `package.json` chama o script, e o `tsc` usa o `tsconfig.json` para saber o que fazer.

---

*Bons estudos! 🚀*