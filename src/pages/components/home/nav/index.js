import React, { Component } from 'react'
import logo from '../../../../assets/logo.png'
import styles from './index.less'

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false
        }
    }

    render() {
        return (
            <div className={styles.nav}>
                <div className={styles.left}>
                    <img src={logo} alt=""/>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightTop}>
                        <div className={styles.search}>
                            <span>请输入搜索内容</span>
                            <p>搜索</p>
                        </div>
                        <div className={styles.buyCar}>  <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1816948731,4203604980&fm=26&gp=0.jpg" alt=""/> <span>我的购物车 (<i>12</i>) </span></div>
                    </div>
                    <div className={styles.rightBottom}>
                        <span >
                            全部商品类目
                        </span>
                        <span>首页</span>
                        <span>限时抢购</span>
                        <span>思路海购</span>
                        <span>西部优品</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav;