export default {
  template: `
        <div class="bg-gray-700 gap-8 p-4 border border-gray-600 rounded-lg text-white">
            <h2 class="font-bold" v-if="$slots.heading">
                <slot name="heading"></slot>
            </h2>

            <slot></slot>

            <footer v-if="$slots.footer">
                <slot name="footer"></slot>
            </footer>
        </div>
    `,
};
