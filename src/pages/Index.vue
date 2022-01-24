<template>
  <q-layout view="lHh lpr lFf">
    <q-header class="q-py-sm" style="background-color: white;" :style="'border-bottom: 2px solid '+ theme_color">
      <q-toolbar>
        <span :style="'font-size: 35px;color:dodgerblue'" class="my-font-IBM text-h6 q-mr-md">DIGITAL <span
          :style="'color:black;'">Flow</span></span>
        <q-space></q-space>
        <q-tabs v-model="selected_tab" shrink>
          <q-tab :style="[selected_tab == 't_1' ? {backgroundColor: theme_color} : {}]"
                 class="q-mr-sm q-py-xs custom_tab" @click="scrollToElement('id_about_us');"
                 style="width:120px;min-height:auto !important;color: dodgerblue" label="About Us"/>
          <q-tab :style="[selected_tab == 't_2' ? {backgroundColor: theme_color} : {}]"
                 class="q-mr-sm q-py-xs custom_tab" @click="scrollToElement('id_services');"
                 style="width:120px;min-height:auto !important;color: dodgerblue" label="Services"/>
          <q-tab :style="[selected_tab == 't_3' ? {backgroundColor: theme_color} : {}]"
                 class="q-mr-sm q-py-xs custom_tab" @click="scrollToElement('id_testimonial');"
                 style="min-height:auto !important;color: dodgerblue" label="Partnership"/>
          <q-tab :style="[selected_tab == 't_4' ? {backgroundColor: theme_color} : {}]"
                 class="q-mr-sm q-py-xs custom_tab" @click="scrollToElement('id_news');"
                 style="width:120px;min-height:auto !important;color: dodgerblue" label="News"/>

        </q-tabs>

      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>

        <q-parallax
          src="~assets/images/logo.jpg"
          :height="750"
        />

        <div class="absolute main_line" style="top: 200px; right: 150px;color:white">
          <div><span style="color:dodgerblue">DIGITAL </span><span style="color:black">Flow</span></div>

        </div>

        <div class="my-font-IBM absolute" style="font-size:24px; top: 350px; right: 70px;color:dodgerblue">
          <div>
            Building innovative solutions with disruptive technologies.
          </div>
        </div>


        <div class="row" id="id_about_us">
          <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <h5 class="text-center text-weight-bolder">About US</h5>

            <q-card flat>
              <q-item>
                <q-item-section>
                  <h5 class="my-font-IBM text-grey">
                    DIGITAL Flow was founded in 2019 in order to actively and fully participate in the WEB 3.0
                    revolution.
                    <br>
                    We are passionate about innovative projects and make every effort to meet the requirements of our
                    customers.
                  </h5>
                </q-item-section>

              </q-item>
              <q-item>
                <q-item-section>
                  <h5 class="my-font-IBM text-grey">
                    Working closely with strong partners and highly qualified staff, we deliver your project in a short
                    and efficient way.
                    <br>
                    Beyond the technological aspects we bring to you, we like to know well our customers and make
                    human relationships our main priority.
                  </h5>
                </q-item-section>

              </q-item>

            </q-card>
          </div>
        </div>


        <div class="quote">
          <div class="q-pt-xl full-width full-height text-right" style="background-color: #000000ad !important;">
            <h4 class="my-font-IBM text-white text-center text-italic">
              "Behind each of our achievements, bold minds came together to make them reality" </h4>

            <br>

              <q-chip color="transparent">
                <q-avatar rounded size="96px">
                  <q-img  src="~assets/images/df.jpg"></q-img>
                </q-avatar>
                <h5 style="color:white">Lionel Leiva-Marcon, founder</h5>
              </q-chip>

            <br> <br> <br>
          </div>

        </div>

        <div style="background: #f7f7f7" id="id_services">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
              <h5 class="text-center text-weight-bolder">Our Services
                <br>
                <!--span
                  class="text-center text-grey text-h6">
                  Our blockchain skills will help you gain maximum value in the traceability of assets and transactions, accountability, provenance, p2p and cross border traceable communication, performance throughput and latency, consensus models, automation to design distributed apps, sustainability, and resilience.
                  </span-->
              </h5>
            </div>
          </div>
          <div class="q-pa-xl">
            <div class="row q-col-gutter-sm ">
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <q-item class="box-shadow q-pa-none q-ml-xs ">
                  <q-item-section side :style="'background-color:dodgerblue'" class="q-pa-sm q-mr-none text-white">
                    <q-icon name="compare_arrows" size="65px"></q-icon>
                  </q-item-section>
                  <q-item-section class="q-pa-md q-ml-none">
                    <q-item-label class="text-h6 text-grey-9 text-uppercase">Blockchain</q-item-label>
                    <q-item-label class="text-grey-8">Innovative dApps, Trusted information systems, Smart contract
                      quality, Blockchain data quality, Secure smart contracts, Off-chain data assessment
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <q-item class="box-shadow q-pa-none q-ml-xs">
                  <q-item-section side :style="'background-color:dodgerblue'" class="q-pa-sm q-mr-none text-white">
                    <q-icon name="web" size="65px"></q-icon>
                  </q-item-section>
                  <q-item-section class="q-pa-md q-ml-none">
                    <q-item-label class="text-h6 text-grey-9 text-uppercase">Front-End Development</q-item-label>
                    <q-item-label class="text-grey-8">Latest design trends, well-designed website, Establishes
                      consistent brand identity.
                      .
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <q-item class="box-shadow q-pa-none q-ml-xs q-mr-xs">
                  <q-item-section side :style="'background-color:dodgerblue'" class="q-pa-sm q-mr-none text-white">
                    <q-icon name="fab fa-wordpress" size="65px"></q-icon>
                  </q-item-section>
                  <q-item-section class="q-pa-md q-ml-none">
                    <q-item-label class="text-h6 text-grey-9 text-uppercase">Virtual Reality and Extended Reality
                    </q-item-label>
                    <q-item-label class="text-grey-8">Virtual reality interactions. Metaverse. Gaming landscape
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </div>
            </div>
            <div class="row q-col-gutter-sm q-mt-lg">
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <q-item class="box-shadow q-pa-none q-ml-xs ">
                  <q-item-section side :style="'background-color:dodgerblue'" class="q-pa-sm q-mr-none text-white">
                    <q-icon name="settings" size="65px"></q-icon>
                  </q-item-section>
                  <q-item-section class="q-pa-md q-ml-none">
                    <q-item-label class="text-h6 text-grey-9 text-uppercase">DevOps</q-item-label>
                    <q-item-label class="text-grey-8">Continuous integration & deployment between the development team
                      and the IT operations department.
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <q-item class="box-shadow q-pa-none q-ml-xs">
                  <q-item-section side :style="'background-color:dodgerblue'" class="q-pa-sm q-mr-none text-white">
                    <q-icon name="fas fa-database" size="65px"></q-icon>
                  </q-item-section>
                  <q-item-section class="q-pa-md q-ml-none">
                    <q-item-label class="text-h6 text-grey-9 text-uppercase">Data Management</q-item-label>
                    <q-item-label class="text-grey-8">Decentralized storage (IPFS), Local storage, Sensitive Data
                      Protection.
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <q-item class="box-shadow q-pa-none q-ml-xs q-mr-xs">
                  <q-item-section side :style="'background-color:dodgerblue'" class="q-pa-sm q-mr-none text-white">
                    <q-icon name="dynamic_feed" size="65px"></q-icon>
                  </q-item-section>
                  <q-item-section class="q-pa-md q-ml-none">
                    <q-item-label class="text-h6 text-grey-9 text-uppercase">Micro Services Architecture</q-item-label>
                    <q-item-label class="text-grey-8">Improved Productivity and Speed
                      Flexibility in Using Technologies and Scalability
                      Autonomous, Cross-functional Teams.
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </div>
            </div>
          </div>
        </div>
        <div class="quote" id="id_testimonial">

          <div style="background-color: #000000ad !important;">
            <h5 class="text-center text-white text-weight-bolder">Partnership</h5>
            <q-carousel
              v-model="review_slide"
              swipeable
              animated
              infinite
              autoplay
              arrows
              navigation
              padding
              navigation-position="bottom"
              class="text-white full-height bg-transparent q-mx-xl"
            >
              <q-carousel-slide style="padding-bottom: 140px" name="style" class="column no-wrap flex-center">
                <img :style="'margin-top:100px;border-radius:5px;border: 4px solid ' + theme_color"
                     src="~assets/images/pas.png" width=300 height=200>
                <div class="q-mt-md text-h6 text-center">
                  <span :style="'color:'+theme_color">Proactive Swiss</span><br><span class="text-overline">External Development Unit</span>
                </div>
                <div class="q-mt-md text-h6 text-center">
                  ProActive Swiss is our software development partner. In this fast changing sector, ProActive Swiss brings digital innovation with a reliable +20 years experience.
                </div>
              </q-carousel-slide>
              <q-carousel-slide style="padding-bottom: 140px" name="tv" class="column no-wrap flex-center">
                <img :style="'margin-top:100px;border-radius:5px;border: 4px solid ' + theme_color"
                     src="~assets/images/dna.jpg" width=300 height=200>
                <div class="q-mt-md text-h6 text-center">
                  <span :style="'color:'+theme_color">DNA Chain</span><br><span class="text-overline">Project executive and blockchain enthusiastic</span>
                </div>
                <div class="q-mt-md text-h6 text-center">
                  DNA Chain is extremely involved on the MONUMENTAL art platform !
                </div>
              </q-carousel-slide>
              <q-carousel-slide style="padding-bottom: 140px" name="layers" class="column no-wrap flex-center">
                <img :style="'margin-top:100px;border-radius:5px;border: 4px solid ' + theme_color"
                     src="~assets/images/tchuti.png" width=300 height=200>
                <div class="q-mt-md text-h6 text-center">
                  <span :style="'color:'+theme_color">Tchuti</span><br><span
                  class="text-overline">Executive Director/Curator</span>
                </div>
                <div class="q-mt-md text-h6 text-center">
                  Tchuti provide artistic and curatorial direction while overseeing design, marketing, production, interpretation, outreach, publishing and program evaluation
                </div>
              </q-carousel-slide>
            </q-carousel>
          </div>
        </div>


        <div class="row" id="id_news">
          <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <h5 class="text-center text-weight-bolder">Latest News</h5>
          </div>
        </div>


        <div class="row text-center flex flex-center">
          <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-md flex flex-center">
            <div class="col-md-6 col-lg-6 col-sx-12 col-sm-12">
              <q-card @mouseover="hoverOver(1)" @mouseout="hoverOutTimeout(1)" style="border: none;"
                      class="my-card text-center box-shadow" flat bordered>
                <iframe
                  src="https://www.youtube.com/embed/8hp_QT4TapQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
                </iframe>

                <q-card-section class="text-left">

                  <div :class="about_heading_1" :style="'color: dodgerblue'"
                       class="about_heading_1 text-h6 q-mt-sm q-mb-xs">G Racers Club ICO
                  </div>
                  <div class="text-caption text-grey-9 q-mt-sm">
                    Here it is ! Mint date is 15.02.2022
                    We are helping our customer to launch its own NFT Gaming ICO.
                    We have developped a platform responsible to deliver all the NFT's in a secure and random ways.
                    After the presales periode, everyone will be able to access the public sale.
                    Get ready to get your NFT !!!!

                  </div>
                  <div>
                    <q-btn size="sm" :style="'color: dodgerblue'" label="Website"
                           @click="openLink"/>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-6 col-lg-6 col-sx-12 col-sm-12">
              <q-card @mouseover="hoverOver(2)" @mouseout="hoverOutTimeout(2)"
                      :style="'color: ' + about_heading_color_2" style="border: none;"
                      class="my-card text-center box-shadow" flat bordered>
                <q-img
                  src="~assets/images/monumental.png"
                />

                <q-card-section class="text-left">

                  <div :class="about_heading_2" :style="'color: dodgerblue'" class="text-h6 q-mt-sm q-mb-xs">Monumental
                    Platform
                  </div>
                  <div class="text-caption text-grey-9 q-mt-sm">
                    A new coming platform which will empower digital and physical arts.
                    More than just a marketplace, the main goal is also to promote artist and support them throughout their digital journey.

                  </div>
                  <div><br>
                    <q-btn size="sm" :style="'color: dodgerblue'" label="SOON"/>
                  </div>
                </q-card-section>
              </q-card>
            </div>

          </div>
        </div>
        <br>
        <br>
        <div class="contact_us" id="id_contact_us">
          <div style="background-color: #000000ad !important;">
            <div class="row">

              <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">

                <h5 class="text-white text-center">DIGITAL Flow
                  <br>
                  <div class="text-center text-grey text-h6">contact@d-flow.fr</div>
                  <div class="text-center text-grey text-h6">Copyright © DIGITAL Flow 2019</div>

                </h5>
              </div>
            </div>

            <div class="row text-center flex flex-center q-pb-lg">

            </div>
          </div>
        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style src="@quasar/quasar-ui-qflashcard/dist/index.css"></style>

