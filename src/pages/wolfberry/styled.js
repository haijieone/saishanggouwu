
import styled from "styled-components";

export const Contents = styled.div`



       .content__con{
        width:100%;
        min-height:600px;
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
        .product{
            padding-left:10px;
            width:18%;
            height:345px;
            background:#fff;
            padding:20px;
          display:flex;
          flex-direction:column;
          justify-content:space-around;
          align-items:center;
          margin-bottom:20px;
          margin-right:5px;
        
            .product__img{
                width:260px;
                height:260px;
                background:red;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .product__title{
                width:260px;
                height:50px;
                span{
                    font-family: "微软雅黑",Arial, Helvetica, sans-serif;      
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    font-size: 18px;
                    font-weight: 600;
                }
            }
            .product__price{
                width:260px;
                height:30px;
               span{
                line-height:30px;
                font-size: 20px;
                color: #C10020;
                font-weight: 800;
               }
            }
        }
    }
    `