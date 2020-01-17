import React, { Component } from 'react'
import router from 'umi/router';
import styles from './index.less'

 class Header extends Component {
    render() {
        return (
            <div className={styles.header} >
                <span onClick={this.handleToLogin.bind(this)}>登录</span>

                <span>注册</span>
                <span>商家入驻</span>
                <span>我的商城</span>
            </div>
        )
    }
    handleToLogin(){
        router.push('/list')
    }
}
export default Header;