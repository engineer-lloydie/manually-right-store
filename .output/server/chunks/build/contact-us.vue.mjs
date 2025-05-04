import { ref, createVNode, computed, shallowRef, watchEffect, watch, nextTick, mergeProps, Fragment, withDirectives, resolveDirective, vModelText, withCtx, unref, createTextVNode, withModifiers, isRef, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useForm, a as useField } from './vee-validate.mjs';
import * as yup from 'yup';
import { g as genericComponent, p as propsFactory, j as useRender, F as makeComponentProps, h as useProxiedModel, k as convertToUnit, o as clamp, M as filterInputAttrs, N as callEvent, L as useBaseFetch } from './server.mjs';
import { V as VContainer } from './VContainer.mjs';
import { V as VDivider } from './VDivider.mjs';
import { V as VSheet } from './VSheet.mjs';
import { c as createForm, f as forwardRefs, a as makeFormProps, b as useFocus, d as makeVFieldProps, e as makeVInputProps, g as VInput, h as VField, i as VCounter, j as VTextField } from './VOverlay.mjs';
import { I as Intersect, a as VCard } from './VCard.mjs';
import { V as VBtn } from './VBtn.mjs';
import { V as VDialog } from './VDialog.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'consola';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import 'pinia';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'devalue';
import 'node:util';
import 'node:process';
import 'node:tty';
import './position.mjs';
import './index.mjs';
import './VProgressCircular.mjs';
import './lazy.mjs';

const makeVFormProps = propsFactory({
  ...makeComponentProps(),
  ...makeFormProps()
}, "VForm");
const VForm = genericComponent()({
  name: "VForm",
  props: makeVFormProps(),
  emits: {
    "update:modelValue": (val) => true,
    submit: (e) => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const form = createForm(props);
    const formRef = ref();
    function onReset(e) {
      e.preventDefault();
      form.reset();
    }
    function onSubmit(_e) {
      const e = _e;
      const ready = form.validate();
      e.then = ready.then.bind(ready);
      e.catch = ready.catch.bind(ready);
      e.finally = ready.finally.bind(ready);
      emit("submit", e);
      if (!e.defaultPrevented) {
        ready.then((_ref2) => {
          var _a;
          let {
            valid
          } = _ref2;
          if (valid) {
            (_a = formRef.value) == null ? void 0 : _a.submit();
          }
        });
      }
      e.preventDefault();
    }
    useRender(() => {
      var _a;
      return createVNode("form", {
        "ref": formRef,
        "class": ["v-form", props.class],
        "style": props.style,
        "novalidate": true,
        "onReset": onReset,
        "onSubmit": onSubmit
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots, form)]);
    });
    return forwardRefs(form, formRef);
  }
});

