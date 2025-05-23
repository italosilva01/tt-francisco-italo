import axios from "axios";

const getBaseUrl = () => {
  if (typeof window === 'undefined') {
    return process.env.NEXT_PUBLIC_API_URL || "http://backend:8000/";
  }
  return process.env.NEXT_PUBLIC_CLIENT_API_URL || "http://localhost:8000/";
};

const api = axios.create({
  baseURL: getBaseUrl(),
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

type ApiConfig = {
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
  [key: string]: Record<string, string | number> | undefined;
};

export const apiClient = {
  get: async <T>(url: string, config: ApiConfig = {}) => {
    const response = await api.get<ApiResponse<T>>(url, config);
    return response.data;
  },

  post: async <T>(url: string, data: Record<string, unknown>, config: ApiConfig = {}) => {
    const response = await api.post<ApiResponse<T>>(url, data, config);
    return response.data;
  },

  put: async <T>(url: string, data: Record<string, unknown>, config: ApiConfig = {}) => {
    const response = await api.put<ApiResponse<T>>(url, data, config);
    return response.data;
  },

  delete: async <T>(url: string, config: ApiConfig = {}) => {
    const response = await api.delete<ApiResponse<T>>(url, config);
    return response.data;
  },

  patch: async <T>(url: string, data: Record<string, unknown>, config: ApiConfig = {}) => {
    const response = await api.patch<ApiResponse<T>>(url, data, config);
    return response.data;
  }
};

export default api;
