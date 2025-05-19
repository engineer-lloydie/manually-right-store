import { computed, toRef, createVNode, mergeProps, withDirectives, vShow, ref, watch, unref, isRef, withCtx, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_1 } from './image-icon.png.mjs';
import { g as genericComponent, p as propsFactory, h as useProxiedModel, C as provideTheme, i as useLocale, D as makeThemeProps, F as makeComponentProps, I as IconValue, ab as useTheme, j as useRender, ac as pickWithRest, l as useCartStore, a3 as useModalStore, m as useSanctumAuth, c as useNuxtApp, L as useBaseFetch, n as navigateTo } from './server.mjs';
import { storeToRefs } from 'pinia';
import { V as VMenu } from './VMenu.mjs';
import { i as createSimpleFunctional, M as MaybeTransition, h as makeTransitionProps, a as VCard, f as VCardItem, d as VCardText, V as VImg } from './VCard.mjs';
import { h as useDimension, f as useElevation, j as useLocation, k as usePosition, g as useRounded, d as useTextColor, m as makeTagProps, a as makeRoundedProps, l as makePositionProps, n as makeLocationProps, b as makeElevationProps, i as makeDimensionProps, u as useBackgroundColor } from './position.mjs';
import { h as useVariant, d as useDensity, k as genOverlays, c as VIcon, V as VDefaultsProvider, f as makeVariantProps, e as makeDensityProps, b as VProgressCircular } from './VProgressCircular.mjs';
import { V as VBtn } from './VBtn.mjs';
import { V as VSheet } from './VSheet.mjs';
import { V as VRow, a as VCol } from './VCol.mjs';
import { V as VDivider } from './VDivider.mjs';
import { _ as _imports_0 } from './partial-logo.png.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { V as VContainer } from './VContainer.mjs';
import { V as VSkeletonLoader } from './VSkeletonLoader.mjs';
import { q as useDelay, r as makeDelayProps, j as VTextField } from './VOverlay.mjs';
import { V as VList, a as VListItem, b as VListItemTitle } from './VList.mjs';
import { V as VDialog } from './VDialog.mjs';

const VAlertTitle = createSimpleFunctional("v-alert-title");

const allowedTypes = ["success", "info", "warning", "error"];
const makeVAlertProps = propsFactory({
  border: {
    type: [Boolean, String],
    validator: (val) => {
      return typeof val === "boolean" || ["top", "end", "bottom", "start"].includes(val);
    }
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: IconValue,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: true
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (val) => allowedTypes.includes(val)
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "VAlert");
const VAlert = genericComponent()({
  name: "VAlert",
  props: makeVAlertProps(),
  emits: {
    "click:close": (e) => true,
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const icon = computed(() => {
      if (props.icon === false) return void 0;
      if (!props.type) return props.icon;
      return props.icon ?? `$${props.type}`;
    });
    const variantProps = computed(() => ({
      color: props.color ?? props.type,
      variant: props.variant
    }));
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(variantProps);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "borderColor"));
    const {
      t
    } = useLocale();
    const closeProps = computed(() => ({
      "aria-label": t(props.closeLabel),
      onClick(e) {
        isActive.value = false;
        emit("click:close", e);
      }
    }));
    return () => {
      const hasPrepend = !!(slots.prepend || icon.value);
      const hasTitle = !!(slots.title || props.title);
      const hasClose = !!(slots.close || props.closable);
      return isActive.value && createVNode(props.tag, {
        "class": ["v-alert", props.border && {
          "v-alert--border": !!props.border,
          [`v-alert--border-${props.border === true ? "start" : props.border}`]: true
        }, {
          "v-alert--prominent": props.prominent
        }, themeClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
        "role": "alert"
      }, {
        default: () => {
          var _a, _b;
          return [genOverlays(false, "v-alert"), props.border && createVNode("div", {
            "key": "border",
            "class": ["v-alert__border", textColorClasses.value],
            "style": textColorStyles.value
          }, null), hasPrepend && createVNode("div", {
            "key": "prepend",
            "class": "v-alert__prepend"
          }, [!slots.prepend ? createVNode(VIcon, {
            "key": "prepend-icon",
            "density": props.density,
            "icon": icon.value,
            "size": props.prominent ? 44 : 28
          }, null) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !icon.value,
            "defaults": {
              VIcon: {
                density: props.density,
                icon: icon.value,
                size: props.prominent ? 44 : 28
              }
            }
          }, slots.prepend)]), createVNode("div", {
            "class": "v-alert__content"
          }, [hasTitle && createVNode(VAlertTitle, {
            "key": "title"
          }, {
            default: () => {
              var _a2;
              return [((_a2 = slots.title) == null ? void 0 : _a2.call(slots)) ?? props.title];
            }
          }), ((_a = slots.text) == null ? void 0 : _a.call(slots)) ?? props.text, (_b = slots.default) == null ? void 0 : _b.call(slots)]), slots.append && createVNode("div", {
            "key": "append",
            "class": "v-alert__append"
          }, [slots.append()]), hasClose && createVNode("div", {
            "key": "close",
            "class": "v-alert__close"
          }, [!slots.close ? createVNode(VBtn, mergeProps({
            "key": "close-btn",
            "icon": props.closeIcon,
            "size": "x-small",
            "variant": "text"
          }, closeProps.value), null) : createVNode(VDefaultsProvider, {
            "key": "close-defaults",
            "defaults": {
              VBtn: {
                icon: props.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var _a2;
              return [(_a2 = slots.close) == null ? void 0 : _a2.call(slots, {
                props: closeProps.value
              })];
            }
          })])];
        }
      });
    };
  }
});

const makeVBadgeProps = propsFactory({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: IconValue,
  inline: Boolean,
  label: {
    type: String,
    default: "$vuetify.badge"
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: true
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String,
  ...makeComponentProps(),
  ...makeLocationProps({
    location: "top end"
  }),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeTransitionProps({
    transition: "scale-rotate-transition"
  })
}, "VBadge");
const VBadge = genericComponent()({
  name: "VBadge",
  inheritAttrs: false,
  props: makeVBadgeProps(),
  setup(props, ctx) {
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      roundedClasses
    } = useRounded(props);
    const {
      t
    } = useLocale();
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "textColor"));
    const {
      themeClasses
    } = useTheme();
    const {
      locationStyles
    } = useLocation(props, true, (side) => {
      const base = props.floating ? props.dot ? 2 : 4 : props.dot ? 8 : 12;
      return base + (["top", "bottom"].includes(side) ? Number(props.offsetY ?? 0) : ["left", "right"].includes(side) ? Number(props.offsetX ?? 0) : 0);
    });
    useRender(() => {
      const value = Number(props.content);
      const content = !props.max || isNaN(value) ? props.content : value <= Number(props.max) ? value : `${props.max}+`;
      const [badgeAttrs, attrs] = pickWithRest(ctx.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return createVNode(props.tag, mergeProps({
        "class": ["v-badge", {
          "v-badge--bordered": props.bordered,
          "v-badge--dot": props.dot,
          "v-badge--floating": props.floating,
          "v-badge--inline": props.inline
        }, props.class]
      }, attrs, {
        "style": props.style
      }), {
        default: () => {
          var _a, _b;
          return [createVNode("div", {
            "class": "v-badge__wrapper"
          }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a), createVNode(MaybeTransition, {
            "transition": props.transition
          }, {
            default: () => {
              var _a2, _b2;
              return [withDirectives(createVNode("span", mergeProps({
                "class": ["v-badge__badge", themeClasses.value, backgroundColorClasses.value, roundedClasses.value, textColorClasses.value],
                "style": [backgroundColorStyles.value, textColorStyles.value, props.inline ? {} : locationStyles.value],
                "aria-atomic": "true",
                "aria-label": t(props.label, value),
                "aria-live": "polite",
                "role": "status"
              }, badgeAttrs), [props.dot ? void 0 : ctx.slots.badge ? (_b2 = (_a2 = ctx.slots).badge) == null ? void 0 : _b2.call(_a2) : props.icon ? createVNode(VIcon, {
                "icon": props.icon
              }, null) : content]), [[vShow, props.modelValue]])];
            }
          })])];
        }
      });
    });
    return {};
  }
});

