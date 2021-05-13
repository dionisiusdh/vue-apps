<template>
  <div class="job-list">
    <p>Ordered by {{ capitalize(order) }}</p>
    <transition-group name="list" tag="ul">
      <li v-for="job in orderedJobs" :key="job.id">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
          <img
            src="https://i.pinimg.com/originals/fa/89/9b/fa899be5c1fb3d211dddafe18b8e42bc.jpg"
            alt="salary"
          />
          <p>${{ job.salary }}</p>
        </div>
        <div class="description">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            libero tenetur distinctio vitae fugiat dolorem! Ad laudantium porro
            impedit deleniti cum similique suscipit unde dicta consequatur. Ad
            facilis laborum quam!
          </p>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import Job from "../types/Job";
import OrderTerm from "../types/OrderTerm";

export default defineComponent({
  name: "JobList",
  props: {
    jobs: {
      require: true,
      type: Array as PropType<Job[]>,
      default: () => [],
    },
    order: {
      require: true,
      type: String as PropType<OrderTerm>,
      default: () => "",
    },
  },
  setup(props) {
    const capitalize = (str: string) => {
      return str[0].toUpperCase() + str.slice(1, str.length);
    };

    // computed is similiar to useEffect in React
    const orderedJobs = computed(() => {
      return [...props.jobs].sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1;
        // return -1 : remains the same
        // return 1 : switch the element
      });
    });

    return { capitalize, orderedJobs };
  },
});
</script>

<style scoped>
.job-list {
  max-width: 960px;
  margin: 40px auto;
}

.job-list > p {
  font-style: italic;
}

.job-list ul {
  padding: 0;
}

.job-list li {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 8px;
  box-shadow: 5px 6px 15px -10px rgba(0, 0, 0, 0.7);
  transition: 0.3s;
  cursor: pointer;
}

.job-list li:hover {
  transform: scale(1.01);
  transition: 0.3s;
}

.job-list h2 {
  margin: 0 0 10px;
  text-transform: capitalize;
}

.salary {
  display: flex;
}

.salary img {
  width: 30px;
}

.salary p {
  color: #17bf66;
  font-weight: bold;
  margin: 10px 4px;
}

.list-move {
  transition: all 1s;
}
</style>
