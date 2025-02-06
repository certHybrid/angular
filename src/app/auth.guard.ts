import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // contructor(public router: Router){};
  let user=JSON.parse(localStorage.getItem("current_user")!);
  if(!user){
    alert("youre not authenticated");
    return false;
  }
  return true;
};
