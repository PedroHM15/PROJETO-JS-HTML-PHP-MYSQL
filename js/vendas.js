let modelo = localStorage.getItem("textoModelo")
        let id_modelo = localStorage.getItem("idModelo")
        let concessionaria = ""
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
        fetch("php/queryAlocacao.php")
                .then(function(res){
                    return res.json()
                })
                .then(function(data){
                    for(let i = 0; i < data.length; i++){
                        if(data[i].automovel == id_modelo){
                            concessionaria = data[i].concessionaria
                        }
                    }

        })
        fetch("php/queryConcessionarias.php")
                .then(function(res){
                    return res.json()
                })
                .then(function(con){
                    let lista = ""
                    for (let i = 0; i< con.length; i++){
                        if(con[i].id == concessionaria)
                        lista += `<option value="${id_modelo}">${con[i].concessionaria}</option>`
                    }
                    document.getElementById("con_select").innerHTML = lista
        })
        