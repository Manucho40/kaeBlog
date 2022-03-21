<template>
  <div>
      <div class="sep">
          <h3>Abonne-toi à mon actu</h3>
          <form action="">
              <input type="text" placeholder="Votre Mail">
              <button>S'abonner</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Separateur',
}
</script>

<style>
    .sep{
        display: flex;
        justify-content: space-around;
       
        margin: 50px;
        padding: 30px;
        border-top: 1px solid;
        border-bottom: 1px solid;
    }

    form input{
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input:focus{
        border: none !important;
    }

    button{
        border: none;
        width: 200px;
        height: 40px;
        transition: 800ms;
        border-radius: 5px;
    }

    button:hover{
        background: black;
        color: white;
    }

     @media (max-width: 728px){
         .sep{
             display: flex;
             flex-direction: column;
         }
         form input{
          margin-bottom: 10px;
    }
     }
</style>