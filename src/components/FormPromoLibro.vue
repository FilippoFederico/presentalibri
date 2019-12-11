<template>
    <div class="formPublish">
        <!-- <h1>promuovi libro</h1> -->
        
            <Input
            forLabel="mail"
            textLabel="Mail"
            typeInput="mail"
            nameInput="mail"
            idInput="mail"
            />
            <Input
            forLabel="luogo"
            textLabel="Luogo della presentazione"
            typeInput="text"
            nameInput="luogo"
            idInput="luogo"
            />
            <Input
            forLabel="data"
            textLabel="Data"
            typeInput="text"
            nameInput="data"
            idInput="data"
            />

            <!-- <div>
                <Bottone />
            </div> -->
    </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Bottone from '@/components/Bottone.vue'

export default {
    name: 'form-promo-libro',
    components: {
        Input,
        Bottone
    }
}
</script>

<style lang="scss" scoped>
.formPublish{
    position: relative;
  z-index: 1;
  background: whitesmoke
}
div{
    height: 100px;
}

</style>