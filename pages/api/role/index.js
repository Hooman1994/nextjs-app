export default function handler(req, res) {
  const httpMethod = req.method;
  const {} = req.body;

  switch (httpMethod) {
    case "GET":
      res.status(200).json({ message: "get role api called" });
      break;
    case "POST":
      res.status(200).json({ message: "post role api called" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${httpMethod} Is Not Allowed`);
  }
}
