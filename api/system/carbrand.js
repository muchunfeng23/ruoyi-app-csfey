import upload from '@/utils/upload'
import request from '@/utils/request'

// 查询用户个人信息
export function getCarBrandInfo(carBrandNum) {
  return request({
	  // url: '/system/user/profile?carBrandNum=' + carBrandNum,
	url: '/system/student/list?carBrand=' + carBrandNum,
	method: 'get'
  })
}