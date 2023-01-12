import logSrv from "../Services/logSrv";

function LogCompo() {
    const login = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        logSrv.login("userLog.php", formData)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <form onSubmit={login} method="POST">
            <input name="pass" placeholder="password"></input>
            <input name="fname" placeholder="fname"></input>
            <button type="submit">submit</button>
        </form>
    )
}

export default LogCompo;