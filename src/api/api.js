import {
  wxRequest
} from '@/utils/wxRequest';

const apiMall = 'https://www.jizhangyl.com/jizhangyl/'

//获取微信登录用户的OPENID
const getUserOpenid = (params) => wxRequest(params, apiMall + '/express/getOpenid')
//根据用户的OPENID获取历史订单数据
const getOrderHistory = (params) => wxRequest(params, apiMall + '/express/historyRecordPreview')
//根据填写的订单号获取详细物流信息
const getOrderDetails = (params) => wxRequest(params, apiMall + '/express/query')
//根据订单号获取订单用户的详细信息
const getUserInfo = (params) => wxRequest(params, apiMall + '/cert/getUserInfo')
//提交用户姓名，身份证号，身份证正反面图片到服务器
const submitUserInfo = (params) => wxRequest(params, apiMall + '/cert/uploadCert')
//获取收件人库所有信息
const getUserLibrary = (params) => wxRequest(params, apiMall + '/cert/list')
//删除收件人库信息根据id
const delUserLibraryById = (params) => wxRequest(params, apiMall + '/cert/delete')
//提交清关信息到收件人库中
const submitUserInfoByPerson = (params) => wxRequest(params, apiMall + '/cert/uploadCertFromPersonalPage')
export default {
	getUserOpenid,
	getOrderHistory,
	getOrderDetails,
	getUserInfo,
	submitUserInfo,
	getUserLibrary,
	delUserLibraryById,
	submitUserInfoByPerson
}