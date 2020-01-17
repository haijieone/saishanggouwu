import React, { Component } from 'react'
import { Header, Nav } from '../components/home/index'
import { Contents } from './styled.js'
export default class index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Nav />
                     <Contents>
                <div className="content__con">
                    <div className="product" 
                        onClick={() => this.handleTo()}
                    >
                        <div className="product__img">
                            <img src='' alt="" />
                        </div>
                        <div className='product__title'>
                            <span>
                               424214
                            </span>
                        </div>
                        <div className='product__price'>
                            <span>¥520</span>
                        </div>
                    </div>
                    <div className="product" 
                        onClick={() => this.handleTo()}
                    >
                        <div className="product__img">
                            <img src='' alt="" />
                        </div>
                        <div className='product__title'>
                            <span>
                               424214
                            </span>
                        </div>
                        <div className='product__price'>
                            <span>¥520</span>
                        </div>
                    </div>
                    <div className="product" 
                        onClick={() => this.handleTo()}
                    >
                        <div className="product__img">
                            <img src='' alt="" />
                        </div>
                        <div className='product__title'>
                            <span>
                               424214
                            </span>
                        </div>
                        <div className='product__price'>
                            <span>¥520</span>
                        </div>
                    </div>
                    <div className="product" 
                        onClick={() => this.handleTo()}
                    >
                        <div className="product__img">
                            <img src='' alt="" />
                        </div>
                        <div className='product__title'>
                            <span>
                               424214
                            </span>
                        </div>
                        <div className='product__price'>
                            <span>¥520</span>
                        </div>
                    </div>
                    <div className="product" 
                        onClick={() => this.handleTo()}
                    >
                        <div className="product__img">
                            <img src='' alt="" />
                        </div>
                        <div className='product__title'>
                            <span>
                               424214
                            </span>
                        </div>
                        <div className='product__price'>
                            <span>¥520</span>
                        </div>
                    </div>
                </div>
                     </Contents>

            </div>
        )
    }
}
