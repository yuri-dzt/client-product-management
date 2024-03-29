const productBox = document.querySelector("#productBox");

const showClients = async () => {
  await fetch("http://localhost:3300/api/products")
    .then((response) => response.json())
    .then((products) => {
      products.forEach((product) => {
        const newDate = new Date(product.data_atualizado);
        const dia = newDate.getDate();
        const mes = newDate.getMonth() + 1;
        const ano = newDate.getFullYear();
        productBox.innerHTML += `
        <div class="listItems">
            <h1>${product.nome}</h1>
            <h1>${product.descricao}</h1>
            <h1>${product.preco}</h1>
            <h1>${dia}/${mes}/${ano}</h1>
            <button id="deleteUser">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2.56098H9C9 1.75275 8.32845 1.09756 7.5 1.09756C6.67155 1.09756 6 1.75275 6 2.56098ZM4.875 2.56098C4.875 1.14659 6.05025 0 7.5 0C8.94975 0 10.125 1.14659 10.125 2.56098H14.4375C14.7481 2.56098 15 2.80668 15 3.10976C15 3.41284 14.7481 3.65854 14.4375 3.65854H13.4482L12.5692 12.5204C12.4297 13.9269 11.2181 15 9.76973 15H5.23027C3.78191 15 2.57036 13.9269 2.43085 12.5204L1.55181 3.65854H0.5625C0.251842 3.65854 0 3.41284 0 3.10976C0 2.80668 0.251842 2.56098 0.5625 2.56098H4.875ZM6.375 6.03659C6.375 5.73351 6.12315 5.4878 5.8125 5.4878C5.50184 5.4878 5.25 5.73351 5.25 6.03659V11.5244C5.25 11.8275 5.50184 12.0732 5.8125 12.0732C6.12315 12.0732 6.375 11.8275 6.375 11.5244V6.03659ZM9.1875 5.4878C9.49815 5.4878 9.75 5.73351 9.75 6.03659V11.5244C9.75 11.8275 9.49815 12.0732 9.1875 12.0732C8.87685 12.0732 8.625 11.8275 8.625 11.5244V6.03659C8.625 5.73351 8.87685 5.4878 9.1875 5.4878ZM3.55062 12.4147C3.63433 13.2585 4.36125 13.9024 5.23027 13.9024H9.76973C10.6388 13.9024 11.3657 13.2585 11.4494 12.4147L12.3179 3.65854H2.68206L3.55062 12.4147Z" fill="#f2f2f2"/>
              </svg>
            </button>
        </div>`;
      });
    })
    .catch((error) => {
      console.error("Error fetching clients:", error);
    });
};

showClients();
