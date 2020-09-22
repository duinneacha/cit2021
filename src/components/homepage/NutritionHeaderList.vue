<template>
  <div class="nutrition-list">

    <q-toolbar
      class="text-grey-2 text-center"
      style="background-color: #94236E;"
    >
      <q-toolbar-title class="text-weight-bold">Nutrition</q-toolbar-title>
    </q-toolbar>

    <q-list bordered padding separator class="bg-green-1 text-grey-9">

      <q-item
        v-for="nutritionItem in nutritionData"
        :key="nutritionItem.itemHeader"
        clickable
        :to="nutritionItem.sectionID"
      >
        <q-item-section>
          <q-item-label class="text-bold">{{ nutritionItem.itemHeader }}</q-item-label>
          <!-- <q-item-label caption>{{ nutritionItem.itemText }}</q-item-label> -->
          
        </q-item-section>

      </q-item>
    </q-list>

  </div>
</template>

<script>
export default {
  data() {
    return {
     nutritionData: [
      {
      'itemHeader': 'Cholesterol',
      'itemText': 'Cholesterol Text',
      'sectionID': '/nutrition' 
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