<template>
  <div
    v-for="project in filteredProjectOnId"
    :key="project.projectID"
    class="col-12 col-sm-6 col-md-4 mb-4"
  >
    <div class="toppen">
      <div class="left">
        <img
          id="billede"
          :src="project.projectURL"
          class="card-img-top"
          alt="..."
        />
      </div>

      <div class="right">
        <h1 class="headertekst">{{ project.projectundertitel }}</h1>
        <p>{{ project.projectforklaring }}</p>
      </div>
    </div>

    <div class="færdig">
      <div class="venstree">
        <h1 class="færdigtitel">{{ project.projectTitelfærdig }}</h1>
        <p class="oversigtbeskrivelse">{{ project.projectoversigt }}</p>
      </div>

      <div class="højree">
        <img
          v-show="project.projectCategory != 'Video'"
          id="billedefærdig"
          :src="project.projectbilledefærdig"
          class="card-img-top"
          alt="..."
        />

        <div v-show="project.projectCategory == 'Video'">
          <iframe width="420" height="315"
          :src="project.projectsVideo">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import getProjects from "../modules/getProjects";

export default {
  setup() {
    const route = useRoute();
    const routeId = ref(route.params.id);
    const { projects } = getProjects(); // 1

    let filteredProjectOnId = computed(() => {
      // using our route.params.id to only show data from the object with the same id
      return projects.value.filter((i) => i.projectID == routeId.value);
    });
    return {
      route,
      projects,
      filteredProjectOnId,
    };
  },
};
</script>



<style lang="scss" scoped>
* {
  width: 100%;
  margin: 0;
  padding: 0;
}

.toppen {
  display: flex;
  height: 75vh;
}

.left {
  width: 50%;
}
#billede {
  margin-top: 10%;
  width: 500px;
  height: auto;
}

.right {
  width: 50%;
  padding: 1% 5% 0 5%;
}

.headertekst {
  margin-top: 10%;
  text-align: left;
  font-family: "Roboto", sans-serif;
  margin-bottom: 3%;
}

.færdigtitel {
  padding: 2% 5% 0px 8%;
  font-family: "Roboto", sans-serif;
}

p {
  text-align: left;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
}

.færdig {
  margin-top: 5%;
  width: 100%;
  height: auto;
  display: flex;
}

.venstree {
  width: 50%;
}

h2 {
  margin-top: 5%;
  font-size: 20px;
}

.højree {
  width: 50%;
}

#billedefærdig {
  width: 600px;
  height: auto;
}

.oversigtbeskrivelse {
  margin-left: 0;
  padding: 3% 10% 0px 10%;
}
</style>