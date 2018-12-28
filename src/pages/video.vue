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
							  <el-col :span="8" v-for='d in datas' :key='d.id'>
							  	<div class="left_details">
							  		<a href="">
							  			<img src="@/assets/video_1.jpg" alt="">
							  			<span>{{d.name}} </span>
							  		</a>
							  		<div>
							  			<i class="fa fa-clock-o"></i>
							  			<span>{{d.time}}</span>
							  		</div>
							  		<p>定价：￥{{d.price}}</p>
							  	</div>
							  </el-col>
							</el-row>
						</div>
						<!-- 分页 -->
						<div class="left_pagination">
							<el-pagination
						      @size-change="handleSizeChange"
						      @current-change="handleCurrentChange"
						      :current-page="1"
						      :page-sizes="[10, 20, 30, 40]"
						      :page-size="10"
						      layout="total, sizes, prev, pager, next, jumper"
						      :total="40">
						    </el-pagination>
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
			  					数字期刊
			  				</li>
			  				<li>
			  					<i class="fa fa-angle-right"></i>
			  					数字图书
			  				</li>
			  				<li>
			  					<i class="fa fa-angle-right"></i>
			  					论文库
			  				</li>
			  				<li>
			  					<i class="fa fa-angle-right"></i>
			  					词条库
			  				</li>
			  				<li>
			  					<i class="fa fa-angle-right"></i>
			  					专题库
			  				</li>
			  				<li>
			  					<i class="fa fa-angle-right"></i>
			  					案例库
			  				</li>
			  				<li style="border-color:#c90000;">
			  					<i class="fa fa-angle-right" style="display:block;"></i>
			  					影像库
			  				</li>
			  				<li>
			  					<i class="fa fa-angle-right"></i>
			  					试题库
			  				</li>
			  			</ul>
			  		</div>
			  		<div class="right_course">
			  			<div>
			  				<p>推荐课程</p>
			  				<div style="width:110px; border-bottom:2px solid #c90000; position:absolute;top:40px;left:0px;"></div>
			  			</div>
			  			<ul>
			  				<li>
			  					<i class="fa fa-square"></i>
			  					<a href="">【案例警示】信息系统和信息设备管理保密须知</a>
			  				</li>
			  				<li>
			  					<i class="fa fa-square"></i>
			  					<a href="">【宣教视频】互联网计算机使用安全保密须知</a>
			  				</li>
			  				<li>
			  					<i class="fa fa-square"></i>
			  					<a href="">【案例警示】泄密就在身边案例</a>
			  				</li>
			  				<li>
			  					<i class="fa fa-square"></i>
			  					<a href="">【宣教视频】警惕身边的泄密隐患</a>
			  				</li>
			  				<li>
			  					<i class="fa fa-square"></i>
			  					<a href="">【案例警示】警钟长鸣——最新窃密泄密案例</a>
			  				</li>
			  				<li>
			  					<i class="fa fa-square"></i>
			  					<a href="">【案例警示】图说保密法</a>
			  				</li>
			  				<li>
			  					<i class="fa fa-square"></i>
			  					<a href="">保密宣传教育多媒体展示片（古典文化篇样片）之七</a>
			  				</li>
			  				<li>
			  					<i class="fa fa-square"></i>
			  					<a href="">保密宣传教育多媒体展示片（古典文化篇样片）之二</a>
			  				</li>
			  				<li>
			  					<i class="fa fa-square"></i>
			  					<a href="">保密宣传教育多媒体展示片（古典文化篇样片）之三</a>
			  				</li>
			  			</ul>
			  		</div>
			  		<div class="right_class">
			  			<div>
			  				<p>讲座推荐</p>
			  				<div style="width:110px; border-bottom:2px solid #c90000; position:absolute;top:40px;left:0px;"></div>
			  			</div>
			  			<ul>
			  				<li>
			  					<i class="fa fa-square"></i>
			  					<a href="">【宣教视频】涉密会议、活动保密管理须知</a>
			  				</li>
			  				<li>
			  					<i class="fa fa-square"></i>
			  					<a href="">【宣教小故事四】泄露国家秘密违法 举报泄密行为获奖</a>
			  				</li>
			  				<li>
			  					<i class="fa fa-square"></i>
			  					<a href="">【宣教小故事三】军迷发帖上头条  敏感信息遭曝光</a>
			  				</li>
			  				<li>
			  					<i class="fa fa-square"></i>
			  					<a href="">【宣教小故事二】淘汰设备须注意 稍不留神易泄密</a>
			  				</li>
			  				<li>
			  					<i class="fa fa-square"></i>
			  					<a href="">【宣教小故事一】社会交往要警惕 日常交流不涉密</a>
			  				</li>
			  			</ul>
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
		        value:'',
		        datas:[{
		        	id:1,
		        	name:'【案例警示】警钟长鸣——最新窃密泄密案例',
		        	time:'2018-08-09',
		        	price:'16.00',
		        },{
		        	id:2,
		        	name:'【宣教视频】保密要害部门部位管理保密须知 ',
		        	time:'2018-07-03',
		        	price:'12.00',
		        },{
		        	id:3,
		        	name:'保密要害部门部位管理保密须知 ',
		        	time:'2018-07-03',
		        	price:'19.00',
		        },{
		        	id:4,
		        	name:'【宣教视频】保密要害部门部位管理保密须知 ',
		        	time:'2018-07-03',
		        	price:'18.00',
		        },{
		        	id:5,
		        	name:'保密要害部门部位管理保密须知 ',
		        	time:'2018-07-03',
		        	price:'12.00',
		        },{
		        	id:6,
		        	name:'【宣教视频】保密要害部门部位管理保密须知 ',
		        	time:'2018-07-03',
		        	price:'16.00',
		        }]
			}
		},
		methods:{
			handleSizeChange(){

			},
			handleCurrentChange(){

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
		text-align: right;
		padding-right: 30px;
		padding-bottom: 30px;
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
	.content_right .right_column > ul li:hover {
		border-color: #c90000;
	}
	.content_right .right_column > ul li {
		border: 1px solid #ccc;
		font-size: 16px;
		text-align: center;
		line-height: 40px;
		height: 40px;
		margin: 15px;
		position: relative;
	}
	.content_right .right_column > ul li:hover i {
		display: block;
	}
	.content_right .right_column > ul > li > i {
		font-size: 20px;
		font-weight: 600;
		position: absolute;
		top: 10px;
		left: 30px;
		display: none;
		color: #c90000;
	}
	.content_right .right_course > ul,
	.content_right .right_class > ul {
		padding: 20px 10px 0;
	}
	.content_right .right_course > ul > li,
	.content_right .right_class > ul > li {
		line-height: 2em;
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
		width: 265px;
	}
	.content_right .right_course > ul > li > i,
	.content_right .right_class > ul > li > i {
		font-size: 4px;
		position: relative;
		bottom: 4px;
		color: #c90000;
		padding-right: 5px;
	}
	.content_right .right_course > ul > li:hover a,
	.content_right .right_class > ul > li:hover a {
		color: #c90000;
	}
	.content_right .right_course > ul > li > a,
	.content_right .right_class > ul > li > a {

	}
</style>