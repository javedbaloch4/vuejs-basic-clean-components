import AssignmentList from "./AssignmentList.js";
import AddAssignment from "./AddAssignment.js";
export default {
  template: `
    <assignment-list :assignments="filter.inProgress" title="Progress"></assignment-list>
    <assignment-list :assignments="filter.completed" title="Completed"></assignment-list>

    <add-assignment @addItem="add"></add-assignment>

   `,

  components: {
    AssignmentList,
    AddAssignment,
  },

  data() {
    return {
      assignments: [
        { id: 1, name: "This is my todo", complete: false },
        { id: 2, name: "This is just perfect", complete: true },
        { id: 3, name: "I want to pick it up", complete: true },
      ],
    };
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
      });
    },
  },
};
