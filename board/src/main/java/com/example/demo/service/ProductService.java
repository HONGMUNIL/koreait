package com.example.demo.service;

import com.example.demo.dto.request.product.PatchProductDto;
import com.example.demo.dto.request.product.PostProductDto;
import com.example.demo.dto.response.ResponseDto;
import com.example.demo.dto.response.product.DeleteProductResponseDto;
import com.example.demo.dto.response.product.PatchProductResponseDto;
import com.example.demo.dto.response.product.PostBoardHasProductResponseDto;
import com.example.demo.dto.response.product.PostProductResponseDto;

public interface ProductService {
    public ResponseDto<PostProductResponseDto> postProduct(String email, PostProductDto dto);

    public ResponseDto<PostBoardHasProductResponseDto> postBoardHasProduct(PostBoardHasProductResponseDto dto);

    public ResponseDto<PatchProductResponseDto> patchProduct(String email ,PatchProductDto dto);

    public ResponseDto<DeleteProductResponseDto> deleteProduct(String email,int boardNumber, int productNumber);
}
