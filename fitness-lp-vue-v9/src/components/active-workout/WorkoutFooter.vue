<template lang="pug">
  v-footer(app color="primary")
      v-spacer
      Timer(:begin="begin")
      v-spacer
</template>

<script>
import Timer from "../general-ui/Timer";
import { DateTime } from "luxon";

export default {
  name: "WorkoutFooter",
  components: {
    Timer
  },
  props: {
    begin: {
      type: String,
      default: DateTime.local().toISO()
    }
  }
};
</script>
