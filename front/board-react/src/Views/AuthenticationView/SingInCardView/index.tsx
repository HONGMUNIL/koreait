import { Box, Button, FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel, Typography } from "@mui/material";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useCookies } from 'react-cookie';
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { SignInDto } from "src/apis/request/auth";
import { useUserStore } from "src/stores";
import { SIGN_IN_URL } from "src/constants/api";
import axios, { AxiosResponse } from "axios";
import ResponseDto from "src/apis/response";
import { SignInResponseDto } from "src/apis/response/auth";
import { getExpireTime } from "src/utils";
import { useNavigate } from "react-router-dom";

interface Props {
    setSignInView: Dispatch<SetStateAction<boolean>>;
}

export default function SignInCardView({ setSignInView }: Props) {

    const navigator = useNavigate();

    const [cookies, setCookie] = useCookies();
    const { setUser } = useUserStore();
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ showPassword, setShowPassword ] = useState<boolean>(false);
    const [ loginErrorFlag, setLoginErrorFlag ] = useState<boolean | null>(null);
    const [ nullErrorFlag, setNullErrorFlag ] = useState<boolean>(false);

    const onEmailChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmail(event.target.value);
        setNullErrorFlag(true);
    }
    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(event.target.value);
        setNullErrorFlag(true);
    }

    const onSignInHadler = () => {
        if (!email.trim() || !password) {
            setLoginErrorFlag(null);
            setEmail('');
            setPassword('');
            setNullErrorFlag(false);
            return;
        } else {
            setLoginErrorFlag(true);
        }

        const data: SignInDto = { email, password };

        axios.post(SIGN_IN_URL, data)
        .then((response) => signInResponseHandler(response))
        .catch((error) => signInErrorHandler(error));
    }

    const signInResponseHandler = (response: AxiosResponse<any, any>) => {
        const { result, message, data } = response.data as ResponseDto<SignInResponseDto>;
        
        if (!result || !data) {
            setLoginErrorFlag(false);
            setEmail('');
            setPassword('');
            setNullErrorFlag(false);
            return;
        }

        const { token, expriedTime, ...user } = data;

        const expires = getExpireTime(expriedTime);
        setCookie('accessToken', token, {expires, path: '/'});

        setUser(user);

        const userNickname = user.nickname;
        alert(userNickname + "님 환영합니다!!");
        navigator('/');
        console.log(data);
    }

    const signInErrorHandler = (error: any) => {
        console.log(error.response.status);
    }

    return(
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Box width='500px' sx={{display: 'flex', flexDirection: 'column', mt:'50px'}}>
                <Typography sx={{fontSize: '25px', mb:'15px'}}>로그인</Typography>
                <FormControl fullWidth variant="standard">
                    <InputLabel>이메일*</InputLabel>
                        <Input type='text' sx={{mb: '20px'}}
                        onChange={(event) => onEmailChangeHandler(event)}
                        value={(email)}
                        />
                </FormControl>
                <FormControl fullWidth variant="standard">
                    <InputLabel>비밀번호*</InputLabel>
                    <Input type={showPassword ? 'text' : 'password'} sx={{mb: '5px'}} endAdornment={
                        <InputAdornment position='end'>
                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon/>}
                            </IconButton>
                        </InputAdornment>
                    }
                    onChange={(event) => onPasswordChangeHandler(event)}
                    value={(password)}
                    />
                </FormControl>
                {
                    loginErrorFlag === null ? (<FormHelperText sx={{color: 'red'}}>모든 값을 입력해주세요.</FormHelperText>) :
                    loginErrorFlag === false? (<FormHelperText sx={{color: 'red'}}>아이디 또는 비밀번호가 틀립니다.</FormHelperText>) : 
                                                  (<></>)
                }
                {
                    nullErrorFlag ? (<Button fullWidth sx={{mt: '50px', backgroundColor: 'black', color: 'white'}} onClick={onSignInHadler}>로그인</Button>) :
                    (<Button fullWidth sx={{mt: '50px', backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'white'}} onClick={onSignInHadler}>로그인</Button>)
                }
               
               <Box sx={{mt: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Typography>or</Typography>
               </Box>
               <Button fullWidth variant="outlined" sx={{mt: '10px', backgroundColor: 'white', color: 'black', borderColor: 'black'}} onClick={() => setSignInView(false)}>회원가입</Button>
            </Box>
        </Box>
    )
}