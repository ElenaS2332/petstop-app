import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  interests = [
    {id: 'choose-the-dog', name: 'Choose the dog for you',
    firstParagraph: 'Golden Retriever - The golden retriever is the quintessential family dog; they are eager to please. Goldens are excellent with children of all ages. This medium-large dog is happy, loyal, affectionate, and active. The breed is intelligent and adaptable to thrive in most households. They also need a fair amount of exercise to keep them in good physical condition and prevent boredom. Training is essential but not difficult. They love to learn and can be trained to do many things. The breed needs regular brushing to keep its coat free of tangles and mats.',
    secondParagraph: 'Pomeranian - The Pomeranian is a dainty and sweet little lap dog. The Pom often bonds closest to a single owner but can still do well in families. This breed is better with gentle older kids but can adapt to many situations. Daily basic exercise is generally enough to keep your Pom happy. They need basic training to provide structure and boundaries. Without training, the breeds feisty and stubborn side may come out. Fortunately, they respond well to consistent, positive training and will thrive because of it. This dog is bright and moderately active with a big fluffy coat. Fortunately, its coat is not as high maintenance as it looks. Regular brushing is generally all you need to keep your Pom looking good.',
    thirdParagraph: 'Poodle - The poodle is a popular, versatile dog breed that makes a wonderful companion. The poodle is adaptable to its environment and can do very well in various households, including those with children. This breed comes in three sizes: toy, miniature, or standard. All are intelligent and respond well to training. Poodles are energetic dogs that need plenty of exercise and mental stimulation. They need grooming regularly to maintain their curly, continually growing coat.',
    forthParagraph: 'Boxer - Boxers are known to be playful and do not mind befriending kids as playmates. A lively dog, it can go toe-to-toe with children who also seem to have endless energy and a love of the outdoors. It has a goofy, childlike personality that children can appreciate. It can be sometimes clumsy and bump or knock over a kid or two, so watch it closely around toddlers.',
    fifthParagraph: 'Bichon Frise - This little cotton ball of a dog loves to play and is not usually too hyper. It is affectionate, charming, and has the energy to match a kids endless spirit. It is also a small dog, which does not intimidate or overwhelm little kids. Although, if a child is overly rambunctious or rough, it might give a warning snap to let them know there is only so much it can take.',
    sixthParagraph: 'Beagle - Beagles are the dog breed popularized by "Snoopy." These dogs are friendly, clever, and not too big, making them suitable for kids. Though some can be a bit high-strung, they typically respond very well to training. They are a social breed that enjoys being around people, including children. They are loyal will easily bond with a child. It may even be one best guard dogs for your little one, letting you know with its distinctive baying cry when someone comes near. A vocal breed, it may not be the best dog for napping young infants and toddlers who wake easily from barking or sounds.',
    seventhParagraph: 'German Shepherd - This breed is extremely loyal and protective but must be well-trained. German shepherds have a playful side, especially at a younger age. They can be sweet and gentle with their family but are wary of strangers. An intelligent breed, they can be taught to do almost anything.',
    image1: '/assets/dog/retriever.png',
    image2: '/assets/dog/pomeranian.png',
    image3: '/assets/dog/poodle.png',
    image4: '/assets/dog/boxer.png',
    image5: '/assets/dog/bichon.png',
    image6: '/assets/dog/beagle.png',
    image7: '/assets/dog/sheperd.png',
    


  },
    {id: 'feeding', name: 'Feeding', 
    firstParagraph: 'It’s important to remember all dogs are individuals, and what diet might be fine for your friend’s dog may be completely inappropriate for your dog. When it comes to a daily diet for your dog, it’s important to consult with your vet. Domesticated dogs are largely carnivores that eat some omnivorous foods. It is entirely acceptable to feed your dog a pure kibble diet. Or you can mix their diet up with some cooked or raw meat, fish, vegetables and rice.',
    secondParagraph: 'Many owners like to feed a raw meat diet to their dogs, and while this can suit some dogs very well, there are some important considerations you need to be aware of. Choose human-grade meat as some pet meat and bone products will contain preservatives that can be bad for your dog’s health. Practice impeccable food hygiene as the risk of both you and your dog getting a food-borne bacterial infection such as campylobacter or salmonella is high.',
    thirdParagraph: 'Have a veterinary nutritionist formulate the diet for you. Many raw diets are not balanced appropriately for stage of life or medical conditions. A small amount of cooked meat such as boiled chicken or lamb is an option for dogs to eat but avoid cooked bones or toxic substances such as onion sauces that may be present on the meat. Tinned sardines, tinned tuna, and tinned salmon in spring water can be fed as an occasional treat to your dog, but always check for fish bones first. Don’t be scared to bulk out your dog’s meal with cooked pumpkin or raw grated carrot. But be careful to make sure your dog isn’t consuming the whole bone as this can lead to constipation.',
    forthParagraph: 'Generally, one to two bones a week is sufficient to help remove plaque from teeth. Remember, the bone should be large enough that the dog can’t fit it in its mouth whole, and they should be raw – cooked bone can splinter, which can cause internal damage or obstruct the intestine, both of which can be fatal.',
    fifthParagraph: 'The amount of food your dog needs will largely depend on the size, breed, and age of your dog, as well as how regularly it exercises. The key is to ensure you don’t overfeed or underfeed your dog. If ever you’re unsure, ask your vet to assess your dog’s diet and nutrition, and the condition of its body and overall health. Always ensure your dog is well hydrated. This means making sure their water bowl is always filled up and is changed daily, so they can help themselves to water whenever they need or want.',
    sixthParagraph: 'Keep certain foods out of reach. When it comes to your pets, not everything people eat is safe for them. It’s important to know that while this list is not comprehensive, these are the most common household foods that you’ll need to protect your pup from. For example: chocolate. While dogs love the smell of chocolate, it’s toxic for them, and should never be fed to them. Also, onions and garlic. Onions are very toxic to dogs. They cause oxidative damage to the red blood cells causing them to rupture leading to anemia. The citric acid found in fruits such as grapefruit, lemon, lime, and orange, can cause diarrhea, vomiting and at the very worst end of the scale, depression of the central nervous system. Some dogs may be lactose intolerant, resulting in stomach upsets like vomiting or diarrhea. If your dog reacts strongly to milk products, it’s best to avoid them.',
    seventhParagraph: 'Don’t feed your dog raw yeast dough. While your dog can have small bits of bread, raw dough is a no-no. As the yeast rises, it can cause gas in the dog’s digestive system, which is painful and may potentially rupture its stomach or cause gastric dilation and volvulus.  If you’re looking at maintaining a healthy weight for your dog, sweet and fatty foods should be avoided. Also, fatty foods can lead to illnesses such as pancreatitis. Salt is an essential component to your dog’s diet helping muscle and nerve function. However, some dogs with chronic disease such as kidney, heart or liver problems may need to watch their salt consumption. It is always important to get advice from your vet regarding the diet of your pet.',
    image1: '/assets/dog/dog-feeding1.png',
    image2: '/assets/dog/dog-feeding2.png',
    image3: '/assets/dog/dog-feeding3.png',
    image4: '/assets/dog/dog-feeding4.png',
    image5: '/assets/dog/dog-feeding5.png',
    image6: '/assets/dog/dog-feeding6.png',
    image7: '/assets/dog/dog-feeding7.png',
    

    },
    {id: 'sleeping', name: 'Sleeping', 
    firstParagraph: 'A dog crate is both an extremely useful training tool and a perfectly good spot for your furry friend to lay his head. The most obvious benefit of having your dog sleep in a crate is that you won’t have to worry about what will happen if he stirs in the middle of the night. If your dog has a tendency to cause some trouble when you’re not around, a dog crate will keep him contained while he dreams of treats.',
    secondParagraph: 'Crate training is useful for other reasons as well. For example, a dog crate is a good sleeping spot if you’re potty-training a puppy. Dogs naturally want to keep their sleeping area clean, so they won’t be nearly as likely to have an accident in their crate. This basic instinct will help train your pup to wait until you let them out in the morning instead of going to the bathroom somewhere in the house.',
    thirdParagraph: 'There is also no rule that says you have to shut the crate door once your dog is trained. You can turn the crate into a comfortable, snuggly bed with a blanket, and leave the door open so your dog can come and go as they please. As den animals, dogs tend to enjoy enclosed spaces like crates. That means your best friend may naturally prefer the protective atmosphere the crate provides.',
    forthParagraph: 'Another potential option is to allow your dog to curl up on top of your covers at night. There are a variety of benefits that come with having your dog sleep in the same bed as you. Co-sleeping is a great bonding opportunity to help you and your dog grow closer. Sleeping with a pet also helps people to relax and enjoy a deeper, more tranquil sleep. Plus, sleeping in the same bed is simply more time to cuddle with your cute critter.',
    image1: '/assets/dog/dog-sleeping1.png',
    image2: '/assets/dog/dog-sleeping2.png',
    image3: '/assets/dog/dog-sleeping3.png',
    image4: '/assets/dog/dog-sleeping4.png',
    

    },
    {id: 'entertainment', name: 'Entertainment',
    firstParagraph: 'Bored dogs get into trouble. We’re their main source of entertainment, so if we don’t give them stuff to do they’ll come up with activities of their own — and that’s often when we end up with chewed up shoes and table legs. Keeping your dog entertained can be a challenge, and simply trying to come up with new ways to keep your dog entertained can be more exhausting than actually getting up and doing it.',
    secondParagraph: 'Play a game of ‘find the treats’. Nose work games are one of the easiest ways to tire out your dog. When you teach your dog some basic nose work games such as ‘find the treats’ you’re mentally tiring them out and helping them home in on some of their natural skills. You don’t need a big bag of store bough dog treats either; chopped up carrots are my favorite treat to use for this game. To play all you have to do is grab some treats and have your dog watch in a stay position as you place them around the room. Give your dog the cue to “find the treats” and encourage your dog to pick them up, remembering to praise them every time they find one. After your confident that your dog understands what “find the treats” means you can making it a bit more challenging. Have them stay in another room as you hide the treats, and start hiding them in spots they have to sniff out such as under a rug.',
    thirdParagraph: 'Teach your dog to clean up its toys. If your dog’s toys are kept in a container, you can teach them to put their toys away. I know it sounds weird to teach your dog to clean up after themselves, but it’s a lot of fun. Teaching your dog new skills boosts their confidence, and it’s a great way to give them more mental stimulation.',
    forthParagraph: 'Playing a game of tug of war is one of the best ways to engage in meaningful play with our dogs. It’s a great way to exercise your dog mentally and physically. And since it doesn’t require a ton of room you can play it indoors. And contrary to what some people say playing tug will not make your dog aggressive, and letting them win will not make them dominant. Letting your dog win just makes the game more fun for your dog, and it will encourage them to play more. Dogs that play tug with their owners have been found to be more obedient and have higher confidence.',
    fifthParagraph: 'Teach your dog to help with chores. Dogs love having a job to do, even if it’s something as simple as fetching you your slippers. You can make them feel even more useful by teaching them the names of some items you wouldn’t mind  having retrieved. If you want to impress all of your friends teach your dog to fetch you something from the fridge. When teaching your dog to open the fridge tie a towel around the handle so it’s easy for them to pull open the door. And if you’re feeling like a superstar you can teach your dog to help out with daily chores.',
    sixthParagraph: 'Teach your dog a new trick. Also, teach your dog the names of its toys and then command it to find them. Start by playing with one specific toy and giving it a name while you do. After some practice & praise your dog will assign that verbal name with the chosen toy. Once your dog has learned that specific toys name you can test their skills by seeing if they can pick it out among their other toys. Once your dog knows the names of some of their toys teach them the “go find it” game. Have your dog’s toys in a pile or container and tell them to “go find” their favorite toy. As your dog gets better at this game you can make it more challenging by increasing the number of toys they have to sift through.',
    image1: '/assets/dog/dog-entertainment1.png',
    image2: '/assets/dog/dog-entertainment2.png',
    image3: '/assets/dog/dog-entertainment3.png',
    image4: '/assets/dog/dog-entertainment4.png',
    image5: '/assets/dog/dog-entertainment5.png',
    image6: '/assets/dog/dog-entertainment6.png',

     },
    {id: 'breeding', name: 'Breeding', 
    firstParagraph: 'Do you know how to breed your female dog? A female dog will have her first heat cycle from 4 months of age up to the second year (tiny dogs come into heat early, so the first heat can depend on the size and the breed), but even though she can get pregnant that early, she should not be bred until her second or third estrus. After that first cycle, she will come into heat about every six months, but it can vary from 4 to 12 months.',
    secondParagraph: 'The male will mount the female and the bulbis glandis will swell so that he is “tied” to the female for about twenty minutes (it may be as short as two minutes or as long as half an hour). He will usually swing a back leg over and will stand, tied with the female in a tail-to-tail position. Do not separate your female from the male at this point. Do not yell at them, throw water on them, pour ice on them, or try any of the other crude methods I have heard about over the years. Stay close and keep the female from rolling around and damaging the male, but do not try to separate them. It will all be over soon enough.',
    thirdParagraph: 'If you do everything correctly, puppies will come along about 58-63 days after your female has been bred. Breeding a female dog, though, can be a real gamble. If you have a breed like the English Bulldog and think you will make money breeding her since her purchase price was so high, you may end up paying for a C-section and may even end up losing your dog when she dies in labor. Some breeds produce puppies more easily but, after the genetic screening costs, x-rays for hip dysplasia, the medications for worms or any other illness, the vaccinations, and the increased food bills, you may end up losing money. Unless your female has something to contribute to the breed, and you are ready to find homes for all of the puppies, she should be spayed. You do not need to breed every female dog.',
    image1: '/assets/dog/dog-breeding1.png',
    image2: '/assets/dog/dog-breeding2.png',
    image3: '/assets/dog/dog-breeding3.png',
    

    },
    {id: 'health', name: 'Health', 
    firstParagraph: 'In addition to your love and companionship, there are measures you should take as a responsible pet owner to keep your dog healthy. Keep your pet at a healthy weight. Exercise your pet. Feed your pet a balanced, nutritious diet.',
    secondParagraph: 'Have your veterinarian examine your pet at least once a year to make sure your pet is healthy and to help detect problems earlier. Vaccinate your pet against potentially deadly diseases such as distemper, parvo, panleukopenia and rabies. Keep your pet free of parasites (fleas, ticks, heartworm, etc.) – consult your veterinarian for the best product for your pet.',
    thirdParagraph: 'Spay/neuter. Getting your pet fixed has several benefits. It can prevent some cancers and diseases, extend your pet’s life expectancy and cut down on aggressive behavior in males. For females, it can prevent them from going into heat and reduce unwanted behaviors associated with their cycle, such as irritability, yowling and spraying urine.',
    forthParagraph: 'Know what’s “normal.” Has your pet’s behavior changed recently? Is he scratching more than usual? Is he eating more or less than he normally does? Changes from the norm could be cause for concern and indicate an underlying issue. If you notice abnormal behavior in your dog or cat, give your vet a call to see if an exam is necessary.',
    image1: '/assets/dog/dog-health1.png',
    image2: '/assets/dog/dog-health2.png',
    image3: '/assets/dog/dog-health3.png',
    image4: '/assets/dog/dog-health4.png',
    
    

    },
    {id: 'hygiene', name: 'Hygiene', 
    firstParagraph: 'Most dogs would rather skip bath time, but bathing plays an important role in the health of your dog’s coat and skin, helping to keep your dog clean and free of dirt and parasites. And of course, there’s the added benefit of making your pooch more pleasant to be around. While dogs don’t require daily scrub downs like we do, they do need regular baths — but just how regular depends on several factors, such as the dog’s environment and type of coat.',
    secondParagraph: 'Your veterinarian can give you advice on how much bathing is appropriate for your individual dog. Here are some general guidelines: Bathing once a month works for most dogs. Dogs with oily coats, like Basset Hounds, may need bathing as frequently as once a week. Many short-haired breeds with smooth coats, such as Beagles and Weimaraner’s, do just fine with less frequent baths. Short-coated Basenjis are fastidious in their personal hygiene and rarely need a bath.',
    thirdParagraph: 'Breeds with water-repellent coats, such as Golden Retrievers and Great Pyrenees, should be bathed less often so as to preserve their natural oils. Dogs with thick, double coats, such as Samoyeds, Malamutes, and other Northern breeds, do best with fewer baths and a lot of extra brushing, which gets rid of loose, dead hair and helps distribute natural oils that keep your dog’s skin and coat healthy.',
    forthParagraph: 'Of course, if your dog likes to go swimming, is obsessed with mud puddles, or lives in the country and does a lot of rolling in who-knows-what, then you may want to bathe more frequently than if that same dog lived in a condo in the ‘burbs.',
    fifthParagraph: 'Once you’re prepared to take on the task — with or without your dog’s cooperation — here’s what to do: brush your dog before a bath. Matted hair holds water, leaving your dog with irritated skin. If you can’t brush or cut the mats out yourself, take your dog to a professional groomer. Use lukewarm water. Dog skin is different from ours, and hot water can burn dogs more easily. Bath water should never be hotter than what you’d run for a human baby. Keep it even cooler for large-breed dogs who can easily overheat.',
    sixthParagraph: 'Talk to your pet in a calm and reassuring voice. Some dogs will eventually learn that you’re not torturing them, although others will continue to hide under the kitchen table whenever you get out a towel. Use dog shampoo. It dries their skin less than people shampoo. Work the shampoo into a gentle lather and massage it all over your dog’s body, being careful not to get soap in their eyes. Rinse well. Any soap left in their fur can irritate your dog’s skin once they’re dry. Rinse, rinse, and repeat the rinse.',
    seventhParagraph: 'Air-dry. Hot air from a human blow-dryer can be too hot for their skin. Either air-dry or use a blow-dryer designed for dogs; its lower temperatures won’t cause itching or dandruff. Reward your dog. Follow up with abundant praise, petting, or play. Many a damp dog loves to vent their frustration over bath time by playing exuberant tug-of-war with the bath towel — or just running away with it — when it’s all over.',
    image1: '/assets/dog/dog-hygiene1.png',
    image2: '/assets/dog/dog-hygiene2.png',
    image3: '/assets/dog/dog-hygiene3.png',
    image4: '/assets/dog/dog-hygiene4.png',
    image5: '/assets/dog/dog-hygiene5.png',
    image6: '/assets/dog/dog-hygiene6.png',
    image7: '/assets/dog/dog-hygiene7.png',


    },

  ]
  

  constructor() { }
}
