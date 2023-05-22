import { Box } from '@mui/material'
import React from 'react'
import BoardWriteView from '../Board/BoardWriteView'
import ProductWriteView from '../Product/ProductWriteView'

export default function WriteView() {
  
  return (
    <Box>
        <BoardWriteView />
        <ProductWriteView />
    </Box>
  )
}