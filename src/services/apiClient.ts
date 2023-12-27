import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '48ef2bebbed1476ca779ce3c8b559f2f'
    }
})