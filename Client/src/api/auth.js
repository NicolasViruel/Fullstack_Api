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
    const response = await axios.post("/auth/", userData);
    return response.data;
  } catch (error) {
    console.error("Error during loging:", error);
    throw error;
  }
};
