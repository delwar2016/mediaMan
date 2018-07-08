const dirTree = require('directory-tree');

/**
 * GET /api/upload
 * File Upload API example.
 */

exports.getFileUpload = (req, res) => {
  res.render('api/upload', {
    title: 'File Upload'
  });
};

exports.postFileUpload = (req, res) => {
  req.flash('success', { msg: 'File was uploaded successfully.' });
  res.redirect('/api/upload');
};
exports.getMediaReplacePath = (req, res) => {
  res.send(process.env.fileStorage);
};
exports.getMediaStructures = (req, res) => {
  let directories = [];
  try {
    directories = [dirTree(process.env.fileStorage)];
  } catch (e) {
    console.log(e);
  }
  res.send(directories);
};
