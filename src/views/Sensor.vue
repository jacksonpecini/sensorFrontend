<template>
  <div class="Sensor">
    <b-breadcrumb :items="breadcrumbs" />
    <b-form @submit="onSubmit" class="sensor__form">
      <b-form-group
        id="description"
        label="Descrição"
        label-for="description"
        class="sensor__form-group"
      >
        <b-form-input
          id="description"
          v-model="form.description"
          placeholder="Descrição"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="brand"
        label="Marca"
        label-for="brand"
        class="sensor__form-group"
      >
        <b-form-input
          id="brand"
          v-model="form.brand"
          placeholder="Marca"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="type"
        label="tipo"
        label-for="type"
        class="sensor__form-group"
      >
        <b-form-input
          id="type"
          v-model="form.type"
          required
          placeholder="Tipo"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Salvar</b-button>
    </b-form>
  </div>
</template>

<script>
import { getSensorById, updateSensor } from "@/services/sensorServices";
export default {
  data() {
    return {
      form: {},
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const id = this.$route.params.id;
      const sensor = await getSensorById(id);
      this.form = sensor;
    },
    async onSubmit(e) {
      e.preventDefault();
      const id = this.$route.params.id;
      await updateSensor(id, this.form);
      this.$router.push("/");
    },
  },
  computed: {
    breadcrumbs() {
      return [
        {
          text: "Sensores",
          href: "/",
        },
        {
          text: this.$route.params.id,
          href: `/sensor/${this.$route.params.id}`,
        },
      ];
    },
  },
};
</script>

<style scoped>
.sensor {
  padding: 20px;
}
.sensor__form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.sensor__form-group {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
