// LayoutReact.tsx
import React from 'react';
import { ThirdwebProvider } from 'thirdweb/react';

const LayoutReact: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThirdwebProvider>
            <div className="layout">
                <main>{children}</main>
            </div>
        </ThirdwebProvider>
    );
};

export default LayoutReact;
