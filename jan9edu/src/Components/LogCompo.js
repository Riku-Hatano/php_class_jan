function LogCompo() {
    const login = (e) => {
        console.log(e.target.value)
    }
    return (
        <form onSubmit={login}>
            <input name="pass" placeholder="password"></input>
            <input name="fname" placeholder="fname"></input>
            <input type="submit" value="submit"></input>
        </form>
    )
}

export default LogCompo;