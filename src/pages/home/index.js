import React, { Component } from 'react'
import {Header,Banner,Nav,Content}from '../components/home/index'
import {Box} from './styled'
export default class index extends Component {
    constructor(){
        super()
        this.setState={

        }
    }
    componentDidMount(){

        
    }
    render() {
        return (
            <Box>
                <Header/>
                <Nav/>
                <Banner/>
                <Content/>
            </Box>
        )
    }

}
