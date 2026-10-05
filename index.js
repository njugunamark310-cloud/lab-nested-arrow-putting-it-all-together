const createLoginTracker = (userInfo) => {
    let attempts =0;

    const login = (password) => {
        if (attempts >= 3) {
            return "Account locked";
        }
    };

    return login;
    
};


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};