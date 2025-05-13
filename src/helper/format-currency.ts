export const formatCurrency = (value: number | string) => {
  const formatted = Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formatted;
};
