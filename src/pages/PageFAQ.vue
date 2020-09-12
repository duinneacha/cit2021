<template>
  <q-page class="bg-green-2 constrain">
    <div class="row q-pa-md logo-banner">
      <q-img
        src="../assets/ali_logo.png"
        style="border-radius: 5px; "
      />
   </div>

   <q-toolbar class="bg-info text-grey-10 shadow-2 text-center">
     <q-icon name="question_answer" style="font-size: 5em" />
          <q-toolbar-title class="text-h3 q-pa-lg">Frequently Asked Questions</q-toolbar-title>
   </q-toolbar>

   

    <div class="q-pa-md">
      <q-list bordered class="rounded-borders">
        <q-toolbar class="bg-primary text-white shadow-2 text-center">
          <q-toolbar-title>Neuromuscular Therapy</q-toolbar-title>
        </q-toolbar>

        <q-expansion-item
          expand-separator
          header-class="bg-warning q-mt-sm text-bold"
          icon="spa"
          label="What is Dry Needling?"
          caption="Neuromuscular Therapy"
        >
          <q-card>
            <q-card-section>
              Dry needling is a technique using acupuncture needles in the area of a trigger point within a muscle. The trigger points are little nodules in taut bands of muscle. Taut bands shorten the muscle inhibiting muscle function. Dry needling releases the taut bands and reduces the pain caused by Trigger Points. Dry needling is more specific than trigger point therapy and is very effective with chronic active trigger points. The client will feel a localised twitch response then the dry needle activates the nodule, and this is the process engaging the nervous system to relax the affected area.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          header-class="bg-warning q-mt-sm text-bold"
          icon="spa"
          label="How do I book a Neuromuscular session?"
          caption="Neuromuscular Therapy"
        >
          <q-card>
            <q-card-section>
              Please ring or text Ali at 087 7727580 to book an appointment
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          header-class="bg-warning q-mt-sm text-bold"
          icon="spa"
          label="What should I wear for the appointment?"
          caption="Neuromuscular Therapy"
        >
          <q-card>
            <q-card-section>
              Please wear comfortable loose-fitting clothing for your appointment so you are comfortable and can do any exercises demonstrated. Avoid wearing jeans, belts, sports tops, tight pants and dresses. It is recommended that you wear shorts and t shirt, tracksuit bottoms, a bra for ladies so that the therapist can access back muscles if needed in the session (sports tops are hard to work through), runners if you have a foot injury that needs assessing, slacks or light pants will do to
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          header-class="bg-warning q-mt-sm text-bold"
          icon="spa"
          label="What is the cost of the session?"
          caption="Neuromuscular Therapy"
        >
          <q-card>
            <q-card-section>
              <p>Sessions last 60 minutes and cost is €50 per session</p>
              <p>Club rates apply to Cobh Triathlon, Ballymore running club and Nuadha *€45 per session </p>
              <p>You may be advised by Ali that you only need 30 minutes for your treatment and will be charged €30 of the injury/treatment is specific and only needs a 30minute session or is part of ongoing rehab.</p>
              <p><strong>Stretching sessions:</strong> if you require a stretching session please be clear when booking in and Ali will book you in for a 30minute session</p>
              <p class="text-caption">Receipts are provided and can be used to claim from health providers LAYA healthcare and AVIVA healthcare.</p>

            </q-card-section>
          </q-card>
        </q-expansion-item>


      </q-list>
      
      <!-- Nutrition FAQ -->
      <q-list bordered class="rounded-borders q-mt-lg">
        <q-toolbar class="bg-primary text-white shadow-2 text-center">
          <q-toolbar-title>Nutrition</q-toolbar-title>
        </q-toolbar>

        <q-expansion-item
          expand-separator
          header-class="bg-warning q-mt-sm text-bold"
          icon="set_meal"
          label="How do I book?"
          caption="Nutrition Therapy"
        >
          <q-card>
            <q-card-section>
              To book in for a consultation click on the Prebooking form link <q-btn class="q-ml-xs" color="green-3" type="a" icon="email" to="/contact">Book here</q-btn> and Ali will email you with next available appointment.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          header-class="bg-warning q-mt-sm text-bold"
          icon="set_meal"
          label="What is cost?"
          caption="Nutrition Therapy"
        >
          <q-card>
            <q-card-section>
              <p>Ali works with people to make long term health changes, this takes time, support and ongoing accountability. You may also need to have meal plan changes, supplement changes and tweaks done over the initial period.  This is why Ali only works with people who are willing to commit to a three month package and does not offer stand along appointments for new clients.</p>
              <p class="text-bold">3 month package costs €180</p>
              <p>This includes 3x 1hr sessions over 3 months with ongoing support and check ins.  You will be given an action plan, supplement recommendations and meal recommendations. You may also be recommended to undergo some health tests. Health tests if required are an additional cost by the lab.</p>

              <p class="text-bold">Follow up sessions for long term clients</p>
              <p>Follow up sessions for long term clients that are on a current plan are €50 per session. If a new meal plan is needed it will be €100.</p>
              <p>Interpretation and recommendation of health tests for ongoing clients is €50 for the interpretation and appointment to go through the recommendations.</p>
              <p>Please check your health insurance provider, some providers cover Nutritional Therapy in their plans and can be claimed.</p>


            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
      
      
      <!-- Classes FAQ -->
      <q-list bordered class="rounded-borders q-mt-lg">
        <q-toolbar class="bg-primary text-white shadow-2 text-center">
          <q-toolbar-title>Classes</q-toolbar-title>
        </q-toolbar>

        <q-expansion-item
          expand-separator
          header-class="bg-warning q-mt-sm text-bold"
          icon="fitness_center"
          label="What should I wear for my appointment for Physical therapy?"
          caption="Classes"
        >
          <q-card>
            <q-card-section>
              Light fitted clothing like shorts and t shirt. Please avoid Jeans or tightfitting clothes and Ladies please wear a Bra not a sports top.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          header-class="bg-warning q-mt-sm text-bold"
          icon="fitness_center"
          label="How long is a Physical Therapy session?"
          caption="Classes"
        >
          <q-card>
            <q-card-section>
              Usually 60 minutes but if Ali feels only 30 minutes is required she will adjust the charge accordingly. 
            </q-card-section>
          </q-card>
        </q-expansion-item>

        
        <q-expansion-item
          expand-separator
          header-class="bg-warning q-mt-sm text-bold"
          icon="fitness_center"
          label="Can I exercise after a session?"
          caption="Classes"
        >
          <q-card>
            <q-card-section>
              Usually it is recommended to take 24-48 hours rest after sessions to optimise recovery. 
            </q-card-section>
          </q-card>
        </q-expansion-item>

        
        <q-expansion-item
          expand-separator
          header-class="bg-warning q-mt-sm text-bold"
          icon="fitness_center"
          label="Are sessions covered by Health Insurance?"
          caption="Classes"
        >
          <q-card>
            <q-card-section>
              Yes, some Health Providers cover part of the cost, you will need to scan your receipt and ask for reimbursement. The Health Providers who cover are Laya and Irish life.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        
        <q-expansion-item
          expand-separator
          header-class="bg-warning q-mt-sm text-bold"
          icon="fitness_center"
          label="Does Medical card cover the sessions?"
          caption="Classes"
        >
          <q-card>
            <q-card-section>
              No, medical card patients need to pay the full cost and the clinic is not covered under Medical card Scheme. 
            </q-card-section>
          </q-card>
        </q-expansion-item>

        
        <q-expansion-item
          expand-separator
          header-class="bg-warning q-mt-sm text-bold"
          icon="fitness_center"
          label="Is the building wheelchair accessible?"
          caption="Classes"
        >
          <q-card>
            <q-card-section>
              Yes, the building is wheelchair accessible. 
            </q-card-section>
          </q-card>
        </q-expansion-item>

        
        <q-expansion-item
          expand-separator
          header-class="bg-warning q-mt-sm text-bold"
          icon="fitness_center"
          label="Do sessions have to be in person, or can one do the session through internet?"
          caption="Classes"
        >
          <q-card>
            <q-card-section>
              In person sessions are preferable but the Nutrition consultations can be facilitated through Zoom and Skype.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
      
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Pagefaq',
  data() {
    return {
      expanded: false
    }
  }
}
</script>
