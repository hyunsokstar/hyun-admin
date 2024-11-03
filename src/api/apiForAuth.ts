// src/apis/apiForAuth.ts
import { IRequestParameterTypeForLogin, IResponseTypeForLogin } from "@/app/types/typeForAuth";
import axios, { AxiosError, AxiosResponse } from "axios";

// axios 인스턴스 생성
const instance = axios.create({
    baseURL: '/api',  // Next.js rewrite를 통한 프록시 요청을 사용
    withCredentials: true, // CORS 요청에 인증 정보를 포함하도록 설정
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json" // 서버에서 JSON 응답을 기대
    }
});

// Interceptor를 이용한 요청과 응답 데이터 디버깅
instance.interceptors.request.use((config) => {
    console.log('Request Config:', {
        url: config.url,
        method: config.method,
        data: config.data, // 요청 바디 데이터 확인
        headers: config.headers,
    });
    return config;
}, (error) => {
    console.log('Request Error:', error);
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    console.log('Response Data:', response.data);
    console.log('Response Headers:', response.headers); // 응답 헤더 확인
    return response;
}, (error) => {
    console.log('Response Error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
});

// apiForLogin 함수
export const apiForLogin = async (loginDto: IRequestParameterTypeForLogin): Promise<IResponseTypeForLogin> => {
    try {
        console.log('Sending Login DTO:', loginDto); // loginDto가 제대로 전달되는지 확인

        const response: AxiosResponse<IResponseTypeForLogin> = await instance.post(
            "/users/v1/manager/auth/login",
            loginDto
        );

        console.log('Login Response:', response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<{ message: string }>;
            console.log('Axios Error:', axiosError.response ? axiosError.response.data : error.message);
            if (axiosError.response) {
                throw new Error(axiosError.response.data.message || '로그인에 실패했습니다.');
            }
        }
        throw error;
    }
};
