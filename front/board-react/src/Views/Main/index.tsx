import { Box } from "@mui/material";
import MainHead from "./Mainheader";
import MainContents from "./MainContents";
import MainNavibar from "./ MainNavibar";

export default function Main(){
    return (
        <Box>
            <MainHead/>
            <MainNavibar/>
            <MainContents/>
        </Box>
    )
}