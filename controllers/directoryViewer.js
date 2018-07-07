/**
 * GET /
 * directory viewer page.
 */
exports.directoryViewer = (req, res) => {
  res.render('directoriesView', { title: 'Media Directories' });
};
