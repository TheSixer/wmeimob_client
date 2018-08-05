import Service from '~/plugins/axios'

//  注册
export const userRegister = data => Service.post('/users/register', data)
//  登录
export const userLogin = data => Service.post('/users/login', data)
//  写文章
export const publishPosts = data => Service.post('/article', data)
//  查找所有文章
export const queryAllArticle = data => Service.get('/article')
//  查找文章详情
export const queryArticleDetail = data => Service.get(`/article/${data.id}`)
