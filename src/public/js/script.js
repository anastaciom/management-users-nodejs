
function deleteUser(id) {
    fetch(`/${id}`, { method: 'DELETE' }).then(res => {
        if (res.status == 200) {
            res.text().then(userId => {
                window.location.reload()
                document.getElementById(userId).remove()
            })
        } else {
            res.json().then(err => {
                alert(err.message)
            })

        }

    })
}
