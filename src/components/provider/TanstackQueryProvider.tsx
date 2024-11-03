// src\components\provider\TanstackQueryProvider.tsx
"use client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

interface TanstackQueryProviderProps {
    children: ReactNode;
}

const TanstackQueryProvider = ({ children }: TanstackQueryProviderProps) => {
    const [queryClient] = useState(() => new QueryClient());
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default TanstackQueryProvider;
