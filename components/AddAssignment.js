export default {
  template: `
    <form class="flex items-center mt-5" @submit.prevent="add">
        <input v-model="newAssignment" type="text" class="py-2 px-3 border border-gray-300  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-grow" placeholder="Enter text...">
        <button type="submit" class="ml-0 inline-flex items-center px-4 py-2 border-l-0 border-t border-b border-gray-300 shadow-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Add
        </button>
    </form>
    `,

  props: {
    assignments: {
      type: Array,
    },
  },

  data() {
    return {
      newAssignment: "",
    };
  },

  methods: {
    add() {
      this.$emit("addItem", this.newAssignment);
      this.newAssignment = "";
    },
  },
};
