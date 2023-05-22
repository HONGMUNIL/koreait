//? 토큰값을 가져오기 위함.
export const authorizationHeader = (accessToken: string) => {
    return {headers: { Authorization: `Bearer ${accessToken}` }};
}
//? 모든 데이터 값을 인코딩 하지 않았음을 명시.  (파일이나 이미지를 전송하기 위해 사용함.)
export const mutipartHeader = () => {
    return { headers: { 'Content-Type': 'multipart/form-data' }};
}

const HOST = 'http://localhost:4040/';

export const SIGN_UP_URL = `${HOST}auth/sign-up`;
export const SIGN_IN_URL = `${HOST}auth/sign-in`;

export const VALIDATE_EMAIL_URL = `${HOST}api/user/validate/email`;
export const VALIDATE_NICKNAME_URL = `${HOST}api/user/validate/nickname`;

export const GET_USER_URL = `${HOST}api/user/`;
export const PATCH_PROFILE_URL = `${HOST}api/user/profile`;

export const GET_LIST_URL = `${HOST}api/board/list`;
export const GET_MY_LIST_URL = `${HOST}api/board/my-list`;
export const GET_TOP3_LIST_URL = `${HOST}api/board/top3-list`;
export const GET_TOP15_SEARCH_WORD_URL = `${HOST}api/board/top15-search-word`;
export const GET_SEARCH_TAG = (tag: string) => `${HOST}api/board/search-tag/${tag}`;

export const POST_BOARD_URL = `${HOST}api/board/post-board`;
export const POST_COMMENT_URL = `${HOST}api/board/comment`;
export const POST_LIKE_LIST_URL = `${HOST}api/board/like-list`;
export const LIKE_URL = `${HOST}api/board/like`;

export const POST_PRODUCT_URL = `${HOST}product/post-product`;

export const POST_BOARD_HAS_PRODUCT = `${HOST}product/has-product`
export const PATCH_BOARD_URL = `${HOST}api/board/`;
export const PATCH_PRODUCT_RUL = `${HOST}product/patch-product`;

export const GET_BOARD_URL = (boardNumber: string) => `${HOST}api/board/${boardNumber}`;
export const GET_SEARCH_LIST_URL = (content: string, previous: string) => previous ? `${HOST}api/board/search-list/${content}/${previous}` : `${HOST}api/board/search-list/${content}`;
export const GET_TOP15_RELATED_SEARCH_WORD_URL = (content: string) => `${HOST}api/board/top15-related-search-word/${content}`

export const DELETE_BOARD_URL = (boardNumber: string) => `${HOST}api/board/${boardNumber}`;
export const DELETE_PRODUCT_URL = (productNumber: string) => `${HOST}product/${productNumber}`;

export const FILE_UPLOAD_URL = `${HOST}file/upload`;
export const GET_FILE_URL = (fileName: string) => `${HOST}file/${fileName}`;

//? 중복체크는 로그인뷰 짜면서 넣겠삼.