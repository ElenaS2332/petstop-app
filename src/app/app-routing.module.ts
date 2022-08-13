import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { PetsComponent } from './components/pets/pets.component';
import { VetComponent } from './components/vet/vet.component';
import { AdoptionComponent } from './components/adoption/adoption.component';
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
import { FishInterestComponent } from './components/pets/fish/fish-interest/fish-interest.component';
import { HorseComponent } from './components/pets/horse/horse.component';
import { HorseInterestComponent } from './components/pets/horse/horse-interest/horse-interest.component';
import { BirdsInterestComponent } from './components/pets/birds/birds-interest/birds-interest.component';
import { LoginGuard } from './guards/login-guard.service';
import { FrogsInterestComponent } from './components/pets/frogs/frogs-interest/frogs-interest.component';
import { EmptyRouteGuard } from './guards/empty-route-guard.service';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LandingComponent, pathMatch: 'full', canActivate: [EmptyRouteGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent },
      {
        path: '',
        canActivate: [LoginGuard],
        children: [
          { path: 'home', component: HomeComponent },
          { path: 'pets', component: PetsComponent },
          { path: 'vet', component: VetComponent },
          { path: 'adoption', component: AdoptionComponent },
          { path: 'pets/cat', component: CatComponent },
          { path: 'pets/dog', component: DogComponent },
          { path: 'pets/hamster', component: HamsterComponent },
          { path: 'pets/guinea-pig', component: GuineaPigComponent },
          { path: 'pets/rabbit', component: RabbitComponent },
          {
            path: 'pets/pig',
            component: PigComponent
          },
          {
            path: 'pets/otter',
            component: OtterComponent
          },
          {
            path: 'pets/fish',
            component: FishComponent
          },
          {
            path: 'pets/frogs',
            component: FrogsComponent
          },
          {
            path: 'pets/reptiles',
            component: ReptilesComponent
          },
          {
            path: 'pets/birds',
            component: BirdsComponent
          },
          {
            path: 'pets/horse',
            component: HorseComponent
          },
          {
            path: 'pets/birds/birds-interest/:id',
            component: BirdsInterestComponent
          },
          {
            path: 'pets/cat/cat-interest/:id',
            component: InterestComponent
          },
          {
            path: 'pets/horse/horse-interest/:id',
            component: HorseInterestComponent
          },
          {
            path: 'pets/dog/dog-interest/:id',
            component: DogInterestComponent
          },
          {
            path: 'pets/guinea-pig/guinea-pig-interest/:id',
            component: GuineaPigInterestComponent
          },
          {
            path: 'pets/hamster/hamster-interest/:id',
            component: HamsterInterestComponent
          },
          {
            path: 'pets/pig/pig-interest/:id',
            component: PigInterestComponent
          },
          {
            path: 'pets/rabbit/rabbit-interest/:id',
            component: RabbitInterestComponent
          },
          {
            path: 'pets/otter/otter-interest/:id',
            component: OtterInterestComponent
          },
          {
            path: 'pets/fish/fish-interest/:id',
            component: FishInterestComponent
          },
          {
            path: 'pets/frogs/frogs-interest/:id',
            component: FrogsInterestComponent
          },
          {
            path: 'pets/reptiles/snake',
            component: SnakeComponent
          },
          {
            path: 'pets/reptiles/lizard',
            component: LizardComponent
          },
          {
            path: 'pets/reptiles/turtle',
            component: TurtleComponent
          },
          {
            path: 'pets/reptiles/lizard/lizard-interest/:id',
            component: LizardInterestComponent
          },
          {
            path: 'pets/reptiles/snake/snake-interest/:id',
            component: SnakeInterestComponent
          },
          {
            path: 'pets/reptiles/turtle/turtle-interest/:id',
            component: TurtleInterestComponent
          },
        ]
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
