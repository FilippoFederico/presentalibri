<template>
    <nav>
        <g-link class="routers" to="/"><div class="logo">
            <p class="logo_name">presentalibri</p>
            <small>libri libri libri libri</small>
        </div></g-link>
        <div class="menu">
            <div @click="toggleDropdown">
                <Bottone textBottone="menu" />
            </div>
            <!-- <button>menu</button> -->
            <div class="dropdown" :class="{visible: visible}">
                <ul>
                    <g-link class="routers" to="/about/"><li>blog libri</li></g-link>
                    <g-link class="routers" to="/contatti/"><li>contatti</li></g-link>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import Bottone from '@/components/Bottone.vue'

    export default {
        name: 'navbar',
        components: {
            Bottone
        },
        data(){
            return {
                visible: false
            }
        },
        methods: {
            toggleDropdown(){
                this.visible = !this.visible
            }
        }

    }
</script>
<style lang="scss" scoped>

$box-shadow: 0 0 5px 0 rgba(0,0,0,0.20);

nav{
    // border: 1px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background: whitesmoke;
    position: sticky;
    top: 6px;
    z-index: 2;
    box-shadow: $box-shadow
    
}
.logo{
    // border: 1px solid red;
    padding: 10px 20px;
}
.logo_name{
    font-size: 30px;
    padding: 0;
    margin: 0 
}
.menu{
    // border: 1px solid red;
    position: relative;
    
}
button{
    // border: 1px solid red;
    background: gainsboro;
}
.dropdown{
    display: none;
    position: absolute;
    right: 0;
    text-align: right;
    background: white;
    border-radius: 5px;
    padding: 0 10px;
    top: 50px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.20);
    min-width: 80px;
    z-index: 1;

     &.visible {
        display: block;
    }

        @media (min-width: 768px){
        position: static;
        display: block;
}
    
}
ul{
    // border: 1px solid red;
    list-style: none;
    padding: 0;
    width: 100%;
    

}
li{
    border-bottom: 1px solid gainsboro;
    padding: 8px 0;
}
.routers {
    text-decoration: none;
    color: black
}
</style>