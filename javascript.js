document.getElementById("textareaHiddenNo").style.display = "none";
document.getElementById("hiddenYes").style.display = "none";
document.getElementById("otherText").style.display="none"
document.getElementById("submitButton").disabled=true;

function validSubmit(){
    if(validName() && validSurname() && validBirthDate() && validAge() && validEmail() && validJob()){
        document.getElementById("submitButton").disabled= false;
    }
    else{
        document.getElementById("submitButton").disabled= true;
    }        
}

function validName(){
    let name = document.getElementById("name").value;
    if(name != ''){
        document.getElementById("errorName").style.display="none";
        return true;
    }
    else{
        document.getElementById("errorName").style.display="block";
        return false;
    }
}
function validSurname(){
    let name = document.getElementById("surname").value;
    if(name != ''){
        document.getElementById("errorSurname").style.display="none";
        return true;
    }
    else{
        document.getElementById("errorSurname").style.display="block";
        return false;
    }
}
function validBirthDate(){
    let birthDate = new Date(document.getElementById("birthDate").value);
    let currentDate = new Date();
    if(!birthDate || birthDate>currentDate){
        document.getElementById("errorBirthDate").style.display="block";
        return false;
    }
    else{
        document.getElementById("errorBirthDate").style.display="none";
        return true;
    }
}
function validAge(){
    let birthDate = new Date(document.getElementById("birthDate").value);
    let currentDate = new Date();
    let lastBirthsday = new Date(birthDate);
    let nextBirthsday = new Date(birthDate);
    let age = parseInt(document.getElementById("age").value);

    lastBirthsday.setFullYear(lastBirthsday.getFullYear() + age);
    nextBirthsday.setFullYear(nextBirthsday.getFullYear() + age + 1);
    if(currentDate >= lastBirthsday && currentDate < nextBirthsday){
        document.getElementById("errorAge").style.display="none";
        return true;
    }
    else{
        document.getElementById("errorAge").style.display="block";
        return false;
    }
}

//regular expression derivated from regexr.com community email validaion
function validEmail(){
    let email = document.getElementById("email").value;
    if(/^([A-Za-z0-9_\-\.]){3,}\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)){
        document.getElementById("errorEmail").style.display="none";
        return true;
    }
    else{
        document.getElementById("errorEmail").style.display="block";
        return false;
    }
}
function validJob(){
    let name = document.getElementById("job").value;
    if(name != ''){
        document.getElementById("errorJob").style.display="none";
        return true;
    }
    else{
        document.getElementById("errorJob").style.display="block";
        return false;
    }
}
function showHidden(value){
    if(value == "yes"){
        document.getElementById("textareaHiddenNo").style.display = "none";
        document.getElementById("hiddenYes").style.display = "block";
    }
    if(value == "no"){
        document.getElementById("textareaHiddenNo").style.display = "block";
        document.getElementById("hiddenYes").style.display = "none";
    }
}
function showTextArea(){
    let checkOption4 = document.getElementById("checkOption4");
    if(checkOption4.checked){
        document.getElementById("otherText").style.display="block";
    }
    else{
        document.getElementById("otherText").style.display="none";
    }
}

//zo zdrojakov k prednaske c.7: "ex07 - formular - 2 comboboxy generovane.html"

var selectConf1 = document.getElementById("selectConf1");
var selectConf2 = document.getElementById("selectConf2");  
var selectConf3 = document.getElementById("selectConf3");

var option2=new Array()
option2["lenovo"]=["Legion", "IdeaPad"] 
option2["acer"]=["Predator", "Nitro V"]
option2["acer"].forEach(function(item){ 
    selectConf2.options[selectConf2.options.length]= new Option(item); 
});

var option3 = new Array()
option3["Legion"] = ["Legion Y540", "Legion Y7000"]
option3["IdeaPad"] = ["IdeaPad 3","IdeaPad 5"]
option3["Nitro V"] = ["Nitro V AN515", "Nitro V AN517"]
option3["Predator"] = ["Predator Helios","Predator Triton"];
option3["Predator"].forEach(function(item){
    selectConf3.options[selectConf3.options.length] = new Option(item);
});



selectConf1.onchange = function() {
    var thisArr = option2[selectConf1.value];
    selectConf2.options.length=0; 
    selectConf3.options.length=0;   
    thisArr.forEach(function(item){ selectConf2.options[selectConf2.options.length]= new Option(item); });
    option3[selectConf2.value].forEach(function(item){
        selectConf3.options[selectConf3.options.length] = new Option(item);
    });
};     

selectConf2.onchange = function() {
    var thisArr = option3[selectConf2.value];
    selectConf3.options.length=0;   
    thisArr.forEach(function(item){ selectConf3.options[selectConf3.options.length]= new Option(item); });
}

function validSubmit(){
    if(validName() && validSurname() && validBirthDate() && validAge() && validEmail() && validJob()){
        document.getElementById("submitButton").disabled= false;
    }
    else{
        document.getElementById("submitButton").disabled= true;
    }        
}
