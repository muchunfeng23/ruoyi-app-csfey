<template>
	<view class="car-query-container">
		<view class="calquery-form-content">
		  <view class="input-item flex align-center">
		    <view class="iconfont icon-select icon"></view>
		    <input v-model="brandNum" class="input" type="text" placeholder="请输入车牌号" maxlength="30" />
		  </view>
		  <view class="action-btn">
		    <button @click="handleQuery" class="login-btn cu-btn block bg-blue lg round">查询</button>
		  </view>
		</view>
		
		<view>
			<view v-for="(item, index) in brandInfo" :key="index">
				<view class="info-item">
				  <text class="info-label">姓名：</text>
				  <text class="info-value">{{ item.name }}</text>
				</view>
				<view class="info-item">
				  <text class="info-label">父亲：</text>
				  <text class="info-value">{{ item.fatherName }}</text>
				</view>
				<view class="info-item">
				  <text class="info-label">母亲：</text>
				  <text class="info-value">{{ item.motherName }}</text>
				</view>
				<view class="info-item">
				  <text class="info-label">电话：</text>
				  <text class="info-value">{{ item.phone }}</text>
				</view>
				<view class="info-item">
				  <text class="info-label">车牌：</text>
				  <text class="info-value">{{ item.carBrand }}</text>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	import { getCarBrandInfo } from "@/api/system/carbrand"
	export default {
		data() {
			return {
				isVisible: false,
				brandNum: "",
				globalConfig: getApp().globalData.config,
				brandInfo: []
			}
		},
		methods: {
			handleQuery(e){
				var queryBrandNum = this.brandNum;
				if(queryBrandNum === ''){
					this.$modal.showToast('输入内容不能为空');
				}
				this.getBrandInfo(this.brandNum);
			},
			getBrandInfo(carBrandNum) {
			  console.info("调用获取车牌信息接口");
			  getCarBrandInfo(carBrandNum).then(response => {
					console.info("-------" + response)
					console.info(JSON.stringify(response))
					// this.$modal.showToast(response[0].carBrand);
					this.isVisible = true;
					var responseData = {
						carBrand: "湘A8B6N9",
						fatherName: "杨璐",
						motherName: "王英1",
						name: "杨洲丞",
						classroom: "托班",
						phone: "18210063268"
					}
					this.brandInfo = response.rows;
			  })
			},
		}
	}
</script>


<style lang="scss">
  page {
    background-color: #ffffff;
  }
  
  .info-label{
	  width: 30%;
	  padding-right: 30px;
	  padding-left: 30px;
	  padding-top: 15px;
  }

  .car-query-container {
    width: 100%;

    .logo-content {
      width: 100%;
      font-size: 21px;
      text-align: center;
      padding-top: 15%;

      image {
        border-radius: 4px;
      }

      .title {
        margin-left: 10px;
      }
    }

    .calquery-form-content {
      text-align: center;
      margin: 20px auto;
      margin-top: 15%;
      width: 80%;

      .input-item {
        margin: 20px auto;
        background-color: #f5f6f7;
        height: 45px;
        border-radius: 20px;

        .icon {
          font-size: 38rpx;
          margin-left: 10px;
          color: #999;
        }

        .input {
          width: 100%;
          font-size: 14px;
          line-height: 20px;
          text-align: left;
          padding-left: 15px;
        }

      }

      .login-btn {
        margin-top: 40px;
        height: 45px;
      }
      
      .reg {
        margin-top: 15px;
      }
      
      .xieyi {
        color: #333;
        margin-top: 20px;
      }
      
      .login-code {
        height: 38px;
        float: right;
      
        .login-code-img {
          height: 38px;
          position: absolute;
          margin-left: 10px;
          width: 200rpx;
        }
      }
    }
  }

</style>

