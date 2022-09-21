import React, { useState } from 'react';
import ReactDom from "react-dom/client";

const ButtonChange = styled(Button)`
  opacity: 0.7;
  ${({ active }) =>
        active &&
        `
    opacity: 1; 
  `}
`;

const pages = ["Home", "Quiz", "Test", "Mark", "Logout"]

function SwitchPage() {
    const [active, setactive] = useState(types[0]);
    return (
        <div>
            {pages.map((page) => (
                <ButtonChange active={active === page} onClick={() => setactive(page)}>
                    {page}
                </ButtonChange>
            ))}
        </div>
    )
}

export default function App() {
    return (
        <SwitchPage />
    );
}