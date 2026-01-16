async function weatherlao(city){
    try{
    let apikey = "type your api key here';
    let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
    if(!raw.ok){
        throw new Error("city not found or something went wrong");
    }
    let real = await raw.json();
    if(real.main.temp < 0){
        console.warn(`TOO COLD OUT THERE.....${real.main.temp}C`)
    }else if(real.main.temp > 0){
        console.warn(`TOO HOT OUT THERE....${real.main.temp}C`)
    }
    }catch(err){
        console.log(err.message);
    }
};
weatherlao("Noida");
