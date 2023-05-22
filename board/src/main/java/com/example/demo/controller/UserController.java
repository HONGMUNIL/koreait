package com.example.demo.controller;

import com.example.demo.common.constant.ApiPattern;
import com.example.demo.dto.request.user.PatchProfileDto;
import com.example.demo.dto.request.user.ValidateEmailDto;
import com.example.demo.dto.request.user.ValidateNicknameDto;
import com.example.demo.dto.response.ResponseDto;
import com.example.demo.dto.response.user.GetUserResponseDto;
import com.example.demo.dto.response.user.PatchProfileResponseDto;
import com.example.demo.dto.response.user.ValidateEmailResponseDto;
import com.example.demo.dto.response.user.ValidateNicknameResponseDto;
import com.example.demo.service.UserService;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(ApiPattern.USER)
public class UserController {
    @Autowired
    private UserService userService;
    
    private final String GET_USER = "/";
    private final String PATCH_PROFILE = "/profile";
    private final String VALIDATE_EMAIL = "/validate/email";
    private final String VALIDATE_NICKNAME = "/validate/nickname";

    @GetMapping(GET_USER)
    public ResponseDto<GetUserResponseDto> getUser(@AuthenticationPrincipal String email) {
        ResponseDto<GetUserResponseDto> response = userService.getUser(email);
        return response;
    }

    @GetMapping(PATCH_PROFILE)
    public ResponseDto<PatchProfileResponseDto> patchProfle(
        @AuthenticationPrincipal String email,
        @Valid @RequestBody PatchProfileDto requestBody) {
        ResponseDto<PatchProfileResponseDto> response = userService.patchProfile(email, requestBody);
        return response;
    }

    @PostMapping(VALIDATE_EMAIL)
    public ResponseDto<ValidateEmailResponseDto> validateEamil(@RequestBody ValidateEmailDto requestBody) {
        ResponseDto<ValidateEmailResponseDto> response = userService.validateEmail(requestBody);
        return response;
    }

    @PostMapping(VALIDATE_NICKNAME)
    public ResponseDto<ValidateNicknameResponseDto> validateNickname (@RequestBody ValidateNicknameDto requestBody) {
        ResponseDto<ValidateNicknameResponseDto> response = userService.validateNickname(requestBody);
        return response;
    }
    
}
