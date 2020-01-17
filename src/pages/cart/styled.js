import styled from "styled-components";
export const Box = styled.div`
    .logo{
        width:100%;
        height:150px;
        background:#fff;
        border-bottom:2px solid #c33;
    }
    #list{
        width:100%;
        height:50px;
        line-height:50px;
        color: #a3a3a3;
        .Row{
            padding-left:50px;
            .Row_Col{
                display:flex;
                align-items:center;
                justify-content:center;
            }
        }
    }
    .products{
        padding:0 50px;
        width:100%;
        height:200px;
        background:#fff;
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:10px;
        .shopInte{
            display:flex;
            height:200px;
            align-items:center;
            padding-right:20px;
            .shopInte_right{
                display:flex;
                flex-direction:column;
                
            }
            img{
                width:150px;
                height:150px;
            }
        }
    }
    .buy{
        padding-right:100px;
        margin: 10px 0 0 0;
    height: 48px;
    width: 100%;
    line-height: 48px;
    border-top: #efefef 1px solid;
    color: #666666;
    box-shadow: #fafafa 0 -1px 2px;
    .buy_tip{
        float:right;
        button{
            position: relative;
            top: -2px;
            height: 48px;
            width: 200px;
            background: #ff464e;
            color: #ffffff;
            font-size: 18px;
            text-align: center;
            border: 0;
            margin: 0 0 0 25px;
            cursor: pointer;
            outline: 0;
            -webkit-transition: all 0.2s linear;
            transition: all 0.2s linear;
        }
        span{
            color:#c33;
            font-size:24px;
        }
    }
    }
`