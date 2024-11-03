// src/hook/useApiForLogin.ts
import { apiForLogin } from '@/api/apiForAuth';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export interface LoginResponse {
    code: string;
    message: string;
    data: {
        access: {
            token: string;
            expiresIn: number;
        };
        refresh: {
            token: string;
            expiresIn: number;
        };
        userRole: string;
    };
}

export const useApiForLogin = () => {
    return useMutation({
        mutationFn: async (loginData: { userId: string; password: string }) => {
            console.log('Mutation data:', loginData);

            try {
                const response = await apiForLogin({
                    userId: loginData.userId,
                    password: loginData.password
                });

                // 성공적인 로그인 처리
                if (response.code === 'OK') {
                    // 토큰 저장 등 필요한 처리
                    localStorage.setItem('accessToken', response.data.access.token);
                    localStorage.setItem('refreshToken', response.data.refresh.token);

                    toast.success('로그인에 성공했습니다.');
                    return response;
                } else {
                    throw new Error(response.message || '로그인에 실패했습니다.');
                }
            } catch (error) {
                console.error('Login error:', error);
                // 에러 메시지 표시
                if (error instanceof Error) {
                    toast.error(error.message);
                } else {
                    toast.error('로그인 중 오류가 발생했습니다.');
                }
                throw error;
            }
        },
        onError: (error) => {
            console.error('Login mutation error:', error);
        }
    });
};