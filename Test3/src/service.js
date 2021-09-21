import axios from "axios"

export const Company = () => {
    return axios.get(`https://api.spacexdata.com/v4/company`)
} 

export const Satelites = () => {
    return axios.get(`https://api.spacexdata.com/v4/starlink`)
}

export const NextLaunch = () => {
    return axios.get(`https://api.spacexdata.com/v4/launches/next`)
}

export const GetRocket = () => {
    return axios.get(`https://api.spacexdata.com/v4/rockets/5e9d0d95eda69974db09d1ed`)
}