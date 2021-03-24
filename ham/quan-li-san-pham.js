    var arrProduct = ["Sony Xperia", "SamsungGalaxy","Nokia 6",
                      "Xiaomi Redmi Note 4","Apple Iphone 6S",
                      "Xiaomi Mi 5s Plus","Apple Iphone 8 Plus",
                      "Oppo A71","Xiaomi Redmi S2","Apple Iphone XS"];
                      
    function newList(){
        var list = "<table width='600' cellspacing='0' cellpadding='5'>";
        for(let i = 0; i < arrProduct.length; i++){ 
            if( i%2 !== 0){
                list +=  "<tr style = 'background-color: #f2f2f2'> <td> " + arrProduct[i] + "</td>";
                list +=  "<td> <input onclick='edit("+i+")' type='button' value='Edit'> </td>";
                list +=  "<td style = 'text-align: right'> <input onclick='delete1("+i+")' type ='button' value='Delete' </td> </tr>";     
            }else{
                list +=  "<tr> <td> " + arrProduct[i] + "</td>";
                list +=  "<td> <input onclick='edit("+i+")' type='button' value='Edit'> </td>";
                list +=  "<td style = 'text-align: right'> <input onclick='delete1("+i+")' type ='button' value='Delete' </td> </tr>";           
            }
        }   
        document.getElementById("content").innerHTML = list + "</tablet>"
    }
    
    function edit(seri){
        arrProduct[seri] = prompt("Chỉnh sửa")
        newList()
    }
    function add(){
        var add = document.getElementById("add-input").value
        arrProduct.push(add);
        newList()
    }
    function delete1(seri){
        arrProduct.splice(seri,1)
        newList()
    }
    newList()