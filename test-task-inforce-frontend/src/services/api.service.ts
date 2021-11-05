import axios from "axios";
import {API_URL} from "../constants";

export const getApiService = async (path: string) => {
  const response = await axios.get(`${API_URL}/${path}`);

  return response;
}

export const patchApiService = async (path: string, data: any) => {
  const response = await axios.patch(`${API_URL}/${path}`, { ...data });

  return response;
}

export const postApiService = async (path: string, data: any) => {
  const response = await axios.post(`${API_URL}/${path}`, { ...data });

  return response;
}

export const deleteApiService = async (path: string, data?: any) => {
  const response = await axios.delete(`${API_URL}/${path}`, { data: { ...data } });

  return response;
}