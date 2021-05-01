let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];
let tabButtons=document.getElementsByTagName("button");
// console.log(tabButtons);

for(let i=0; i<tabButtons.length; i++){
    tabButtons[i].addEventListener("click",function(){
        // console.log(tabButtons[i])
        tabButtons[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("div")[i].classList.add("active");
      });
}


//  docs n end bga => https://www.metaweather.com/api/
// kyoto woeid=> 15015372
//  beijing => 2151330
function getWeather(id) {
    fetch(
      "https://api.allorigins.win/get?url=https://www.metaweather.com/api/location/2151330/"
    )
      .then(result => {
        return result.json();
      })
      .then(r => {
          console.log(r);
            let data = JSON.parse(r.contents);
            let today = data.consolidated_weather[0];
            console.log();
            console.log(data.title,"city's weather",today.the_temp);
      });
  }
  
getWeather();