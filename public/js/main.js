const city = document.getElementById('cityName')
const submit = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name')
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const datahide = document.querySelector('.middle_layer');


const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = city.value;
    if (cityVal === "") {
        city_name.innerText = "Write the name before search.";

        datahide.classList.add('data_hide');
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=1203cb63ca02fe32b7789f55c4265f91`;
            const response = await fetch(url);

            const data = await response.json();
            const arrdata = [data];

            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp_real_val.innerText = arrdata[0].main.temp;

            const tempMood = arrdata[0].weather[0].main;

            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class = 'fa fa-sun' style ='color : eccc68;'></i>"
            }
            else if (tempMood == "Cloud") {
                temp_status.innerHTML = "<i class = 'fa fa-cloud' style ='color : f1f2f6;'></i>"
            }
            else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class = 'fa fa-rain' style ='color : a4b0be;'></i>"
            }
            else {
                temp_status.innerHTML = "<i class = 'fa fa-sun' style ='color : eccc68;'></i>"
            }

            datahide.classList.remove('data_hide');

        }
        catch {
            city_name.innerText = 'Enter the city name properly';
            datahide.classList.add('data_hide');
        }
    }
}
submit.addEventListener('click', getInfo)