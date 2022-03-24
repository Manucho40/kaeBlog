<template>
  <div class="container mt-5" id="contact">
      <div class="fleche">
          <!-- <fab :icon="['fab', 'up-long']" />
          <fab :icon="['fab', 'facebook']" /> -->
      </div>
      <h2 class="title">Écris moi un message pour me donner ton avis</h2>
       <form id="contactForm">

    <!-- Name input -->
    <div class="mb-3">
      <input class="form-control" id="name" type="text" placeholder="Nom" />
    </div>

    <!-- Email address input -->
    <div class="mb-3">
      <input class="form-control" id="emailAddress" type="email" placeholder="Email" />
    </div>

    <!-- Message input -->
    <div class="mb-3">
      <textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;"></textarea>
    </div>

    <!-- Form submit button -->
    <div class="d-grid">
      <button class="btn btn-primary" type="submit">Envoyer</button>
    </div>

  </form>

  </div>
</template>

<script>
export default {
    name: "ContactEnd",
}
</script>

<style>
    .title {
        text-align: center;
        font-size: 38px;
        font-weight: bold;
    }
    form{
        display: flex;
        flex-direction: column;
    }

</style>