import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {        
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});
export interface ApiResponse<T> {
    data: T;
    status: number;
    message?: string;
  }
  
export const apiClient = {
    get: async <T>(url: string, config = {}) => {
      const response = await api.get<ApiResponse<T>>(url, config);
      return response.data;
    },
  
    post: async <T>(url: string, data: any, config = {}) => {
      const response = await api.post<ApiResponse<T>>(url, data, config);
      return response.data;
    },
  
    put: async <T>(url: string, data: any, config = {}) => {
      const response = await api.put<ApiResponse<T>>(url, data, config);
      return response.data;
    },
  
    delete: async <T>(url: string, config = {}) => {
      const response = await api.delete<ApiResponse<T>>(url, config);
      return response.data;
    },
  
    patch: async <T>(url: string, data: any, config = {}) => {
      const response = await api.patch<ApiResponse<T>>(url, data, config);
      return response.data;
    }
  };
  
export default api;
