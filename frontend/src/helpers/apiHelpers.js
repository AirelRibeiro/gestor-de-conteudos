import axios from 'axios';

const API = axios.create({
  baseURL: `https://gestor-de-conteudos-production.up.railway.app`,
});

export const requestGetAll = async () => {
  const { data } = await API.get('/');
  return data;
};

export const requestWithQuery = async (query) => {
  const { data } = await API.get(query);
  return data;
};

export const requestDelete = async (id) => {
  const { data } = await API.delete(`/${id}`);
  return data;
};

export const requestUpdate = async (id, body) => {
  const { data } = await API.put(`/${id}`, body);
  return data;
};

export const requestHistory = async (id) => {
  const { data } = await API.get(id);
  return data;
};

export const requestcreate = async (body) => {
  const { data } = await API.post('/', body);
  return data;
};

export default API;
