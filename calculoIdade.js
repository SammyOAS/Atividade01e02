import PromptSync from "prompt-sync";
import chalk from "chalk";
const prompt = PromptSync()
//const anoNascimento = Number((prompt('Em que ano você nasceu? ')))
//console.log(chalk.blue(`Sua idade atual é: ${idadeAtual} anos.`))

const hoje = new Date()
const anoAtual = hoje.getFullYear()

console.log(chalk.red('--------------------------------------'))
const dia = Number(prompt('Dia de nascimento:  '))
const mes = Number(prompt('Mes de nascimento:  '))
const anoNasc = Number(prompt('Ano de nascimento:  '))
const idadeAtual = anoAtual - anoNasc


console.log(chalk.red('---------------------------------------'))
console.log(`\nSua data de nascimento é:  ${dia}/${mes}/${anoNasc}.`)
console.log(`\nSua idade atual / idade que irá fazer esse ano é: `+ chalk.green(idadeAtual) + ` anos.`)
console.log(chalk.red('---------------------------------------'))
