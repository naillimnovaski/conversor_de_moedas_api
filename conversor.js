// Função para buscar taxa de câmbio da API
async function getExchangeRate(daMoeda, paraMoeda) {
  try {
      const response = await fetch(`${apiURL}${daMoeda}`);
      const data = await response.json();
     
      if (data.result === "success") {
          return data.conversion_rates[paraMoeda];
      } else {
          throw new Error("Erro ao buscar as taxas de câmbio");
      }
  } catch (error) {
      console.error("Erro:", error);
      return null;
  }
}


document.getElementById('currency-form').addEventListener('submit', async function(event) {
  event.preventDefault();
   // Obter valores de entrada
   const valor = parseFloat(document.getElementById('amount').value);
   const daMoeda = document.getElementById('daMoeda').value;
   const paraMoeda = document.getElementById('paraMoeda').value;
