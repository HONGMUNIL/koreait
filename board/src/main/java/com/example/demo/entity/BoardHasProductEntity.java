package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import com.example.demo.entity.primaryKey.BoardHasProductPK;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "BoardHasProduct")
@Table(name = "BoardHasProduct")
@IdClass(BoardHasProductPK.class)
public class BoardHasProductEntity {
    @Id
    private int boardNumber;
    @Id
    private int productNumber;
    
}
