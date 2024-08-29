import { Component } from "react"
import axios from "axios"

class CustomCard extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            ingredients: [],
            display: false
        }
    }
    componentDidMount() {
        this.fetch()
    }


    fetch = async () => {
        const { data, status } = await axios.get("https://dummyjson.com/recipes")
        if (status === 200) {
            this.setState({
                products: data.recipes
            })
        }

    }

    clickHandler = () => {
        console.log("hello")
        this.setState({
            display: !this.state.display

        })
    }
    render() {
        const { products, display} = this.state
        return (
            <div>
                {
                    products.map(eachProducts => {
                      
                        return (
                            <div key={eachProducts.id}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <h5 className="card-title">{eachProducts.name}</h5>
                                    <button className="btn btn-primary" onClick={this.clickHandler}>buton</button>
                                    <div>
                                        {
                                            eachProducts.ingredients.map(eachIngrediant => {

                                                
                                                
                                                
                                                return (
                                                    <div key={eachIngrediant.id}>
                                                        <h1>{display ?eachIngrediant : ""}</h1>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                            </div>

                        )
                    })
                }
            </div>
        )
    }
}
export default CustomCard