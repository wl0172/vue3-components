import {
  init_vue_runtime_esm_bundler,
  vue_runtime_esm_bundler_exports
} from "./chunk-3FTGOXFB.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-J43GMYXM.js";

// node_modules/@wl0172/test-com/com.umd.js
var require_com_umd = __commonJS({
  "node_modules/@wl0172/test-com/com.umd.js"(exports, module) {
    (function(e, u) {
      typeof exports == "object" && typeof module < "u" ? module.exports = u((init_vue_runtime_esm_bundler(), __toCommonJS(vue_runtime_esm_bundler_exports))) : typeof define == "function" && define.amd ? define(["vue"], u) : (e = typeof globalThis < "u" ? globalThis : e || self, e.com = u(e.Vue));
    })(exports, function(e) {
      "use strict";
      const u = e.defineComponent({ props: ["jsonItem", "form"], setup(l, a) {
        const o = l.form, n = ({ item: t }) => e.createVNode(e.resolveComponent("el-input"), { modelValue: o[t.value], "onUpdate:modelValue": (r) => o[t.value] = r, placeholder: t.placeholder }, null), d = ({ item: t }) => e.createVNode(e.resolveComponent("el-select"), { style: "width: 100%", modelValue: o[t.value], "onUpdate:modelValue": (r) => o[t.value] = r, placeholder: t.placeholder }, { default: () => [t.option.length && t.option.map((r, b) => e.createVNode(e.resolveComponent("el-option"), { label: r.label, value: r.value }, null))] }), i = ({ item: t }) => e.createVNode(e.resolveComponent("el-date-picker"), { modelValue: o[t.value], "onUpdate:modelValue": (r) => o[t.value] = r, type: t.type, placeholder: t.placeholder, style: "width: 100%", "range-separator": "To", "start-placeholder": t.startPlaceholder, "end-placeholder": t.endPlaceholder }, null), f = ({ item: t }) => e.createVNode(e.resolveComponent("el-switch"), { modelValue: o[t.value], "onUpdate:modelValue": (r) => o[t.value] = r }, null), c = ({ item: t }) => e.createVNode(e.resolveComponent("el-checkbox-group"), { modelValue: o[t.value], "onUpdate:modelValue": (r) => o[t.value] = r }, { default: () => [t.option.length && t.option.map((r, b) => e.createVNode(e.resolveComponent("el-checkbox"), { label: r.label, name: "type" }, null))] }), s = ({ item: t }) => e.createVNode(e.resolveComponent("el-radio-group"), { modelValue: o[t.value], "onUpdate:modelValue": (r) => o[t.value] = r }, { default: () => [t.option.length && t.option.map((r, b) => e.createVNode(e.resolveComponent("el-radio"), { label: r.label }, null))] }), m = ({ item: t }) => e.createVNode(e.resolveComponent("el-input"), { type: t.type, modelValue: o[t.value], "onUpdate:modelValue": (r) => o[t.value] = r, placeholder: t.placeholder }, null);
        return () => {
          const t = l.jsonItem;
          return e.createVNode(e.Fragment, null, [t.name == "input" && e.createVNode(n, { item: t }, null), t.name == "select" && e.createVNode(d, { item: t }, null), t.name == "date" && e.createVNode(i, { item: t }, null), t.name == "switch" && e.createVNode(f, { item: t }, null), t.name == "checkbox-group" && e.createVNode(c, { item: t }, null), t.name == "radio-group" && e.createVNode(s, { item: t }, null), t.name == "textarea" && e.createVNode(m, { item: t }, null)]);
        };
      } }), w = "", V = ((l, a) => {
        const o = l.__vccOpts || l;
        for (const [n, d] of a)
          o[n] = d;
        return o;
      })(Object.assign({ name: "ComForm" }, { props: { formStyle: { type: Object, default: { width: "", inline: false }, required: true }, json: { type: Object, default: {}, required: true }, rules: { type: Object, default: {}, required: false }, labelWidth: { type: String, default: "120px", required: false }, statusIcon: { type: String, default: "status-icon", required: false }, size: { type: String, default: "default", required: false }, labelPosition: { type: String, default: "right", required: false }, disabled: { type: Boolean, default: false, required: false }, buttonStyle: { type: String, default: "left", required: false } }, setup(l) {
        const a = l, o = e.ref(), n = e.reactive({}), { json: d } = e.toRefs(a), { rules: i } = e.toRefs(a);
        return (f, c) => {
          const s = e.resolveComponent("el-form-item"), m = e.resolveComponent("el-button"), y = e.resolveComponent("el-form");
          return e.openBlock(), e.createElementBlock("div", { class: "formCom", style: e.normalizeStyle(l.formStyle) }, [e.createVNode(y, { inline: l.formStyle.inline, model: n, rules: e.unref(i), ref_key: "ruleFormRef", ref: o, "label-width": l.labelWidth, "status-icon": l.statusIcon, size: l.size, "label-position": l.labelPosition, disabled: l.disabled }, { default: e.withCtx(() => [(e.openBlock(true), e.createElementBlock(e.Fragment, null, e.renderList(e.unref(d), (t) => (e.openBlock(), e.createBlock(s, { label: t.title, prop: t.value, form: n, key: t }, { default: e.withCtx(() => [e.createVNode(e.unref(u), { jsonItem: t, form: n }, null, 8, ["jsonItem", "form"])]), _: 2 }, 1032, ["label", "prop", "form"]))), 128)), e.createVNode(s, null, { default: e.withCtx(() => [e.createElementVNode("div", { class: "buttonStyle", style: e.normalizeStyle({ justifyContent: l.buttonStyle }) }, [e.createVNode(m, { onClick: c[0] || (c[0] = (t) => f.$emit("handleCancel", { form: n, ruleFormRef: o.value })) }, { default: e.withCtx(() => [e.createTextVNode("\u53D6\u6D88")]), _: 1 }), e.createVNode(m, { type: "primary", onClick: c[1] || (c[1] = (t) => f.$emit("handleOnSubmit", { form: n, ruleFormRef: o.value })) }, { default: e.withCtx(() => [e.createTextVNode("\u786E\u5B9A")]), _: 1 })], 4)]), _: 1 })]), _: 1 }, 8, ["inline", "model", "rules", "label-width", "status-icon", "size", "label-position", "disabled"])], 4);
        };
      } }), [["__scopeId", "data-v-3c9c1fc2"]]), C = { style: { flex: "auto" } }, h = Object.assign({ name: "ComDrawer" }, { props: { drawerShow: { type: Boolean, default: false, required: true }, direction: { type: String, default: "ltr", required: true }, title: { type: String, default: "", required: false }, size: { type: String, default: "30%", required: false }, template: { type: Array, default: [], required: false }, lockScroll: { type: Boolean, default: true, required: false }, bottomTxt: { type: Array, default: ["\u53D6\u6D88", "\u786E\u8BA4"], required: false }, vnode: { default: [], required: false } }, setup(l) {
        const a = l, o = e.useSlots();
        let { drawerShow: n } = e.toRefs(a);
        return e.watch(n, (d) => {
          n = d;
        }), (d, i) => {
          const f = e.resolveComponent("el-button"), c = e.resolveComponent("el-drawer");
          return e.openBlock(), e.createElementBlock("div", null, [e.createVNode(c, { modelValue: e.unref(n), "onUpdate:modelValue": i[2] || (i[2] = (s) => e.isRef(n) ? n.value = s : n = s), size: a.size, title: e.unref(o).header ? null : l.title, direction: l.direction, "before-close": () => d.$emit("cancelClick"), "show-close": !e.unref(o).header, "lock-scroll": a.lockScroll }, { header: e.withCtx(() => [e.renderSlot(d.$slots, "header")]), footer: e.withCtx(() => [e.createElementVNode("div", C, [e.createVNode(f, { onClick: i[0] || (i[0] = (s) => d.$emit("cancelClick")) }, { default: e.withCtx(() => [e.createTextVNode(e.toDisplayString(a.bottomTxt[0]), 1)]), _: 1 }), e.createVNode(f, { type: "primary", onClick: i[1] || (i[1] = (s) => d.$emit("confirmClick")) }, { default: e.withCtx(() => [e.createTextVNode(e.toDisplayString(a.bottomTxt[1]), 1)]), _: 1 })])]), default: e.withCtx(() => [e.renderSlot(d.$slots, "content")]), _: 3 }, 8, ["modelValue", "size", "title", "direction", "before-close", "show-close", "lock-scroll"])]);
        };
      } }), g = Object.assign({ name: "ComPopover" }, { props: { placement: { type: String, default: "top-start", required: false }, title: { type: String, default: "title", required: false }, width: { type: String || Number, default: "200", required: false }, trigger: { type: String, default: "click", required: false }, disabled: { type: Boolean, default: false, required: false }, effect: { type: String, default: "light", required: false }, visible: { type: Boolean, default: false, required: false }, offset: { type: Number, default: 10, required: false }, type: { type: Object, default: {}, required: false } }, setup(l, { expose: a }) {
        const o = e.ref(null);
        return a({ comPopover: o }), (n, d) => {
          const i = e.resolveComponent("el-popover");
          return e.openBlock(), e.createElementBlock("div", null, [e.createVNode(i, { placement: Object.keys(l.type).includes("placement") ? l.type.placement : l.placement, title: Object.keys(l.type).includes("title") ? l.type.title : l.title, width: Object.keys(l.type).includes("width") ? l.type.width : l.width, trigger: Object.keys(l.type).includes("trigger") ? l.type.trigger : l.trigger, disabled: Object.keys(l.type).includes("disabled") ? l.type.disabled : l.disabled, effect: Object.keys(l.type).includes("effect") ? l.type.effect : l.effect, "v-visible": Object.keys(l.type).includes("visible") ? l.type.visible : l.visible, offset: Object.keys(l.type).includes("offset") ? l.type.offset : l.offset, ref_key: "comPopover", ref: o }, { reference: e.withCtx(() => [e.renderSlot(n.$slots, "reference")]), default: e.withCtx(() => [e.renderSlot(n.$slots, "content")]), _: 3 }, 8, ["placement", "title", "width", "trigger", "disabled", "effect", "v-visible", "offset"])]);
        };
      } }), N = e.defineComponent({ name: "ComAaJsx", props: ["test"], setup(l, a) {
        const o = () => e.createVNode("div", null, [e.createTextVNode("\u6211\u662Faa"), l.test]);
        return () => e.createVNode("div", null, [e.createVNode(o, null, null)]);
      } }), x = e.defineComponent({ name: "ComBbJsx", props: ["test"], setup(l, a) {
        const o = () => e.createVNode("div", null, [e.createTextVNode("\u6211\u662Fbb"), l.test]);
        return () => e.createVNode("div", null, [e.createVNode(o, null, null)]);
      } }), k = [V, h, g, N, x], p = (l) => {
        p.installed || k.map((a) => l.component(a.name, a));
      };
      return p;
    });
  }
});

export {
  require_com_umd
};
//# sourceMappingURL=chunk-FSX5NPSU.js.map
