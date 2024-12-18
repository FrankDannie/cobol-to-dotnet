import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Replace with actual backend URL

export const fileService = {
  async uploadAndConvert(file: File): Promise<{ dotnetCode: string }> {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(`${API_BASE_URL}/convert-zip`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  },
};
