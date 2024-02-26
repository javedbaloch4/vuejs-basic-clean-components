export default {
  template: `
      <form @submit.prevent="add">
        <div class="border border-gray-600 text-black flex">
          <input v-model="newAssignment" type="text" required class="py-2 px-3" placeholder="Enter text...">
          <button type="submit" class="ml-0  items-center px-4 py-2 border-l-0 border-t border-b border-gray-300 shadow-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add
          </button>
        </div>
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
