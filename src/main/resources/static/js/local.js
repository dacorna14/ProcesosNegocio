//funciones propias de la api
function sendData(path){
    var myForm = document.getElementById("myForm");
    var formData = new FormData(myForm);
    var jsonData = {};
        for(var [k, v] formData)
        jsonData[k] = v;
    }
    const request = fetch(path, {
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    });
    console.log(request)
}