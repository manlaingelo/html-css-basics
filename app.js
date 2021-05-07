let tabHeader = document.querySelector(".tab-header");
let tabBody = document.querySelector(".tab-body");
let tabButtons=document.getElementsByTagName("button");


for(let i=0; i<tabButtons.length; i++){
    tabButtons[i].addEventListener("click",function(){
        tabButtons[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("div")[i].classList.add("active");
    });
}
function c(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("promise");
        },3000)
    });
}

function fin(){
    console.log("finish");

}

async function ac(){
    console.log("started");
    let p= await c();
    console.log("res:::",p);
    fin();

}

// kyoto woeid=> 15015372
//  beijing => 2151330
function getWeather(){
    fetch("https://api.allorigins.win/get?url=https://www.metaweather.com/api/location/2151330/")
        .then((result) => {
            // console.log(result);
            return result.json();
        })
        .then((r) => {
            let data = JSON.parse(r.contents);
            console.log("Fetch:::::", r);
            let today = data.consolidated_weather[0];
            // console.log(data.title, "city's weather", today.the_temp);
            document.getElementsByClassName("fetch")[0].innerText=data.title+" city's weather "+today.the_temp;
        });
}

function getWeatherAjax() {
      var req = new XMLHttpRequest();
      req.open('GET', 'https://api.allorigins.win/get?url=https://www.metaweather.com/api/location/2151330/');
  
      req.onload = function() {
        if (req.status == 200) {
            let response= JSON.parse(this.responseText);
            console.log("Ajax::::::",response);
            let data=JSON.parse(response.contents);
            let today=data.consolidated_weather[0];
            document.getElementsByClassName("fetch")[1].innerText=data.title+" city's weather "+today.the_temp;
        }
      };
      req.send();
  }




// ############################################ jishee beldeh ############################################
// module --

// hoisting, scope --
// let var jishee --
// huwisagchiin sanah oig shalgah --
// call, apply, --
// event bubling --
// ajax fetch ylgaa jishee --



//  let var ylgaa

// var x = 10;
// let y=100;

// console.log("Scope 1:", x, y);
// if (true) {
//     var x = 20;
//     let y=200;
//     console.log("Scope 2:", x, y);
// }
// for(var x=1; x<5; x++){
//     console.log(x);
// }
// for(let y=1; y<10; y++){
//     console.log(y);
// }
// console.log("Scope 3:", x, y);

// // const c="aaa";

// // c="bbb";
// // mutable, inmutable

// a='Test';
// b='Hello';

// var arr=b.split('');

// arr.forEach(el => {
//     if(['a','e','i','o','u'].includes(el)){
//         a=a+el;
//     }
// });
// console.log(a);    

//Scope Hoisting
// var s = "Outside function";

// function transform() {
  
//   if (false) {
//     var s = "Inside function";
//   }
//   console.log(s);
// }

// // Log the global and local variable
// console.log(s);
// transform();
// console.log(s);


// // huwisagchiin sanah oig shalgah, zaadag bolgoh

// let temp=255;

// let temp2=temp;

// console.log("Memory 1:",temp,temp2); // 255 255
// temp2=260;
// console.log("Memory 2:",temp,temp2); // 255 260
// temp=265;
// console.log("Memory 3:",temp,temp2); // 265 260

// // call bind apply
let obj = {
    name: 'Bi bol object',
    hewleh: function(neg, hoyr, guraw){
        console.log(this, "1:"+neg, "2:"+hoyr, "3:"+guraw);
    }
}

obj.hewleh("neg", "hoyr", "guraw");
// // bind 
// let bindObj= {
//     name: 'Bi bol bind object'
// }
// const bindHewleh=obj.hewleh.bind(bindObj);
// bindHewleh("neg", "hoyr", "guraw");

// // call
let callObj= {
    name: 'Bi bol call object'
}
obj.hewleh.call(callObj, 1,2,3);

// // apply 
let applyObj= {
    name: 'Bi bol apply object'
}
let arr = [1,2,3];
obj.hewleh.apply(applyObj, arr);

obj.hewleh(1,2,3);

//event bubbling

let bubble1=document.getElementById("bubble1");
let bubble2=document.getElementById("bubble2");
let bubble3=document.getElementById("bubble3");
let bubble4=document.getElementById("bubble4");
let click=document.getElementById("click")
let click2=document.getElementById("click2")
bubble1.addEventListener('click', function(e){
    console.log("1. Saaral daragsan");
});
bubble2.addEventListener('click', function(e){
    console.log("2. Har daragsan");
});
bubble3.addEventListener('click', function(e){
    console.log("3-1. Tsagaan daragsan");
});
bubble4.addEventListener('click', function(e){
    console.log("3-2. Tsagaan daragsan");
});
click.addEventListener('click', function(e){
    console.log("4-1. Button daragsan");
});
click2.addEventListener('click', function(e){
    console.log("4-2. Button daragsan");
});
