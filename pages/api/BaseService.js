import http from "../../utils/http-common";

export class BaseService {
    constructor(props) {
        this.className = props;
    }

    search(searchModel) {
        return http.post("/" + this.className + "/search", searchModel);
    }

    load(id) {
        return http.get("/" + this.className + "/" + id);
    }

    merge(data) {
        return http.put("/" + this.className + "/merge", data);
    }

    remove(id) {
        return http.delete("/" + this.className + "/" + id);
    }

    removeAll(ids) {
        return http.post("/" + this.className + "/deleteAll", ids);
    }
}
