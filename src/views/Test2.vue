<template>
  <v-container>
    <supplierOrder />
  </v-container>
</template>

<script>
import SupplierOrder from "./../components/SupplierOrder.vue";

export default {
  name: "Test",
  components: {
    supplierOrder: SupplierOrder
  }
};
</script>

<style lang="scss" scoped>
</style>