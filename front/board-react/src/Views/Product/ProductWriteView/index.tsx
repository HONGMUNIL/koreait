import { ChangeEvent, KeyboardEvent, useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios, { AxiosResponse } from 'axios';

import { Box, Input, IconButton } from '@mui/material'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

import { FILE_UPLOAD_URL, POST_PRODUCT_URL, authorizationHeader, mutipartHeader } from 'src/constants/api';
import { PostProductDto } from 'src/apis/request/board';
import { PostBoardResponseDto } from 'src/apis/response/board';
import ResponseDto from 'src/apis/response';
import { Product } from 'src/interfaces';
import { usePostProductStore } from 'src/stores';

export default function ProductWriteView() {
    // hook //
    const navigator = useNavigate();

    const productImgRef1 = useRef<HTMLInputElement | null>(null);
    const productImgRef2 = useRef<HTMLInputElement | null>(null);
    const productImgRef3 = useRef<HTMLInputElement | null>(null);
    const productImgRef4 = useRef<HTMLInputElement | null>(null);
    const productImgRef5 = useRef<HTMLInputElement | null>(null);
    const productImgRef6 = useRef<HTMLInputElement | null>(null);

    const [cookies] = useCookies();
    const { product1, product2, product3, product4, product5, product6 } = usePostProductStore();
    const { setProduct1, setProduct2, setProduct3, setProduct4, setProduct5, setProduct6 } = usePostProductStore();

    const [productName, setProductName] = useState<string>('');
    const [productPrice, setProductPrice] = useState<string>('');
    const [productUrl, setProductUrl] = useState<string>('');
    const [productImgUrl, setProductImgUrl] = useState<string>('');

    const accessToken = cookies.accessToken;

    // event handler //
    const onProductImageUploadButtonHandler1 = () => {
        if (!productImgRef1.current) return;
        productImgRef1.current.click();
    }
    const onProductImageUploadButtonHandler2 = () => {
        if (!productImgRef2.current) return;
        productImgRef2.current.click();
    }
    const onProductImageUploadButtonHandler3 = () => {
        if (!productImgRef3.current) return;
        productImgRef3.current.click();
    }
    const onProductImageUploadButtonHandler4 = () => {
        if (!productImgRef4.current) return;
        productImgRef4.current.click();
    }
    const onProductImageUploadButtonHandler5 = () => {
        if (!productImgRef5.current) return;
        productImgRef5.current.click();
    }
    const onProductImageUploadButtonHandler6 = () => {
        if (!productImgRef6.current) return;
        productImgRef6.current.click();
    }

    const onProductImageUploadChangeHandler1 = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const data = new FormData();
        data.append('file', event.target.files[0]);
        axios.post(FILE_UPLOAD_URL, data, mutipartHeader())
            .then((response) => productImageUploadResponseHandler1(response))
            .catch((error) => productImageUploadErrorHandler(error))
    }
    const onProductImageUploadChangeHandler2 = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const data = new FormData();
        data.append('file', event.target.files[0]);
        axios.post(FILE_UPLOAD_URL, data, mutipartHeader())
            .then((response) => productImageUploadResponseHandler2(response))
            .catch((error) => productImageUploadErrorHandler(error))
    }
    const onProductImageUploadChangeHandler3 = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const data = new FormData();
        data.append('file', event.target.files[0]);
        axios.post(FILE_UPLOAD_URL, data, mutipartHeader())
            .then((response) => productImageUploadResponseHandler3(response))
            .catch((error) => productImageUploadErrorHandler(error))
    }
    const onProductImageUploadChangeHandler4 = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const data = new FormData();
        data.append('file', event.target.files[0]);
        axios.post(FILE_UPLOAD_URL, data, mutipartHeader())
            .then((response) => productImageUploadResponseHandler4(response))
            .catch((error) => productImageUploadErrorHandler(error))
    }
    const onProductImageUploadChangeHandler5 = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const data = new FormData();
        data.append('file', event.target.files[0]);
        axios.post(FILE_UPLOAD_URL, data, mutipartHeader())
            .then((response) => productImageUploadResponseHandler5(response))
            .catch((error) => productImageUploadErrorHandler(error))
    }
    const onProductImageUploadChangeHandler6 = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const data = new FormData();
        data.append('file', event.target.files[0]);
        axios.post(FILE_UPLOAD_URL, data, mutipartHeader())
            .then((response) => productImageUploadResponseHandler6(response))
            .catch((error) => productImageUploadErrorHandler(error))
    }

    const onProductNameChangeHandler1 = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const productName = event.target.value;
        if (product1) setProduct1({ ...product1, productName });
        else {
            const product: Product = {
                productName,
                productPrice: '',
                productUrl: '',
                productImgUrl: ''
            }
            setProduct1(product);
        }
    }
    const onProductNameChangeHandler2 = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const productName = event.target.value;
        if (product2) setProduct2({ ...product2, productName });
        else {
            const product: Product = {
                productName,
                productPrice: '',
                productUrl: '',
                productImgUrl: ''
            }
            setProduct2(product);
        }
    }
    const onProductNameChangeHandler3 = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const productName = event.target.value;
        if (product3) setProduct3({ ...product3, productName });
        else {
            const product: Product = {
                productName,
                productPrice: '',
                productUrl: '',
                productImgUrl: ''
            }
            setProduct3(product);
        }
    }
    const onProductNameChangeHandler4 = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const productName = event.target.value;
        if (product4) setProduct4({ ...product4, productName });
        else {
            const product: Product = {
                productName,
                productPrice: '',
                productUrl: '',
                productImgUrl: ''
            }
            setProduct4(product);
        }
    }
    const onProductNameChangeHandler5 = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const productName = event.target.value;
        if (product5) setProduct5({ ...product5, productName });
        else {
            const product: Product = {
                productName,
                productPrice: '',
                productUrl: '',
                productImgUrl: ''
            }
            setProduct5(product);
        }
    }
    const onProductNameChangeHandler6 = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const productName = event.target.value;
        if (product6) setProduct6({ ...product6, productName });
        else {
            const product: Product = {
                productName,
                productPrice: '',
                productUrl: '',
                productImgUrl: ''
            }
            setProduct6(product);
        }
    }


    const onProductPriceChangeHandler1 = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const productPrice = event.target.value;
        if (product1) setProduct1({ ...product1, productPrice });
        else {
            const product: Product = {
                productName: '',
                productPrice,
                productUrl: '',
                productImgUrl: ''
            }
            setProduct1(product);
        }
    }
    const onProductPriceChangeHandler2 = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const productPrice = event.target.value;
        if (product2) setProduct2({ ...product2, productPrice });
        else {
            const product: Product = {
                productName: '',
                productPrice,
                productUrl: '',
                productImgUrl: ''
            }
            setProduct2(product);
        }
    }
    const onProductPriceChangeHandler3 = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const productPrice = event.target.value;
        if (product3) setProduct3({ ...product3, productPrice });
        else {
            const product: Product = {
                productName: '',
                productPrice,
                productUrl: '',
                productImgUrl: ''
            }
            setProduct3(product);
        }
    }
    const onProductPriceChangeHandler4 = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const productPrice = event.target.value;
        if (product4) setProduct4({ ...product4, productPrice });
        else {
            const product: Product = {
                productName: '',
                productPrice,
                productUrl: '',
                productImgUrl: ''
            }
            setProduct4(product);
        }
    }
    const onProductPriceChangeHandler5 = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const productPrice = event.target.value;
        if (product5) setProduct5({ ...product5, productPrice });
        else {
            const product: Product = {
                productName: '',
                productPrice,
                productUrl: '',
                productImgUrl: ''
            }
            setProduct5(product);
        }
    }
    const onProductPriceChangeHandler6 = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const productPrice = event.target.value;
        if (product6) setProduct6({ ...product6, productPrice });
        else {
            const product: Product = {
                productName: '',
                productPrice,
                productUrl: '',
                productImgUrl: ''
            }
            setProduct6(product);
        }
    }


    const onProductUrlChangeHandler1 = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const productUrl = event.target.value;
        if (product1) setProduct1({ ...product1, productUrl });
        else {
            const product: Product = {
                productName: '',
                productPrice: '',
                productUrl,
                productImgUrl: ''
            }
            setProduct1(product);
        }
    }
    const onProductUrlChangeHandler2 = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const productUrl = event.target.value;
        if (product2) setProduct2({ ...product2, productUrl });
        else {
            const product: Product = {
                productName: '',
                productPrice: '',
                productUrl,
                productImgUrl: ''
            }
            setProduct2(product);
        }
    }
    const onProductUrlChangeHandler3 = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const productUrl = event.target.value;
        if (product3) setProduct3({ ...product3, productUrl });
        else {
            const product: Product = {
                productName: '',
                productPrice: '',
                productUrl,
                productImgUrl: ''
            }
            setProduct3(product);
        }
    }
    const onProductUrlChangeHandler4 = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const productUrl = event.target.value;
        if (product4) setProduct4({ ...product4, productUrl });
        else {
            const product: Product = {
                productName: '',
                productPrice: '',
                productUrl,
                productImgUrl: ''
            }
            setProduct4(product);
        }
    }
    const onProductUrlChangeHandler5 = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const productUrl = event.target.value;
        if (product5) setProduct5({ ...product5, productUrl });
        else {
            const product: Product = {
                productName: '',
                productPrice: '',
                productUrl,
                productImgUrl: ''
            }
            setProduct5(product);
        }
    }
    const onProductUrlChangeHandler6 = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const productUrl = event.target.value;
        if (product6) setProduct6({ ...product6, productUrl });
        else {
            const product: Product = {
                productName: '',
                productPrice: '',
                productUrl,
                productImgUrl: ''
            }
            setProduct6(product);
        }
    }

    const postProduct = () => {
        const data: PostProductDto = { productName, productPrice, productUrl, productImgUrl }

        axios.post(POST_PRODUCT_URL, data, authorizationHeader(accessToken))
            .then((response) => postProductResponseHandler(response))
            .catch((error) => postProductErrorHandler(error))
    }

    const onProductWriteHandler = () => {
        if (!product1 || !product2 || !product3) {
            alert('최소 상,하의, 신발 정보는 입력해주세요.');
            return;
        }
        postProduct();
    }

    // response handler //
    const productImageUploadResponseHandler1 = (response: AxiosResponse<any, any>) => {
        const productImgUrl = response.data as string;
        if (!productImgUrl) return;
        if (product1) setProduct1({ ...product1, productImgUrl });
        else {
            const product: Product = {
                productName: '',
                productPrice: '',
                productUrl: '',
                productImgUrl
            }
            setProduct1(product);
        }
    }
    const productImageUploadResponseHandler2 = (response: AxiosResponse<any, any>) => {
        const productImgUrl = response.data as string;
        if (!productImgUrl) return;
        if (product2) setProduct2({ ...product2, productImgUrl });
        else {
            const product: Product = {
                productName: '',
                productPrice: '',
                productUrl: '',
                productImgUrl
            }
            setProduct2(product);
        }
    }
    const productImageUploadResponseHandler3 = (response: AxiosResponse<any, any>) => {
        const productImgUrl = response.data as string;
        if (!productImgUrl) return;
        if (product3) setProduct3({ ...product3, productImgUrl });
        else {
            const product: Product = {
                productName: '',
                productPrice: '',
                productUrl: '',
                productImgUrl
            }
            setProduct3(product);
        }
    }
    const productImageUploadResponseHandler4 = (response: AxiosResponse<any, any>) => {
        const productImgUrl = response.data as string;
        if (!productImgUrl) return;
        if (product4) setProduct4({ ...product4, productImgUrl });
        else {
            const product: Product = {
                productName: '',
                productPrice: '',
                productUrl: '',
                productImgUrl
            }
            setProduct4(product);
        }
    }
    const productImageUploadResponseHandler5 = (response: AxiosResponse<any, any>) => {
        const productImgUrl = response.data as string;
        if (!productImgUrl) return;
        if (product5) setProduct5({ ...product5, productImgUrl });
        else {
            const product: Product = {
                productName: '',
                productPrice: '',
                productUrl: '',
                productImgUrl
            }
            setProduct5(product);
        }
    }
    const productImageUploadResponseHandler6 = (response: AxiosResponse<any, any>) => {
        const productImgUrl = response.data as string;
        if (!productImgUrl) return;
        if (product6) setProduct6({ ...product6, productImgUrl });
        else {
            const product: Product = {
                productName: '',
                productPrice: '',
                productUrl: '',
                productImgUrl
            }
            setProduct6(product);
        }
    }

    const postProductResponseHandler = (response: AxiosResponse<any, any>) => {
        const { result, message, data } = response.data as ResponseDto<PostBoardResponseDto>
        if (!result || !data) {
            alert(message);
            return;
        }
        navigator('/');
    }

    // error handler //
    const productImageUploadErrorHandler = (error: any) => {
        console.log(error.message);
    }

    const postProductErrorHandler = (error: any) => {
        console.log(error.message);
    }

    // use effect //
    useEffect(() => {
        if (!accessToken) {
            navigator('/')
            return;
        }
    }, [])

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: '100px', pl: '450px', width: '1000px' }}>
                {/* //? 상품 업로드 박스 */}
                <Box >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        {/* //? 상품 등록박스1 */}
                        <Box sx={{ p: '15PX 15px', width: '235px', height: '285px', border: 0.3, borderRadius: 1 }}>
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ p: '15px 0' }}>
                                    <Box sx={{ width: '100%' }} >
                                        <Box sx={{ width: '100%' }} component='img' src={product1?.productImgUrl} />
                                    </Box>
                                </Box>
                                <Box sx={{}}>
                                    <IconButton onClick={() => onProductImageUploadButtonHandler1()} >
                                        <AddAPhotoIcon />
                                        <input ref={productImgRef1} hidden type='file' accept='image/*' onChange={(event) => onProductImageUploadChangeHandler1(event)} />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box sx={{ ml: '5px', mt: '15px' }}>
                                <Input sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)', width: '225px' }} disableUnderline placeholder='상품 이름'
                                    onChange={(event) => onProductNameChangeHandler1(event)} value={product1?.productName} />
                                <Input sx={{ mt: '10px', backgroundColor: 'rgba(0, 0, 0, 0.02)', width: '225px' }} disableUnderline placeholder='상품 가격'
                                    onChange={(event) => onProductPriceChangeHandler1(event)} value={product1?.productPrice} />
                                {/* //? url 이동 되는건가? */}
                                <Input sx={{ mt: '10px', mr: '5px', backgroundColor: 'rgba(0, 0, 0, 0.02)', width: '225px' }} disableUnderline placeholder='상품 구매 Url' type='url'
                                    onChange={(event) => onProductUrlChangeHandler1(event)} value={product1?.productUrl} />
                            </Box>
                        </Box >
                        {/* //? 상품 등록박스2 */}
                        <Box sx={{ p: '15PX 15px', width: '235px', height: '285px', border: 0.3, borderRadius: 1 }}>
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ p: '15px 0' }}>
                                    <Box sx={{ width: '100%' }} >
                                    <Box sx={{ width: '100%' }} component='img' src={product2?.productImgUrl} />
                                    </Box>
                                </Box>
                                <Box sx={{}}>
                                    <IconButton onClick={() => onProductImageUploadButtonHandler2()} >
                                        <AddAPhotoIcon />
                                        <input ref={productImgRef2} hidden type='file' accept='image/*' onChange={(event) => onProductImageUploadChangeHandler2(event)} />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box sx={{ ml: '5px', mt: '15px' }}>
                                <Input sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)', width: '225px' }} disableUnderline placeholder='상품 이름'
                                    onChange={(event) => onProductNameChangeHandler2(event)} value={product2?.productName} />
                                <Input sx={{ mt: '10px', backgroundColor: 'rgba(0, 0, 0, 0.02)', width: '225px' }} disableUnderline placeholder='상품 가격'
                                    onChange={(event) => onProductPriceChangeHandler2(event)} value={product2?.productPrice} />
                                <Input sx={{ mt: '10px', mr: '5px', backgroundColor: 'rgba(0, 0, 0, 0.02)', width: '225px' }} disableUnderline placeholder='상품 구매 Url' type='url'
                                    onChange={(event) => onProductUrlChangeHandler2(event)} value={product2?.productUrl} />
                            </Box>
                        </Box>
                        {/* //? 상품 등록박스3 */}
                        <Box sx={{ p: '15PX 15px', width: '235px', height: '285px', border: 0.3, borderRadius: 1 }}>
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ p: '15px 0' }}>
                                    <Box sx={{ width: '100%' }} >
                                        <Box sx={{ width: '100%' }} component='img' src={product3?.productImgUrl} />
                                    </Box>
                                </Box>
                                <Box sx={{}}>
                                    <IconButton onClick={() => onProductImageUploadButtonHandler3()} >
                                        <AddAPhotoIcon />
                                        <input ref={productImgRef3} hidden type='file' accept='image/*' onChange={(event) => onProductImageUploadChangeHandler3(event)} />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box sx={{ ml: '5px', mt: '15px' }}>
                                <Input sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)', width: '225px' }} disableUnderline placeholder='상품 이름'
                                    onChange={(event) => onProductNameChangeHandler3(event)} value={product3?.productName} />
                                <Input sx={{ mt: '10px', backgroundColor: 'rgba(0, 0, 0, 0.02)', width: '225px' }} disableUnderline placeholder='상품 가격'
                                    onChange={(event) => onProductPriceChangeHandler3(event)} value={product3?.productPrice} />
                                <Input sx={{ mt: '10px', mr: '5px', backgroundColor: 'rgba(0, 0, 0, 0.02)', width: '225px' }} disableUnderline placeholder='상품 구매 Url' type='url'
                                    onChange={(event) => onProductUrlChangeHandler3(event)} value={product3?.productUrl} />
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ mt: '20px', mb: '100px', display: 'flex', justifyContent: 'space-between' }}>
                        {/* //? 상품 등록박스4 */}
                        <Box sx={{ p: '15PX 15px', width: '235px', height: '285px', border: 0.3, borderRadius: 1 }}>
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ p: '15px 0' }}>
                                    <Box sx={{ width: '100%' }} >
                                    <Box sx={{ width: '100%' }} component='img' src={product4?.productImgUrl} />
                                    </Box>
                                </Box>
                                <Box sx={{}}>
                                    <IconButton onClick={() => onProductImageUploadButtonHandler4()} >
                                        <AddAPhotoIcon />
                                        <input ref={productImgRef4} hidden type='file' accept='image/*' onChange={(event) => onProductImageUploadChangeHandler4(event)} />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box sx={{ ml: '5px', mt: '15px' }}>
                                <Input sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)', width: '225px' }} disableUnderline placeholder='상품 이름'
                                    onChange={(event) => onProductNameChangeHandler4(event)} value={product4?.productName} />
                                <Input sx={{ mt: '10px', backgroundColor: 'rgba(0, 0, 0, 0.02)', width: '225px' }} disableUnderline placeholder='상품 가격'
                                    onChange={(event) => onProductPriceChangeHandler4(event)} value={product4?.productPrice} />
                                <Input sx={{ mt: '10px', mr: '5px', backgroundColor: 'rgba(0, 0, 0, 0.02)', width: '225px' }} disableUnderline placeholder='상품 구매 Url' type='url'
                                    onChange={(event) => onProductUrlChangeHandler4(event)} value={product4?.productUrl} />
                            </Box>
                        </Box>
                        {/* //? 상품 등록박스5 */}
                        <Box sx={{ p: '15PX 15px', width: '235px', height: '285px', border: 0.3, borderRadius: 1 }}>
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ p: '15px 0' }}>
                                    <Box sx={{ width: '100%' }} >
                                    <Box sx={{ width: '100%' }} component='img' src={product5?.productImgUrl} />
                                    </Box>
                                </Box>
                                <Box sx={{}}>
                                    <IconButton onClick={() => onProductImageUploadButtonHandler5()} >
                                        <AddAPhotoIcon />
                                        <input ref={productImgRef5} hidden type='file' accept='image/*' onChange={(event) => onProductImageUploadChangeHandler5(event)} />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box sx={{ ml: '5px', mt: '15px' }}>
                                <Input sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)', width: '225px' }} disableUnderline placeholder='상품 이름'
                                    onChange={(event) => onProductNameChangeHandler5(event)} value={product5?.productName} />
                                <Input sx={{ mt: '10px', backgroundColor: 'rgba(0, 0, 0, 0.02)', width: '225px' }} disableUnderline placeholder='상품 가격'
                                    onChange={(event) => onProductPriceChangeHandler5(event)} value={product5?.productPrice} />
                                <Input sx={{ mt: '10px', mr: '5px', backgroundColor: 'rgba(0, 0, 0, 0.02)', width: '225px' }} disableUnderline placeholder='상품 구매 Url' type='url'
                                    onChange={(event) => onProductUrlChangeHandler5(event)} value={product5?.productUrl} />
                            </Box>
                        </Box>
                        {/* //? 상품 등록박스6 */}
                        <Box sx={{ p: '15PX 15px', width: '235px', height: '285px', border: 0.3, borderRadius: 1 }}>
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ p: '15px 0' }}>
                                    <Box sx={{ width: '100%' }} >
                                    <Box sx={{ width: '100%' }} component='img' src={product6?.productImgUrl} />
                                    </Box>
                                </Box>
                                <Box sx={{}}>
                                    <IconButton onClick={() => onProductImageUploadButtonHandler6()} >
                                        <AddAPhotoIcon />
                                        <input ref={productImgRef6} hidden type='file' accept='image/*' onChange={(event) => onProductImageUploadChangeHandler6(event)} />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box sx={{ ml: '5px', mt: '15px' }}>
                                <Input sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)', width: '225px' }} disableUnderline placeholder='상품 이름'
                                    onChange={(event) => onProductNameChangeHandler6(event)} value={product6?.productName} />
                                <Input sx={{ mt: '10px', backgroundColor: 'rgba(0, 0, 0, 0.02)', width: '225px' }} disableUnderline placeholder='상품 가격'
                                    onChange={(event) => onProductPriceChangeHandler6(event)} value={product6?.productPrice} />
                                <Input sx={{ mt: '10px', mr: '5px', backgroundColor: 'rgba(0, 0, 0, 0.02)', width: '225px' }} disableUnderline placeholder='상품 구매 Url' type='url'
                                    onChange={(event) => onProductUrlChangeHandler6(event)} value={product6?.productUrl} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* <Fab sx={{ position: 'fixed', bottom: '50px', right: '100px' }} onClick={() => onProductWriteHandler()}>
                <CreateIcon />
            </Fab> */}
        </>
    )
 
}