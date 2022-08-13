
import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
  UserCredential,
  GoogleAuthProvider,
  signInWithPopup,
  
} from '@angular/fire/auth';
import { concatMap, from, Observable, of, switchMap } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

 
@Injectable({
  providedIn: 'root',

})

export class AuthenticationService {

  currentUser$ = authState(this.auth)
  

  constructor(
    private auth : Auth,
    private toast : HotToastService,
    private router : Router,
    private _cookieService: CookieService,
    ) { }
  
  login(email: any, password : any ): Observable<any>{
    this.router.navigate(['home']);
    this._cookieService.set('IS_LOGGED_IN', 'true');
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  signUp(name: any, email: any, password: any): Observable<any>{
  
    this.router.navigate(['home'])
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap(({ user }) => updateProfile(user, {displayName:name} ))
    );
  }

  logout(){
    this.router.navigate(['']);
    this._cookieService.set('IS_LOGGED_IN', 'false');
    return from(this.auth.signOut());
  }
  
  // googleSignIn(){
  //   return from(signInWithPopup(this.auth, new GoogleAuthProvider)).pipe(
  //     this.toast.observe({
  //       success: 'You signed up successfuly',
  //       loading: 'Signing up...',
  //       error: ({ message }) => `${message}`
  //     })
  //   ).subscribe(() => {
  //     this.router.navigate(['home'])
  //   });
    
  // }

}
