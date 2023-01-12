import httpCommon from "../httpCommon";

class logSrv {
    login(pageName, data) {
        return httpCommon.post(pageName, data);
    }
}

export default new logSrv();