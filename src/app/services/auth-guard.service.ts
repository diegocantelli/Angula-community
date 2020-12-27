import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }
  from '@angular/router';
import { UserService } from './user.service';

//Guardas de rotas são serviços, por isso devem ser decoradas com @Injectable()
@Injectable()

//è necessário implementar a interface canActivate
export class AuthGuardService implements CanActivate {

  constructor(private userService: UserService,
    private router: Router) { }

  //ActivatedRouteSnapshot -> Dá acesso a uma foto da rota atual, com acesso à url, parâmetros e etc
  //RouterStateSnapshot -> fornece a url para onde se deseja navegar
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.userService.isGuest()) {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {

          //state.url -> endereço da nova rota
          return: state.url
        }
      });
      return false;
    }
  }

}
