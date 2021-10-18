import axios from 'axios'
//https://hacker-news.firebaseio.com/v0/topstories.json
// https://hacker-news.firebaseio.com/v0/item/160705.json
///v0/askstories, /v0/showstories, and /v0/jobstories
const BASE_URL = `https://hacker-news.firebaseio.com`
const VERSION = `v0`
const TOPSTORIES = `topstories`
const ITEM = `item`
const ASK = `askstories`
const JOB = `jobstories`
const SHOW= `showstories`

export const getTopStoriesIds = () => axios.get(`${BASE_URL}/${VERSION}/${TOPSTORIES}.json`)
export const getStoryById = (id) => axios.get(`${BASE_URL}/${VERSION}/${ITEM}/${id}.json`)
export const getAskStories = () => axios.get(`${BASE_URL}/${VERSION}/${ASK}.json`)
export const getJobStories = () => axios.get(`${BASE_URL}/${VERSION}/${JOB}.json`)
export const getShowStories = () => axios.get(`${BASE_URL}/${VERSION}/${SHOW}.json`)