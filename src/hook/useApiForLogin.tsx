// src/hooks/useApiForAuth.ts
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { apiForLogin } from '../api/apiForAuth';
import { IRequestParameterTypeForLogin, IResponseTypeForLogin } from '@/app/types/typeForAuth';

interface UseApiForLoginOptions {
    onSuccessRedirect?: string;
}

export const useApiForLogin = (
    options: UseApiForLoginOptions = {}
): UseMutationResult<IResponseTypeForLogin, Error, IRequestParameterTypeForLogin> => {
    const router = useRouter();
    const { onSuccessRedirect = '/dashboard' } = options;

    return useMutation({
        mutationFn: apiForLogin,
        onSuccess: (data) => {
            toast.success('Login successful! Redirecting to dashboard...');
            router.push(onSuccessRedirect);

            // 필요한 경우 전역 상태 업데이트 가능
            return data;
        },
        onError: (error: Error) => {
            const errorMessage = error.message || 'An error occurred during login';
            toast.error(`Login failed: ${errorMessage}`);
            throw error;
        },
    });
};
