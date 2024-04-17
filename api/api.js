import request from '@/api/request.js'

export function login(data) {
	return request({
		url: '/api/user/userLogin',
		methods: 'POST',
		data
	})
}