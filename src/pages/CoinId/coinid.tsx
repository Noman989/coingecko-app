import React from "react";
import { useParams } from 'react-router-dom';

export interface CoinIdProps{
    name?: string;
}
export const CoinId: React.FC<CoinIdProps> = () => {
    const params = useParams();

    return (
        <div>
            {params.coinid}
        </div>
    )
}