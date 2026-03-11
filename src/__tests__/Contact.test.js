import { render,screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom"

describe("contact us test cases",()=>{
    //these are helper functions
beforeAll(()=>{
    console.log('Before All')
})
beforeEach(()=>{
    console.log('Before each')
})
afterAll(()=>{
    console.log('After all')
})
afterEach(()=>{
    console.log('After Each')
})


test("should load contact us component",()=>{
    render(<Contact />);

    //Querying  (it returns piece of jsx)
    const heading=screen.getByRole("heading");

    expect(heading).toBeInTheDocument()
})

test("should contain  contact text",()=>{
    render(<Contact />)

    const text=screen.getByText("Submit")

    expect(text).toBeInTheDocument()
})

test('checking input boxes',()=>{
    render(<Contact/>)

    //when multiple use getbyAll
    const inputBoxes=screen.getAllByRole('textbox')

    expect(inputBoxes.length).toBe(1)
})
})
