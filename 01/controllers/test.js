exports.get = async (req, res) => {
  var context = req.context;
  context.responder.text(req, res, "Hello, world");
}
