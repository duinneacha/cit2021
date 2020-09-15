<template>
  <q-page class="bg-green-2 constrain">
   <div class="row q-pa-md logo-banner">
      <q-img
        src="../assets/ali_logo.png"
        class="ali-logo"
      />
   </div>

   <div class="row q-mt-sm">

      <q-card
        class="my-card text-grey-2 text-center full-width"
        style="background-color: #94236E; color: #4FB854"
        
      >
        <q-card-section>
          <div class="text-h6">NUTRITION & NEUROMUSCULAR SPORTS THERAPIST</div>
          <div class="text-subtitle2">Ali Dorgan Dip NT, BA Soc. Sc. Member NTOI, Member Thyroid Nutrition Ireland.</div>
        </q-card-section>

        <q-card-section>
          Ali's Nutrition and Sports Therapy supports you to reach your optimal health and well-being. Using her own knowledge, qualifications and extensive experience Ali will guide you to reach your goals. Ali prides herself in ongoing learning and development, honesty and accountability.
        </q-card-section>
      </q-card>
   </div>

    <div class="row bg-blue-2">
      <q-toolbar class="text-grey-9 shadow-2 text-center q-mt-md">
        <q-toolbar-title class="text-h4 q-pa-md text-bold">Services</q-toolbar-title>
      </q-toolbar>

    <div class="q-pa-md col-6" >
      <q-toolbar class="bg-blue-6 text-grey-9 text-center">
        <q-toolbar-title class="text-weight-bold">Treatments</q-toolbar-title>
      </q-toolbar>

        <q-list bordered padding class="bg-blue-1 text-grey-9">
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold">Neiromuscular Therapy</q-item-label>
                <q-item-label caption>Neuromuscular Therapy for sports injuries, pre-event and post event treatments</q-item-label>
                
              </q-item-section>
            </q-item>

            <q-separator />
            
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold">Rehabilitation</q-item-label>
                <q-item-label caption>Post-surgery and injury</q-item-label>
                
              </q-item-section>
            </q-item>
            
            <q-separator />
            
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold">Guidance</q-item-label>
                <q-item-label caption>On improved daily function and improved mobility</q-item-label>
                
              </q-item-section>
            </q-item>
            
            <q-separator />
            
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold">Dry Needling</q-item-label>
                <q-item-label caption>For injuries, pain relief, TMJ, headaches and strains</q-item-label>
                
              </q-item-section>
            </q-item>

            <q-separator />
            
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold">Cupping</q-item-label>
                <q-item-label caption>For muscle tension and restrictions</q-item-label>
                
              </q-item-section>
            </q-item>
            
            <q-separator />
            
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold">Massage</q-item-label>
                <q-item-label caption>Deep tissue massage or relaxing massage if requested</q-item-label>
                
              </q-item-section>
            </q-item>
            
            
          </q-list>
        </div>

        <div class="q-pa-md col-6" >
          <q-toolbar class="bg-blue-6 text-grey-9 text-center">
            <q-toolbar-title class="text-weight-bold">Nutrition</q-toolbar-title>
          </q-toolbar>

          <q-list bordered padding class="bg-blue-1 text-grey-9">

            <q-item
              v-for="nutritionItem in nutritionData"
              :key="nutritionItem.itemHeader"
            >
              <q-item-section>
                <q-item-label class="text-bold">{{ nutritionItem.itemHeader }}</q-item-label>
                <q-item-label caption>{{ nutritionItem.itemText }}</q-item-label>
                
              </q-item-section>

              <!-- <q-separator spaced/> -->
              
            </q-item>

                <!-- <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Diabetes</q-item-label>
                    <q-item-label caption>Diabetes Text</q-item-label>
                    
                  </q-item-section>
                </q-item>

                <q-separator />
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Cholesterol</q-item-label>
                    <q-item-label caption>Cholesterol Text</q-item-label>
                    
                  </q-item-section>
                </q-item>

                <q-separator />
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Digestive Issues</q-item-label>
                    <q-item-label caption>Digestive Issues Text</q-item-label>
                    
                  </q-item-section>
                </q-item>

                <q-separator />
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">IBS and IBD</q-item-label>
                    <q-item-label caption>Help with reducing the symptoms of IBS (Irritable bowel syndrome) and IBD (Inflammatory bowel disease)</q-item-label>
                    
                  </q-item-section>
                </q-item>

                <q-separator />
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Fatigue</q-item-label>
                    <q-item-label caption>Fatigue Text</q-item-label>
                    
                  </q-item-section>
                </q-item>

                <q-separator />
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Thyroid Health</q-item-label>
                    <q-item-label caption>Thyroid Health Text</q-item-label>
                    
                  </q-item-section>
                </q-item>

                <q-separator />
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Brain health and mood</q-item-label>
                    <q-item-label caption>Brain health and mood Text</q-item-label>
                    
                  </q-item-section>
                </q-item>

                <q-separator />
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Headaches</q-item-label>
                    <q-item-label caption>Headaches Text</q-item-label>
                    
                  </q-item-section>
                </q-item>

                <q-separator />
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Inflamation and joint pain</q-item-label>
                    <q-item-label caption>Inflamation and joint pain Text</q-item-label>
                    
                  </q-item-section>
                </q-item>

                <q-separator />
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Autoimmune conditions</q-item-label>
                    <q-item-label caption>Autoimmune conditions Text</q-item-label>
                    
                  </q-item-section>
                </q-item>

                <q-separator />
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Skin conditions</q-item-label>
                    <q-item-label caption>Skin conditions Text</q-item-label>
                    
                  </q-item-section>
                </q-item>

                <q-separator />
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Fertility and Pregnancy health</q-item-label>
                    <q-item-label caption>Fertility and Pregnancy health Text</q-item-label>
                    
                  </q-item-section>
                </q-item>

                <q-separator />
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Wellness and Sports Performance</q-item-label>
                    <q-item-label caption>Wellness and Sports Performance Text</q-item-label>
                    
                  </q-item-section>
                </q-item> -->

                
    
          </q-list>

        </div>
    </div>

    <!-- Testemonials  -->
    <div class="row bg-green-3">
      <!-- <p class="text-h3 text-grey-9 text-bold text-uppercase text-center q-pa-md" style="margin: 0 auto;">Testimonials</p> -->
      <q-toolbar class="text-grey-9 shadow-2 text-center q-mt-md">
        <q-toolbar-title class="text-h4 q-pa-md text-bold">Testimonials</q-toolbar-title>
      </q-toolbar>

      <q-carousel
        v-model="slide"
        swipeable
        animated
        :padding="padding"
        :vertical="vertical"
        :arrows="arrows"
        :navigation="navigation"
        :navigation-position="navPos"
        height="300px"
        class="bg-green-3 text-grey-9 rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="style" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
    </q-carousel>
    </div>
    
    <!-- Locate Us  -->
    <div class="row bg-purple-3">
      <!-- <p class="text-h3 text-grey-9 text-bold text-uppercase text-center q-pa-md" style="margin: 0 auto;">Testimonials</p> -->
      <q-toolbar class="text-grey-9 shadow-2 text-center q-mt-md">
        <q-toolbar-title class="text-h4 q-pa-md text-bold">Locate Ali</q-toolbar-title>
      </q-toolbar>
    </div>
  
  </q-page>
