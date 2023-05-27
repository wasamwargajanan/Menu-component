<template>
    <div>
        <v-container class="text-center">
            <h1 class="red--text">This is the <span class="indigo--text">Users</span> page which contains all the related info</h1>

            <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1 mt-6"
            show-select
            :single-select="singleSelect"
            item-key="name"
            >

            </v-data-table>
        </v-container>
    </div>
</template>

<script>
export default{
    name:'UsersVue',
    data(){
        return{
            singleSelect:true,
            headers:[
                {text: 'Name', align:'start', value:'name'},
                {text:'Designation', value:'designation'},
                {text: 'Salary', value:'salary'},
                {text:'Experience', value:'experience'}
            ],
            items:[
                {name:'Rakesh', designation:'Sr.developer', salary:12345676, experience:5},
                {name:'Laloo', designation:'Sr.developer', salary:12345676, experience:7},
                {name:'Ganesh', designation:'Sr.developer', salary:12345676, experience:4},
                {name:'Gajanan', designation:'Jr.developer', salary:12345676, experience:1},
                {name:'Gautam', designation:'Sr.developer', salary:12345676, experience:2}
            ]
        }
    }
}
</script>