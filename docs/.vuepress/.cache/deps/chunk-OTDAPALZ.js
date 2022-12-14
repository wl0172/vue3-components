import {
  Fragment,
  createBaseVNode,
  createBlock,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  init_vue_runtime_esm_bundler,
  isRef,
  openBlock,
  reactive,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  toRefs,
  unref,
  useSlots,
  watch,
  withCtx
} from "./chunk-3FTGOXFB.js";
import {
  normalizeStyle,
  toDisplayString
} from "./chunk-RSLUYNG7.js";

// node_modules/@wl0172/test-com/com.es.js
init_vue_runtime_esm_bundler();
var P = defineComponent({
  props: ["jsonItem", "form"],
  setup(t, a) {
    const n = t.form, o = ({
      item: e
    }) => createVNode(resolveComponent("el-input"), {
      modelValue: n[e.value],
      "onUpdate:modelValue": (r) => n[e.value] = r,
      placeholder: e.placeholder
    }, null), d = ({
      item: e
    }) => createVNode(resolveComponent("el-select"), {
      style: "width: 100%",
      modelValue: n[e.value],
      "onUpdate:modelValue": (r) => n[e.value] = r,
      placeholder: e.placeholder
    }, {
      default: () => [e.option.length && e.option.map((r, q) => createVNode(resolveComponent("el-option"), {
        label: r.label,
        value: r.value
      }, null))]
    }), s = ({
      item: e
    }) => createVNode(resolveComponent("el-date-picker"), {
      modelValue: n[e.value],
      "onUpdate:modelValue": (r) => n[e.value] = r,
      type: e.type,
      placeholder: e.placeholder,
      style: "width: 100%",
      "range-separator": "To",
      "start-placeholder": e.startPlaceholder,
      "end-placeholder": e.endPlaceholder
    }, null), m = ({
      item: e
    }) => createVNode(resolveComponent("el-switch"), {
      modelValue: n[e.value],
      "onUpdate:modelValue": (r) => n[e.value] = r
    }, null), f = ({
      item: e
    }) => createVNode(resolveComponent("el-checkbox-group"), {
      modelValue: n[e.value],
      "onUpdate:modelValue": (r) => n[e.value] = r
    }, {
      default: () => [e.option.length && e.option.map((r, q) => createVNode(resolveComponent("el-checkbox"), {
        label: r.label,
        name: "type"
      }, null))]
    }), c = ({
      item: e
    }) => createVNode(resolveComponent("el-radio-group"), {
      modelValue: n[e.value],
      "onUpdate:modelValue": (r) => n[e.value] = r
    }, {
      default: () => [e.option.length && e.option.map((r, q) => createVNode(resolveComponent("el-radio"), {
        label: r.label
      }, null))]
    }), v = ({
      item: e
    }) => createVNode(resolveComponent("el-input"), {
      type: e.type,
      modelValue: n[e.value],
      "onUpdate:modelValue": (r) => n[e.value] = r,
      placeholder: e.placeholder
    }, null);
    return () => {
      const e = t.jsonItem;
      return createVNode(Fragment, null, [e.name == "input" && createVNode(o, {
        item: e
      }, null), e.name == "select" && createVNode(d, {
        item: e
      }, null), e.name == "date" && createVNode(s, {
        item: e
      }, null), e.name == "switch" && createVNode(m, {
        item: e
      }, null), e.name == "checkbox-group" && createVNode(f, {
        item: e
      }, null), e.name == "radio-group" && createVNode(c, {
        item: e
      }, null), e.name == "textarea" && createVNode(v, {
        item: e
      }, null)]);
    };
  }
});
var R = (t, a) => {
  const n = t.__vccOpts || t;
  for (const [o, d] of a)
    n[o] = d;
  return n;
};
var T = {
  name: "ComForm"
};
var A = Object.assign(T, {
  props: {
    formStyle: {
      type: Object,
      default: {
        width: "",
        inline: false
      },
      required: true
    },
    json: {
      type: Object,
      default: {},
      required: true
    },
    rules: {
      type: Object,
      default: {},
      required: false
    },
    labelWidth: {
      type: String,
      default: "120px",
      required: false
    },
    statusIcon: {
      type: String,
      default: "status-icon",
      required: false
    },
    size: {
      type: String,
      default: "default",
      required: false
    },
    labelPosition: {
      type: String,
      default: "right",
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    buttonStyle: {
      type: String,
      default: "left",
      required: false
    }
  },
  setup(t) {
    const a = t, n = ref(), o = reactive({}), { json: d } = toRefs(a), { rules: s } = toRefs(a);
    return (m, f) => {
      const c = resolveComponent("el-form-item"), v = resolveComponent("el-button"), S = resolveComponent("el-form");
      return openBlock(), createElementBlock("div", {
        class: "formCom",
        style: normalizeStyle(t.formStyle)
      }, [
        createVNode(S, {
          inline: t.formStyle.inline,
          model: o,
          rules: unref(s),
          ref_key: "ruleFormRef",
          ref: n,
          "label-width": t.labelWidth,
          "status-icon": t.statusIcon,
          size: t.size,
          "label-position": t.labelPosition,
          disabled: t.disabled
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(d), (e) => (openBlock(), createBlock(c, {
              label: e.title,
              prop: e.value,
              form: o,
              key: e
            }, {
              default: withCtx(() => [
                createVNode(unref(P), {
                  jsonItem: e,
                  form: o
                }, null, 8, ["jsonItem", "form"])
              ]),
              _: 2
            }, 1032, ["label", "prop", "form"]))), 128)),
            createVNode(c, null, {
              default: withCtx(() => [
                createBaseVNode("div", {
                  class: "buttonStyle",
                  style: normalizeStyle({ justifyContent: t.buttonStyle })
                }, [
                  createVNode(v, {
                    onClick: f[0] || (f[0] = (e) => m.$emit("handleCancel", { form: o, ruleFormRef: n.value }))
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u53D6\u6D88")
                    ]),
                    _: 1
                  }),
                  createVNode(v, {
                    type: "primary",
                    onClick: f[1] || (f[1] = (e) => m.$emit("handleOnSubmit", { form: o, ruleFormRef: n.value }))
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u786E\u5B9A")
                    ]),
                    _: 1
                  })
                ], 4)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["inline", "model", "rules", "label-width", "status-icon", "size", "label-position", "disabled"])
      ], 4);
    };
  }
});
var J = R(A, [["__scopeId", "data-v-3c9c1fc2"]]);
var N = { style: { flex: "auto" } };
var D = {
  name: "ComDrawer"
};
var E = Object.assign(D, {
  props: {
    drawerShow: {
      type: Boolean,
      default: false,
      required: true
    },
    direction: {
      type: String,
      default: "ltr",
      required: true
    },
    title: {
      type: String,
      default: "",
      required: false
    },
    size: {
      type: String,
      default: "30%",
      required: false
    },
    template: {
      type: Array,
      default: [],
      required: false
    },
    lockScroll: {
      type: Boolean,
      default: true,
      required: false
    },
    bottomTxt: {
      type: Array,
      default: ["\u53D6\u6D88", "\u786E\u8BA4"],
      required: false
    },
    vnode: {
      default: [],
      required: false
    }
  },
  setup(t) {
    const a = t, n = useSlots();
    let { drawerShow: o } = toRefs(a);
    return watch(o, (d) => {
      o = d;
    }), (d, s) => {
      const m = resolveComponent("el-button"), f = resolveComponent("el-drawer");
      return openBlock(), createElementBlock("div", null, [
        createVNode(f, {
          modelValue: unref(o),
          "onUpdate:modelValue": s[2] || (s[2] = (c) => isRef(o) ? o.value = c : o = c),
          size: a.size,
          title: unref(n).header ? null : t.title,
          direction: t.direction,
          "before-close": () => d.$emit("cancelClick"),
          "show-close": !unref(n).header,
          "lock-scroll": a.lockScroll
        }, {
          header: withCtx(() => [
            renderSlot(d.$slots, "header")
          ]),
          footer: withCtx(() => [
            createBaseVNode("div", N, [
              createVNode(m, {
                onClick: s[0] || (s[0] = (c) => d.$emit("cancelClick"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(a.bottomTxt[0]), 1)
                ]),
                _: 1
              }),
              createVNode(m, {
                type: "primary",
                onClick: s[1] || (s[1] = (c) => d.$emit("confirmClick"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(a.bottomTxt[1]), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            renderSlot(d.$slots, "content")
          ]),
          _: 3
        }, 8, ["modelValue", "size", "title", "direction", "before-close", "show-close", "lock-scroll"])
      ]);
    };
  }
});
var G = {
  name: "ComPopover"
};
var W = Object.assign(G, {
  props: {
    placement: {
      type: String,
      default: "top-start",
      required: false
    },
    title: {
      type: String,
      default: "title",
      required: false
    },
    width: {
      type: String || Number,
      default: "200",
      required: false
    },
    trigger: {
      type: String,
      default: "click",
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    effect: {
      type: String,
      default: "light",
      required: false
    },
    visible: {
      type: Boolean,
      default: false,
      required: false
    },
    offset: {
      type: Number,
      default: 10,
      required: false
    },
    type: {
      type: Object,
      default: {},
      required: false
    }
  },
  setup(t, { expose: a }) {
    const n = ref(null);
    return a({
      comPopover: n
    }), (o, d) => {
      const s = resolveComponent("el-popover");
      return openBlock(), createElementBlock("div", null, [
        createVNode(s, {
          placement: Object.keys(t.type).includes("placement") ? t.type.placement : t.placement,
          title: Object.keys(t.type).includes("title") ? t.type.title : t.title,
          width: Object.keys(t.type).includes("width") ? t.type.width : t.width,
          trigger: Object.keys(t.type).includes("trigger") ? t.type.trigger : t.trigger,
          disabled: Object.keys(t.type).includes("disabled") ? t.type.disabled : t.disabled,
          effect: Object.keys(t.type).includes("effect") ? t.type.effect : t.effect,
          "v-visible": Object.keys(t.type).includes("visible") ? t.type.visible : t.visible,
          offset: Object.keys(t.type).includes("offset") ? t.type.offset : t.offset,
          ref_key: "comPopover",
          ref: n
        }, {
          reference: withCtx(() => [
            renderSlot(o.$slots, "reference")
          ]),
          default: withCtx(() => [
            renderSlot(o.$slots, "content")
          ]),
          _: 3
        }, 8, ["placement", "title", "width", "trigger", "disabled", "effect", "v-visible", "offset"])
      ]);
    };
  }
});
var L = defineComponent({
  name: "ComAaJsx",
  props: ["test"],
  setup(t, a) {
    const n = () => createVNode("div", null, [createTextVNode("\u6211\u662Faa"), t.test]);
    return () => createVNode("div", null, [createVNode(n, null, null)]);
  }
});
var H = defineComponent({
  name: "ComBbJsx",
  props: ["test"],
  setup(t, a) {
    const n = () => createVNode("div", null, [createTextVNode("\u6211\u662Fbb"), t.test]);
    return () => createVNode("div", null, [createVNode(n, null, null)]);
  }
});
var K = [
  J,
  E,
  W,
  L,
  H
];
var M = (t) => {
  M.installed || K.map((a) => t.component(a.name, a));
};

export {
  M
};
//# sourceMappingURL=chunk-OTDAPALZ.js.map
