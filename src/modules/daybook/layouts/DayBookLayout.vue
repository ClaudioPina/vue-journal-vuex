<template>
    <Navbar />

    <div class="d-flex">
        <div class="col-4">
            <entry-list />
        </div>
        <div class="col">
            <router-view />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
// import EntryList from '../components/EntryList.vue'


export default {
    components: {
        Navbar: defineAsyncComponent(() => import("../components/NavBar")),
        EntryList: defineAsyncComponent(() => import("../components/EntryList"))
        
    }
}
</script>