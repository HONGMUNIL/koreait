package com.example.demo.dto.request.board;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostBoardProduct {
    
    private String productName;
    private String productPrice;
    private String productUrl;
    private String productImgUrl; 
    
}