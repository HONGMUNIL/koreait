package com.example.demo.dto.response.product;

import com.example.demo.entity.BoardHasProductEntity;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
    
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostBoardHasProductResponseDto {
    private int boardNumber;
    private int productNumber;

    public PostBoardHasProductResponseDto(BoardHasProductEntity boardHasProductEntity) {
        this.boardNumber = boardHasProductEntity.getBoardNumber();
        this.productNumber = boardHasProductEntity.getProductNumber();
    }

}