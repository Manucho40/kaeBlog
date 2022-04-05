<template>
  <div>
      <section class="bg-light pt-5 pb-5 shadow-sm container">
          <div class="row">
            <a href="https://manucho40.github.io/todolist/" target="_blank" class="col-md-4 mb-3 cardProj">
                <div class="card bg-dark text-white">
                  <img src="~/assets/img/todolist.png" class="card-img" alt="...">
                  <span>To Do List</span>
                  <div class="card-img-overlay">
                  </div>
                </div>
                <div class="barSite"></div>               
            </a>
            <a href="https://manucho40.github.io/trouveLeNombre/" target="_blank" class="col-md-4 mb-3 cardProj">
                <div class="card bg-dark text-white">
                  <img src="~/assets/img/bnnbre.png" class="card-img" alt="...">
                  <span>Trouver le nombre</span>
                </div> 
                <div class="barSite"></div>               
            </a>
            <a href="https://manucho40.github.io/Documentation-/" target="_blank" class="col-md-4 mb-3 cardProj">
                <div class="card bg-dark text-white">
                  <img src="~/assets/img/documentation.png" class="card-img" alt="...">
                  <span>Documetation - Défis FreeCodeCamp</span>
                </div>
                <div class="barSite"></div>              
            </a>
            <a href="https://manucho40.github.io/manuDevRain/" target="_blank" class="col-md-4 mb-3 cardProj">
                <div class="card bg-dark text-white">
                  <img src="~/assets/img/rain.png" class="card-img" alt="...">
                  <span>
                    Source: <a style="color:aliceblue; text-decoration: none;" href="https://www.youtube.com/watch?v=-o4nvwN-ZwE&t=149s"> From Scratch - Développement Web</a>
                  </span>
                </div>
                <div class="barSite"></div>              
            </a>
          </div>
      </section>
    
  </div>
</template>

<script>
export default {
    layout: "header",
}
</script>
    
<style>
  .cardProj{
    cursor: pointer;
    transition: 300ms;

  }
  .titleProj{
    /* text-shadow: 2px 2px 2px #000; */
    font-weight: bold;
    color: #000;
  }
  .barSite{
    height: 2px;
    background: #000;
    width: 0%;
    transition: 500ms ease-in-out;
    
  }

  .cardProj:hover>.barSite{
    width: 100%;
  }
  .cardProj:hover{
    transform: translateY(-10px);
   
  }
</style>