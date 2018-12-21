<template>
    <div class="header">
        <!-- 上 -->
        <div class="header-top">
            <img src="../assets/icon_user.png">
            <p class="header-top-left"><a href="javascript">登录</a> &nbsp;| &nbsp;<a href="javscript">注册</a></p>
            <p class="header-top-right"><a href="javascript">设为首页</a> &nbsp;| &nbsp;<a href="javscript">加入收藏</a>&nbsp;| &nbsp;<a href="javscript">联系我们</a></p>
        </div>
        <!-- 中 -->
        <div class="header-content">
            <img src="../assets/news_logo.png">
            <!-- <div class="s-button">
    		
    	</div> -->
            <input type="button">
            <input type="text">
        </div>
        <!-- 导航 -->
        <div class="header-foot">
            <!--  <ul>
    	
    	<li><a href="javascript">首页</a></li>
    	<li><a href="javascript">保密书城</a></li>
    	<li><a href="javascript">数字资源</a></li>
    	<li><a href="javascript">在线学习</a></li>
    	<li><a href="javascript">影响库</a></li>
    	<li><a href="javascript">杂志订报</a></li>
    	<li><a href="javascript">疑难解答</a></li>
    	<li><a href="javascript">书目下载</a></li>
    </ul> -->
            <el-menu router default-active="/" class="el-menu-demo" mode="horizontal" background-color="#C90000" text-color="#fff" active-text-color="yellow">
                <el-menu-item index="/">
                    <span slot="title">首 &nbsp;&nbsp;页</span>
                </el-menu-item>
                <el-menu-item index="books">
                    <span slot="title">保密书城</span>
                </el-menu-item>
                <el-menu-item index="/resource">
                    <span slot="title">数字资源</span>
                </el-menu-item>
                <el-menu-item index="/study">
                    <span slot="title">在线学习</span>
                </el-menu-item>
                <el-menu-item index="/video">
                    <span slot="title">影像库</span>
                </el-menu-item>
                <el-menu-item index="/magazine">
                    <span slot="title">杂志订报</span>
                </el-menu-item>
                <el-menu-item index="/solution">
                    <span slot="title">疑难解答</span>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>
<style type="text/css">
.header {
    width: 100%;
    min-width: 1200px;
    height: 260px;
    margin: 0 auto;
    background: url('../assets/top_bg.png') left top repeat-x;
    display: flex;
    flex-direction: column;
}

.header-top {

    min-width: 1200px;
    height: 42px;
    padding-top: 6px;
    margin: 0 auto;
    position: relative;

}

.header-top img {
    margin-top: 10px;
}

.header-top p.header-top-left {
    position: absolute;
    left: 30px;
    top: 16px;

}

.header-top p.header-top-right {
    float: right;
    margin-top: 16px;

}

.header-content {
    width: 1200px;
    height: 165px;
    margin: 0 auto;
    background: url('../assets/top_bg_03.jpg') left top no-repeat;
}

.header-content img {
    float: left;
    margin-top: 58px;
}

.header-content input[type=text] {
    float: right;
    width: 367px;
    height: 36px;
    border-radius: 3px;
    background-color: white;
    opacity: 0.7;
    border: 1px solid #fff;
    margin-top: 58px;
    outline: none;
}

.header-content input[type=button] {
    width: 60px;
    height: 38px;
    border-radius: 3px;
    background-image: url('../assets/seach.png');
    border: 1px solid #fff;
    float: right;
    cursor: pointer;
    margin-top: 58px;
    outline: none;

}

.header-foot {
    min-width: 1200px;
    height: 47px;
    margin: 0 auto;
    line-height: 47px;
    overflow: hidden;
    /* background-color: yellow; */
}

.header-foot li {
    width: 105px;
    float: left;
    padding-right: 40px;
    font-size: 18px;
    margin-left: 25px;
}

.el-menu {
    border: none;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
}

.el-menu--horizontal>.el-menu-item {
    float: left;
    height: 60px;
    line-height: 60px;
    margin-left: 50px;
    margin-top: -4px;
    border: none;
    color: #909399;
}
</style>
<script>
export default {
    data() {
        return {
            currentRoute: '/'
        }
    },
    methods: {
        jump(url) {
            this.$router.push(url)
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    watch: {
        '$route': function(to, from) {
            this.currentRoute = to.path;
        }
    }
}
</script>
</script>