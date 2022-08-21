import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PigInterestService {

  interests = [
    {id: 'feeding', name: 'Feeding', 
    firstParagraph:'If you have a pig for a pet, you should remember that is still a pig and like all others, pet pigs are seemingly always looking for food. Pigs are foragers, meaning they spend a large portion of their day turning over ground to seek out roots, bulbs, insects, small rodents and even reptiles for their next meal. To keep them healthy and stimulated, pigs need a varied and nutritious diet and an outdoor area where they can root for their food as they would naturally. Pigs are classified as omnivores, but you can put them on only vegetarian diet without a doubt.',
    secondParagraph: 'You should also be aware of their huge need for food. Their drive to forage can lead them to overturn bins and other containers, and they are intelligent enough to open fridges, cupboards, and pantries in order to reach the food inside. If pigs are not being fed sufficiently or they simply like food that bit too much, they can demonstrate dangerous behavior towards anyone who tries to go near their food. This type of aggression also means pigs may harm people, especially children, who are holding food, in the hopes of getting the food from them.',
    thirdParagraph: 'Never give your pig salt. It will result in instant death! Nor should they have dripping or fats. Fresh, clean water should be always available to your pet pigs, and make sure that the troughs that you are using are  strong. Concrete troughs that are heavy and unmovable are ideal.',
    forthParagraph: 'Pigs should always have access to water and should be fed at least two or three times per day. Pot-bellied pigs consume a few pounds of food per day, but if your teacup pig turns out to be a farm-breed pig, you can expect it to consume as much as four to seven pounds of food per day.',
    image1:'assets/pig/pig-feeding1.png',
    image2:'assets/pig/pig-feeding2.png',
    image3:'assets/pig/pig-feeding3.png',
    image4:'assets/pig/pig-feeding4.png',
  
  
  
  },
    {id: 'sleeping', name: 'Sleeping', 
    firstParagraph:'Your pig will enjoy a bed of deep, clean straw or litter. If there are other pigs present, they will often be seen cuddling up to each other in these situations. They are basically very clean animals, and will not urinate or defecate on their bedding, but will do so in a corner of their pen, away from their bedding. ',
    secondParagraph: 'Pigs also hate extreme weather conditions, be it cold winds and draughts or soaring temperatures and humidity. So, ensure that their pens are draught-free, and you are able to get a good circulation of air when temperatures rise. Pigs will tolerate temperatures between 12-26°C. Anything, either side of these temperatures, and your pet pig will be in distress.',
    thirdParagraph: 'If you keep your pig outside, make sure it has about 8 square feet of space and the floor finish should be a concrete screed that has been roughly finished so that your pig always has sure footing. There should also be an area in front of his pen that is adequately fenced off that is also cemented to prevent muddy and smelly conditions. Here the pigs can sun themselves when they need to, get some exercise, and relieve themselves. Outdoor houses can be packed with straw or hay.',
    image1:'assets/pig/pig-sleeping1.png',
    image2:'assets/pig/pig-sleeping2.png',
    image3:'assets/pig/pig-sleeping3.png',
  
  
  
  },
    {id: 'entertainment', name: 'Entertainment', 
    firstParagraph:'When keeping pet pig, you will notice that your pig loves attention and will bask in being spoken to, enjoys a scratch behind the ear and a good scrub down with a brush. Pigs are smart and emotional animals who can enjoy human companionship. Many pigs like brushing, belly rubs, going on walks, and snuggling close to humans, but they still require pig companions and need to spend lots of time outdoors. They need caregivers who are knowledgeable about their care and behavior and  are committed to providing them with tender loving care and mental stimulation. However, never slap a pig on the rear end, or on the shoulders. Your pet pig will hate this, will be unforgiving to those who attempt this, and will sulk for days, if not weeks.',
    secondParagraph: 'Pigs are very curious animals, and enjoy an environment where they can explore, root around with their snouts and manipulate objects. Some dog toys are not an appropriate choice for pigs, as pigs can often easily destroy and consume them, which poses a risk to their health. Other objects in your home may be the target of their curiosities as well. Suitable pig toys include anything that can be manipulated but not easily destructible, safe if consumed, and provides a challenge or results in a reward (e.g., a food treat) when the pig plays with it.',
    thirdParagraph: 'Without opportunities to perform normal pig behavior, your pig will become bored and create its own fun in the house, often by rooting through cupboards, tearing apart couches and knocking over tables. No matter how much you want to keep your pet inside, pigs are best suited to an outdoor environment that provides them with lots of space to carry out these activities safely. Your pig will enjoy: a spacious yard to root and run and play in, with plenty of shade at all times of day; plenty of water to drink, along with a pool and wallow; a comfortable shelter within the yard; secure fencing around the yard.',
    image1:'assets/pig/pig-entertainment1.png',
    image2:'assets/pig/pig-entertainment2.png',
    image3:'assets/pig/pig-entertainment3.png',
  
  
  
  
  },
    {id: 'breeding', name: 'Breeding', 
    firstParagraph:'Male pigs should be neutered as soon as possible. Boars (uncastrated pigs) give off a pungent, musky odor that will stick to your clothing and furniture. They display sexual behavior at a very early age and can become quite difficult to handle if left intact. Neutering a male will also retard the growth of his tusks. Females should be spayed as soon as possible, preferably before they come into season. If left fertile, females frequently have uterine problems, such as tumors and infections. Find a qualified pig veterinarian to perform the procedure and insist that only isoflurane gas be used for anesthesia. Injectable drugs such as ketamine and cocktails used on dogs can result in serious problems, even death. The older and larger your pig gets, the more anesthesia your pig will require and the more dangerous it becomes. Get your pig neutered and spayed as early as possible.',
    secondParagraph: 'However, if you really your pig to get impregnate, female pigs are normally able to reproduce as early as 3 months of age. Lack of estrus in a female pig 3 months or older should be considered a possible sign of pregnancy, especially if the pig has been kept with a male pig. The gestation period for pigs is 113 to 115 days. As the mother approaches delivery, she will develop a milk line along the teats. She may become restless or show nesting behavior.',
    thirdParagraph: 'You will need to have a farrowing box ready. This is a box lightly padded with small blankets or similar soft bedding and large enough that your pig and her offspring can both move around and nestle together comfortably. The farrowing box should be placed out of drafts and away from any other pets. The number of piglets in a litter can range from 1 to 12. Ask your veterinarian for a list of items to have on hand for the delivery. A heat lamp or pad is often recommended because the piglets cannot maintain their own body temperature immediately after birth and require a temperature of 80°F to 90°F (26°C to 32°C) for 10 to 12 days following birth. ',
    forthParagraph: 'However, extreme caution is required when using heat lamps or pads. A heat lamp can easily overheat the mother, and it can burn the skin of the mother or piglets if it is too close. Also, exposed electrical cords of lamps or pads present a danger of electrocution if they are chewed by the piglets. At least a portion of the farrowing box should be kept cooler to prevent the mother from becoming overheated.',
    fifthParagraph: 'During birth, it is wise to keep an eye on the new piglets because they may be injured or killed if the mother pig lies on them. However, the new mother can be very protective of her offspring, and any disturbances or handling should be kept to a minimum. A small board placed between you and the mother may help your pig feel more secure during birthing. Once the afterbirth has arrived, be sure she has access to all her piglets.',
    sixthParagraph: 'Newborn piglets need a warm farrowing box (80°F to 90°F [26°C to 32°C]) and easy access to their mother for nursing. Consumption of the first milk from the mother, known as colostrum, is very important for their health. Colostrum contains antibodies that provide protection against disease. Piglets need this protection during their first months of life.',
    image1:'assets/pig/pig-breeding1.png',
    image2:'assets/pig/pig-breeding2.png',
    image3:'assets/pig/pig-breeding3.png',
    image4:'assets/pig/pig-breeding4.png',
    image5:'assets/pig/pig-breeding5.png',
    image6:'assets/pig/pig-breeding6.png',
  
  },
    {id: 'litter-box', name: 'Litter box',
    firstParagraph:'If your pig lives inside, it will need a litter box. It’s not hard to train your pig to using the litter box since they are one of the most intelligent animals. Start with some newspaper and move it closer to the litter box until the box is being used. Remember though that the conventional cat litter box it too high for your pig. You will need something that is shallower, more like 2 inches, and you might find these trays or suitable receptacles from your local hardware store. They will get used to walking with a lead and harness if you start with them at an early age.',
    image1:'assets/pig/pig-litter-box.png',

  
  
  
  
  },
    {id: 'hygiene', name: 'Hygiene', 
    firstParagraph:'Pigs are so naturally clean that baths are required only occasionally. That’s not to say your pig cannot enjoy more frequent bathing. This is fine, especially if your pig has good skin and coat condition, as too much bathing can exacerbate the dry skin condition that can be such an annoyance to the potbellied pig owner. ',
    secondParagraph: 'Bathing can be accomplished in several ways depending on the size and temperament of your pig. An outdoor pool with sun-heated water is a good option in the spring and summer. With your pig already familiar and happy relaxing in her pool, you can grab the brush and your bathing supplies and get to it. Float Cheerios atop the water to keep your piggy contented and busy while scrubbing behind those cute little ears!',
    thirdParagraph: 'If you have a walk-in shower, this is ideal for a larger pig. Serve your pig’s meals in the dry shower for a few days. After it is used to this routine, let a slight stream of water fall as it feasts. Gradually, it will become accustomed to this wet dining experience, and you can provide the full body deal while she is enjoying the full meal deal. No problem. If you are looking for success with the least amount of stress, desensitizing your pig to activities you expect it to participate in is such an important pig rule.',
    forthParagraph: 'Small pigs can be bathed in a bathtub or large basin, tank or sink. Be certain to provide a non-slick surface for your pig to stand on in any of these bathing situations. Whatever method you choose to bathe your pig, the water should be tepid, not cold and the pig dried quickly and kept out of drafts.',
    fifthParagraph: 'Eyes and Ears: Routine cleaning of the ears and the area around the eyes is recommended. A brownish discharge will collect in the hair and eyelashes around the eyes. This is particularly noticeable on white pigs; and it’s not very attractive. While quite normal, this discharge should be cleansed away on a regular basis. Use a warm, damp cloth for these grooming jobs. The brown “gunk” that collects just inside a pig’s ears is kind of waxy and gooey. Q-Tips are not necessary, but should you decide to use them, follow the same precaution that you would with yourself or a child.',
    sixthParagraph: 'A pet pig generally relishes in all this attention and physical contact from her care giver. Along with a belly rub, it is easy to do a little ear and eye cleaning. Be gentle and don’t use products that will sting or hurt your pig. Take special notice of anything out of the ordinary. Is there excessive tearing? Does your pig tend to squint? Can you see its eye lashes? Do its lashes appear to be touching its eyeball? Pigs are prone to various eye maladies including runny eyes, matter build up, entropy, scratched cornea, ulcerated cornea, and eye trauma. Contact your vet if any of these conditions exist.',
    seventhParagraph: 'Tusk care: if you have a neutered boy pig (barrow), keep an eye on his tusks. At some point they may need to be cut back. This is a job for the vet as anesthesia is required. A barrow probably won’t need its tusks trimmed until after it is two years of age.',
    image1:'assets/pig/pig-hygiene1.png',
    image2:'assets/pig/pig-hygiene2.png',
    image3:'assets/pig/pig-hygiene3.png',
    image4:'assets/pig/pig-hygiene4.png',
    image5:'assets/pig/pig-hygiene5.png',
    image6:'assets/pig/pig-hygiene6.png',
    image7:'assets/pig/pig-hygiene7.png',

  
  
  },
  ];

  constructor() { }
}
