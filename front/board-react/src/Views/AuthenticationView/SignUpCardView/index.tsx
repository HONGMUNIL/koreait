import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";


import { Box, FormControl, TextField, Button, Input, InputLabel, InputAdornment, IconButton, Typography, Autocomplete, FormHelperText } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import { SignUpDto } from 'src/apis/request/auth';
import ResponseDto from 'src/apis/response';
import { SignUpResponseDto, ValidateEmailResponseDto } from 'src/apis/response/auth';
import { SIGN_UP_URL, VALIDATE_EMAIL_URL, VALIDATE_NICKNAME_URL } from 'src/constants/api';
import { useSignUpStore } from 'src/stores';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { myGender, myHeight, myWeight } from "src/apis/mock";
import validateEmailDto from "src/apis/request/auth/Validate-email.request.dto";
import validateNicknameDto from "src/apis/request/auth/Validate-nickname.request.dto";
import validateNicknameResponseDto from "src/apis/response/auth/Validate-nickname.response.dto";

interface Props {
    setSignInView: Dispatch<SetStateAction<boolean>>;
}

export default function SignUpCardView({ setSignInView }: Props) {
    //                                                   Hook                                                  //
    const { email, password, passwordCheck, nickname, height, weight, gender } = useSignUpStore();
    const { setEmail, setPassword, setPasswordCheck, setNickname, setHeight, setWeight, setGender } = useSignUpStore();
    const { emailValidate, setEmailValidate, nicknameValidate, setNicknameValidate } = useSignUpStore();
    
    const [ showPassword, setShowPassword ] = useState<boolean>(false);
    const [ matchPassword, setMatchPassword ] = useState<boolean>(false);

    //#
    const heightData = {
        options: myHeight.map((option) => option.myHeight)
    };
    const weightData = {
        options: myWeight.map((option) => option.myWeight)
    };
    const genderData = {
        options: myGender.map((option) => option.myGender)
    };
    
    //                                              Event handler                                              //
    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = event.target.value;
        const isMatched = passwordCheck === value
        setPassword(value);
        setMatchPassword(isMatched);
    }

    const onPasswordCheckChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = event.target.value;
        const isMatched = password === value
        setPasswordCheck(value);
        setMatchPassword(isMatched);
    }

    const onValidateEmailHandler = () => {
        const data: validateEmailDto = { email };
        
        axios.post(VALIDATE_EMAIL_URL, data)
        .then((response) => validateEmailResponseHandler(response))
        .catch((error) => validateEmailErrorHandler(error));
    }

    const onValidateNicknameHandler = () => {
        const data: validateNicknameDto = { nickname };

        axios.post(VALIDATE_NICKNAME_URL, data)
        .then((response) => validateNicknameResponseHandler(response))
        .catch((error) => validateNicknameErrorHandler(error));
    }
    
    const onSignUpHandler = () => {
        console.log(nicknameValidate);
        if (emailValidate) {
            alert("아이디 중복확인이 필요합니다."); 
            return;
        } 
        if (nicknameValidate) {
            alert("닉네임 중복확인이 필요합니다.");
            return;
        } 
        if (!matchPassword) {
            alert('비밀번호가 일치하지않습니다.');
            return;
        } 
        if (!email || !password || !nickname || !height || !weight || !gender) {
            alert("* 값은 필수 값입니다.");
        } 

        const data: SignUpDto = { email, password, nickname, height, weight, gender };
        
        axios.post(SIGN_UP_URL, data)
        .then((response) => signUpResponseHandler(response))
        .catch((error) => signUpErrorHandler(error));
    }
    //                                            Response handler                                            //
    const validateEmailResponseHandler = (response: AxiosResponse<any, any>) => {
        const { result, message, data } = response.data as ResponseDto<ValidateEmailResponseDto>;
        if (!result || !data) {
            console.log(message);
            setEmail('');
            return;
        }
        const validateFlag = data.result;
        // validateFlag = undefind
        console.log(validateFlag);
        if (validateFlag)  {
            setEmail('');
            setEmailValidate(validateFlag);
            alert("이미 존재하는 아이디입니다.");
            return;
        } else {
            setEmailValidate(validateFlag);
            alert("사용가능한 아이디입니다.");
        }
    }
    
    const validateNicknameResponseHandler = (response: AxiosResponse<any, any>) => {
        const { result, message, data } = response.data as ResponseDto<validateNicknameResponseDto>;

        if (!result || !data) {
            console.log(message);
            return;
        }
        const validateFlag = data.result;
        if (validateFlag) {
            setNickname('');
            setNicknameValidate(validateFlag);
            alert('이미 존재하는 닉네임입니다.');
        } else {
            setNicknameValidate(validateFlag);
            alert('사용가능한 닉네임입니다.');
        }
    }

    const signUpResponseHandler = (response: AxiosResponse<any, any>) => {
        const { result, message } = response.data as ResponseDto<SignUpResponseDto>; 
        if (result) alert("회원가입이 완료되었습니다!!");
        setSignInView(true);
        return;
    }
    
    //                                             Error handler                                             //
    const validateEmailErrorHandler = (error: any) => {
        console.log(error.response.status);
    }

    const validateNicknameErrorHandler = (error: any) => {
        console.log(error.response.status);
    }

    const signUpErrorHandler = (error: any) => {
        console.log(error.response.status);
    }

    return(
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Box width='500px' sx={{display: 'flex', flexDirection: 'column', mt:'10px'}}>
                <Typography sx={{fontSize: '25px', mb:'15px'}}>회원가입</Typography>
                <FormControl fullWidth variant="standard">
                    <InputLabel>이메일*</InputLabel>
                    {
                        emailValidate === null ? 
                        (<Input type='text' sx={{mb: '15px'}} endAdornment={
                            <InputAdornment position='end'>
                                <Button size='small' sx={{backgroundColor: 'grey', color: 'white', pl: '10px', pr: '10px', mb: '5px', borderRadius:'10px'}} onClick={onValidateEmailHandler}>중복확인</Button>
                            </InputAdornment>
                        }
                        onChange={(email) => setEmail(email.target.value)}
                        value={email}
                        />) :
                        emailValidate ?
                        (<Input type='text' sx={{mb: '15px'}} endAdornment={
                            <InputAdornment position='end'>
                                <Button size='small' sx={{backgroundColor: 'grey', color: 'white', pl: '10px', pr: '10px', mb: '5px', borderRadius:'10px'}} onClick={onValidateEmailHandler}>중복확인</Button>
                            </InputAdornment>
                        }
                        onChange={(email) => setEmail(email.target.value)}
                        value={email}
                        />) : 
                        (<Input type='text' readOnly sx={{mb: '15px', backgroundColor: 'rgba(0, 0, 0, 0.2)'}} value={email}
                        />)
                    }
                </FormControl>
                <FormControl fullWidth variant="standard">
                    <InputLabel>비밀번호*</InputLabel>
                    <Input type={showPassword ? 'text' : 'password'} sx={{mb: '15px'}} endAdornment={
                        <InputAdornment position='end'>
                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon/>}
                            </IconButton>
                        </InputAdornment>
                    }
                    value={password}
                    onChange={(password) => onPasswordChangeHandler(password)}
                    />
                </FormControl>
                <FormControl fullWidth variant="standard">
                    <InputLabel>비밀번호 확인*</InputLabel>
                    <Input type={showPassword ? 'text' : 'password'} sx={{mb: '1px'}} endAdornment={
                        <InputAdornment position='end'>
                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon/>}
                            </IconButton>
                        </InputAdornment>
                    }
                    value={passwordCheck}
                    onChange={(passwordCheck) => onPasswordCheckChangeHandler(passwordCheck)}
                    />
                    {
                        matchPassword ?
                        (<FormHelperText sx={{color: 'green', mb: '15px'}}>비밀번호가 서로 일치합니다.</FormHelperText>) :
                        (<FormHelperText sx={{color: 'red', mb: '15px'}}>비밀번호가 서로 일치하지않습니다.</FormHelperText>)
                    }
                    
                </FormControl>
                <FormControl fullWidth variant="standard">
                    <InputLabel>닉네임*</InputLabel>
                    {
                        nicknameValidate === null ? 
                        (<Input type='text' sx={{mb: '15px'}} endAdornment={
                            <InputAdornment position='end'>
                                <Button size='small' sx={{backgroundColor: 'grey', color: 'white', pl: '10px', pr: '10px', mb: '5px', borderRadius:'10px'}} onClick={onValidateNicknameHandler}>중복확인</Button>
                            </InputAdornment>
                        }
                        onChange={(nickname) => setNickname(nickname.target.value)}
                        value={nickname}
                        />) :
                        nicknameValidate ?
                        (<Input type='text' sx={{mb: '15px'}} endAdornment={
                            <InputAdornment position='end'>
                                <Button size='small' sx={{backgroundColor: 'grey', color: 'white', pl: '10px', pr: '10px', mb: '5px', borderRadius:'10px'}} onClick={onValidateNicknameHandler}>중복확인</Button>
                            </InputAdornment>
                        }
                        onChange={(nickname) => setNickname(nickname.target.value)}
                        value={nickname}
                        />) : 
                        (<Input type='text' readOnly sx={{mb: '15px', backgroundColor: 'rgba(0, 0, 0, 0.2)'}} value={nickname}
                        />)
                    }
                </FormControl>
                <FormControl fullWidth variant="standard">
                    <Autocomplete
                        {...heightData}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                        <TextField {...params} label="키*" variant="standard" id="myHeightValue" />
                        )}
                        onChange={(event, value) => (setHeight(value as string))}
                        sx={{mb: '15px'}}
                    />
                </FormControl>
                <FormControl fullWidth variant="standard">
                    <Autocomplete
                            {...weightData}
                            id="disable-close-on-select"
                            disableCloseOnSelect
                            renderInput={(params) => (
                            <TextField {...params} label="체중*" variant="standard" />
                            )}
                            onChange={(event, value) => (setWeight(value as string))}
                            sx={{mb: '15px'}}
                        />
                </FormControl>
                <FormControl fullWidth variant="standard">
                    <Autocomplete
                            {...genderData}
                            id="disable-close-on-select"
                            disableCloseOnSelect
                            renderInput={(params) => (
                            <TextField {...params} label="성별*" variant="standard" />
                            )}
                            onChange={(event, value) => (setGender(value as string))}
                            sx={{mb: '15px'}}
                        />
                </FormControl>
                <Button fullWidth sx={{mt: '70px',backgroundColor: 'black', color: 'white'}} onClick={onSignUpHandler}>회원가입</Button>
                <Box sx={{mt: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Typography>이미 회원이신가요?</Typography>
               </Box>
                <Button fullWidth variant="outlined" sx={{mt: '10px', backgroundColor: 'white', color: 'black', borderColor: 'black'}} onClick={() => setSignInView(true)}>로그인</Button>
            </Box>
        </Box>
    )
}