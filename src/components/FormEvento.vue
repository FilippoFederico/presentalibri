<template>
    <div class="formPublish">
        <!-- <h1>promuovi libro</h1> -->
            <InputPL
            forLabel="mail"
            textLabel="Mail"
            typeInput="mail"
            nameInput="mail"
            idInput="mail"
            class="inputEl"
            />
            <InputPL
            forLabel="titolo"
            textLabel="Titolo evento"
            typeInput="text"
            nameInput="titolo"
            idInput="titolo"
            class="inputEl"
            />
            <InputPL
            forLabel="luogo"
            textLabel="Luogo"
            typeInput="text"
            nameInput="luogo"
            idInput="luogo"
            class="inputEl"
            />
            <InputPL
            forLabel="data"
            textLabel="Data"
            typeInput="date"
            nameInput="data"
            idInput="data"
            class="inputEl"
            />
            <div class="button">
                <ButtonPL class="ButtonPL " typeButtonPL="submit" textButtonPL="Invia richiesta" />
            </div>
            
    </div>
</template>

<script>
import InputPL from '@/components/InputPL.vue'
import ButtonPL from '@/components/ButtonPL.vue'

export default {
    name: 'form-event',
    components: {
        InputPL,
        ButtonPL
    }
}
</script>

<style lang="scss" scoped>
.formPublish{
    position: relative;
    z-index: 1;
    // margin-top: 10px;
    background: whitesmoke

}
div{
    height: 100px;
}
.inputEl{
    // border: 5px solid red;
    position: relative;
    top: 10px;
    bottom: 10px;
    border: whitesmoke 1px solid
}
.button{
    height: 50%;
    padding: 20px;
    background: whitesmoke;
    margin: 10px 0;
    border-bottom: 10px solid white;
}

</style>