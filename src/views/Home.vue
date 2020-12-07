<template>
  <div class="home">
  <header class="header">
  <b-breadcrumb :items="breadcrumbs" />
  <b-button variant="success" class="add-sensor" @click="add">Adicionar</b-button>
  </header>
    <b-table striped hover :items="items" :fields="fields" :busy="isLoading">
      <template #cell(actions)="data">
        <b-button-group>
          <b-button variant="primary" @click="editSensor(data)">
            Editar
          </b-button>
          <b-button variant="danger" @click="deleteSensor(data)">
            Deletar
          </b-button>
        </b-button-group>
      </template>
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import {getAllSensors, deleteSensor} from "@/services/sensorServices";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      isLoading: true,
      fields: [
        {
          key: "description",
          label: "Descrição",
        },
        {
          key: "brand",
          label: "Marca",
        },
        {
          key: "type",
          label: "Tipo",
        },
        {
          key: "actions",
          label: "",
        },
      ],
      items: [],
      breadcrumbs:[
        {
          text: "Sensores",
          href: "/",
        },
      ],
    };
  },
  created(){
    this.loadData();

  },
  methods: {
    async loadData(){
      const sensors = await getAllSensors();
      this.items = sensors;
      this.isLoading = false;
    },
    editSensor(data) {
      this.$router.push(`/sensor/${data.item.id}`);
    },
    async deleteSensor(data) {
      console.log("delete sensor", data);
      await deleteSensor(data.item.id);
      window.location.href = "/"
    },
    add(){
    this.$router.push(`/add/`);
    },
  },
};
</script>

<style scoped>
.header{
  position: relative;
}
.add-sensor{
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>