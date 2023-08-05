export async function fetchCars(){
    const headers = {
		'X-RapidAPI-Key': 'cf90eed0ddmshcd594f467752dc7p19a393jsnb32d85182f72',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {headers: headers});

    const result = await response.json();

    return result;
}