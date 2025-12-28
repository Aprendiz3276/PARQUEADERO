export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    message: 'API funcionando - versión mínima',
    timestamp: new Date().toISOString(),
    url: req.url
  });
}
