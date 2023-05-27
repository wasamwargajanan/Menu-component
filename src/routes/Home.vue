<template>
    <div>
        <v-container class="text-center">
            <h1 v-bind:style="{color:'maroon'}">Welcome to Pinamik Technology</h1>
            <h3 class="mt-10">plz log-in before heading to other page</h3>
            <v-row class="mt-6">
                <v-col cols="12" md="4">
                    <v-text-field label="enter your first-name" outlined dense></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field label="enter your last-name" outlined dense></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-combobox
                    :items="items"
                    outlined
                    dense
                    label="Choose your age "
                    multiple
                    ></v-combobox>
                </v-col>
            </v-row>

            <v-btn color="success">Submit</v-btn>
        </v-container>
    </div>
</template>

<script>
export default{
    name:'HomeVue',
    data(){
        return{
            items:['15 > 18', '18 > 30', '30 > 45', '45 > 60', 'other']
        }
    }
}
</script>