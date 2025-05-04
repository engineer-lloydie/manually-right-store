import { ref, watch, createVNode, mergeProps, Fragment, withCtx, unref, createBlock, openBlock, renderList, useSSRContext, toDisplayString, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_1 } from './image-icon.png.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { V as VWindow, m as makeVWindowProps, a as VWindowItem, b as makeVWindowItemProps } from './VWindowItem.mjs';
import { g as genericComponent, p as propsFactory, h as useProxiedModel, i as useLocale, j as useRender, k as convertToUnit, I as IconValue, l as useCartStore, m as useSanctumAuth } from './server.mjs';
import { V as VDefaultsProvider, a as VProgressLinear, b as VProgressCircular } from './VProgressCircular.mjs';
import { V as VBtn, m as makeGroupItemProps, u as useGroupItem } from './VBtn.mjs';
import { V as VImg, m as makeVImgProps, a as VCard, b as VCardTitle, c as VCardSubtitle, d as VCardText, e as VCardActions } from './VCard.mjs';
import { V as VSheet } from './VSheet.mjs';
import { _ as _imports_0 } from './logo-icon.png.mjs';
import { V as VSlideGroupSymbol, a as VSlideGroup } from './VSlideGroup.mjs';
import './lazy.mjs';
import './ssrBoot.mjs';
import './position.mjs';
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
import './index.mjs';

const makeVCarouselProps = propsFactory({
  color: String,
  cycle: Boolean,
  delimiterIcon: {
    type: IconValue,
    default: "$delimiter"
  },
  height: {
    type: [Number, String],
    default: 500
  },
  hideDelimiters: Boolean,
  hideDelimiterBackground: Boolean,
  interval: {
    type: [Number, String],
    default: 6e3,
    validator: (value) => Number(value) > 0
  },
  progress: [Boolean, String],
  verticalDelimiters: [Boolean, String],
  ...makeVWindowProps({
    continuous: true,
    mandatory: "force",
    showArrows: true
  })
}, "VCarousel");
const VCarousel = genericComponent()({
  name: "VCarousel",
  props: makeVCarouselProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      t
    } = useLocale();
    const windowRef = ref();
    let slideTimeout = -1;
    watch(model, restartTimeout);
    watch(() => props.interval, restartTimeout);
    watch(() => props.cycle, (val) => {
      if (val) restartTimeout();
      else (void 0).clearTimeout(slideTimeout);
    });
    function startTimeout() {
      if (!props.cycle || !windowRef.value) return;
      slideTimeout = (void 0).setTimeout(windowRef.value.group.next, Number(props.interval) > 0 ? Number(props.interval) : 6e3);
    }
    function restartTimeout() {
      (void 0).clearTimeout(slideTimeout);
      (void 0).requestAnimationFrame(startTimeout);
    }
    useRender(() => {
      const windowProps = VWindow.filterProps(props);
      return createVNode(VWindow, mergeProps({
        "ref": windowRef
      }, windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-carousel", {
          "v-carousel--hide-delimiter-background": props.hideDelimiterBackground,
          "v-carousel--vertical-delimiters": props.verticalDelimiters
        }, props.class],
        "style": [{
          height: convertToUnit(props.height)
        }, props.style]
      }), {
        default: slots.default,
        additional: (_ref2) => {
          let {
            group
          } = _ref2;
          return createVNode(Fragment, null, [!props.hideDelimiters && createVNode("div", {
            "class": "v-carousel__controls",
            "style": {
              left: props.verticalDelimiters === "left" && props.verticalDelimiters ? 0 : "auto",
              right: props.verticalDelimiters === "right" ? 0 : "auto"
            }
          }, [group.items.value.length > 0 && createVNode(VDefaultsProvider, {
            "defaults": {
              VBtn: {
                color: props.color,
                icon: props.delimiterIcon,
                size: "x-small",
                variant: "text"
              }
            },
            "scoped": true
          }, {
            default: () => [group.items.value.map((item, index) => {
              const props2 = {
                id: `carousel-item-${item.id}`,
                "aria-label": t("$vuetify.carousel.ariaLabel.delimiter", index + 1, group.items.value.length),
                class: ["v-carousel__controls__item", group.isSelected(item.id) && "v-btn--active"],
                onClick: () => group.select(item.id, true)
              };
              return slots.item ? slots.item({
                props: props2,
                item
              }) : createVNode(VBtn, mergeProps(item, props2), null);
            })]
          })]), props.progress && createVNode(VProgressLinear, {
            "class": "v-carousel__progress",
            "color": typeof props.progress === "string" ? props.progress : void 0,
            "modelValue": (group.getItemIndex(model.value) + 1) / group.items.value.length * 100
          }, null)]);
        },
        prev: slots.prev,
        next: slots.next
      });
    });
    return {};
  }
});

