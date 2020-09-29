import axios from 'axios';

var Axios = axios.create({ timeout: 1000});
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Axios.interceptors.request.use(function (config) {
    if (config.method === 'post') {
        config.data = config.data
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

Axios.interceptors.response.use(
    (res) => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    (err) => {
        console.log(err)
        const { response } = err;
        if (response) {
            errorHandle(response.status, response.data);
            return Promise.reject(response);
        } else {
            console.log('请求失败')
        }
    }
);
export default Axios