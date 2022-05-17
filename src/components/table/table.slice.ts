import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

export interface CoinImage {
    large: string;
    small: string;
    thumb: string;
}
export interface Coin {
    image: CoinImage;
    name: string;
    id: string;
    symbol: string;
    _24Percent: string;
    _24hVolume: string;
}

export interface TableState {
    coins: Coin[];
}

const initialState: TableState = {
    coins: []
};

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  
  reducers: {
    setCoinsList: (state, action: PayloadAction<Coin[]>) => {
        state.coins = [...action.payload];
    },
    pushCoin: (state, action: PayloadAction<Coin>) => {
        state.coins.push(action.payload);
    }
  },
});

export const { setCoinsList, pushCoin } = tableSlice.actions;

export const selectTable = (state: RootState) => state.table.coins;

export default tableSlice.reducer;