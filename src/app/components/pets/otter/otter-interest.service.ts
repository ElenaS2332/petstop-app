import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtterInterestService {

  constructor() { }

  interests = [
    {id: 'feeding', name: 'Feeding',
    firstParagraph:'The staple diet of the otters in the wild is fish (with eels being particularly favored in the summer), frogs, small birds, and eggs. Small mammals may also be eaten. Sea otters and coastal otters have a different range of prey to choose which often includes a variety of invertebrates such as mussels and crabs as well as fish. Sea otters and the African Clawless Otter have broad molar teeth for crushing shellfish whereas the teeth of the European otter are narrower for slicing through fish.',
    secondParagraph: 'Otters are carnivores with a high metabolic rate, requiring them to consume 20% of their body weight per day. If you want to take a good care for your otter pet, the base should consist of nutritionally complete cat food. About 70–80% of the diet can be meat-based and can consist of day-old chicks, chicken, venison, rabbit, etc. and 20–30% should be fish.',
    thirdParagraph: 'Vegetables, insects, crayfish, monkey nuts, soft-boiled eggs, etc. can also be offered to supplement the diet. This can be fed irregularly with a "scatter" method to ward off stereotypic behavior—something that occurs when certain animals are fed at specific times.',
    image1: 'assets/otter/otter-feeding1.png',
    image2: 'assets/otter/otter-feeding2.png',
    image3: 'assets/otter/otter-feeding3.png',
  
  
  
  },
    {id: 'sleeping', name: 'Sleeping',
    firstParagraph:'First of all, you need to be aware that the otters emit an odor and that is the reason they are kept outdoors. Keeping an otter inside the house would make your hands busy. They also mark their territory by smearing their scent; which is known as sprinting. They also litter their droppings which also emits a foul odor due to a high fish diet. Otters put down their spraint to mark their territory and for communicating their home range to other otters. They are basically signals for the use of resources and preventing any competition from their peers. The spraints of otters are their feces.',
    secondParagraph: 'Depending on the type of the otter, you should have prepared a place to sleep. Sea otters sleep in water, that’s why they’re unique – they hold hands with another otter in order to not drift away while sleeping. On the other hand, river otters don’t sleep in water, instead they sleep in their dens or anywhere above the ground as long as they feel safe. However, they don’t build the dens by themselves, instead they use the shelters from other animals, invading them to make them their own, which means it wouldn’t be so hard for you to build them one. It should feels as home for them so make sure you use enough grass, sand, branches, etc. And if you’re keeping a sea otter, make sure it has enough water and space in its own bathhouse.',
    image1: 'assets/otter/otter-sleeping1.png',
    image2: 'assets/otter/otter-sleeping2.png',
  
  
  
  
  },
    {id: 'entertainment', name: 'Entertainment', 
    firstParagraph:'Otters are high on energy and do not like to be restrained or restricted. They like large spaces and like attention, but they are not domesticated easily. They do not like to physically interact but like to play and have a personable, entertaining personality. They also have sharp teeth and can turn aggressive if annoyed. They can be dangerous especially if not under supervision near children.',
    secondParagraph: 'It is extremely important that you provide diverse enrichment for otters—and all animals for that matter. Some ideas include: freezing food in ice cubes on a hot day; taking feathers directly from the bird so the scent is present, and scatter them in various places; placing food out of reach so the animal needs to work out how to get it down; using food dispensing devices available for dogs and cats that must be manipulated to dispense treats. These toys are excellent for species that hunt and forge.',
    thirdParagraph: 'In nature, otters create their dens by making burrows in the land near water bodies. So they need trees, roots, and branches to scavenge and need large spaces to live in as they are naturally wild animals. They also love to dig and forage, so their terrain should be enriched with all these elements if you are planning to keep an otter as a pet.',
    forthParagraph: 'Another thing you should know is that otters live in colonies and family groups. They do not like to be kept alone and need the love and companionship of their family. So, if you are planning to keep an otter as a pet, you should ensure that they are never alone.',
    image1: 'assets/otter/otter-entertainment1.png',
    image2: 'assets/otter/otter-entertainment2.png',
    image3: 'assets/otter/otter-entertainment3.png',
    image4: 'assets/otter/otter-entertainment4.png',
  
  
  
  
  },
    {id: 'breeding', name: 'Breeding', 
    firstParagraph:'Breeding in otters is not seasonal and they can breed throughout the whole year. The gestation period is about 63 days, and the newborns are born in the roots of the tree, borrows or a hollow log. The baby otter reaches maturity after 2 years and can start breeding after attaining maturity. The mother rears the young offspring until the young one becomes one year old. The baby otter starts swimming at 3 months easily.',
    image1: 'assets/otter/otter-breeding1.png',

  
  
  
  },
    {id: 'cage', name: 'Cage', 
    firstParagraph:'The cage of the otter needs to be outdoors as otters are wild animals and need open spaces to live. They also need to be caged if kept inside, as they will certainly destroy your complete home with their level of energy and cleverness.',
    secondParagraph: 'The cage should be large enough (approximately 60 sq. meters) for your otter to have sufficient space to live, dig, forage, and make deep borrows. The cage should also have a water body which should be kept clean. The temperature should also be maintained of both the water and the cage to ensure the well-being of the otter.',
    thirdParagraph: 'Their cages should also have a terrain with bushes, branches, trees, burrowed logs and roots as they like to scavenge and dig. Their cage should have a minimum of 30% water area and the rest should be land as they need to dry themselves. The fencing of the cage has to be secure and leading with a horizontal ledge on the top so that your otters do not climb up the fence and escape from the cage.',
    image1: 'assets/otter/otter-cage1.png',
    image2: 'assets/otter/otter-cage2.png',
    image3: 'assets/otter/otter-cage3.png',
  
  
  
  
  },
    {id: 'hygiene', name: 'Hygiene', 
    firstParagraph:'Otters naturally clean themselves all they time when they’re in water. However, otters have a strong odor that lingers around them. Their unpleasant smell can permeate a home if they live indoors. They also mark their territory by smearing their feces around, which contributes to the odor.',
    secondParagraph: 'It is very difficult to potty train otters, and they litter a lot during the day due to their fast metabolism. So, if you keep an otter as a pet, be ready to clean the potty of your otter several times during the days from different parts of your home.',
    thirdParagraph: 'But basically, there’s not much you can do. Unlike dogs and cats, otters cannot be domesticated easily. You can give them a regular bath from time to time, using a shampoo for pets, but don’t expect the odor to come off. Otters enjoy water, so they won’t make a mess while bathing them, but in reality it is unnecessary.',
    image1: 'assets/otter/otter-hygiene1.png',
    image2: 'assets/otter/otter-hygiene2.png',
    image3: 'assets/otter/otter-hygiene3.png',
  
  
  
  
  },
  ];
}
