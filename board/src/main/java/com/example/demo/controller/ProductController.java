package com.example.demo.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.common.constant.ApiPattern;
import com.example.demo.dto.request.product.PatchProductDto;
import com.example.demo.dto.request.product.PostProductDto;
import com.example.demo.dto.response.ResponseDto;
import com.example.demo.dto.response.product.DeleteProductResponseDto;
import com.example.demo.dto.response.product.PatchProductResponseDto;
import com.example.demo.dto.response.product.PostBoardHasProductResponseDto;
import com.example.demo.dto.response.product.PostProductResponseDto;
import com.example.demo.service.ProductService;

@RestController
@RequestMapping(ApiPattern.PRODUCT)
public class ProductController {

    @Autowired ProductService productService;
    
    private final String POST_PRODUCT = "/post-product";
    private final String PATCH_PRODUCT = "/patch-product";
    private final String DELETE_PRODUCT = "/{productNumber}";
    private final String POST_BOARD_HAS_PRODUCT = "/has-product";

    @PostMapping(POST_PRODUCT)
    public ResponseDto<PostProductResponseDto> postProduct(@AuthenticationPrincipal String email, @RequestBody PostProductDto requestBody) {
        ResponseDto<PostProductResponseDto> response = productService.postProduct(email, requestBody);
        return response;
    }

    @PostMapping(POST_BOARD_HAS_PRODUCT)
    public ResponseDto<PostBoardHasProductResponseDto> postBoardHasProduct(
    //! 
        @Valid @RequestBody PostBoardHasProductResponseDto requestBody
    ) {
        ResponseDto<PostBoardHasProductResponseDto> response = productService.postBoardHasProduct(requestBody);
        return response;
    }

    @PatchMapping(PATCH_PRODUCT)
    private ResponseDto<PatchProductResponseDto> patchProduct(
        @AuthenticationPrincipal String email,
        @RequestBody PatchProductDto dto
    ) {
        ResponseDto<PatchProductResponseDto> response = productService.patchProduct(email, dto);
        return response;
    }

    @DeleteMapping(DELETE_PRODUCT)
    public ResponseDto<DeleteProductResponseDto> deleteProduct(
        @AuthenticationPrincipal String email, 
        @PathVariable("boardNumber") int boardNumber, 
        @PathVariable("productNumber") int productNumber) {
    // public ResponseDto<DeleteProductResponseDto> deleteProduct(@AuthenticationPrincipal String email, DeleteProductDto requestBody) {
        ResponseDto<DeleteProductResponseDto> response = productService.deleteProduct(email, boardNumber, productNumber);
        return response;
    }

}
