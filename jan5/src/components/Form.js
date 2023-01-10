function Form() {
    return (
        <form action="../phpFile/con.php" method="POST">
            <input type="text" placeholder="name" value="riku hatano" required></input>
            <input type="text" placeholder="pass" value="lsadkfja;ldkfll" required></input>
            <input type="submit" value="submit"></input>
        </form>
    )
}

export default Form;