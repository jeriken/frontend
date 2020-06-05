<template>
  <div class="tampil">
    <div >
      <div class="flex mb-4">
        <div class="w-1/3 h-12" v-for="acara in acaras" :key="acara.id">
          <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
            <img class="w-full" src="../assets/img/card.jpg" alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ acara.judul }}</div>
              <p class="text-gray-700 text-base">{{ acara.deskripsi }}</p>
            </div>
            <div class="px-6 py-4">
              <router-link
                :to="'/ubah/'+acara.id"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >ubah</router-link>
              <button
                v-on:click="deleteData(acara.id)"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >hapus</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- script js -->
<script>
import axios from "axios";
export default {
  data() {
    return {
      // variable array yang akan menampung hasil fetch dari api
      acaras: []
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      // fetch data dari api menggunakan axios
      axios.get("http://localhost:8001/api/acara/").then(response => {
        // mengirim data hasil fetch ke varibale array acaras
        this.acaras = response.data;
      });
    },
    deleteData(id) {
      // delete data
      axios.delete("http://localhost:8001/api/acara/" + id)
      .then(res => {
        if (res.data === "ok"){}
        this.loadData();
        });
    }
  }
};
</script>
