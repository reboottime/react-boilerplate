import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
} from 'axios';

// This requires backend has well crafted APIs contract
export default class HttpClient {
  private readonly instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
    this.setupInteceptor();
  }

  private setupInteceptor() {
    this.instance.interceptors.response.use(
      (res) => res.data,
      (error: AxiosError) => {
        // Where you can add customized logic on error response,
        // For example, log out user automatically if the http status means user's authentication token has expired
        return Promise.reject(error);
      }
    );
  }

  delete = (url: string): Promise<void> => {
    return this.instance.delete(url);
  };

  get = <T>(url: string, params?: RecordType) => {
    return this.instance.get<T>(url, { params }) as Promise<T>;
  };

  patch = <T>(url: string, data: RecordType, conf?: AxiosRequestConfig) => {
    return this.instance.patch<T>(url, data, conf ?? {}) as Promise<T>;
  };

  post = <T>(url: string, data: RecordType, conf?: AxiosRequestConfig) => {
    return this.instance.post<T>(url, data, conf ?? {}) as Promise<T>;
  };

  put = <T>(url: string, data: RecordType, conf?: AxiosRequestConfig) => {
    return this.instance.put<T>(url, data, conf ?? {}) as Promise<T>;
  };
}

//   eslint-disable-next-line @typescript-eslint/no-explicit-any
type RecordType = Record<string, any>;
