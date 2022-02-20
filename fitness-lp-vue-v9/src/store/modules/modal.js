/**
 * Modal module
 * @example
 * this.$store.dispatch("modal/open", {
 *    component: "ConfirmAction",
 *    title: "Text for modal title",
 *    content: `Test for modal body.`,
 *    action: "store/action",
 *    route: { name: "OptionalReplaceRoute" }
 * });
 */

export const namespaced = true;

export const state = {
  isActive: false,
  component: null,
  title: null,
  content: null,
  action: null,
  route: null // Can use a route object is desired
};

export const mutations = {
  SET(state, modal) {
    state.component = modal.component;
    state.title = modal.title;
    state.content = modal.content;
    state.action = modal.action;
    state.route = modal.route;
  },
  CLEAR(state) {
    state.component = "";
    state.title = "";
    state.content = "";
    state.action = "";
    state.route = null;
  },
  MODAL_TRUE(state) {
    state.isActive = true;
  },
  MODAL_FALSE(state) {
    state.isActive = false;
  }
};

export const actions = {
  open({ commit }, modal) {
    commit("SET", modal);
    commit("MODAL_TRUE");
  },

  close({ commit }) {
    commit("MODAL_FALSE");
    commit("CLEAR");
  }
};

export const getters = {};
