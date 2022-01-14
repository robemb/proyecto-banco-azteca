var tbody = $("#incidents tbody");
var tbodyP = $("#incidentsP tbody");
var add=[];
var addP=[];
vacio();


function vacio(){
    if (tbody.children().length == 0) {
        tbody.append('<tr><td colspan="4" style="text-align: center;">Sin regristros que mostrar</td></tr>');
    }

    if (tbodyP.children().length == 0) {
        tbodyP.append('<tr><td colspan="4" style="text-align: center;">Sin plazos que mostrar</td></tr>');
    }  
}


function agregar(){
    let sku = $("#sku").val();
    let nom = $("#nombre").val();
    let prec = $("#precio").val();
    if(sku.length != 0 && nom.length !=0 && prec.length !=0){
        let js={"sku" : sku,
                "nombre" : nom,
                "precio" : prec};
        add.push(js);
        $("#sku").val("");
        $("#nombre").val("");
        $("#precio").val("");
        alert("guardado correctamente");
        tabla();
    }else{
        alert("Favor de llenar todos los campos");
    }
}

function tabla(){
    tbody.empty();
    for(let i=0;i<add.length; i++){
       tbody.append('<tr><td scope="col">'+add[i].sku+'</td><td scope="col">'+add[i].nombre+'</td><td scope="col">'+add[i].precio+'</td><td><button type="button" class="btn btn-outline-danger" title="eliminar" onclick="eliminar('+i+')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-x" viewBox="0 0 16 16"><path d="M6.854 7.146a.5.5 0 1 0-.708.708L7.293 9l-1.147 1.146a.5.5 0 0 0 .708.708L8 9.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 9l1.147-1.146a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146z"></path><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"></path></svg></button><button type="button" class="btn btn-success" title="modificar" onclick="modifi('+i+')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path></svg></button></td></tr>');
    }
}

function modifi(v){
    $("#sku").val(add[v].sku);
    $("#nombre").val(add[v].nombre);
    $("#precio").val(add[v].precio);
    $("#add").css("display","none");
    $("#act").css("display","");
    $("#act").click(function(){
        let sku = $("#sku").val();
        let nom = $("#nombre").val();
        let prec = $("#precio").val();
        if(sku.length != 0 && nom.length !=0 && prec.length !=0){
            let js={"sku" : sku,
                    "nombre" : nom,
                    "precio" : prec};
            add[v]=js;
            $("#sku").val("");
            $("#nombre").val("");
            $("#precio").val("");
            alert("guardado correctamente");
            tabla();
        }else{
            alert("Favor de llenar todos los campos");
        }
    });
}


function eliminar(v){
    add.splice(v,1);
    tabla();
    vacio();
}

function adminproduc(){
    $("#plazos").css("display","none");
    $("#credito").css("display","none");
    $("#productos").css("display","");
    $("#adpl").removeClass("active");
    $("#adcr").removeClass("active");
    $("#adpr").addClass("active");
}

function admincredit(){
    if(add.length == 0){
        alert("favor de agregar productos");
        $("#plazos").css("display","none");
        $("#credito").css("display","none");
        $("#productos").css("display","");
        $("#adpl").removeClass("active");
        $("#adcr").removeClass("active");
        $("#adpr").addClass("active");
    }else if(addP.length==0){
        alert("favort de ingrezar plazos");
        $("#productos").css("display","none");
        $("#credito").css("display","none");
        $("#plazos").css("display","");
        $("#adpl").addClass("active");
        $("#adcr").removeClass("active");
        $("#adpr").removeClass("active");
    }else{
    $("#productos").css("display","none");
    $("#plazos").css("display","none");
    $("#credito").css("display","");
    $("#adpl").removeClass("active");
    $("#adcr").addClass("active");
    $("#adpr").removeClass("active");
    }
}
function adminplazo(){
    $("#productos").css("display","none");
    $("#credito").css("display","none");
    $("#plazos").css("display","");
    $("#adpl").addClass("active");
    $("#adcr").removeClass("active");
    $("#adpr").removeClass("active");
}

