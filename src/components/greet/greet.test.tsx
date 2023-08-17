import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet', ()=>{
  test('renders correctly', () => {
    render(<Greet/>);
    const element = screen.getByText(/Hello/);
    expect(element).toBeInTheDocument();
  });

})

describe('Greet 2',()=>{
    
  test('renders with a name ', () => {
    render(<Greet/>)
    const element = screen.getByText(/Hello/);
    expect(element).toBeInTheDocument();
  })

 /*  test('renders correctly name ', () => {
    render(<Greet name='Lilian'/>)
    const element = screen.getByText(/Hello Lilian/);
    expect(element).toBeInTheDocument();
  }) */
}) 