import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();

 class ProductProvider extends Component {
    state={
        products:storeProducts,
        detailProduct:detailProduct,
        modalOpen:false,
        modalProduct:detailProduct,
    }
    componentDidMount(){
        this.setProducts();
    }
    setProducts =()=>{
        let tempProducts =[];
        storeProducts.forEach(item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        })
        this.setState(()=>{
            return {products:tempProducts};
        })
    };
    getItem = (id) => {
        const product = this.state.products.find(item => item.id ===id);
        return product;
    };

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product}
        })
    };
    handleDetailR = id => {
        if(id === storeProducts.length){
            const product = this.getItem(1);
        this.setState(()=>{
            return {detailProduct:product}
        })
        } else {const product = this.getItem(id+1);
            this.setState(()=>{
                return {detailProduct:product}
            })}
        
    };
    handleDetailL = id => {
        if(id === 1 ){
            const product = this.getItem(1);
        this.setState(()=>{
            return {detailProduct:product}
        })
        } else {const product = this.getItem(id-1);
            this.setState(()=>{
                return {detailProduct:product}
            })}
        
    };
    
   
    
    
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                handleDetailR:this.handleDetailR,
                handleDetailL:this.handleDetailL,
                
            }}>
             {this.props.children}   
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer}
