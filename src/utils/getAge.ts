export default function getAge(dataNascimento) {
  const dataNascimentoDate = new Date(dataNascimento);
  const dataAtual = new Date();

  let idade = dataAtual.getFullYear() - dataNascimentoDate.getFullYear();

  // Verifica se o aniversário já ocorreu neste ano
  if (
    dataAtual.getMonth() < dataNascimentoDate.getMonth() ||
    (dataAtual.getMonth() === dataNascimentoDate.getMonth() &&
      dataAtual.getDate() < dataNascimentoDate.getDate())
  ) {
    idade--;
  }

  return idade;
}
