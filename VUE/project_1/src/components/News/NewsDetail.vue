<template>
    <div class="tmpl">
        <nav-bar title="新闻详情" />
        <div class="news-title">
            <p>{{newsInfo.title}}</p>
            <div>
                <span>来源:{{newsInfo.src}}</span>
                <span>添加时间:{{newsInfo.time | convertTime('YYYY-MM-DD')}}</span>
            </div>
        </div>
        <div class="news-content" v-html="newsInfo.content"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                newsInfo:{}, // 新闻详情数据
            }
        },
        created() {
            console.log(this.$route.params)
            // 1: 获取路由参数
            let { id } = this.$route.params;
            // // 2: 拼接后台url发起请求
            // let url = 'getnew/' + id;
            // this.$axios.get(url)
            // .then(res=>{
            //      // 3: 响应的数据渲染到页面上，通过一个详情对象
            //      this.newsInfo = res.data.message[0];
            // })
            // .catch(err=> console.log(err));        
        },
         mounted(){   
            this.$nextTick( ()=>{   
                var that = this;
                 $.ajax({
                    type:"get",
                    dataType:"jsonp", //解决跨域
                    url:"https://api.jisuapi.com/news/get?channel=%E5%A4%B4%E6%9D%A1&start=0&num=10&appkey=80fc4ac4aec8c7f7",
                    success:function(data){
                        console.log(data);
                        // that.newsList = data.result.list;
                        var NewData = data.result.list;
                        //js动态增加属性 id 
                        for(var i=0;i<NewData.length;i++){
                            NewData[i].id = i;
                        }
                        that.newsInfo = NewData;
                    }
                })
            })
        }

    }
</script>
<style scoped>
.news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
}

.news-title span {
    margin-right: 30px;
}

.news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}


/*主体文章的左右距离*/

.news-content {
    padding: 10 5;
}

</style>
