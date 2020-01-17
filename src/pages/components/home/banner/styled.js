import styled from "styled-components";
export const Box = styled.div`
    width:1546px;
    height: 360px;
    display: flex;
    justify-content:flex-start;
    .banner_left{
        width: 20%;
        height: 100%;
        background: #fff;
        display:flex;
        flex-direction:column;
        .top,.con,.bottom{
            width:100%;
            height: 110px;
            display:flex;
            justify-content:flex-start;
            align-items:flex-start;
            border-bottom:1px solid #ccc;
            cursor: pointer;
        }
        .top{
            div{
                width:50%;
                height:100%;
                text-align:center;
                padding:5px;
                span{
                    font-family: "微软雅黑",Arial, Helvetica, sans-serif;      
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        font-size: 18px;
                        font-weight: 600;
                }
                div{
                    width:100%;
                    height:90%;
                    img{
                    width:100%;
                    height:100%
                }
                }
               
            }
        }
        .con{
            div{
                text-align:center;
                padding:5px;
                width:50%;
                height:100%;
                span{
                    font-family: "微软雅黑",Arial, Helvetica, sans-serif;      
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        font-size: 18px;
                        font-weight: 600;
                }
                div{
                    width:100%;
                    height:90%;
                    img{
                    width:100%;
                    height:100%
                }
                }
            }
        }
        .bottom{
            div{
                text-align:center;
                padding: 0 5px;
                width:100%;
                height:100%;
                span{
                    font-family: "微软雅黑",Arial, Helvetica, sans-serif;      
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        font-size: 18px;
                        font-weight: 600;
                }
                div{
                    width:100%;
                    height:100%;
                    img{
                    width:100%;
                    height:80%
                }
                }
            }
        }
        .banner__left__title{
            text-align:center;
            font-size:20px;
            color:#bbb;
        }
       
    }
    .banner_center{
        width:60%;
        height: 100%;
        .swiper-container{
            width: 900px;
            height: 360px;
            position: relative;
            padding:10px 0;
            #PgFather{
                position:absolute;
                z-index:1000;
            }
            .swiper-slide{
                background:red;
                height: 360px;
                img{
                    width:100%;
                    height:100%;
                }
            }
        }

    }
    div:nth-child(3){
        width: 20%;
        height: 100%;
        background:#fff;
        p{
            width:100%;
            height:50px;
            text-align:center;
            line-height:50px;
            font-size:20px;
        }
    
    }


`


