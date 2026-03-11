import { act } from "react";
import Body from "../components/Body";
import { fireEvent, render,screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MockData from "../Mocks/resListMock.json"
import "@testing-library/jest-dom"

//writing dummy fetch because actually fetch is superpower of browser which cannot be read here
global.fetch=jest.fn(() => {
    return Promise.resolve({
       json:()=>{
            return Promise.resolve(MockData)
       },
    });
});

it('should  search res list for pizza input', async ()=>{

    await act(async ()=>{
         render(
        <BrowserRouter>
         <Body/>
        </BrowserRouter>
        )
    })

    const searchBtn=screen.getByRole('button',{name:"Search"})

    //i want to check input search
    const searchInput=screen.getByTestId("searchInput")//set in the testid in <input> element
    
    fireEvent.change(searchInput,{target:{value:"pizza"}})//this target here is value inside the text box
    
    fireEvent.click(searchBtn)

    const cards=screen.getAllByTestId('resCard')//give testId for restaurantCard in restaurantCard.js
   
    // expect(btn).toBeInTheDocument()
    expect(cards.length).toBe(2)//here u go to local host and type any food item find how many restaurant shown ,u enter that number here

})

// it('should find top rated restaurant',async ()=>{
//     await act(async ()=>{
//          render(
//         <BrowserRouter>
//          <Body/>
//         </BrowserRouter>
//         )
//     })

//     // const cards=screen.getAllByTestId('resCard')

//     // expect(cards.length).toBe(4) //currently 4 are there in my local host

//     const topRatedBtn=screen.getByRole('button',{name:"Top Rated Restaurant"})

//     fireEvent.click(topRatedBtn)

//     const filteredCards=screen.getAllByTestId("resCard")

//     expect(filteredCards.length).toBe(1)
// })