const _sfc_main$1 = {
  __name: "cart-items",
  __ssrInlineRender: true,
  setup(__props) {
    const menu = ref(false);
    const cartStore = useCartStore();
    const modalStore = useModalStore();
    const { isAuthenticated } = useSanctumAuth();
    const showAlert = ref(false);
    const alertMessage = ref(null);
    const processing = ref(false);
    const selectedCart = ref(null);
    const { $showModal, $hideModal } = useNuxtApp();
    const { newCartAdded } = storeToRefs(cartStore);
    watch(newCartAdded, (newValue, oldValue) => {
      if (newValue) {
        menu.value = true;
        alertMessage.value = "A new cart has been added successfully.";
        showAlert.value = true;
        setTimeout(() => {
          showAlert.value = false;
        }, 3e3);
      }
    });
    const deleteCart = async (cartId) => {
      try {
        processing.value = true;
        selectedCart.value = cartId;
        await useBaseFetch(`/carts/${cartId}`, {
          method: "DELETE"
        });
        await fetchCarts();
        alertMessage.value = "Cart has been deleted successfully.";
        showAlert.value = true;
        setTimeout(() => {
          showAlert.value = false;
        }, 3e3);
      } catch (error) {
        console.error(error);
      } finally {
        processing.value = false;
        selectedCart.value = null;
      }
    };
    const fetchCarts = async () => {
      await cartStore.fetchCartItems();
    };
    const checkout = () => {
      if (isAuthenticated.value) {
        $hideModal();
        navigateTo("/checkout");
      } else {
        modalStore.setCheckoutSource(true);
        $showModal("auth-modal");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VMenu, {
        modelValue: unref(menu),
        "onUpdate:modelValue": ($event) => isRef(menu) ? menu.value = $event : null,
        "close-on-content-click": false,
        transition: "scale-transition",
        persistent: "",
        "max-width": 700,
        width: "700",
        "max-height": 600
      }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, mergeProps({
              color: "grey-darken-1",
              class: "text-none",
              density: "compact",
              size: "40",
              variant: "text",
              rounded: "circle",
              stacked: ""
            }, props), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBadge, {
                    color: "red-lighten-1",
                    content: unref(cartStore).totalCount
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-cart`);
                            } else {
                              return [
                                createTextVNode("mdi-cart")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-cart")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBadge, {
                      color: "red-lighten-1",
                      content: unref(cartStore).totalCount
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-cart")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, mergeProps({
                color: "grey-darken-1",
                class: "text-none",
                density: "compact",
                size: "40",
                variant: "text",
                rounded: "circle",
                stacked: ""
              }, props), {
                default: withCtx(() => [
                  createVNode(VBadge, {
                    color: "red-lighten-1",
                    content: unref(cartStore).totalCount
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-cart")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["content"])
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { "min-width": "300" }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    density: "comfortable",
                    icon: "$close",
                    variant: "plain",
                    onClick: ($event) => menu.value = !unref(menu)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
                      density: "comfortable",
                      icon: "$close",
                      variant: "plain",
                      onClick: ($event) => menu.value = !unref(menu)
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (unref(showAlert)) {
                                _push5(ssrRenderComponent(VAlert, {
                                  text: unref(alertMessage),
                                  type: "success",
                                  class: "mb-5",
                                  closable: ""
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (unref(cartStore).cartItems.length) {
                                _push5(`<!--[-->`);
                                _push5(ssrRenderComponent(VSheet, { class: "mb-5" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(unref(cartStore).cartItems, (item, index) => {
                                        _push6(ssrRenderComponent(VRow, {
                                          key: item.id,
                                          align: "center"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VCol, {
                                                class: "d-flex justify-between d-sm-inline",
                                                cols: "12",
                                                sm: "3"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(VImg, {
                                                      src: item.thumbnail,
                                                      "lazy-src": _imports_1,
                                                      width: "70",
                                                      height: "70",
                                                      rounded: ""
                                                    }, {
                                                      placeholder: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`<div class="d-flex align-center justify-center fill-height"${_scopeId8}>`);
                                                          _push9(ssrRenderComponent(VProgressCircular, {
                                                            color: "grey-lighten-4",
                                                            indeterminate: ""
                                                          }, null, _parent9, _scopeId8));
                                                          _push9(`</div>`);
                                                        } else {
                                                          return [
                                                            createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                              createVNode(VProgressCircular, {
                                                                color: "grey-lighten-4",
                                                                indeterminate: ""
                                                              })
                                                            ])
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(VImg, {
                                                        src: item.thumbnail,
                                                        "lazy-src": _imports_1,
                                                        width: "70",
                                                        height: "70",
                                                        rounded: ""
                                                      }, {
                                                        placeholder: withCtx(() => [
                                                          createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                            createVNode(VProgressCircular, {
                                                              color: "grey-lighten-4",
                                                              indeterminate: ""
                                                            })
                                                          ])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["src"])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(VCol, {
                                                class: "text-center text-sm-left",
                                                cols: "12",
                                                sm: "5"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<h5 class="mb-1"${_scopeId7}>${ssrInterpolate(item.manual.title)}</h5><h5 class="font-weight-regular"${_scopeId7}>Quantity: ${ssrInterpolate(item.quantity)}</h5>`);
                                                  } else {
                                                    return [
                                                      createVNode("h5", { class: "mb-1" }, toDisplayString(item.manual.title), 1),
                                                      createVNode("h5", { class: "font-weight-regular" }, "Quantity: " + toDisplayString(item.quantity), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(VCol, {
                                                cols: "12",
                                                sm: "2"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<h4 class="price-text-color text-center"${_scopeId7}>$${ssrInterpolate(item.price)}</h4>`);
                                                  } else {
                                                    return [
                                                      createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(VCol, {
                                                cols: "12",
                                                sm: "2",
                                                class: "text-center"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(VBtn, {
                                                      loading: unref(processing) && unref(selectedCart) == item.id,
                                                      icon: "mdi-delete",
                                                      size: "30",
                                                      color: "red-lighten-1",
                                                      variant: "text",
                                                      onClick: ($event) => deleteCart(item.id)
                                                    }, null, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(VBtn, {
                                                        loading: unref(processing) && unref(selectedCart) == item.id,
                                                        icon: "mdi-delete",
                                                        size: "30",
                                                        color: "red-lighten-1",
                                                        variant: "text",
                                                        onClick: ($event) => deleteCart(item.id)
                                                      }, null, 8, ["loading", "onClick"])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              if (index + 1 != unref(cartStore).cartItems.length) {
                                                _push7(ssrRenderComponent(VDivider, null, null, _parent7, _scopeId6));
                                              } else {
                                                _push7(`<!---->`);
                                              }
                                            } else {
                                              return [
                                                createVNode(VCol, {
                                                  class: "d-flex justify-between d-sm-inline",
                                                  cols: "12",
                                                  sm: "3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VImg, {
                                                      src: item.thumbnail,
                                                      "lazy-src": _imports_1,
                                                      width: "70",
                                                      height: "70",
                                                      rounded: ""
                                                    }, {
                                                      placeholder: withCtx(() => [
                                                        createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                          createVNode(VProgressCircular, {
                                                            color: "grey-lighten-4",
                                                            indeterminate: ""
                                                          })
                                                        ])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["src"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VCol, {
                                                  class: "text-center text-sm-left",
                                                  cols: "12",
                                                  sm: "5"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("h5", { class: "mb-1" }, toDisplayString(item.manual.title), 1),
                                                    createVNode("h5", { class: "font-weight-regular" }, "Quantity: " + toDisplayString(item.quantity), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  sm: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  sm: "2",
                                                  class: "text-center"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VBtn, {
                                                      loading: unref(processing) && unref(selectedCart) == item.id,
                                                      icon: "mdi-delete",
                                                      size: "30",
                                                      color: "red-lighten-1",
                                                      variant: "text",
                                                      onClick: ($event) => deleteCart(item.id)
                                                    }, null, 8, ["loading", "onClick"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                index + 1 != unref(cartStore).cartItems.length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(cartStore).cartItems, (item, index) => {
                                          return openBlock(), createBlock(VRow, {
                                            key: item.id,
                                            align: "center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                class: "d-flex justify-between d-sm-inline",
                                                cols: "12",
                                                sm: "3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    src: item.thumbnail,
                                                    "lazy-src": _imports_1,
                                                    width: "70",
                                                    height: "70",
                                                    rounded: ""
                                                  }, {
                                                    placeholder: withCtx(() => [
                                                      createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                        createVNode(VProgressCircular, {
                                                          color: "grey-lighten-4",
                                                          indeterminate: ""
                                                        })
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["src"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VCol, {
                                                class: "text-center text-sm-left",
                                                cols: "12",
                                                sm: "5"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("h5", { class: "mb-1" }, toDisplayString(item.manual.title), 1),
                                                  createVNode("h5", { class: "font-weight-regular" }, "Quantity: " + toDisplayString(item.quantity), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VCol, {
                                                cols: "12",
                                                sm: "2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VCol, {
                                                cols: "12",
                                                sm: "2",
                                                class: "text-center"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VBtn, {
                                                    loading: unref(processing) && unref(selectedCart) == item.id,
                                                    icon: "mdi-delete",
                                                    size: "30",
                                                    color: "red-lighten-1",
                                                    variant: "text",
                                                    onClick: ($event) => deleteCart(item.id)
                                                  }, null, 8, ["loading", "onClick"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              index + 1 != unref(cartStore).cartItems.length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VSheet, { color: "grey-lighten-3 pa-5 mb-5" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="d-flex flex-column"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VRow, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCol, { cols: "6" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<h3${_scopeId7}>Total</h3>`);
                                                } else {
                                                  return [
                                                    createVNode("h3", null, "Total")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCol, {
                                              cols: "6",
                                              class: "text-end"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<h3${_scopeId7}>$${ssrInterpolate(unref(cartStore).totalPrice)}</h3>`);
                                                } else {
                                                  return [
                                                    createVNode("h3", null, "$" + toDisplayString(unref(cartStore).totalPrice), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCol, { cols: "6" }, {
                                                default: withCtx(() => [
                                                  createVNode("h3", null, "Total")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "6",
                                                class: "text-end"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("h3", null, "$" + toDisplayString(unref(cartStore).totalPrice), 1)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "d-flex flex-column" }, [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, { cols: "6" }, {
                                                default: withCtx(() => [
                                                  createVNode("h3", null, "Total")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "6",
                                                class: "text-end"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("h3", null, "$" + toDisplayString(unref(cartStore).totalPrice), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VSheet, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, {
                                        onClick: checkout,
                                        "prepend-icon": "mdi-cart-arrow-up",
                                        color: "red-lighten-1"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Checkout `);
                                          } else {
                                            return [
                                              createTextVNode(" Checkout ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, {
                                          onClick: checkout,
                                          "prepend-icon": "mdi-cart-arrow-up",
                                          color: "red-lighten-1"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Checkout ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<!--]-->`);
                              } else {
                                _push5(`<p class="text-center"${_scopeId4}>No records found</p>`);
                              }
                            } else {
                              return [
                                unref(showAlert) ? (openBlock(), createBlock(VAlert, {
                                  key: 0,
                                  text: unref(alertMessage),
                                  type: "success",
                                  class: "mb-5",
                                  closable: ""
                                }, null, 8, ["text"])) : createCommentVNode("", true),
                                unref(cartStore).cartItems.length ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                  createVNode(VSheet, { class: "mb-5" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(cartStore).cartItems, (item, index) => {
                                        return openBlock(), createBlock(VRow, {
                                          key: item.id,
                                          align: "center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              class: "d-flex justify-between d-sm-inline",
                                              cols: "12",
                                              sm: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  src: item.thumbnail,
                                                  "lazy-src": _imports_1,
                                                  width: "70",
                                                  height: "70",
                                                  rounded: ""
                                                }, {
                                                  placeholder: withCtx(() => [
                                                    createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                      createVNode(VProgressCircular, {
                                                        color: "grey-lighten-4",
                                                        indeterminate: ""
                                                      })
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["src"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VCol, {
                                              class: "text-center text-sm-left",
                                              cols: "12",
                                              sm: "5"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("h5", { class: "mb-1" }, toDisplayString(item.manual.title), 1),
                                                createVNode("h5", { class: "font-weight-regular" }, "Quantity: " + toDisplayString(item.quantity), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "2",
                                              class: "text-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  loading: unref(processing) && unref(selectedCart) == item.id,
                                                  icon: "mdi-delete",
                                                  size: "30",
                                                  color: "red-lighten-1",
                                                  variant: "text",
                                                  onClick: ($event) => deleteCart(item.id)
                                                }, null, 8, ["loading", "onClick"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            index + 1 != unref(cartStore).cartItems.length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VSheet, { color: "grey-lighten-3 pa-5 mb-5" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex flex-column" }, [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "6" }, {
                                              default: withCtx(() => [
                                                createVNode("h3", null, "Total")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "6",
                                              class: "text-end"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("h3", null, "$" + toDisplayString(unref(cartStore).totalPrice), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VSheet, null, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        onClick: checkout,
                                        "prepend-icon": "mdi-cart-arrow-up",
                                        color: "red-lighten-1"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Checkout ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ], 64)) : (openBlock(), createBlock("p", {
                                  key: 2,
                                  class: "text-center"
                                }, "No records found"))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              unref(showAlert) ? (openBlock(), createBlock(VAlert, {
                                key: 0,
                                text: unref(alertMessage),
                                type: "success",
                                class: "mb-5",
                                closable: ""
                              }, null, 8, ["text"])) : createCommentVNode("", true),
                              unref(cartStore).cartItems.length ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createVNode(VSheet, { class: "mb-5" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(cartStore).cartItems, (item, index) => {
                                      return openBlock(), createBlock(VRow, {
                                        key: item.id,
                                        align: "center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            class: "d-flex justify-between d-sm-inline",
                                            cols: "12",
                                            sm: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                src: item.thumbnail,
                                                "lazy-src": _imports_1,
                                                width: "70",
                                                height: "70",
                                                rounded: ""
                                              }, {
                                                placeholder: withCtx(() => [
                                                  createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                    createVNode(VProgressCircular, {
                                                      color: "grey-lighten-4",
                                                      indeterminate: ""
                                                    })
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1032, ["src"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCol, {
                                            class: "text-center text-sm-left",
                                            cols: "12",
                                            sm: "5"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("h5", { class: "mb-1" }, toDisplayString(item.manual.title), 1),
                                              createVNode("h5", { class: "font-weight-regular" }, "Quantity: " + toDisplayString(item.quantity), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "2",
                                            class: "text-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                loading: unref(processing) && unref(selectedCart) == item.id,
                                                icon: "mdi-delete",
                                                size: "30",
                                                color: "red-lighten-1",
                                                variant: "text",
                                                onClick: ($event) => deleteCart(item.id)
                                              }, null, 8, ["loading", "onClick"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          index + 1 != unref(cartStore).cartItems.length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSheet, { color: "grey-lighten-3 pa-5 mb-5" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex flex-column" }, [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "6" }, {
                                            default: withCtx(() => [
                                              createVNode("h3", null, "Total")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "6",
                                            class: "text-end"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("h3", null, "$" + toDisplayString(unref(cartStore).totalPrice), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSheet, null, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      onClick: checkout,
                                      "prepend-icon": "mdi-cart-arrow-up",
                                      color: "red-lighten-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Checkout ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ], 64)) : (openBlock(), createBlock("p", {
                                key: 2,
                                class: "text-center"
                              }, "No records found"))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardItem, null, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            unref(showAlert) ? (openBlock(), createBlock(VAlert, {
                              key: 0,
                              text: unref(alertMessage),
                              type: "success",
                              class: "mb-5",
                              closable: ""
                            }, null, 8, ["text"])) : createCommentVNode("", true),
                            unref(cartStore).cartItems.length ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createVNode(VSheet, { class: "mb-5" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(cartStore).cartItems, (item, index) => {
                                    return openBlock(), createBlock(VRow, {
                                      key: item.id,
                                      align: "center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          class: "d-flex justify-between d-sm-inline",
                                          cols: "12",
                                          sm: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, {
                                              src: item.thumbnail,
                                              "lazy-src": _imports_1,
                                              width: "70",
                                              height: "70",
                                              rounded: ""
                                            }, {
                                              placeholder: withCtx(() => [
                                                createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                  createVNode(VProgressCircular, {
                                                    color: "grey-lighten-4",
                                                    indeterminate: ""
                                                  })
                                                ])
                                              ]),
                                              _: 2
                                            }, 1032, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCol, {
                                          class: "text-center text-sm-left",
                                          cols: "12",
                                          sm: "5"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("h5", { class: "mb-1" }, toDisplayString(item.manual.title), 1),
                                            createVNode("h5", { class: "font-weight-regular" }, "Quantity: " + toDisplayString(item.quantity), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "2",
                                          class: "text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              loading: unref(processing) && unref(selectedCart) == item.id,
                                              icon: "mdi-delete",
                                              size: "30",
                                              color: "red-lighten-1",
                                              variant: "text",
                                              onClick: ($event) => deleteCart(item.id)
                                            }, null, 8, ["loading", "onClick"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        index + 1 != unref(cartStore).cartItems.length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              }),
                              createVNode(VSheet, { color: "grey-lighten-3 pa-5 mb-5" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex flex-column" }, [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "6" }, {
                                          default: withCtx(() => [
                                            createVNode("h3", null, "Total")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "6",
                                          class: "text-end"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("h3", null, "$" + toDisplayString(unref(cartStore).totalPrice), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VSheet, null, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    onClick: checkout,
                                    "prepend-icon": "mdi-cart-arrow-up",
                                    color: "red-lighten-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Checkout ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ], 64)) : (openBlock(), createBlock("p", {
                              key: 2,
                              class: "text-center"
                            }, "No records found"))
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { "min-width": "300" }, {
                append: withCtx(() => [
                  createVNode(VBtn, {
                    density: "comfortable",
                    icon: "$close",
                    variant: "plain",
                    onClick: ($event) => menu.value = !unref(menu)
                  }, null, 8, ["onClick"])
                ]),
                default: withCtx(() => [
                  createVNode(VCardItem, null, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          unref(showAlert) ? (openBlock(), createBlock(VAlert, {
                            key: 0,
                            text: unref(alertMessage),
                            type: "success",
                            class: "mb-5",
                            closable: ""
                          }, null, 8, ["text"])) : createCommentVNode("", true),
                          unref(cartStore).cartItems.length ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createVNode(VSheet, { class: "mb-5" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(cartStore).cartItems, (item, index) => {
                                  return openBlock(), createBlock(VRow, {
                                    key: item.id,
                                    align: "center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        class: "d-flex justify-between d-sm-inline",
                                        cols: "12",
                                        sm: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, {
                                            src: item.thumbnail,
                                            "lazy-src": _imports_1,
                                            width: "70",
                                            height: "70",
                                            rounded: ""
                                          }, {
                                            placeholder: withCtx(() => [
                                              createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                createVNode(VProgressCircular, {
                                                  color: "grey-lighten-4",
                                                  indeterminate: ""
                                                })
                                              ])
                                            ]),
                                            _: 2
                                          }, 1032, ["src"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCol, {
                                        class: "text-center text-sm-left",
                                        cols: "12",
                                        sm: "5"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("h5", { class: "mb-1" }, toDisplayString(item.manual.title), 1),
                                          createVNode("h5", { class: "font-weight-regular" }, "Quantity: " + toDisplayString(item.quantity), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "2",
                                        class: "text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            loading: unref(processing) && unref(selectedCart) == item.id,
                                            icon: "mdi-delete",
                                            size: "30",
                                            color: "red-lighten-1",
                                            variant: "text",
                                            onClick: ($event) => deleteCart(item.id)
                                          }, null, 8, ["loading", "onClick"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      index + 1 != unref(cartStore).cartItems.length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            }),
                            createVNode(VSheet, { color: "grey-lighten-3 pa-5 mb-5" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex flex-column" }, [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createVNode("h3", null, "Total")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "6",
                                        class: "text-end"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("h3", null, "$" + toDisplayString(unref(cartStore).totalPrice), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VSheet, null, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  onClick: checkout,
                                  "prepend-icon": "mdi-cart-arrow-up",
                                  color: "red-lighten-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Checkout ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ], 64)) : (openBlock(), createBlock("p", {
                            key: 2,
                            class: "text-center"
                          }, "No records found"))
                        ]),
                        _: 1
                      })
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cart-items.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const makeVHoverProps = propsFactory({
  disabled: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  ...makeDelayProps()
}, "VHover");
const VHover = genericComponent()({
  name: "VHover",
  props: makeVHoverProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isHovering = useProxiedModel(props, "modelValue");
    const {
      runOpenDelay,
      runCloseDelay
    } = useDelay(props, (value) => !props.disabled && (isHovering.value = value));
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots, {
        isHovering: isHovering.value,
        props: {
          onMouseenter: runOpenDelay,
          onMouseleave: runCloseDelay
        }
      });
    };
  }
});

const _sfc_main = {
  __name: "header-menu",
  __ssrInlineRender: true,
  setup(__props) {
    const { isAuthenticated } = useSanctumAuth();
    const { $showModal, $logout } = useNuxtApp();
    const searching = ref(false);
    const menu = ref(false);
    ref(false);
    ref(null);
    const searchResult = ref([]);
    const searchQuery = ref("");
    const debounce = (func, timeout = 500) => {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    };
    const search = debounce(async () => {
      try {
        menu.value = true;
        searching.value = true;
        const { data } = await useBaseFetch("/items/search", {
          method: "GET",
          params: {
            search: searchQuery.value
          }
        });
        searchResult.value = data;
      } catch (error) {
        console.error(error);
      } finally {
        searching.value = false;
      }
    });
    const logoutDialog = ref(false);
    const handleDialog = () => {
      if (isAuthenticated.value) {
        logoutDialog.value = true;
      } else {
        $showModal("auth-modal");
      }
    };
    const logoutUser = async () => {
      try {
        await $logout();
        logoutDialog.value = false;
      } catch (error) {
        console.error(error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cart_items = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b6783062>`);
      _push(ssrRenderComponent(VCard, {
        elevation: "3",
        color: "grey-lighten-3",
        class: "d-flex align-center",
        height: "100%"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "12",
                          md: "4",
                          class: "d-flex justify-md-start justify-center align-center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VImg, {
                                onClick: ($event) => _ctx.$router.push("/"),
                                class: "me-sm-8 cursor-pointer",
                                "max-width": "200",
                                src: _imports_0
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VImg, {
                                  onClick: ($event) => _ctx.$router.push("/"),
                                  class: "me-sm-8 cursor-pointer",
                                  "max-width": "200",
                                  src: _imports_0
                                }, null, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "12",
                          md: "8",
                          class: "d-flex justify-center justify-md-end align-center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-center" data-v-b6783062${_scopeId4}>`);
                              _push5(ssrRenderComponent(VMenu, {
                                modelValue: unref(menu),
                                "onUpdate:modelValue": ($event) => isRef(menu) ? menu.value = $event : null,
                                "close-on-content-click": false,
                                "close-on-back": "",
                                "open-on-focus": true,
                                transition: "scale-transition",
                                "max-width": 700,
                                width: "700",
                                "max-height": 600
                              }, {
                                activator: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, mergeProps({
                                      label: "Search manuals",
                                      variant: "outlined",
                                      density: "comfortable",
                                      "hide-details": "",
                                      width: "300"
                                    }, props, {
                                      class: "global-search",
                                      "append-inner-icon": "mdi-magnify",
                                      modelValue: unref(searchQuery),
                                      "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                                      onInput: unref(search)
                                    }), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, mergeProps({
                                        label: "Search manuals",
                                        variant: "outlined",
                                        density: "comfortable",
                                        "hide-details": "",
                                        width: "300"
                                      }, props, {
                                        class: "global-search",
                                        "append-inner-icon": "mdi-magnify",
                                        modelValue: unref(searchQuery),
                                        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                                        onInput: unref(search)
                                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCard, {
                                      "min-width": "300",
                                      title: "Search Results"
                                    }, {
                                      append: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            density: "comfortable",
                                            icon: "$close",
                                            variant: "plain",
                                            onClick: ($event) => menu.value = !unref(menu)
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              density: "comfortable",
                                              icon: "$close",
                                              variant: "plain",
                                              onClick: ($event) => menu.value = !unref(menu)
                                            }, null, 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardItem, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCardText, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      if (unref(searching)) {
                                                        _push9(ssrRenderComponent(VSkeletonLoader, {
                                                          loading: unref(searching),
                                                          type: "list-item-avatar-two-line"
                                                        }, null, _parent9, _scopeId8));
                                                      } else {
                                                        _push9(`<!--[-->`);
                                                        if (unref(searchResult).length) {
                                                          _push9(`<!--[-->`);
                                                          ssrRenderList(unref(searchResult), (item, index) => {
                                                            _push9(ssrRenderComponent(VSheet, {
                                                              class: "cursor-pointer",
                                                              key: item.id,
                                                              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`)
                                                            }, {
                                                              default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                                if (_push10) {
                                                                  _push10(ssrRenderComponent(VHover, { "open-delay": "200" }, {
                                                                    default: withCtx(({ isHovering, props }, _push11, _parent11, _scopeId10) => {
                                                                      if (_push11) {
                                                                        _push11(ssrRenderComponent(VRow, mergeProps({
                                                                          align: "center",
                                                                          class: ["search-result-row", { "on-hover": isHovering }],
                                                                          ref_for: true
                                                                        }, props), {
                                                                          default: withCtx((_10, _push12, _parent12, _scopeId11) => {
                                                                            if (_push12) {
                                                                              _push12(ssrRenderComponent(VCol, {
                                                                                class: "d-flex justify-between d-sm-inline",
                                                                                cols: "12",
                                                                                sm: "2"
                                                                              }, {
                                                                                default: withCtx((_11, _push13, _parent13, _scopeId12) => {
                                                                                  if (_push13) {
                                                                                    _push13(ssrRenderComponent(VImg, {
                                                                                      src: item.thumbnail_url,
                                                                                      "lazy-src": _imports_1,
                                                                                      width: "70",
                                                                                      height: "70",
                                                                                      rounded: ""
                                                                                    }, {
                                                                                      placeholder: withCtx((_12, _push14, _parent14, _scopeId13) => {
                                                                                        if (_push14) {
                                                                                          _push14(`<div class="d-flex align-center justify-center fill-height" data-v-b6783062${_scopeId13}>`);
                                                                                          _push14(ssrRenderComponent(VProgressCircular, {
                                                                                            color: "grey-lighten-4",
                                                                                            indeterminate: ""
                                                                                          }, null, _parent14, _scopeId13));
                                                                                          _push14(`</div>`);
                                                                                        } else {
                                                                                          return [
                                                                                            createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                                                              createVNode(VProgressCircular, {
                                                                                                color: "grey-lighten-4",
                                                                                                indeterminate: ""
                                                                                              })
                                                                                            ])
                                                                                          ];
                                                                                        }
                                                                                      }),
                                                                                      _: 2
                                                                                    }, _parent13, _scopeId12));
                                                                                  } else {
                                                                                    return [
                                                                                      createVNode(VImg, {
                                                                                        src: item.thumbnail_url,
                                                                                        "lazy-src": _imports_1,
                                                                                        width: "70",
                                                                                        height: "70",
                                                                                        rounded: ""
                                                                                      }, {
                                                                                        placeholder: withCtx(() => [
                                                                                          createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                                                            createVNode(VProgressCircular, {
                                                                                              color: "grey-lighten-4",
                                                                                              indeterminate: ""
                                                                                            })
                                                                                          ])
                                                                                        ]),
                                                                                        _: 2
                                                                                      }, 1032, ["src"])
                                                                                    ];
                                                                                  }
                                                                                }),
                                                                                _: 2
                                                                              }, _parent12, _scopeId11));
                                                                              _push12(ssrRenderComponent(VCol, {
                                                                                class: "text-center text-sm-left",
                                                                                cols: "12",
                                                                                sm: "8"
                                                                              }, {
                                                                                default: withCtx((_11, _push13, _parent13, _scopeId12) => {
                                                                                  if (_push13) {
                                                                                    _push13(`<h5 class="mb-1" data-v-b6783062${_scopeId12}>${ssrInterpolate(item.title)}</h5>`);
                                                                                  } else {
                                                                                    return [
                                                                                      createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1)
                                                                                    ];
                                                                                  }
                                                                                }),
                                                                                _: 2
                                                                              }, _parent12, _scopeId11));
                                                                              _push12(ssrRenderComponent(VCol, {
                                                                                cols: "12",
                                                                                sm: "2"
                                                                              }, {
                                                                                default: withCtx((_11, _push13, _parent13, _scopeId12) => {
                                                                                  if (_push13) {
                                                                                    _push13(`<h4 class="price-text-color text-center" data-v-b6783062${_scopeId12}>$${ssrInterpolate(item.price)}</h4>`);
                                                                                  } else {
                                                                                    return [
                                                                                      createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                                                                    ];
                                                                                  }
                                                                                }),
                                                                                _: 2
                                                                              }, _parent12, _scopeId11));
                                                                              if (index + 1 != unref(searchResult).length) {
                                                                                _push12(ssrRenderComponent(VDivider, null, null, _parent12, _scopeId11));
                                                                              } else {
                                                                                _push12(`<!---->`);
                                                                              }
                                                                            } else {
                                                                              return [
                                                                                createVNode(VCol, {
                                                                                  class: "d-flex justify-between d-sm-inline",
                                                                                  cols: "12",
                                                                                  sm: "2"
                                                                                }, {
                                                                                  default: withCtx(() => [
                                                                                    createVNode(VImg, {
                                                                                      src: item.thumbnail_url,
                                                                                      "lazy-src": _imports_1,
                                                                                      width: "70",
                                                                                      height: "70",
                                                                                      rounded: ""
                                                                                    }, {
                                                                                      placeholder: withCtx(() => [
                                                                                        createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                                                          createVNode(VProgressCircular, {
                                                                                            color: "grey-lighten-4",
                                                                                            indeterminate: ""
                                                                                          })
                                                                                        ])
                                                                                      ]),
                                                                                      _: 2
                                                                                    }, 1032, ["src"])
                                                                                  ]),
                                                                                  _: 2
                                                                                }, 1024),
                                                                                createVNode(VCol, {
                                                                                  class: "text-center text-sm-left",
                                                                                  cols: "12",
                                                                                  sm: "8"
                                                                                }, {
                                                                                  default: withCtx(() => [
                                                                                    createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1)
                                                                                  ]),
                                                                                  _: 2
                                                                                }, 1024),
                                                                                createVNode(VCol, {
                                                                                  cols: "12",
                                                                                  sm: "2"
                                                                                }, {
                                                                                  default: withCtx(() => [
                                                                                    createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                                                                  ]),
                                                                                  _: 2
                                                                                }, 1024),
                                                                                index + 1 != unref(searchResult).length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 2
                                                                        }, _parent11, _scopeId10));
                                                                      } else {
                                                                        return [
                                                                          createVNode(VRow, mergeProps({
                                                                            align: "center",
                                                                            class: ["search-result-row", { "on-hover": isHovering }],
                                                                            ref_for: true
                                                                          }, props), {
                                                                            default: withCtx(() => [
                                                                              createVNode(VCol, {
                                                                                class: "d-flex justify-between d-sm-inline",
                                                                                cols: "12",
                                                                                sm: "2"
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createVNode(VImg, {
                                                                                    src: item.thumbnail_url,
                                                                                    "lazy-src": _imports_1,
                                                                                    width: "70",
                                                                                    height: "70",
                                                                                    rounded: ""
                                                                                  }, {
                                                                                    placeholder: withCtx(() => [
                                                                                      createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                                                        createVNode(VProgressCircular, {
                                                                                          color: "grey-lighten-4",
                                                                                          indeterminate: ""
                                                                                        })
                                                                                      ])
                                                                                    ]),
                                                                                    _: 2
                                                                                  }, 1032, ["src"])
                                                                                ]),
                                                                                _: 2
                                                                              }, 1024),
                                                                              createVNode(VCol, {
                                                                                class: "text-center text-sm-left",
                                                                                cols: "12",
                                                                                sm: "8"
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1)
                                                                                ]),
                                                                                _: 2
                                                                              }, 1024),
                                                                              createVNode(VCol, {
                                                                                cols: "12",
                                                                                sm: "2"
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                                                                ]),
                                                                                _: 2
                                                                              }, 1024),
                                                                              index + 1 != unref(searchResult).length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                                                            ]),
                                                                            _: 2
                                                                          }, 1040, ["class"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 2
                                                                  }, _parent10, _scopeId9));
                                                                } else {
                                                                  return [
                                                                    createVNode(VHover, { "open-delay": "200" }, {
                                                                      default: withCtx(({ isHovering, props }) => [
                                                                        createVNode(VRow, mergeProps({
                                                                          align: "center",
                                                                          class: ["search-result-row", { "on-hover": isHovering }],
                                                                          ref_for: true
                                                                        }, props), {
                                                                          default: withCtx(() => [
                                                                            createVNode(VCol, {
                                                                              class: "d-flex justify-between d-sm-inline",
                                                                              cols: "12",
                                                                              sm: "2"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(VImg, {
                                                                                  src: item.thumbnail_url,
                                                                                  "lazy-src": _imports_1,
                                                                                  width: "70",
                                                                                  height: "70",
                                                                                  rounded: ""
                                                                                }, {
                                                                                  placeholder: withCtx(() => [
                                                                                    createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                                                      createVNode(VProgressCircular, {
                                                                                        color: "grey-lighten-4",
                                                                                        indeterminate: ""
                                                                                      })
                                                                                    ])
                                                                                  ]),
                                                                                  _: 2
                                                                                }, 1032, ["src"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024),
                                                                            createVNode(VCol, {
                                                                              class: "text-center text-sm-left",
                                                                              cols: "12",
                                                                              sm: "8"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1)
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024),
                                                                            createVNode(VCol, {
                                                                              cols: "12",
                                                                              sm: "2"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024),
                                                                            index + 1 != unref(searchResult).length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1040, ["class"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ];
                                                                }
                                                              }),
                                                              _: 2
                                                            }, _parent9, _scopeId8));
                                                          });
                                                          _push9(`<!--]-->`);
                                                        } else {
                                                          _push9(`<p class="text-center" data-v-b6783062${_scopeId8}>No records found</p>`);
                                                        }
                                                        _push9(`<!--]-->`);
                                                      }
                                                    } else {
                                                      return [
                                                        unref(searching) ? (openBlock(), createBlock(VSkeletonLoader, {
                                                          key: 0,
                                                          loading: unref(searching),
                                                          type: "list-item-avatar-two-line"
                                                        }, null, 8, ["loading"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                                          unref(searchResult).length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(searchResult), (item, index) => {
                                                            return openBlock(), createBlock(VSheet, {
                                                              class: "cursor-pointer",
                                                              key: item.id,
                                                              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`)
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VHover, { "open-delay": "200" }, {
                                                                  default: withCtx(({ isHovering, props }) => [
                                                                    createVNode(VRow, mergeProps({
                                                                      align: "center",
                                                                      class: ["search-result-row", { "on-hover": isHovering }],
                                                                      ref_for: true
                                                                    }, props), {
                                                                      default: withCtx(() => [
                                                                        createVNode(VCol, {
                                                                          class: "d-flex justify-between d-sm-inline",
                                                                          cols: "12",
                                                                          sm: "2"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(VImg, {
                                                                              src: item.thumbnail_url,
                                                                              "lazy-src": _imports_1,
                                                                              width: "70",
                                                                              height: "70",
                                                                              rounded: ""
                                                                            }, {
                                                                              placeholder: withCtx(() => [
                                                                                createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                                                  createVNode(VProgressCircular, {
                                                                                    color: "grey-lighten-4",
                                                                                    indeterminate: ""
                                                                                  })
                                                                                ])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1032, ["src"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(VCol, {
                                                                          class: "text-center text-sm-left",
                                                                          cols: "12",
                                                                          sm: "8"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(VCol, {
                                                                          cols: "12",
                                                                          sm: "2"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        index + 1 != unref(searchResult).length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1040, ["class"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["onClick"]);
                                                          }), 128)) : (openBlock(), createBlock("p", {
                                                            key: 1,
                                                            class: "text-center"
                                                          }, "No records found"))
                                                        ], 64))
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCardText, null, {
                                                    default: withCtx(() => [
                                                      unref(searching) ? (openBlock(), createBlock(VSkeletonLoader, {
                                                        key: 0,
                                                        loading: unref(searching),
                                                        type: "list-item-avatar-two-line"
                                                      }, null, 8, ["loading"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                                        unref(searchResult).length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(searchResult), (item, index) => {
                                                          return openBlock(), createBlock(VSheet, {
                                                            class: "cursor-pointer",
                                                            key: item.id,
                                                            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`)
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VHover, { "open-delay": "200" }, {
                                                                default: withCtx(({ isHovering, props }) => [
                                                                  createVNode(VRow, mergeProps({
                                                                    align: "center",
                                                                    class: ["search-result-row", { "on-hover": isHovering }],
                                                                    ref_for: true
                                                                  }, props), {
                                                                    default: withCtx(() => [
                                                                      createVNode(VCol, {
                                                                        class: "d-flex justify-between d-sm-inline",
                                                                        cols: "12",
                                                                        sm: "2"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(VImg, {
                                                                            src: item.thumbnail_url,
                                                                            "lazy-src": _imports_1,
                                                                            width: "70",
                                                                            height: "70",
                                                                            rounded: ""
                                                                          }, {
                                                                            placeholder: withCtx(() => [
                                                                              createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                                                createVNode(VProgressCircular, {
                                                                                  color: "grey-lighten-4",
                                                                                  indeterminate: ""
                                                                                })
                                                                              ])
                                                                            ]),
                                                                            _: 2
                                                                          }, 1032, ["src"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(VCol, {
                                                                        class: "text-center text-sm-left",
                                                                        cols: "12",
                                                                        sm: "8"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(VCol, {
                                                                        cols: "12",
                                                                        sm: "2"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      index + 1 != unref(searchResult).length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1040, ["class"])
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["onClick"]);
                                                        }), 128)) : (openBlock(), createBlock("p", {
                                                          key: 1,
                                                          class: "text-center"
                                                        }, "No records found"))
                                                      ], 64))
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCardItem, null, {
                                              default: withCtx(() => [
                                                createVNode(VCardText, null, {
                                                  default: withCtx(() => [
                                                    unref(searching) ? (openBlock(), createBlock(VSkeletonLoader, {
                                                      key: 0,
                                                      loading: unref(searching),
                                                      type: "list-item-avatar-two-line"
                                                    }, null, 8, ["loading"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                                      unref(searchResult).length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(searchResult), (item, index) => {
                                                        return openBlock(), createBlock(VSheet, {
                                                          class: "cursor-pointer",
                                                          key: item.id,
                                                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`)
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VHover, { "open-delay": "200" }, {
                                                              default: withCtx(({ isHovering, props }) => [
                                                                createVNode(VRow, mergeProps({
                                                                  align: "center",
                                                                  class: ["search-result-row", { "on-hover": isHovering }],
                                                                  ref_for: true
                                                                }, props), {
                                                                  default: withCtx(() => [
                                                                    createVNode(VCol, {
                                                                      class: "d-flex justify-between d-sm-inline",
                                                                      cols: "12",
                                                                      sm: "2"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(VImg, {
                                                                          src: item.thumbnail_url,
                                                                          "lazy-src": _imports_1,
                                                                          width: "70",
                                                                          height: "70",
                                                                          rounded: ""
                                                                        }, {
                                                                          placeholder: withCtx(() => [
                                                                            createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                                              createVNode(VProgressCircular, {
                                                                                color: "grey-lighten-4",
                                                                                indeterminate: ""
                                                                              })
                                                                            ])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1032, ["src"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(VCol, {
                                                                      class: "text-center text-sm-left",
                                                                      cols: "12",
                                                                      sm: "8"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(VCol, {
                                                                      cols: "12",
                                                                      sm: "2"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    index + 1 != unref(searchResult).length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                                                  ]),
                                                                  _: 2
                                                                }, 1040, ["class"])
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["onClick"]);
                                                      }), 128)) : (openBlock(), createBlock("p", {
                                                        key: 1,
                                                        class: "text-center"
                                                      }, "No records found"))
                                                    ], 64))
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCard, {
                                        "min-width": "300",
                                        title: "Search Results"
                                      }, {
                                        append: withCtx(() => [
                                          createVNode(VBtn, {
                                            density: "comfortable",
                                            icon: "$close",
                                            variant: "plain",
                                            onClick: ($event) => menu.value = !unref(menu)
                                          }, null, 8, ["onClick"])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VCardItem, null, {
                                            default: withCtx(() => [
                                              createVNode(VCardText, null, {
                                                default: withCtx(() => [
                                                  unref(searching) ? (openBlock(), createBlock(VSkeletonLoader, {
                                                    key: 0,
                                                    loading: unref(searching),
                                                    type: "list-item-avatar-two-line"
                                                  }, null, 8, ["loading"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                                    unref(searchResult).length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(searchResult), (item, index) => {
                                                      return openBlock(), createBlock(VSheet, {
                                                        class: "cursor-pointer",
                                                        key: item.id,
                                                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VHover, { "open-delay": "200" }, {
                                                            default: withCtx(({ isHovering, props }) => [
                                                              createVNode(VRow, mergeProps({
                                                                align: "center",
                                                                class: ["search-result-row", { "on-hover": isHovering }],
                                                                ref_for: true
                                                              }, props), {
                                                                default: withCtx(() => [
                                                                  createVNode(VCol, {
                                                                    class: "d-flex justify-between d-sm-inline",
                                                                    cols: "12",
                                                                    sm: "2"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(VImg, {
                                                                        src: item.thumbnail_url,
                                                                        "lazy-src": _imports_1,
                                                                        width: "70",
                                                                        height: "70",
                                                                        rounded: ""
                                                                      }, {
                                                                        placeholder: withCtx(() => [
                                                                          createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                                            createVNode(VProgressCircular, {
                                                                              color: "grey-lighten-4",
                                                                              indeterminate: ""
                                                                            })
                                                                          ])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1032, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(VCol, {
                                                                    class: "text-center text-sm-left",
                                                                    cols: "12",
                                                                    sm: "8"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(VCol, {
                                                                    cols: "12",
                                                                    sm: "2"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  index + 1 != unref(searchResult).length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                                                ]),
                                                                _: 2
                                                              }, 1040, ["class"])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"]);
                                                    }), 128)) : (openBlock(), createBlock("p", {
                                                      key: 1,
                                                      class: "text-center"
                                                    }, "No records found"))
                                                  ], 64))
                                                ]),
                                                _: 1
                                              })
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_cart_items, { class: "mx-2" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, {
                                vertical: "",
                                inset: ""
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VMenu, { location: "start" }, {
                                activator: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, mergeProps({
                                      color: "grey-darken-1",
                                      class: "text-none mx-2",
                                      density: "compact",
                                      size: "40",
                                      rounded: "circle",
                                      variant: "text"
                                    }, props, { stacked: "" }), {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-account`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-account")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VIcon, null, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-account")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, mergeProps({
                                        color: "grey-darken-1",
                                        class: "text-none mx-2",
                                        density: "compact",
                                        size: "40",
                                        rounded: "circle",
                                        variant: "text"
                                      }, props, { stacked: "" }), {
                                        default: withCtx(() => [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-account")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VList, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VListItem, { value: "orders" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VListItemTitle, {
                                                  onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/orders")
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(unref(isAuthenticated) ? "View Orders" : "View Guest Orders")}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(unref(isAuthenticated) ? "View Orders" : "View Guest Orders"), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VListItemTitle, {
                                                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/orders")
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(unref(isAuthenticated) ? "View Orders" : "View Guest Orders"), 1)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VDivider, null, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VListItem, { value: "logout" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VListItemTitle, {
                                                  color: "red-lighten-1",
                                                  onClick: ($event) => handleDialog()
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(unref(isAuthenticated) ? "Logout" : "SignIn")}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(unref(isAuthenticated) ? "Logout" : "SignIn"), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VListItemTitle, {
                                                    color: "red-lighten-1",
                                                    onClick: ($event) => handleDialog()
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(unref(isAuthenticated) ? "Logout" : "SignIn"), 1)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VListItem, { value: "orders" }, {
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, {
                                                  onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/orders")
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(unref(isAuthenticated) ? "View Orders" : "View Guest Orders"), 1)
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VDivider),
                                            createVNode(VListItem, { value: "logout" }, {
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, {
                                                  color: "red-lighten-1",
                                                  onClick: ($event) => handleDialog()
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(unref(isAuthenticated) ? "Logout" : "SignIn"), 1)
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VList, null, {
                                        default: withCtx(() => [
                                          createVNode(VListItem, { value: "orders" }, {
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, {
                                                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/orders")
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(isAuthenticated) ? "View Orders" : "View Guest Orders"), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VDivider),
                                          createVNode(VListItem, { value: "logout" }, {
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, {
                                                color: "red-lighten-1",
                                                onClick: ($event) => handleDialog()
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(isAuthenticated) ? "Logout" : "SignIn"), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
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
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(VMenu, {
                                    modelValue: unref(menu),
                                    "onUpdate:modelValue": ($event) => isRef(menu) ? menu.value = $event : null,
                                    "close-on-content-click": false,
                                    "close-on-back": "",
                                    "open-on-focus": true,
                                    transition: "scale-transition",
                                    "max-width": 700,
                                    width: "700",
                                    "max-height": 600
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(VTextField, mergeProps({
                                        label: "Search manuals",
                                        variant: "outlined",
                                        density: "comfortable",
                                        "hide-details": "",
                                        width: "300"
                                      }, props, {
                                        class: "global-search",
                                        "append-inner-icon": "mdi-magnify",
                                        modelValue: unref(searchQuery),
                                        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                                        onInput: unref(search)
                                      }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        "min-width": "300",
                                        title: "Search Results"
                                      }, {
                                        append: withCtx(() => [
                                          createVNode(VBtn, {
                                            density: "comfortable",
                                            icon: "$close",
                                            variant: "plain",
                                            onClick: ($event) => menu.value = !unref(menu)
                                          }, null, 8, ["onClick"])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VCardItem, null, {
                                            default: withCtx(() => [
                                              createVNode(VCardText, null, {
                                                default: withCtx(() => [
                                                  unref(searching) ? (openBlock(), createBlock(VSkeletonLoader, {
                                                    key: 0,
                                                    loading: unref(searching),
                                                    type: "list-item-avatar-two-line"
                                                  }, null, 8, ["loading"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                                    unref(searchResult).length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(searchResult), (item, index) => {
                                                      return openBlock(), createBlock(VSheet, {
                                                        class: "cursor-pointer",
                                                        key: item.id,
                                                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VHover, { "open-delay": "200" }, {
                                                            default: withCtx(({ isHovering, props }) => [
                                                              createVNode(VRow, mergeProps({
                                                                align: "center",
                                                                class: ["search-result-row", { "on-hover": isHovering }],
                                                                ref_for: true
                                                              }, props), {
                                                                default: withCtx(() => [
                                                                  createVNode(VCol, {
                                                                    class: "d-flex justify-between d-sm-inline",
                                                                    cols: "12",
                                                                    sm: "2"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(VImg, {
                                                                        src: item.thumbnail_url,
                                                                        "lazy-src": _imports_1,
                                                                        width: "70",
                                                                        height: "70",
                                                                        rounded: ""
                                                                      }, {
                                                                        placeholder: withCtx(() => [
                                                                          createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                                            createVNode(VProgressCircular, {
                                                                              color: "grey-lighten-4",
                                                                              indeterminate: ""
                                                                            })
                                                                          ])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1032, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(VCol, {
                                                                    class: "text-center text-sm-left",
                                                                    cols: "12",
                                                                    sm: "8"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(VCol, {
                                                                    cols: "12",
                                                                    sm: "2"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  index + 1 != unref(searchResult).length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                                                ]),
                                                                _: 2
                                                              }, 1040, ["class"])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"]);
                                                    }), 128)) : (openBlock(), createBlock("p", {
                                                      key: 1,
                                                      class: "text-center"
                                                    }, "No records found"))
                                                  ], 64))
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_cart_items, { class: "mx-2" }),
                                  createVNode(VDivider, {
                                    vertical: "",
                                    inset: ""
                                  }),
                                  createVNode(VMenu, { location: "start" }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(VBtn, mergeProps({
                                        color: "grey-darken-1",
                                        class: "text-none mx-2",
                                        density: "compact",
                                        size: "40",
                                        rounded: "circle",
                                        variant: "text"
                                      }, props, { stacked: "" }), {
                                        default: withCtx(() => [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-account")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VList, null, {
                                        default: withCtx(() => [
                                          createVNode(VListItem, { value: "orders" }, {
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, {
                                                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/orders")
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(isAuthenticated) ? "View Orders" : "View Guest Orders"), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VDivider),
                                          createVNode(VListItem, { value: "logout" }, {
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, {
                                                color: "red-lighten-1",
                                                onClick: ($event) => handleDialog()
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(isAuthenticated) ? "Logout" : "SignIn"), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "12",
                            md: "4",
                            class: "d-flex justify-md-start justify-center align-center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                onClick: ($event) => _ctx.$router.push("/"),
                                class: "me-sm-8 cursor-pointer",
                                "max-width": "200",
                                src: _imports_0
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "12",
                            md: "8",
                            class: "d-flex justify-center justify-md-end align-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode(VMenu, {
                                  modelValue: unref(menu),
                                  "onUpdate:modelValue": ($event) => isRef(menu) ? menu.value = $event : null,
                                  "close-on-content-click": false,
                                  "close-on-back": "",
                                  "open-on-focus": true,
                                  transition: "scale-transition",
                                  "max-width": 700,
                                  width: "700",
                                  "max-height": 600
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(VTextField, mergeProps({
                                      label: "Search manuals",
                                      variant: "outlined",
                                      density: "comfortable",
                                      "hide-details": "",
                                      width: "300"
                                    }, props, {
                                      class: "global-search",
                                      "append-inner-icon": "mdi-magnify",
                                      modelValue: unref(searchQuery),
                                      "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                                      onInput: unref(search)
                                    }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      "min-width": "300",
                                      title: "Search Results"
                                    }, {
                                      append: withCtx(() => [
                                        createVNode(VBtn, {
                                          density: "comfortable",
                                          icon: "$close",
                                          variant: "plain",
                                          onClick: ($event) => menu.value = !unref(menu)
                                        }, null, 8, ["onClick"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VCardItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VCardText, null, {
                                              default: withCtx(() => [
                                                unref(searching) ? (openBlock(), createBlock(VSkeletonLoader, {
                                                  key: 0,
                                                  loading: unref(searching),
                                                  type: "list-item-avatar-two-line"
                                                }, null, 8, ["loading"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                                  unref(searchResult).length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(searchResult), (item, index) => {
                                                    return openBlock(), createBlock(VSheet, {
                                                      class: "cursor-pointer",
                                                      key: item.id,
                                                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VHover, { "open-delay": "200" }, {
                                                          default: withCtx(({ isHovering, props }) => [
                                                            createVNode(VRow, mergeProps({
                                                              align: "center",
                                                              class: ["search-result-row", { "on-hover": isHovering }],
                                                              ref_for: true
                                                            }, props), {
                                                              default: withCtx(() => [
                                                                createVNode(VCol, {
                                                                  class: "d-flex justify-between d-sm-inline",
                                                                  cols: "12",
                                                                  sm: "2"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(VImg, {
                                                                      src: item.thumbnail_url,
                                                                      "lazy-src": _imports_1,
                                                                      width: "70",
                                                                      height: "70",
                                                                      rounded: ""
                                                                    }, {
                                                                      placeholder: withCtx(() => [
                                                                        createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                                          createVNode(VProgressCircular, {
                                                                            color: "grey-lighten-4",
                                                                            indeterminate: ""
                                                                          })
                                                                        ])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1032, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(VCol, {
                                                                  class: "text-center text-sm-left",
                                                                  cols: "12",
                                                                  sm: "8"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(VCol, {
                                                                  cols: "12",
                                                                  sm: "2"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                index + 1 != unref(searchResult).length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                                              ]),
                                                              _: 2
                                                            }, 1040, ["class"])
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"]);
                                                  }), 128)) : (openBlock(), createBlock("p", {
                                                    key: 1,
                                                    class: "text-center"
                                                  }, "No records found"))
                                                ], 64))
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_cart_items, { class: "mx-2" }),
                                createVNode(VDivider, {
                                  vertical: "",
                                  inset: ""
                                }),
                                createVNode(VMenu, { location: "start" }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(VBtn, mergeProps({
                                      color: "grey-darken-1",
                                      class: "text-none mx-2",
                                      density: "compact",
                                      size: "40",
                                      rounded: "circle",
                                      variant: "text"
                                    }, props, { stacked: "" }), {
                                      default: withCtx(() => [
                                        createVNode(VIcon, null, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-account")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VList, null, {
                                      default: withCtx(() => [
                                        createVNode(VListItem, { value: "orders" }, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, {
                                              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/orders")
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(isAuthenticated) ? "View Orders" : "View Guest Orders"), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VDivider),
                                        createVNode(VListItem, { value: "logout" }, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, {
                                              color: "red-lighten-1",
                                              onClick: ($event) => handleDialog()
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(isAuthenticated) ? "Logout" : "SignIn"), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          sm: "12",
                          md: "4",
                          class: "d-flex justify-md-start justify-center align-center"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              onClick: ($event) => _ctx.$router.push("/"),
                              class: "me-sm-8 cursor-pointer",
                              "max-width": "200",
                              src: _imports_0
                            }, null, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "12",
                          md: "8",
                          class: "d-flex justify-center justify-md-end align-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(VMenu, {
                                modelValue: unref(menu),
                                "onUpdate:modelValue": ($event) => isRef(menu) ? menu.value = $event : null,
                                "close-on-content-click": false,
                                "close-on-back": "",
                                "open-on-focus": true,
                                transition: "scale-transition",
                                "max-width": 700,
                                width: "700",
                                "max-height": 600
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(VTextField, mergeProps({
                                    label: "Search manuals",
                                    variant: "outlined",
                                    density: "comfortable",
                                    "hide-details": "",
                                    width: "300"
                                  }, props, {
                                    class: "global-search",
                                    "append-inner-icon": "mdi-magnify",
                                    modelValue: unref(searchQuery),
                                    "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                                    onInput: unref(search)
                                  }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    "min-width": "300",
                                    title: "Search Results"
                                  }, {
                                    append: withCtx(() => [
                                      createVNode(VBtn, {
                                        density: "comfortable",
                                        icon: "$close",
                                        variant: "plain",
                                        onClick: ($event) => menu.value = !unref(menu)
                                      }, null, 8, ["onClick"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VCardItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VCardText, null, {
                                            default: withCtx(() => [
                                              unref(searching) ? (openBlock(), createBlock(VSkeletonLoader, {
                                                key: 0,
                                                loading: unref(searching),
                                                type: "list-item-avatar-two-line"
                                              }, null, 8, ["loading"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                                unref(searchResult).length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(searchResult), (item, index) => {
                                                  return openBlock(), createBlock(VSheet, {
                                                    class: "cursor-pointer",
                                                    key: item.id,
                                                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VHover, { "open-delay": "200" }, {
                                                        default: withCtx(({ isHovering, props }) => [
                                                          createVNode(VRow, mergeProps({
                                                            align: "center",
                                                            class: ["search-result-row", { "on-hover": isHovering }],
                                                            ref_for: true
                                                          }, props), {
                                                            default: withCtx(() => [
                                                              createVNode(VCol, {
                                                                class: "d-flex justify-between d-sm-inline",
                                                                cols: "12",
                                                                sm: "2"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VImg, {
                                                                    src: item.thumbnail_url,
                                                                    "lazy-src": _imports_1,
                                                                    width: "70",
                                                                    height: "70",
                                                                    rounded: ""
                                                                  }, {
                                                                    placeholder: withCtx(() => [
                                                                      createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                                        createVNode(VProgressCircular, {
                                                                          color: "grey-lighten-4",
                                                                          indeterminate: ""
                                                                        })
                                                                      ])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1032, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(VCol, {
                                                                class: "text-center text-sm-left",
                                                                cols: "12",
                                                                sm: "8"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(VCol, {
                                                                cols: "12",
                                                                sm: "2"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              index + 1 != unref(searchResult).length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                                            ]),
                                                            _: 2
                                                          }, 1040, ["class"])
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"]);
                                                }), 128)) : (openBlock(), createBlock("p", {
                                                  key: 1,
                                                  class: "text-center"
                                                }, "No records found"))
                                              ], 64))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_cart_items, { class: "mx-2" }),
                              createVNode(VDivider, {
                                vertical: "",
                                inset: ""
                              }),
                              createVNode(VMenu, { location: "start" }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(VBtn, mergeProps({
                                    color: "grey-darken-1",
                                    class: "text-none mx-2",
                                    density: "compact",
                                    size: "40",
                                    rounded: "circle",
                                    variant: "text"
                                  }, props, { stacked: "" }), {
                                    default: withCtx(() => [
                                      createVNode(VIcon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-account")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                default: withCtx(() => [
                                  createVNode(VList, null, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, { value: "orders" }, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, {
                                            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/orders")
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(isAuthenticated) ? "View Orders" : "View Guest Orders"), 1)
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider),
                                      createVNode(VListItem, { value: "logout" }, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, {
                                            color: "red-lighten-1",
                                            onClick: ($event) => handleDialog()
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(isAuthenticated) ? "Logout" : "SignIn"), 1)
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        sm: "12",
                        md: "4",
                        class: "d-flex justify-md-start justify-center align-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            onClick: ($event) => _ctx.$router.push("/"),
                            class: "me-sm-8 cursor-pointer",
                            "max-width": "200",
                            src: _imports_0
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "12",
                        md: "8",
                        class: "d-flex justify-center justify-md-end align-center"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode(VMenu, {
                              modelValue: unref(menu),
                              "onUpdate:modelValue": ($event) => isRef(menu) ? menu.value = $event : null,
                              "close-on-content-click": false,
                              "close-on-back": "",
                              "open-on-focus": true,
                              transition: "scale-transition",
                              "max-width": 700,
                              width: "700",
                              "max-height": 600
                            }, {
                              activator: withCtx(({ props }) => [
                                createVNode(VTextField, mergeProps({
                                  label: "Search manuals",
                                  variant: "outlined",
                                  density: "comfortable",
                                  "hide-details": "",
                                  width: "300"
                                }, props, {
                                  class: "global-search",
                                  "append-inner-icon": "mdi-magnify",
                                  modelValue: unref(searchQuery),
                                  "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                                  onInput: unref(search)
                                }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])
                              ]),
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  "min-width": "300",
                                  title: "Search Results"
                                }, {
                                  append: withCtx(() => [
                                    createVNode(VBtn, {
                                      density: "comfortable",
                                      icon: "$close",
                                      variant: "plain",
                                      onClick: ($event) => menu.value = !unref(menu)
                                    }, null, 8, ["onClick"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VCardItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VCardText, null, {
                                          default: withCtx(() => [
                                            unref(searching) ? (openBlock(), createBlock(VSkeletonLoader, {
                                              key: 0,
                                              loading: unref(searching),
                                              type: "list-item-avatar-two-line"
                                            }, null, 8, ["loading"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                              unref(searchResult).length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(searchResult), (item, index) => {
                                                return openBlock(), createBlock(VSheet, {
                                                  class: "cursor-pointer",
                                                  key: item.id,
                                                  onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VHover, { "open-delay": "200" }, {
                                                      default: withCtx(({ isHovering, props }) => [
                                                        createVNode(VRow, mergeProps({
                                                          align: "center",
                                                          class: ["search-result-row", { "on-hover": isHovering }],
                                                          ref_for: true
                                                        }, props), {
                                                          default: withCtx(() => [
                                                            createVNode(VCol, {
                                                              class: "d-flex justify-between d-sm-inline",
                                                              cols: "12",
                                                              sm: "2"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VImg, {
                                                                  src: item.thumbnail_url,
                                                                  "lazy-src": _imports_1,
                                                                  width: "70",
                                                                  height: "70",
                                                                  rounded: ""
                                                                }, {
                                                                  placeholder: withCtx(() => [
                                                                    createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                                      createVNode(VProgressCircular, {
                                                                        color: "grey-lighten-4",
                                                                        indeterminate: ""
                                                                      })
                                                                    ])
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(VCol, {
                                                              class: "text-center text-sm-left",
                                                              cols: "12",
                                                              sm: "8"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(VCol, {
                                                              cols: "12",
                                                              sm: "2"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("h4", { class: "price-text-color text-center" }, "$" + toDisplayString(item.price), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            index + 1 != unref(searchResult).length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                                          ]),
                                                          _: 2
                                                        }, 1040, ["class"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]);
                                              }), 128)) : (openBlock(), createBlock("p", {
                                                key: 1,
                                                class: "text-center"
                                              }, "No records found"))
                                            ], 64))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_cart_items, { class: "mx-2" }),
                            createVNode(VDivider, {
                              vertical: "",
                              inset: ""
                            }),
                            createVNode(VMenu, { location: "start" }, {
                              activator: withCtx(({ props }) => [
                                createVNode(VBtn, mergeProps({
                                  color: "grey-darken-1",
                                  class: "text-none mx-2",
                                  density: "compact",
                                  size: "40",
                                  rounded: "circle",
                                  variant: "text"
                                }, props, { stacked: "" }), {
                                  default: withCtx(() => [
                                    createVNode(VIcon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-account")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1040)
                              ]),
                              default: withCtx(() => [
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, { value: "orders" }, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, {
                                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/orders")
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(isAuthenticated) ? "View Orders" : "View Guest Orders"), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider),
                                    createVNode(VListItem, { value: "logout" }, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, {
                                          color: "red-lighten-1",
                                          onClick: ($event) => handleDialog()
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(isAuthenticated) ? "Logout" : "SignIn"), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
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
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(logoutDialog),
        "onUpdate:modelValue": ($event) => isRef(logoutDialog) ? logoutDialog.value = $event : null,
        width: "auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              "max-width": "400",
              "prepend-icon": "mdi-update",
              text: "Are you sure you want to logout?",
              title: "Logout"
            }, {
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    class: "ms-auto",
                    text: "Cancel",
                    onClick: ($event) => logoutDialog.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    class: "ms-auto",
                    text: "Yes",
                    onClick: logoutUser
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
                      class: "ms-auto",
                      text: "Cancel",
                      onClick: ($event) => logoutDialog.value = false
                    }, null, 8, ["onClick"]),
                    createVNode(VBtn, {
                      class: "ms-auto",
                      text: "Yes",
                      onClick: logoutUser
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, {
                "max-width": "400",
                "prepend-icon": "mdi-update",
                text: "Are you sure you want to logout?",
                title: "Logout"
              }, {
                actions: withCtx(() => [
                  createVNode(VBtn, {
                    class: "ms-auto",
                    text: "Cancel",
                    onClick: ($event) => logoutDialog.value = false
                  }, null, 8, ["onClick"]),
                  createVNode(VBtn, {
                    class: "ms-auto",
                    text: "Yes",
                    onClick: logoutUser
                  })
                ]),
                _: 1
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/header-menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b6783062"]]);

const headerMenu_vue = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: __nuxt_component_0
});

export { VAlert as V, __nuxt_component_0 as _, headerMenu_vue as h };
//# sourceMappingURL=header-menu.vue.mjs.map
