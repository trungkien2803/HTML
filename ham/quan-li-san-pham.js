    var arrProduct = ["Sony Xperia", "SamsungGalaxy","Nokia 6",
                      "Xiaomi Redmi Note 4","Apple Iphone 6S",
                      "Xiaomi Mi 5s Plus","Apple Iphone 8 Plus",
                      "Oppo A71","Xiaomi Redmi S2","Apple Iphone XS"];
    
    var list = "<table width='600' cellspacing='0' cellpadding='3'>"
    for(let i = 0; i < arrProduct.length; i++){
        list = list + "<tr> <td>" + arrProduct[i] + "</td>" + "<td>  </br>"
        
    }
    
    document.getElementById("content").innerHTML = list + "</tablet>"