var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult(){
    inputTypevalue = inputType.value;
    resultTypevalue = resultType.value;

    if(inputTypeValue === "millimeter" && resultTypeValue=== "Kilometer"){
result.value = Number(input.value) * 10000000;
}else if (inputTypeValue === "millimeter" && resultTypeValue=== "Centimeter"){
    result.value = Number(input.value) * 10;
}else if (inputTypeValue === "millimeter" && resultTypeValue=== "Meter"){
    result.value = Number(input.value) * 1000;
}else if (inputTypeValue === "millimeter" && resultTypeValue==="Millimeter"){
result.value = input.value

}


}