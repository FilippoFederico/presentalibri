<template>
  <Layout>
    <!-- <div class="page_presentation">
      <h1>About us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    </div> -->
    <div class="card_div">
      <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="image">
        <div class="card_body">
        <h1>Event title</h1>
        <h3>Data e luogo</h3>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div>
            <div class="footer_card">
                <p class="footer_p">Vuoi partecipare? <br> <a href="https://www.eventbrite.it/">Registrati qui</a>  </p>
                <p class="footer_p">Autore: <br>  nome cognome</p>
            </div>
            <div class="ButtonPL">
                <g-link to="/"><ButtonPL textButtonPL="Back" /></g-link>
            </div>
        </div>
    </div>
  </Layout>
</template>

<script>
import ButtonPL from '@/components/ButtonPL.vue'


export default {
    name: 'events',
    components: {
        ButtonPL
    }
}
</script>

<style lang="scss" scoped>

$base-color: whitesmoke;
$box-shadow: 0 0 5px 0 rgba(0,0,0,0.20);

.page_presentation{
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
}
h1{
  margin-top: 0
}
.card_div{
  box-shadow: $box-shadow;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px
}
.footer_card{
    display: flex;
    justify-content: space-between;
    padding: 0 20px
}
img{
  width: 100%;
  margin-bottom: 10px;
}
.card_body{
    padding: 0 15px 10px 15px;
    background: whitesmoke;
    // margin: 10px;
    padding: 20px;
    // border-radius: 10px
    
    //// accorciare il testo
//   white-space: nowrap; 
//   width: 50%; 
//   overflow: hidden;
//   text-overflow: ellipsis; 
}
.ButtonPL{
    display: flex;
    justify-content: space-around
}
</style>
