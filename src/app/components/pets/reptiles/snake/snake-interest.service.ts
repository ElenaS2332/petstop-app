import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnakeInterestService {

  constructor() { }

  interests = [
    {id: 'choose-the-right-snake', name: 'Choose the right snake', 
    firstParagraph: 'Ball Python - Scientifically known as Python regius, the ball python aces the list of the most popular pet snakes available. The ball python is popular for its shy nature and variety of morphs. Ball pythons are native to Central and Western Africa; hence it needs humidity in its cage unlike the other pet snakes mentioned below.',
    secondParagraph: 'Corn Snake - Just before the ball python took the hearts of snake lovers, the Pantherophis guttatus, popularly known as corn snake, was the most popular pet snake. This type of snake is native to North America. They are docile and trouble-free when it comes to handling and caring. Their color combinations, conduct, and availability make them one of the most popular pet snakes.',
    thirdParagraph: 'Rosy Boa - Though not as popular as some of the snakes on the list, the Lichanura trivirgata, commonly known by its lovely name, rosy boa, makes a good pet snake. This pet snake can live for as long as over twenty-five years. The rosy boa is docile and grows only up to four feet.',
    forthParagraph: 'California Kingsnake - The California kingsnake with its scientific name, Lampropeltis getula californiae, can eat and kill venomous snakes, including the popular and intimidating rattlesnake, hence being considered a king. The California kingsnake is popular for both trading and observing in the wild in Southern California. It is an incredibly famous beginner snake as well. However, this type of pet snake might get nippy if not handled frequently enough.',
    fifthParagraph: 'Gopher Snake - Pituophis spp. or gopher snakes come in an assortment of morphs. They are one of the most amazing secrets in the pet snake hobby community. They are quite easy to find and are priced very reasonably. The gopher snake is believed to be able to live for more than fifteen years under human care.',
    image1: 'assets/reptiles/snake/python.png',
    image2: 'assets/reptiles/snake/corn.png',
    image3: 'assets/reptiles/snake/boa.png',
    image4: 'assets/reptiles/snake/kingsnake.png',
    image5: 'assets/reptiles/snake/gopher.png',
  
  
  
  },
    {id: 'feeding', name: 'Feeding', 
    firstParagraph:'Feeding snakes is a controversial topic among reptile keepers. Some people feel it is best to feed the most natural diet in the most natural way possible, regardless of the risk to the pet, while others feel it is safer to feed a natural item more safely. You must be willing to feed prey animals to your snake (though previously frozen, pre-killed prey is the safest choice) and you will probably have to devote some freezer space to frozen prey items (i.e., rodents). ',
    secondParagraph: 'The key points to remember are that feeding pre-killed prey to pet snakes is safer and more convenient than feeding live prey. If your snake is unable to quickly kill a live prey item, the prey can inflict some nasty wounds on a snake since they are kept in a confined area. This is especially true if you are feeding rats (for example to a large python or boa constrictor) but even a small mouse can cause injury to a snake.',
    thirdParagraph: 'Injuries can happen if your snake isn not hungry enough to hunt the live prey right away or if it tries to kill the prey but does not have full control over the prey or is unsuccessful with its strike. The mouse or rat can bite back at your snake hurting it during a strike, or worse yet, if your snake does not show any interest in the prey, the mouse or rat may get hungry or bored and start chewing on your snake since neither of them has anywhere to flee. In the wild, the prey will run away and the snake will not even attempt to eat it if it is not hungry. In a captive environment, owners typically put the snake and prey item in a small container where they are kept together. If the snake is not hungry and the owners leave it with the uneaten prey for too long of a period then injuries can occur.',
    forthParagraph: 'As a safer and easier alternative, feeding pre-killed prey allows you to buy frozen prey items and stockpile them in the freezer so it is easier to have the properly sized prey on hand at all times. Running out to the pet store for food every time your snake needs to eat or raising your own prey can be more expensive and time-consuming than feeding pre-killed and it doesn’t guarantee you will be able to get the right-sized prey when your snake is hungry. Some pet stores will also sell frozen prey or fresh-killed prey which you can then freeze for later. By feeding pre-killed mice or rats you will avoid any potential injuries to your snake.',
    image1: 'assets/reptiles/snake/snake-feeding1.png',
    image2: 'assets/reptiles/snake/snake-feeding2.png',
    image3: 'assets/reptiles/snake/snake-feeding3.png',
    image4: 'assets/reptiles/snake/snake-feeding4.png',
  
  
  
  },
    {id: 'cage', name: 'Cage', 
    firstParagraph:'When it comes to keeping snakes, one of the single most important factors to consider is what sort of housing you’ll use. There are several reasons for this. Snakes are natural escape artists and will manage to escape through the most improbably small gap. A secure cage is therefore essential to prevent escapes. Snakes are cold-blooded animals and require artificial heating to remain healthy. Your snake cage can make providing artificial heat for your snake easier',
    secondParagraph: 'Pet snakes can be very sensitive to humidity. An environment that is too moist can lead to skin conditions. Equally an environment that is too dry can lead to problems with molting. In other words, getting the right cage for your snake will make everything else much easier. The wrong cage however can become a liability and either allow your pet to escape or make controlling its habitat unnecessarily difficult.',
    thirdParagraph: 'The so-called cages used for reptiles are generally known in the pet trade as “vivarium”. These normally consist of a glass front to enable easy observation of your pet, together with solid sides. The walls, roof and floor may be made from a range of different materials, most commonly either wood, plastic or glass.',
    forthParagraph: 'Wooden vivarium is some of the cheapest and most reliable cage for snakes. They are typically available in a wide range of “standard” sizes, either flat-packed or pre-built. For anyone with some basic DIY skills, buying a flat-pack version is often worthwhile as they are simple to construct yet are typically easier to transport flat, as well as being cheaper. Wooden vivariums are easily sourced from most specialist reptile shops. They are strong, versatile, and reasonably priced. They can also look very smart too if you choose a model to suit the rest of your furniture. ',
    fifthParagraph: 'Increasingly popular over recent years have been the specially designed glass vivariums for reptiles. These tanks are generally an all-glass design, with two hinged doors at the front that allow for easy access. These doors can be tremendously useful for routine maintenance and feeding, eliminating the need to lift lids or slide glass panels. This can also mean that in come designs it is possible to stack glass vivariums one on top of another, making for a very space-efficient way to keep your snakes.',
    sixthParagraph: 'Possibly the biggest benefit of glass vivariums is just how smart they look. In most cases they are the most attractive and professional-looking form of housing possible. As well as looking smart they also provide excellent visibility. Unlike most wooden or plastic vivariums, with their glass viewing panels at the front, an all-glass vivarium provides visibility from all angles.',
    image1: 'assets/reptiles/snake/snake-cage1.png',
    image2: 'assets/reptiles/snake/snake-cage2.png',
    image3: 'assets/reptiles/snake/snake-cage3.png',
    image4: 'assets/reptiles/snake/snake-cage4.png',
    image5: 'assets/reptiles/snake/snake-cage5.png',
    image6: 'assets/reptiles/snake/snake-cage6.png',
  
  },
    {id: 'entertainment', name: 'Entertainment',
    firstParagraph:'It is always better to shop and set up a terrarium before getting a snake. Snakes do not need a lot of exercises. But it is good to provide your snake proper climbing equipment and leave them to do their thing. Larger snakes, on the other hand, might need to have a dip in the water from time to time, so it is best to let them have a swim in a safe wading pool.',
    secondParagraph: 'Many pet snakes are tolerant with handling. However, do not handle them until they have successfully eaten four meals (the very least) in their new home. Additionally, wait until the bulge from their meal is gone before you lay your hand on your pet snake.',
    thirdParagraph: 'Whenever setting out to handle your snake, you’ll want to begin by picking it up gently. Typically, you’ll want to begin by gently grasping it at midbody with your fingers and lifting it slightly. As soon as possible, place your opposite hand underneath the snake to provide additional support.',
    forthParagraph: 'Once the snake is in hand, your goal should simply be to support it, provide a comfortable place for the snake to crawl around and allow the animal to explore at its leisure. You don’t want to restrain it unless necessary, as this will invariably lead to stress and defensive behaviors. Just understand that handling a pet snake is often a one-way street: While you may enjoy the activity, it is highly unlikely that your pet “enjoys” it too. Many snakes will learn to tolerate regular handling and accept it as a normal part of life, but snakes aren’t social animals in the way dogs or cats may be. They don’t sit around in their habitat all day waiting for you to come and hold them.',
    fifthParagraph: 'Most novice keepers should probably limit their handling sessions to once or twice per week, and each handling session should be relatively short – something along the lines of 10 to 15 minutes. As you gain experience and learn how to interpret your snake’s body language better, you can slowly increase the frequency and duration of handling sessions.',
    image1: 'assets/reptiles/snake/snake-entertainment1.png',
    image2: 'assets/reptiles/snake/snake-entertainment2.png',
    image3: 'assets/reptiles/snake/snake-entertainment3.png',
    image4: 'assets/reptiles/snake/snake-entertainment4.png',
    image5: 'assets/reptiles/snake/snake-entertainment5.png',
  
  
  
  },
    {id: 'health', name: 'Health',
    firstParagraph:'Within 48 hours of your purchase, your snake should be examined by a qualified reptile veterinarian. The veterinary visit typically includes determining the animals weight, as well as checking for abnormalities such as lumps and bumps or signs of external parasites. The reptile is examined for signs of dehydration and malnutrition. The mouth is examined for signs of infection (called stomatitis). A microscopic analysis of the feces is done to check for internal parasites. Many veterinarians consider all snakes (even those bred in captivity) to have intestinal parasites and recommend routine antiparasitic treatment. Vaccines are not required for snakes. Your veterinarian may recommend blood tests, cultures, or X-rays to check for other diseases if the snake appears unhealthy.',
    secondParagraph: 'Like all pets, snakes should be examined at least annually, and a fecal examination, looking for parasites, should be part of every examination. Ask for a feeding demonstration to make sure your new snake is readily taking pre-killed prey and eating well. Ball pythons are somewhat notorious for having feeding problems, so this is an especially good idea for ball pythons.',
    thirdParagraph: 'About grooming you should know that snakes shed skin. They can take care of themselves in this stage, but just make sure that you keep the temperature and humidity right for them.',
    image1: 'assets/reptiles/snake/snake-health1.png',
    image2: 'assets/reptiles/snake/snake-health2.png',
    image3: 'assets/reptiles/snake/snake-health3.png',
  
  
  
  },
    {id: 'hygiene', name: 'Hygiene',
    firstParagraph:'Bathing your snake is still a controversial question since they are wild animals, not domesticated. There is no real need to ever bathe a snake. However, some recommend bathing them once every 5/6 weeks because it helps them with digestion and  hydration. Unless you fancy it, you should leave your snake alone in its own water bowl. Some of them might like sitting in the water, while others don’t so don’t put any pressure on them.',
    image1: 'assets/reptiles/snake/snake-hygiene1.png',

  
  
  
  },
  ];
}
