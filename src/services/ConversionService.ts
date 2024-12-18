import axios from "axios";
import { ConversionInput, ConversionOutput } from "../models/ConversionModel";

const API_BASE_URL = "http://localhost:5000/api"; // Replace with actual backend URL

export const conversionService = {
  async convert(input: ConversionInput): Promise<ConversionOutput> {
    const response = await axios.post<ConversionOutput>(`${API_BASE_URL}/convert`, input);
    return response.data;
  },
};
