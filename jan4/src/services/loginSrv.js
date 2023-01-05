import httpCommon from "../http-common";

class loginSrv {
    login(data) {
        return httpCommon.post("http://localhost:8080/backend_class/test.php", data)
        // return httpCommon.post("http://localhost:8080/backend_class/test.php", data)
    }
}

export default new loginSrv();