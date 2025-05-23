export const formatCurrency = amount => Number(amount).toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'  
})