<script>
import {scroll} from 'quasar'

const {getScrollTarget, setScrollPosition} = scroll

import {QFlashcard, QFlashcardSection} from '@quasar/quasar-ui-qflashcard'

export default {
  components: {
    QFlashcard,
    QFlashcardSection
  },
  data() {
    return {
      slide: 1,
      review_slide: 'style',
      selected_tab: 't_0',
      team_slide: 1,
      bg_color: 'dodgerblue',
      hover: false,
      active: false,
      theme_color: 'white',
      background_style: 'background-color:rgba(0, 163, 82, 0.7);',
      about_heading_1: [],
      about_heading_2: [],
      about_heading_3: [],
      about_heading_color_1: '#424242',
      about_heading_color_2: '#424242',
      about_heading_color_3: '#424242'
    }
  },
  computed: {
    style() {
      return {
        width: '340px',
        height: '263px',
        backgroundImage: `url('https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/dev/demo/src/statics/bgimg.jpg')`, // eslint-disable-line
        textAlign: 'center',
        boxShadow: '1px 1px 2px #e6e6e6',
        display: 'inline-block'
      }
    },
    team_style() {
      return {
        width: '260px',
        height: '263px',
        backgroundImage: `url('https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/dev/demo/src/statics/bgimg.jpg')`, // eslint-disable-line
        textAlign: 'center',
        boxShadow: '1px 1px 2px #e6e6e6',
        display: 'inline-block'
      }
    }
  },
  methods: {
    openLink() {
      window.open('https://gracersclub.com/', "_blank");
    },
    scrollToElement(id) {
      let el = document.getElementById(id)
      const target = getScrollTarget(el)
      const offset = el.offsetTop + 3
      const duration = 900
      setScrollPosition(target, offset, duration)
    },
    changeBgColor() {
      this.theme_color = this.bg_color;
      this.background_style = 'background-color:' + this.bg_color.split(')')[0] + ',0.7)';
    },
    hoverOver: function (index) {
      this['about_heading_color_' + index] = this.theme_color;
      this['about_heading_' + index] = ['animated', 'bounceIn'];
    },
    hoverOutTimeout: function (index) {
      this['about_heading_color_' + index] = '#424242';
      setTimeout(() => {
        this['about_heading_' + index] = [];
      }, 1000);
    },
  }
}
</script>

<style lang="sass" scoped>
.body
  font-family: 'IBM Plex Sans', sans-serif

.main_line
  font-family: 'IBM Plex Sans', sans-serif
  font-size: 75px
  letter-spacing: 5px
  line-height: 60px
  font-weight: 600


.box-shadow:hover
  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12) !important;

.my-card
  width: 350px
  max-width: 350px
  margin-top: 10px

.quote
  background: url(~assets/images/parallax_df.jpg)
  background-size: cover
  background-position: center
  background-attachment: fixed
  background-repeat: no-repeat


.contact_us
  background: black
  background-size: cover
  background-position: center
  background-attachment: fixed
  background-repeat: no-repeat

.custom_tab
  font-family: 'IBM Plex Sans', sans-serif
  width: 130px
</style>

