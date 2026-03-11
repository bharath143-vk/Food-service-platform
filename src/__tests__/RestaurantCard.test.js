import { render,screen } from "@testing-library/react"
import RestaurantCard from "../components/RestaurantCard"
import { WithPromotedLabel } from "../components/RestaurantCard"
import "@testing-library/jest-dom"
import Mocks from "../Mocks/restaurantCardMock.json"

it('should render the data inside restaurant component',()=>{
    render(<RestaurantCard resdata={Mocks}/>)

    const data=screen.getByText("Bakery World")

    expect(data).toBeInTheDocument
})

// it('should show opened label or not',()=>{
//     // const DummyCard=({name})=><div>{name}</div>

//     // const EnhancedCard=WithPromotedLabel(DummyCard)

//     // render(<EnhancedCard name="test restaurant"/>)\
//     const card=<RestaurantCard resdata={Mocks}/>
//     render(<WithPromotedLabel {...card}/>)

//     const label=screen.getByText('opened')

//     expect(label).toBeInTheDocument()
// })