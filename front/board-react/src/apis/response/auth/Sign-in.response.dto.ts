interface SignInResponseDto {
    email: string;
    nickname: string;
    profile: string | null;
    height: string;
    weight: string;
    gender: string;
    token: string;
    expriedTime: number;
}

export default SignInResponseDto;