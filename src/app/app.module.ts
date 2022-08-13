import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import { PetsComponent } from './components/pets/pets.component';
import { VetComponent } from './components/vet/vet.component';
import { AdoptionComponent } from './components/adoption/adoption.component';
import { ClickOutsideDirective } from './clickOutside.directive';
import { CatComponent } from './components/pets/cat/cat.component';
import { DogComponent } from './components/pets/dog/dog.component';
import { HamsterComponent } from './components/pets/hamster/hamster.component';
import { GuineaPigComponent } from './components/pets/guinea-pig/guinea-pig.component';
import { RabbitComponent } from './components/pets/rabbit/rabbit.component';
import { PigComponent } from './components/pets/pig/pig.component';
import { OtterComponent } from './components/pets/otter/otter.component';
import { FishComponent } from './components/pets/fish/fish.component';
import { FrogsComponent } from './components/pets/frogs/frogs.component';
import { ReptilesComponent } from './components/pets/reptiles/reptiles.component';
import { BirdsComponent } from './components/pets/birds/birds.component';
import { InterestComponent } from './components/pets/cat/interest/interest.component';
import { DogInterestComponent } from './components/pets/dog/dog-interest/dog-interest.component';
import { GuineaPigInterestComponent } from './components/pets/guinea-pig/guinea-pig-interest/guinea-pig-interest.component';
import { HamsterInterestComponent } from './components/pets/hamster/hamster-interest/hamster-interest.component';
import { PigInterestComponent } from './components/pets/pig/pig-interest/pig-interest.component';
import { RabbitInterestComponent } from './components/pets/rabbit/rabbit-interest/rabbit-interest.component';
import { OtterInterestComponent } from './components/pets/otter/otter-interest/otter-interest.component';
import { SnakeComponent } from './components/pets/reptiles/snake/snake.component';
import { LizardComponent } from './components/pets/reptiles/lizard/lizard.component';
import { TurtleComponent } from './components/pets/reptiles/turtle/turtle.component';
import { LizardInterestComponent } from './components/pets/reptiles/lizard/lizard-interest/lizard-interest.component';
import { SnakeInterestComponent } from './components/pets/reptiles/snake/snake-interest/snake-interest.component';
import { TurtleInterestComponent } from './components/pets/reptiles/turtle/turtle-interest/turtle-interest.component';
import { FrogsInterestComponent } from './components/pets/frogs/frogs-interest/frogs-interest.component';
import { FishInterestComponent } from './components/pets/fish/fish-interest/fish-interest.component';
import { HorseComponent } from './components/pets/horse/horse.component';
import { HorseInterestComponent } from './components/pets/horse/horse-interest/horse-interest.component';
import { BirdsInterestComponent } from './components/pets/birds/birds-interest/birds-interest.component';
import {MatIconModule} from '@angular/material/icon';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    PetsComponent,
    VetComponent,
    AdoptionComponent,
    ClickOutsideDirective,
    CatComponent,
    DogComponent,
    HamsterComponent,
    GuineaPigComponent,
    RabbitComponent,
    PigComponent,
    OtterComponent,
    FishComponent,
    FrogsComponent,
    ReptilesComponent,
    BirdsComponent,
    InterestComponent,
    DogInterestComponent,
    GuineaPigInterestComponent,
    HamsterInterestComponent,
    PigInterestComponent,
    RabbitInterestComponent,
    OtterInterestComponent,
    SnakeComponent,
    LizardComponent,
    TurtleComponent,
    LizardInterestComponent,
    SnakeInterestComponent,
    TurtleInterestComponent,    
    FrogsInterestComponent,
    FishInterestComponent,
    HorseComponent,
    HorseInterestComponent,
    BirdsInterestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot()
  ],
  entryComponents: [CatComponent, DogComponent, HamsterComponent,
  GuineaPigComponent, RabbitComponent, PigComponent, OtterComponent,
   FishComponent, FrogsComponent, ReptilesComponent, BirdsComponent
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
