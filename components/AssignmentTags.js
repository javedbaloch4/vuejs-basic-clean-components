export default {
  template: `
        <div class="flex gap-2">
            <button 
                @click="$emit('change', tag)"
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-xs text-white"
                :class="{
                    'border-blue-500 text-blue-500': tag === currentTag
                }"
                >{{tag}}
            </button>
        </div>
    `,

  props: {
    initialTags: {
      type: Array,
    },
    currentTag: {
      type: String,
    },
  },

  computed: {
    tags() {
      return ["all", ...new Set(this.initialTags)];
    },
  },
};
