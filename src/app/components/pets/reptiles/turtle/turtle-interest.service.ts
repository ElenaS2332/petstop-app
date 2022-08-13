import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurtleInterestService {

  constructor() { }

  interests = [
    {id: 'choose-the-right-turtle', name: 'Choose the right turtle',
    firstParagraph:'Red-eared sliders - They are one of the most popular of all aquatic turtle species. They tend to be friendlier and more sociable than some of their relatives, they are pretty active, and they are widely available. These turtles are generally housed indoors, but with the right shelter, cleaning, and warmer temperatures, they can also do well in an outdoor pond. As they mature, it can be easier to provide them with the space they need outside.',
    secondParagraph: 'Eastern box turtles - These need a lot of space, but they are adaptable and, with the right housing, they can live in or outdoors. They prefer a humid environment, need a shallow pool of water in their enclosure, a moist substrate, and they will need a UVB basking light if they are kept indoors.',
    thirdParagraph: 'Common Musk Turtle (Stinkpot) - Common musk turtles are one of the more popular aquatic turtle species. They are small, and their care requirements are a little less intensive than some. They are not turtles that does well with a lot of handling though. They can be feisty and, if they feel threatened, they release a foul and musty odor. This is why they get their nickname: The Stinkpot.',
    image1: 'assets/reptiles/turtle/slider.png',
    image2: 'assets/reptiles/turtle/eastern-box.png',
    image3: 'assets/reptiles/turtle/stinkpot.png',
  
  
  
  
  },
    {id: 'feeding', name: 'Feeding', 
    firstParagraph:'Depending on the species, turtles can be herbivores (eating only plants), carnivores (eating only meat), or omnivores (eating both plants and meat). Pet stores offer a range of turtle food products in pellets, sticks, and chunks, formulated for different types of turtles and providing balanced nutrition with appropriate vitamins and minerals to keep the turtles healthy.',
    secondParagraph: 'Commercial reptile food provides a complete, vitamin-rich diet for many reptiles. Mix with freeze-dried or live foods to help your lizard get used to eating it. Pellets make a great staple diet for turtles and tortoises. Feeding your turtle treats, including freeze-dried foods, is a great way to bond with it. Treats can also be a great source of protein.',
    thirdParagraph: 'Fresh fruits and veggies are an all-natural addition to your new pet’s diet. Some reptiles, like tortoises, can get them several times a week. Canned fruits and vegetables help add moisture to your reptile’s diet. Throw some on top of the main course!',
    forthParagraph: 'Popular foods for pet turtles, depending on the species, include:  protein: Boiled eggs, mealworms, snails, crickets, earthworms; vegetables: Corn, beans, beets, carrots, peas, squash, yams; greens: Carrot tops, lettuce, collard greens, kale, mustard greens; fruits: Apples, grapes, strawberries, cantaloupe, banana, kiwi, mango, tomato; flowers: Geraniums, dandelions, petunias, lilies, carnations;',
    fifthParagraph: 'However, avoid offering turtles any dairy products such as milk, yogurt, or cheese. They cannot digest dairy, and it will cause illness. Avoid raw meat or hamburger, as it may become rotten before the turtle eats it. Avoid manufactured foods, such as crackers or bread, which may have ingredients that do not support your turtles health. Instead, offer adult turtles protein sources only every two to three days to avoid too much protein in the turtles diet, which can lead to pyramiding. ',
    image1: 'assets/reptiles/turtle/turtle-feeding1.png',
    image2: 'assets/reptiles/turtle/turtle-feeding2.png',
    image3: 'assets/reptiles/turtle/turtle-feeding3.png',
    image4: 'assets/reptiles/turtle/turtle-feeding4.png',
    image5: 'assets/reptiles/turtle/turtle-feeding5.png',
  
  
  
  },
    {id: 'accommodation ', name: 'Accommodation ', 
    firstParagraph:'Aquatic turtles can live in a tank or pond, in groups, and with larger fish (they’ll eat small fish). These guys are strong swimmers and need an aquarium that’s at least 55 gallons in volume. It should have a screened lid and a filter. Line the aquarium with gravel, which you can vacuum clean. Your turtle’s habitat should have two thermometers (one for water temperature and another for the dry side of the tank). Hang a heat bulb over the dry side of the habitat if tank temperature dips below 70 F overnight, you’ll want to get a night-specific heat lamp for your reptile friend. Use an underwater heater to maintain water temperature.',
    secondParagraph: 'These are the best temperature ranges for turtles: water temperature should be kept between 72 and 77 F (22 to 25 C) day and night; the wet side of your turtle’s habitat should be kept at 75 to 85 F (24 to 29 C); the dry side with a basking spot should be 85 to 90 F (29 to 32 C). At night, when the basking light is turned off, the temperature inside the tank should remain 65 to 75 F (18 to 24 C). Aquatic turtles are most active during the day. If you keep them away from daylight, light their home with a UVA or UVB bulb for 12 hours a day.',
    image1: 'assets/reptiles/turtle/turtle-habitat1.png',
    image2: 'assets/reptiles/turtle/turtle-habitat2.png',
   
  
  
  
  },
    {id: 'entertainment', name: 'Entertainment',
    firstParagraph:'If you want to pick up your turtle, you should know that it likes to be lifted at the midsection, not by the legs. Keep an eye on kids around your turtle, and always wash your hands before (and after) handling your turtle. But it is better to let your turtles play with toys than playing with them. Turtles don’t like to be handled that much. Providing your turtles some exciting toys doesn’t mean you need to literally buy them. You can even make something on your own.',
    secondParagraph: 'Turtles love to play with an empty shell. These shells can slide across the floor, and they like to chase them. Also, you can place small rafts on the tank. Your turtles will get crazy over them. They’ll just push the raft along the water for fun.',
    thirdParagraph: 'You can make an obstacle maze for your turtle. it doesn’t need to be a professional type maze. You can make it with daily items like plants, sticks, stones, pits etc. after making the maze, place your turtle’s favorite treat at the end of it. Now, to get the treat, your turtle will try to figure out how to go through the maze. It is amazing to watch!',
    forthParagraph: 'Another safe and fun game is “Find the treat”. All you need to do is take your turtle’s favorite treat and hide it inside his habitat. Your turtle will get crazy to find the treat and if he does, then he will get awarded with a delicious treat. This kind of exercises also helps to sharpen your turtle’s brain. As turtles love to dig, if you provide them with a textured gravel substrate, they’ll get crazy! Foraging is an instinct of turtles, and they are very happy when they can do it.',
    image1: 'assets/reptiles/turtle/turtle-entertainement1.png',
    image2: 'assets/reptiles/turtle/turtle-entertainement2.png',
    image3: 'assets/reptiles/turtle/turtle-entertainement3.png',
    image4: 'assets/reptiles/turtle/turtle-entertainement4.png',
  
  
  
  
  },
    {id: 'hygiene', name: 'Hygiene',
    firstParagraph:'Bathe your turtle occasionally. Aquatic turtles spend most of their lives in the water and if their tanks are kept clean, rarely need a special bath. However, your turtle might benefit from a cleaning if it starts to develop algae on its shell, or when it is shedding to help remove dead skin cells. When your turtle is shedding skin, you may notice flaky patches of skin on its neck, tail, or legs. This is normal. If your turtle sheds a lot, however, it might mean a problem with the tank or the turtles health, and you should consult with your vet.',
    secondParagraph: 'Obtain a dedicated turtle-washing tub. Turtles can harbor salmonella bacteria, which can make humans very ill, so it is important that you not bathe your turtle in the sink or bathtub. Salmonella is very resistant to disinfectants, so the best course of action is to buy or find a special tub for bathing your turtle and use it only for that purpose. A plastic bucket or wash tub makes an ideal tortoise bath; just make sure it is large enough to accommodate your turtle.',
    image1: 'assets/reptiles/turtle/turtle-hygiene1.png',
    image2: 'assets/reptiles/turtle/turtle-hygiene2.png',

  
  
  
  },
    {id: 'health', name: 'Health',
    firstParagraph:'Let your turtle settle into its new surroundings for the first three or four days after you bring them home. If you see any of these symptoms, take your turtle to the vet for a check-up: hiding most of the time; minimal eating or drinking; weight loss; swollen joints; discharge from eyes, nose or mouth; skin discoloration; droppings that are runny for more than two days.',
    secondParagraph: 'Your turtle’s shell is very important to his overall health. There are many potential problems that could occur, so you should be always on the lookout. Here are some of the main things to watch for: Metabolic Bone Disease (MBD): This disease of the shell stems from poor care, notably diet, habitat, and exercise. It often causes noticeable deformities in the shell, such as a raised shell. You should take your turtle to the veterinarian if you suspect MBD. Pyramiding: A form of MBD, pyramiding describes a condition in which the scutes of the shell grow to be cone-shaped, due mostly to dietary concerns such as low calcium or fiber, or excess protein. Shell Rot - this term describes infections of the shell, or ulcers. They can be superficial or very deep and serious. You should have your turtle examined by a veterinarian if you suspect shell rot.',
    thirdParagraph: 'On the other hand, parasites are one of the most common health problems for turtles. They can come in the form of ticks, mites, worms, or protozoa. If your turtle has parasites, you may notice a change in his appetite and energy level, unhealthy fecal matter, or weight loss. If your turtle has an external parasite such as ticks or mites, you may be able to spot them on his skin. If you think your turtle has parasites, you should talk to a veterinarian about treatment.',
    forthParagraph: 'Respiratory infections have symptoms similar to vitamin A deficiency, including swollen eyelids and runny nose, so you should take your turtle to the veterinarian to get a proper diagnosis if you suspect either. More serious infections will be characterized by breathing through the mouth, mucus in the mouth, and wheezing. Always make sure your turtle’s environment has the proper amount of humidity, as this will help prevent respiratory problems.',
    image1: 'assets/reptiles/turtle/turtle-health1.png',
    image2: 'assets/reptiles/turtle/turtle-health2.png',
    image3: 'assets/reptiles/turtle/turtle-health3.png',
    image4: 'assets/reptiles/turtle/turtle-health4.png',
  
  
  
  
  },
    {id: 'breeding', name: 'Breeding',
    firstParagraph:'Be sure you have a male and a female turtle. Typically, a male turtle will be more colorful and more outgoing than a female. Males have a flat or concave plastron (bottom shell), and females have a flat or convex plastron, which allows more space for eggs. Females will also almost always be larger. Among water turtles, size is also a good indicator: males are smaller than their female counterparts. Also, male sliders have long claws on their front legs. When it comes to box turtles, males generally have bigger, fatter tails, and a vent (cloaca) that is further from the shell than the females.',
    secondParagraph: 'Be sure your turtles are sexually mature. Turtles are not able to breed until they have reached sexual maturity. When it comes to water turtles, males should be at least three years old, and females need to be about five years old. Neither male nor female box turtles will breed before they are at least five years old. Do not plan to breed a recently acquired turtle. Wait at least a year.',
    thirdParagraph: 'Cool your turtles. To increase the chances for successful breeding, it is suggested that you cool your turtles. Nesting season can run from March through June, so the cooling period actually needs to take place January into February for water turtles and December through February for box turtles. Keep turtles at a temperature between 50- and 60-degrees Fahrenheit for six to eight weeks for water turtles and eight to 12 weeks for box turtles.',
    forthParagraph: 'Leave the turtles alone during this period. You can make food available, but they will eat little or nothing at all. If your turtles live in an outdoor pond, you can take advantage of the natural cooling that wintertime offers and allow them to hibernate. After the cooling period has ended, return your turtles habitat to its regular temperature.',
    fifthParagraph: 'Feed your turtles well. It is particularly important that your turtles eat well during the breeding season. In addition to their regular diet, be sure the females get enough calcium and Vitamin D3. A healthy diet for a water turtle will contain some combination of: earthworms, snails, well-washed butter lettuce, melon, bananas, strawberries, blueberries, vegetable scraps, peas, tomatoes, cooked sweet potatoes, dandelion flowers and leaves and mulberry leaves. A box turtle has the same basic diet as a water turtle, but the menu could also include whole feeder goldfish, crickets, kale, boiled egg, corn on the cob, chopped and steamed broccoli and lots of green leafy vegetables.',
    image1: 'assets/reptiles/turtle/turtle-breeding1.png',
    image2: 'assets/reptiles/turtle/turtle-breeding2.png',
    image3: 'assets/reptiles/turtle/turtle-breeding3.png',
    image4: 'assets/reptiles/turtle/turtle-breeding4.png',  
    image5: 'assets/reptiles/turtle/turtle-breeding5.png',  

  
  
  },
  ];
}
