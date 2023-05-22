package com.example.demo.dto.response.board;

import java.util.List;

import com.example.demo.entity.BoardEntity;
import com.example.demo.entity.CommentEntity;
import com.example.demo.entity.LikyEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LikeResponseDto {
    
    private BoardEntity board;

    private List<LikyEntity> likeList;

    private List<CommentEntity> commentList;
}