const makeVCarouselItemProps = propsFactory({
  ...makeVImgProps(),
  ...makeVWindowItemProps()
}, "VCarouselItem");
const VCarouselItem = genericComponent()({
  name: "VCarouselItem",
  inheritAttrs: false,
  props: makeVCarouselItemProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    useRender(() => {
      const imgProps = VImg.filterProps(props);
      const windowItemProps = VWindowItem.filterProps(props);
      return createVNode(VWindowItem, mergeProps({
        "class": ["v-carousel-item", props.class]
      }, windowItemProps), {
        default: () => [createVNode(VImg, mergeProps(attrs, imgProps), slots)]
      });
    });
  }
});

const _sfc_main$2 = {
  __name: "banner",
  __ssrInlineRender: true,
  setup(__props) {
    const bannerImages = ref([]);
    const fetching = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCarousel, mergeProps({
        "hide-delimiter-background": "",
        "show-arrows": "hover",
        cycle: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(fetching)) {
              _push2(ssrRenderComponent(VCarouselItem, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VSheet, { height: "100%" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="d-flex align-center justify-center fill-height" data-v-48caac5b${_scopeId3}>`);
                          _push4(ssrRenderComponent(VProgressCircular, {
                            color: "grey-lighten-4",
                            indeterminate: ""
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
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
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VSheet, { height: "100%" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                            createVNode(VProgressCircular, {
                              color: "grey-lighten-4",
                              indeterminate: ""
                            })
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
              _push2(`<!--[-->`);
              if (!unref(bannerImages).length) {
                _push2(ssrRenderComponent(VCarouselItem, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VSheet, {
                        height: "100%",
                        color: "red-lighten-1"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="d-flex align-center justify-center fill-height" data-v-48caac5b${_scopeId3}><p data-v-48caac5b${_scopeId3}>No banners found.</p></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                createVNode("p", null, "No banners found.")
                              ])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VSheet, {
                          height: "100%",
                          color: "red-lighten-1"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                              createVNode("p", null, "No banners found.")
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
                _push2(`<!--[-->`);
                ssrRenderList(unref(bannerImages), (slide, i) => {
                  _push2(ssrRenderComponent(VCarouselItem, { key: i }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(VSheet, { height: "100%" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="d-flex fill-height justify-center align-center" data-v-48caac5b${_scopeId3}>`);
                              _push4(ssrRenderComponent(VImg, {
                                src: slide.url,
                                "lazy-src": _imports_1,
                                width: "100%",
                                height: "100%",
                                class: "fill-height"
                              }, {
                                placeholder: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div class="d-flex align-center justify-center fill-height" data-v-48caac5b${_scopeId4}>`);
                                    _push5(ssrRenderComponent(VProgressCircular, {
                                      color: "grey-lighten-4",
                                      indeterminate: ""
                                    }, null, _parent5, _scopeId4));
                                    _push5(`</div>`);
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
                              }, _parent4, _scopeId3));
                              _push4(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex fill-height justify-center align-center" }, [
                                  createVNode(VImg, {
                                    src: slide.url,
                                    "lazy-src": _imports_1,
                                    width: "100%",
                                    height: "100%",
                                    class: "fill-height"
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
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(VSheet, { height: "100%" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex fill-height justify-center align-center" }, [
                                createVNode(VImg, {
                                  src: slide.url,
                                  "lazy-src": _imports_1,
                                  width: "100%",
                                  height: "100%",
                                  class: "fill-height"
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
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }
              _push2(`<!--]-->`);
            }
          } else {
            return [
              unref(fetching) ? (openBlock(), createBlock(VCarouselItem, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(VSheet, { height: "100%" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                        createVNode(VProgressCircular, {
                          color: "grey-lighten-4",
                          indeterminate: ""
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                !unref(bannerImages).length ? (openBlock(), createBlock(VCarouselItem, { key: 0 }, {
                  default: withCtx(() => [
                    createVNode(VSheet, {
                      height: "100%",
                      color: "red-lighten-1"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                          createVNode("p", null, "No banners found.")
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(bannerImages), (slide, i) => {
                  return openBlock(), createBlock(VCarouselItem, { key: i }, {
                    default: withCtx(() => [
                      createVNode(VSheet, { height: "100%" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex fill-height justify-center align-center" }, [
                            createVNode(VImg, {
                              src: slide.url,
                              "lazy-src": _imports_1,
                              width: "100%",
                              height: "100%",
                              class: "fill-height"
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
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ], 64))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/banner.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-48caac5b"]]);

const VSlideGroupItem = genericComponent()({
  name: "VSlideGroupItem",
  props: makeGroupItemProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const slideGroupItem = useGroupItem(props, VSlideGroupSymbol);
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots, {
        isSelected: slideGroupItem.isSelected.value,
        select: slideGroupItem.select,
        toggle: slideGroupItem.toggle,
        selectedClass: slideGroupItem.selectedClass.value
      });
    };
  }
});

const _sfc_main$1 = {
  __name: "suggested-products",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    flag: {
      type: String,
      required: true
    },
    manualItems: {
      type: Array,
      required: true
    },
    processing: {
      type: Boolean,
      required: true
    }
  },
  setup(__props) {
    const cartStore = useCartStore();
    const { isAuthenticated, user } = useSanctumAuth();
    const props = __props;
    const selectedItem = ref(null);
    const addCart = async (manual) => {
      selectedItem.value = manual.id;
      try {
        cartStore.setNewAddedCart(false);
        await cartStore.addToCart({
          userId: isAuthenticated.value ? user.value.id : null,
          guestId: isAuthenticated.value ? null : localStorage.getItem("guestId"),
          manualId: manual.id,
          price: manual.price,
          quantity: 1
        });
        const params = {};
        if (isAuthenticated.value) {
          params.userId = user.value.id;
        } else {
          params.guestId = localStorage.getItem("guestId");
        }
        await cartStore.fetchCartItems(params);
        cartStore.setNewAddedCart(true);
      } catch (error) {
        console.error(error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9cc98b00>`);
      _push(ssrRenderComponent(VSheet, { class: "mb-10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-center" data-v-9cc98b00${_scopeId}>${ssrInterpolate(props.title)}</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-center" }, toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSheet, {
        class: "mx-auto",
        elevation: "1",
        "max-width": "1500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.processing) {
              _push2(ssrRenderComponent(VSheet, {
                class: "d-flex justify-center align-center",
                height: "400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VProgressCircular, {
                      color: "red-lighten-1",
                      indeterminate: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VProgressCircular, {
                        color: "red-lighten-1",
                        indeterminate: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!--[-->`);
              if (__props.manualItems.length) {
                _push2(ssrRenderComponent(VSlideGroup, {
                  class: "pa-4",
                  "center-active": "",
                  "show-arrows": "",
                  mobile: false
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      ssrRenderList(__props.manualItems, (item, index) => {
                        _push3(ssrRenderComponent(VSlideGroupItem, {
                          key: item.id
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(VCard, {
                                class: "ma-4",
                                "max-width": "350",
                                width: "100%",
                                height: "fit-content"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(VImg, {
                                      class: "align-end text-white ma-4",
                                      height: "320",
                                      src: item.thumbnails[0].url,
                                      "lazy-src": _imports_0,
                                      rounded: "",
                                      cover: ""
                                    }, {
                                      placeholder: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<div class="d-flex align-center justify-center fill-height" data-v-9cc98b00${_scopeId5}>`);
                                          _push6(ssrRenderComponent(VProgressCircular, {
                                            color: "grey-lighten-4",
                                            indeterminate: ""
                                          }, null, _parent6, _scopeId5));
                                          _push6(`</div>`);
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
                                    }, _parent5, _scopeId4));
                                    _push5(ssrRenderComponent(VCardTitle, { class: "text-wrap" }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`${ssrInterpolate(item.title)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(item.title), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(ssrRenderComponent(VCardSubtitle, { class: "text-h6 font-weight-bold" }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(` $${ssrInterpolate(item.price)}`);
                                        } else {
                                          return [
                                            createTextVNode(" $" + toDisplayString(item.price), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(ssrRenderComponent(VCardText, null, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<div data-v-9cc98b00${_scopeId5}>${ssrInterpolate(item.description)}</div>`);
                                        } else {
                                          return [
                                            createVNode("div", null, toDisplayString(item.description), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(ssrRenderComponent(VCardActions, { class: "d-flex justify-end flex-column flex-sm-row" }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(VBtn, {
                                            to: `/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`,
                                            color: "white",
                                            text: "View Details",
                                            "prepend-icon": "mdi-text-box-search-outline",
                                            elevation: "2",
                                            class: "bg-grey-darken-3 text-none"
                                          }, null, _parent6, _scopeId5));
                                          _push6(ssrRenderComponent(VBtn, {
                                            color: "white",
                                            text: "Add to Cart",
                                            "prepend-icon": "mdi-cart-check",
                                            elevation: "2",
                                            class: "bg-red-lighten-1 text-none",
                                            loading: unref(cartStore).addingCart && unref(selectedItem) === item.id,
                                            onClick: ($event) => addCart(item)
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              to: `/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`,
                                              color: "white",
                                              text: "View Details",
                                              "prepend-icon": "mdi-text-box-search-outline",
                                              elevation: "2",
                                              class: "bg-grey-darken-3 text-none"
                                            }, null, 8, ["to"]),
                                            createVNode(VBtn, {
                                              color: "white",
                                              text: "Add to Cart",
                                              "prepend-icon": "mdi-cart-check",
                                              elevation: "2",
                                              class: "bg-red-lighten-1 text-none",
                                              loading: unref(cartStore).addingCart && unref(selectedItem) === item.id,
                                              onClick: ($event) => addCart(item)
                                            }, null, 8, ["loading", "onClick"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(VImg, {
                                        class: "align-end text-white ma-4",
                                        height: "320",
                                        src: item.thumbnails[0].url,
                                        "lazy-src": _imports_0,
                                        rounded: "",
                                        cover: ""
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
                                      }, 1032, ["src"]),
                                      createVNode(VCardTitle, { class: "text-wrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardSubtitle, { class: "text-h6 font-weight-bold" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" $" + toDisplayString(item.price), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createVNode("div", null, toDisplayString(item.description), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardActions, { class: "d-flex justify-end flex-column flex-sm-row" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            to: `/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`,
                                            color: "white",
                                            text: "View Details",
                                            "prepend-icon": "mdi-text-box-search-outline",
                                            elevation: "2",
                                            class: "bg-grey-darken-3 text-none"
                                          }, null, 8, ["to"]),
                                          createVNode(VBtn, {
                                            color: "white",
                                            text: "Add to Cart",
                                            "prepend-icon": "mdi-cart-check",
                                            elevation: "2",
                                            class: "bg-red-lighten-1 text-none",
                                            loading: unref(cartStore).addingCart && unref(selectedItem) === item.id,
                                            onClick: ($event) => addCart(item)
                                          }, null, 8, ["loading", "onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(VCard, {
                                  class: "ma-4",
                                  "max-width": "350",
                                  width: "100%",
                                  height: "fit-content"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      class: "align-end text-white ma-4",
                                      height: "320",
                                      src: item.thumbnails[0].url,
                                      "lazy-src": _imports_0,
                                      rounded: "",
                                      cover: ""
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
                                    }, 1032, ["src"]),
                                    createVNode(VCardTitle, { class: "text-wrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardSubtitle, { class: "text-h6 font-weight-bold" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" $" + toDisplayString(item.price), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createVNode("div", null, toDisplayString(item.description), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardActions, { class: "d-flex justify-end flex-column flex-sm-row" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          to: `/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`,
                                          color: "white",
                                          text: "View Details",
                                          "prepend-icon": "mdi-text-box-search-outline",
                                          elevation: "2",
                                          class: "bg-grey-darken-3 text-none"
                                        }, null, 8, ["to"]),
                                        createVNode(VBtn, {
                                          color: "white",
                                          text: "Add to Cart",
                                          "prepend-icon": "mdi-cart-check",
                                          elevation: "2",
                                          class: "bg-red-lighten-1 text-none",
                                          loading: unref(cartStore).addingCart && unref(selectedItem) === item.id,
                                          onClick: ($event) => addCart(item)
                                        }, null, 8, ["loading", "onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]-->`);
                    } else {
                      return [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.manualItems, (item, index) => {
                          return openBlock(), createBlock(VSlideGroupItem, {
                            key: item.id
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                class: "ma-4",
                                "max-width": "350",
                                width: "100%",
                                height: "fit-content"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    class: "align-end text-white ma-4",
                                    height: "320",
                                    src: item.thumbnails[0].url,
                                    "lazy-src": _imports_0,
                                    rounded: "",
                                    cover: ""
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
                                  }, 1032, ["src"]),
                                  createVNode(VCardTitle, { class: "text-wrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCardSubtitle, { class: "text-h6 font-weight-bold" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" $" + toDisplayString(item.price), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode("div", null, toDisplayString(item.description), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCardActions, { class: "d-flex justify-end flex-column flex-sm-row" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        to: `/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`,
                                        color: "white",
                                        text: "View Details",
                                        "prepend-icon": "mdi-text-box-search-outline",
                                        elevation: "2",
                                        class: "bg-grey-darken-3 text-none"
                                      }, null, 8, ["to"]),
                                      createVNode(VBtn, {
                                        color: "white",
                                        text: "Add to Cart",
                                        "prepend-icon": "mdi-cart-check",
                                        elevation: "2",
                                        class: "bg-red-lighten-1 text-none",
                                        loading: unref(cartStore).addingCart && unref(selectedItem) === item.id,
                                        onClick: ($event) => addCart(item)
                                      }, null, 8, ["loading", "onClick"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(VSheet, {
                  class: "d-flex justify-center align-center",
                  height: "400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`No records found`);
                    } else {
                      return [
                        createTextVNode("No records found")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
              _push2(`<!--]-->`);
            }
          } else {
            return [
              __props.processing ? (openBlock(), createBlock(VSheet, {
                key: 0,
                class: "d-flex justify-center align-center",
                height: "400"
              }, {
                default: withCtx(() => [
                  createVNode(VProgressCircular, {
                    color: "red-lighten-1",
                    indeterminate: ""
                  })
                ]),
                _: 1
              })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                __props.manualItems.length ? (openBlock(), createBlock(VSlideGroup, {
                  key: 0,
                  class: "pa-4",
                  "center-active": "",
                  "show-arrows": "",
                  mobile: false
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.manualItems, (item, index) => {
                      return openBlock(), createBlock(VSlideGroupItem, {
                        key: item.id
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            class: "ma-4",
                            "max-width": "350",
                            width: "100%",
                            height: "fit-content"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                class: "align-end text-white ma-4",
                                height: "320",
                                src: item.thumbnails[0].url,
                                "lazy-src": _imports_0,
                                rounded: "",
                                cover: ""
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
                              }, 1032, ["src"]),
                              createVNode(VCardTitle, { class: "text-wrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCardSubtitle, { class: "text-h6 font-weight-bold" }, {
                                default: withCtx(() => [
                                  createTextVNode(" $" + toDisplayString(item.price), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode("div", null, toDisplayString(item.description), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCardActions, { class: "d-flex justify-end flex-column flex-sm-row" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    to: `/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`,
                                    color: "white",
                                    text: "View Details",
                                    "prepend-icon": "mdi-text-box-search-outline",
                                    elevation: "2",
                                    class: "bg-grey-darken-3 text-none"
                                  }, null, 8, ["to"]),
                                  createVNode(VBtn, {
                                    color: "white",
                                    text: "Add to Cart",
                                    "prepend-icon": "mdi-cart-check",
                                    elevation: "2",
                                    class: "bg-red-lighten-1 text-none",
                                    loading: unref(cartStore).addingCart && unref(selectedItem) === item.id,
                                    onClick: ($event) => addCart(item)
                                  }, null, 8, ["loading", "onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(VSheet, {
                  key: 1,
                  class: "d-flex justify-center align-center",
                  height: "400"
                }, {
                  default: withCtx(() => [
                    createTextVNode("No records found")
                  ]),
                  _: 1
                }))
              ], 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/suggested-products.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9cc98b00"]]);

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const bestSelling = ref([]);
    const latestProducts = ref([]);
    const fetchingBestSelling = ref(false);
    const fetchingLatestProducts = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_banner = __nuxt_component_0;
      const _component_suggested_products = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      _push(ssrRenderComponent(_component_banner, null, null, _parent));
      _push(`</div><div class="my-15">`);
      _push(ssrRenderComponent(_component_suggested_products, {
        title: "Latest Products",
        flag: "latest_products",
        processing: unref(fetchingLatestProducts),
        "manual-items": unref(latestProducts)
      }, null, _parent));
      _push(`</div><div class="my-15">`);
      _push(ssrRenderComponent(_component_suggested_products, {
        title: "Best Selling",
        flag: "best_selling",
        processing: unref(fetchingBestSelling),
        "manual-items": unref(bestSelling)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
