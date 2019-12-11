<template>
    <layout>
      <Hero image="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80">
      </Hero>
      <div class="containerBtn">
        <div @click="showPromoLibro" class="forms">
          <Bottone textBottone="Promuovi libro" />
        </div>
        
        <div @click="showFormEvento" class="forms">
          <Bottone textBottone="Pubblica evento" />
        </div>
      </div>
      
      <!-- <p>click</p> -->
      <div class="q"><FormPromoLibro v-if="clickedPromoLibro" /></div>
      
      <FormEvento v-if="clickedEvento"/>
      
      <Post v-for="(post, index) in posts" :key="index" v-bind="post" />
    </layout>
</template>

<script>

const posts = [
  {
    id: 1,
    title: 'Blog post title',
    subtitle: 'post subtitle',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    author: 'Ciccio Benzina',
    date: new Date(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
    {
    id: 2,
    title: 'Blog post title',
    subtitle: 'post subtitle',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    author: 'Ciccio Benzina',
    date: new Date(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
    {
    id: 3, 
    title: 'Blog post title',
    subtitle: 'post subtitle',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    author: 'Ciccio Benzina',
    date: new Date(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
    {
    id: 4,
    title: 'Blog post title',
    subtitle: 'post subtitle',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    author: 'Ciccio Benzina',
    date: new Date(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]

import Hero from '@/components/Hero.vue'
import Post from '@/components/Post.vue'
import Input from '@/components/Input.vue'
import FormPromoLibro from '@/components/FormPromoLibro.vue'
import Bottone from '@/components/Bottone.vue'
import FormEvento from '@/components/FormEvento.vue'

    export default {
        name: 'home',
        components: {
          Hero,
          Post,
          Input,
          FormPromoLibro,
          Bottone,
          FormEvento
        },
        
        data(){
          return{
            posts,
            clickedPromoLibro: false,
            clickedEvento: false
            
          }
        },
        methods: {
          showPromoLibro() {
            this.clickedPromoLibro = !this.clickedPromoLibro
          },
          showFormEvento() {
            this.clickedEvento = !this.clickedEvento
          },
        }
    }
</script>
<style lang="scss" scoped>

.containerBtn{
  padding: 10px;
  position: relative;
  // z-index: -1;
  
}
.forms{
  // margin-bottom: 50px
}
</style>>
