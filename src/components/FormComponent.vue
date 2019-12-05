<template>
    <div>
        <form action="">
            <div class="form_input">
                <label for="firstname">Nome:</label>
                <input type="text" name="firstname" id="firstname">
            </div>
            <div class="form_input">
                <label for="lastname">Cognome:</label>
                <input type="text" name="lastname" id="lastname">
            </div>
            <div class="form_input">
                <label for="mail">Mail:</label>
                <input type="mail" name="mail" id="mail">
            </div>
            <div class="textarea">
                <label class="label_textarea" for="textarea">Text area:</label>
                <textarea name="message" rows="10" cols="30" id="textarea"></textarea>
            </div>
                <div class="button">
                <button type="submit" value="Submit">submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'form-component'
}
</script>

<style lang="scss" scoped>

$base-color: whitesmoke;
$box-shadow: 0 0 5px 0 rgba(0,0,0,0.20);


form{
  width: 100%;
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
.textarea{
    
  background: $base-color;
  padding: 10px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
label{
  margin: 10px 0 10px 0;
  
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
    display: flex;
    justify-content: center;
    
    background: $base-color
}

</style>