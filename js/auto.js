let titulo = localStorage.getItem("titulo")
let area = localStorage.getItem("area")
document.getElementById("area").innerHTML = titulo

console.log(titulo +" "+ area)

let cod = ""
if(titulo == "Area 1"){
    fetch("php/modelosArea1.php")
        .then(function(res){
            return res.json()
        })
        .then(function(modelos){
            let lista = ""
            for (let i = 0; i< modelos.length; i++){
                lista += `<label class="modelo" id="label${i}">${modelos[i].modelo} | ${modelos[i].preco}</label>`+
                '<button class="btn_vender" onclick="ir_vendas('+i+')">Vender</button>'+
                '<br><br></br>'
            }
            document.getElementById("label2").innerHTML = lista
}) 
}
else if(titulo == "Area 2"){
    fetch("php/modelosArea2.php")
        .then(function(res){
            return res.json()
        })
        .then(function(modelos){
            let lista = ""
            for (let i = 0; i< modelos.length; i++){
                lista += `<label class="modelo" id="label${i}">${modelos[i].modelo} | ${modelos[i].preco}</label>`+
                '<button class="btn_vender" onclick="ir_vendas('+i+')">Vender</button>'+
                '<br><br></br>'
            }
            document.getElementById("label2").innerHTML = lista
}) 
}
else if(titulo == "Area 4"){
    fetch("php/modelosArea4.php")
        .then(function(res){
            return res.json()
        })
        .then(function(modelos){
            let lista = ""
            for (let i = 0; i< modelos.length; i++){
                lista += `<label class="modelo" id="label${i}">${modelos[i].modelo} | ${modelos[i].preco}</label>`+
                '<button class="btn_vender" onclick="ir_vendas('+i+')">Vender</button>'+
                '<br><br></br>'
            }
            document.getElementById("label2").innerHTML = lista
})
}

function ir_vendas(num){
    let modelo = document.getElementById(`label${num}`)
    let modelo2 = modelo.textContent
    let texto = ""
    for(let x = 0; x<=modelo2.length ; x++){
        //console.log("a: "+modelo2.substring(x, x+1))
        if(modelo2.substring(x, x+1)=='|'){
            //console.log("Entrou")
            texto = modelo2.substring(x,0)
            //console.log("Texto: "+texto)
            localStorage.setItem("modelo", texto)
            break
        }
        
    }

    window.location.href = "vendas.html"
}
