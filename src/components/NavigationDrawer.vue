<template>
  <div>
    <v-card class="mx-auto overflow-hidden" height="600px" width="100%">
      <v-app-bar color="deep-purple accent-4" height="205px" dark prominent>
        <v-navigation-drawer
          color="deep-purple accent-4"
          v-model="drawer"
          :mini-variant.sync="mini"
          permanent
          height="200px"
        >
          <v-list-item class="px-2">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-list-item-avatar>
              <v-img src="@/routes/React.webp"></v-img>
            </v-list-item-avatar>
            <v-list-item-title>React.Js</v-list-item-title>

            <v-btn icon @click.stop="mini = !mini">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon @click="addHome(item)">{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title @click="addHome(item)">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <h3 class="d-none d-md-block">Pinamik Technology</h3>
        <v-spacer></v-spacer>
        <h3 class="mt-sm-4 d-md-none">Pinamik Technology</h3>
        <ul class="lists d-md-flex d-none">
          <li class="lists-item mr-4" @click="clickHome">Home</li>
          <li class="mr-4" @click="clickAcount">Account</li>
          <li class="mr-4" @click="clickUsers">Users</li>
        </ul>

        <div class="d-none d-md-block ml-10">
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-filter</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </div>
      </v-app-bar>
      <router-view />
      <!-- <v-list  dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        
        <v-list-item v-for="(item) in items" :key="item.title">

            <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

            <v-list-item-title @click="addHome(item)">{{ item.title }}</v-list-item-title>
          </v-list-item>

    </v-list-item-group>
    </v-list> -->
    </v-card>

    <!-- <main>
           <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <h1>This is the default page </h1>
                </v-col>
                <v-col cols="12" md="6">
                    <h1>Below is the list of questions you need to solve</h1>
                </v-col>
            </v-row>
           </v-container>
        </main> -->
  </div>
</template>

<script>
export default {
  name: "NavigationDrawer",

  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
      drawer: false,
      group: null,
      mini: true,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    clickHome() {
      this.$router.push({
        name: "HomeVue",
      });
    },
    clickAcount() {
      this.$router.push({
        name: "AccountVue",
      });
    },
    clickUsers() {
      this.$router.push({
        name: "UsersVue",
      });
    },
    addHome(item) {
      if (item.title == "Home" || item.icon == "mdi-home-city") {
        this.$router.push({
          name: "HomeVue",
        });
      } else if (item.title == "My Account" || item.icon == "mdi-account") {
        this.$router.push({
          name: "AccountVue",
        });
      } else if (
        item.title == "Users" ||
        item.icon == "mdi-account-group-outline"
      ) {
        this.$router.push({
          name: "UsersVue",
        });
      }
    },
  },
};
</script>
<style>
.lists {
  list-style: none;
  font-size: 20px;
  margin-top: 10px;
}
.lists,
.lists-item {
  cursor: pointer;
  display: flex;
}
</style>
