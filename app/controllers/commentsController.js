var Comment = require('../models/comment');

function commentById(request, response, next, id) {
    Comment.findById(id, function(error, comment) {
    if (err)
        console.log ('could not update comment')

    request.comment = comment;
    next();
    });
}
//Create function, new comment post
function create(req, res) {
    var comment = new Comment();
    comment.name = req.body.comment
    comment.content = req.body.content
    comment.save(function(err) {
        res.json({message: 'Comment was successfully created'})
    });
}

function index(req, res) {
    Comment.find(function(err, comments) {
        if(err) {
            console.log('Could not index comments!')
            res.json(comments);
        }
    })
}
function show(req, res) {
  res.json(request.comment);
}

function update(req, res) {
  var data = request.body; //not sure about this line?
  var comment = request.comment

  Object.keys(data).forEachcomment(function(key) {
    comment.set(key, data[key]);
  });

  comment.save(function(err) {
    if (err) console.error('Could not update comment b/c:', err);
    response.json({message: 'comment successfully updated'});
  });
}

function destroy(req, res) {
  Comment.remove({ _id: request.params.article_id }, function(err) {
    if (err) console.log('Could not delete article b/c:', err);

    res.json({message: 'Article successfully deleted'});
  })
}

module.exports = {
  blogById: commentById,
  create: create,
  index: index,
  show: show,
  update: update,
  destroy: destroy
};
