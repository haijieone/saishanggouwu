import styled from "styled-components";
export const Box = styled.div`
   width:1546px;
   margin:0 auto;
   .detail__con{
      width:1546px;
      height:620px;
      background:#fff;
      .detail__con__left{
         width:557px;
         height:620px;
         background:blue;
         float: left;
         margin-left:50px;
         div{
            width:557px;
            height:500px;
            img{
               width:100%;
               height:100%;
            }
         }
      }
      .detail__con__right{
         width:776px;
         height:620px;
         float: left;
         margin-left:80px;
         display:flex;
         border:1px solid #ccc;
         justify-content:flex-start;
         flex-direction:column;
         .p_country{
            display:flex;
            font-size: 18px;
            color: #999;
            line-height: 30px;
            padding: 10px;
            span,i{
               padding-left:10px;
           
            }
            img{
               width:40px;
               height:30px;
            }
         }
         .p_name{
            padding-top: 17px;
            padding-left:10px;
            color: #333;
            font-size: 20px;
         }
         .left{
            width: 100%;
            height: 74px;
            line-height: 72px;
            color: #333;
            font-size: 22px;
            background-color: #F4F4F4;
            margin-bottom: 5px;
            font-style: normal;
            padding: 0 10px;
            .detail_title{
               width: 55px;
               text-align: justify;
               color: #999;
               font-size: 12px;
               text-align-last: justify;
               display: inline-block;
               margin-right: 15px;
            }
            #currenyPrice{
               color: #C10020;
               font-size: 30px;
               font-style: normal;
            }
            .price_more{
               font-size: 12px;
               text-decoration: line-through;
               color: #999;
               margin-left: 10px;
            }

         }
         .p_additional{
            padding: 5px 0;
            border-bottom: 1px solid #E4E4E4;
            padding-left: 10px;
            margin-bottom: 15px;
            p{
               line-height: 30px;
               .detail_title {
                  width: 55px;
                  text-align: justify;
                  color: #999;
                  font-size: 12px;
                  text-align-last: justify;
                  display: inline-block;
                  margin-right: 15px;
}
               
             }
         }
         .number{
            width: 100%;
            height: 74px;
            line-height: 72px;
            color: #333;
            font-size: 22px;
            background-color: #F4F4F4;
            margin-bottom: 5px;
            font-style: normal;
            padding: 0 10px;
            span{
               width: 55px;
               text-align: justify;
               color: #999;
               font-size: 12px;
               text-align-last: justify;
               display: inline-block;
               margin-right: 15px;
            }
         }
         .fuwu{
            width: 100%;
            height: 74px;
            line-height: 72px;
            color: #333;
            font-size: 22px;
            background-color: #F4F4F4;
            margin-bottom: 5px;
            font-style: normal;
            padding: 0 10px;
            i{
               width: 55px;
               text-align: justify;
               color: #999;
               font-size: 12px;
               text-align-last: justify;
               display: inline-block;
               margin-right: 15px;
            }
            span{
               font-size: 12px;
               color: #333;
            }
         }
         .btn{
            .liji_btn{
               display: inline-block;
               height: 40px;
               line-height: 40px;
               padding: 0 38px;
               margin-right: 10px;
               border: 1px solid #C10020;
               background: #C10020;
               color: #fff;
            }
            .join_car{
               display: inline-block;
               height: 40px;
               line-height: 40px;
               padding: 0 38px;
               margin-right: 10px;
               border: 1px solid #C10020;
               background: #C10020;
               color: #fff;
            
            }
         }
      }
   }
`