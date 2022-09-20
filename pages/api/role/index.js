import axios from "axios";

export default function handler(req, res) {
  debugger;
  const httpMethod = req.method;
  const {} = req.body;

  switch (httpMethod) {
    case "GET":
      res.status(200).json({ message: "get role api called" });
      break;
    case "POST":
      return axios
        .post("http://185.4.30.29:8090/api/portal/role/search", {
          sort: [],
          filter: [],
        })
        .then((res) => {
          if (res.status == 200 || res.status == 202) {
            if (res.data.status) {
              res.data.data;
            } else {
              res.data.message;
            }
          } else {
            console.log("Process failed");
          }
        });
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${httpMethod} Is Not Allowed`);
  }
}
