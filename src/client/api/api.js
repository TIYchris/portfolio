import axios from "axios";
import Cookie from "js-cookie";

var instance = axios.create();

instance.defaults.baseURL = "/api/";

instance.sendEmail = function(payload) {
    return this.post("email/", payload)
        .then(function(result) {
            if (result.data.error) {
                throw new Error(result.data.error);
            }
        });
};

export default instance;
