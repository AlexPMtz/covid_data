import axios from 'axios';

export {
  getStates,
  getState,
  getStateInfo
}

const getStates = async () => {
  try {
    return await axios.get("https://api.covidtracking.com/v1/states/info.json");
  } catch (error) {
    console.warn(error)
  }
}

const getState = async (state) => {
  try {
    return await axios.get(`https://api.covidtracking.com/v1/states/${state}/20210307.json`)
  } catch (error) {
    console.warn(error)
  }
}

const getStateInfo = async (state) => {
  try {
    return await axios.get(`https://api.covidtracking.com/v1/states/${state}/info.json`)
  } catch (error) {
    console.warn(error)
  }
}