fetch("php/queryAlocacao.php")
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            console.log(data)

            let areas = data.map(({area}) => parseInt(area)) 

            let codHtml = ""

            for(let i = 1; i<=6; i++){
                if(areas.includes(i)){
                    codHtml += `<div class="area${i}" style="color: white ; background-color: blue" onclick = "area(${i})">${i}</div>`
                }
                else{
                    codHtml += `<div class="area${i}" style="color: black ; background-color: white" onclick="avisoSemCarro()">${i}</div>`
                }
            }
            document.getElementById("main").innerHTML = codHtml
        })
        .catch(function(err){
            console.log(err)
        })

        function area(num){
            localStorage.setItem("titulo", `Area ${num}`)
            localStorage.setItem("area", num)
            window.location.href = "autos.html"
        }
        function avisoSemCarro(){
            alert("Esta area nao tem caro disponivel")
        }