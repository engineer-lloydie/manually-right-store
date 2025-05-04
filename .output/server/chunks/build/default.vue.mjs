import { V as VAlert, _ as __nuxt_component_0 } from './header-menu.vue.mjs';
import { ref, mergeProps, withCtx, createVNode, useSSRContext, unref, createTextVNode, withModifiers, createBlock, createCommentVNode, openBlock, computed, Fragment, inject, toRef, isRef, toDisplayString, resolveDynamicComponent, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';
import { V as VSheet } from './VSheet.mjs';
import { V as VBtn, d as makeVBtnProps } from './VBtn.mjs';
import _sfc_main$8 from './footer-menu.vue.mjs';
import { c as useNuxtApp, L as useBaseFetch, n as navigateTo, g as genericComponent, p as propsFactory, j as useRender, K as omit, h as useProxiedModel, H as provideDefaults, k as convertToUnit, Y as isObject, a3 as useModalStore, a4 as useLayout, F as makeComponentProps, a5 as VApp } from './server.mjs';
import { u as useForm, a as useField } from './vee-validate.mjs';
import { GoogleSignInButton } from 'vue3-google-signin';
import { j as VTextField, f as forwardRefs, p as animate, s as standardEasing, u as useScopeId } from './VOverlay.mjs';
import { u as useOrderStore } from './order.mjs';
import { d as useTextColor, u as useBackgroundColor, m as makeTagProps, h as useDimension, i as makeDimensionProps } from './position.mjs';
import { V as VWindow, m as makeVWindowProps, a as VWindowItem, b as makeVWindowItemProps } from './VWindowItem.mjs';
import { a as VSlideGroup, m as makeVSlideGroupProps } from './VSlideGroup.mjs';
import { d as useDensity, e as makeDensityProps } from './VProgressCircular.mjs';
import { V as VDialog } from './VDialog.mjs';
import { a as VCard, b as VCardTitle, d as VCardText } from './VCard.mjs';
import { V as VContainer } from './VContainer.mjs';
import { u as useSsrBoot } from './ssrBoot.mjs';
import './image-icon.png.mjs';
import 'pinia';
import './VMenu.mjs';
import './VCol.mjs';
import './VDivider.mjs';
import './partial-logo.png.mjs';
import './_plugin-vue_export-helper.mjs';
import './VSkeletonLoader.mjs';
import './VList.mjs';
import './index.mjs';
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
import './lazy.mjs';

const _sfc_main$7 = {
  __name: "menu-tabs",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-end" }, _attrs))}>`);
      _push(ssrRenderComponent(VSheet, { class: "ma-2 pa-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              exact: "",
              to: "/manuals/categories",
              text: "Manuals",
              value: "manuals",
              variant: "text",
              "active-color": "red-lighten-1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              exact: "",
              to: "/contact-us",
              text: "Contact Us",
              value: "contact_us",
              variant: "text",
              "active-color": "red-lighten-1"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                exact: "",
                to: "/manuals/categories",
                text: "Manuals",
                value: "manuals",
                variant: "text",
                "active-color": "red-lighten-1"
              }),
              createVNode(VBtn, {
                exact: "",
                to: "/contact-us",
                text: "Contact Us",
                value: "contact_us",
                variant: "text",
                "active-color": "red-lighten-1"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu-tabs.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};

const _sfc_main$6 = {
  __name: "member",
  __ssrInlineRender: true,
  setup(__props) {
    const { $login } = useNuxtApp();
    const errorMessage = ref(null);
    const loading = ref(false);
    const { handleSubmit } = useForm({
      validationSchema: {
        email_address(value) {
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (emailRegex.test(value)) return true;
          return "Must be a valid e-mail.";
        },
        password(value) {
          if ((value == null ? void 0 : value.length) >= 8) return true;
          return "Password needs to be at least 8 characters.";
        }
      }
    });
    const email_address = useField("email_address");
    const password = useField("password");
    const passwordVisible = ref(false);
    const signin = handleSubmit(async (values) => {
      var _a, _b;
      try {
        loading.value = true;
        errorMessage.value = null;
        await $login(values, "email_password");
      } catch (error) {
        if ((error == null ? void 0 : error.response) && ((_b = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a._data) == null ? void 0 : _b.message)) {
          errorMessage.value = error.response._data.message;
        } else {
          errorMessage.value = "Something went wrong. Please try again.";
        }
      } finally {
        loading.value = false;
      }
    });
    const handleLoginSuccess = async (response) => {
      var _a, _b;
      const { credential } = response;
      try {
        loading.value = true;
        errorMessage.value = null;
        await $login({ token: credential }, "google");
      } catch (error) {
        if ((error == null ? void 0 : error.response) && ((_b = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a._data) == null ? void 0 : _b.message)) {
          errorMessage.value = error.response._data.message;
        } else {
          errorMessage.value = "Something went wrong. Please try again.";
        }
      } finally {
        loading.value = false;
      }
    };
    const handleLoginError = () => {
      console.error("Login failed");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VSheet, { class: "mt-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}>`);
            _push2(ssrRenderComponent(VTextField, {
              modelValue: unref(email_address).value.value,
              "onUpdate:modelValue": ($event) => unref(email_address).value.value = $event,
              "error-messages": unref(email_address).errorMessage.value,
              variant: "outlined",
              clearable: "",
              label: "Email Address"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTextField, {
              modelValue: unref(password).value.value,
              "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
              "error-messages": unref(password).errorMessage.value,
              "append-inner-icon": unref(passwordVisible) ? "mdi-eye-off" : "mdi-eye",
              type: unref(passwordVisible) ? "text" : "password",
              variant: "outlined",
              clearable: "",
              label: "Password",
              "onClick:appendInner": ($event) => passwordVisible.value = !unref(passwordVisible)
            }, null, _parent2, _scopeId));
            if (unref(errorMessage)) {
              _push2(ssrRenderComponent(VAlert, {
                density: "compact",
                text: unref(errorMessage),
                type: "error",
                closable: ""
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(VBtn, {
              class: "mt-2 mb-4 text-none",
              type: "submit",
              color: "red-lighten-1",
              block: "",
              loading: unref(loading)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sign In `);
                } else {
                  return [
                    createTextVNode(" Sign In ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSheet, { class: "text-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(GoogleSignInButton), {
                    "logo-alignment": "center",
                    onSuccess: handleLoginSuccess,
                    onError: handleLoginError
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Sign in with Google `);
                      } else {
                        return [
                          createTextVNode(" Sign in with Google ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(GoogleSignInButton), {
                      "logo-alignment": "center",
                      onSuccess: handleLoginSuccess,
                      onError: handleLoginError
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Sign in with Google ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(unref(signin), ["prevent"])
              }, [
                createVNode(VTextField, {
                  modelValue: unref(email_address).value.value,
                  "onUpdate:modelValue": ($event) => unref(email_address).value.value = $event,
                  "error-messages": unref(email_address).errorMessage.value,
                  variant: "outlined",
                  clearable: "",
                  label: "Email Address"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                createVNode(VTextField, {
                  modelValue: unref(password).value.value,
                  "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
                  "error-messages": unref(password).errorMessage.value,
                  "append-inner-icon": unref(passwordVisible) ? "mdi-eye-off" : "mdi-eye",
                  type: unref(passwordVisible) ? "text" : "password",
                  variant: "outlined",
                  clearable: "",
                  label: "Password",
                  "onClick:appendInner": ($event) => passwordVisible.value = !unref(passwordVisible)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "append-inner-icon", "type", "onClick:appendInner"]),
                unref(errorMessage) ? (openBlock(), createBlock(VAlert, {
                  key: 0,
                  density: "compact",
                  text: unref(errorMessage),
                  type: "error",
                  closable: ""
                }, null, 8, ["text"])) : createCommentVNode("", true),
                createVNode(VBtn, {
                  class: "mt-2 mb-4 text-none",
                  type: "submit",
                  color: "red-lighten-1",
                  block: "",
                  loading: unref(loading)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Sign In ")
                  ]),
                  _: 1
                }, 8, ["loading"]),
                createVNode(VSheet, { class: "text-center" }, {
                  default: withCtx(() => [
                    createVNode(unref(GoogleSignInButton), {
                      "logo-alignment": "center",
                      onSuccess: handleLoginSuccess,
                      onError: handleLoginError
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Sign in with Google ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/type/member.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};

const _sfc_main$5 = {
  __name: "non-member",
  __ssrInlineRender: true,
  setup(__props) {
    const { $hideModal } = useNuxtApp();
    const { handleSubmit } = useForm({
      validationSchema: {
        searchQuery(value) {
          if ((value == null ? void 0 : value.length) >= 0) return true;
          return "This field is required.";
        }
      },
      initialValues: {
        type: "order-number"
      }
    });
    const searchQuery = useField("searchQuery");
    const processing = ref(false);
    const errorMessage = ref(null);
    const orderStore = useOrderStore();
    const checkOrder = handleSubmit(async (values) => {
      var _a, _b;
      try {
        processing.value = true;
        errorMessage.value = null;
        const { orderMasterIds } = await useBaseFetch("/check-order", {
          method: "get",
          params: values
        });
        if (orderMasterIds.length) {
          orderStore.setGuestOrderMasterIds(orderMasterIds);
          $hideModal();
          navigateTo("/orders");
        } else {
          errorMessage.value = "No orders found. Please try again with different Order/Invoice Number.";
        }
      } catch (error) {
        errorMessage.value = ((_b = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a._data) == null ? void 0 : _b.message) ?? ((error == null ? void 0 : error.message) ?? "Unknown error occured. Please try again with a different order/invoice number.");
        console.error(error);
      } finally {
        processing.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VSheet, { class: "mt-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}>`);
            _push2(ssrRenderComponent(VTextField, {
              modelValue: unref(searchQuery).value.value,
              "onUpdate:modelValue": ($event) => unref(searchQuery).value.value = $event,
              "error-messages": unref(searchQuery).errorMessage.value,
              variant: "outlined",
              clearable: "",
              label: "Order/Invoice Number"
            }, null, _parent2, _scopeId));
            if (unref(errorMessage)) {
              _push2(ssrRenderComponent(VAlert, {
                density: "compact",
                text: unref(errorMessage),
                type: "error",
                closable: ""
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(VBtn, {
              class: "mt-2",
              type: "submit",
              color: "red-lighten-1",
              block: "",
              loading: unref(processing)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View Order `);
                } else {
                  return [
                    createTextVNode(" View Order ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(unref(checkOrder), ["prevent"])
              }, [
                createVNode(VTextField, {
                  modelValue: unref(searchQuery).value.value,
                  "onUpdate:modelValue": ($event) => unref(searchQuery).value.value = $event,
                  "error-messages": unref(searchQuery).errorMessage.value,
                  variant: "outlined",
                  clearable: "",
                  label: "Order/Invoice Number"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                unref(errorMessage) ? (openBlock(), createBlock(VAlert, {
                  key: 0,
                  density: "compact",
                  text: unref(errorMessage),
                  type: "error",
                  closable: ""
                }, null, 8, ["text"])) : createCommentVNode("", true),
                createVNode(VBtn, {
                  class: "mt-2",
                  type: "submit",
                  color: "red-lighten-1",
                  block: "",
                  loading: unref(processing)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View Order ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/type/non-member.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};

const _sfc_main$4 = {
  __name: "guest",
  __ssrInlineRender: true,
  setup(__props) {
    const { handleSubmit } = useForm({
      validationSchema: {
        first_name(value) {
          if ((value == null ? void 0 : value.length) >= 0) return true;
          return "First name is required.";
        },
        email_address(value) {
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (emailRegex.test(value)) return true;
          return "Must be a valid e-mail.";
        }
      }
    });
    const first_name = useField("first_name");
    const email_address = useField("email_address");
    const { $hideModal } = useNuxtApp();
    const continueAsGuest = handleSubmit(async (values) => {
      localStorage.setItem("checkoutInformation", JSON.stringify(values));
      $hideModal();
      navigateTo("/checkout");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VSheet, { class: "mt-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}>`);
            _push2(ssrRenderComponent(VTextField, {
              modelValue: unref(first_name).value.value,
              "onUpdate:modelValue": ($event) => unref(first_name).value.value = $event,
              "error-messages": unref(first_name).errorMessage.value,
              variant: "outlined",
              clearable: "",
              label: "First Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTextField, {
              modelValue: unref(email_address).value.value,
              "onUpdate:modelValue": ($event) => unref(email_address).value.value = $event,
              "error-messages": unref(email_address).errorMessage.value,
              variant: "outlined",
              clearable: "",
              label: "Email Address"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              class: "mt-2",
              type: "submit",
              color: "red-lighten-1",
              block: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Checkout As Guest `);
                } else {
                  return [
                    createTextVNode(" Checkout As Guest ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(unref(continueAsGuest), ["prevent"])
              }, [
                createVNode(VTextField, {
                  modelValue: unref(first_name).value.value,
                  "onUpdate:modelValue": ($event) => unref(first_name).value.value = $event,
                  "error-messages": unref(first_name).errorMessage.value,
                  variant: "outlined",
                  clearable: "",
                  label: "First Name"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                createVNode(VTextField, {
                  modelValue: unref(email_address).value.value,
                  "onUpdate:modelValue": ($event) => unref(email_address).value.value = $event,
                  "error-messages": unref(email_address).errorMessage.value,
                  variant: "outlined",
                  clearable: "",
                  label: "Email Address"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                createVNode(VBtn, {
                  class: "mt-2",
                  type: "submit",
                  color: "red-lighten-1",
                  block: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Checkout As Guest ")
                  ]),
                  _: 1
                })
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/type/guest.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};

const VTabsSymbol = Symbol.for("vuetify:v-tabs");

const makeVTabProps = propsFactory({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...omit(makeVBtnProps({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab");
const VTab = genericComponent()({
  name: "VTab",
  props: makeVTabProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      textColorClasses: sliderColorClasses,
      textColorStyles: sliderColorStyles
    } = useTextColor(props, "sliderColor");
    const rootEl = ref();
    const sliderEl = ref();
    const isHorizontal = computed(() => props.direction === "horizontal");
    const isSelected = computed(() => {
      var _a, _b;
      return ((_b = (_a = rootEl.value) == null ? void 0 : _a.group) == null ? void 0 : _b.isSelected.value) ?? false;
    });
    function updateSlider(_ref2) {
      var _a, _b;
      let {
        value
      } = _ref2;
      if (value) {
        const prevEl = (_b = (_a = rootEl.value) == null ? void 0 : _a.$el.parentElement) == null ? void 0 : _b.querySelector(".v-tab--selected .v-tab__slider");
        const nextEl = sliderEl.value;
        if (!prevEl || !nextEl) return;
        const color = getComputedStyle(prevEl).color;
        const prevBox = prevEl.getBoundingClientRect();
        const nextBox = nextEl.getBoundingClientRect();
        const xy = isHorizontal.value ? "x" : "y";
        const XY = isHorizontal.value ? "X" : "Y";
        const rightBottom = isHorizontal.value ? "right" : "bottom";
        const widthHeight = isHorizontal.value ? "width" : "height";
        const prevPos = prevBox[xy];
        const nextPos = nextBox[xy];
        const delta = prevPos > nextPos ? prevBox[rightBottom] - nextBox[rightBottom] : prevBox[xy] - nextBox[xy];
        const origin = Math.sign(delta) > 0 ? isHorizontal.value ? "right" : "bottom" : Math.sign(delta) < 0 ? isHorizontal.value ? "left" : "top" : "center";
        const size = Math.abs(delta) + (Math.sign(delta) < 0 ? prevBox[widthHeight] : nextBox[widthHeight]);
        const scale = size / Math.max(prevBox[widthHeight], nextBox[widthHeight]) || 0;
        const initialScale = prevBox[widthHeight] / nextBox[widthHeight] || 0;
        const sigma = 1.5;
        animate(nextEl, {
          backgroundColor: [color, "currentcolor"],
          transform: [`translate${XY}(${delta}px) scale${XY}(${initialScale})`, `translate${XY}(${delta / sigma}px) scale${XY}(${(scale - 1) / sigma + 1})`, "none"],
          transformOrigin: Array(3).fill(origin)
        }, {
          duration: 225,
          easing: standardEasing
        });
      }
    }
    useRender(() => {
      const btnProps = VBtn.filterProps(props);
      return createVNode(VBtn, mergeProps({
        "symbol": VTabsSymbol,
        "ref": rootEl,
        "class": ["v-tab", props.class],
        "style": props.style,
        "tabindex": isSelected.value ? 0 : -1,
        "role": "tab",
        "aria-selected": String(isSelected.value),
        "active": false
      }, btnProps, attrs, {
        "block": props.fixed,
        "maxWidth": props.fixed ? 300 : void 0,
        "onGroup:selected": updateSlider
      }), {
        ...slots,
        default: () => {
          var _a;
          return createVNode(Fragment, null, [((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? props.text, !props.hideSlider && createVNode("div", {
            "ref": sliderEl,
            "class": ["v-tab__slider", sliderColorClasses.value],
            "style": sliderColorStyles.value
          }, null)]);
        }
      });
    });
    return forwardRefs({}, rootEl);
  }
});

const makeVTabsWindowProps = propsFactory({
  ...omit(makeVWindowProps(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow");
const VTabsWindow = genericComponent()({
  name: "VTabsWindow",
  props: makeVTabsWindowProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const group = inject(VTabsSymbol, null);
    const _model = useProxiedModel(props, "modelValue");
    const model = computed({
      get() {
        var _a;
        if (_model.value != null || !group) return _model.value;
        return (_a = group.items.value.find((item) => group.selected.value.includes(item.id))) == null ? void 0 : _a.value;
      },
      set(val) {
        _model.value = val;
      }
    });
    useRender(() => {
      const windowProps = VWindow.filterProps(props);
      return createVNode(VWindow, mergeProps({
        "_as": "VTabsWindow"
      }, windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-tabs-window", props.class],
        "style": props.style,
        "mandatory": false,
        "touch": false
      }), slots);
    });
    return {};
  }
});

const makeVTabsWindowItemProps = propsFactory({
  ...makeVWindowItemProps()
}, "VTabsWindowItem");
const VTabsWindowItem = genericComponent()({
  name: "VTabsWindowItem",
  props: makeVTabsWindowItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const windowItemProps = VWindowItem.filterProps(props);
      return createVNode(VWindowItem, mergeProps({
        "_as": "VTabsWindowItem"
      }, windowItemProps, {
        "class": ["v-tabs-window-item", props.class],
        "style": props.style
      }), slots);
    });
    return {};
  }
});

function parseItems(items) {
  if (!items) return [];
  return items.map((item) => {
    if (!isObject(item)) return {
      text: item,
      value: item
    };
    return item;
  });
}
const makeVTabsProps = propsFactory({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...makeVSlideGroupProps({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...makeDensityProps(),
  ...makeTagProps()
}, "VTabs");
const VTabs = genericComponent()({
  name: "VTabs",
  props: makeVTabsProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const items = computed(() => parseItems(props.items));
    const {
      densityClasses
    } = useDensity(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    const {
      scopeId
    } = useScopeId();
    provideDefaults({
      VTab: {
        color: toRef(props, "color"),
        direction: toRef(props, "direction"),
        stacked: toRef(props, "stacked"),
        fixed: toRef(props, "fixedTabs"),
        sliderColor: toRef(props, "sliderColor"),
        hideSlider: toRef(props, "hideSlider")
      }
    });
    useRender(() => {
      const slideGroupProps = VSlideGroup.filterProps(props);
      const hasWindow = !!(slots.window || props.items.length > 0);
      return createVNode(Fragment, null, [createVNode(VSlideGroup, mergeProps(slideGroupProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-tabs", `v-tabs--${props.direction}`, `v-tabs--align-tabs-${props.alignTabs}`, {
          "v-tabs--fixed-tabs": props.fixedTabs,
          "v-tabs--grow": props.grow,
          "v-tabs--stacked": props.stacked
        }, densityClasses.value, backgroundColorClasses.value, props.class],
        "style": [{
          "--v-tabs-height": convertToUnit(props.height)
        }, backgroundColorStyles.value, props.style],
        "role": "tablist",
        "symbol": VTabsSymbol
      }, scopeId, attrs), {
        default: () => {
          var _a;
          return [((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? items.value.map((item) => {
            var _a2;
            return ((_a2 = slots.tab) == null ? void 0 : _a2.call(slots, {
              item
            })) ?? createVNode(VTab, mergeProps(item, {
              "key": item.text,
              "value": item.value
            }), {
              default: slots[`tab.${item.value}`] ? () => {
                var _a3;
                return (_a3 = slots[`tab.${item.value}`]) == null ? void 0 : _a3.call(slots, {
                  item
                });
              } : void 0
            });
          })];
        }
      }), hasWindow && createVNode(VTabsWindow, mergeProps({
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "key": "tabs-window"
      }, scopeId), {
        default: () => {
          var _a;
          return [items.value.map((item) => {
            var _a2;
            return ((_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
              item
            })) ?? createVNode(VTabsWindowItem, {
              "value": item.value
            }, {
              default: () => {
                var _a3;
                return (_a3 = slots[`item.${item.value}`]) == null ? void 0 : _a3.call(slots, {
                  item
                });
              }
            });
          }), (_a = slots.window) == null ? void 0 : _a.call(slots)];
        }
      })]);
    });
    return {};
  }
});

const _sfc_main$3 = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref("member");
    const modalStore = useModalStore();
    const setAuthForm = () => {
      modalStore.setAuthForm(tab);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VSheet, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTabs, {
              modelValue: unref(tab),
              "onUpdate:modelValue": [($event) => isRef(tab) ? tab.value = $event : null, setAuthForm],
              "align-tabs": "center",
              color: "red-lighten-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTab, { value: "member" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Member`);
                      } else {
                        return [
                          createTextVNode("Member")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (!unref(modalStore).fromCheckout) {
                    _push3(ssrRenderComponent(VTab, { value: "non_member" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Non-member`);
                        } else {
                          return [
                            createTextVNode("Non-member")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(VTab, { value: "guest_checkout" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Guest`);
                        } else {
                          return [
                            createTextVNode("Guest")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    createVNode(VTab, { value: "member" }, {
                      default: withCtx(() => [
                        createTextVNode("Member")
                      ]),
                      _: 1
                    }),
                    !unref(modalStore).fromCheckout ? (openBlock(), createBlock(VTab, {
                      key: 0,
                      value: "non_member"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Non-member")
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(VTab, {
                      key: 1,
                      value: "guest_checkout"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Guest")
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTabsWindow, {
              modelValue: unref(tab),
              "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTabsWindowItem, { value: "member" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$6, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$6)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTabsWindowItem, { value: "non_member" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$5, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$5)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTabsWindowItem, { value: "guest_checkout" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$4, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$4)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTabsWindowItem, { value: "member" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$6)
                      ]),
                      _: 1
                    }),
                    createVNode(VTabsWindowItem, { value: "non_member" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$5)
                      ]),
                      _: 1
                    }),
                    createVNode(VTabsWindowItem, { value: "guest_checkout" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$4)
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
              createVNode(VTabs, {
                modelValue: unref(tab),
                "onUpdate:modelValue": [($event) => isRef(tab) ? tab.value = $event : null, setAuthForm],
                "align-tabs": "center",
                color: "red-lighten-1"
              }, {
                default: withCtx(() => [
                  createVNode(VTab, { value: "member" }, {
                    default: withCtx(() => [
                      createTextVNode("Member")
                    ]),
                    _: 1
                  }),
                  !unref(modalStore).fromCheckout ? (openBlock(), createBlock(VTab, {
                    key: 0,
                    value: "non_member"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Non-member")
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(VTab, {
                    key: 1,
                    value: "guest_checkout"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Guest")
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VTabsWindow, {
                modelValue: unref(tab),
                "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null
              }, {
                default: withCtx(() => [
                  createVNode(VTabsWindowItem, { value: "member" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$6)
                    ]),
                    _: 1
                  }),
                  createVNode(VTabsWindowItem, { value: "non_member" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$5)
                    ]),
                    _: 1
                  }),
                  createVNode(VTabsWindowItem, { value: "guest_checkout" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$4)
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/login.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const _sfc_main$2 = {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const { $hideModal, $login } = useNuxtApp();
    const { handleSubmit } = useForm({
      validationSchema: {
        first_name(value) {
          if ((value == null ? void 0 : value.length) >= 0) return true;
          return "First name is required.";
        },
        email_address(value) {
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (emailRegex.test(value)) return true;
          return "Must be a valid e-mail.";
        },
        password(value) {
          if ((value == null ? void 0 : value.length) >= 8) return true;
          return "Password needs to be at least 8 characters.";
        }
      }
    });
    const first_name = useField("first_name");
    const email_address = useField("email_address");
    const password = useField("password");
    const processing = ref(false);
    const errorMessage = ref(null);
    const passwordVisible = ref(false);
    const register = handleSubmit(async (values) => {
      var _a, _b;
      try {
        processing.value = true;
        errorMessage.value = null;
        await useBaseFetch("/register", {
          method: "POST",
          body: values
        });
        await $login({
          email_address: values.email_address,
          password: values.password
        }, "email_password");
      } catch (error) {
        errorMessage.value = ((_b = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a._data) == null ? void 0 : _b.message) ?? ((error == null ? void 0 : error.message) ?? "Unknown error occured. Please try again with a different email address.");
        console.error(error);
      } finally {
        processing.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VSheet, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}>`);
            _push2(ssrRenderComponent(VTextField, {
              modelValue: unref(first_name).value.value,
              "onUpdate:modelValue": ($event) => unref(first_name).value.value = $event,
              "error-messages": unref(first_name).errorMessage.value,
              variant: "outlined",
              clearable: "",
              label: "First Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTextField, {
              modelValue: unref(email_address).value.value,
              "onUpdate:modelValue": ($event) => unref(email_address).value.value = $event,
              "error-messages": unref(email_address).errorMessage.value,
              variant: "outlined",
              clearable: "",
              label: "Email Address"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTextField, {
              modelValue: unref(password).value.value,
              "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
              "error-messages": unref(password).errorMessage.value,
              "append-inner-icon": unref(passwordVisible) ? "mdi-eye-off" : "mdi-eye",
              type: unref(passwordVisible) ? "text" : "password",
              variant: "outlined",
              clearable: "",
              label: "Password",
              "onClick:appendInner": ($event) => passwordVisible.value = !unref(passwordVisible)
            }, null, _parent2, _scopeId));
            if (unref(errorMessage)) {
              _push2(ssrRenderComponent(VAlert, {
                density: "compact",
                text: unref(errorMessage),
                type: "error",
                closable: ""
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(VBtn, {
              class: "mt-2 text-none",
              type: "submit",
              color: "red-lighten-1",
              block: "",
              loading: unref(processing)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(unref(register), ["prevent"])
              }, [
                createVNode(VTextField, {
                  modelValue: unref(first_name).value.value,
                  "onUpdate:modelValue": ($event) => unref(first_name).value.value = $event,
                  "error-messages": unref(first_name).errorMessage.value,
                  variant: "outlined",
                  clearable: "",
                  label: "First Name"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                createVNode(VTextField, {
                  modelValue: unref(email_address).value.value,
                  "onUpdate:modelValue": ($event) => unref(email_address).value.value = $event,
                  "error-messages": unref(email_address).errorMessage.value,
                  variant: "outlined",
                  clearable: "",
                  label: "Email Address"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                createVNode(VTextField, {
                  modelValue: unref(password).value.value,
                  "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
                  "error-messages": unref(password).errorMessage.value,
                  "append-inner-icon": unref(passwordVisible) ? "mdi-eye-off" : "mdi-eye",
                  type: unref(passwordVisible) ? "text" : "password",
                  variant: "outlined",
                  clearable: "",
                  label: "Password",
                  "onClick:appendInner": ($event) => passwordVisible.value = !unref(passwordVisible)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "append-inner-icon", "type", "onClick:appendInner"]),
                unref(errorMessage) ? (openBlock(), createBlock(VAlert, {
                  key: 0,
                  density: "compact",
                  text: unref(errorMessage),
                  type: "error",
                  closable: ""
                }, null, 8, ["text"])) : createCommentVNode("", true),
                createVNode(VBtn, {
                  class: "mt-2 text-none",
                  type: "submit",
                  color: "red-lighten-1",
                  block: "",
                  loading: unref(processing)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Register ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/register.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
  __name: "auth-modal",
  __ssrInlineRender: true,
  props: {
    active: Boolean,
    default: false
  },
  setup(__props) {
    const props = __props;
    const { $hideModal } = useNuxtApp();
    const modalStore = useModalStore();
    modalStore.setAuthForm("member");
    const switchAuthForm = (value) => {
      modalStore.setAuthForm(value);
    };
    const cardProperties = computed(() => {
      switch (modalStore.authFormDisplay) {
        case "member":
          return {
            redirectFlag: "register",
            cardTitle: "Sign In To Your Account",
            bottomText: "Not yet a member?",
            bottomTextUrl: "Register here."
          };
        case "guest_checkout":
          return {
            redirectFlag: "register",
            cardTitle: "Continue As Guest",
            bottomText: "Not yet a member?",
            bottomTextUrl: "Register here."
          };
        case "non_member":
          return {
            redirectFlag: "register",
            cardTitle: "View Order as Non-Member",
            bottomText: "Not yet a member?",
            bottomTextUrl: "Register here."
          };
        default:
          return {
            redirectFlag: "member",
            cardTitle: "New Member Registration",
            bottomText: "Already a member?",
            bottomTextUrl: "Login here."
          };
      }
    });
    const currentComponent = computed(() => {
      switch (modalStore.authFormDisplay) {
        case "member":
        case "non_member":
        case "guest_checkout":
          return _sfc_main$3;
        default:
          return _sfc_main$2;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: props.active,
        "onUpdate:modelValue": ($event) => props.active = $event,
        persistent: "",
        mobile: true,
        "max-width": "600"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              width: "auto",
              "max-width": "600"
            }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    density: "comfortable",
                    icon: "$close",
                    variant: "plain",
                    onClick: ($event) => {
                      unref($hideModal)();
                      unref(modalStore).setCheckoutSource(false);
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
                      density: "comfortable",
                      icon: "$close",
                      variant: "plain",
                      onClick: ($event) => {
                        unref($hideModal)();
                        unref(modalStore).setCheckoutSource(false);
                      }
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h3 class="text-center font-weight-regular text-wrap"${_scopeId3}>${ssrInterpolate(unref(cardProperties).cardTitle)}</h3>`);
                      } else {
                        return [
                          createVNode("h3", { class: "text-center font-weight-regular text-wrap" }, toDisplayString(unref(cardProperties).cardTitle), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(unref(currentComponent)), null, null), _parent4, _scopeId3);
                        _push4(`<p class="text-center mt-4"${_scopeId3}>${ssrInterpolate(unref(cardProperties).bottomText)} <a href="javascript:;"${_scopeId3}>${ssrInterpolate(unref(cardProperties).bottomTextUrl)}</a></p>`);
                      } else {
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(unref(currentComponent)))),
                          createVNode("p", { class: "text-center mt-4" }, [
                            createTextVNode(toDisplayString(unref(cardProperties).bottomText) + " ", 1),
                            createVNode("a", {
                              onClick: ($event) => switchAuthForm(unref(cardProperties).redirectFlag),
                              href: "javascript:;"
                            }, toDisplayString(unref(cardProperties).bottomTextUrl), 9, ["onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createVNode("h3", { class: "text-center font-weight-regular text-wrap" }, toDisplayString(unref(cardProperties).cardTitle), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(unref(currentComponent)))),
                        createVNode("p", { class: "text-center mt-4" }, [
                          createTextVNode(toDisplayString(unref(cardProperties).bottomText) + " ", 1),
                          createVNode("a", {
                            onClick: ($event) => switchAuthForm(unref(cardProperties).redirectFlag),
                            href: "javascript:;"
                          }, toDisplayString(unref(cardProperties).bottomTextUrl), 9, ["onClick"])
                        ])
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
              createVNode(VCard, {
                width: "auto",
                "max-width": "600"
              }, {
                append: withCtx(() => [
                  createVNode(VBtn, {
                    density: "comfortable",
                    icon: "$close",
                    variant: "plain",
                    onClick: ($event) => {
                      unref($hideModal)();
                      unref(modalStore).setCheckoutSource(false);
                    }
                  }, null, 8, ["onClick"])
                ]),
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode("h3", { class: "text-center font-weight-regular text-wrap" }, toDisplayString(unref(cardProperties).cardTitle), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(unref(currentComponent)))),
                      createVNode("p", { class: "text-center mt-4" }, [
                        createTextVNode(toDisplayString(unref(cardProperties).bottomText) + " ", 1),
                        createVNode("a", {
                          onClick: ($event) => switchAuthForm(unref(cardProperties).redirectFlag),
                          href: "javascript:;"
                        }, toDisplayString(unref(cardProperties).bottomTextUrl), 9, ["onClick"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth-modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const makeVMainProps = propsFactory({
  scrollable: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps({
    tag: "main"
  })
}, "VMain");
const VMain = genericComponent()({
  name: "VMain",
  props: makeVMainProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      mainStyles
    } = useLayout();
    const {
      ssrBootStyles
    } = useSsrBoot();
    useRender(() => createVNode(props.tag, {
      "class": ["v-main", {
        "v-main--scrollable": props.scrollable
      }, props.class],
      "style": [mainStyles.value, ssrBootStyles.value, dimensionStyles.value, props.style]
    }, {
      default: () => {
        var _a, _b;
        return [props.scrollable ? createVNode("div", {
          "class": "v-main__scroller"
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]) : (_b = slots.default) == null ? void 0 : _b.call(slots)];
      }
    }));
    return {};
  }
});

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const modalStore = useModalStore();
    const isActiveModal = computed(() => modalStore.isActiveModal);
    const activeModalComponent = computed(() => {
      const components = {
        "auth-modal": _sfc_main$1
      };
      return components[modalStore.activeModalComponent];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_header_menu = __nuxt_component_0;
      const _component_menu_tabs = _sfc_main$7;
      const _component_footer_menu = _sfc_main$8;
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_header_menu, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VContainer, { "max-width": "1200" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_menu_tabs, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_menu_tabs)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, {
                    class: "pt-0 px-0",
                    "max-width": "1200"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default")
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, {
                      class: "pt-0 px-0",
                      "max-width": "1200"
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_footer_menu, null, null, _parent2, _scopeId));
            if (unref(isActiveModal)) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(activeModalComponent)), { active: true }, null), _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_header_menu),
              createVNode(VContainer, { "max-width": "1200" }, {
                default: withCtx(() => [
                  createVNode(_component_menu_tabs)
                ]),
                _: 1
              }),
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode(VContainer, {
                    class: "pt-0 px-0",
                    "max-width": "1200"
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              }),
              createVNode(_component_footer_menu),
              unref(isActiveModal) ? (openBlock(), createBlock(resolveDynamicComponent(unref(activeModalComponent)), {
                key: 0,
                active: true
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.vue.mjs.map
