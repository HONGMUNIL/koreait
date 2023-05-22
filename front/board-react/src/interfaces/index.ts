import Board from "./Board.interface";
import BoardHasProduct from "./BoardHasProduct";
import Comment from "./Comment.interface";
import Liky from "./Liky.interface";
import Product from "./Product.interface";
import User from "./User.interface";

export interface IBoardItem {
    boardNumber : number;
    boardContent : string;
    boardImgUrl1 : string;
    boardImgUrl2 : string | null;
    boardImgUrl3 : string | null;
    tag : string;
    boardWriteTime : string;
    writerEmail : string;
    writerNickname : string;
    writerProfileUrl : string | null;
    commentCount : number;
    likeCount : number;
    viewCount : number;
}

export interface ICommentItem {
    commentWriterNickname : string;
    commentWriterProfileUrl : string | null;
    commentWriterDate : string;
    commentContent : number;
}

export interface ILikyItem {
    likeUserEmail : string;
    likeUserNickname : string;
    likeUserProfileUrl : string | null;
}

export interface IProductItem {
    postedProductName : string;
    postedProductPrice : number;
    postedProductUrl : string;
    postdeProductImgUrl : string; //? 굳이 필요한가???? 
}

export interface IUser {
    email : string;
    password : string;
    nickname : string;
    profile : string | null;
    height : string;
    weight : string;
    gender : string;
}

export interface IBoardHasProduct {
    boardNumber: number;
    productNumber: number;
}

export type { Board, Comment, Liky, Product, User, BoardHasProduct }