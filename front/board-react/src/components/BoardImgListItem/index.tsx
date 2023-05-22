import { Box, IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Board } from "src/interfaces";
import { useState, useEffect, MouseEvent } from "react";

interface Props {
    item: Board;
}

export default function BoardImgListItem({item}: Props) {
    
    const [ boardImgUrl, setBoardImgUrl ] = useState<string>();
    const [ showFirstImg, setShowFirstImg ] = useState<boolean>(true);
    const [ showSecondImg, setShowSecondImg ] = useState<boolean>(false);
    const [ showThirdImg, setShowThirdImg ] = useState<boolean>(false);

    const onNextImg = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        if (showFirstImg) {
            if (item.boardImgUrl2) {
                setShowFirstImg(false);
                setBoardImgUrl(item.boardImgUrl2);
                setShowSecondImg(true);
            }
        }
        
        if (showSecondImg) {
            if (item.boardImgUrl3) {
                setShowSecondImg(false);
                setBoardImgUrl(item.boardImgUrl3);
                setShowThirdImg(true);
            }
        }
        
    }
    const onPrevImg = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        if (showSecondImg) {
            setShowFirstImg(true);
            setBoardImgUrl(item.boardImgUrl1);
            setShowSecondImg(false);
        }
        if (showThirdImg) {
            if (item.boardImgUrl2) {
                setShowSecondImg(true);
                setBoardImgUrl(item.boardImgUrl2);
                setShowThirdImg(false);
            }
        }
    }

    useEffect(() => {
        setBoardImgUrl(item.boardImgUrl1);
    },[])

    return (
        <Box sx={{display:'flex', justifyContent:'center'}}>
            <IconButton sx={{top:'20px'}} onClick={(event) => onPrevImg(event)}>
                <ArrowBackIosNewIcon sx={{fontSize:'35px'}} />
            </IconButton>

            {
                showFirstImg ? (<Box sx={{width:'100%', height:'100%'}} component='img' src={boardImgUrl}/>) : 
                showSecondImg ? (<Box sx={{width:'100%', height:'100%'}} component='img' src={boardImgUrl}/>) : 
                showThirdImg ? (<Box sx={{width:'100%', height:'100%'}} component='img' src={boardImgUrl}/>) : (<></>)
            }

            <IconButton sx={{top:'20px'}} onClick={(event) => onNextImg(event)}>
                <ArrowForwardIosIcon sx={{fontSize:'35px'}} />
            </IconButton>
        </Box>
    )
}