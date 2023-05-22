interface PostCommendResponseDto {
    "board": {
        "boardNumber": number,
        "boardContent": string | null,
        "boardImgUrl1": string,
        "boardImgUrl2": string | null,
        "boardImgUrl3": string | null,
        "tag": string,
        "boardWriteTime": string,
        "writerEmail": string,
        "writerNickname": string,
        "writerProfileUrl": string | null
        "commentCount": number,
        "likeCount": number,
        "viewCount": number,
    },

    "user": {
        "email": string;
        "nickname": string;
        "profile": string | null;
        "height": string;
        "weight": string;
        "gender": string;
    },

    "commentList": [
        {
            "boardNumber": number,
            "commentContent": string,
            "commentNumber": number,
            "writerDate": string,
            "writerEmail": string,
            "writerNickname": string,
            "writerProfileUrl": string | null
        }
    ],
    
    "likeList": [
        {
            "boardNumber": number,
            "userEmail": string,
            "userNickname": string,
            "userProfileUrl": string | null
        }
    ],

    "productList": [
        {
            "productNumber": number,
            "productName": string | null,
            "productPrice": string | null,
            "productUrl": string | null,
            "productImgUrl": string | null
        }
    ]
}

export default PostCommendResponseDto;