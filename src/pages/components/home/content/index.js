import React, { Component } from 'react'
import { Contents } from './styled.js'
import { connect } from 'dva';
import router from 'umi/router';

class Content extends Component {
    constructor(props) {
        super(props);
        //  this.handleLogin()
        this.setState = {

        }
    }
    componentDidMount() {

    }
    handleLogin() {
        // let { login_username, login_password } = this.state;
        let payload = {
            page:1,
            limit: 10,
        }
        new Promise((resolve, reject) => {
            this.props.dispatch({
                type: 'home/homeData',
                resolve,
                reject,
                payload
            })
        }).then((data) => {
            if (data) {

            } else {

            }
        })
    }
    renderContent() {
        let { newList } = this.props;
        if (newList.data && newList.data.length !== 0) {
            return this.renderCards();
        } else {
            return this.renderNullStatus();
        }
    }
    renderCards() {
        let { newList } = this.props;
        return (
            newList.data.map((item, index) => (
                <div className="product" key={index}
                    onClick={() => this.handleTo(item.id)}
                >
                    <div className="product__img">
                        <img src={item.img} alt="" />
                    </div>
                    <div className='product__title'>
                        <span>
                            {item.title}
                        </span>
                    </div>
                    <div className='product__price'>
                        <span>¥{item.price}</span>
                    </div>
                </div>
            ))
        )

    }
    handleTo(id) {
        router.push(`/detail?id=${id}`);
    }
    renderNullStatus() {
        this.handleLogin()
    }
    render() {
        return (
            <Contents>
                <div className="content__box">
                    <div className="content__header">
                        <span>今日新品 <i>TODAY'S NEW</i> </span>
                    </div>
                    <div className="content__con">
                        {
                            this.renderContent()
                        }
                    </div>
                </div>
            </Contents>
        )
    }
}
function mapStateToProps(state) {
    const { newList } = state.home
    return {
        newList,
    }
}
export default connect(mapStateToProps)(Content);