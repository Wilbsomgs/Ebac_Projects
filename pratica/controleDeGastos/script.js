const matrizExpenses = [
    ["food", 0],
    ["transport", 0],
    ["pleasure", 0],
    ["others", 0]
]

// Funções utilitárias
const getElement = (id) => document.getElementById(id);
const negativeValue = (value) => value < 0;
const sumValues = (total, value) => total + value;
const clearFields = () => {
    getElement("value").value = '';
}

//Obter valores do formulário
const getInformatedValue = () => parseFloat(getElement("value").value);
const getSelectedCategory = () => getElement("category").value;

//Obter categoria da matriz
const getCategory = (matriz, categoryName) => matriz.find((item)=> item[0] === categoryName);

// Atualizar valores da matriz
const updateCategoryValue = (category, value) => category[1] += value;

const interfaceUpdate = () => {
    matrizExpenses.forEach(([name,value])=>{
        const element = getElement(name);
        element.textContent = `${name}: R$${value.toFixed(2).replace(".", ",")}`
    })
    const total = matrizExpenses.reduce((sum, [_, value]) => sum + value, 0);
    getElement("total").textContent = `Total: R$${total.toFixed(2).replace(".", ",")}`
}

function addExpenses() {

    const informatedValue = getInformatedValue();
    const informatedCategory = getSelectedCategory();

    if(negativeValue(informatedValue)){
        alert("Valor inválido! Digite um valor positivo");
        return;
    }

    const category = getCategory(matrizExpenses, informatedCategory);

    updateCategoryValue(category, informatedValue);

    interfaceUpdate();  
    clearFields();


}


