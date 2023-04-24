import ValidateCpf from './validate-cpf'

describe('Validate CPF', () => {
  const validateCpf = new ValidateCpf()

  it('should return false if CPF has invalid length', () => {
    const isValid = validateCpf.isValid('123456789')
    expect(isValid).toBe(false)
  })
})
