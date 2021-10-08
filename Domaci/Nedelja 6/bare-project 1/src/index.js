import {divLaunchList,btnUpcomingLaunches,inputFilter} from './constants.js'
import { getLaunches,getUpcomingLaunches } from './service.js'
import Launches from './components/Launches.js'

let launches = []

getLaunches().then(res => {
    launches = res.data
    divLaunchList.append(...Launches(launches))
})

btnUpcomingLaunches.addEventListener('click',()=>{
    divLaunchList.innerHTML = ''
    getUpcomingLaunches().then(res => {
        launches = res.data
        divLaunchList.append(...Launches(launches))
    })
})

inputFilter.addEventListener('input',()=>{
    divLaunchList.innerHTML = ''
    let filter = launches.filter(launch => launch.name.toLowerCase().includes(inputFilter.value.toLowerCase()))
    divLaunchList.append(...Launches(filter))
})

