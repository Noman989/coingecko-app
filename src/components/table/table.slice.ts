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
    gain: boolean;
    _24hVolume: string;
    chartData: number[];
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
        const found = {val: false, index: 0};
        state.coins.map((coin, index) => {
            if (coin.id === action.payload.id) {
                found.val = true;
                found.index = index;
            }
        })
        if (found.val)
            state.coins[found.index] = action.payload;
        else state.coins.push(action.payload);
    }
  },
});

export const { setCoinsList, pushCoin } = tableSlice.actions;

export const selectTable = (state: RootState) => state.table.coins;

export default tableSlice.reducer;