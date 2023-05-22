package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.example.demo.dto.request.board.PostBoardProduct;
import com.example.demo.dto.request.product.PatchProductDto;
import com.example.demo.dto.request.product.PostProductDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Product")
@Table(name = "Product")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productNumber;
    private String productName;
    private String productPrice;
    private String productUrl;
    private String productImgUrl;

    public ProductEntity(PostProductDto dto) {
        this.productName = dto.getProductName();
        this.productPrice = dto.getProductPrice();
        this.productUrl = dto.getProductUrl();
        this.productImgUrl = dto.getProductImgUrl();
    }

    public ProductEntity(PostBoardProduct postBoardProduct) {
        this.productName = postBoardProduct.getProductName();
        this.productPrice = postBoardProduct.getProductPrice();
        this.productUrl = postBoardProduct.getProductUrl();
        this.productImgUrl = postBoardProduct.getProductImgUrl();
    }

    public void patch(PatchProductDto dto) {
        this.productName = dto.getProductName();
        this.productImgUrl = dto.getProductImgUrl();
        this.productPrice = dto.getProductPrice();
        this.productUrl = dto.getProductUrl();
    }
}
