import axios from "axios";
import { useNavigate } from "react-router-dom"; // Adjust this import based on your routing library

const useAxiosWithAuth = () => {
  const navigate = useNavigate();

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
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default useAxiosWithAuth;
