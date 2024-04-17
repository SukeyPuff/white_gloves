export const baseUrl = 'http://127.0.0.1:7001'

function request(params) {
	let token = wx.getStorageSync('token')
	
	return new Promise((resolve, rejects) => {
		wx.request({
			url: baseUrl + params.url,
			method: params.methods || 'POST',
			data: params.data,
			header :{
				token: token,
				'content-type': 'application/x-www-form-urlencoded',
			},
			timeout: 3000,
			success(res){
				console.log(res)
			},
			fail(err) {
				wx.showToast({
					title:'网络请求失败，请稍后再次尝试',
					icon:'none'
				})
				return rejects(err)
			}
		})
	})
}

export default request