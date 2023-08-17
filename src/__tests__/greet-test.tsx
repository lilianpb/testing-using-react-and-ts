import { render, screen } from '@testing-library/react';
import Greet from '../components/greet/Greet';


describe('Greet', ()=>{
  test('renders correctly', () => {
    render(<Greet/>);
    const element = screen.getByText(/Hello/);
    expect(element).toBeInTheDocument();
  });

})

