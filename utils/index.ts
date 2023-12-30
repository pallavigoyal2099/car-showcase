import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters:FilterProps){
    const {manufacturer,fuel,limit,model,year}=filters;
    const headers={
        'X-RapidAPI-Key': '83600779b8msh71c0f36914f16e8p17e6fbjsn9a2a2d0e1232',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
      const response= await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&limit=${limit}&fuel_type=${fuel}&model=${model}`,{headers:headers});
      const result= await response.json();
      return result;
}
export const calculateCarPrice = (city_mpg: number, year: number) => {
   // Your specific formula for calculating the price
  // This is just a placeholder formula, replace it with your own logic
  const basePrice = 20000; // Base price for a new car
  const depreciationFactor = 0.95; // Example depreciation factor for each year

  // Adjust the price based on the car's age
  const ageMultiplier = Math.pow(depreciationFactor, new Date().getFullYear() - year);

  // Adjust the price based on city miles per gallon
  const mpgMultiplier = city_mpg > 25 ? 1.05 : 0.95;

  // Calculate the final price
  const finalPrice = basePrice * ageMultiplier * mpgMultiplier;

  // Round the final price to two decimal places
  return Math.round(finalPrice * 100) / 100;
};
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer', 'hrjavascript-mastery'
    );
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
  } 

  export const updateSearchParams=( type:string,value:string)=>{
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    return newPathname;
  }