import Vue from "vue";

/**
 * EventBusService
 *
 * This service creates an empty Vue instance that has access to some utilities
 * you might find useful. Use the Event Bus Service to comunicate between parts
 * of your code that can't easily communicate with each other. However, you
 * should only use this as a last resort as it could make your code confusing.
 *
 * @param {string} eventChannel The channel to emit or listen to the event on
 * @param {string} payload The data being sent over the channel
 *
 * @example
 * import EventBusService from "../path/to/event-bus";
 * EventBusService.$emit("channelName", payload); // send event
 * EventBusService.$on("channelName", payload => console.log(payload) ); // listen for event
 * EventBusService.$off("channelName", eventHandler ); // stop listening to channel
 * EventBusService.$off(); // stop listening to all channels
 */
const EventBusService = new Vue();

export default EventBusService;
