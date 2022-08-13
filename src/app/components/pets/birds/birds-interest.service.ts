import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BirdsInterestService {

  constructor() { }
  interests = [
    {id: 'choose-the-bird', name: 'Choose the bird for you',
    firstParagraph: 'Budgerigar - Enjoying popularity around the world, budgies (also known as parakeets) are some of the best pet birds for good reason. When properly tamed and cared for, these birds can be extraordinarily friendly and affectionate. On top of being small and fairly low-maintenance, budgies take well to training and can learn to perform many fun bird tricks, including learning to talk.',
    secondParagraph: 'Cockatiel - The captivating cockatiel is another great choice for anyone who wants a friendly and affectionate pet bird. Hailing from Australia, these birds make excellent pets when hand-fed as babies and raised in positive environments. While they do not normally learn to talk, cockatiels are exceptionally intelligent. Many learn to whistle quite well and mimic common household noises, such as doorbells, telephones, and microwaves.',
    thirdParagraph: 'Hyacinth Macaw - Known as "gentle giants," hyacinth macaws are the largest of all parrots. And as sociable and friendly birds, they love nothing more than to spend time playing and cuddling with their owners. Due to their size, it can be difficult for most people to provide proper housing for these birds. But those who are able to meet their needs are rewarded with an incredible relationship with their feathered friend.',
    forthParagraph: 'Green-Cheeked Conure - Hailing from South America, green-cheeked conures thrive on spending time socializing with their caretakers. By nature, they are intelligent, playful, and slightly mischievous birds. But compared to other conure species, they tend to be quieter and more easygoing. They usually don’t learn to talk, but their charming personalities are more than enough to make them entertaining and engaging companions.',
    fifthParagraph: 'Hahn’s Macaw - Also native to South America, Hahn’s macaws are the smallest macaws. But they pack a lot of personality into their compact bodies. They are intelligent and playful birds that tend to be gentle when properly socialized and handled. These macaws prefer to spend as much time interacting with their caretakers as possible and might become depressed if they feel ignored. They also can be rather noisy, though some do learn to talk quite well.',
    image1: 'assets/birds/budgerigar.png',
    image2: 'assets/birds/cockatiel.png',
    image3: 'assets/birds/macaw.png',
    image4: 'assets/birds/conure.png',
    image5: 'assets/birds/hans.png',
  
  
  },
    {id: 'feeding', name: 'Feeding',
    firstParagraph: 'Like people, birds have different preferences when it comes to food. The most common type of seed offered at feeders in North America is black-oil sunflower seed. This small sunflower seed is high in energy and has thin shells, making it the preferred food item for a wide variety of birds. Black-oil sunflower is among the favorite feeder foods of cardinals, chickadees, finches, and sparrows. Woodpeckers even consume these seeds on occasion.',
    secondParagraph: 'Corn is an inexpensive grain that many  provide for birds. Whole corn is a favorite of Wild Turkeys and ducks, while cracked corn will attract doves, quail, and sparrows. To attract these birds, try mixing cracked corn with millet and feeding a scoopful on the ground or a platform feeder.',
    thirdParagraph: 'Various fruits can prove quite attractive to many species of birds. Oranges cut in half will often attract orioles which will sip the juice and eat the flesh of the orange. Grapes and raisins (no preservatives, please) are a favorite of many fruit-eating birds. Mockingbirds, catbirds, bluebirds, robins, and waxwings are all species that are likely to feed upon fruit. Many species will also be attracted to the dried seeds of fruits like pumpkins or apples. Be sure to dispose of any fruit that becomes moldy because some molds create toxins that are harmful to birds. A small, round grain, millet is commonly found in seed mixes. Millet is a favored food of many smaller, ground foraging birds. A handful of millet sprinkled on the ground will keep your juncos and sparrows happy.',
    forthParagraph: 'Mealworms are the larvae of the mealworm beetle, Tenebrio molitor, and they provide a high protein treat for many birds. Some people feed live mealworms while others prefer offering dried larvae (both forms are commercially available). Birds like chickadees, titmice, wrens, and nuthatches relish this food and mealworms are one of the only food items that reliably attract bluebirds. Offer mealworms on a flat tray or in a specialized mealworm feeder (available at many specialties bird feeding stores).',
    image1: 'assets/birds/birds-feeding1.png',
    image2: 'assets/birds/birds-feeding2.png',
    image3: 'assets/birds/birds-feeding3.png',
    image4: 'assets/birds/birds-feeding4.png',



  },
    {id: 'cage', name: 'Cage',
    firstParagraph: 'The first of rule to buying a cage, is to decide where your bird’s cage will be located, and shop based on what will work with the area you have set aside. The area should be away from windows and drafts, yet in an active part of your home to encourage your pet’s social development.',
    secondParagraph: 'Next, of course, is to keep the size of your bird in mind. While it is perfectly fine to keep a Finch or Canary in a small space, larger birds need larger cages, and it is always better to buy the largest cage you possibly can for your bird. Keeping a bird in a cage that’s too small can lead to undesirable behaviors such as screaming, biting, psychological disorders, and feather plucking, to name a few. A good cage should be large enough for your bird to walk around comfortably, and fully extend and flap her wings. Don’t forget to take into account the space that will be lost when you add your birds perches, food bowls, and toys! Consult your avian veterinarian for recommended cage sizes for your particular species.',
    thirdParagraph: 'Another thing to look at when selecting a cage is the bar spacing. Smaller birds, such as parakeets and lovebirds, require cages with bars no more than a half inch apart, to prevent them from squeezing through or becoming stuck between the bars. Many bird owners have been surprised to find that their pets are quite the little escape artists! Those who own larger birds should look for bars that are placed horizontally rather than vertically, to give your bird a means of climbing and exercise. Your conure’s cage should be 24 inches wide, 24 inches tall, and 24 inches deep at a minimum. Equipping them with a stand-up cage allows them more levels to explore and to play with exciting toys. If you have a larger conure, like a Patagonian Conure, then you will need a larger minimum cage dimension, of a square 30 inches by 30 inches to keep them happy.',
    forthParagraph: 'The style of the cage is also an important factor. According to some veterinarians, round cages have been found to be detrimental to bird’ psychological health, so angled cages are preferable. Many of these cages can either be hung or placed on a stand and come in a variety of sizes and shapes to accommodate any species of pet bird.',
    image1: 'assets/birds/birds-cage1.png',
    image2: 'assets/birds/birds-cage2.png',
    image3: 'assets/birds/birds-cage3.png',
    image4: 'assets/birds/birds-cage4.png',



  },
    {id: 'entertainment', name: 'Entertainment',
    firstParagraph: 'There are many things to keep your bird entertained. They are social animals so they’d love your attention. Hold your bird regularly. Taking a few minutes out of each day to hold and handle your bird can provide immense positive mental stimulation to your feathered friend. Handling your bird often also helps develop and maintain the bond that you have with your pet. Ask any bird owner—the happiest parrots are those who get to spend the most time with their people. Not only do most tame pet birds enjoy physical contact from their owners, handling your bird every day will help you become more familiar with your bird’s body and understand their body language. This gives you the upper hand in discovering any physical abnormalities and changes to personality that could signal illness or injury.',
    secondParagraph: 'Rotate the bird’s toys. Much like young children, birds get bored playing with the same old toys after a while. Bird toys can be pricy, though, so some owners opt to keep a stash of several different types of toys and rotate different ones in and out of their bird’s cage every couple of weeks. This way, your bird will get to play with "new" toys every now and then, which will help keep him mentally occupied. Make a quick batch of homemade bird toys to offer even more variety to your feathered friend.',
    thirdParagraph: 'Teach tricks to your bird. The time that you will spend working with your bird when teaching the animal some tricks, plus the tasty treats that he or she will get as a reward for a job well done, provides plenty of stimulation for your pet. At the same time, it provides socialization time and strengthens the bird-owner bond. As your bird progresses, you can always add new tricks to help keep the process fresh. An added bonus: You will have a great time showing off how cute and smart your pet is!',
    forthParagraph: 'Play music or videos to your bird. Birds are naturally interested in different sounds and noises, so leaving a radio or television helps to keep them happy and comfortable while they are spending time in their cages. You can even log the types of music that your bird responds to the most or check out some popular songs about birds to make a custom playlist for your feathered friend.',
    fifthParagraph: 'Provide plenty of food options and foraging opportunities for your pet. In the wild, parrots dine on an array of different fruits, vegetables, seeds, berries, and nuts. It is no wonder, then, that they tend to get bored in captivity eating the same old pellets and seed mix day after day. Additionally, they have to find food in the wild and spend hours doing this- encourage this behavior at home with your parrot by introducing foraging!',
    image1: 'assets/birds/birds-entertainment1.png',
    image2: 'assets/birds/birds-entertainment2.png',
    image3: 'assets/birds/birds-entertainment3.png',
    image4: 'assets/birds/birds-entertainment4.png',
    image5: 'assets/birds/birds-entertainment5.png',




  
  },
    {id: 'breeding', name: 'Breeding',
    firstParagraph: 'All birds reproduce by laying eggs. Eggs are produced inside the female and then deposited in a nest. In captive female birds, egg laying, which is actually the equivalent of ovulation in mammals, can happen without fertilization or even the presence of a male. In some species, both female and male birds sit on the nest, while other species either leave this chore to the female only or leave it to nature to provide the warmth needed by the developing chick. In most species of pet birds, both parents are actively involved in incubation, feeding, and caring for the chicks.',
    secondParagraph: 'The time between mating to laying a fertilized egg and the length of egg incubation also varies between species. Your avian veterinarian can provide accurate estimates for your bird. Successfully breeding and rearing birds is difficult and not something that most bird owners will do. This section is meant to provide general information, but not to provide a comprehensive guide to rearing young birds. Chicks of most pet bird species are born blind and without feathers. Depending on the type of bird, the eyes open within 1 to 2 weeks. Feathering is complete in about 1 month for smaller birds but can take up to 5 months in larger birds, such as macaws.',
    thirdParagraph: 'Proper care during breeding, good sanitation and nutrition, nursery management, and egg incubation (if needed) can help reduce diseases in newborn chicks. Be sure to keep the cage in a warm spot away from any drafts. In general, chicks should not be disturbed but should be closely monitored to ensure that they are receiving proper care from the parents. If the newborns do not appear to be thriving, contact your avian veterinarian immediately for instructions on hand rearing.',
    image1: 'assets/birds/birds-breeding1.png',
    image2: 'assets/birds/birds-breeding2.png',
    image3: 'assets/birds/birds-breeding3.png',
  
  
  },

    {id: 'health', name: 'Health',
    firstParagraph: 'Birds are highly intelligent animals who require proper care and an interesting and spacious environment, regular exercise and mental stimulation. Regular adequate exercise (free flight within a safe enclosed environment) is a prerequisite for healthy, vigorous, and fit pet birds. Exercise is necessary for both physical and mental health. If their care and conditions are not adequate or appropriate for the species, a number of potential health and welfare issues can arise as a result of keeping birds as pets.',
    secondParagraph: 'Please note that birds often display a ‘preservation instinct’ which means that they can sometimes appear healthy despite being very ill. Signs of illness can be subtle in birds. Veterinary advice should always be sought immediately if you suspect that your bird is unwell or if your bird shows any sign of being unwell.',
    thirdParagraph: 'The health of pet birds is a specialized area and resolving health problems can be difficult. Checking your bird’s health regularly is a key step in ensuring good welfare and preventing disease. Any problems should be dealt with promptly and appropriately by seeking veterinary advice as soon as possible.',
    forthParagraph: 'Things to check for include: appearance of droppings (quality and quantity); amount of food or water consumed; behavior (e.g. ability to fly); appearance or posture (e.g. sleepy or fluffed-up); bodyweight; rate and depth of respiration; Any changes in the above indicators could signal a problem.',
    fifthParagraph: 'Birds can be affected by both internal parasites such as intestinal worms and external parasites such as lice and mites. Treatment of parasites may vary between bird species and depending on the context. For example, factors such as the number of birds kept, the birds’ housing system, exposure to new or wild birds and the climate, among other factors can influence the worming product and regime recommended. So please consult your vet directly for more information about parasite control in pet birds.',
    image1: 'assets/birds/birds-health1.png',
    image2: 'assets/birds/birds-health2.png',
    image3: 'assets/birds/birds-health3.png',
    image4: 'assets/birds/birds-health4.png',
    image5: 'assets/birds/birds-health5.png',

  
  },
    {id: 'hygiene', name: 'Hygiene',
    firstParagraph: 'New bird owners often have questions about the proper ways to bathe their birds. The truth is, there are a few right answers. Every bird is an individual, and as such, will display unique characteristics in regards to grooming behavior. Some birds love to play in the water and relish their time in the bath. Some birds have not been conditioned to accept bathing and resist contact with water despite the fact that showers would be a part of their natural grooming activity in the wild.',
    secondParagraph: 'Mist your bird with water. A fine mist from a clean spray bottle is the method of choice for some birds. Many pet bird species originate from extremely warm and humid climates, and the spray helps to rehydrate their nasal cavities as well as clean their feathers. If you think your bird might benefit from a quick spritz, be sure to use pure warm water in a clean new spray bottle. This ensures that there are no chemical residues that could be toxic to your pet. You can purchase a continuous spray bottle to have a steady stream of mist to provide your pet.',
    thirdParagraph: 'Dip your bird in the sink. Many birds like to dip themselves into a pool of still water. Try pooling a bit of warm water in your sink and having your bird step down into it. Chances are that your bird’s natural bathing instincts will take over from there, and he will be happily splashing about in no time. Some birds prefer a small stream of water going into the pool below to help stimulate them to bath as well; watch the water level, though. It can reach a high level quickly and may need to be drained so your bird doesn’t get soaked. If you own a small bird that is reluctant to stand in the sink, try cupping warm water in the palms of your hands as your pet perches on the side of your thumb. Many times, a bird will feel safer bathing in his owner’s hands—and this can also be a great bonding experience.',
    image1: 'assets/birds/birds-hygiene1.png',
    image2: 'assets/birds/birds-hygiene2.png',
    image3: 'assets/birds/birds-hygiene3.png',

  },
  ];

}
