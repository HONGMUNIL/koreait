import { Box, FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useNavigate } from "react-router-dom";
import { useUserStore } from "src/stores";
import { KeyboardEvent, useState } from "react";

export default function MainNavibar() {

    //          Hook          //
    const navigator = useNavigate();
    const path = useLocation();

    const { user } = useUserStore();

    const [tag, setTag] = useState<string>('');

    //          Event Handler          //
    const onSearchKeyPressHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key !== 'Enter') return;
        onSearchHandler();
    }

    const onSearchHandler = () => {
        if (!tag.trim()) {
            alert('검색어를 입력하세요.');
            return;
        }

        navigator(`/board/search-tag/${tag}`);
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FormControl variant='outlined' sx={{ mr: '10px' }}>
                <OutlinedInput
                    size='small'
                    type='text'
                    placeholder='검색어를 입력해주세요.'
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton edge='end' onClick={onSearchHandler}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    onChange={(event) => setTag(event.target.value)}
                    onKeyPress={(event) => onSearchKeyPressHandler(event)}
                />
            </FormControl>
        </Box>
    )
}