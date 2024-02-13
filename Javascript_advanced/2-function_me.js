function welcomeMessage(fullName) {
    // Define a closure for alerting the welcome message
    return function() {
      alert('Welcome ' + fullName);
    };
  }
  
  // Create variables using the welcomeMessage function
  var guillaume = welcomeMessage('Guillaume');
  var alex = welcomeMessage('Alex');
  var fred = welcomeMessage('Fred');
  
