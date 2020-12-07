<template>
  <div class="sensor-add">
    <b-breadcrumb :items="breadcrumbs" />
    <b-form @submit="onSubmit" class="sensor__form">
      <b-form-group
        id="description"
        label="Descrição"
        label-for="description"
        class="sensor__form-group"
      >
        <b-form-input
          required
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
          required
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
          required
          id="type"
          v-model="form.type"
          placeholder="Tipo"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Salvar</b-button>
    </b-form>
  </div>
</template>

<script>
import { createSensor } from "@/services/sensorServices";
export default {
  data() {
    return {
      form: {},
      breadcrumbs: [
        {
          text: "Sensores",
          href: "/",
        },
        {
          text: "Adicionar",
          href: "/add",
        },
      ],
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      await createSensor(this.form);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.sensor-add {
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
