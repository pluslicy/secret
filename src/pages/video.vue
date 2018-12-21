<template>
	<div class="video">
		<!-- 影像库 -->
		<div class="video_wrapper">
			<!-- 导航 -->
			<div class="video_nav">
				<i class="fa fa-map-marker"></i>
				<span>当前位置 ：</span>
				<a href="">数字资源</a>
				<i class="fa fa-angle-right"></i>
				<a href="">影像库</a>
			</div>
			<!-- 内容 -->
			<el-row class="video_content">
			  <el-col :span="18">
			  	<!-- 影像库 -->
			  	<div class="content_left">
			  		<div class="left_top">
			  			<div style="width:100px; border-bottom:2px solid #c90000;position:absolute;top:70px;left:20px;"></div>
			  			<p>影像库</p>
			  			<el-form :inline="true"  class="demo-form-inline form" size='mini'>
							  <el-form-item label="">
							    <el-select v-model="value" placeholder="请选择">
								    <el-option
								      v-for="item in options"
								      :key="item.value"
								      :label="item.label"
								      :value="item.value">
								    </el-option>
								  </el-select>
							  </el-form-item>
							  <el-form-item>
							 		<el-input>
							 			<i slot="suffix" class="el-input__icon el-icon-search" style="color:#c90000"></i>
							 		</el-input>	
							  </el-form-item>
							</el-form>
			  		</div>
			  		<!-- 列表 -->
						<div class="left_list">
							<el-row :gutter="20">
							  <el-col :span="8">
							  	<div class="left_details">
							  		<a href="">
							  			<img src="@/assets/video_1.jpg" alt="">
							  			<span>【案例警示】警钟长鸣——最新窃密泄密案例 </span>
							  		</a>
							  		<div>
							  			<i class="fa fa-clock-o"></i>
							  			<span>2018-08-09</span>
							  		</div>
							  		<p>定价：￥16.00</p>
							  	</div>
							  </el-col>
							  <el-col :span="8">
							  	<div class="left_details">
							  		<a href="">
							  			<img src="@/assets/video_1.jpg" alt="">
							  			<span>【案例警示】警钟长鸣——最新窃密泄密案例 </span>
							  		</a>
							  		<div>
							  			<i class="fa fa-clock-o"></i>
							  			<span>2018-08-09</span>
							  		</div>
							  		<p>定价：￥16.00</p>
							  	</div>
							  </el-col>
							  <el-col :span="8">
							  	<div class="left_details">
							  		<a href="">
							  			<img src="@/assets/video_1.jpg" alt="">
							  			<span>【案例警示】警钟长鸣——最新窃密泄密案例 </span>
							  		</a>
							  		<div>
							  			<i class="fa fa-clock-o"></i>
							  			<span>2018-08-09</span>
							  		</div>
							  		<p>定价：￥16.00</p>
							  	</div>
							  </el-col>
							  <el-col :span="8">
							  	<div class="left_details">
							  		<a href="">
							  			<img src="@/assets/video_1.jpg" alt="">
							  			<span>【案例警示】警钟长鸣——最新窃密泄密案例 </span>
							  		</a>
							  		<div>
							  			<i class="fa fa-clock-o"></i>
							  			<span>2018-08-09</span>
							  		</div>
							  		<p>定价：￥16.00</p>
							  	</div>
							  </el-col>
							</el-row>
						</div>
						<!-- 分页 -->
						<div class="left_pagination">
							
						</div>
			  	</div>
			  </el-col>
			  <el-col :span="6">
			  	<div class="content_right">
			  		<!-- 栏目 -->
			  		<div class="right_column">
			  			<div>
			  				<p>&nbsp;&nbsp;栏&nbsp;&nbsp;目&nbsp;&nbsp;</p>
			  				<div style="width:110px; border-bottom:2px solid #c90000; position:absolute;top:40px;left:0px;"></div>
			  			</div>
			  			<ul>
			  				<li>
			  					<i class="fa fa-angle-right"></i>
			  					数字
			  				</li>
			  			</ul>
			  		</div>
			  		<div class="right_course">
			  			<div>
			  				<p>推荐课程</p>
			  				<div style="width:110px; border-bottom:2px solid #c90000; position:absolute;top:40px;left:0px;"></div>
			  			</div>
			  		</div>
			  		<div class="right_class">
			  			<div>
			  				<p>讲座推荐</p>
			  				<div style="width:110px; border-bottom:2px solid #c90000; position:absolute;top:40px;left:0px;"></div>
			  			</div>
			  		</div>
			  	</div>
			  </el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				options: [{
          value: 'all',
          label: '全部内容'
        }, {
          value: 'option1',
          label: '警示教育片'
        }, {
          value: 'option2',
          label: '案例警示'
        }, {
          value: 'option3',
          label: '宣教课件'
        }, {
          value: 'option4',
          label: '宣教视频'
        }],
        value:''
			}
		}
	}
</script>
<style>
	.video {
		background: url('../assets/bg.png') 0 0 repeat;
	}
	.video_wrapper {
		width: 1200px;
		margin: 0 auto;
		padding: 15px 0;
	}
	.video_nav > i.fa-map-marker {
		font-size: 35px;
		margin-right: 10px;
		color: #c90000;

	}
	.video_nav > i.fa-angle-right {
		font-size: 20px;
	}
	.video_nav > span,
	.video_nav > a {
		font-size: 16px;
		line-height: 40px;
	}
	.video_nav > a {
		margin: 0 5px;
	}
	.video_content .content_left {
		padding: 10px 20px;
		border: 1px solid #cbcbcb;
		margin-right: 10px;
		background-color: #ffffff;
		position: relative;
	}
	.content_left > .left_top {
		border-bottom: 1px solid #cbcbcb;
	}
	.content_left > .left_top > p {
		font-size: 20px;
		float: left;
		padding-left: 20px;
	}
	.content_left > .left_top > .form {
		text-align: right;
		margin-top: 15px;
	}
	.content_left .left_list {
		margin: 20px 5px;
	}
	.content_left .left_details {

	}
	.content_left .left_details a img:hover {
		border-color: #c90000;
	}
	.content_left .left_details a img {
		width: 265px;
		border: 1px solid #ccc;
		opacity: .8;
	}
	.content_left .left_details a span:hover {
		color: #c90000;
	}
	.content_left .left_details a span {
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
		display: block;
	}
	.content_left .left_details > div > i {
		font-size: 20px;
		color: #c90000;
	}
	.content_left .left_details > div > span {
		color: #ccc;
	} 
	.content_left .left_details > p {
		font-size: 16px;
		color: #c90000;
	}
	.content_left .left_pagination {
		padding-top: 30px;
		border-top: 1px solid #ccc;
	}
	.video_content .content_right {
		
	}
	.content_right > div {
		border: 1px solid #ccc;
		margin-bottom: 10px;
		background-color: #fff;
		padding: 20px 10px;
		border-right: none;
	}
	.content_right > div > div {
		border-bottom: 1px solid #ccc;
		position: relative;
	}
	.content_right > div > div > p {
		font-size: 20px;
		line-height: 40px;
		padding-left: 15px;
		color: #c90000;
	}
	.content_right .right_column > ul li {
		border: 1px solid #ccc;
		font-size: 16px;
		text-align: center;
		line-height: 40px;
		height: 40px;
		margin-top: 15px;
	}
	.content_right .right_column > ul > li > i {
		font-size: 20px;
		position: absolute;
	}
</style>