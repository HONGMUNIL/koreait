export const getExpireTime = (expiredTime: number) => {
    const now = new Date().getTime();
    const tokenExpriedTime = new Date(now + expiredTime);
    
    return tokenExpriedTime;
}