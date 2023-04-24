export default class ValidateCpf {
  isValid(cpf: string): boolean {
    return cpf.length === 11
  }
}
