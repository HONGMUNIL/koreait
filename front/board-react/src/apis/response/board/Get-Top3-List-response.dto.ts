interface GetTop3ListDto {
    boarNumber : number;
    boardContent : string | null;
    boardImgUrl : string;
    boardWriteDateTime : string;
    writerNickname : string;
    writerProfileUrl : string;
    viewCount : number;
    commentCount : number;
    likeCount : number;
}

export default GetTop3ListDto;