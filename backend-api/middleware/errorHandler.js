module.exports = (err, req, res, next) => {
    console.error('Error:', err);
  
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';
    const errorDetails = err.details || {};
  
    res.status(statusCode).json({
      status: 'error',
      statusCode,
      message,
      ...(Object.keys(errorDetails).length && { errorDetails })
    });
  };
  