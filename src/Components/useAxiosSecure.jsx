import axios from "axios";

const useAxiosSecure = () => {
  const instance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
  });

  // Add a response interceptor
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // Redirect to login page
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default useAxiosSecure;
