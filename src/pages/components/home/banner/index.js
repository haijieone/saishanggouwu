import React, { Component } from 'react'
import { Box, } from "./styled";
import { Row, Col } from 'antd';
import router from 'umi/router'
let Swiper = window.Swiper
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myName: "banner",
        }
    }
    componentDidMount() {
        if (this.swiper) {
            this.swiper.slideTo(0, 0)
            this.swiper.destroy()
            this.swiper = null;
        }
        this.swiper = new Swiper(this.refs.lun, {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
    // 跳闸页面
    handleToAlcohol(){
        router.push(`/alcohol`)
    }
    handleToClothes(){
        router.push(`/clothes`)
    }
    handleToWatermelon(){
        router.push(`/watermelon`)
    }
    handleToWolfberry(){
        router.push(`/wolfberry`)
    }
    handleToFruits(){
        router.push(`/fruits`)
    }
    render() {
        return (
            <div>
                <Box >
                    <div className="banner_left">
                        <p className='banner__left__title'>特产专区</p>
                        <div className='top'>
                            <div   onClick={() => this.handleToAlcohol()}>
                                <span>酒柜专区</span>
                                <div>
                                    <img src="https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=41bbc31f2ba446237ecaa264a0191533/3ac79f3df8dcd10096384144798b4710b9122f2a.jpg" alt="" />
                                </div>

                            </div>
                            <div  onClick={() => this.handleToClothes()}>
                                <span>回族服饰</span>
                                <div>

                                    <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1212347241,4110240977&fm=26&gp=0.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='con' >
                            <div onClick={() => this.handleToWatermelon()}>
                                <span>中宁硒砂瓜</span>
                                <div>
                                    <img src="https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=351628126,2610196050&fm=85&s=0A786ED8BE6F568C528029660300A076" alt="" />
                                </div>
                            </div>
                            <div onClick={() => this.handleToWolfberry()}>
                                <span>中卫枸杞</span>
                                <div>
                                    <img src="http://h2.bytravel.cn/shop/heads/2467.gif" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div onClick={() => this.handleToFruits()}>
                                <span>水果专区</span>
                                <div>
                                    <img src="http://img1.imgtn.bdimg.com/it/u=3404999600,2510505279&fm=26&gp=0.jpg" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="banner_center">
                        <div className='swiper-container' ref="lun">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide" data-id="0">
                                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1696158086,2772768774&fm=15&gp=0.jpg" alt='' />
                                </div>
                                <div className="swiper-slide" data-id="1">
                                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1309483199,2352225368&fm=26&gp=0.jpg" alt='' />
                                </div>
                                <div className="swiper-slide" data-id="2">
                                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1166663263,3551006623&fm=26&gp=0.jpg" alt='' />
                                </div>
                                <div className="swiper-slide" data-id="3">
                                    <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3672641459,3201176360&fm=26&gp=0.jpg" alt='' />
                                </div>
                                <div className="swiper-slide" data-id="4">
                                    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2370358894,2913339113&fm=26&gp=0.jpg" alt='' />
                                </div>
                                <div className="swiper-slide" data-id="5">
                                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2743955044,3970411267&fm=26&gp=0.jpg" alt='' />
                                </div>
                                <div className="swiper-slide" data-id="6">
                                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=265016409,3963563879&fm=26&gp=0.jpg" alt='' />
                                </div>
                                <div className="swiper-slide" data-id="7">
                                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4169482386,3228504533&fm=26&gp=0.jpg" alt='' />
                                </div>
                                <div className="swiper-slide" data-id="8">
                                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3977285133,4152881363&fm=26&gp=0.jpg" alt='' />
                                </div>
                                <div className="swiper-slide" data-id="9">
                                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3622782453,3371508572&fm=26&gp=0.jpg" alt='' />
                                </div>
                            </div>
                            <div id="PgFather">
                                <div className="swiper-pagination" id='body-left-pagination'></div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <p>
                            消息早知道
                        </p>
                        <div>
                            span
                        </div>

                    </div>
                </Box>
            </div>
        )
    }
}
