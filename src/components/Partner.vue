<template>
  <v-col cols="4">
    <v-card class="mx-auto" max-width="400">
      <div class="text-center">
        <v-avatar size="56" class="mt-8">
          <img alt="user" :src="partner.src" />
        </v-avatar>
      </div>

      <v-card-title>{{ partner.title }}</v-card-title>

      <v-card-subtitle class="pb-0">
        {{ partner.city }}
      </v-card-subtitle>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ml-4">
            4.5 (413)
          </div>
        </v-row>

        <div class="my-4 subtitle-1">
          on-line supermarket
        </div>

        <div>
          Nakupujte vše, co potřebujete, na jedné stránce
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Pravidelne objednavky</v-card-title>

      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>Pondeli</v-chip>

          <v-chip>Streda</v-chip>

          <v-chip>Patek</v-chip>

          <v-chip>Sobota</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="reserve">
          Napsat
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
export default {};
</script>
