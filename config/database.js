module.exports = (err, req, res, next) => {
    console.error('Error:', err);
  
    const statusCode = err.status || 500;
    const message = err.message || 'Internal server error';
  
    res.status(statusCode).json({ message });
  };
  