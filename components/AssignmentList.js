import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {
  template: `
    <Panel class="border border-gray-500 text-white bg-gray-600 p-4 rounded-lg" v-show="show && assignments.length">
      <div class="flex justify-between items-start">
          <h3 class="text-lg font-semibold mb-4">
          {{title}}
          ({{ assignments.length }})
          </h3>
          <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
      </div>

      <assignment-tags 
        :initial-tags="assignments.map(a => a.tag)"
        :current-tag="currentTag"
        @change="currentTag = $event"
        ></assignment-tags>

      <ul class="mt-5 mb-5">
          <li 
            v-for="(assignment, index) in filteredAssignments" 
            :key="index" class="border border-white p-2 flex items-center justify-between">
              <assignment :assignment="assignment" :key="assignment.id"></assignment>  
          </li>
      </ul>

      <slot></slot>
    </section>
    `,

  components: {
    Assignment,
    AssignmentTags,
    Panel,
  },

  props: {
    assignments: {
      type: Array,
    },
    title: {
      type: String,
    },
    canToggle: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      currentTag: "all",
      show: true,
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
