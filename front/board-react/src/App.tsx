import { useEffect } from 'react';
import './App.css';
import { Box, Container, Grid, } from '@mui/material'
import { Route, Routes, useLocation } from 'react-router-dom';
import { useUserStore } from './stores';
import { useCookies } from 'react-cookie';
import { GET_USER_URL, authorizationHeader } from './constants/api';
import axios, { AxiosResponse } from 'axios';
import ResponseDto from './apis/response';
import NavigationBar from './views/NavigationBar';
import Menus from './views/Menus';
import { GetUserResponseDto } from './apis/response/user';
import AuthenticationView from './views/AuthenticationView'
import Main from './views/Main';
import WriteView from './views/WriteView';



function App() {

  const path = useLocation();
  const { setUser } = useUserStore();
  const [cookies] = useCookies();

const getUser = (accessToken: string) => {
  axios.get(GET_USER_URL, authorizationHeader(accessToken))
  .then((response) => getUserResponseHandler(response))
  .catch((error) => getUserErrorHandler(error));
}

const getUserResponseHandler = (response: AxiosResponse<any, any>) => {
  const { result, message, data } = response.data as ResponseDto<any>;
  if (!result || !data) {
    return;
  }
  const user = data as GetUserResponseDto;
  setUser(user);
}

const getUserErrorHandler = (error: any) => {
  console.log(error.message);
}

useEffect(() => {
  const accessToken = cookies.accessToken;
  if (accessToken) getUser(accessToken);
}, [path]);

  return (
    <>
      <Box flexGrow={1}>
        <NavigationBar />
        <Grid container spacing={2} margin={0}>
          <Grid xs={2} sm={0}>
            <Menus />
          </Grid>
          <Grid xs={10}>
          <Routes>
            <Route path='/' element={(<Main />)} />
            <Route path='/auth' element={(<AuthenticationView />)} />
            {/* <Route path='/myPage' element={(<MyPageView />)} /> */}
            <Route path='/board'>
            <Route path='post-board' element={(<WriteView />)} />
            {/* <Route path='search/:content' element={(<SearchView />)} />
            <Route path='detail/:boardNumber' element={(<BoardDetailView />)} />
            <Route path='update/:boardNumber' element={(<BoardUpdateView />)} /> */}
          </Route>
          </Routes>
          {/* { path.pathname !== '/auth' && (<Footer />) } */}
          </Grid>
          
        </Grid>
      </Box>
    </>
  );
}

export default App;
