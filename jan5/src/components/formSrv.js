import httpCommon from '../http-common';

class formSrv {
    login(data) {
        console.log(data),
        httpCommon.post("http://localhost:8080/backend_class/Jan/jan5/src/phpFile/con.php", data)
    }
}

export default new formSrv();