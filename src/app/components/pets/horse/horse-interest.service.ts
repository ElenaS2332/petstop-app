import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorseInterestService {

  constructor() { }

  interests = [
    {id: 'feeding', name: 'Feeding',
    firstParagraph:'The horse is a grazing animal, designed to eat almost constantly throughout the day. Their natural feed is grasses and other edible shrubs and plants, and they have evolved to eat for 18 out of the 24 hours.  Feed little and often. This imitates the horse’s natural feeding pattern and achieves satisfactory digestion by ensuring a constant passage of food through the digestive system. Feed plenty of bulk and roughage such as grass, hay, haylage, etc. This ensures that the digestive system is always adequately filled, as would be the case in the wild. Feed according to size of horse and workload. More work requires more energy, and more food. Too much or too little food will result in the animal being over or under weight.',
    secondParagraph: 'Remember to remove toxic plants: before letting your horse loose in a paddock, be sure to remove toxic plants, shrubs, and trees such as ragwort and yew. Always dig up toxic plants, even if they are dead, and take them completely out of the reach of horses. Not all pastures provide enough nutrition, and many will be too high in calories. You may still need to give your horse extra hard feed and forage to maintain its ideal body weight, particularly between late autumn and early spring.',
    thirdParagraph: 'If your horse is stabled, you should give it plenty of forage, as feeding horses diets low in forage and high in concentrates - such as hard feeds like cubes or grains - puts them at risk of digestive problems. Only feed your horse good quality, mold-free and dust-free forage, and only give them food designed for horses. Never give them lawn clippings or large amounts of fermentable foods such as apples, as they can be toxic and even fatal.',
    forthParagraph: 'Now that your horse has eaten all that grass, it needs enough water to make soup in that fermentation vat we call the hindgut. Without enough water, that hay or grass begins to compact, and trouble follows. Water also plays an important role in the rest of the horse’s world. Make sure it has good-quality hay and fresh water.',
    image1: 'assets/horse/horse-feeding1.png',
    image2: 'assets/horse/horse-feeding2.png',
    image3: 'assets/horse/horse-feeding3.png',
    image4: 'assets/horse/horse-feeding4.png',
  
  
  
  
  },
    {id: 'sleeping', name: 'Sleeping', 
    firstParagraph:'You might have noticed that your horse nap while standing. It is because sleeping while lying down can be dangerous. It takes a bit of work for horses to get up, which makes them vulnerable to attacks by predators. To protect themselves, horses instead doze while standing. They’re able to do this through the stay apparatus, a special system of tendons and ligaments that enables a horse to lock the major joints in its legs. The horse can then relax and nap without worrying about falling. When horses need deep sleep, however, they lie down, usually for a series of short intervals that amount to about two to three hours a day. And even then, they often have another horse standing nearby and serving as a lookout.',
    secondParagraph: 'The sleeping habits of horses are quite different than humans. Most human sleep is usually a long, single stretch—about eight hours in a 24-hour day. Horses doze for various periods during the day and have short bouts of deep sleep lying down in the middle of the night. Horse’s sleeping patterns change depending on their age.',
    thirdParagraph: 'Foals lie down for frequent naps and spend about half of their day sleeping until they are about three months old. As the foal gets older, the frequency of the naps becomes less, and they are more likely to stand rather than lie down. Adult horses spend more time dozing while standing up than in deep sleep lying down. Most horses will lie down for deep sleep a few times each night, if they have a comfortable place to do so and feel safe. This is why it is important to provide a dry, sheltered area like a run-in shed or roomy stall, so your horse can stretch out safely for a snooze.',
    forthParagraph: 'Adult horses sleep for about three hours each 24-hour period. The length and type of sleep are affected by diet, temperature, workload, gestation, and gender. The period of each sleep phase is very brief, lasting only a few minutes at a time. Young horses tend to sleep more than mature horses. Senior horses may doze more frequently.',
    fifthParagraph: 'Horses will lie down to sun themselves, and it is not unusual for several horses to lie down at the same time for a communal sunbath on a warm spring day. Often while several horses lay down, one or two others will remain standing. This is a natural look-out behavior for the safety of the herd. Horses tend to spend less time lying down in cold snowy conditions, although on a sunny day, some will snooze stretched out in the snow. Each horse has its own sleeping habits. Some will sleep only at night while others sleep during the day as well.',
    image1: 'assets/horse/horse-sleeping1.png',
    image2: 'assets/horse/horse-sleeping2.png',
    image3: 'assets/horse/horse-sleeping3.png',
    image4: 'assets/horse/horse-sleeping4.png',
    image5: 'assets/horse/horse-sleeping5.png',

  
  
  
  },
    {id: 'entertainment', name: 'Entertainment', 
    firstParagraph:'Your horse needs to exercise. If you’ve ever had to keep a horse stall-bound due to an injury, you’ll know firsthand how much horses need to exercise to stay happy. That movement not only keeps their body in shape, but each step helps their feet get a good blood supply. Movement also helps the digestion process. If you must keep your horse inside due to terrible weather or some other reason, see if you can let it walk – at least up and down the barn aisle.',
    secondParagraph: 'Horses seem to need down time, just to be themselves and let down mentally, or maybe to kick up their heels. If your horse lives in a busy barn with limited turnout time, putting it on the lunge line or working it in a round pen may give him exercise, but not the down time it probably craves. See if you can schedule some turnout for him, or at minimum hand-walk him, and let it graze on the lead rope a distance from the barn.',
    thirdParagraph: '“You scratch my back, and I’ll scratch yours” is the universal horse motto, and we see it played out all the time. Stabled horses or horses without a buddy often don’t have that luxury, so here’s a place that you can really win points with your horse. Groom it so that its skin is clean. That will also give you an opportunity to notice any bug bites or injuries. But also take the time to find those special spots it likes to have scratched. It’ll think pleasant thoughts of you, even when you’re not at the barn.',
    forthParagraph: 'Give your horse a job. Horses love to have a purpose, and it’s exciting for an owner to have a horse that knows its job. Take a look at some cutting horses, and you see that many of them love what they do. The same holds true when you see the care with which a therapeutic-riding horse moves with its precious cargo, or you see an event horse in the start box.',
    fifthParagraph: 'But horses don’t need to have a jazzy job to feel worthwhile. The retiree may see its job as coming for its carrot and having its feet picked out. And the lack of focus in an untrained horse may be the result of it not having found its place in the world. Simple things like telling the yearling where to stand and praising it when it stands there (not scolding it when it’s in the wrong place) probably give it a sense that it is alright with the world. When you see that look come over your horse’s face, that’ll make you happy, too.',
    image1: 'assets/horse/horse-entertainment1.png',
    image2: 'assets/horse/horse-entertainment2.png',
    image3: 'assets/horse/horse-entertainment3.png',
    image4: 'assets/horse/horse-entertainment4.png',
    image5: 'assets/horse/horse-entertainment5.png',
  
  
  
  },
    {id: 'health', name: 'Health', 
    firstParagraph:'Check your horse for signs of injury and illness and do this every day. Make sure someone else does this for you if you are away. Regularly deworm and vaccinate your horse against equine influenza and tetanus. You may also want to vaccinate them against equine herpes virus too.  Poorly fitting tack can cause injury and pain, as can poorly riding technique or riding by people too heavy for the horse. Check your horses tack regularly to make sure it still fits properly, and keep it properly maintained.',
    secondParagraph: 'Check your horse’s teeth and hooves. Learn to recognize lameness - if your horse becomes lame, it should not be worked, and you should consult your vet. Inspect hooves daily, including the underside of the foot. Overgrown or unbalanced hooves can cause severe discomfort and damage to the internal structure of the feet, legs and back. Your horse should be seen by a farrier every four to six weeks, even if they are unshod.      ',
    thirdParagraph: 'Regular dental checks - horses’ teeth erupt through the gums continuously. They can develop hooks and sharp edges, which can cause painful injuries inside the mouth. Get them checked by an equine vet or qualified equine dental technician at least once a year.',
    image1: 'assets/horse/horse-health1.png',
    image2: 'assets/horse/horse-health2.png',
    image3: 'assets/horse/horse-health3.png',
  
  
  
  },
    {id: 'hygiene', name: 'Hygiene', 
    firstParagraph:'A dirty barn is a danger. So it’s important to ensure your barn or stable is properly ventilated, ensuring that all harmful particles and debris are forced out, and fresh air is brought in. Another important step is to make sure you clean or replace your floor mats often, to maintain your horse’s hoofs remain healthy as well. You’d need to sweep up the loose hay, dirt, and debris, but you should know that it would take hours and is taxing on your health and well-being. You can use a leaf blower, that would make the process faster, but instead of actually cleaning your stable, it would instead kick up and spread all the dirt and debris instead of having it cleaned out of the barn. There are other alternatives like using a power vacuum that usually suck up all the dirt into a sturdy cotton or polyester bag. A bag that you can then unzip and dump out at your convenience. If you only have one horse this wouldn’t be a good investment, however it makes your work simpler if you have more horses.',
    secondParagraph: 'On the other hand, if you want to bath your horse, you need to consider how dirty your horse is and how much time you have to give him a bath. Another deciding factor is temperature. Both will impact the type of bath you decide to give your horse. There are three main types of baths you could give your horse. They are hot toweling, rinsing off and a full bath.',
    thirdParagraph: 'Hot toweling is great for cold weather, even when it is snowing, because you never get your horse completely wet. In fact, you never use the hose directly on your horse at all. In order to get started, you need to gather a few supplies: hot water. many clean, dry towels, regular grooming set (brushes, etc.). You don’t need shampoo for this kind since it’s too cold to rinse it afterwards. First start with removing loose hair and dirt. Go over horse with a curry to get rid of any mud clumps and to remove as much loose hair as possible. If your horse has a natural winter coat, use a stiff bristled dandy brush to start to remove dirt. Next repeat step 2 but, this time, with a body brush. And afterwards go over horse with a very soft finishing brush.',
    forthParagraph: 'Now that you have your horse as clean as possible, prepare a bucket of hot water and a bunch of clean towels and you can get started. First wet the towel. Wring out as much of the water as possible. Immediately place the towel on your horse’s neck and start scrubbing it vigorously with the towel. When you are done, depending on the weather, you can either let your horse air dry while you move onto the next section or, use a dry towel to remove as much moisture as possible. You are going to use a new towel for each section of your horse’s body. You will probably want at least 8 towels. 2 for each side of the neck and shoulders, 2 for each side of the barrel and 2 for each side of the hindquarters. The 6th towel for the face and the 8th for the legs. If you started with 10 towels, the extra two are for drying.',
    image1: 'assets/horse/horse-hygiene1.png',
    image2: 'assets/horse/horse-hygiene2.png',
    image3: 'assets/horse/horse-hygiene3.png',
    image4: 'assets/horse/horse-hygiene4.png',

  
  
  },
  ];
}
