import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RabbitInterestService {

  interests = [
    {id: 'feeding', name: 'Feeding',
    firstParagraph:'Rabbits as herbivores, love to eat hay, grass, and vegetables. Fresh hay should make up the bulk of your rabbit’s diet and needs to be always available. Adult rabbits can eat timothy, grass, and oat hays, while younger rabbits should be fed alfalfa. Alfalfa should not be given to adult rabbits because of the higher protein and sugar content. Hay is important for rabbits because it provides the essential fiber needed for good digestive health and it helps wear down a rabbit’s teeth (which continuously grow) for good dental health. Placing hay at one end of a litter box will also encourage the use of the litter box, as rabbits tend to eat hay and poop at the same time.',
    secondParagraph: 'When choosing hay, make sure it looks and smells fresh. Do not choose a hay that looks brown or moldy or no longer smells like fresh cut grass. Store hay in a dry place in a container that allows air flow to keep it from getting moldy. Buying hay in bulk from a local farmer tends to be much more economical than buying bags from a pet store.',
    thirdParagraph: 'A varied assortment of vegetables should be a part of your rabbit’s daily diet. When choosing vegetables look for something fresh and free of pesticides. Always wash your vegetables thoroughly before feeding them to your rabbit. Feed new vegetables in small quantities until you can judge if your rabbit reacts well to them. Do not feed rabbits the leaves from houseplants as many are poisonous to rabbits. Your rabbit may enjoy: broccoli leaves (stems or tops can make rabbits gassy), carrot tops (carrots are high in calcium and should be given sparingly), celery, lettuce, mint, mustard greens, dandelion leaves etc. ',
    forthParagraph: 'You can give your rabbit some pellets from time to time. They should be purchased so that they are fresh, as bunnies will turn their noses up at stale pellets. Look for pellets that are high in fiber and low in protein. You will need to limit your rabbit’s pellet intake as it ages. Pellets that are high in protein can lead to obesity and other health issues in rabbits. Do not give pellets that have “treats” mixed in (dried corn, etc.). These additives are never healthy for rabbits and can cause digestive problems.',
    image1: 'assets/rabbit/rabbit-feeding1.png',
    image2: 'assets/rabbit/rabbit-feeding2.png',
    image3: 'assets/rabbit/rabbit-feeding3.png',
    image4: 'assets/rabbit/rabbit-feeding4.png',
  
  
  
  },
    {id: 'sleeping', name: 'Sleeping',
    firstParagraph:'Rabbits are crepuscular. This means that rabbits are often most active around dawn and twilight, and get their sleep in two blocks of time: from late morning until early evening, and also in the middle of the night. This odd sleep cycle may be an evolutionary adaptation to the rabbit’s status as a prey animal. Because visibility is lowest for predators around dawn and twilight, rabbits are safest to eat and move around at these times. Even though rabbits have been domesticated for centuries, this protective mechanism is still found in every breed.',
    secondParagraph: 'Rabbits never appear to close their eyes during the day or night. This may leave you wondering if your rabbit ever sleeps. Rabbits have a third eyelid called the nictitating membrane, which is invisible to the human eye. This translucent eyelid closes while a rabbit is sleeping. The nictitating membrane helps a rabbit retain a constant state of vigilance while sleeping. It allows your pet to react if she sees something threatening. She will be awake in an instant and will likely flee to a safer location. No rabbit will close her eyes unless she feels completely safe.',
    thirdParagraph: 'Rabbits can sleep with their eyes open or closed. It depends on how relaxed/tired your rabbit is. Rabbits sleeping with their eyes open are still sleeping. However, you can notice if it sleeps if its breathing slowed down. On most rabbits, you can see the expansion of their lungs and stomach when they breathe. Also, they completely stop moving. This means even their constantly twitching noses will settle down. Flat, relaxed ears show that your rabbit is either asleep or fast on their way towards being so.',
    image1: 'assets/rabbit/rabbit-sleeping1.png',
    image2: 'assets/rabbit/rabbit-sleeping2.png',
    image3: 'assets/rabbit/rabbit-sleeping3.png',
  
  
  
  },
    {id: 'entertainment', name: 'Entertainment', 
    firstParagraph:'You can buy some toys for your rabbit at the store. For example: tunnels, maze haven, willow balls, rabbit-safe toys with bells in. However, you can find another way to entertain each other as well. You can play the "Flip and Toss" game. Bunnies quite often love to throw things around. Some rabbits will even attack things if you roll them towards them, much like a dog would do. There are a lot of small toys available for rabbits, usually made from some form of sisal or cane that are perfect for being picked up in a bunny’s mouth and thrown around.',
    secondParagraph: 'Give your rabbit something to chew on. Of course, a big part of a bunny’s repertoire is chewing. If a rabbit doesn’t have good toys to chew on, it will soon start chewing things it should not. Obsessive chewing could also be a sign of neurosis, which could develop if your rabbit is just plain bored with everything.',
    thirdParagraph: 'Your rabbit will actually be satisfied with just a cardboard box with door holes cut out. It takes too little effort for your rabbit to be running around. Put something to jump on. Put some chewing toys around. Toilet roll inners stuffed with hay and herbs. Be creative. Your pet would love it. And don’t forget to change the environment from time to time in order to keep your rabbit interested. Lastly, the best thing of all to keep your rabbit happy and entertained is a bunny friend. Rabbits are happiest when they have a partner to share life with.',
    image1: 'assets/rabbit/rabbit-entertainment1.png',
    image2: 'assets/rabbit/rabbit-entertainment2.png',
    image3: 'assets/rabbit/rabbit-entertainment3.png',
  
  
  
  
  },
    {id: 'liter-box', name: 'Liter box',
    firstParagraph:'Rabbits have a natural inclination to excrete and urinate in one area. Take advantage of this by setting up a medium-sized cat litter box or shallow storage bin near their food/water bowls and hay feeder. Put a thin layer of rabbit-safe, recycled newspaper pellet litter at the bottom of the litter box. Do not use clay/clumping cat litter or wood shavings, as they are not safe for rabbits. Then put hay on top of the litter. Rabbits like to eat hay and poop at the same time, so this will encourage good litter box habits.',
    secondParagraph: 'Keep litter boxes clean. Rabbits are very clean creatures. A smelly, soiled litter box could cause your rabbit to choose another place to do his business, sometimes just outside the box. Depending on the number of rabbits and litter boxes, clean litter boxes at least every other day. Once a week is not enough.',
    image1: 'assets/rabbit/rabbit-litter-box1.png',
    image2: 'assets/rabbit/rabbit-litter-box2.png',
  
  
  
  
  },
    {id: 'hygiene', name: 'Hygiene', 
    firstParagraph:'Bathing your rabbit is not necessary, neither recommended. By nature, rabbits are very clean animals as keeping their odor down is an important way of hiding from predators. They are pretty sensitive and the noise and the spray from a shower can scary them. Nevertheless, if you insist on bathing them, or the vet suggests it, you should know some tips how to not make this a traumatic experience for your pet. ',
    secondParagraph: 'Firstly, brush the rabbit to remove bits of dirt. Many rabbits loved to be brushed, and it is a great way to help them keep their fur clean. Buy a brush made specifically for rabbit fur (often finer-toothed than brushes intended for dogs). Every few days, gently hold your rabbit while brushing its fur. Focus on areas that have bits of bedding or dirt. When you are finished, wash the brush, and dry it.',
    thirdParagraph: 'Be sure to handle the rabbit very gently. Not all rabbits enjoy the experience of being brushed. If yours seems startled or upset by brushing, stop the process, and try again later. Long-haired rabbits require a little extra fur care. Keep your rabbit’s fur trimmed to an inch or so that it won’t become tangled. This will help cut back on shedding and keep the fur clean.',
    forthParagraph: 'Secondly, find someone to help you. One person can keep a firm hold of the rabbit whilst the other person does the bathing. Make sure that you have a non-slippery rubber mat or towel on the bottom of the bath, sink or bowl you are using as a bath. This helps the rabbit to grip so they are less likely to panic and thrash/scrabble around. Use warm water and constantly check to ensure it isn’t getting hotter or colder. Showers can sometimes be noisy and too powerful, so using a jug of water instead is generally preferable. Start at the rabbit’s rump and work your way forward, wetting the fur to the skin. Do not wet their head unless told to do so by your vet and ensure you do not get water or shampoo in their eyes or ears. If you are using shampoo, lather it in and rinse off thoroughly.',
    image1: 'assets/rabbit/rabbit-hygiene1.png',
    image2: 'assets/rabbit/rabbit-hygiene2.png',
    image3: 'assets/rabbit/rabbit-hygiene3.png',
    image4: 'assets/rabbit/rabbit-hygiene4.png',
  
  
  
  
  },
    {id: 'breeding', name: 'Breeding', 
    firstParagraph:'Rabbits can become pregnant early in life, with some smaller breeds starting their reproductive life stage as early as 4 months of age. A female rabbit is fertile for all but about 3 days per month, but will only produce an egg for insemination when mated by a male rabbit in sexual intercourse. Once impregnated, a mother rabbit is expectant for about 32 days and, on average, will have a litter of about six (or so) young; although it is possible for a litter to top fourteen babies. If the female has not given birth by day 32 of her pregnancy, your veterinarian may induce labor; otherwise, a dead litter may be delivered sometime after day 34. Occasionally, pregnant does abort or reabsorb the fetuses because of nutritional deficiencies or disease.',
    secondParagraph: 'The female begins to nest several days to a few hours before parturition. Hair epilates more easily as estrogen levels rise and progesterone levels fall, and the doe plucks hair from her abdomen, sides, and dewlap. She then uses the fur to line her nest of hay and straw. Rabbit babies are born naked, blind, and deaf. They begin to show hair a few days after birth, and their eyes and ears are open by day 10. Newborn rabbits are unable to regulate their own body temperature until about day 7. ',
    thirdParagraph: 'If the mother can’t breastfeed all of the kids, they need to be fostered by removing them from the nest box during the first 3 days and giving them to a doe of about the same age with a smaller litter. If the fostered kits are mixed with the doe’s own kits and covered with hair of the doe, they are generally accepted. Moving the larger kits instead of the smaller kits to the new litter increases the chance of success. Does nurse only once or twice daily, and kits nurse for less than 3 minutes at a time. Kits are weaned around 4 to 5 weeks of age. ',
    forthParagraph: 'After birth, the mother rabbit can become impregnated again almost immediately. This means that, in theory, a female could have a litter every month of the year. It’s no wonder that rabbits have quite the reputation for making babies!',
    fifthParagraph: 'However, you might want to reconsider getting your pet pregnant and think about getting it spayed or neutered. There are many reasons to do so, for example: they’ll Live longer and healthier lives due to lower risk of certain cancers and infections of the uterus; Exhibit less aggressive tendencies (particularly in male rabbits, although females in false pregnancies may also be aggressive); Typically have a calmer demeanor, making for better housemates; May be easier to litter train; tend to have a less intense odor, and many more reasons.',
    image1: 'assets/rabbit/rabbit-breeding1.png',
    image2: 'assets/rabbit/rabbit-breeding2.png',
    image3: 'assets/rabbit/rabbit-breeding3.png',
    image4: 'assets/rabbit/rabbit-breeding4.png',
    image5: 'assets/rabbit/rabbit-breeding5.png',

  
  
  },
  ];
  
  constructor() { }
}
