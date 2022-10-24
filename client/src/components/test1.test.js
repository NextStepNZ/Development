import { render, screen } from '@testing-library/react';
import Test1 from './Test1';
import React from 'react';

Test1("Test ", () => {
    render(<Test1 />);
    /*const timer = screen.getByText(/Timer:/i)
    expect(timer).toBeInTheDocument();*/
})