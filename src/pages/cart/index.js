import React, { Component } from 'react';
import { Header } from '../components/home/index';
import { Box } from "./styled";
import { Row, Col } from 'antd';
import { connect } from 'dva';
import { InputNumber, Checkbox,Empty } from 'antd';
import img from '../../assets/images/4.jpg'
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: "",
            value: '',
            checkedAll: false, //全选状态
            checkedInvert: false, //反选状态
            selectNum: 0,
            priceSum: 0,
        }
    }
    componentDidMount() {
        let arr = [];
        let gifts = localStorage.getItem("gifts") ? JSON.parse(localStorage.getItem("gifts")) : [];

        for (let i = 0; i < gifts.length; i++) {
            let item = { id: gifts[i].id };
            arr.push(item)
        }

        let payload = {
            Arrays: JSON.stringify(arr),
        }
        new Promise((resolve, reject) => {
            this.props.dispatch({
                type: 'home/cart',
                resolve,
                reject,
                payload,
            })
        })
            .then((data) => {
                console.log(data)
                if (data.data.code === 200) {
                    this.setState({
                        list: data.data.data
                    })
                }

            })
    }
    renderList(list) {
        if (list) {
            return (
                <div>
                    <div id="list">
                        <Row className="Row">
                            <Col span={1}><Checkbox
                                onChange={(e) => this.handleAllChange(e)}

                                checked={this.state.checkedAll}
                            >全选</Checkbox></Col>
                            <Col span={7} className="Row_Col" > <span>商品信息</span> </Col>
                            <Col span={4}>单价</Col>
                            <Col span={4}>数量</Col>
                            <Col span={4}>小计</Col>
                            <Col span={4}>操作</Col>
                        </Row>
                    </div>
                    {list.map((item, index) => (
                        <Row className="Row products" key={index} >
                            <Col span={1}><Checkbox
                                onChange={(e) => this.handleItemChange(e, item, index)}
                                checked={item.checked}
                            ></Checkbox></Col>
                            <Col span={7}>
                                <div className="shopInte">
                                    <div>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="shopInte_right">
                                        <span>{item.title}</span>
                                        <span>库存只有30件了赶紧下单吧</span>
                                    </div>

                                </div>
                            </Col>
                            <Col span={4}> <span>{item.price}元</span></Col>
                            <Col span={4}>  <span> <InputNumber size="large" min={1} max={10} defaultValue={JSON.parse(localStorage.getItem("gifts"))[index].num} onChange={(value) => this.handleValue(value, index, item)} /> </span></Col>
                            <Col span={4}><span>{(JSON.parse(localStorage.getItem("gifts"))[index].num) * Number(item.price)}元</span></Col>
                            <Col span={4}><span>删除</span></Col>
                        </Row>

                    ))}
                    <div className='buy'>
                       
                        <div className="buy_tip">
                  
                            已选择<span>{this.state.selectNum}</span>件，总额：￥{this.state.priceSum}   满减：￥0， 合计（不含运费）￥ <span>{this.state.priceSum}</span>元
                <button>去结算</button>
                        </div>

                    </div>
                </div>


            )
        } else {
            return (
                <div className="products">
                  <Empty  description="购物车空空前去购物"/>
            </div>
            )

        }
    }

    // CheckItem事件
    handleItemChange(e, item, index) {
        const list = this.state.list;
        let checkedInvert = this.state.checkedInvert;
        if (!item.checked) {
            console.log(item.price)
            this.setState({
                selectNum: this.state.selectNum + JSON.parse(localStorage.getItem("gifts"))[index].num,
                priceSum: (Number(this.state.priceSum) + ((JSON.parse(localStorage.getItem("gifts"))[index].num) * (Number(item.price))))
            })
        } else {
            this.setState({
                selectNum: this.state.selectNum - (JSON.parse(localStorage.getItem("gifts"))[index].num),
                priceSum: (Number(this.state.priceSum) - ((JSON.parse(localStorage.getItem("gifts"))[index].num) * (Number(item.price))))
            })
        }
        list.map(function (ckitem, index) {
            if (ckitem.id === item.id) {
                return ckitem.checked = e.target.checked
            }
        })

        const checkedAll = list.every(function (item, index) {
            return item.checked;
        })

        checkedInvert = checkedAll ? false : checkedInvert;

        
        this.setState({
            list: list,
            checkedAll: checkedAll,
            checkedInvert: checkedInvert
        })
    }


    // renderListBox(){
    //     let { list } = this.state
    //     return(
    //         <div>
    //            {
    //                 this.renderList(list)
    //            }

    //         </div>
    //     )
    // }
    handleValue(value, index, item) {
        let gifts = localStorage.getItem("gifts")
            ? JSON.parse(localStorage.getItem("gifts"))
            : [];
        gifts[index].num = value;
        localStorage.setItem("gifts", JSON.stringify(gifts));
        this.setState({
            value: 1
        })
    }
    render() {
        let { list } = this.state;
        return (
            <Box>
                <Header></Header>
                <div className="logo">

                </div>

                <div>
                    {
                        this.renderList(list)
                    }
                </div>
            </Box>
        )
    }
    // 全选事件
    handleAllChange() {
        const { checkedAll, list } = this.state;
        if (!checkedAll) {
            var number = 0;
            var priceSum = 0;
            let array = JSON.parse(localStorage.getItem("gifts")).length
            for (var i = 0; i < array; i++) {
                var snum = JSON.parse(localStorage.getItem("gifts"))[i].num;
                var ssum = snum * list[i].price
                priceSum += ssum
                number += snum
            }
            this.setState({
                selectNum: number,
                priceSum: priceSum
            });
        } else {
            this.setState({
                selectNum: 0,
                priceSum: 0
            });
        }
        list.map(function (item, index) {
            return item.checked = !checkedAll;
        })
        this.setState({
            checkedAll: !checkedAll,
            checkedInvert: false,
            list: list
        });

    }


}
function mapStateToProps(home) {
    return {
        ...home
    }
}
export default connect(mapStateToProps)(Index);