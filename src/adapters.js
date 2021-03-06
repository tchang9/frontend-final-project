export const get = (url) => {
    return fetch(url, {
        headers: {
            "Authorization": localStorage.getItem("token"),
        }
    })
    .then(res => res.json())
}

export const post = (url, params) => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Authorization": localStorage.getItem("token"),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })
    .then(res => res.json())
}

export const patch = (url, params) => {
    return fetch(url, {
        method: "PATCH",
        headers: {
            "Authorization": localStorage.getItem("token"),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })
    .then(res => res.json())
}

export const destroy = (url, params) => {
    return fetch(url, {
        method: "DELETE",
        headers: {
            "Authorization": localStorage.getItem("token"),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })
    .then(res => res.json())
}
