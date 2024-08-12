import axios from "./axios";

export const registerRequest = async (userData) => {
  try {
    const response = await axios.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const loginRequest = async (userData) => {
  try {
    const response = await axios.post("/auth/", userData,);
    
    return response.data;
  } catch (error) {
    console.error("Error during loging:", error);
    throw error;
  }
};

export const logoutRequest = async () => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await axios.post("/auth/logout", {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    }
  } catch (error) {
    console.error("Error during logout:", error);
    throw error;
  }
};
