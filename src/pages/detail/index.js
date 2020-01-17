import React, { Component } from 'react'
import { Header, Nav } from '../components/home/index'
import { Box } from './styled'
import { connect } from 'dva';
import router from 'umi/router';
import {Modal} from 'antd';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detailList: ""
        }
    }
    componentDidMount() {
        let { id } = this.props.location.query
        this.detailRequest(id)
    }
    detailRequest(id) {
        let payload = {
            id,
        }
        new Promise((resolve, reject) => {
            this.props.dispatch({
                type: 'home/detail',
                resolve,
                reject,
                payload,
            })
        }).then((data) => {
            if (data) {

                this.setState({
                    detailList: data.data
                })
            } else {

            }
        })
    }
    rendercard(detailList) {
        return (
            <div className="detail__con">
                <div className="detail__con__left">
                    <div>
                        <img src={detailList.img} alt="" />
                    </div>
                </div>
                <div className="detail__con__right">
                    <div className="p_country">
                        <img src="http://img.srpmall.com.cn/imgserver/static/upload/online/20190927/4c2b0cb354c747d5bb20cb288f0edafb.png" alt="" />
                        <span>{detailList.chandi}</span>
                        <i>|</i>
                        <span>{detailList.color}</span>
                    </div>
                    <div className="p_name">{detailList.title}<span>滋补佳品&nbsp;</span></div>

                    <div className="left">
                        <span className="detail_title">售价</span>

                        <span id="currenyPrice">¥{detailList.price}</span>

                        <i className="price_more">¥{detailList.oldprice}</i>
                    </div>

                    <div className="p_additional">
                        <p>
                            <span className="detail_title">商家</span>
                            <span className="p_additional_p">千慈自营店</span>
                        </p>
                        <p>
                            <span className="detail_title">运费</span>
                            <span className="p_additional_p"><span>0.00元</span> 满99.00元包邮</span>
                        </p>
                    </div>
                    <div className="number">
                        <span>数量</span>1
                    </div>
                    <div className="fuwu">
                        <i>服务</i>
                        <span>{detailList.fuwu}</span>
                    </div>
                    <div className="btn">
                        <a href="" className="liji_btn" >立即购买</a>
                        <button className="join_car" onClick={this.joinCar.bind(this, detailList)}>加入购物车</button>
                    </div>

                </div>
            </div>
        )
    }
    joinCar(detailList) {
        let k = 0;
        let gift = {
            id: detailList.id,
            gift: detailList.title,
            num: 1
        }
        let gifts = localStorage.getItem("gifts")
            ? JSON.parse(localStorage.getItem("gifts"))
            : [];
        for (let i = 0; i < gifts.length; i++) {
            let item = gifts[i];
            if (item.id === gift.id) {
                item.num += gift.num;
            } else {
                k = k + 1;
            }
        }
        if (k === gifts.length) {
            gifts.push(gift);
        }
        localStorage.setItem("gifts", JSON.stringify(gifts));

        Modal.success({
            content: '添加购物车成功，即将跳转去购物啦！！！',
            onOk() {
              router.push('/cart')
              },
          });
        
        
    }

    renderContent(detailList) {
        if (detailList === '') {

        } else {
            return this.rendercard(detailList)
        }
    }
    render() {
        let { detailList } = this.state;
        return (
            <Box>
                <Header></Header>
                <Nav></Nav>
                {
                    this.renderContent(detailList)
                }

            </Box>
        )
    }
}
function mapStateToProps(home) {
    return {
        ...home
    }
}
export default connect(mapStateToProps)(Index);