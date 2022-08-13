import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {
  interests = [
    {id: 'feeding', name: 'feeding', 
    firstParagraph: 'Biologically cats are carnivores. But don’t be surprised if your domestic cat that never hunted a living thing, eats some vegetables. However, meat is always the best option for your cat. First of all, you will need to determine the best diet for it, depending on the age, activity level and health. Secondly you need to understand and know what your cat needs. ',
    secondParagraph: 'Cats require taurine, arginine, methionine and cysteine, essential amino acids, for heart and eye health. Cats can’t convert and use other amino acids derived from plats because of their natural diet. Also, they need a lot of protein for energy. That’s why it is very important to get these from meat. Your cat also requires fats, especially the fat-soluble vitamins (A, D and E). As carnivores, for example, they can get vitamin E and D from fish and vitamin A from beef or lamb liver. ',
    image1: 'assets/cat/cat-feeding1.png',
    image2: 'assets/cat/cat-feeding2.png',
    image3: '',
  
  
    },
    {id: 'sleeping', name: 'sleeping',
    firstParagraph: 'Cats love to sleep. On average, cats sleep between 13 and 16 hours in a 24-hour day. They sleep anytime and anywhere. You might want to try scheduling their sleep time, although it’s better to let the cat sleep whenever it feels like it. Make sure you have a nice place for your cat to sleep at, at least for the night during its deep sleep. A mattress or even a pillow would be totally comforting. Your cat is most likely to show you where it wants its bed to be placed, for example its best place for napping it’s a good start. You can also mark some other places with a blanket so that your cat learns where it’s allowed to sleep. Remember that cats are very disciplined and they adapt easily, but you still need to set up the rules right from the start if you want to avoid getting fur all around the house.',
    secondParagraph:'Finally, one should set boundaries for your bedroom. First of all, don’t put your cat’s bed in your own bedroom. Don’t play with your cats in the place you want to achieve rest, keep toys and potential toys (rolled up socks, for example) out of the bedroom; keep the door closed during the night and be mindful to ignore any initial meowing that may result from changing their routine; make your designated play area as far from the bedroom as you can, that way any specially-designed night toys won’t keep you away.',
    image1: 'assets/cat/cat-sleeping1.png',
    image2: 'assets/cat/cat-sleeping2.png',
    image3: '',
  



  },
    {id:'entertainment', name: 'entertainment',
    firstParagraph: 'Cats are mostly lazy animals. They would rather spend their day waiting for the prey to come to them, instead of chasing it. Nevertheless, it doesn’t mean it is the case with your cat. Indoor cats, when they have enough food in their bowl, they won’t hunt but that way they lack activity and movement. Eventually they could become very lazy and similarly to human’s body, they can develop serious health conditions. That’s why you need to provide them some toys and scratching material. Cats are easily intrigued with every little thing that moves, so even a sheet of paper tied with a thread will be interesting for them as long as it moves around. Consider buying little balls or stuffed animals without worrying if they might get ruined. They probably will, but that’ll be a good thing. ',
    secondParagraph: 'Your cat needs sturdy scratching post. When a cat scratches, the old outer nail sheath is pulled off and the sharp, smooth claws underneath are exposed. Cutting your cat’s nails every two to three weeks will keep them relatively blunt and less likely to harm the arms of both humans and furniture. The post should also be stable enough that it will not wobble during use, and should be covered with rough material such as sisal, burlap or tree bark. Many cats also like scratching pads.',
    image1: 'assets/cat/cat-entertainment1.png',
    image2: 'assets/cat/cat-entertainment2.png',
    image3: '',
  
  
  
  
  },
    {id: 'breeding', name: 'breeding', 
    firstParagraph: 'It is most common for female cat reproduction to begin between six and nine months, but it could also happen as early as four months of age. Male cats likewise will reach maturity and be capable of cat breeding before one year of age. In seasonal climates, mating usually takes place during the warmer months, however, it can occur at any time. If the female becomes pregnant, the pregnancy lasts a little over 2 months, most commonly around 66 days. The first signs of cats mating is the male partner being too close to female. After a while, if the female is pregnant, you will notice weight gain and an enlargement of the abdomen. It can have morning sickness, similarly to human. The nipples continue to enlarge and a milky fluid may be expressed from them.',
    secondParagraph: 'In nature, cats don’t have many problems with bearing children, just like other animals due to their animal instinct. But, if you want to keep a track on your cat’s pregnancy, then you might want to go to the vet quite often. The first veterinary exam for the breeding cat should occur within two to three weeks of mating to check on her overall health and provide the best plan for her pregnancy to ensure her health and the health of her kittens. One to two days before the cat is going to give birth, you may notice mom roaming around, acting restless and strange. She is trying to decide where she wants to have her kittens. When you see this happening, it is best to confine her to one room where you want her to deliver. It should be a quiet, warm room that can be darkened easily and is easy to clean.',
    thirdParagraph: 'You should contact your veterinarian if the pregnant cat is pregnant longer than 66 days after the cat breeding, if she stops eating or is weak or lethargic, a kitten becomes lodged in the birth canal longer than ten minutes, or the mom has contractions for more than four hours without producing a kitten. You should also be concerned if more than five hours passes after a kitten is born and you are sure there is another kitten still ready to be born.',
    image1: 'assets/cat/cat-breeding1.png',
    image2: 'assets/cat/cat-breeding2.png',
    image3: 'assets/cat/cat-breeding3.png',
  
  
  
  
  
  },
    {id: 'litter-box', name: 'litter box',
    firstParagraph:'Every indoor cat needs a litter box, which should be placed in a quiet, accessible location. Avoid moving the box unless absolutely necessary, but if you must do so, move the box just a few inches per day. Keep in mind that cats will not use a messy, smelly litter box, so scoop solid wastes out of the box at least once a day. Dump everything, wash with a mild detergent and refill at least once a week; you can do this less frequently if using clumping litter. Do not use ammonia, deodorants, or scents, especially lemon, when cleaning the litter box. If your cat will not use a litterbox, please consult with your veterinarian. Sometimes refusal to use a litter box is based on a medical condition that required treatment.',
    secondParagraph: '',
    image1: 'assets/cat/cat-litter-box.png',
    image2: '',
    image3: '',
  
  
  
  },
    {id: 'hygiene', name: 'hygiene',
    firstParagraph:'Cats are known for their grooming habits. With their tongues, teeth, and paws, they’re usually able to keep themselves fresh and clean without any outside intervention. Sometimes, though, your cat might need help staying clean. Nevertheless, if your cat is covered in something dangerous, smelly, or sticky, or if they have picked up some parasites, it might be a good idea to give them a bath. Firstly, you’d like to trim its nails, because your cat’s claws are one of their main forms of defense and knowing that cats don’t like water, they could easily do harm to you and even infect you. Before the bath brush your cat’s fur. That extra fur won’t be good for your plumbing, and it will make it more difficult to get your cat really clean. You can also put cotton balls gently in their ears to keep water out.',
    secondParagraph: 'Give your cat a folded towel in the bottom of the tub or a rubber bath mat to stand on so they don’t panic when they can’t stand easily. Once the mat is in the tub, add three to four inches of comfortably warm water to the tub, then have your helper put the cat in the tub. You may need your helper to hold onto the cat for the whole bath to avoid scratches. Beware that, cats don’t sweat like humans do. The steamy hot water you might prefer for a shower or bath can overheat your pet. Instead, aim for a few degrees above lukewarm. Another thing you should know is that your cat probably won’t willingly go under water. Instead, use a handheld sprayer, a pitcher, or a plastic cup to gently pour water over their body until they’re thoroughly wet.',
    thirdParagraph: 'Don’t use human shampoo on your cat. They’re  not safe if your cat licks it, and they may hurt your cat’s delicate skin. Instead, use a shampoo that’s designed for cats. Start at your cat’s neck and gently massage the shampoo toward the tail. Avoid their face, eyes, and ears. Once you’ve fully lathered up your cat, you can begin rinsing them off with clean, lukewarm water. Take the time to make sure all of the soap is gone; anything that’s left will be ingested by your cat when they clean themselves again later. It can also irritate their skin and attract dirt.',
    forthParagraph: 'If your pet’s face also needs cleaning, don’t pour water over it or use shampoo. Instead, use a warm, damp washcloth to carefully wipe it off. Be extra cautious around your cat’s eyes and ears, which are sensitive and can be easily damaged. If you do need to use something more than plain water, you can use just a drop or two of cat shampoo on the washcloth to remove anything sticky or dangerous.',
    fifthParagraph: 'The most important part of bathing your cat is drying them off afterward. Dry them off as quickly as possible with a large towel and keep them in a warm room until they’ve completely dried. If your cat lets you, you can also use a hairdryer on its lowest warmth setting to speed up the process. If your cat has long fur, take the time to comb it out with a wide-toothed comb to avoid mats later. And lastly reward your cat for its patience.',
    image1: 'assets/cat/cat-hygiene1.png',
    image2: 'assets/cat/cat-hugiene2.png',
    image3: 'assets/cat/cat-hygiene3.png',
  
  
  },
  ]
  constructor() { }
}
