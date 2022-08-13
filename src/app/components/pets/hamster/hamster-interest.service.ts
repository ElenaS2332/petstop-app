import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HamsterInterestService {

  interests = [
    {id: 'feeding', name: 'feeding', 
    firstParagraph: 'When it comes to feeding, it’s best to scatter your hamster’s food all around the cage. Unlike other pets, putting their food in a bowl would rather make them lazy and fat instead of disciplined. Don’t be scared to hide their food all around their toys. Hamsters have great sense of smell so don’t worry about them not finding their food. Of course you’ll have to take care about the amount as well because with scattering you’ll might lose the count. Hamsters are omnivores although as meat they all consume some small insects so you’ll probably put them on ‘vegetarian diet’ which is easier to provide. Make sure you get the best mix of seeds and nuts, but you can also add some dry cat food in order to get more protein.  ',
    secondParagraph: 'Grains make up a large part of a hamster’s diet. They offer protein and carbohydrates and can come from prepared hamster mixtures or from fresh foods such as unsweetened whole grain cereal, whole wheat bread, brown rice, whole wheat pasta and unsalted, unbuttered popcorn. If offering a prepared hamster mix as a treat, be sure that it doesn’t include a large amount of high-fat nuts and seeds, as these foods promote obesity. As omnivores, hamsters can have some animal-based protein in their diets, such as hard-boiled eggs, cooked chicken and an occasional live mealworm or cricket. Hamsters love these high-protein treats—be sure to offer them in moderation so that they continue to eat their base diet of pellets. ',
    thirdParagraph: 'Fresh, organically grown greens are best. Romaine lettuce, dandelion greens, cauliflower, carrot tops, broccoli spears, spinach, sweet potato, squash, artichokes and any other dark green veggies are great choices. Avoid iceberg lettuce and other veggies or fruits—such as watermelon—that are high in water content and have little nutritional value. Remember to wash the vegetables thoroughly to remove traces of harmful pesticides and feed only small amounts of produce at a time.',
    forthParagraph: 'Hamsters love apples, pears, strawberries, blueberries, grapes and bananas. Fruit should be offered in moderation, as a supplement to their regular pelleted diet. Remove any vegetables or fruits that are not eaten within 10-12 hours so they don’t spoil. Hay is a great gnawing food that can help keep your hamster’s continuously growing teeth at a healthy length and in good condition. Water should be available to your hamster at all times and changed daily.',
    image1: 'assets/hamster/hamster-feeding1.png',
    image2: 'assets/hamster/hamster-feeding2.png',
    image3: 'assets/hamster/hamster-feeding3.png',
    image4: 'assets/hamster/hamster-feeding4.png',
  
  
  
  
  },
    {id: 'cage', name: 'Cage', 
    firstParagraph: 'Select the right-sized cage for your hamster. The recommended minimum size for your hamster’s cage is at least 18 inches (width) x 13 inches (height) x 25 inches (length), which is equal to 450 square inch floor space, which is the minimum for humanely housing a hamster of any type. The 13 inch height is to allows you to fit a 10-12 inch wheel for a Syrian hamster. However, bigger is always better, since your hamster will want plenty of space to run, climb, and play. Your hamster will also want to have separate areas to go to the bathroom, sleep, and store food, which will necessitate a very spacious cage.',
    secondParagraph: 'If you will be housing more than one hamster in the same cage, the cage will need to be even bigger to give each hamster plenty of room. A good guideline to follow is the minimum floor space times the number of hamsters to be put in the cage.',
    thirdParagraph: 'Select a cage that is well ventilated. A poorly ventilated cage can lead to the build-up of ammonia, which is toxic to your hamster and can lead to respiratory problems. Poorly ventilated cages can also lead to bacterial growth, which could also make your hamster sick. Wire cages tend be very well ventilated, but aquariums and plastic hamster cages are often poorly ventilated.',
    forthParagraph: 'Your hamster may start to have trouble breathing if his aquarium or plastic cage is not well ventilated. If you notice that he is not breathing properly or looks unwell in general (not eating, playing as much or has physical signs of illness), consider cleaning his cage to remove soiled bedding. You may also want to consider purchasing a wire cage, that is of adequate size.',
    fifthParagraph: 'Choose a cage that is easy to clean. You will need clean your hamster’s cage once or twice a week depending on your cage, so you will want a cage that will not be too difficult to clean. Wire cages are probably the easiest type of cage to clean. Aquariums and plastic cages may need more frequent cleaning because of their poor ventilation, but this most likely will not be an issue if your cage is the minimum size or above. Plastic cages are the most difficult to clean, since they often have many different components, are multi-level, and have twists and turns that could be a challenge for you to reach. No matter which type of cage you have, it would be helpful to have a secondary, smaller cage that you can put your hamster in while you are cleaning his main cage or away travelling with your hamster. ',
    sixthParagraph: 'Your hamster would actually hate to sleep in wood shavings or sawdust. It can often contain parasites and cause them serious skin issues, breathing issues, allergies and even asthma. As a very active pet, you would not like your hamster to develop asthma. The best type of bedding is a short chopped shredded paper or toilet paper. But also you can find a nice bedding at the nearest pet shop. Soft tissue paper bedding is great to place in their homes, where they sleep. As said before paper is the best option. Cotton wool isn’t suitable for your hamster because quite often it gets stuck around the hamster’s toes. ',
    image1: 'assets/hamster/hamster-cage1.png',
    image2: 'assets/hamster/hamster-cage2.png',
    image3: 'assets/hamster/hamster-cage3.png',
    image4: 'assets/hamster/hamster-cage4.png',  
    image5: 'assets/hamster/hamster-cage5.png',
    image6: 'assets/hamster/hamster-cage6.png',  
  
  
  },
    {id:'entertainment', name: 'entertainment', 
    firstParagraph: 'For hamster is really important to have a good and large enough space for their daily activities. The traditional wheel is still one of the best options, but it doesn’t quite satisfy the hamster’s need to walk. Especially if your hamster tends to stay awake more often, it’s possible that you might need whole tunnels and practically his own amusement park. You can find specific toys for the hamster in the pet shops, but if you don’t want to spend much money, you can create your own playground. You just need some toys like lego or spinners, some pipes from the garage or cardboard tubes from the toilet and some wire grids or something to climb on, (even building a pile of old CDs ) and you’re all set up.',
    secondParagraph: 'Place a hamster wheel in the cage so that your hamster can exercise. Choose a minimum of a 6.5 in (17 cm) wheel for Roborovski and dwarf hamsters and a minimum of a 8 in (20 cm) wheel for larger hamsters such as Syrian hamsters. Follow the instructions that come with the hamster wheel to fit it to the cage. A plastic wheel is safer than a metal wheel for hamsters because plastic wheels don’t have rungs. Your hamster’s legs are fragile and can easily get injured in wheel rungs. Make sure the wheel is large enough so your hamster’s back is straight and level while it runs as opposed to a U-shape. Hamsters require a lot of exercise to stay happy and healthy. A hamster wheel helps them to exercise and to avoid health problems such as obesity.',
    thirdParagraph: 'Let your hamster crawl over your hands to help form a bond. Pick up your hamster and take it out of the cage. Hold your hamster in your hands and let it sniff you and crawl over your hands to explore. This not only helps you and your hamster to bond, but it also keeps your hamster busy with all of the new sights and smells. Hamsters can remember your scent and voice. Spending time holding your hamster lets you gain its trust while keeping it entertaining.',
    forthParagraph: 'Teach your hamster a trick to provide mental stimulation. Hamsters are both smart and curious, and they love to learn new things. Train your hamster to stand on its hind legs by holding a treat above its head and saying "Stand," clearly. Give your hamster a treat whenever it follows a command and keep the training sessions short so that your hamster doesn’t get bored. There are a large variety of tricks that your hamster can learn. Use a lot of repetition and practice, and your hamster will easily learn new skills.',
    image1: 'assets/hamster/hamster-entertainment1.png',
    image2: 'assets/hamster/hamster-entertainment2.png',
    image3: 'assets/hamster/hamster-entertainment3.png',
    image4: 'assets/hamster/hamster-entertainment4.png',  
  
  
  
  
  },
    {id: 'hygiene', name: 'hygiene', 
    firstParagraph: 'Your hamster’s accommodation needs to be cleaned at least once a week. For good care you’ll need to take out your hamster and secure it in a good place while waiting for its home to get cleaned, also take out its toys and disinfect the whole cage down and set it up all fresh. It’s also important (if there is a possibility and enough space) to rearrange the toys and its home so that it’s different and look more interesting for the pet. Add something new and take the old ones out. Even a tiny difference looks huge for the little creature.',
    secondParagraph: 'Hamsters are fastidious groomers and do a good job keeping themselves clean, baths, as we tend to think of them, are not necessary. However, it is possible to spot-clean them, if they truly need it. It is especially important to check their bottom as sometimes bedding can stick after going to the bathroom. If your hamster has a spot that is dirty and they cannot seem to clean themselves, you can use a damp washcloth or pet-friendly wipe to help clean that particular area. Since hamsters are small, you will want to make sure they do not get too cold, so always use lukewarm water (never hot) and keep them out of drafts while they dry.',
    thirdParagraph: 'Besides the occasional spot or dust bath, your hamster will have some other grooming needs, as well. For example brushing: Long-haired Syrian hamsters (often referred to as Teddy Bear Hamsters) benefit from a weekly brushing to help remove wood shavings, food and dirt that might get stuck in their coat. Use a special small animal comb or a soft, fine toothbrush.',
    image1: 'assets/hamster/hamster-hygiene1.png',
    image2: 'assets/hamster/hamster-hygiene2.png',
    image3: 'assets/hamster/hamster-hygiene3.png',
  
  
  
  },
    {id: 'health', name: 'Health',
    firstParagraph: 'Your hamster’s health needs to be checked at least once a week. However, it’s not so necessary once you get familiar with your hamster’s body and needs. While petting and having them in your hands, you’ll be able to tell the difference if something is not right, mostly including their tummy. If you notice any changes, any lumps or bumps or anything that seems concerning you should definitely visit the vet straight away. It might be just digesting food, but it might be also something more serious.',
    secondParagraph: 'Check your hamster’s nose and eyes. If you want to keep your hamster healthy, you will need to periodically make sure he’s not showing signs of illness. As hamsters are prone to colds and infections, check his nose and eyes on a weekly basis. Check your hamster’s nose. If it’s wet or you notice running or discharge, he may have a cold. You should monitor his symptoms for a few days and take him to the vet if he does not improve. Hamsters can catch colds from humans, so avoid handling your hamster if you’ve been sick.',
    thirdParagraph: 'A hamster’s eyes should be clean and clear. Unusual discharge or reddish eyes can be a sign of infection. Certain breeds of hamsters, like Winter Whites, get eye infections easily. You should not wait out an eye infection as infections often require antibiotics. Take your hamster to a vet if you notice anything wrong with his eyes. If your hamster is having nose and eye irritation and medical causes have been ruled out, he may be allergic to something in his cage. Remove any new items, like new toys or accessories, and see if symptoms improve. You may also want to try a different bedding or litter.',
    image1: 'assets/hamster/hamster-health1.png',
    image2: 'assets/hamster/hamster-health2.png',
    image3: 'assets/hamster/hamster-health3.png',
  
  
  
  
  }


  ];
  
  constructor() { }
}
