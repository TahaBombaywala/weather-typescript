import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FirstForm from "../FirstForm";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";


const MockFirstForm = () => {
  return (
    <BrowserRouter>
      <FirstForm />
    </BrowserRouter>
  );
};

// const mockSetState = jest.fn();
// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useState: initial => [initial, mockSetState]
// }));
// const coll = [{id: 1, name:'Test'}, {id: 2, name:'Test2'}];

describe("first form validation", () => {

  it("should render input element", async () => {
    render(<MockFirstForm />);
    const inputElement = screen.getByPlaceholderText(/Enter Country!!/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type into the input", async () => {
    render(<MockFirstForm />);
    const inputElement =
      screen.getByPlaceholderText<HTMLInputElement>(/Enter Country!!/i);
    fireEvent.change(inputElement, {
      target: { value: "india" },
    });
    expect(inputElement.value).toBe("india");
  });

  it("should have non-empty input when search button is clicked", async () => {
    render(<MockFirstForm />);
    const inputElement =
      screen.getByPlaceholderText<HTMLInputElement>(/Enter Country!!/i);
    const buttonElement = screen.getByRole("button", {
      name: /Submit/i,
    });
    fireEvent.change(inputElement, {
      target: { value: "india" },
    });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("india");
  });

  // it("should shown Country not found while entered wrong country && should shown loading while processing data ", async () => {
  //   render(<MockFirstForm />);
  //   const inputElement =
  //     screen.getByPlaceholderText<HTMLInputElement>(/Enter Country!!/i);
  //   const buttonElement = screen.getByRole("button", {
  //     name: /Submit/i,
  //   });
  //   fireEvent.change(inputElement, {
  //     target: { value: "jndjdd" },
  //   });
  //   fireEvent.click(buttonElement);
  //   expect(inputElement).tobe("Country Not Found!!!");
  // });

  // it("should shown name must not be empty. && button should be disables when user does not type any data to the input field. ", async () => {
  //   render(<MockFirstForm />);
  //   const inputElement =
  //     screen.getByPlaceholderText<HTMLInputElement>(/Enter Country!!/i);
  //   const buttonElement = screen.getByRole("button", {
  //     name: /Submit/i,
  //   });
  //   fireEvent.change(inputElement, {
  //     target: { value: "" },
  //   });
  //   fireEvent.click(buttonElement);
  //   expect(inputElement).toBe("Name must not be empty.");
  //   expect(buttonElement).toBeDisabled();
  // });

  // it("should shown loading while processing data ", () => {
  //   render(<MockFirstForm />);
  //   const loaderElement = screen.getByTestId("result-map-0")
  //   const buttonElement = screen.getByRole("button", {
  //     name: /Submit/i,
  //   });
  //   // const loader = screen.getByText(/loading...../i);
  //   fireEvent.click(buttonElement);
  //   expect(loaderElement.innerHTML).toBe('loading.....');
    
  // // expect(inputElement).toBe("loading.....");
  // });

  // it('small container visible only when val is true', () => {
  //   const {queryByText, getByTestId} = render(<MockFirstForm />);
  //   const clickButton = getByTestId("result-map-0");
  //   fireEvent.click(clickButton);
  //   expect(queryByText('loading.....')).toBeInDocument();
  // });

 
// it('renders correctly with groupId', () => {
//     const wrapper = render(
//         <MockFirstForm loading />
//     );
//     setTimeout(() => {
//         expect(wrapper).toMatchSnapshot();
//         expect(mockSetState).toHaveBeenCalledWith(/loading...../i);
//     }, 100);
// });

  });

