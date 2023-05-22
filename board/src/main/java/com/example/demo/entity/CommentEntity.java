package com.example.demo.entity;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.example.demo.dto.request.board.PostCommentDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Comment")
@Table(name = "Comment")
public class CommentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int commentNumber;
    private int boardNumber;
    private String writerEmail;
    private String writerNickname;
    private String writerProfileUrl;
    private String writerDate;
    private String commentContent;

    public void patchProfile(String profile) {
        this.writerProfileUrl = profile;
    }

    public CommentEntity(UserEntity userEntity, PostCommentDto dto) {
        Date now = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        this.writerEmail = userEntity.getEmail();
        this.writerNickname = userEntity.getNickname();
        this.boardNumber = dto.getBoardNumber();
        this.writerDate = simpleDateFormat.format(now);
        this.commentContent = dto.getCommentContent();
        
    }
}
