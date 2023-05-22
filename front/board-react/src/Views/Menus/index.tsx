import { Box, MenuItem, MenuList, Paper, Stack } from "@mui/material";
import React from "react";

export default function Menus() {
    return (
        <>
            <Box sx={{ display:'flex',
                        justifyContent: 'center',
                        backgroundColor: '#323232',
                        height: "100%",
                    }}>
                {/* <Card sx={{mt:5, width: 140, height: 300, backgroundColor: "#676767"}}> */}
                <Stack direction="row" spacing={2} >
                    <Paper sx={{ mt:5, width: 120, height: 300, backgroundColor: "#676767"}}>
                        <MenuList>
                        <MenuItem>Style</MenuItem>
                        <MenuItem>My account</MenuItem>
                        <MenuItem>Logout</MenuItem>
                        </MenuList>
                    </Paper>
                </Stack>
                {/* </Card> */}
            </Box>
        </>
    )
}