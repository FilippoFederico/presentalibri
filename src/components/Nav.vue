<template>
    <nav>
        <div class="logo">
            <p class="logo_name">presentalibri</p>
            <small>libri libri libri libri</small>
        </div>
        <div class="munu">
            <button @click="toggleDropdown">menu</button>
            <div class="dropdown" :class="{visible: visible}">
                <ul>
                    <li>blog</li>
                    <li>contatti</li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        name: 'navbar',
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

nav{
    // border: 1px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background: whitesmoke;
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
.munu{
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
    top: 40px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.20);
    min-width: 80px;

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
</style>