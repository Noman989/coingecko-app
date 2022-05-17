import React from 'react';

export interface NavProps {
    name?: string;
}
export const Nav: React.FC<NavProps> = () => {

    return (
        <div>
            <h1>Nav</h1>
        </div>
    )
}