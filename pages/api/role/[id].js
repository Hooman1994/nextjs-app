import axios from "axios";

function handler(req, res) {
  debugger
  const httpMethod = req.method;
  const roleId = req.body.id;
  const { id, name, active } = req.body;

  switch (httpMethod) {
    case "GET":
      if (result.length > 0) {
        res.status(200).json(result[0]);
      } else {
        res
          .status(404)
          .json({ message: `Role with Id ${roleId} is not found.` });
      }
      break;
    case "PUT":
      return axios
        .put("http://185.4.30.29:8090/api/portal/role/merge", {
          id: id,
          name: name,
          active: active,
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
    case "DELETE":
      return axios
        .delete(`http://185.4.30.29:8090/api/portal/role/ ${id}`, {
          id: id,
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
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${httpMethod} Is Not Allowed`);
  }
}

export default handler;
