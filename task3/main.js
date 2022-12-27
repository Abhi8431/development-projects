const inputs = document.querySelectorAll(".panel input");
const c = document.querySelector("#celsius");
const f = document.querySelector("#fahrenheit");
const k = document.querySelector("#kelvin");


inputs.forEach(input => {
    input.addEventListener("input",e =>{


        const unit = e.target.id;

        const v = parseInt(e.target.value);


        if(unit === "celsius"){
            f.value= parseInt((v*1.8)+32).toFixed(4)*1;

            k.value= parseInt(v + 273.15).toFixed(4)*1;

        }
    
        else if(unit=== "fahrenheit"){
            c.value= parseInt((v-32)* 5/9).toFixed(4)*1;

            k.value= parseInt(((v - 32) * 5/9)+273.15).toFixed(4)*1;


        }



        else if(unit=== "kelvin"){
            c.value= parseInt(v-273.15).toFixed(4)*1;

            k.value= parseInt((v - 273.15) * 9 / 5 + 32).toFixed(4)*1;
        }
    });
});