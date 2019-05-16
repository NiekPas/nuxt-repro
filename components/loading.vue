<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations('loading', ['start', 'finish', 'increase']),
  },

  render() {
    return '';
  },
};
</script>
