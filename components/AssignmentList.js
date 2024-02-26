import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
  template: `
    <section class="mt-8" v-show="assignments.length">
      <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold mb-4 text-white">{{title}}</h3>
          <span class="text-white">({{ assignments.length }})</span>
      </div>

      <assignment-tags 
        :initial-tags="assignments.map(a => a.tag)"
        :current-tag="currentTag"
        @change="currentTag = $event"
        ></assignment-tags>

      <ul class="mt-5">
          <li 
            v-for="(assignment, index) in filteredAssignments" 
            :key="index" class="border border-white p-2 flex items-center justify-between">
              <assignment :assignment="assignment" :key="assignment.id"></assignment>  
          </li>
      </ul>
    </section>
    `,

  components: {
    Assignment,
    AssignmentTags,
  },

  props: {
    assignments: {
      type: Array,
    },
    title: {
      type: String,
    },
  },

  data() {
    return {
      currentTag: "all",
    };
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag === "all") {
        return this.assignments;
      }
      return this.assignments.filter((a) => a.tag === this.currentTag);
    },
  },
};
