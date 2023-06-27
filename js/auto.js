let titulo = localStorage.getItem("titulo")
        
        document.getElementById("area").innerHTML = titulo
        
        let veiculo = []
        let nome_autos = []
        let num_autos = []
        let cod = ""
        
            fetch("php/queryAlocacao.php")
                .then(function(res){
                    return res.json()
                })
                .then(function(data){
                    let area = localStorage.getItem("area")
                    
                    for (let i = 0; i< data.length; i++){
                        if(data[i].area==area && data[i].quantidade != 0){
                            num_autos.push(parseInt(data[i].automovel))
                        }
                    }
                    
                 
                })
                .catch(function(err){
                    console.log(err)
                }) 
        
            fetch("php/automoveis.php")
            .then(function(res){
                    return res.json()
                })
                .then(function(data){
                    for (let i = 0; i< data.length; i++){
                        for(let j = 0; j < num_autos.length ; j++){
                            if(data[i].id==num_autos[j]){
                                console.log(data[i].modelo)
                                nome_autos.push(data[i].modelo)
                                
                                veiculo.push(`${data[i].modelo} | ${data[i].preco}`)
                                console.log(nome_autos[j])
                                
                            }
                        }
                    }
                    for (let i = 0; i<veiculo.length; i++){
                        cod += `<label class="modelo">${veiculo[i]}</label>`+
                                `<button class="btn_vender" onclick="ir_vendas('${nome_autos[i]}' , ${num_autos[i]})">Vender</button>`+
                                '<br><br></br>'
                    }
                    document.getElementById("label2").innerHTML = cod
                    
                })
                .catch(function(err){
                    console.log(err)
                }) 
            
        
        
        function ir_vendas(modelo, id){
            
            localStorage.setItem("textoModelo", modelo)
            localStorage.setItem("idModelo", id)
        
            window.location.href = "vendas.html"
        }
