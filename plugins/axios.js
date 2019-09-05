// 用于处理axios的请求拦截
import {Message} from "element-ui";
export default ({$axios})=>{

    // 错误拦截
    $axios.onError(res=>{
        console.dir(res)
        // 解构出错误信息
        const {message,statusCode }=res.response.data
        if(statusCode===400){
            Message.error(message)
        }
    })
}