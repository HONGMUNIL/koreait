import { User } from '../interfaces';
import { create } from 'zustand';

interface IUserStore {
    user: User | null,
    setUser: (str: User) => void;
    resetUser: () => void;
}

const useStore = create<IUserStore>((set) => ({
    user: null,
    setUser: (user: User) => set((state) => ({...state, user})),
    resetUser: () => set((state) => ({...state, user: null}))
}));

export default useStore;