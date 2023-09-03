import axios from "axios";

// entedimento de baseURL: https://viacep.com.br/ws/ <- base url que não muda 01001000/json/ <- path que muda

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});