</template>

<script>
export default {
  name: 'PageHome',
  data() {
    return {
      padding: true,
      vertical: false,
      arrows: true,
      navigation: true,
      navPos: 'bottom',
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
          nutritionData: [
    {
     'itemHeader': 'Cholesterol',
     'itemText': 'Cholesterol Text' 
    },
    {
      'itemHeader': 'Digestive Issues',
      'itemText': 'Digestive Issues Text'
    },
    {
      'itemHeader': 'IBS and IBD',
      'itemText': 'Help with reducing the symptoms of IBS (Irritable bowel syndrome) and IBD (Inflammatory bowel disease)'
    },
    {
      'itemHeader': 'Fatigue',
      'itemText': 'Fatigue Text'
    },
    {
      'itemHeader': 'Thyroid Health',
      'itemText': 'Thyroid Health Text'
    },
    {
      'itemHeader': 'Brain health and mood',
      'itemText': 'Brain health and mood Text'
    },
    {
      'itemHeader': 'Headaches',
      'itemText': 'Headaches Text'
    },
    {
      'itemHeader': 'Inflamation and joint pain',
      'itemText': 'Inflamation and joint pain Text'
    },
    {
      'itemHeader': 'Autoimmune conditions',
      'itemText': 'Autoimmune conditions Text'
    },
    {
      'itemHeader': 'Skin conditions',
      'itemText': 'Skin conditions Text'
    },
    {
      'itemHeader': 'Fertility and Pregnancy health',
      'itemText': 'Fertility and Pregnancy health Text'
    },
    {
      'itemHeader': 'Wellness and Sports Performance',
      'itemText': 'Wellness and Sports Performance Text'
    }
]
    }
  }
}
</script>

<style lang="sass">

  .logo-banner
    background-color:  
    
  
</style>
