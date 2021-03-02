<template>
  <q-page class="bg-green-2 constrain">
    <div class="row q-pa-md logo-banner">
      <q-img
        src="../assets/ali_logo.png"
        style="border-radius: 5px; "
        class="ali-logo"
      />
   </div>


   <div class="q-pa-md rounded-borders" style="max-width: 600px; margin: 0 auto">
     <q-toolbar
       class="text-center q-pa-md q-mb-xl"
       style="background-color: #94236E; color: #4FB854"
     >
        <q-toolbar-title >Nutrition Questionnaire</q-toolbar-title>
      </q-toolbar>
      <div class="row bg-grey-4 shadow-3 rounded-borders q-pa-md q-mb-xl">
        <p class="text-subtitle2">Please fill out this confidential questionnaire if you would like to make an appointment for Nutritional support. This will give Ali a better understanding of your health needs. Please try to answer all questions.</p>
        <p class="text-caption q-mb-none">All information is treated with strictest confidentiality.</p>
        <p class="text-caption q-mt-none">You may be requested to provide recent blood tests if required.</p>
      </div>

     <q-form
       @submit="onSubmit"
       @reset="onReset"
       class="q-gutter-md"
     >

     <q-input
       filled
       v-model="name"
       color="green"
       label="Your name *"
       lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please enter your name']"
      />

     <q-input
        filled
        type="tel"
        v-model="phone"
        label="Your phone number *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter your phone number']"
      />
     
     <q-input
       filled
       v-model="email"
       color="green"
       label="Your email address *"
       lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please enter your email address']"
      />


      <q-input
        filled
        type="num"
        v-model="age"
        label="Age"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter your age']"
      />


      <q-input
        filled
        type="text"
        v-model="weight"
        label="Weight"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter your weight']"
      />
                  

      <q-input
        filled
        type="text"
        v-model="height"
        label="Height"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter your height']"
      />

      <q-input
        filled
        label="Medications you are currently taking?"
        type="textarea"
        v-model="medicationsCurrent"
      />

      <q-input
        filled
        label="Medications you have taken in the past (if known)?"
        type="textarea"
        v-model="medicationsPast"
      />

      <q-input
        filled
        label="What would you like to improve with your health?"
        type="textarea"
        v-model="sessionGoals"
      />
      
      <!-- <q-toggle v-model="healthConditions" label="Do you have any health conditions?" /> -->

      
      
      <q-input
        filled
        label="Do you have any diagnosed health conditions?"
        type="textarea"
        v-model="healthConditionsList"
      />

      <q-toolbar class="bg-primary text-white shadow-2 text-center q-mt-xl">
        <q-toolbar-title>Digestive Screening Please Tick</q-toolbar-title>
      </q-toolbar>
  

    <div class="q-pa-md q-gutter-sm">
      <p class="q-mt-lg">How often do you experience bloating or flatulence / wind?</p>
      <div class="q-gutter-sm">
        <q-radio v-model="bloat" val="never" label="Never" />
        <q-radio v-model="bloat" val="sometimes" label="Sometimes" />
        <q-radio v-model="bloat" val="often" label="Often" />
      </div>
      <q-separator />
      <p class="q-mt-lg">How often do you experience heartburn or indigestion?</p>
      <div class="q-gutter-sm">
        <q-radio v-model="heartburn" val="never" label="Never" />
        <q-radio v-model="heartburn" val="sometimes" label="Sometimes" />
        <q-radio v-model="heartburn" val="often" label="Often" />
      </div>
      <q-separator />
      <p class="q-mt-lg">Do you get cramps or painful tummy episodes?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="cramps" val="no" label="No" />
        <q-radio dense v-model="cramps" val="yes" label="Yes" />
      </div>
      <q-separator />
      <p class="q-mt-lg">How often do you have a bowel movement?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="bowel" val="daily" label="Daily" />
        <q-radio dense v-model="bowel" val="less" label="Less than 3 x week" />
        <q-radio dense v-model="bowel" val="more" label="Once a week" />
        <q-radio dense v-model="bowel" val="varies" label="Varies" />
      </div>
      <q-separator />
      <p class="q-mt-lg">Do you get these often?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="movementType" val="diarrhoea" label="Diarrhoea" />
        <q-radio dense v-model="movementType" val="constipation" label="Constipation" />
        <q-radio dense v-model="movementType" val="both" label="Both" />
      </div>
      <q-separator />
      <p class="q-mt-lg">Do you get a gurgling/rumbling in your stomach?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="gurgling" val="never" label="Never" />
        <q-radio dense v-model="gurgling" val="often" label="Often" />
      </div>
      <q-separator />
      <p class="q-mt-lg">Do you have any difficulty digesting fatty foods?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="fattyFoods" val="yes" label="Yes" />
        <q-radio dense v-model="fattyFoods" val="no" label="No" />
      </div>
      <q-separator />
      <p class="q-mt-lg">Are you aware of any foods that trigger digestive symptoms?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="digestiveTrigger" val="yes" label="Yes" />
        <q-radio dense v-model="digestiveTrigger" val="no" label="No" />
      </div>

      <q-input
        v-if="digestiveTrigger==='yes'"
        filled
        label="Which Foods"
        type="textarea"
        v-model="digestiveTriggerList"
      />

      <q-toolbar class="bg-primary text-white shadow-2 text-center q-mt-xl">
        <q-toolbar-title>Hormonal Screening Please Tick</q-toolbar-title>
      </q-toolbar>

      <p class="q-mt-lg">Do you have low energy?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="lowEnergy" val="yes" label="Yes" />
        <q-radio dense v-model="lowEnergy" val="no" label="No" />
      </div>
      <q-separator />

      <p class="q-mt-lg">Do you experience episodes of fatigue during the day?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="fatigue" val="yes" label="Yes" />
        <q-radio dense v-model="fatigue" val="no" label="No" />
      </div>
      <q-separator />


      <p class="q-mt-lg">Do you have missed menstrual cycles (females)?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="missedCycles" val="yes" label="Yes" />
        <q-radio dense v-model="missedCycles" val="no" label="No" />
        <q-radio dense v-model="missedCycles" val="nr" label="Not Relevant" />
      </div>
      <q-separator />

      <p class="q-mt-lg">Do you experience PMS symptoms, painful or heavy cycles (females)?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="painfulCycles" val="sometimes" label="Sometimes" />
        <q-radio dense v-model="painfulCycles" val="often" label="Often" />
        <q-radio dense v-model="painfulCycles" val="never" label="Never" />
      </div>
      <q-separator />

      <p class="q-mt-lg">Do you experience low mood, anxiety or depression?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="lowMood" val="sometimes" label="Sometimes" />
        <q-radio dense v-model="lowMood" val="often" label="Often" />
        <q-radio dense v-model="lowMood" val="never" label="Never" />
      </div>
      <q-separator />


      <q-input
        class="q-mt-lg"
        filled
        label="Any other hormonal concerns?"
        type="textarea"
        v-model="otherHormonal"
      />


      <q-toolbar class="bg-primary text-white shadow-2 text-center q-mt-xl">
        <q-toolbar-title>Further Information</q-toolbar-title>
      </q-toolbar>

      <p class="q-mt-lg">Do you suffer from headaches or migraines?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="headaches" val="often" label="Often" />
        <q-radio dense v-model="headaches" val="sometimes" label="Sometimes" />
        <q-radio dense v-model="headaches" val="never" label="Never" />
      </div>
      <q-separator />

      <p class="q-mt-lg">Do you have any skin rashes / hives / psorasis / eczema?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="skinIssues" val="yes" label="Yes" />
        <q-radio dense v-model="skinIssues" val="no" label="No" />
      </div>
      <q-separator />

      <p class="q-mt-lg">Do you have any sinusitis / hayfever?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="sinusitis" val="yes" label="Yes" />
        <q-radio dense v-model="sinusitis" val="no" label="No" />
      </div>
      <q-separator />

      <p class="q-mt-lg">Do you have frequent nausea?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nausea" val="yes" label="Yes" />
        <q-radio dense v-model="nausea" val="no" label="No" />
      </div>
      <q-separator />

      <p class="q-mt-lg">Do you sometime experience a bitter taste in your mouth on waking?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="bitterTaste" val="yes" label="Yes" />
        <q-radio dense v-model="bitterTaste" val="no" label="No" />
      </div>
      <q-separator />

      <q-toolbar class="bg-primary text-white shadow-2 text-center q-mt-xl">
        <q-toolbar-title>Diet and Lifestyle</q-toolbar-title>
      </q-toolbar>

      <p class="q-mt-lg">Do you exercise?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="exercise" val="daily" label="Daily" />
        <q-radio dense v-model="exercise" val="weekly" label="Weekly" />
        <q-radio dense v-model="exercise" val="never" label="Never" />
      </div>
      

      <q-input
        class="q-mt-lg"
        filled
        label="What type of exercise do you do?"
        type="textarea"
        v-model="exerciseList"
      />
      <q-separator />

      <p class="q-mt-lg">Do you follow a particular diet?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="dietType" val="no" label="No" />
        <q-radio dense v-model="dietType" val="vegan" label="Vegan" />
        <q-radio dense v-model="dietType" val="vegeterian" label="Vegetarian" />
        <q-radio dense v-model="dietType" val="pescetarian" label="Pescetarian" />
        <q-radio dense v-model="dietType" val="other" label="Other" />
      </div>

      <q-input
        v-if="dietType==='other'"
        label="Other diet type"
        square
        v-model="otherDietType"
      />

      <q-input
        class="q-mt-lg"
        filled
        label="Any foods you strongly dislike or avoid?"
        type="textarea"
        v-model="dislikedFoods"
      />

      <q-separator />
      <p class="q-mt-lg">All clients will receive  meal recommendations included in their plan. Tailored meal plans with specific macros and calories are available at request.</p>
      <p class="q-mt-lg">Would you like? </p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="mealPlan" val="Yes" label="Tailored meal plan (additional cost)" />
        <q-radio dense v-model="mealPlan" val="maybe" label="Meal ideas only" />
      </div>
      
            

    </div>

      <div>
        <q-btn disable label="Submit"  @click="submitForm()"  type="submit" color="primary"/>
        <q-btn disable label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        
      </div>
    </q-form>

  </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageContact',
  data () {
    return {
      name: null,
      email: null,
      phone: null,
      age: null,
      height: null,
      weight: null,
      medicationsCurrent: null,
      medicationsPast: null,
      sessionGoals: null,
      text: '',
      accept: false,
      healthConditions: null,
      healthConditionsList: null,
      bloat: null,
      heartburn: null,
      cramps: null,
      bowel: null,
      movementType: null,
      gurgling: null,
      fattyFoods: null,
      digestiveTrigger: null,
      digestiveTriggerList: null,
      fatigue: null,
      lowEnergy: null,
      missedCycles: null,
      painfulCycles: null,
      lowMood: null,
      otherHormonal: null,
      headaches: null,
      skinIssues: null,
      sinusitis: null,
      nausea: null,
      bitterTaste: null,
      exercise: null,
      exerciseList: null,
      dietType: null,
      otherDietType: null,
      dislikedFoods: null,
      mealPlan: null
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.accept = false
      this.name = null
      this.email = null
      this.phone = null
      this.age = null
      this.weight = null
      this.medicationsCurrent = null
      this.medicationsPast = null
      this.sessionGoals = null
    },
    submitForm() {
      console.log("In submittingForm()")
     
    }
  }
}
</script>