function agregarP(){
    let plazo = $("#plazo").val();
    let tazan = $("#TazaN").val();
    let tazap = $("#TazaP").val();
    if(plazo.length != 0 && tazan.length !=0 && tazap.length !=0){
        let js={"plazo" : plazo,
                "tazan" : tazan,
                "tazap" : tazap};
        addP.push(js);
        $("#plazo").val("");
        $("#TazaN").val("");
        $("#TazaP").val("");
        alert("guardado correctamente");
        tablaP();
    }else{
        alert("Favor de llenar todos los campos");
    }
}

function tablaP(){
    tbodyP.empty();
    for(let i=0;i<addP.length; i++){
       tbodyP.append('<tr><td scope="col">'+addP[i].plazo+' semanas</td><td scope="col">'+addP[i].tazan+'%</td><td scope="col">'+addP[i].tazap+'%</td><td><button type="button" class="btn btn-outline-danger" title="eliminar" onclick="eliminarP('+i+')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-x" viewBox="0 0 16 16"><path d="M6.854 7.146a.5.5 0 1 0-.708.708L7.293 9l-1.147 1.146a.5.5 0 0 0 .708.708L8 9.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 9l1.147-1.146a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146z"></path><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"></path></svg></button><button type="button" class="btn btn-success" title="modificar" onclick="modifiP('+i+')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path></svg></button></td></tr>');
    }
}

function modifiP(v){
    $("#plazo").val(addP[v].plazo);
    $("#TazaN").val(addP[v].tazan);
    $("#TazaP").val(addP[v].tazap);
    $("#addP").css("display","none");
    $("#actP").css("display","");
    $("#actP").click(function(){
        let plazo = $("#plazo").val();
        let TazaN = $("#TazaN").val();
        let TazaP = $("#TazaP").val();
        if(plazo.length != 0 && TazaN.length !=0 && TazaP.length !=0){
            let js={"plazo" : plazo,
                    "tazan" : TazaN,
                    "tazap" : TazaP};
            addP[v]=js;
            $("#plazo").val("");
            $("#TazaN").val("");
            $("#TazaP").val("");
            alert("guardado correctamente");
            tablaP();
        }else{
            alert("Favor de llenar todos los campos");
        }
    });
}

function eliminarP(v){
    addP.splice(v,1);
    tablaP();
    vacio();
}


function buscarP(){
    let busc = $("#buscar").val();
  let res= add.filter(el=>{
        if(el.sku == busc){
            return el
        }else if(el.nombre == busc){
            return el
        }
    })   
    if(res.length != 0){
        $("#buscre").css("display","");
        $("#skucred").val(res[0].sku);
        $("#nomcred").val(res[0].nombre);
        $("#precred").val(res[0].precio);
        $("#buscar").val("");
        let selec = $("#selec");
        selec.empty();
        selec.append(' <option selected> Seleccione</option>');
        for(let i=0;i<addP.length; i++){
           selec.append(' <option value="'+addP[i].plazo+'">'+addP[i].plazo+'</option>');
        } 
    }else{
        alert("Ese producto no existe en el registro");
        $("#buscar").val("");
    }
}

function abono(p){
    let pro = $("#precred").val();
    let taza= addP.filter(el=>{
        if(el.plazo == p.value){
            return el
        }
    }) 
    let prec = parseFloat(""+pro+".00");
    let nomi = parseFloat(""+taza[0].tazan+".00");
    let punt = parseFloat(""+taza[0].tazap+".00");
    let plaz = parseFloat(""+p.value+".00");
    let abs = ((prec * nomi)+ prec)/plaz;
    let abp = ((prec * punt)+ prec)/plaz;
    $("#abS").val(abs);
    $("#abP").val(abp);
    $("#abn").css("display","");
}