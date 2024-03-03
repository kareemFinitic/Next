import axios from "axios";
import { getHeaderConfig, clearAuthInfo } from './utils'
import { baseUrl } from './app.config';


export let api = axios.create({
    baseURL: baseUrl,
    timeout: 100000,
    headers: getHeaderConfig().headers
 })



 