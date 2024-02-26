export default {
  template: `
    <div>
      <span class="text-white">{{ assignment.name }}</span>
      <input type="checkbox" class="ml-2" v-model="assignment.complete" />
    </div>
    `,

  props: {
    assignment: {
      type: Object,
    },
  },
};