const makeVTextareaProps = propsFactory({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (v) => !isNaN(parseFloat(v))
  },
  maxRows: {
    type: [Number, String],
    validator: (v) => !isNaN(parseFloat(v))
  },
  suffix: String,
  modelModifiers: Object,
  ...makeVInputProps(),
  ...makeVFieldProps()
}, "VTextarea");
const VTextarea = genericComponent()({
  name: "VTextarea",
  directives: {
    Intersect
  },
  inheritAttrs: false,
  props: makeVTextareaProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : (model.value || "").toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength) return attrs.maxlength;
      if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string") return void 0;
      return props.counter;
    });
    function onIntersect(isIntersecting, entries) {
      var _a, _b;
      if (!props.autofocus || !isIntersecting) return;
      (_b = (_a = entries[0].target) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    }
    const vInputRef = ref();
    const vFieldRef = ref();
    const controlHeight = shallowRef("");
    const textareaRef = ref();
    const isActive = computed(() => props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      var _a;
      if (textareaRef.value !== (void 0).activeElement) {
        (_a = textareaRef.value) == null ? void 0 : _a.focus();
      }
      if (!isFocused.value) focus();
    }
    function onControlClick(e) {
      onFocus();
      emit("click:control", e);
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = "";
        callEvent(props["onClick:clear"], e);
      });
    }
    function onInput(e) {
      var _a;
      const el = e.target;
      model.value = el.value;
      if ((_a = props.modelModifiers) == null ? void 0 : _a.trim) {
        const caretPosition = [el.selectionStart, el.selectionEnd];
        nextTick(() => {
          el.selectionStart = caretPosition[0];
          el.selectionEnd = caretPosition[1];
        });
      }
    }
    const sizerRef = ref();
    const rows = ref(Number(props.rows));
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    watchEffect(() => {
      if (!props.autoGrow) rows.value = Number(props.rows);
    });
    function calculateInputHeight() {
      if (!props.autoGrow) return;
      nextTick(() => {
        if (!sizerRef.value || !vFieldRef.value) return;
        const style = getComputedStyle(sizerRef.value);
        const fieldStyle = getComputedStyle(vFieldRef.value.$el);
        const padding = parseFloat(style.getPropertyValue("--v-field-padding-top")) + parseFloat(style.getPropertyValue("--v-input-padding-top")) + parseFloat(style.getPropertyValue("--v-field-padding-bottom"));
        const height = sizerRef.value.scrollHeight;
        const lineHeight = parseFloat(style.lineHeight);
        const minHeight = Math.max(parseFloat(props.rows) * lineHeight + padding, parseFloat(fieldStyle.getPropertyValue("--v-input-control-height")));
        const maxHeight = parseFloat(props.maxRows) * lineHeight + padding || Infinity;
        const newHeight = clamp(height ?? 0, minHeight, maxHeight);
        rows.value = Math.floor((newHeight - padding) / lineHeight);
        controlHeight.value = convertToUnit(newHeight);
      });
    }
    watch(model, calculateInputHeight);
    watch(() => props.rows, calculateInputHeight);
    watch(() => props.maxRows, calculateInputHeight);
    watch(() => props.density, calculateInputHeight);
    let observer;
    watch(sizerRef, (val) => {
      if (val) {
        observer = new ResizeObserver(calculateInputHeight);
        observer.observe(sizerRef.value);
      } else {
        observer == null ? void 0 : observer.disconnect();
      }
    });
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter || props.counterValue);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = VField.filterProps(props);
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-textarea v-text-field", {
          "v-textarea--prefixed": props.prefix,
          "v-textarea--suffixed": props.suffix,
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-textarea--auto-grow": props.autoGrow,
          "v-textarea--no-resize": props.noResize || props.autoGrow,
          "v-input--plain-underlined": isPlainOrUnderlined.value
        }, props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid
          } = _ref2;
          return createVNode(VField, mergeProps({
            "ref": vFieldRef,
            "style": {
              "--v-textarea-control-height": controlHeight.value
            },
            "onClick": onControlClick,
            "onMousedown": onControlMousedown,
            "onClick:clear": onClear,
            "onClick:prependInner": props["onClick:prependInner"],
            "onClick:appendInner": props["onClick:appendInner"]
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: (_ref3) => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref3;
              return createVNode(Fragment, null, [props.prefix && createVNode("span", {
                "class": "v-text-field__prefix"
              }, [props.prefix]), withDirectives(createVNode("textarea", mergeProps({
                "ref": textareaRef,
                "class": fieldClass,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "placeholder": props.placeholder,
                "rows": props.rows,
                "name": props.name,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[resolveDirective("intersect"), {
                handler: onIntersect
              }, null, {
                once: true
              }]]), props.autoGrow && withDirectives(createVNode("textarea", {
                "class": [fieldClass, "v-textarea__sizer"],
                "id": `${slotProps.id}-sizer`,
                "onUpdate:modelValue": ($event) => model.value = $event,
                "ref": sizerRef,
                "readonly": true,
                "aria-hidden": "true"
              }, null), [[vModelText, model.value]]), props.suffix && createVNode("span", {
                "class": "v-text-field__suffix"
              }, [props.suffix])]);
            }
          });
        },
        details: hasDetails ? (slotProps) => {
          var _a;
          return createVNode(Fragment, null, [(_a = slots.details) == null ? void 0 : _a.call(slots, slotProps), hasCounter && createVNode(Fragment, null, [createVNode("span", null, null), createVNode(VCounter, {
            "active": props.persistentCounter || isFocused.value,
            "value": counterValue.value,
            "max": max.value,
            "disabled": props.disabled
          }, slots.counter)])]);
        } : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, textareaRef);
  }
});

