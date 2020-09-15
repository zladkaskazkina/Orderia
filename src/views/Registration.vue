<template>
  <div id="registration">
    <h2>Přidejte se k nám</h2>
    <h3>
      Pokud chcete prodávat přes Orderii,<br />
      vytvořte si zde jednoduše svůj profil
    </h3>
    <form class="form-table">
      <div class="form-input">
        <label for="">Název firmy</label>
        <input type="text" name="" />
      </div>
      <div class="form-input">
        <label for="">IČO</label>
        <input type="text" name="" />
      </div>
      <div class="form-input">
        <label for="">Kategorie zboží</label>
        <input type="text" name="" />
      </div>
      <div class="form-input">
        <label for="">Stránky</label>
        <input type="text" name="" />
      </div>
      <div class="form-input">
        <label for="">Kontaktní osoba</label>
        <input type="text" name="" />
      </div>
      <div class="form-input">
        <label for="">Kontaktní telefonní číslo</label>
        <input type="text" name="" />
      </div>
      <div class="form-input">
        <label for="">Kontaktní e-mail</label>
        <input type="text" name="" />
      </div>
      <div class="form-input">
        <label for="">Heslo</label>
        <input type="text" name="" />
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Registration",
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
.form-table {
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
