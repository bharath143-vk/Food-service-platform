import { Provider } from "react-redux"
import Header from "../components/Header"
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";

import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom"

// it('should render Header component with login button',()=>{

//     render(
//         //if we write only header it will give error because there is some react redux code is there it can't handle
//         //so wrap it with Provider
//         //it will also through error because Link exist in header which can't be understood
//         //wrap all with BrowserRouter
//         <BrowserRouter>
//             <Provider store={appStore}>
//                 <Header />
//             </Provider>
//         </BrowserRouter>
//     )

//     const loginButton=screen.getByRole('button',{name:'Login'})
    
//     expect(loginButton).toBeInTheDocument()
// });

it('should render header component with home',()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    )

    const home=screen.getByText('Home')

    expect(home).toBeInTheDocument();
});

