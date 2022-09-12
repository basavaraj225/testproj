
<template>
 
 <div class="username">

  <div class="header">
            <div class="headerrow">
            <div class="heradercol">
               <a target="_blank" href="https://github.com/"><img src="../assets/logoimg.png"></a> 
            </div>
            <div class="heradercolsearch">
              <label class="white">Search</label>
              <div>
                <input v-model="search" type="text"></div>
            </div>
            </div>

        </div>
        <h3> Top Users </h3>
        <div v-if="postlist.length > 0" class="">
  <div class="row">
   
    <div class="col3" v-for="userlist in postlist" :key="userlist.id">

        <div class="list">
          <img :src="userlist.avatar_url">
          <h4>{{userlist.login}}</h4>
          <a target="_blank" :href="userlist.html_url">github  </a>
        </div>


    </div></div>
  


  </div>

  <div v-else class="nopost">

No posts found 
</div>

  <div class="footer">
      <a target="_blank" href="https://github.com/"> <img src="../assets/footerlogo.png"> <br/>All rights are reserved 2022</a>
  </div>

 </div>
</template>
<script>
import axios from 'axios'

export default {
  data(){
    return{
      search:'',
      posts:[]
    }
  },

  computed:{
  
      postlist() {
        if (this.posts) {
          return this.posts.filter((person) => {
            return person.login.match(this.search);
          });
        }
        return false;
      }
  },

  created(){
    this.githubapi()
  },

  methods: {
    githubapi(){
      axios.get(
        `https://api.github.com/users`)
                    .then(response => {
                        this.posts = response.data
                    })
  
                    // Dealing with errors
                    .catch(error => {
                        console.log(error)
                        this.errored = true
                    })
            }
    }
  }

</script>

<style scoped>

  .footer {
    background-color: #333;
    padding: 10px;
    text-align: center;
    font-size: 12px;
   
  }

  h3{
    text-align: center;
    font-size: 22px;
  }

  .footer a{
    color: #fff;
    display: block;
    list-style: none;
  }

  .nopost {
    font-size: 18px;
    text-align: center;
    padding: 20px 0;
  }

  .footer img{
    width: 30px;
    height: 30px;
    filter: invert(1);
  }
.white{
  color: #fff;
}
  .username {
    width: 500px;
    margin: 0 auto;
  }
  .row{
    display: flex;
    flex-wrap: wrap;
  }
  .headerrow{
    display: flex;
    flex-wrap: wrap;
  }

  .header{
    background-color: #333;
    padding: 10px;
  }
  .heradercol img{
    width: 120px;
    height: 30px;
    filter: invert(1);
  }

  .heradercolsearch{
    margin-left: auto;
  }

  .col3 {
    text-align: center;
    padding: 15px 0px;
    width: 25%;
  }
  .list img{
    width: 50px;
    height: 50px;
    border-radius: 50px ;
  }
  .list h4{
    font-size: 16px;
    margin: 0;
  }

  .list a{
    font-size: 14px;
  }


</style>

