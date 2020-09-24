<template>
    <div class="productCard">
        <form class="form-card" id="productForm">
            <div class="input-field">
                <label for="productImage">Nahrajte fotografii</label>
                <input id="productImage" type="file" />
            </div>
            <div class="input-field">
                <label for="productName">Název</label>
                <input id="productName" type="text" />
            </div>
            <div class="input-field">
                <label for="productDescription">Popis</label>
                <textarea id="productDescription" maxlength=300> </textarea> 
            </div>
            <div class="dropdown-field">
                <label for="productAvailability">Dostupnost</label>
                <select id="productAvailability" name="dostupnost" size=2>
                    <option value="available">Skladem</option>
                    <option value="unavailable">Nedostupné</option>
                </select>
            </div>
            <div class="input-field">
                <label for="productStock">Skladové zásoby</label>
                <input id="productStock" type="number" />
            </div>
            <div class="input-field">
                <label for="productIngredients">Složení</label>
                <textarea id="productIngredients"></textarea> 
            </div>
            <div class="input-field">
                <label for="productVolume">Objem</label>
                <input id="productVolume" type="number" />
                <select id="volumeUnit" name="jednotka">
                    <!-- doplnit option value a dalsi jednotky -->
                    <option>ks</option>
                    <option>ml</option>
                    <option>l</option>
                    <option>g</option>
                    <option>kg</option>
                </select>
            <div class="input-field">
                <label for="productPrice">Základní cena</label>
                <input id="productPrice" type="number" />
            </div>
            <div class="input-field">
                <label for="vipPrice">Cena VIP partnera</label>
                <input id="vipPrice" type="number" />
            </div>
            <div class="input-field">
                <label for="individualPrice">Individualní cena</label>
                <input id="individualPrice" type="number" />
            </div>
            <div class="dropdown-field">
                <label for="VAT">DPH</label>
                <select id="VAT" name="VAT">
                    <!-- doplnit option value -->
                    <option>15%</option>
                    <option>21%</option>
                    <option>10%</option>
                    <option>bez DPH</option>
                </select>
            </div>
            <div class="input-field">
                <label for="recommendedPrice">Doporučená cena</label>
                <input id="recomenndedPrice" type="number" />
            </div>
            <div class="alergens">
                <span>Alergeny</span>
                <div class="checkbox-area">
                    <!-- uvadet jen cislo nebo cely nazev? jak zapsat name? -->
                    <input id="alergen1" type="checkbox" name="" value="1"/>
                    <input id="alergen1" type="checkbox" name=""  value="2"/>
                    <input id="alergen1" type="checkbox" name="" value="3"/>
                    <input id="alergen1" type="checkbox" name="" value="4"/>
                    <input id="alergen1" type="checkbox" name="" value="5"/>
                    <input id="alergen1" type="checkbox" name="" value="6"/>
                    <input id="alergen1" type="checkbox" name="" value="7"/>
                    <input id="alergen1" type="checkbox" name="" value="8"/>
                    <input id="alergen1" type="checkbox" name="" value="9"/>
                    <input id="alergen1" type="checkbox" name="" value="10"/>
                    <input id="alergen1" type="checkbox" name="" value="11"/>
                    <input id="alergen1" type="checkbox" name="" value="12"/>
                    <input id="alergen1" type="checkbox" name="" value="13"/>
                    <input id="alergen1" type="checkbox" name="" value="14"/>
                </div>
            </div>
            <div class="dropdown-field">
                <label for="productCategory">Kategorie</label>
                <select id="productCategory" name="productCategory" multiple="multiple">
                    <!-- navrh rozdeleni kategorii -->
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </div>
            <div class="input-field">
                <label for="productBarcode">Čárový kód</label>
                <input id="productBarcode" type="number" />
            </div>
        </form>
    </div>

</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
</style>