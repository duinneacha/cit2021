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
       v-model="nutritionForm.name"
       color="green"
       label="Your name *"
       lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please enter your name']"
      />

     <q-input
        filled
        type="tel"
        v-model="nutritionForm.phone"
        label="Your phone number *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter your phone number']"
      />
     
     <q-input
       filled
       v-model="nutritionForm.email"
       color="green"
       label="Your email address *"
       lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please enter your email address']"
      />


      <q-input
        filled
        type="num"
        v-model="nutritionForm.age"
        label="Age"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter your age']"
      />


      <q-input
        filled
        type="text"
        v-model="nutritionForm.weight"
        label="Weight"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter your weight']"
      />
                  

      <q-input
        filled
        type="text"
        v-model="nutritionForm.height"
        label="Height"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter your height']"
      />

      <q-input
        filled
        label="Medications you are currently taking?"
        type="textarea"
        v-model="nutritionForm.medicationsCurrent"
      />

      <q-input
        filled
        label="Medications you have taken in the past (if known)?"
        type="textarea"
        v-model="nutritionForm.medicationsPast"
      />

      <q-input
        filled
        label="What would you like to improve with your health?"
        type="textarea"
        v-model="nutritionForm.sessionGoals"
      />
      
      <!-- <q-toggle v-model="healthConditions" label="Do you have any health conditions?" /> -->

      
      
      <q-input
        filled
        label="Do you have any diagnosed health conditions?"
        type="textarea"
        v-model="nutritionForm.healthConditionsList"
      />

      <q-toolbar class="bg-primary text-white shadow-2 text-center q-mt-xl">
        <q-toolbar-title>Digestive Screening Please Tick</q-toolbar-title>
      </q-toolbar>
  

    <div class="q-pa-md q-gutter-sm">
      <p class="q-mt-lg">How often do you experience bloating or flatulence / wind?</p>
      <div class="q-gutter-sm">
        <q-radio v-model="nutritionForm.bloat" val="never" label="Never" />
        <q-radio v-model="nutritionForm.bloat" val="sometimes" label="Sometimes" />
        <q-radio v-model="nutritionForm.bloat" val="often" label="Often" />
      </div>
      <q-separator />
      <p class="q-mt-lg">How often do you experience heartburn or indigestion?</p>
      <div class="q-gutter-sm">
        <q-radio v-model="nutritionForm.heartburn" val="never" label="Never" />
        <q-radio v-model="nutritionForm.heartburn" val="sometimes" label="Sometimes" />
        <q-radio v-model="nutritionForm.heartburn" val="often" label="Often" />
      </div>
      <q-separator />
      <p class="q-mt-lg">Do you get cramps or painful tummy episodes?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.cramps" val="no" label="No" />
        <q-radio dense v-model="nutritionForm.cramps" val="yes" label="Yes" />
      </div>
      <q-separator />
      <p class="q-mt-lg">How often do you have a bowel movement?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.bowel" val="daily" label="Daily" />
        <q-radio dense v-model="nutritionForm.bowel" val="less" label="Less than 3 x week" />
        <q-radio dense v-model="nutritionForm.bowel" val="more" label="Once a week" />
        <q-radio dense v-model="nutritionForm.bowel" val="varies" label="Varies" />
      </div>
      <q-separator />
      <p class="q-mt-lg">Do you get these often?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.movementType" val="diarrhoea" label="Diarrhoea" />
        <q-radio dense v-model="nutritionForm.movementType" val="constipation" label="Constipation" />
        <q-radio dense v-model="nutritionForm.movementType" val="both" label="Both" />
      </div>
      <q-separator />
      <p class="q-mt-lg">Do you get a gurgling/rumbling in your stomach?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.gurgling" val="never" label="Never" />
        <q-radio dense v-model="nutritionForm.gurgling" val="often" label="Often" />
      </div>
      <q-separator />
      <p class="q-mt-lg">Do you have any difficulty digesting fatty foods?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.fattyFoods" val="yes" label="Yes" />
        <q-radio dense v-model="nutritionForm.fattyFoods" val="no" label="No" />
      </div>
      <q-separator />
      <p class="q-mt-lg">Are you aware of any foods that trigger digestive symptoms?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.digestiveTrigger" val="yes" label="Yes" />
        <q-radio dense v-model="nutritionForm.digestiveTrigger" val="no" label="No" />
      </div>

      <q-input
        v-if="nutritionForm.digestiveTrigger==='yes'"
        filled
        label="Which Foods"
        type="textarea"
        v-model="nutritionForm.digestiveTriggerList"
      />

      <q-toolbar class="bg-primary text-white shadow-2 text-center q-mt-xl">
        <q-toolbar-title>Hormonal Screening Please Tick</q-toolbar-title>
      </q-toolbar>

      <p class="q-mt-lg">Do you have low energy?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.lowEnergy" val="yes" label="Yes" />
        <q-radio dense v-model="nutritionForm.lowEnergy" val="no" label="No" />
      </div>
      <q-separator />

      <p class="q-mt-lg">Do you experience episodes of fatigue during the day?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.fatigue" val="yes" label="Yes" />
        <q-radio dense v-model="nutritionForm.fatigue" val="no" label="No" />
      </div>
      <q-separator />


      <p class="q-mt-lg">Do you have missed menstrual cycles (females)?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.missedCycles" val="yes" label="Yes" />
        <q-radio dense v-model="nutritionForm.missedCycles" val="no" label="No" />
        <q-radio dense v-model="nutritionForm.missedCycles" val="nr" label="Not Relevant" />
      </div>
      <q-separator />

      <p class="q-mt-lg">Do you experience PMS symptoms, painful or heavy cycles (females)?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.painfulCycles" val="sometimes" label="Sometimes" />
        <q-radio dense v-model="nutritionForm.painfulCycles" val="often" label="Often" />
        <q-radio dense v-model="nutritionForm.painfulCycles" val="never" label="Never" />
      </div>
      <q-separator />

      <p class="q-mt-lg">Do you experience low mood, anxiety or depression?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.lowMood" val="sometimes" label="Sometimes" />
        <q-radio dense v-model="nutritionForm.lowMood" val="often" label="Often" />
        <q-radio dense v-model="nutritionForm.lowMood" val="never" label="Never" />
      </div>
      <q-separator />


      <q-input
        class="q-mt-lg"
        filled
        label="Any other hormonal concerns?"
        type="textarea"
        v-model="nutritionForm.otherHormonal"
      />


      <q-toolbar class="bg-primary text-white shadow-2 text-center q-mt-xl">
        <q-toolbar-title>Further Information</q-toolbar-title>
      </q-toolbar>

      <p class="q-mt-lg">Do you suffer from headaches or migraines?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.headaches" val="often" label="Often" />
        <q-radio dense v-model="nutritionForm.headaches" val="sometimes" label="Sometimes" />
        <q-radio dense v-model="nutritionForm.headaches" val="never" label="Never" />
      </div>
      <q-separator />

      <p class="q-mt-lg">Do you have any skin rashes / hives / psorasis / eczema?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.skinIssues" val="yes" label="Yes" />
        <q-radio dense v-model="nutritionForm.skinIssues" val="no" label="No" />
      </div>
      <q-separator />

      <p class="q-mt-lg">Do you have any sinusitis / hayfever?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.sinusitis" val="yes" label="Yes" />
        <q-radio dense v-model="nutritionForm.sinusitis" val="no" label="No" />
      </div>
      <q-separator />

      <p class="q-mt-lg">Do you have frequent nausea?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.nausea" val="yes" label="Yes" />
        <q-radio dense v-model="nutritionForm.nausea" val="no" label="No" />
      </div>
      <q-separator />

      <p class="q-mt-lg">Do you sometime experience a bitter taste in your mouth on waking?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.bitterTaste" val="yes" label="Yes" />
        <q-radio dense v-model="nutritionForm.bitterTaste" val="no" label="No" />
      </div>
      <q-separator />

      <q-toolbar class="bg-primary text-white shadow-2 text-center q-mt-xl">
        <q-toolbar-title>Diet and Lifestyle</q-toolbar-title>
      </q-toolbar>

      <p class="q-mt-lg">Do you exercise?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.exercise" val="daily" label="Daily" />
        <q-radio dense v-model="nutritionForm.exercise" val="weekly" label="Weekly" />
        <q-radio dense v-model="nutritionForm.exercise" val="never" label="Never" />
      </div>
      

      <q-input
        class="q-mt-lg"
        filled
        label="What type of exercise do you do?"
        type="textarea"
        v-model="nutritionForm.exerciseList"
      />
      <q-separator />

      <p class="q-mt-lg">Do you follow a particular diet?</p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.dietType" val="no" label="No" />
        <q-radio dense v-model="nutritionForm.dietType" val="vegan" label="Vegan" />
        <q-radio dense v-model="nutritionForm.dietType" val="vegeterian" label="Vegetarian" />
        <q-radio dense v-model="nutritionForm.dietType" val="pescetarian" label="Pescetarian" />
        <q-radio dense v-model="nutritionForm.dietType" val="other" label="Other" />
      </div>

      <q-input
        v-if="nutritionForm.dietType==='other'"
        label="Other diet type"
        square
        v-model="nutritionForm.otherDietType"
      />

      <q-input
        class="q-mt-lg"
        filled
        label="Any foods you strongly dislike or avoid?"
        type="textarea"
        v-model="nutritionForm.dislikedFoods"
      />

      <q-separator />
      <p class="q-mt-lg">All clients will receive  meal recommendations included in their plan. Tailored meal plans with specific macros and calories are available at request.</p>
      <p class="q-mt-lg">Would you like? </p>
      <div class="q-gutter-sm">
        <q-radio dense v-model="nutritionForm.mealPlan" val="Yes" label="Tailored meal plan (additional cost)" />
        <q-radio dense v-model="nutritionForm.mealPlan" val="maybe" label="Meal ideas only" />
      </div>
      
            

    </div>

      <div>
        <q-btn label="Submit"  @click="submitForm()"  type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        
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

      nutritionForm: {
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
    }
  },

  methods: {
    onSubmit () {

      // if (this.accept !== true) {
      //   this.$q.notify({
      //     color: 'red-5',
      //     textColor: 'white',
      //     icon: 'warning',
      //     message: 'You need to accept the license and terms first'
      //   })
      // }
      // else {
      //   this.$q.notify({
      //     color: 'green-4',
      //     textColor: 'white',
      //     icon: 'cloud_done',
      //     message: 'Submitted'
      //   })
      // }
      console.log("In onSubmit thingymajig!")

    },

    onReset () {
      // this.accept = false
      // this.name = null
      // this.email = null
      // this.phone = null
      // this.age = null
      // this.weight = null
      // this.medicationsCurrent = null
      // this.medicationsPast = null
      // this.sessionGoals = null
        
      this.nutritionForm.name = null,                         
      this.nutritionForm.email = null,
      this.nutritionForm.phone = null,
      this.nutritionForm.age =  null,
      this.nutritionForm.height =  null,
      this.nutritionForm.weight =  null,
      this.nutritionForm.medicationsCurrent =  null,
      this.nutritionForm.medicationsPast = null,
      this.nutritionForm.sessionGoals = null,
      this.nutritionForm.text =  ''
      this.nutritionForm.healthConditions = null,
      this.nutritionForm.healthConditionsList = null,
      this.nutritionForm.bloat = null,
      this.nutritionForm.heartburn = null,
      this.nutritionForm.cramps = null,
      this.nutritionForm.bowel = null,
      this.nutritionForm.movementType = null,
      this.nutritionForm.gurgling = null,
      this.nutritionForm.fattyFoods = null,
      this.nutritionForm.digestiveTrigger = null,
      this.nutritionForm.digestiveTriggerList = null,
      this.nutritionForm.fatigue = null,
      this.nutritionForm.lowEnergy = null,
      this.nutritionForm.missedCycles = null,
      this.nutritionForm.painfulCycles = null,
      this.nutritionForm.lowMood = null,
      this.nutritionForm.otherHormonal = null,
      this.nutritionForm.headaches = null,
      this.nutritionForm.skinIssues = null,
      this.nutritionForm.sinusitis = null,
      this.nutritionForm.nausea = null,
      this.nutritionForm.bitterTaste = null,
      this.nutritionForm.exercise = null,
      this.nutritionForm.exerciseList = null,
      this.nutritionForm.dietType = null,
      this.nutritionForm.otherDietType = null,
      this.nutritionForm.dislikedFoods = null,
      this.nutritionForm.mealPlan = null
      
    },
    submitForm() {
      console.log("In submittingForm()")
     
     console.log(this.nutritionForm.name)
     console.log(this.nutritionForm.bloat)
     console.log(this.nutritionForm.heartburn)

     let formData = new FormData()
     // formData.append('id', this.post.id)
     formData.append('name', this.nutritionForm.name)
     formData.append('email', this.nutritionForm.email)
     formData.append('phone', this.nutritionForm.phone)
     formData.append('email', this.nutritionForm.age)
     formData.append('height', this.nutritionForm.height)
     formData.append('weight', this.nutritionForm.weight)
     formData.append('medicationscurrent', this.nutritionForm.medicationsCurrent)
     formData.append('medicationsPast', this.nutritionForm.medicationsPast)
     formData.append('sessionGoals', this.nutritionForm.sessionGoals)
     formData.append('healthConditionsList', this.nutritionForm.healthConditionsList)
     formData.append('bloat', this.nutritionForm.bloat)
     formData.append('heartburn', this.nutritionForm.heartburn)
     formData.append('cramps', this.nutritionForm.cramps)
     formData.append('bowel', this.nutritionForm.bowel)
     formData.append('movementType', this.nutritionForm.movementType)
     formData.append('gurgling', this.nutritionForm.gurgling)
     formData.append('fattyFoods', this.nutritionForm.fattyFoods)
     formData.append('digestiveTrigger', this.nutritionForm.digestiveTrigger)
     formData.append('digestiveTriggerList', this.nutritionForm.digestiveTriggerList)
     formData.append('fatigue', this.nutritionForm.fatigue)
     formData.append('lowEnergy', this.nutritionForm.lowEnergy)
     formData.append('missedCycles', this.nutritionForm.missedCycles)
     formData.append('painfulCycles', this.nutritionForm.painfulCycles)
     formData.append('lowMood', this.nutritionForm.lowMood)
     formData.append('otherHormonal', this.nutritionForm.otherHormonal)
     formData.append('headaches', this.nutritionForm.headaches)
     formData.append('skinIssues', this.nutritionForm.skinIssues)
     formData.append('sinusitis', this.nutritionForm.sinusitis)
     formData.append('nausea', this.nutritionForm.nausea)
     formData.append('bitterTaste', this.nutritionForm.bitterTaste)
     formData.append('exercise', this.nutritionForm.exercise)
     formData.append('exerciseList', this.nutritionForm.exerciseList)
     formData.append('dietType', this.nutritionForm.dietType)
     formData.append('otherDietType', this.nutritionForm.otherDietType)
     formData.append('dislikedFoods', this.nutritionForm.dislikedFoods)
     formData.append('mealPlan', this.nutritionForm.mealPlan)

     this.$axios.post(`${process.env.API}nutritionForm`, formData).then(response => {
       console.log('rrrrrrresponse : ', response)
      
       // this.$router.push('/')
      
       // this.$q.loading.hide()
     }).catch(error => {
       console.log(error)
       this.$q.dialog({
         title: 'Error',
         message: 'Sorry, could not create post'
       })
       // this.$q.loading.hide()
     })

    console.log('After axios')

    this.$q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted Thank You!'
   })


    }
  }
}
</script>
