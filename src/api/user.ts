import { Customer } from '@/utils/types'
import instance from './axios'
// 获取所有用户数据
export const getAllUsers = () =>{
    return instance({
        url:'/users'
    })
}

// 获取用户数据
export const getUser = (id:any) => {
    return instance({
        url:'/users/' + id
        })
}

// 删除用户数据
export const deleteUser = (id:any) => {
    return instance({
        url:'/users/' + id,
        method:'delete',

        })
}

// 修改用户数据
export const updateUser = (id:any,uCostomer:Customer) => {
    return instance({
        url:'/users/' + id,
        method:'put',
        data:uCostomer,

        })
}

// 添加新用户数据
export const addUser = (newCostomer:Customer) => {
    return instance({
        url:'/users/',
        method:'post',
        data:newCostomer,

        })
}


export default {
    getAllUsers,
    getUser,
    deleteUser,
    updateUser,
    addUser,

}