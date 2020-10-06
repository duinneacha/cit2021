<template>
  <div class="row bg-green-3">
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
          <p>Prior to visiting Ali, I had been on prescribed tablets for severe acid reflux for over 15 years with little improvement. After speaking with Ali and implementing her diet plan including vitamins, led to no more tablets and more importantly, no more reflux.</p>

          <p>Eating new healthier foods has resulted in the loss of excess weight with no ill effects, increased energy levels and better sleep.</p>
          <p>Liam McAlister, Cobh Co. Cork</p>
          <q-btn outline style="color: grey-6;" label="Pictures" to="/testimonials" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" size="56px" />
        <q-scroll-area class="fit">
          <div class="column no-wrap flex-center q-carousel--padding">
            <p>In January 2019 I weighed in at 124KG. I was facing into my first Masters European powerlifting competition for the IPF representing Ireland in March. I needed to be below 120KG which I just about managed. After the competition I decided it was time to review my lifestyle.  At 5’9” and 47 years old I was getting concerned about my general health especially with a family history of cardiac issues, a recent blood test had shown I was pre diabetic and A hernia which had been a long term, non-symptomatic issue decided to flare up and required surgery. Advice from the surgeon was also to lose weight.</p>
          </div>
        </q-scroll-area>
        
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
</template>


<script>
export default {
  data() {
    return {
      padding: true,
      vertical: false,
      arrows: true,
      navigation: true,
      navPos: 'bottom',
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>