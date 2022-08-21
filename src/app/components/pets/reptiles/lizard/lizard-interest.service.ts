import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LizardInterestService {

  constructor() { }

  interests = [
    {id: 'choose-your-lizard', name: 'Choose your lizard', 
    firstParagraph:'Bearded dragon - One of the best pet lizards for beginners and experienced handlers alike is the bearded dragon. It is one of the easiest pets to find in stores and with breeders because they are among the easiest to take care of and are quite friendly. With the right training and exposure, they can even walk on a leash as they get a little social time with their owners. They are well-behaved and sweet, living to be about 15 years old with the right care. Hint:  many bearded dragons develop unique behaviors such as “waving” or bobbing their heads. These behaviors are most often observed when they are being territorial or during mating season. This is one of the best lizards for beginners to keep.',
    secondParagraph: 'Green iguanas - They tend to be rather easy for beginners to take care of because there are no carnivorous tendencies. These reptiles are herbivores, so they should be rather easy to feed. Still, with how large they get (up to 6 feet long), they need to have enough space to grow. Their tank will also require a water pool.',
    thirdParagraph: 'Chameleons - They are rather calm and docile, but the reason that they are so beloved by owners is their ability to change colors. They won’t need to be handled because of their ability to become stressed, so it may not be the best option for kids that want a more hands-on animal. They may be a little more difficult to care for with their special needs, but they don’t need much space. Plus, they only live for about 2 years, so you won’t need to make a long-time commitment to see if these types of lizards work for your needs.',
    forthParagraph: 'Geckos - They are a little smaller than other pet reptiles, but they come in many varieties. The leopard gecko, for example, is one of the most popular options. They are easy to handle and don’t often bite, but they get much of their notoriety from the sounds that they make. Leopard geckos only grow to be about 8 inches long, reaching their full maturity at about 1 year old. The African fat-tailed gecko, on the other hand, comes from West Africa. They have the innate ability to withstand their time in captivity rather well and could live well past 20 years if you give them the right care. They are one of the easiest to take care of with any skill level, much like the crested gecko, the gold-dust day gecko, and others.',
    image1: 'assets/reptiles/lizard/dragon.png',
    image2: 'assets/reptiles/lizard/iguana.png',
    image3: 'assets/reptiles/lizard/chameleon.png',
    image4: 'assets/reptiles/lizard/gecko.png',
  
  
  
  
  },
    {id: 'feeding', name: 'Feeding', 
    firstParagraph:'You can feed your lizard live food. Live crickets and worms provide the perfect amount of protein and are closest to the way your reptile would eat in the wild. Coat live food with calcium dust to keep your reptile’s bones healthy. Commercial reptile food provides a complete, vitamin-rich diet for many reptiles. Mix with freeze-dried or live foods to help your lizard get used to eating it. Feeding it treats, including freeze-dried foods, is a great way to bond with it. Treats can also be a great source of protein.',
    secondParagraph: 'Bearded Dragons are omnivores and can eat a range of insects, fruit and vegetables. One of the most important things about your bearded dragon’s diet is variety, they need a varied diet and the amount of edible options makes them a fun reptile to feed, as anyone who has seen one chase a cricket will know.',
    thirdParagraph: 'Adult Bearded Dragons should be fed once a day however baby bearded dragons will need to be fed more often than older beardies. Bearded Dragons can eat a wide range of live food such as crickets, mealworms and kingworms; vegetables such as sweet potato and pepper and leafy greens such as kale and parsley . They can also eat limited amounts of fruit.',
    image1: 'assets/reptiles/lizard/liard-feeding1.png',
    image2: 'assets/reptiles/lizard/liard-feeding2.png',
    image3: 'assets/reptiles/lizard/liard-feeding3.png',
  
  
  
  
  },
    {id: 'hygiene', name: 'Hygiene', 
    firstParagraph:'Many lizards enjoy the occasional soak in a water dish or bathing pool. Sometimes your lizard may need a more serious cleaning, however. If the lizard is shedding, a gentle bath can help ease the process and remove stubborn pieces of skin. A lizard with a mite infestation will benefit from a bath in diluted Betadine, which can both kill the mites and help heal any bites on the lizard’s skin.',
    secondParagraph: 'Place a water bowl in your lizard’s habitat so it can bathe at any time. Most lizards enjoy soaking from time to time. Provide a shallow water bowl that is big enough that the lizard can completely submerge itself in it. Make sure the bowl is heavy enough that it will not tip over and keep it filled with clean, fresh water always.',
    thirdParagraph: 'Having access to a bath is especially helpful when your lizard is shedding, since the moisture can help soften and loosen the dead skin. You can also gently mist your lizard with a plant mister 2-3 times weekly.',
    forthParagraph: 'Change out the water in your lizard’s bowl daily. Empty your lizard’s bowl and refill it with clean, room-temperature water every day. If you provide water for your lizard in a large, shallow bowl, the water will evaporate quickly. The water can also become contaminated if your lizard defecates or gets food or substrate in it. You may need to change the water more frequently than once a day if it becomes dirty quickly.',
    image1: 'assets/reptiles/lizard/lizard-hygiene1.png',
    image2: 'assets/reptiles/lizard/lizard-hygiene2.png',
    image3: 'assets/reptiles/lizard/lizard-hygiene3.png',
    image4: 'assets/reptiles/lizard/lizard-hygiene4.png',

  
  
  },
    {id: 'cage', name: 'Cage',
    firstParagraph:'There are several species of lizards that are popular as pets, including the bearded dragon. The species of lizard you have or are planning to get is the most important factor when choosing the best lizard cage for your pet. Every type of lizard has its own characteristics that will affect the kind of cage it needs. Some are climbers, and some are ground dwellers; some lizards like to run, and others are more stationary. Consider the special characteristics of your lizard species when selecting the best lizard cage.',
    secondParagraph: 'A climbing species of lizard will require a taller cage, and a species that runs or burrows underground might require a cage that is longer but not as tall. Some species, such as the bearded dragon, for example, like to climb and run. For beardies, a cage that is high enough to accommodate a branch or perch and long enough to accommodate running is necessary.',
    thirdParagraph: 'The overall size of the lizard cage is very important and should be based on the adult size of the lizard. Selecting the largest cage, you can reasonably accommodate is a good idea, because you really cannot go too big.',
    image1: 'assets/reptiles/lizard/lizard-cage1.png',
    image2: 'assets/reptiles/lizard/lizard-cage2.png',
    image3: 'assets/reptiles/lizard/lizard-cage3.png',
  
  
  
  },
    {id: 'entertainment', name: 'Entertainment',
    firstParagraph:'Many lizards like to relax out and hide away, which is perfectly OK; however, you can give them with some excellent toys that will provide the optimal atmosphere for them to do so. Hides and hammocks, branches and vines, and other natural structures provide the ideal habitat for maintaining a healthy lizard while also providing them with ample space to climb and wander around.',
    secondParagraph: 'The most effective approach of taming a lizard is to just provide it with enough space. Do not handle the lizard when it is initially unpacked. Instead, set it in its cage and leave it alone. Resist the temptation to engage in conversation with it. During the following weeks (or perhaps months), you will work toward achieving the following goal: using food to build a friendship with your lizard.',
    thirdParagraph: 'Make an investment in a high-quality vivarium for your bearded dragon. Turn off the lights when you go to sleep at night. Give your bearded dragon a variety diet to keep him healthy. Make certain that your bearded dragon receives adequate nutrition. Avoid overcrowding your bearded dragon’s enclosure.',
    forthParagraph: 'Instead, use ping pong balls, light rubber balls, or cat-sized balls to keep your hands clean. Make sure to sit in an open place when you are playing with your beardie. If the cage is large enough, they will be able to play with the ball within. However, it is preferable to provide your lizard with lots of area to play.',
    image1: 'assets/reptiles/lizard/lizard-entertainment1.png',
    image2: 'assets/reptiles/lizard/lizard-entertainment2.png',
    image3: 'assets/reptiles/lizard/lizard-entertainment3.png',
    image4: 'assets/reptiles/lizard/lizard-entertainment4.png',
  
  
  
  },
    {id: 'breeding', name: 'Breeding',
    firstParagraph:'As a rule, you need a breeding pair if you are going to try to breed, but sometimes it can happen that you acquire a pregnant female. Care of this female requires meticulous attention because the capture, transport, and changes of environment and climate are particularly damaging to a pregnant animal; successful egg-laying will only occur under the best possible environmental conditions. Most lizard-keepers are not acquainted with the phenomenon that can occur in some lizard populations: unisexual reproduction (parthenogenesis); it is considered an exception. Therefore the lizard-keeper must become concerned with distinguishing between male and female.',
    secondParagraph: 'An incubator is necessary for brooding the eggs (maturing or incubation). It should have been set up during the courtship period and be standing ready. A discarded aquarium or a small refrigerator that no longer works are suitable for use as incubators. A thermostatically controlled heat source (a heating cable, heat lamp, or incandescent bulb) must be installed inside. You will find details of incubator temperature and length of incubation in the descriptions of the lizards in the last chapter. Before transferring the eggs, you must be sure that the proper temperature has been reached and that it can be maintained constantly.',
    thirdParagraph: 'How long the eggs remain in the incubator depends on the species of lizard. The maturation time, the length of time between egg-laying and hatching, can vary widely. For instance, with monitor lizards it requires up to 120 days, whereas it is only 50 days for the Madagascar gecko. To free itself from the egg, the hatchling uses its egg tooth to rip open the shell. This is a tooth, located forward on the premaxillary bone, which grows in most lizard embryos and falls out a few days after hatching. After hatching, the young lizards are placed in a separate terrarium, arranged appropriately for the species of lizard. In the “parental” terrarium they would be in danger of attack and resulting fatal bites from the parent animals. The newly hatched lizards must slowly become used to the climate of the parent animals after the regular temperature of the incubator. There is no reason to keep them warmer.',
    forthParagraph: 'The time at which food is first taken can vary widely indeed. Whereas skinks take their first food soon after birth, the reserves of some species can last for as long as a few weeks. You should not lose patience and resort to force-feeding; this in combination with the psychic stress will worsen the general health of the young lizard, thus endangering its chances of hardiness in the future. Food for young lizards must be rich in variety and prepared with utmost care, and the calcium and vitamin supply especially should not be neglected.',
    image1: 'assets/reptiles/lizard/lizard-breeding1.png',
    image2: 'assets/reptiles/lizard/lizard-breeding2.png',
    image3: 'assets/reptiles/lizard/lizard-breeding3.png',
    image4: 'assets/reptiles/lizard/lizard-breeding4.png',
  
  
  },
  ];
}
