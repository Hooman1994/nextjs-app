export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "get role api called" });
  } else if (req.method === "POST")
    res.status(200).json({ message: "post role api called" });
}
