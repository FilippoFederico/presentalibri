<template>
  <div class="post">
    <img :src="image" alt="image" />
    <div class="post_body">
        <h1>{{ title }}</h1>
        <h3>{{ subtitle }}</h3>
        <hr>
        <p>{{ text.substr(0, 200) + "..." }}</p>
        <div class="footer_post">
            <p>{{ formattedDate }}</p>
            <p>{{ author }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: "post",
  props: ["subtitle", "title", "author", "image", "date", "text"],
  computed: {
      formattedDate(){
          return dayjs(this.date).format('DD/MM/YYYY')
      }
  }
};
</script>
<style lang="scss" scoped>
.post{
    // border: 1px solid red;
    
    margin: 10px 0;
    padding: 10px;
    // background: gainsboro;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.20);
    // border-radius: 10px

}
.post_body{
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
img{
    width: 100%;
    margin-bottom: 10px;
    // border-radius: 10px

}
h1{
    margin: 0
}

.footer_post{
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    

}
</style>