const _sfc_main = {
  __name: "contact-us",
  __ssrInlineRender: true,
  setup(__props) {
    const submitting = ref(false);
    const successDialog = ref(false);
    const { handleSubmit, resetForm } = useForm({
      initialValues: {
        firstName: "",
        email: "",
        message: ""
      },
      validationSchema: yup.object({
        firstName: yup.string().required("First name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        message: yup.string().required("Message is required")
      })
    });
    const firstName = useField("firstName");
    const email = useField("email");
    const message = useField("message");
    const sendMessage = handleSubmit(async (values) => {
      try {
        submitting.value = true;
        await useBaseFetch("/inquiries/message", {
          method: "POST",
          body: values
        });
        successDialog.value = true;
        resetForm();
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        submitting.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSheet, { class: "my-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="mb-3"${_scopeId2}>Get in Touch</h2><p${_scopeId2}>If you have any inquiries or require assistance, please complete the form below. Our team strives to provide a response within one business day.</p>`);
                } else {
                  return [
                    createVNode("h2", { class: "mb-3" }, "Get in Touch"),
                    createVNode("p", null, "If you have any inquiries or require assistance, please complete the form below. Our team strives to provide a response within one business day.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VForm, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSheet, { "max-width": "500px" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          label: "Enter your first name",
                          class: "mb-2",
                          modelValue: unref(firstName).value.value,
                          "onUpdate:modelValue": ($event) => unref(firstName).value.value = $event,
                          "error-messages": unref(firstName).errorMessage.value,
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTextField, {
                          label: "Enter your email address",
                          class: "mb-2",
                          modelValue: unref(email).value.value,
                          "onUpdate:modelValue": ($event) => unref(email).value.value = $event,
                          "error-messages": unref(email).errorMessage.value,
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTextarea, {
                          label: "Enter your message",
                          class: "mb-2",
                          modelValue: unref(message).value.value,
                          "onUpdate:modelValue": ($event) => unref(message).value.value = $event,
                          "error-messages": unref(message).errorMessage.value,
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          onClick: unref(sendMessage),
                          loading: unref(submitting),
                          color: "red-lighten-1",
                          class: "text-none",
                          block: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Send Message `);
                            } else {
                              return [
                                createTextVNode(" Send Message ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            label: "Enter your first name",
                            class: "mb-2",
                            modelValue: unref(firstName).value.value,
                            "onUpdate:modelValue": ($event) => unref(firstName).value.value = $event,
                            "error-messages": unref(firstName).errorMessage.value,
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                          createVNode(VTextField, {
                            label: "Enter your email address",
                            class: "mb-2",
                            modelValue: unref(email).value.value,
                            "onUpdate:modelValue": ($event) => unref(email).value.value = $event,
                            "error-messages": unref(email).errorMessage.value,
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                          createVNode(VTextarea, {
                            label: "Enter your message",
                            class: "mb-2",
                            modelValue: unref(message).value.value,
                            "onUpdate:modelValue": ($event) => unref(message).value.value = $event,
                            "error-messages": unref(message).errorMessage.value,
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                          createVNode(VBtn, {
                            onClick: withModifiers(unref(sendMessage), ["prevent"]),
                            loading: unref(submitting),
                            color: "red-lighten-1",
                            class: "text-none",
                            block: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Send Message ")
                            ]),
                            _: 1
                          }, 8, ["onClick", "loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSheet, { "max-width": "500px" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          label: "Enter your first name",
                          class: "mb-2",
                          modelValue: unref(firstName).value.value,
                          "onUpdate:modelValue": ($event) => unref(firstName).value.value = $event,
                          "error-messages": unref(firstName).errorMessage.value,
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                        createVNode(VTextField, {
                          label: "Enter your email address",
                          class: "mb-2",
                          modelValue: unref(email).value.value,
                          "onUpdate:modelValue": ($event) => unref(email).value.value = $event,
                          "error-messages": unref(email).errorMessage.value,
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                        createVNode(VTextarea, {
                          label: "Enter your message",
                          class: "mb-2",
                          modelValue: unref(message).value.value,
                          "onUpdate:modelValue": ($event) => unref(message).value.value = $event,
                          "error-messages": unref(message).errorMessage.value,
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                        createVNode(VBtn, {
                          onClick: withModifiers(unref(sendMessage), ["prevent"]),
                          loading: unref(submitting),
                          color: "red-lighten-1",
                          class: "text-none",
                          block: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Send Message ")
                          ]),
                          _: 1
                        }, 8, ["onClick", "loading"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDialog, {
              modelValue: unref(successDialog),
              "onUpdate:modelValue": ($event) => isRef(successDialog) ? successDialog.value = $event : null,
              width: "auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    "max-width": "400",
                    "prepend-icon": "mdi-check",
                    text: "Your message has been sent successfully.",
                    title: "Message sent successfully"
                  }, {
                    actions: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          class: "ms-auto",
                          text: "Ok",
                          onClick: ($event) => successDialog.value = false
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            class: "ms-auto",
                            text: "Ok",
                            onClick: ($event) => successDialog.value = false
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      "max-width": "400",
                      "prepend-icon": "mdi-check",
                      text: "Your message has been sent successfully.",
                      title: "Message sent successfully"
                    }, {
                      actions: withCtx(() => [
                        createVNode(VBtn, {
                          class: "ms-auto",
                          text: "Ok",
                          onClick: ($event) => successDialog.value = false
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VDivider),
              createVNode(VSheet, { class: "my-5" }, {
                default: withCtx(() => [
                  createVNode("h2", { class: "mb-3" }, "Get in Touch"),
                  createVNode("p", null, "If you have any inquiries or require assistance, please complete the form below. Our team strives to provide a response within one business day.")
                ]),
                _: 1
              }),
              createVNode(VForm, null, {
                default: withCtx(() => [
                  createVNode(VSheet, { "max-width": "500px" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        label: "Enter your first name",
                        class: "mb-2",
                        modelValue: unref(firstName).value.value,
                        "onUpdate:modelValue": ($event) => unref(firstName).value.value = $event,
                        "error-messages": unref(firstName).errorMessage.value,
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                      createVNode(VTextField, {
                        label: "Enter your email address",
                        class: "mb-2",
                        modelValue: unref(email).value.value,
                        "onUpdate:modelValue": ($event) => unref(email).value.value = $event,
                        "error-messages": unref(email).errorMessage.value,
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                      createVNode(VTextarea, {
                        label: "Enter your message",
                        class: "mb-2",
                        modelValue: unref(message).value.value,
                        "onUpdate:modelValue": ($event) => unref(message).value.value = $event,
                        "error-messages": unref(message).errorMessage.value,
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                      createVNode(VBtn, {
                        onClick: withModifiers(unref(sendMessage), ["prevent"]),
                        loading: unref(submitting),
                        color: "red-lighten-1",
                        class: "text-none",
                        block: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Send Message ")
                        ]),
                        _: 1
                      }, 8, ["onClick", "loading"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDialog, {
                modelValue: unref(successDialog),
                "onUpdate:modelValue": ($event) => isRef(successDialog) ? successDialog.value = $event : null,
                width: "auto"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    "max-width": "400",
                    "prepend-icon": "mdi-check",
                    text: "Your message has been sent successfully.",
                    title: "Message sent successfully"
                  }, {
                    actions: withCtx(() => [
                      createVNode(VBtn, {
                        class: "ms-auto",
                        text: "Ok",
                        onClick: ($event) => successDialog.value = false
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-us.vue.mjs.map
