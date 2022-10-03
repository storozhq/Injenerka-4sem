export const isValid = (body: any) => {
    let keys = Object.keys(body)
    let flag = true
    keys.every((item) => {
        if (!body[item] || body[item] === '' || body[item] === [-1]) flag = false
    })
    return flag
}