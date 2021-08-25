//document.getElementById("").innerHTML = 

// const xContador = document.getElementById("")

preencheTabela();


const teste = []
async function preencheTabela() {
    const response = await makeupGet("brand");
    console.log(response.data[0]);
    const tableData = response.data;

    for (var i=0; i<70; i++){
        teste.push(response.data[i]);
    }

    var arr = [], //to collect id values 
    collection = []; //collect unique object
$.each(teste, function (index, value) {
    if ($.inArray(value.brand, arr) == -1) { //check if id value not exits than add it
        arr.push(value.brand);//push id value in arr
        collection.push(value); //put object in collection to access it's all values
    }
});

console.log(collection);

collection.forEach((brand) => {
        $("#brandsTable").append(`<tr>
        <td>${brand.brand}</td>
        <td>${brand.category}</td>
        </tr>`);
  });

}


function makeupGet(param) {
    return axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?brand`);
}
