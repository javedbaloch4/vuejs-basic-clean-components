export default {
  template: `
   <div>
    <span class="text-white">{{ assignment.name }}</span> <span class="text-xs text-white border px-1">{{assignment.tag}}</span>
    <input type="checkbox" class="ml-2" v-model="assignment.complete" />
   </div>
    `,

  props: {
    assignment: {
      type: Object,
    },
  },
};
