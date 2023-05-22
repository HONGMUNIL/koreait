import { Box, Grid, Typography } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import ResponseDto from "src/apis/response";
import { GetTop3ListDto } from "src/apis/response/board";
import { GET_TOP3_LIST_URL } from "src/constants/api";

export default function MainHead() {

    //          Hook          //
    const [top3List, setTop3List] = useState<GetTop3ListDto[]>([]);

    //          Event Handler          //
    const getTop3List = () => {
        axios.get(GET_TOP3_LIST_URL)
            .then((response) => getTop3ListResponseHandler(response))
            .catch((error) => getTop3ListErrorHandler(error));
    }

    //           Response Handler           //
    const getTop3ListResponseHandler = (response: AxiosResponse<any, any>) => {
        const { result, message, data } = response.data as ResponseDto<GetTop3ListDto[]>;
        if (!result || data === null) return;
        setTop3List(data);
    }

    //          Error Handler          //
    const getTop3ListErrorHandler = (error: any) => {
        console.log(error.message);
    }

    //          Use Effect         //
    useEffect(() => {
        getTop3List();
    }, []);

    return (
        <Box sx={{ 
                justifyContent: 'center',
                alignItems: 'center',
                mt: '40px',
                ml: '120px',
                mr: '120px',
                mb: '40px' 
                }}>
            <Typography sx={{ fontSize: '24px', fontWeight: 400, p: '24px', textAlign: 'center' }}>인기 게시물</Typography>
            <Grid container spacing={3}>
                {top3List.map((item) => (
                    <Grid item sm={12} md={4}>
                        {/* <PreviewCard previewItem={item} /> */}
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}