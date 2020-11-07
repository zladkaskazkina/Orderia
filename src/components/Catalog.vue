<template>
  <div></div>
</template>
<script>
import ProductItem from "ProductItem";
export default {
  name: Catalog,

  props: [],
  data() {
    return {
      products:[
        {
      id: 12345678,
      name: "Rohlik makovy",
      image: "rohlik-makovy.jpeg",
      price: 2.45,
      available: true
      },
        {
      id: 12345679,
      name: "Rohlik makovy",
      image: "rohlik-makovy.jpeg",
      price: 2.45,
      available: true
      },
        {
      id: 12345670,
      name: "Rohlik makovy",
      image: "rohlik-makovy.jpeg",
      price: 2.45,
      available: true
      }
      ]
    };
  },
};
</script>
