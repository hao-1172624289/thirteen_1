<template>
    <div class="tmpl">
        <nav-bar :title="title"/>

        <!-- 新闻列表 -->
         <div class="demo">
              <ul>
                    <li v-for="(news,index) in newsList" :key="index">
                        <router-link :to="{ name:'NewsDetail',params:{id:news.id} }">
                            <img class="" :src="news.pic">
                            <div >
                                <span>{{news.title}}</span>
                                <div class="news-desc">
                                    <p>发表时间:{{news.time | convertTime('YYYY年MM月DD日')}}</p>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
    </div>
    
</template>
<script src=""></script>
<script type="text/ecmascript-6">
import {getRecommend} from '../../api/recommend';
import {ERR_OK} from '../../api/config';



    export default {
        data(){
            return {
                title:'新闻列表',
                newsList:[],// 新闻列表数据
            }
        },
        created() {
            // this.$axios.get('/toutiao/index?type=&key=85901f143a1063a416e1ce141d98078b')
            // .then(res=>{
            //     console.log(res.data);
            //     this.newsList = res.data.message;
                
            // })
            // .catch(err=>console.log(err));
        },
        mounted(){   
            this.$nextTick( ()=>{   
                var that = this;
                 $.ajax({
                    type:"get",
                    dataType:"jsonp", //解决跨域
                    url:"https://api.jisuapi.com/news/get?channel=%E5%A4%B4%E6%9D%A1&start=0&num=10&appkey=80fc4ac4aec8c7f7",
                    data:{user_id:1},
                    success:function(data){
                        console.log(data);
                        // that.newsList = data.result.list;
                        var NewData = data.result.list;
                        //js动态增加属性 id 
                        for(var i=0;i<NewData.length;i++){
                            NewData[i].id = i;
                        }
                        that.newsList = NewData;
                   

                        
                    }
                })
            })
        },
        // $set() {
        //     addNewsList() {
        //         this.newsList.id = 
        //     }
        // }


    }

    


</script>
<style scoped>
.demo a {
    display: block;
    width: 330px;
    height: 54px;
    color: #000;
    padding-left:15px;
}
.demo img {
    float: left;
    width: 52px;
    height: 52px;
    margin-right: 20px;
}
.demo a div {
    float: left;
    width: 238px;
    margin-right: 20px;
}
.demo span {
    display: block;
    width: 100%;
    font-size: 17px;
    line-height: 21px;
}
.demo a p {
    float: left;
    color: #0bb0f5;
    font-size: 10px;
    line-height: 16px;
}
.demo p:nth-child(2) {
    float: right;
}

.demo ul {
    padding: 0;
}
.news-desc {
    height: 35px;
}



/*先临时这么写*/


</style>