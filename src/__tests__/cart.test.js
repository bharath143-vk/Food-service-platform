import { fireEvent, render,screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import { BrowserRouter, ScrollRestoration } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import JSDOMEnvironment from "jest-environment-jsdom";
import Mock_data from "../Mocks/resCategoryMock.json"
import { act } from "react";
import "@testing-library/jest-dom"
import Header from "../components/Header";
import { waitFor } from "@testing-library/react";
import Cart from "../components/Cart";
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(Mock_data)
        }
    });
})

it('should render restaurantMenu component',async()=>{

    await act(async ()=>{
        render(
        <Provider store={appStore}>
            <BrowserRouter>
                <RestaurantMenu/>
            </BrowserRouter>
        </Provider>
        )
    })

    const accordianHeader=screen.getByText('Rice & Biryanis(6)')

    expect(accordianHeader).toBeInTheDocument()

})

it('should render items in restaurant Menu',async()=>{

    await act(()=>{
        render(
            <Provider store={appStore}>
               <BrowserRouter>
               <RestaurantMenu/>
               </BrowserRouter>
            </Provider>

        )
    })

    const accordianHeader=screen.getByText('Rice & Biryanis(6)')
    fireEvent.click(accordianHeader)
    const getFoodItems=screen.getAllByTestId('foodItem')

    expect(getFoodItems.length).toBe(6)

})

it('should check whether cart is updated ',async()=>{

    await act(()=>{
        render(
            <Provider store={appStore}>
               <BrowserRouter>
               <Header/>
               <RestaurantMenu/>
               </BrowserRouter>
            </Provider>

        )
    })

    const accordianHeader=screen.getByText('Rice & Biryanis(6)')

    const cart=screen.getByText('Cart -(0items)')

    fireEvent.click(accordianHeader)
   
    const addBtn=screen.getAllByRole('button',{name:'Add+'})

    fireEvent.click(addBtn[0])

    const cartChange=screen.getByText('Cart -(1items)')

   expect(cartChange).toBeInTheDocument()

})

it('should check whether cart page is updated',async()=>{
    await act(()=>{
        render(
            <Provider store={appStore}>
               <BrowserRouter>
               <Header/>
               <Cart />
               <RestaurantMenu/>
               </BrowserRouter>
            </Provider>

        )
    })

   const accordianHeader=screen.getByText('Rice & Biryanis(6)')

    

    fireEvent.click(accordianHeader)

    expect(screen.getAllByTestId('foodItem').length).toBe(6)
   
    const addBtn=screen.getAllByRole('button',{name:'Add+'})

    fireEvent.click(addBtn[0])

    
   //here in accordian actually 6 items are there after clicking on add one item will added 
   //to the cart ,so here itemList component is rendered here also testid is 'foodItem' only
   // after clicking add buttion one will be added so 6+1=7
   
    await waitFor(() => {
    expect(screen.getAllByTestId('foodItem').length).toBe(7);
  });
})