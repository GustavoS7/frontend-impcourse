export const formatCurrency = (value: number | string) => {
  value = value.toString();
  const raw = value.replace(/\D/g, '');
  const formatted = (Number(raw) / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formatted;
};
