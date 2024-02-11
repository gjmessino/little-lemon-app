import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from "./BookingForm";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the Booking Form Heading'), () => {
  render(<BookingForm/>);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
}
test('Renders submit from booking'), () =>{
  render(<BookingForm onSubmit = {handleSubmit}/>)
  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);
  expect(submitButton).toHaveAttribute(disabled);
}
test('Render initializeTime function'), () =>{

}

test('Render updateTime function'), () => {

}