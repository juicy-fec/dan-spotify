// module.exports = doc => {
//   doc._id = doc.id;
//   delete doc.id;
//   return doc;
// };

// For tracks
module.exports = doc => {
  doc._id = doc.id;
  delete doc.id;
  doc.playcount = parseInt(doc.playcount);
  return doc;
};

// // For artists
// module.exports = doc => {
//   doc._id = doc.id;
//   delete doc.id;
//   return doc;
// };
