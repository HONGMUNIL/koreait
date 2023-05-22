import { AppBar, Box, Button, IconButton, InputBase, Toolbar, Typography, alpha, styled } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useNavigate } from "react-router-dom";
import { useUserStore } from "src/stores";
import { useEffect } from "react";
import { useCookies } from "react-cookie";



export default function NavigationBar() {

    //          Hook          //
    const navigator = useNavigate();
    const path = useLocation();

    const [ cookies, setCookies ] = useCookies();

    const accessToken = cookies.accessToken;

    const { user, resetUser } = useUserStore();

    //          Event Handler          //
    const onLogoutHandler = () => {
        setCookies('accessToken', '', { expires: new Date(), path: '/' });
        resetUser();
        navigator('/');
    }

    //          Use Effect         //
    useEffect(() => {
        if(!accessToken) {
            navigator('/auth');
            return;
        }
    },[]);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "#353535" }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            {/* <MenuIcon /> 앱 로고 들어갈 것 */}
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            로고 제목
                        </Typography>
                        {path.pathname !== '/auth' &&
                            (user ?
                                (
                                    <Button variant='outlined' sx={{ borderColor: '#000000', color: '#000000' }} onClick={onLogoutHandler}>
                                        로그아웃
                                    </Button>
                                ) : (
                                    <Button
                                        color="inherit"
                                        sx={{ pl: "15px", pr: "15px" }}
                                        onClick={() => navigator('/auth')}
                                    >
                                        로그인
                                    </Button>
                                )
                            )
                        }

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}