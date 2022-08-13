import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuineaPigInterestService {

  interests = [
    {id: 'feeding', name: 'Feeding', 
    firstParagraph:'A well-balanced guinea pigs diet consists of many different plants, simply because they are herbivores. The first and most important option is high-quality pelleted food formulated specifically for guinea pigs (about ¼ cup per day). You can feed your guinea pig unlimited amounts (or as much as it wants) of timothy hay (or other grass hay such as orchard grass, oat or meadow hay). Alfalfa hay contains higher amounts of calcium, fat and protein and is fine for young, growing guinea pigs, as well as for lactating and breeding guinea pigs, but should not be fed to adults except as an occasional treat. Excess alfalfa fed to adults can lead to obesity and the development of bladder stones.',
    secondParagraph: 'It is good to feed your pet with some vegetables and fruits from time to time. Leafy greens and bell peppers are great sources of vitamin C for guinea pigs. Small amounts .of high-fiber fruits such as apples and pears may be given as treats occasionally as well. Excess fruit or pelleted food contains too much carbohydrate and can upset the normal balance of bacteria in guinea pigs’ intestinal tract.  It can also lead to diarrhea, bloating and decreased appetite.',
    thirdParagraph: 'Make sure you give your guinea pig clean, fresh, filtered, chlorine-free water, changed daily, offered in a water bottle. It will require grass and water daily and these should be available for it throughout the day.',
    forthParagraph: 'On the other hand, do not feed chocolate, caffeine or alcohol, as these are toxic to guinea pigs and can cause serious medical conditions and death. Avoid sugar and high-fat treats, as guinea pigs’ intestinal tracts are not adapted to digest these foods',
    image1: 'assets/guinea-pig/guinea-pig-feeding1.png',
    image2: 'assets/guinea-pig/guinea-pig-feeding2.png',
    image3: 'assets/guinea-pig/guinea-pig-feeding3.png',
    image4: 'assets/guinea-pig/guinea-pig-feeding4.png',
  
  
  
  },
    {id: 'sleeping', name: 'Sleeping', 
    firstParagraph:'Guinea pigs sleep about four to six hours a day, but instead of doing it all at once, they separate it to many naps. Also, they sleep with their eyes open. It is possible for them to close their eyes once they feel very comfortable and safe in their surroundings, so if you see your pet sleeping with closed eyes, you’ve been a great owner. This weird habit has been developed due to evolution and the will to stay alive, because in nature guinea pigs are often someone else’s prey. Guinea pigs will be most active when the temperatures are just right when they know potential predators are asleep and where they feel safe enough to catch a quick 40 winks. Guinea pigs don’t lie down when they sleep. Like other animals lower down on the food chain, they are always alert, even when they nap, in case they have to get away from a predator. If you notice your guinea pig is lying on its side longer than usual, it could mean something is wrong. Check with your local vet to put your mind at ease.',
    secondParagraph: 'Beware that sometimes too much sleep could be a sign of a more serious health issue. If your piggy is spending more time napping than usual, isn’t interested in food and seems to be ‘sulking’, we recommend a visit to the vet. Symptoms of serious infections such as bacterial pneumonia include lethargy, loss of appetite and depression.',
    thirdParagraph: 'Regarding bedding for your guinea pig, try to get the best possible sleep. You must have the correct bedding. Fleece is an excellent option – it is eco-friendly, works out more affordable in the long run, and is super comfy. Don’t forget to place plenty of hay in and around the hutch. Guinea pigs love nibbling on the stuff, and they also like burrowing into it when they sleep.',
    image1: 'assets/guinea-pig/guinea-pig-sleeping1.png',
    image2: 'assets/guinea-pig/guinea-pig-sleeping2.png',
    image3: 'assets/guinea-pig/guinea-pig-sleeping3.png',
  
  
  },
    {id: 'entertainment', name: 'Entertainment',
    firstParagraph:'Guinea pigs and other rodents have an instinct for digging tunnels and it will keep your guinea pig entertained for days. Due to their closed habitats at home, they cannot exercise their instincts. However, there are toys that you can easily install into a guinea pig’s cage such as tunnel-like objects, so run to the nearest pet shop to get some. They enjoy drilling so wrapping paper tubes are perfect to keep your guinea pig happy. The middle tube of kitchen towels is suitable; just put treats in the middle of the tube and your guinea pig would be satisfied. You can also make use of a rodent igloo which is made of plastics. Ensure to open the entire tube to avoid your guinea pig from getting stuck playing in the tunnel.',
    secondParagraph: 'You can also stuff the tubes with hay. You can add your pet’s favorite treat just in the middle of the hay tube just to make it extra special and fun for your guinea pig. This will help trim and keep their teeth healthy. To keep your pet from being lazy, tie a treat to a rope and drag it on the ground just so your guinea pig can chase after it, you can then hide the treat for a while just so your guinea pig can look for it. Food hunts are very entertaining for your guinea pig.',
    thirdParagraph: 'Also, You can easily make a maze on a used cardboard box. Be flexible and make a twist in the boxes like adding bridges, however, do well to reserve a treat and they can get a reward even when they complete the maze challenge. Guinea pigs more often than not get bored even when they are not stimulated physically and mentally and that’s why you want to make sure you keep your guinea pig entertained at all times.',
    forthParagraph: 'Try making hay or grass chew balls. You’ll just need a couple of old socks and some hay or grass to fill them up and your guinea pig will have a new toy. Chew toys satisfy your guinea pig and encourage their urge to chew. Even a ping pong ball can be quite interesting for your guinea pig. Of course, it won’t be able to chew the ball, but it will enjoy pushing it around. ',
    fifthParagraph: 'If you have more than one guinea pig it’s time you place the first race. If you’ve successfully trained your guinea pigs to come around or to you whenever you call their pet name, this would be a fun game for you. Create the track by placing rows of low heavy items on a straight or curved line. Make your pets aware at first that you put a treat at the other end of the race track so they get motivated to run after it. Once your pets get a grasp of the game you can start to time the runs amongst so you and your pets can stay entertained. You can also use an exercise wheel to help keep your guinea pig entertained and also give your pet some exercise. This homemade race track will definitely make you laugh and keep your guinea pig around and entertained which is one of the ways to keep your guinea pigs running around in their cage and get enough exercise.',
    image1: 'assets/guinea-pig/guinea-pig-entertainement1.png',
    image2: 'assets/guinea-pig/guinea-pig-entertainement2.png',
    image3: 'assets/guinea-pig/guinea-pig-entertainement3.png',
    image4: 'assets/guinea-pig/guinea-pig-entertainement4.png',
    image5: 'assets/guinea-pig/guinea-pig-entertainement5.png',

  
  
  },
    {id: 'breeding', name: 'Breeding', 
    firstParagraph:'Every guinea pig pregnancy comes with big risks for the guinea pig mother and her babies. On average, about 20% of guinea pigs die while giving birth to their babies. Those who survive may cope with complications that can be very painful to them and costly to their owners. For guinea pigs to reproduce, a male guinea pig needs to fertilize the female. The best time to breed guinea pigs is before the female turns 7 months of age. It is important to provide your guinea pigs with the best living conditions for the survival of the mother and the babies. ',
    secondParagraph: 'Guinea pigs are social animals and, if you own one guinea pig, make sure to get at least one more of the same sex so it wouldn’t be alone and possibly suffer from depression. Although you might be spending a lot of time with your small animal, and may even register it as your emotional support animal, your guinea pig needs a friend that belongs to the same species.',
    thirdParagraph: 'Another thing you have to know about guinea pigs is that they feel and function the best at temperatures between 65-80°F (18-26°C). If the temperature goes above 80°F (27°C), guinea pigs, especially overweight or pregnant, might have a heatstroke. If you decide to breed your guinea pigs, make sure to separate the babies in time because baby male guinea pigs can impregnate their mother as soon as they reach sexual maturity which is when they are only three weeks old. Also, make sure to have enough space and separate cages for your guinea pigs as you will have to separate the brothers to prevent fighting among themselves.',
    forthParagraph: 'Don’t mate your guinea pig before she turns at least 3 months of age and weighs at least 400 gr. Ideally, you should wait a little longer than this. For the breeding to be successful, the female must reach full sexual maturity. Likewise, boars (male guinea pigs) should also turn at least three months of age before mating. It will take from nine to ten weeks before your guinea pig gives birth to her babies. She will give birth anywhere from one to six young, although three to four is the average. Your guinea pig can double her weight. To care for her properly, replace timothy hay with alfalfa and provide much more water than usual, as she will drink a lot more. The average gestation period for guinea pigs is 63 days.',
    fifthParagraph: 'After giving birth to her babies, let the new mom clean and groom her babies and don’t interrupt this bonding cycle. Guinea pig mothers need to nurse their babies at least until they turn 2 weeks of age. Also, do not handle the litter and the sow for at least 24 hours. After that, you can handle the babies to allow them to get used to human presence and contact. Baby guinea pigs will run around soon after birth. They have hair, and teeth and come to this world with their eyes open. Also, they can start eating solid food within hours after birth, although they will rely on their mother’s milk for a while. Plus, if you see the mom eating the afterbirth, don’t be upset, as it is normal. Additionally, the new mom can eat her babies after she has given birth. Although it rarely happens, it still can. ',
    seventhParaimage1: 'assets/guinea-pig-entertainment1.png',
    image1: 'assets/guinea-pig/guinea-pig-breeding1.png',
    image2: 'assets/guinea-pig/guinea-pig-breeding2.png',
    image3: 'assets/guinea-pig/guinea-pig-breeding3.png',
    image4: 'assets/guinea-pig/guinea-pig-breeding4.png',
    image5: 'assets/guinea-pig/guinea-pig-breeding5.png',
  
  
  },
    {id: 'hygiene', name: 'Hygiene',
    firstParagraph:'For your piggies to be healthy and happy, their cage needs to be regularly cleaned. Spot checks every day are required, replace old or dirty bedding once a week, and a deep clean once a month. Leaving wet or soiled bedding in your guinea pig’s cage can leave them feeling uncomfortable and prone to various diseases, including pneumonia.',
    secondParagraph: 'On the other hand, if your guinea pig is in need of their monthly bath (or every other month, in the winter) then it’s best to do this on a day with good weather when they can dry off quickly. Guinea pigs don’t enjoy being wet, and particularly in cold climates bathing guinea pigs and not drying them off properly can give them chills. If you have more than one guinea pig that live in the same cage it’s best if you both all of them at the same day and with the same shampoo. It’s possible if you remove one from their home and return it with a different scent, then fights can break out as they don’t recognize each other properly, because guinea pigs are very scent-oriented creatures.',
    thirdParagraph: 'Once their bodies are thoroughly wet (apart from their head which you can wet with your fingertips) lift them out of the water and place them on the ground, or on your lap covered with a towel. Squeeze a bit of the shampoo onto your hand and gently lather it all over your guinea pig’s body. It is a good idea to lather your guinea pig’s head with a finger to help avoid getting any shampoo in their eyes, as this will sting as it does with humans. If you’re giving a guinea pig an anti-parasite bath, follow the instructions on the packet for shampooing the guinea pig’s head. If you’re trying to get rid of mites then carefully shampoo the guinea pig’s ears, too, as mites will live on and in them. Shampooing of the ears needs to be done very carefully to avoid getting shampoo or water near your pets’ eardrums.',
    image1: 'assets/guinea-pig/guinea-pig-hygiene1.png',
    image2: 'assets/guinea-pig/guinea-pig-hygiene2.png',
    image3: 'assets/guinea-pig/guinea-pig-hygiene3.png',
  
  
   },

  ];
  constructor() { }
}
