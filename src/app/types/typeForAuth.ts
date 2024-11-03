// src/types/typeForAuth.ts

// 로그인 요청에 사용되는 인증 자격 타입
export interface AuthCredentials {
    email: string;
    password: string;
}

// 로그인 요청에 사용되는 파라미터 타입
export interface IRequestParameterTypeForLogin {
    userId: string;
    password: string;
}

// 로그인 응답에 대한 타입
export interface IResponseTypeForLogin {
    code: "OK" | "ERROR";  // 요청 성공 여부
    message: string;  // 요청에 대한 메시지
    data: {
        access: {
            token: string;  // 액세스 토큰
            expiresIn: number;  // 토큰 만료 시간(초 단위)
        };
        refresh: {
            token: string;  // 리프레시 토큰
            expiresIn: number;  // 리프레시 토큰 만료 시간(초 단위)
        };
        userRole: string;  // 사용자 역할
        authorityList: string[];  // 사용자 권한 리스트
    };
}
