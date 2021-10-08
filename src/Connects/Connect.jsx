import axios from 'axios';
import { api } from '../contigUrl.js';

const Connect = axios.create({
    baseURL: api,
    // headers: {
    //     'Authorization':
    // }
})

export default Connect