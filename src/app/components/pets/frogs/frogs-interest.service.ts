import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrogsInterestService {

  constructor() { }

  interests = [
    {id: 'feeding', name: 'Feeding',
    firstParagraph:'Your frog’s diet will vary based on its species, but generally speaking, frogs are carnivores who eat live prey. Many frogs eat worms or insects, including crickets, caterpillars, moths, and grasshoppers. Some of the larger frogs will even eat pinky mice. You can purchase live prey at your local pet store. Each species of frog has specific nutritional guidelines, but in general, your pet frog will eat a mix of the following. ',
    secondParagraph: 'Crickets - These will form the backbone of your pet frog’s diet. That’s not because they’re the healthiest—it’s just because they’re easiest to purchase or raise at home. Make sure to gut-load them prior to feeding your frog!',
    thirdParagraph: 'Mealworms and waxworms - These are another tasty snack for frogs. Like crickets, mealworms are easy to find at pet stores or raise at home. You can also purchase them at bait stores for fishing, but those won’t be gut-loaded.',
    forthParagraph: 'Locusts and grasshoppers - These can be a bit trickier to find in pet stores or purchase for your frog, but they add much-needed nutritional variety to your pet’s diet.',
    fifthParagraph: 'Caterpillars or worms - These are getting easier to find in pet stores for purchase. Be sure to purchase caterpillars that are the correct size for your frog, as they can be quite large! Bloodworms, brine shrimp, and blackworms - These, along with other small worms, will be the main diet for aquatic frogs.',
    image1: 'assets/frog/feeding1.png',
    image2: 'assets/frog/feeding2.png',
    image3: 'assets/frog/feeding3.png',
    image4: 'assets/frog/feeding4.png',
    image5: 'assets/frog/feeding5.png',
  
  },
    {id: 'tank', name: 'Tank', 
    firstParagraph:'Setting up a tank with everything your frog needs before bringing them home should be done to ensure a proper environment with appropriate water, humidity, and heat requirements. Some frogs hibernate and you will have to provide certain conditions to ensure your frog does so safely. Make sure you know the right kind of tank your frog will need.',
    secondParagraph: 'Once you have the tank, you will need to decide where to put it. It should be always kept out of direct sunlight, as this can raise the temperature, making it uncomfortable (and perhaps dangerously) dry and hot inside the tank. The tank should also be kept away from the kitchen, as smoke and other fumes from cooking can be harmful to your frog. You also need to be careful not to expose the tank to any aerosol sprays (such as spray paint in the garage or hair spray in the bedroom) as these can be absorbed through the frogs skin, potentially making him ill.',
    thirdParagraph: 'Keeping a frog enclosure clean can be a lot of work. Many frogs have simple light, temperature, and humidity requirements but they are very sensitive to contaminants and waste in their environment.’ Provide adequate substrate. Substrate is the material at the bottom of a frog’s habitat that acts as natural ground. To prevent your frog from eating substrate (which can be fatal), don’t buy anything resembling pebbles. Many frog folks use coco-husk fiber or moss. While placing live plants in with your frog sounds nice, it could prove to be more expensive and a timewaster. Many frogs burrow into the substrate, which often kills live plants. Plus, live plants require a UVB light to ensure they stay alive. Fake plants get the job done and require less work!',
    forthParagraph: 'Give them ample light. Since amphibians can’t regulate body temperature, most species need heat pads or special lighting to maintain certain temperatures (every frog habitat needs a thermometer to monitor temp). Lighting also helps solidify a day and night routine. Frogs rely on a light and dark cycle to know when to sleep, feed and move. Many also require daily misting to ensure the humidity is high enough.',
    image1: 'assets/frog/frog-tank1.png',
    image2: 'assets/frog/frog-tank2.png',
    image3: 'assets/frog/frog-tank3.png',
    image4: 'assets/frog/frog-tank4.png',
  
  },
    {id: 'entertainment', name: 'Entertainment',
    firstParagraph:'Although pet frogs might seem to be boring, some of the smaller frogs are quite active. However, many of the larger frogs are sedentary and do not move around much. Frogs are not a pet that should be handled regularly due to their special, sensitive skin.',
    secondParagraph: 'Frogs do not like to be handled, plain and simple. Therefore, you should try to leave your frog inside the tank as much as possible and content yourself with just looking at him. If you cannot resist picking him up, make sure to thoroughly wash and dry your hands first and avoid putting on any lotions, as frogs can absorb these things from your skin and potentially fall ill.',
    thirdParagraph: 'Be aware that he might squirm when you pick him up and potentially wet on you -- this is a sign that your frog is stressed by the handling, and you should put him back in his tank as soon as possible. Also be very careful not to drop your frog while handling -- even if it squirms -- as falling from a height could seriously injure your frog.',
    image1: 'assets/frog/frog-entertainment1.png',
    image2: 'assets/frog/frog-entertainment2.png',
    image3: 'assets/frog/frog-entertainment3.png',
  
  
   },
    {id: 'health', name: 'Health',
    firstParagraph:'Pay attention to the health of your frog. Once a frog gets sick, it can be very difficult to treat and the prognosis is rarely good. Therefore, the best way to keep your frog healthy is to prevent it from becoming sick in the first place.',
    secondParagraph: 'If your frog starts to look in any way skinny or malnourished, ask yourself whether you are providing enough variety in terms of food. A frog can’t survive on a diet of crickets or mealworms alone. One of most common frog deficiencies is a lack of calcium, so consider sprinkling your frog’s food with a powdered calcium supplement before feeding time.',
    thirdParagraph: 'Watch out for signs of red-leg, which is a potentially fatal illness that commonly affects captive frogs. Red-leg manifests as a reddening of the skin on the underside of the frog’s legs and belly, while suffering frogs tend to become lazy and pathetic. If you suspect your frog might have red-leg, you should scrub out the tank to remove the parasite, then give your frog daily sulfamethazine baths over a two week period.',
    image1: 'assets/frog/frog-health1.png',
    image2: 'assets/frog/frog-health2.png',
    image3: 'assets/frog/frog-health3.png',
  
  
  
   },
    {id: 'hygiene', name: 'Hygiene', 
    firstParagraph:'Keep your frog clean and hydrated. It is very important to provide your pet frog with clean water daily, as he will use it for both drinking and bathing. Frogs absorb water through their skin rather than drinking with their mouths. As a result, they tend to spend long periods of time just sitting in their water baths or ponds. This water should be dechlorinated, if possible. You will also need to clean out the tank every couple of days to remove any droppings, wipe down the side of the tank, check for mold or algae and generally maintain a healthy environment for your frog.',
    secondParagraph: 'Deep clean terrariums and aquariums every two to four weeks. Depending on the species and number of frogs you have. Aquatic frogs will need their water changed every week (sometimes twice). Get the right cleaner. Because frogs literally absorb chemicals and oils into their skin, a frog-friendly cleaner is a must. This also means you can’t use tap water for aquariums or water dishes. Water filters are also acceptable.',
    image1: 'assets/frog/frog-hygiene1.png',
    image2: 'assets/frog/frog-hygiene2.png',
  
  },
  ];

}
