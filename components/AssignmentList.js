import Assignment from "./Assignment.js";

export default {
  template: `
    <section class="mt-8" v-show="assignments.length">
    <div class="flex justify-between items-center">
        <h3 class="text-lg font-semibold mb-4 text-white">{{title}}</h3>
        <span class="text-white">({{ assignments.length }})</span>
    </div>
        <ul>
            <li v-for="(assignment, index) in assignments" :key="index" class="border border-white p-2 flex items-center justify-between">
                <assignment :assignment="assignment"></assignment>  
            </li>
        </ul>
    </section>
    `,

  components: {
    Assignment,
  },

  props: {
    assignments: {
      type: Array,
    },
    title: {
      type: String,
    },
  },
};
