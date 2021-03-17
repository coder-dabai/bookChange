import {request} from './request'

export function getHomebooks(){
    return request ({
        url:'data/wenxue/books.json'
    })
}