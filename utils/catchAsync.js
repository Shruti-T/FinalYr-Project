module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
    //very imp.. if error occurs in the aysnc func then this catch will catch the error and call the global error handling middleware.
  };
};
