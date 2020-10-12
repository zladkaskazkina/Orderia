<template>
    <v-container fluid class="supplier-order">
        <v-card class="pa-4">
            <v-card-title class="headline ma-2">
                <h2>Objednávka</h2>
            </v-card-title>
    <div class="customer-data">
            <v-row no-gutters>
                <span>Číslo objednávky:</span>
            </v-row>
            <v-row no-gutters>
                <span>Odběratel</span>
            </v-row>
            <v-row no-gutters>
                <span>Adresa</span>
            </v-row>
    </div>
    <v-divider></v-divider>

    <div class="order-main">
        <v-row no-gutters>
            <v-col>
                <span> </span>
                <span>KÓD PRODUKTU</span>
            </v-col>
            <v-col>
                <span>NÁZEV PRODUKTU</span>
            </v-col>
            <v-col>
                <span>KS</span>
            </v-col>
            <v-col>
                <span>CENA/ks</span>
            </v-col>
            <v-col>
                <span>CELKEM</span>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <!-- doplnovani polozek -->
        </v-row>
    </div>
    <v-divider></v-divider>
    <div>
        <v-row no-gutters>
            <span>DOPRAVA</span>
        </v-row>
        <v-row no-gutters>
            <!-- propisovat zvoleny typ dopravy -->
            <span>Zvoleny typ dopravy</span>
        </v-row>
        <v-row no-gutters>
            <v-col>
            <span>Celkem</span>
            </v-col>
            <v-col>
                <!-- doplnit soucet vsech polozek -->
                <span>Suma celkem</span>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col>
            <span>Doprava</span>
            </v-col>
            <v-col>
                <!-- doplnit suma za dopravu -->
                <span>Suma celkem</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <!-- doplnit celkovy soucet -->
            <span>Total</span>
            </v-col>
            <v-col>
                <span>Suma celkem</span>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-btn flat>PŘIJMOUT OBJEDNÁVKU</v-btn>
        </v-row>
    </div>


        </v-card>
    </v-container>
</template>

<script>
export default {
   
}
</script>

<style lang="scss" scoped>
.headline {
    justify-content: center;
}
</style>