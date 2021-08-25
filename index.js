//document.getElementById("").innerHTML = 

// const xContador = document.getElementById("")

preencheTabela();

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(desenhaGrafico);

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(desenhaGrafico);

      function desenhaGrafico() {

        var data = google.visualization.arrayToDataTable([
          ['Categorias', 'Marcas'],
          ['Pencil',     2],
          ['Lipstick',   3],
          ['Liquid',  2],
          ['Powder', 2],
          ['Lip Gloss',    2],
          ['Cream', 1],
          ['Concealer', 1],
          ['Null', 1]
        ]);

        var options = {
          title: 'Relação Categoria x Marca'
        };

        desenhaGrafico.options={
            font: {
                family: "'Montserrat', sans-serif"
            }
        }

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

      

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
    return axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand`);
}
