<template>
    <div>
        <form action="">
            <div>
                <Input
                forLabel="firstname"
                textLabel="Nome"
                typeInput="text"
                nameInput="firstname"
                idInput="firstname"
                />
                <!-- <label for="firstname">Nome:</label>
                <input type="text" name="firstname" id="firstname"> -->
            </div>
            <div>
                <Input
                forLabel="lastname"
                textLabel="Cognome"
                typeInput="text"
                nameInput="lastname"
                idInput="lastname"
                />
                <!-- <label for="lastname">Cognome:</label>
                <input type="text" name="lastname" id="lastname"> -->
            </div>
            <div>
                <Input
                forLabel="mail"
                textLabel="Mail"
                typeInput="mail"
                nameInput="mail"
                idInput="mail"
                />
                <!-- <label for="mail">Mail:</label>
                <input type="mail" name="mail" id="mail"> -->
            </div>
            <div class="textarea">
                <label class="label_textarea" for="textarea">Text area:</label>
                <textarea name="message" rows="10" cols="30" id="textarea"></textarea>
            </div>
                <div class="button">
                  <Bottone
                  textBottone="Submit"
                  typeBottone="submit"
                  valueBottone="submit"
                  />
                <!-- <button type="submit" value="Submit">submit</button> -->
            </div>
        </form>
    </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Bottone from '@/components/Bottone.vue'

export default {
    name: 'form-component',
    components: {
      Input,
      Bottone
    }
}
</script>

<style lang="scss" scoped>

$base-color: whitesmoke;
$box-shadow: 0 0 5px 0 rgba(0,0,0,0.20);


form{
  width: 100%;
}
.div_input{
  // width: 80%;
  // margin-right: 0;
}
.form_input{
  margin-right: 0; 
  background: $base-color;
  padding: 10px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
}
input{
  width: 90%;
  height: 30px;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 15px;
  border: 1px solid white
  
}
label{
  margin: 10px 0 10px 0;
  
}
.textarea{
    
  background: $base-color;
  padding: 10px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

textarea{
    width: 90%;
  padding: 10px;
  font-size: 15px;
  border: 1px solid white;
  margin-top: 5px;
  margin-bottom: 5px;
}
button {
    border: 1px solid white;
    width: 60%;
    height: 40px;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
}
.button {
  margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    
    // background: $base-color
}
.button {
    
}
</style>