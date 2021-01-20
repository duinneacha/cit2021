<template>
  <q-page>
     <div class="row q-pa-md logo-banner">
      <q-img
        src="../assets/ali_logo.png"
        style="border-radius: 5px; "
        class="ali-logo"
      />
   </div>

      <div class="row constrain bg-red-2">

        <q-list bordered class="rounded-borders q-mt-lg col">
          <q-toolbar class="bg-primary text-white shadow-2 text-center">
            <q-toolbar-title>Ali's Recipes</q-toolbar-title>
          </q-toolbar>

          <q-expansion-item
            v-for="recipeItem in recipeData"
            :key="recipeItem.id"
            expand-separator
            header-class="bg-teal-4 q-mt-sm text-bold"
            icon="restaurant-menu"
            :label="recipeItem.title"
            :caption="recipeItem.description"
          >
          <q-card>
            <q-card-section>
              <img
                v-if="recipeItem.imageUrl"
                :src="recipeItem.imageUrl"
                style="width: 40%; height: auto;"
              >
              <img
                v-else
                :src="noImageUrl"
              >
            </q-card-section>
            <q-card-section class="text-bold text-h6">
              {{recipeItem.title}}
              <p class="text-caption">{{ recipeItem.description }}</p>
            </q-card-section>
            <q-card-section v-if="recipeItem.benefits">
              <p><strong>Benefits include </strong> {{ recipeItem.benefits }}</p>
            </q-card-section>
            

            <q-card-section horizontal>
              
              <!-- Ingredients -->
              <q-card-section>
                <q-list bordered class="rounded-borders q-mt-lg col">
                   <q-toolbar class="bg-primary text-white shadow-2 text-center">
                      <q-toolbar-title>Ingredients</q-toolbar-title>
                    </q-toolbar>

                    <q-item
                      v-for="ingredient in recipeItem.ingredients"
                      :key="ingredient"
                      class="text-caption"
                    >

                        {{ ingredient }}

                    </q-item>
                    
                </q-list>
              </q-card-section>


              <q-separator vertical />

              <q-card-section>
                <q-list bordered class="rounded-borders q-mt-lg col">
                   <q-toolbar class="bg-primary text-white shadow-2 text-center">
                      <q-toolbar-title>Instructions</q-toolbar-title>
                    </q-toolbar>

                    <q-item
                      v-for="(instruction, index) in recipeItem.instructions"
                      :key="index"
                    >

                        {{ instruction }}

                    </q-item>
                    
                </q-list>
              </q-card-section>
            </q-card-section>
          </q-card>
          </q-expansion-item>
        </q-list>
      <!-- 
        <q-card
          v-for="recipeItem in recipeData"
          :key="recipeItem.id"
          class="my-card col col-5 q-ma-md q-ma-md"
        >
          <q-card-section class="bg-primary text-white">
            <div class="text-subtitle1 text-bold"> {{ recipeItem.title }}</div>
            
          </q-card-section>

          <q-separator />
          <q-card-section class="text-grey-9 text-body2">
            <div >{{ recipeItem.description }}</div>
          </q-card-section>
        </q-card> -->

      </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageRecipes',
  data() {
    return {
      noImageUrl: './assets/No-image-available.png',
      recipeData: [
      {
      'id': '001',
      'title': 'Ali’s Ferrero Rocher balls',
      'description': 'Makes 9 balls or 18 small ones',
      'benefits': 'Rich in electrolytes and protein',
      'imageUrl': '../assets/ferror-rocher-balls.jpg',
      'nutritionalData': [
        'Macros per ball (9)',
        'Calories: 357',
        'Carbohydrates: 33g',
        'Fibre: 3.6g',
        'Fats: 21g',
        'Protein: 7g'
      ],
      'ingredients': [
        'Paleo beef gelatine or protein 1.5 scoops (15g)',
        '1 medium well ripened banana',
        '200g medjool dates',
        '200g dairymilk plain chocolate or dark chocolate',
        '200g ground roasted hazelnuts'
      ],
      'instructions': [
        'Soak the dates in boiled water or hot apple juice if you want (calories not included for apple juice) for 10 minutes',
        'Then take out the pips and pop them into the food processor and blitz until smooth. Add the banana and blitz, then add the hazelnuts and blitz until all is well blended.',
        'Add the beef gelatine and mix well as it will harden quickly.',
        'Roll into the 9 balls and place in a container. Pop into the freezer for 30 minutes.',
        'After 30 minutes melt the milk chocolate in a bowl of boiling water and then dip each frozen ball into the bowl until well covered. Place on a baking sheet and leave in the fridge for 2 hours to defrost and harden.',
        'Enjoy'
      ]

      },
      {
        'id': '002',
        'title': 'Coconut chilli butternut and lentil soup',
        'description': 'Coconut chilli butternut and lentil soup',
        'benefits': '',
        'imageUrl': '../assets/chilli-soup.jpg',
        'nutritionalData': [],
        'ingredients': [
          '3 cloves of Garlic',
          '1 Onion',
          '2 Medium Butternut Squash (800g – 1 kg)',
          '400ml tin of Coconut Milk',
          '2 Litres of Vegetable Stock/chicken stock',
          '2 Tsp of Salt',
          '1 Tsp of Pepper',
          'Turmeric 1 stick chopped',
          'parsley',
          'Chilli Flakes',
          'one tin of lentils drained and precooked'
        ],
        'instructions': [
          'Roast butternut in skin for 40 minutes at 180 deg.',
          'Prep garlic and onion and slice finely ',
          'Add 2 tbsp of oil to pan, add garlic and onion and fry until soft ',
          'Scoop out roasted butternut into pan',
          'Add salt ',
          'Add a couple of fresh parsley  ',
          'Next add coconut milk and 2 litres of vegetable stock, bring to the boil and simmer until squash is soft',
          'Season with 1/2 tsp of black pepper ',
          'Blitz in a food processor and top with toasted pumpkin seeds and chill flakes'
        ]
      },
      {
        'id': '003',
        'title': 'Smoothie tips',
        'description': 'Pick one fruit and add one vegetable Adding protein really helps to slow down the sugar release and keep you full for longer- you can do this by adding 1 scoop of Kinetica vanilla protein powder/vegan protein may need 2 scoops to get 25g protein or you can add some natural low-fat yoghurt 3 tablespoons',
        'benefits': '',
        'imageUrl': '',
        'nutritionalData': [],
        'ingredients': [
          'Also add some good fats either: ¼ avocado or 1 tablespoon nut butter or 1 tablespoon tahini paste ',
          'Add liquid: water or low fat milk or dairy free milk (Kokonut or almond or oat) do not add fruit juice its too high in sugar',
          'Add some ice at the end to make it easier to drink and if you need add 1 tbsp honey while making it'
        ],
        'instructions': [
          'Option 1:',
          '1 medium banana (fresh or frozen)',
          '½ cup sliced strawberries, blueberries, or chopped mangos.',
          '¼ cup 2% plain Greek yogurt.',
          '1 tablespoon almond butter.',
          '½ cup baby spinach.',
          '½ cup unsweetened almond milk.',
          'Optional: 1-2 basil leaves, 2-3 mint leaves, ½ teaspoon peeled, chopped ginger.',
          '',
          'Option 2:',
          'cup frozen unsweetened raspberries',
          '¾ cup chilled unsweetened almond or rice milk',
          '¼ cup frozen pitted unsweetened cherries or raspberries',
          '1½ Tbsp honey',
          '2 tsp finely grated fresh ginger1 tsp ground flaxseed ',
          'squeeze fresh lemon juice',
          '',
          'Option 3 (my favourite)',
          '1 large handful frozen rasperries blended on their own first',
          'Add 200ml kokonut milk, 1 tablespoon tahini, 1 scoop whey protein, 1 tablespoon almond butter and blitz with 1 tsp honey ',

        ]
      },
      {
        'id': '004',
        'title': 'Alis Easy Curry Recipe',
        'description': 'A lovely easy healthy curry ',
        'benefits': '',
        'imageUrl': '',
        'nutritionalData': [],
        'ingredients': [
          '1 red onion chopped fine',
          'Coconut oil 2 tablespoons',
          '2 garlic cloves',
          '1 tablespoon Hot Curry Powder',
          '1 tablespoon Garam Massalla',
          '1 tablespoon Tumeric',
          'Black pepper and Sea Salt',
          '1 tsp Ginger',
          '1-2 Cardamom seeds',
          '1 tsp lemongrass squeeze tube',
          'Chilli flakes',
          '2 chicken breasts',
          '1 tin coconut milk light',
          '½ can chopped tomatoes',
          'Mixed vegetables and rice '
        ],
        'instructions': [
          'In a solid pot melt the coconut oil and add the onion. Let the onion caramelise then add the spices. Stir it well then add the chopped chicken and brown the meat.',
          'Add in the vegetables, the coconut milk and tomatoes and leave on low heat to tenderise for about 2 hours or longer. ',
          'Serve with a small portion of rice about 4-5 tablespoons cooked or if watching calories and weight use cauliflower rice and stir-fry in a pan with a bit of butter.',
          'Garnish with fresh coriander if you have it.',
        ]
      },
      {
        'id': '005',
        'title': 'Spinach falafels (x6)',
        'description': 'Spinach falafels',
        'benefits': '',
        'imageUrl': '',
        'nutritionalData': [],
        'ingredients': [
          '2 Cloves of Garlic, Minced',
          '1 Can of Soaked Chickpeas, Drained (about 240g when drained)',
          '1 Large Handful of Spinach',
          '2 Heaped Teaspoons of Tahini',
          '1/4 Teaspoon of Coarse Salt',
          '1 Teaspoon of Cumin',
          'Sesame seeds for coating'
        ],
        'instructions': [
          'Start by draining the chickpeas and rinsing them. Add them to your food processor with the spinach, tahini, minced garlic, salt and cumin. Pulse until it’s just starting to come together. Don’t overblend, you want it to be a chunky paste that holds together when shaped but isn’t smooth.',
          'Taste the mixture and and season with salt and pepper as needed.',
          'Use your hands to roll the mixture into balls and then roll them in sesame seeds to coat. Drizzle the olive oil into your empty roasting tray, then add in the balls and shake it gently so they roll around in the oil.',
          'Bake at 200’C for 25 minutes until golden.'
        ]
      },
      {
        'title': 'Aubergine/Courgette and red pepper Lasagne',
        'description': 'Aubergine/Courgette and red pepper Lasagne (Also works well with butternut sliced thinly or sweet potatoe slices)',
        'benefits': 'Pasta free',
        'imageUrl': '../assets/recipe_lasagne.png',
        'nutritionalData': [],
        'ingredients': [
          '3 courgettes or 2 aubergines or use half of both',
          '2 large red sweet pepper',
          '3 cloves of garlic',
          '1 red onion',
          '300-400g Organic mince meat',
          '1 tablespoon coconut oil',
          '1 tsp Himalayan salt',
          '8 baby mushrooms',
          'A big bowl of spinach',
          'Half a jar tomato puree passatta or 1 tin tomatoes ',
          'Tub of ricotta cheese or mascarpone cheese or cream from coconut cream and 1 tablespoon xanthan gum to thicken it, xanthan gum is easier on the digestion than corn flour available in Supervalu) ',
          'Cheddar cheese/ parmesan/ mozzarella or a mixture of all three (take it easy on the sprinkling) or sub in dairy free cheese ',
          'extras optional: ½ chilli, handful fresh basil, miso paste 1 tsp, cayenne pepper, fresh coriander'
        ],
        'instructions': [
          'In a big pan, melt the oil, soften one finely chopped red onion, add in the mince and brown it, break it up while its cooking. Add in Cayenne, salt, black pepper, oregano or any herbs that you like basil, coriander work well',
          'Add in chopped mushrooms, 1 red pepper chopped very fine, add the garlic minced, spinach and leave to simmer for a few minutes. Then add in tomato passatta and leave to simmer',
          'Chop the aubergine/ courgettes along lengthways in thin slices like lasagne sheets. Do the same with the red pepper/sweet potatoe/butternut if opting for them instead.',
          'Dairy free option: Mix tinned coconut cream in a bowl with the xantham gum and if you have time heat at a very low heat until it thickens.',
          'Protein rich option: use ricotto cheese for high protein or mascarpone but its higher calories and lower protein ',
          'Get a baking dish and place a layer of the mince/veg into the bottom of the dish and layer with aubergine/courgette and add some cream and cheese and repeat with the mince combo and layer again. For the top layer ensure the courgette/aubergine has been covered in cream and some cheese and sprinkle oregano on top.',
          'Bake in Oven at 160 degrees (fan assisted oven) for 40 mins and then for a further 10 minutes at 180 degrees '
        ]
      },
      
      // ,
      // {
      //   'title': '',
      //   'description': '',
      //   'benefits': '',
      //   'nutritionalData': [],
      //   'ingredients': [],
      //   'instructions': []
      // },

    
    ]
    }
  },
  methods: {
    printRecipe() {
      console.log(this.recipeData)
    }
  }

}
</script>
