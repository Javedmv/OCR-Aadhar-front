import axios from "axios";
import { URLS, ROUTES } from "../Api/api";

export interface AadharPayLoad{
    front: File;
    back: File;
}

export interface AadharResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const uploadAadhar = async (data: AadharPayLoad): Promise<AadharResponse> => {
  const formData = new FormData();
  formData.append("front", data.front);
  formData.append("back", data.back);

  const response = await axios.post(`${URLS.BACKEND_URL}${ROUTES.AADHAAR_UPLOAD}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};