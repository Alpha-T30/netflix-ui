export const loginStart = () => ({ type: "login_start" });
export const loginSuccess = (user) => ({ type: "login_success" , payload:user});
export const loginFailure = () => ({ type: "login_fail"  });
export const logOut = () => (
    { 
        type: "logout" 
     }
    );

 
