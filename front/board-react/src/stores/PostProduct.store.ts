import { Product } from '../interfaces';
import { create } from 'zustand';

interface IPostProductStore {
    //^ BoardWriteView 에서 사용되는 상태
    boardContent: string;
    boardImgUrl1: string;
    boardImgUrl2: string;
    boardImgUrl3: string;
    tag: string;

    setBoardContent: (boardContent: string) => void;
    setBoardImgUrl1: (boardImgUrl1: string) => void;
    setBoardImgUrl2: (boardImgUrl2: string) => void;
    setBoardImgUrl3: (boardImgUrl3: string) => void;
    setTag: (tag: string) => void;
    
    //^ ProductWriteView 에서 사용되는 상태
    product1: Product | null;
    product2: Product | null;
    product3: Product | null;
    product4: Product | null;
    product5: Product | null;
    product6: Product | null;

    setProduct1: (product1: Product) => void;
    setProduct2: (product2: Product) => void;
    setProduct3: (product3: Product) => void;
    setProduct4: (product4: Product) => void;
    setProduct5: (product5: Product) => void;
    setProduct6: (product6: Product) => void;
}

const useStore = create<IPostProductStore>((set) => ({
    boardContent: '',
    boardImgUrl1: '',
    boardImgUrl2: '',
    boardImgUrl3: '',
    tag: '',
    
    //^ useState
    setBoardContent: (boardContent: string) => set((state) => ({...state, boardContent})),
    setBoardImgUrl1: (boardImgUrl1: string) => set((state) => ({...state, boardImgUrl1})),
    setBoardImgUrl2: (boardImgUrl2: string) => set((state) => ({...state, boardImgUrl2})),
    setBoardImgUrl3: (boardImgUrl3: string) => set((state) => ({...state, boardImgUrl3})),
    setTag: (tag: string) => set((state) => ({...state, tag})),

    product1: null,
    product2: null,
    product3: null,
    product4: null,
    product5: null,
    product6: null,

    setProduct1: (product1: Product) => set((state) => ({...state, product1})),
    setProduct2: (product2: Product) => set((state) => ({...state, product2})),
    setProduct3: (product3: Product) => set((state) => ({...state, product3})),
    setProduct4: (product4: Product) => set((state) => ({...state, product4})),
    setProduct5: (product5: Product) => set((state) => ({...state, product5})),
    setProduct6: (product6: Product) => set((state) => ({...state, product6})),
}));

export default useStore;