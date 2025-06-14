import axios from "axios";

const api = axios.create({
    baseURL: "https://app-lista-iterdiciplinar.onrender.com/api"
});

export const cadastrar = async (dados) => await api.post("/usuarios/registrar", dados);

export const logar = async (dados) => {
    const { data } = await api.post("/usuarios/login", dados);

    api.defaults.headers.authorization = `Bearer ${data.Token}`;
}

export const adicionarLista = async (lista) => await api.post("/listas", lista);

export const obterListas = async () => await api.get("/listas/usuario");

export const obterProdutos = async (id) => await api.get(`/produtos/lista/${id}`);