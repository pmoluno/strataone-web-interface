module.exports = (err, req, res, next) => {
    // Log the error for server-side debugging
    console.error('Error:', err);
  
    // Set default values for status code and message
    let statusCode = 500;
    let message = 'Internal Server Error';
  
    // Use provided status and message if available
    if (err.status) {
      statusCode = err.status;
    }
    if (err.message) {
      message = err.message;
    }
  
    // Send the error response
    res.status(statusCode).json({
      error: {
        status: statusCode,
        message: message
      }
    });
  
    // Call next() to ensure the middleware chain continues
    next();
  };