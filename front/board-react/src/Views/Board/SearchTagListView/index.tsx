import { Avatar, Box, Typography, Divider } from "@mui/material";
import { GetSearchTagResponseDto } from "src/apis/response/board";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { SEARCH_TAG_URL } from "src/constants/api";
import { useParams } from "react-router-dom";
import ResponseDto from "src/apis/response";
import ImgListItem from "src/components/ImgListItem";

export default function SearchTagListView () {

    const { tag }  = useParams();
    const [ tagList, setTagList ] = useState<GetSearchTagResponseDto[]>([]);
    const [ responseDto, setResponseDto ] = useState<GetSearchTagResponseDto>();
    const [ searchResultFlag, setSearchResultFlag ] = useState<Boolean>(false);

    const getSearchList = () => {
        axios.get(SEARCH_TAG_URL(tag as string))
        .then((response) => getSearchListResponseHandler(response))
        .catch((error) => getSearchListErrorHandler(error));

    }

    const getSearchListResponseHandler = (response: AxiosResponse<any, any>) => {
        const { result, message, data } = response.data as ResponseDto<GetSearchTagResponseDto[]>;

        if (!result || !data) {
            alert(message);
            return;
        }

        setTagList(data);
        data.map((items) => setResponseDto(items));
        setSearchResultFlag(true);
    }

    const getSearchListErrorHandler = (error: any) => {
        console.log(error.response);
    }

    useEffect(() => {
        getSearchList();
    },[])

    return (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Box width='500px' sx={{display: 'flex', flexDirection: 'column', mt:'50px'}}>
                <Box sx={{display: 'flex', justifyContent: 'center', mb:'10px'}}>
                    <Typography sx={{mb:'10px', fontWeight:700}}>{"#"+tag}</Typography>
                </Box>
                <Divider />
                <Box sx={{mt:'20px', display:'flex', justifyContent:'space-around'}}>
                    <Box>
                        <Avatar sx={{width: '130px', height: '130px'}} src={responseDto?.boardImgUrl1 ? responseDto.boardImgUrl1 : ''} />
                    </Box>
                    <Box sx={{width:'150px', height:'150px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <Typography sx={{fontWeight:600}}>{tagList.length+"개의 게시물"}</Typography>
                    </Box>
                </Box>
                {
                    searchResultFlag && null ? (<ImgListItem item={tagList as GetSearchTagResponseDto[]} />) : 
                                        (<Box sx={{mt:'40px', display:'flex', justifyContent:'center'}}><Typography sx={{fontWeight:700}}>검색결과가 없습니다.</Typography></Box>)
                }
                
            </Box>
        </Box>
    )
}