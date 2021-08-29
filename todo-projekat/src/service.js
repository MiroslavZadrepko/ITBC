let count = 5

let data = [
    {
        id: 1,
        desc: '12324',
        done: true
    },
    {
        id: 2,
        desc: 'dsjfh443',
        done: false
    },
    {
        id: 3,
        desc: 'nesto rjsdhf 2343',
        done: false
    },
    {
        id: 4,
        desc: 'dxjfhfdhfkdhjfkhdfhjdkf',
        done: true
    }
]

const add = (item) => {
    item.id = count++
    data.push(item)
    return item.id
}
const deleteById = (id) => {
    let index = data.findIndex(item => item.id = id)
    data.splice(index, 1)
}
const changeById = (id, noviItem) => {
    let index = data.findIndex(item => item.id = id)
    data.splice(index, 1, noviItem)
}

export {
    data,
    add,
    deleteById,
    changeById,
}