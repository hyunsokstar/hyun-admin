// src/components/dialog/DialogButtonForLogin.tsx
'use client';

import * as React from 'react';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Mail, Lock, LogIn } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useApiForLogin } from '@/hook/useApiForLogin';
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Zod 스키마 정의
const loginSchema = z.object({
    userId: z.string().min(1, { message: "사용자 ID를 입력해주세요." }),
    password: z.string().min(3, { message: "비밀번호는 최소 3자 이상이어야 합니다." }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const DialogButtonForLogin: React.FC = () => {
    const loginMutation = useApiForLogin();
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            userId: "admin",
            password: "Abc12345",
        },
    });

    const handleLogin = async (data: LoginFormValues) => {
        // 데이터 정제
        const cleanedData = {
            userId: data.userId.trim(),
            password: data.password.trim()
        };

        console.log('Form data before mutation:', cleanedData);
        loginMutation.mutate(cleanedData);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="text-sm font-medium bg-white hover:bg-gray-50"
                >
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-white w-[800px] max-w-[90vw]">
                <div className="flex flex-col md:flex-row w-full min-h-[500px]">
                    <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8 border-r border-gray-200">
                        <div className="max-w-[200px] w-full">
                            <img src="/dankkum_logo.png" alt="Dankkum Logo" className="w-full h-auto" />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 p-8">
                        <DialogHeader className="space-y-2 mb-6">
                            <DialogTitle className="text-2xl font-semibold text-gray-900">
                                Welcome Back
                            </DialogTitle>
                            <DialogDescription className="text-gray-500">
                                Please login to your account
                            </DialogDescription>
                        </DialogHeader>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="userId"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>사용자 ID</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                                                    <Input {...field} placeholder="사용자 ID" className="pl-10" />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>비밀번호</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                                                    <Input {...field} type="password" placeholder="••••••••" className="pl-10" />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white mt-6"
                                    disabled={loginMutation.isPending}
                                >
                                    {loginMutation.isPending ? 'Logging in...' : 'Sign In'}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DialogButtonForLogin;