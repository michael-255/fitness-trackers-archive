<template lang="pug">
  div.my-1
    v-icon timer
    span.lower-text(v-if="!begin && !duration")
      span &nbsp; -
    span.lower-text(v-else)
      span(v-show="hours > 0") &nbsp; {{ hours }}
      span(v-show="hours > 0").overline H
      span(v-show="minutes > 0") &nbsp; {{ minutes }}
      span(v-show="minutes > 0").overline M
      span(v-show="seconds > 0") &nbsp; {{ seconds }}
      span(v-show="seconds > 0").overline S
</template>

<script>
import { DateTime, Interval } from "luxon";

/**
 * Provide begin prop for a live timer
 * Provide duration prop for a static duration time display
 */
export default {
  name: "Timer",
  props: {
    begin: {
      type: String,
      default: null
    },
    duration: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      timerId: null,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },

  created() {
    const beginDT = DateTime.fromISO(this.begin);

    if (this.duration) {
      // Display the provided static duration
      const { hours, minutes, seconds } = this.duration;

      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds.toString().split(".")[0];
    } else if (this.begin) {
      // Setting an interval for a live timer with provided begin time
      this.timerId = setInterval(() => {
        const nowDT = DateTime.local(); // Not from ISO

        const timeObject = Interval.fromDateTimes(beginDT, nowDT)
          .toDuration(["hours", "minutes", "seconds"])
          .toObject();

        this.hours = timeObject.hours;
        this.minutes = timeObject.minutes;
        this.seconds = timeObject.seconds.toString().split(".")[0];
      }, 1000);
    } else {
      // Do nothing
    }
  },

  destroyed() {
    clearInterval(this.timerId);
  }
};
</script>

<style lang="stylus" scoped>
.lower-text
  vertical-align sub
</style>
