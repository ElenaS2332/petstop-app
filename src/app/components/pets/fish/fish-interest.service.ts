import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FishInterestService {

  constructor() { }

  interests = [
    {id: 'aquarium', name: 'Aquarium',
    firstParagraph:'Choosing the right aquarium for your home and lifestyle will determine what kind of fish you bring home. Your aquarium will need to sit for at least 24 hours before being able to house fish. ',
    secondParagraph: 'Make sure you clean the aquarium frequently. You should aim to remove just 10-20% of the water at each clean. This should then be replaced with water which has had the chlorine removed with a dechlorinating agent and has subsequently been allowed to warm up to room temperature. A sign that your water needs to be changed is cloudy, yellowish, or bad spelling water. If once you have cleaned the tank and replaced the water, your tank gets dirty quickly again, you may want to get your water tested at a local fish breeder. They can help you find any problems in your tanks ecosystem.',
    thirdParagraph: 'When replacing the water, don’t add straight tap water to your tank. Your fish could go into shock. Make sure you treat it with a water conditioner to balance the ph. You’ll also need to make sure the water is the same temperature.',
    forthParagraph: 'Gravel cleaners are simple and cheap pieces of equipment that will allow you to remove feces and uneaten food from the bottom of your fish tank. They create a “vortex”, sucking up rubbish from the gravel without harming the bacterial colonies. This rubbish is sucked up the hose and into a bucket ready for disposal. Of course, standard gravel cleaners will also extract aquarium water as well as this filth, so arguably the best way to both carry out a partial water change and clean the gravel is with a low-cost gravel cleaning device.',
    fifthParagraph: 'Clean the filter. Most filters require regular maintenance if they are to remain effective. Over time most filters will become clogged with waste material and, rather like a vacuum filling up, they will perform less and less effectively. Many people find that cleaning their filter effectively can do wonders for keeping their fish tank clean.',
    sixthParagraph: 'As a final tip for keeping your fish tank clean consider what types of fish you have, and where they feed. While some fish will prefer to grab fish food from the surface of the water, others will hoover up food off the gravel surface. These bottom feeders can be tremendously useful for naturally keeping your fish tank clean, by gathering up excess food left over by the other fish feeding higher up in your aquarium.',
    image1: 'assets/fish/fish-aquarium1.png',
    image2: 'assets/fish/fish-aquarium2.png',
    image3: 'assets/fish/fish-aquarium3.png',
    image4: 'assets/fish/fish-aquarium4.png',
    image5: 'assets/fish/fish-aquarium5.png',
    image6: 'assets/fish/fish-aquarium6.png',

  
  
  
  },
    {id: 'feeding', name: 'Feeding', 
    firstParagraph:'There are many kinds of fish food on the market for a variety of dietary needs. Regardless of the type of fish you have, they will likely eat in at least one of these categories: dried fish food and live fish food. Dried fish food is the most common type for aquatic animals in the home. You might be most familiar with some of these options, as they are often given to the most common household fish. Dry food include: flakes, pellets and freeze-dried. ',
    secondParagraph: 'Flakes float at the top of the tank, readily available for any swimming friends who prefer to eat that way. There are even specific kinds of dried flakes designed for certain types of fish like goldfish. Pellet food is often used for larger aquarium fish and comes in floating and sinking varieties (for those fish who prefer not to eat floating pellets at the surface). Most fish food manufacturers say to only feed what the fish can eat in a certain amount of time (usually 2-3 minutes). Uneaten food should be removed as the pellets decompose, which can lead to poor water quality in the aquarium. Freeze-dried fish food is typically something that was once alive (shrimp, worms, etc.) that has been freeze-dried. This is typically given to fish with a higher protein diet and, while freeze-dried food is convenient, it doesn’t offer as much protein as fresh or frozen food.',
    thirdParagraph: 'On the other hand, live fish food can come in many varieties but are more difficult to obtain. There are some species of fish that will feed on almost nothing but live fish like freshwater gars, but most types of predatory fish can be adapted to eat dried or frozen foods which is much healthier for them. Because live fish can introduce parasites and other diseases to the fish that they are feeding, it is a good idea to have a separate aquarium set up where the feeder fish can be placed and observed for 1-2 weeks to ensure that they are healthy before feeding them to your fish.',
    forthParagraph: 'Most frozen fish food are fish, shrimp, or other crustaceans. Frozen food is typically more nutritious than live food, and their quality more consistent. Many people choose it for that reason and the convenience of not having to go to the pet store every week.',
    image1: 'assets/fish/fish-feeding1.png',
    image2: 'assets/fish/fish-feeding2.png',
    image3: 'assets/fish/fish-feeding3.png',
    image4: 'assets/fish/fish-feeding4.png',
  
  
  
  
  },
    {id: 'sleeping', name: 'Sleeping',
    firstParagraph: 'Being asleep can mean different things to different fish. It’s easy to see when people, mammals, and even birds sleep, because they close their eyes and remain motionless. Some fish and amphibians reduce their awareness, but do not become unconscious like the higher vertebrates. When you add to this the fact that they don’t have eyelids, it makes it even more difficult to see if fish sleep. Fish have time periods when they become less aware of their surroundings, but their brain waves do not change, and they do not exhibit REM sleep. They aren’t quite asleep, but they don’t seem to be fully awake either.',
    secondParagraph: 'Some fish make elaborate preparations for sleep. Other fish remain motionless in the water during the night, while others, like rockfish and grouper, don’t appear to sleep at all. They rest against rocks, bracing themselves with their fins. Some freshwater fish, like catfish, swim up under a log or riverbank for shelter during the day. ',
    thirdParagraph: 'Many fish will lie motionless at the surface of the water or near the bottom when sleeping. Their breathing rates will slow, and they often appear groggy or slow to respond. Some fish will spend their time in the coral of a coral reef, and their bodies will appear to be moving and swimming while they are sleeping. Beware that fish should not swim upside down or sideways. If you see a fish doing something like this, it is likely that they are having a medical problem. You should call the vet if you notice such behavior.',
    forthParagraph: 'There are several things that can impact fish sleep patterns. Stress caused by poor water quality or low water levels can cause fish to skip sleep. Fish can also change their sleep/wake patterns based on availability of food. For example, some aquarium fish will become nocturnal when food is consistently available at night or diurnal if food is readily available during the day. Fish species guarding their eggs or migrating will go without sleep for days. Water temperature and availability can impact sleep patterns. Some species of fish are more active during higher daytime temperatures. Illness in fish can cause changes to sleep patterns and length of sleep. For those that sleep less, it may be a protective mechanism where they want to appear “healthy” and thus less vulnerable to predators.',
    image1: 'assets/fish/fish-sleeping1.png',
    image2: 'assets/fish/fish-sleeping2.png',
    image3: 'assets/fish/fish-sleeping3.png',
    image4: 'assets/fish/fish-sleeping4.png',
  
  
  
  
   },
    {id: 'entertainment', name: 'Entertainment', 
    firstParagraph:'Keeping your fish in an aquarium without anything to keep them busy, without a partner, without engaging them frequently, and without playing with them will negatively affect them. It will make them live boring lives and they will probably die faster just from boredom. And fish entertainment does not mean buying an aquarium-friendly tablet and playing Finding Nemo for your fish. It simply means doing things such as engaging your fish, buying decorations for your fish tank, playing games with your fish, introducing compatible tank mates in our fish tank, and so on. By doing such things, you will keep your fish friend entertained and happy and loving life.',
    secondParagraph: 'When getting a fish species for your aquarium, the first thing you should do is to check whether the fish prefer to shoal. Fish that shoals is a fish that craves companionship or loves staying with a group of other fish like it. You should never keep a schooling fish alone. It will be extremely bored and lonely. As for non-schooling fish species, they are okay staying alone in a tank. However, this does not mean they do not get bored. While you may like watching them being calm and everything in your tank, you should also know that they need interaction just like you and I do as human beings.',
    thirdParagraph: 'Some of the universal ways of preventing boredom in aquarium fish include: planting aquarium, buying and installing aquarium decoration, buying and installing an air pump and an air stone, teaching it games and many more. By planting your aquarium, you will create a living playground that mimics the kind of environment your fish will naturally like living and playing in.',
    forthParagraph: 'By installing aquarium decoration such as rocks, statues, and background pics, you will give your fish things to see and explore and familiarize with. It is kind of like buying a kid a toy. And don’t just buy one and put it in your aquarium, buy aquarium decoration every two weeks or more frequently and replace the ones your fish is already bored with. You need an air pump and an air stone to aerate and oxygenate your fish tank. But in addition to aeration and oxygenation, an air pump and air stone combo will generate bubbles that will keep your fish entertained.',
    fifthParagraph: 'You can teach your fish to follow your finger on the aquarium wall. Tap gently on the aquarium wall and wait for your fish to start tracking your finger along the glass. It will be a way of it knowing that you are around. Feed your fish food from your hand. Even if you have a self-sustaining aquarium, you should aspire to feed your fish small bits of food throughout the day. This will keep them engaged and entertained. Show it a mirror and see how it reacts. If your fish reacts to seeing its reflection in a mirror, you should do it once or twice a day to increase their fun.',
    image1: 'assets/fish/fish-entertainment1.png',
    image2: 'assets/fish/fish-entertainment2.png',
    image3: 'assets/fish/fish-entertainment3.png',
    image4: 'assets/fish/fish-entertainment4.png',  
    image5: 'assets/fish/fish-entertainment5.png',  

  
  
  },
    {id: 'breeding', name: 'Breeding', 
    firstParagraph: 'Make sure you only breed fish of the same species. While it may be possible for two different species to reproduce, there’s a good chance that the resulting hybrid will be feeble, deformed, or sterile. Pass over fish that appear sick, injured, or deformed. They’re less likely to produce healthy offspring. If you are at a loss for how to differentiate the sex of your fish, take them to an aquatic veterinarian or breeding specialist to have them examined by an expert.',
    secondParagraph: 'Place the parent fish together in a separate tank. This tank is often known as a "spawning tank." For most species of fish, you’ll need a spawning tank with a capacity of at least 5–10 gallons (19–38 l). When you first transplant the parent fish to a new tank, it is best to keep the conditions as close to their old tank as possible and make necessary adjustments very gradually to help them get acclimated. Condition the fish to make them more robust. Feed the parent fish a nutrient-rich, high protein diet while you’re encouraging them to mate. Proper nutrition will help them flourish and increase their fertility. Remember: the healthier the parents are, the healthier the babies will be.',
    thirdParagraph: 'Once the female has laid her eggs or given live birth, return both parents to their original tank, where they will quickly acclimate to their ordinary environmental conditions. This will protect the eggs from being interfered with long enough for the fry (newborn fish) to hatch. Keep the conditions in the tank the same. It can now be used as a nursery tank to rear the fry. Except for a few nurturing species, it’s not uncommon for adult fish to devour their own eggs. If it’s not possible to set up a different tank for the fry, add an abundance of plants and other physical structures to give them a place to hide once they’re capable of swimming.',
    forthParagraph: 'Limit the amount of light that enters the tank. Cover the tank on 3 sides with paper or scraps of fabric thick enough to block out most of the light from outside. Eggs and newly-hatched fish are often sensitive to light—too much may stunt their development or even kill them. As they continue to grow, their tolerance will increase and you can return the aquarium to its original light levels. Also, change the tank water daily. Get in the habit of emptying the tank by 25-50% and replacing it with fresh water at the same time each day. Clean water is a must while the fry are learning to breathe and filter on their own.',
    fifthParagraph: 'Feed the young fish several times a day. When the fry first hatch, they come equipped with a large yellow egg sac that provides sustenance for a few days. Once this egg sac disappears, you’ll need to begin feeding them yourself. Liquid egg yolks, crushed fish flakes, plankton and algae are all examples of foods used to nourish fry. Look for the foods and supplements you need at pet stores that sell specialty fish supplies. Smaller species like tetras and rainbowfish, for example, will not be able to handle commercially prepared foods so soon after hatching, and need to be fed liquid infusoria or similar supplements that they can digest easily.',
    image1: 'assets/fish/fish-breeding1.png',
    image2: 'assets/fish/fish-breeding2.png',
    image3: 'assets/fish/fish-breeding3.png',
    image4: 'assets/fish/fish-breeding4.png',  
    image5: 'assets/fish/fish-breeding5.png',  

  
  
  
  },
  ];
}
