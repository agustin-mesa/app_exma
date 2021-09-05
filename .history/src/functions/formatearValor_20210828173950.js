const formatearValor = (valor) => {
  return new Intl.NumberFormat(
    "en-US",
    {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }.format(valor)
  );
};

export default formatearValor;
