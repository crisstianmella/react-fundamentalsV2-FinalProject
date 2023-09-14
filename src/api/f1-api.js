import axios from 'axios'
import { BASE_URL, API_KEY_PARAM } from '../config'

export class F1Api {
    static async fetchDriverStanding(year) {
        try {
            const response = await axios.get(
                `${BASE_URL}drivers/standings/${year}${API_KEY_PARAM}`
            )
            let data = []
            data.push(response.data)
            return data
        } catch (err) {
            console.log(err)
        }
    }

    static async fetchConstructorStanding(year) {
        try {
            const response = await axios.get(
                `${BASE_URL}constructors/standings/${year}${API_KEY_PARAM}`
            )
            let data = []
            data.push(response.data)
            return data
        } catch (err) {
            console.log(err)
        }
    }

    static async fetchRaceCalendar(year) {
        try {
            const response = await axios.get(
                `${BASE_URL}races/${year}${API_KEY_PARAM}`
            )
            let data = []
            data.push(response.data)
            return data
        } catch (err) {
            console.log(err)
        }
    }
}
