<template>
    <div class="bottone">
        <button :type="typeBottone" :value="valueBottone">{{textBottone}}</button>
    </div>
</template>

<script>
export default {
    name: 'bottone',
    props: {
        textBottone: {
            type: String,
            default: 'Click here!'
        },
        typeBottone: {
            type: String
        },
        valueBottone: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
.bottone{
    // border: 1px solid red;
    background: gainsboro;
    // height: 25px;
    // margin-top: 10px;
    padding: 10px 10px;
    text-align: center
    
}
button{
    font-size: 15px;
    background: transparent;
    border: none;
    
}
</style>