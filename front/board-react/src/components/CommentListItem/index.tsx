import { Avatar, Box, Divider, FormControl, OutlinedInput, Typography, Button } from "@mui/material"
import { useState, ChangeEvent } from "react";

export default function CommentListItem() {

    const [comment, setComment] = useState<string>('');
    const [commentBlankFlag, setCommentBlankFlag] = useState<Boolean>(false);

    const commentBlankCheck = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setComment(event.target.value);
        setCommentBlankFlag(true);
    }

    return (
        <Box sx={{ display: 'flex', ml: '10px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex' }}>
                    <Avatar sx={{ width: '30px', height: '30px', mt: '4px' }} src="/broken-image.jpg" />
                    <FormControl size="small" fullWidth sx={{ ml: '10px' }}>
                        <OutlinedInput onChange={(event) => commentBlankCheck(event)} value={comment} placeholder="댓글 달기" />
                    </FormControl>
                    {
                        commentBlankFlag ? (<Button size="small">게시</Button>) :
                            (<></>)
                    }

                </Box>
                <Box sx={{ display: 'flex', mt: '10px' }}>
                    <Avatar sx={{ width: '30px', height: '30px' }} src="/broken-image.jpg" />
                    <Box sx={{ display: 'flex', mt: '4px' }}>
                        <Typography sx={{ ml: '10px', fontWeight: '600', fontSize: '15px' }}>hello_123</Typography>
                        <Typography sx={{ ml: '10px', fontSize: '13px' }}>라인 디테일의 미니 원피스에 카고 팬츠를 매치해 개성을 더한 캐주얼 룩</Typography>
                    </Box>
                </Box>
                <Divider sx={{ mt: '10px' }} />
            </Box>
        </Box>
    )
}