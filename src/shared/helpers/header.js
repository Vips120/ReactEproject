
export const Header = () => {
    let user = JSON.parse(localStorage.getItem('currentuser'));
    // console.log(user); 
    if(user.data && user.data.token){
      return {"x-auth-token": user.data.token};
    } else {
        return {};
    }
}