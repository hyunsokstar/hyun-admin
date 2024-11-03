// src/apis/apiForAuth.ts
import { IRequestParameterTypeForLogin, IResponseTypeForLogin } from "@/app/types/typeForAuth";
import axios, { AxiosError, AxiosResponse } from "axios";

const API_BASE_URL = "https://api.stg.dankkume.com/api";

// axios 인스턴스 생성
const instance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true, // CORS 요청에 인증 정보를 포함하도록 설정
    headers: {
        "Content-Type": "application/json"
    }
});

// apiForLogin 함수
export const apiForLogin = async (loginDto: IRequestParameterTypeForLogin): Promise<IResponseTypeForLogin> => {
    try {
        const response: AxiosResponse<IResponseTypeForLogin> = await instance.post("/users/v1/manager/auth/login", loginDto);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<{ message: string }>;
            if (axiosError.response) {
                throw new Error(axiosError.response.data.message || '로그인에 실패했습니다.');
            }
        }
        throw error;
    }
};
