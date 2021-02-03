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
        <!-- <q-icon name="style" size="56px" /> -->
        <div class="q-mt-md q-mb-xl text-center">
          <p>Priorr to visiting Ali, I had been on prescribed tablets for severe acid reflux for over 15 years with little improvement. After speaking with Ali and implementing her diet plan including vitamins, led to no more tablets and more importantly, no more reflux.</p>

          <p>Eating new healthier foods has resulted in the loss of excess weight with no ill effects, increased energy levels and better sleep.</p>
          <p>Liam McAlister, Cobh Co. Cork</p>
          <q-btn outline style="color: grey-6;" label="Pictures" to="/testimonials" />
        </div>
      </q-carousel-slide>

      <!-- <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" size="56px" />
        <q-scroll-area class="fit">
          <div class="column no-wrap flex-center q-carousel--padding">
            <p>In January 2019 I weighed in at 124KG. I was facing into my first Masters European powerlifting competition for the IPF representing Ireland in March. I needed to be below 120KG which I just about managed. After the competition I decided it was time to review my lifestyle.  At 5’9” and 47 years old I was getting concerned about my general health especially with a family history of cardiac issues, a recent blood test had shown I was pre diabetic and A hernia which had been a long term, non-symptomatic issue decided to flare up and required surgery. Advice from the surgeon was also to lose weight.</p>
          </div>
        </q-scroll-area>
        
      </q-carousel-slide> -->

      <q-carousel-slide name="DanTest" class="column no-wrap flex-center">
        <!-- <q-icon name="layers" size="56px" /> -->
        <div class="q-mt-md text-center">
          <p>Between Ali’s up to date knowledge of the microbiome and the rest of the body (learned by constantly attending conferences unlike many other nutritionists), I’ve learned so much about how to heal my GI issues and maintain it. Ali was really mindful of budget limits, time restraints and my lifestyle when helping to create a realistic and easy to stick to gut repair protocol - I would recommend Ali to anyone needing help</p>
          <p>Dan</p>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="OrlaTest" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center">
          <p>Amazing therapist - sorted my issue straight away and gave great after advice to avoid the same thing happening. If you are into the strength training then this lady will be your best pal to avoid unnecessary injury</p>
          <p>Orla</p>
        </div>
      </q-carousel-slide>
      

      <q-carousel-slide name="KellyTest" class="column no-wrap flex-center">
        <!-- <q-icon name="layers" size="56px" /> -->
        <div class="q-mt-md text-center">
          <p>I really would not go anywhere else for anything. I've had all Injuries from running tight muscles and ali has always sorted me. You really could not find a more professional person to do job. Always fit me in and amazing at what she does.</p>
          <p>Kelly Kidney</p>
        </div>
      </q-carousel-slide>
      

      <q-carousel-slide name="AngieTest" class="column no-wrap flex-center">
        <!-- <q-icon name="layers" size="56px" /> -->
        <div class="q-mt-md text-center">
          <p>After years of shoulder and neck pain, a few massage and dry needling sessions with Ali and I felt like a new person. I now only need a session once every 6-8 weeks to maintain it. Couldn’t recommend her enough, she works her magic every time.</p>
          <p>Angie</p>
        </div>
      </q-carousel-slide>
      

      <q-carousel-slide name="AmandaTest" class="column no-wrap flex-center">
        <!-- <q-icon name="layers" size="56px" /> -->
        <div class="q-mt-md text-center">
          <p>I have suffered with eczema since childhood and after trying almost everything, Ali helped me to heal my gut and try to boost my immune system with a tailored nutrition plan and recommended supplements. Her knowledge of food helped me understand triggers for eczema and it has had a huge effect on my skin. She did numerous testing from food allergies to vitamin deficiencies, She checked in with me daily and was great support. I would highly recommend Ali and look forward to further nutrition plans.</p>
          <p>Amanda</p>
        </div>
      </q-carousel-slide>
      

      <q-carousel-slide name="UinseanTest" class="column no-wrap flex-center">
        <!-- <q-icon name="layers" size="56px" /> -->
        <div class="q-mt-md text-center">
          <p>I was competing at a CrossFit competition where Ali was a masseuse. During the last event my back stiffened up and by the end, I couldn’t move. I was carried to Ali and there she did some light massage along my body to release the pain and then some cupping on my back. By the end I could walk away from the table and Ali also diagnosed it as a QL strain. Next day in hospital it was confirmed and the doctor said that Ali had done a great job to get me moving so quickly</p>
          <p>Uinsean</p>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="Kelly2Test" class="column no-wrap flex-center">
        <!-- <q-icon name="layers" size="56px" /> -->
        <div class="q-mt-md text-center">
          <p>The rehab work Ali completed with me on my hamstring tear was second to none, all the work completed allowed me to get back to sport a lot faster than anticipated. I would highly recommend her services, her knowledge and experience allows you to feel comfortable and know you are getting the best service needed.</p>
          <p>Kelly</p>
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

// 





 










// 