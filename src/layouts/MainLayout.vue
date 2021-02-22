<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-7">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title  class="text-nunito text-bold">
          <div class="logo-title">
              Ali Dorgan Nutrition & Neuromuscular Therapy
          </div>
          
        </q-toolbar-title>

        <div class="bg-grey-5">

          
          <q-btn color="grey-8 large-screen-only" type="e" icon="email" href="email:alisnutrition@gmail.com">alisnutrition@gmail.com</q-btn>
          <q-btn class="q-ml-md large-screen-only" color="grey-8" type="a" icon="phone" href="tel:0877727580">087 7727580</q-btn>
          

          <!-- <p><q-icon class="q-pr-sm" name="email" />alisnutrition@gmail.com</p>
          <p><q-icon class="q-pr-sm" name="phone" />087 7727580</p> -->
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-5"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <EssentialLink 
          :key="link.title"
          v-bind="link"
          v-for="link in essentialLinks"
          />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-5 text-white large-screen-only">
      <q-toolbar>
        <q-toolbar-title>

          <span class="text-overline">www.alidorgan.com</span>
          <span class="text-overline q-pl-md"><q-icon name="email" /></span>
          <span class="text-overline q-pl-md">alisnutrition@gmail.com </span>
          <span class="text-overline q-px-md"><q-icon name="telephone" /></span>
          <span class="text-overline q-pl-md"> 087 7727580 </span>
          
        </q-toolbar-title>
        <q-btn flat round dense icon="facebook" class="q-mr-sm" />
        <q-btn flat round dense icon="instagram" class="q-mr-sm" />
      </q-toolbar>
    </q-footer>

    <!-- place QPageScroller at end of page -->
  <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
    <q-btn fab icon="keyboard_arrow_up" color="accent" />
  </q-page-scroller>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    caption: 'Home Screen',
    icon: 'home',
    link: '#/'
  },
  // {
  //   title: 'About Ali',
  //   caption: 'More about Ali (Anneline) Dorgan',
  //   icon: 'face',
  //   link: '#/about'
  // },
  {
    title: 'Nutrition',
    caption: 'Learn all about Alis Nutrition services',
    icon: 'set_meal',
    link: '#/nutrition'
  },
  {
    title: 'Neuromuscular',
    caption: 'Neuromuscular Therapy',
    icon: 'spa',
    link: '#/neuromuscular'
  },
  {
    title: 'Classes',
    caption: 'See upcoming classes',
    icon: 'fitness_center',
    link: '#/classes'
  },
  {
    title: 'FAQ',
    caption: 'Frequently asked questions',
    icon: 'question_answer',
    link: '#/faq'
  },
  {
    title: 'Contact',
    caption: 'Contact Ali Dorgan',
    icon: 'contact_page',
    link: '#/contact'
  },
  {
    title: 'Testimonials',
    caption: 'Client stories',
    icon: 'people',
    link: '#/testimonials'
  },
  {
    title: 'Recipes',
    caption: 'Some nutritious recipes',
    icon: 'menu_book',
    link: '#/recipes'
  }

];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

<style >

</style>