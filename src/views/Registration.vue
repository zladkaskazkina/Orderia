<template>
  <!-- Pro vyrobce -->
  <div id="registration">
    <h2>Přidejte se k nám</h2>
    <h3>
      Pokud chcete prodávat přes Orderii,
      <br />vytvořte si zde jednoduše svůj profil
    </h3>
    <form class="form-card" @submit.prevent="submitForm">
      <div class="form-input">
        <label for="brand">Název firmy</label>
        <input id="brand" name="brand" type="text" v-model.trim="userBrand" />
      </div>
      <div class="form-input">
        <label for="userID">IČO</label>
        <input id="userID" type="text" name="userID" v-model.number="userID" />
      </div>
      <div class="form-input">
        <label for>Kategorie zboží</label>
        <select name="category" id="category" v-model="category">
          <option value="food">Jídlo</option>
          <option value="drogery">Drogerie</option>
          <option value="toys">Hračky</option>
        </select>
      </div>
      <div class="form-input">
        <label for>Stránky</label>
        <input type="text" name />
      </div>
      <div class="form-input">
        <label for>Kontaktní osoba</label>
        <input type="text" name />
      </div>
      <div class="form-input">
        <label for>Kontaktní telefonní číslo</label>
        <input type="text" name />
      </div>
      <div class="form-input">
        <label for>Kontaktní e-mail</label>
        <input type="text" name />
      </div>
      <div class="form-input">
        <label for>Heslo</label>
        <input type="text" name />
      </div>
      <div class="card-action">
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Registration",
  data() {
    return {
      userBrand: "",
      userID: null,
      category: "food"
    };
  },
  methods: {
    submitForm() {
      console.log(this.userBrand);
    }
  }
};
</script>

<style lang="scss">
#registration {
  max-width: 700px;
  margin: 0 auto;
  padding: 2em 3em;
  border-radius: 5px;
  background: burlywood;
  box-shadow: 0 10px 6px -6px rgba(0, 0, 0, 0.2);
  text-align: center;
}
.form-card {
  width: 70%;
  margin: 0 auto;
}
.form-input {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  text-align: left;
}
label {
  flex: 1;
  margin: 1em;
}
input {
  width: 100%;
  border-radius: 5px;
  font-size: inherit;
  border: none;
  background: whitesmoke;
  padding: 0.4em;
  flex: 1.5;
}
</style>
