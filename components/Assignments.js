import AssignmentList from "./AssignmentList.js";
import AddAssignment from "./AddAssignment.js";
export default {
  template: `
    <section class="flex gap-8">
      <assignment-list :assignments="filter.inProgress" title="Progress">
        <add-assignment @addItem="add"></add-assignment>
      </assignment-list>

        <assignment-list 
          v-if="showCompleted"
          :assignments="filter.completed" 
          title="Completed" 
          can-toggle
          @toggle="showCompleted = !showCompleted"
        ></assignment-list>
    </section>
   `,

  components: {
    AssignmentList,
    AddAssignment,
  },

  data() {
    return {
      assignments: [],
      showCompleted: true,
    };
  },

  created() {
    fetch("http://localhost:3001/assignments")
      .then((response) => response.json())
      .then((assignments) => {
        this.assignments = assignments;
      });
  },

  computed: {
    filter() {
      return {
        inProgress: this.assignments.filter((a) => !a.complete),
        completed: this.assignments.filter((a) => a.complete),
      };
    },
  },

  methods: {
    add(name) {
      this.assignments.push({
        id: this.assignments[this.assignments.length - 1].id + 1,
        name: name,
        complete: false,
        tag: "reading",
      });
    },
  },
};
