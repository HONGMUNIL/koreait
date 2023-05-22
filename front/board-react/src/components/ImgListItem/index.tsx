import { Avatar, Box, ImageList, ImageListItem, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GetSearchTagResponseDto } from "src/apis/response/board";

interface Props {
    item: GetSearchTagResponseDto[];
}

export default function ImgListItem({item}: Props) {

    const navigator = useNavigate();

    return (
        <ImageList sx={{ width: '470px', height: '100%' }} cols={3}>
        {
            item.map((item) => (
                <ImageListItem key={item.boardImgUrl1} sx={{display:'block'}}>
                    <Box
                        sx={{ width: '150px', height: '150px', objectFit: 'cover', objectPosition: '0 0' }}
                        component='img'
                        src={`${item.boardImgUrl1}?w=150&h=150&fit=crop&auto=format`}
                        srcSet={`${item.boardImgUrl1}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.boardImgUrl1}
                        loading="lazy"
                        onClick={() => navigator(`/board/${item.boardNumber}`)}
                        />
                    </ImageListItem>
                ))
            }
            </ImageList>
    )
    }