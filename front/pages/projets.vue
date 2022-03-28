<template>
  <div>
      <section class="bg-light pt-5 pb-5 shadow-sm container">
          <div class="row">
            <div class="col-md-4 mb-3 cardProj">
                <div class="card bg-dark text-white">
                  <img src="~/assets/img/todolist.png" class="card-img" alt="...">
                  <div class="card-img-overlay">
                  </div>
                </div>
                <div class="barSite"></div>               
            </div>
            <div class="col-md-4 mb-3 cardProj">
                <div class="card bg-dark text-white">
                  <img src="~/assets/img/bnnbre.png" class="card-img" alt="...">
                </div> 
                <div class="barSite"></div>               
            </div>
            <div class="col-md-4 mb-3 cardProj">
                <div class="card bg-dark text-white">
                  <img src="~/assets/img/documentation.png" class="card-img" alt="...">
                  <div class="card-img-overlay">
                    <h5 class="card-title titleProj">Card title</h5>
                  </div>
                </div>
                <div class="barSite"></div>              
            </div>
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