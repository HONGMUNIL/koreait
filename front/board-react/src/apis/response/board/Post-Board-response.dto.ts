interface Dto {
    boardEntity: {
        boardNumber: number;
        boardContent: string;
        boardImgUrl1: string;
        boardImgUrl2: string | null;
        boardImgUrl3: string | null;
        tag: string;
        boardWriteTime: string;
        writerEmail: string;
        writerNickname: string;
        writerProfileUrl: string | null;
        commentCount: number;
        likeCount: number;
        viewCount: number;
    };
    commentEntity: [
        {
            boardNumber: number;
            commentNumber: number;
            writerEmail: string;
            writerNickname: string;
            writerProfileUrl: string | null;
            writerDate: string;
            commentContent: number;
        }
    ];
    likeEntity: [
        {
            boardNumber: number;
            // userEmail : string;
            // userNickname : string;
            // userProfileUrl : string | null; 좋아요 수만 올라가게 나올려면 이건 필요없는듯?
        }
    ];
    productList: [
        {
            boardNumber: number;
            productNumber: number;
            productName: string;
            productPrice: string;
            productUrl: string;
            productImgUrl: string;
        }
    ]
}

export default Dto;