import axios from "axios";
import { baseURL } from "./baseURL";

export const instnces = axios.create({
    baseURL: baseURL
})