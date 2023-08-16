import { render, screen } from '@testing-library/react';
import Greet from '../Greet';


test('Greet renders correctly', () => {
  render(<Greet/>);
  const element = screen.getByText('Hello');
  expect(element).toBeInTheDocument();
});

test('Greet renders with a name ', () => {
  render(<Greet name = 'Areli'/>)
  const element = screen.getByText('Hello Areli');
  expect(element).toBeInTheDocument();
})
