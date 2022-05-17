import React from 'react';

export interface HomeProps {
    name?: string;
}
export const Home: React.FC<HomeProps> = () => {

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}