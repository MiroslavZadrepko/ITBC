import axios from "axios";

export const getAllCountries = () => axios.get(`https://restcountries.eu/rest/v2/all`)