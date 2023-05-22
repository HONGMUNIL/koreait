package com.example.demo.dto.request.board;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostCommentDto {
    
    @Min(1)
    private int boardNumber;
    
    @NotBlank
    private String commentContent;
}
