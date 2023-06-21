modelo = localStorage.getItem("modelo")
document.getElementById("modelo").innerHTML = modelo

fetch("php/queryClientes.php")
        .then(function(res){
            return res.json()
        })
        .then(function(clientes){
            let lista = ""
            for (let i = 0; i< clientes.length; i++){
                lista += `<option>${clientes[i].nome}</option>`
            }
            document.getElementById("cliente_select").innerHTML = lista
})
fetch("php/queryConcessionarias.php")
        .then(function(res){
            return res.json()
        })
        .then(function(con){
            let lista = ""
            for (let i = 0; i< con.length; i++){
                lista += `<option>${con[i].concessionaria}</option>`
            }
            document.getElementById("con_select").innerHTML = lista
})
function confirmar(){
    alert("Compra Confirmada")
    window.location.href = "index.html"
}