import {service} from '@/api/index'

export const getHello = () => {
    return service
        .get('/index/hello')
        .then(res => res)
}

export const putHelloAndHeaders = (params, data, header) => {
    return service
        .request({
            url: params,
            method: 'put',
            data: data,
            headers: {
                'HEADER': header
            }
        })
        .then(res => res)
}

export const findBookList = (param) => {
    return service
        .get('/books'+param)
        .then(res => res.data)
}
export const getChapterContent = (bookId,page)=>{
    return service
        .get('/chapters?bookId='+bookId+'&page='+page)
        .then(res => res.data)
}
export const getChapterById = (id,bookId,)=>{
    return service
        .get('/chapters/'+id+'?bookId='+bookId)
        .then(res => res.data)
}
