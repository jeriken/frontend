<template>
  <div class="buat">
    <div class="w-full max-w-xs m-auto">
      <form @submit.prevent="addData()" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Judul</label>
          <input
            id="judul"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Input Deskrispsi"
            v-model="form.judul"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Deskripsi">Deskripsi</label>
          <textarea
            id="desk"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Input Deskrispsi"
            v-model="form.deskripsi"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >Tambah</button>
        </div>
      </form>
    </div>
  </div>
</template>

<!-- script js -->
<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        judul: "",
        deskripsi: ""
      }
    };
  },
  methods: {
    addData() {
      // post data ke api menggunakan axios
      axios
      .post("http://localhost:8001/api/acara/", {
          judul: this.form.judul,
          deskripsi: this.form.deskripsi
        })
      .then(res => {
        if (res.data === "ok"){}
        this.$router.push("/");
        });
    }
  }
};
</script>