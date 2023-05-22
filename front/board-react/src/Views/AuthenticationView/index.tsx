import { useState } from "react";
import SignUpCardView from "./SignUpCardView";
import { Box, Card, Grid, Typography } from "@mui/material";
import SignInCardView from "./SingInCardView";


export default function AuthenticationView() {

    const [signInView, setSignInView] = useState<boolean>(true);

    return (
        <Box sx={{pr: "120px", pl: "120px"}}>
        <Grid container spacing={2}>
            <Grid item lg={6} sm={12}>
                <Card sx={{display: 'flex', 
                            height: '700px', 
                            flexDirection: 'column', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            mt: '100px',
                            pt: '50px', pb: '30px', pl: '50px', pr: '50px'
                            }}>
                    {/* <ContentPasteTwoToneIcon sx={{fontSize: 40}} /> */}
                    <Typography variant="h4">대충 여긴 이미지 들어가서</Typography>
                    <Typography variant="h4">슬라이드 형태로 ㄱㄱ</Typography>
                </Card>
            </Grid>
            <Grid item lg={6} sm={12}>
                <Card sx={{height: '700px', mt: '100px', mb: '80px', pt: '50px', pb: '30px', pl: '50px', pr: '50px'}}>
                    {signInView ? (<SignInCardView setSignInView={setSignInView} />) : (<SignUpCardView setSignInView={setSignInView} />)}
                </Card>
            </Grid>
        </Grid>
    </Box>
    )
}