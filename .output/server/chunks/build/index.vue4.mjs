import { u as useDevice, _ as _sfc_main$3 } from './breadcrumbs.vue.mjs';
import { withCtx, unref, createVNode, toDisplayString, useSSRContext, createTextVNode, createBlock, openBlock, Fragment, renderList, ref, withAsyncContext, computed, mergeProps, isRef, withDirectives, vShow } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { O as useRoute, l as useCartStore, m as useSanctumAuth, P as useSeoMeta, c as useNuxtApp, L as useBaseFetch, d as useRuntimeConfig } from './server.mjs';
import { _ as _imports_0 } from './logo-icon.png.mjs';
import { a as VCard, V as VImg, e as VCardActions, b as VCardTitle, c as VCardSubtitle, d as VCardText } from './VCard.mjs';
import { V as VRow, a as VCol } from './VCol.mjs';
import { b as VProgressCircular, c as VIcon } from './VProgressCircular.mjs';
import { V as VSheet } from './VSheet.mjs';
import { V as VBtn, a as VBtnToggle } from './VBtn.mjs';
import { u as useAsyncData } from './asyncData.mjs';
import { V as VSkeletonLoader } from './VSkeletonLoader.mjs';
import { V as VPagination } from './VPagination.mjs';
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

const _sfc_main$2 = {
  __name: "list",
  __ssrInlineRender: true,
  props: {
    manualItems: {
      type: Array,
      default: () => []
    },
    selectedItem: {
      type: Number,
      default: null
    }
  },
  setup(__props) {
    const { isMobile } = useDevice();
    const route = useRoute();
    const cartStore = useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.manualItems, (item) => {
        _push(ssrRenderComponent(VCard, {
          key: item.id,
          class: "my-4 mx-0 mx-sm-4",
          elevation: "5"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VRow, { class: "pa-4" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCol, {
                      cols: "4",
                      sm: "6",
                      md: "4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VImg, {
                            class: "align-end text-white ma-4",
                            height: unref(isMobile) ? 100 : 320,
                            width: unref(isMobile) ? 100 : "auto",
                            alt: "Manual Thumbnail",
                            src: item.thumbnail,
                            "lazy-src": _imports_0,
                            rounded: "",
                            cover: ""
                          }, {
                            placeholder: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex align-center justify-center fill-height"${_scopeId4}>`);
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
                        } else {
                          return [
                            createVNode(VImg, {
                              class: "align-end text-white ma-4",
                              height: unref(isMobile) ? 100 : 320,
                              width: unref(isMobile) ? 100 : "auto",
                              alt: "Manual Thumbnail",
                              src: item.thumbnail,
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
                            }, 1032, ["height", "width", "src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCol, {
                      cols: "8",
                      sm: "6",
                      md: "4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p class="text-wrap text-subtitle-1"${_scopeId3}>${ssrInterpolate(item.title)}</p>`);
                          _push4(ssrRenderComponent(VSheet, { height: "20" }, null, _parent4, _scopeId3));
                          _push4(`<p class="text-subtitle-1 font-weight-bold text-grey-darken-1"${_scopeId3}> $${ssrInterpolate(item.price)}</p>`);
                          _push4(ssrRenderComponent(VSheet, { height: "20" }, null, _parent4, _scopeId3));
                          _push4(`<p${_scopeId3}>${ssrInterpolate(item.description)}</p>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-wrap text-subtitle-1" }, toDisplayString(item.title), 1),
                            createVNode(VSheet, { height: "20" }),
                            createVNode("p", { class: "text-subtitle-1 font-weight-bold text-grey-darken-1" }, " $" + toDisplayString(item.price), 1),
                            createVNode(VSheet, { height: "20" }),
                            createVNode("p", null, toDisplayString(item.description), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCol, {
                      cols: "12",
                      sm: "6",
                      md: "4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VSheet, { class: "my-5" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCardActions, { class: "d-flex flex-column" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, {
                                        onClick: ($event) => _ctx.$emit("addToCart", item),
                                        color: "white",
                                        text: "Add to Cart",
                                        "prepend-icon": "mdi-cart-check",
                                        elevation: "2",
                                        class: "bg-red-lighten-1 text-none",
                                        width: "100%",
                                        loading: unref(cartStore).addingCart && __props.selectedItem === item.id
                                      }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VBtn, {
                                        to: `/manuals/categories/${unref(route).params.main_category_slug}/${unref(route).params.sub_category_slug}/${item.url_slug}`,
                                        color: "white",
                                        text: "View Details",
                                        "prepend-icon": "mdi-text-box-search-outline",
                                        elevation: "2",
                                        width: "100%",
                                        class: "bg-grey-darken-3 text-none"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, {
                                          onClick: ($event) => _ctx.$emit("addToCart", item),
                                          color: "white",
                                          text: "Add to Cart",
                                          "prepend-icon": "mdi-cart-check",
                                          elevation: "2",
                                          class: "bg-red-lighten-1 text-none",
                                          width: "100%",
                                          loading: unref(cartStore).addingCart && __props.selectedItem === item.id
                                        }, null, 8, ["onClick", "loading"]),
                                        createVNode(VBtn, {
                                          to: `/manuals/categories/${unref(route).params.main_category_slug}/${unref(route).params.sub_category_slug}/${item.url_slug}`,
                                          color: "white",
                                          text: "View Details",
                                          "prepend-icon": "mdi-text-box-search-outline",
                                          elevation: "2",
                                          width: "100%",
                                          class: "bg-grey-darken-3 text-none"
                                        }, null, 8, ["to"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCardActions, { class: "d-flex flex-column" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        onClick: ($event) => _ctx.$emit("addToCart", item),
                                        color: "white",
                                        text: "Add to Cart",
                                        "prepend-icon": "mdi-cart-check",
                                        elevation: "2",
                                        class: "bg-red-lighten-1 text-none",
                                        width: "100%",
                                        loading: unref(cartStore).addingCart && __props.selectedItem === item.id
                                      }, null, 8, ["onClick", "loading"]),
                                      createVNode(VBtn, {
                                        to: `/manuals/categories/${unref(route).params.main_category_slug}/${unref(route).params.sub_category_slug}/${item.url_slug}`,
                                        color: "white",
                                        text: "View Details",
                                        "prepend-icon": "mdi-text-box-search-outline",
                                        elevation: "2",
                                        width: "100%",
                                        class: "bg-grey-darken-3 text-none"
                                      }, null, 8, ["to"])
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
                            createVNode(VSheet, { class: "my-5" }, {
                              default: withCtx(() => [
                                createVNode(VCardActions, { class: "d-flex flex-column" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      onClick: ($event) => _ctx.$emit("addToCart", item),
                                      color: "white",
                                      text: "Add to Cart",
                                      "prepend-icon": "mdi-cart-check",
                                      elevation: "2",
                                      class: "bg-red-lighten-1 text-none",
                                      width: "100%",
                                      loading: unref(cartStore).addingCart && __props.selectedItem === item.id
                                    }, null, 8, ["onClick", "loading"]),
                                    createVNode(VBtn, {
                                      to: `/manuals/categories/${unref(route).params.main_category_slug}/${unref(route).params.sub_category_slug}/${item.url_slug}`,
                                      color: "white",
                                      text: "View Details",
                                      "prepend-icon": "mdi-text-box-search-outline",
                                      elevation: "2",
                                      width: "100%",
                                      class: "bg-grey-darken-3 text-none"
                                    }, null, 8, ["to"])
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
                  } else {
                    return [
                      createVNode(VCol, {
                        cols: "4",
                        sm: "6",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            class: "align-end text-white ma-4",
                            height: unref(isMobile) ? 100 : 320,
                            width: unref(isMobile) ? 100 : "auto",
                            alt: "Manual Thumbnail",
                            src: item.thumbnail,
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
                          }, 1032, ["height", "width", "src"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(VCol, {
                        cols: "8",
                        sm: "6",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-wrap text-subtitle-1" }, toDisplayString(item.title), 1),
                          createVNode(VSheet, { height: "20" }),
                          createVNode("p", { class: "text-subtitle-1 font-weight-bold text-grey-darken-1" }, " $" + toDisplayString(item.price), 1),
                          createVNode(VSheet, { height: "20" }),
                          createVNode("p", null, toDisplayString(item.description), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSheet, { class: "my-5" }, {
                            default: withCtx(() => [
                              createVNode(VCardActions, { class: "d-flex flex-column" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    onClick: ($event) => _ctx.$emit("addToCart", item),
                                    color: "white",
                                    text: "Add to Cart",
                                    "prepend-icon": "mdi-cart-check",
                                    elevation: "2",
                                    class: "bg-red-lighten-1 text-none",
                                    width: "100%",
                                    loading: unref(cartStore).addingCart && __props.selectedItem === item.id
                                  }, null, 8, ["onClick", "loading"]),
                                  createVNode(VBtn, {
                                    to: `/manuals/categories/${unref(route).params.main_category_slug}/${unref(route).params.sub_category_slug}/${item.url_slug}`,
                                    color: "white",
                                    text: "View Details",
                                    "prepend-icon": "mdi-text-box-search-outline",
                                    elevation: "2",
                                    width: "100%",
                                    class: "bg-grey-darken-3 text-none"
                                  }, null, 8, ["to"])
                                ]),
                                _: 2
                              }, 1024)
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
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VRow, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "4",
                      sm: "6",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          class: "align-end text-white ma-4",
                          height: unref(isMobile) ? 100 : 320,
                          width: unref(isMobile) ? 100 : "auto",
                          alt: "Manual Thumbnail",
                          src: item.thumbnail,
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
                        }, 1032, ["height", "width", "src"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(VCol, {
                      cols: "8",
                      sm: "6",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-wrap text-subtitle-1" }, toDisplayString(item.title), 1),
                        createVNode(VSheet, { height: "20" }),
                        createVNode("p", { class: "text-subtitle-1 font-weight-bold text-grey-darken-1" }, " $" + toDisplayString(item.price), 1),
                        createVNode(VSheet, { height: "20" }),
                        createVNode("p", null, toDisplayString(item.description), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSheet, { class: "my-5" }, {
                          default: withCtx(() => [
                            createVNode(VCardActions, { class: "d-flex flex-column" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  onClick: ($event) => _ctx.$emit("addToCart", item),
                                  color: "white",
                                  text: "Add to Cart",
                                  "prepend-icon": "mdi-cart-check",
                                  elevation: "2",
                                  class: "bg-red-lighten-1 text-none",
                                  width: "100%",
                                  loading: unref(cartStore).addingCart && __props.selectedItem === item.id
                                }, null, 8, ["onClick", "loading"]),
                                createVNode(VBtn, {
                                  to: `/manuals/categories/${unref(route).params.main_category_slug}/${unref(route).params.sub_category_slug}/${item.url_slug}`,
                                  color: "white",
                                  text: "View Details",
                                  "prepend-icon": "mdi-text-box-search-outline",
                                  elevation: "2",
                                  width: "100%",
                                  class: "bg-grey-darken-3 text-none"
                                }, null, 8, ["to"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
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
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product-view/list.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
  __name: "card",
  __ssrInlineRender: true,
  props: {
    manualItems: {
      type: Array,
      default: () => []
    },
    selectedItem: {
      type: Number,
      default: null
    }
  },
  setup(__props) {
    const route = useRoute();
    const cartStore = useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VRow, { class: "pa-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.manualItems, (item) => {
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                sm: "6",
                md: "4",
                lg: "4",
                class: "d-flex justify-sm-center",
                key: item.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, {
                      width: "100%",
                      height: "fit-content",
                      class: "pa-2",
                      elevation: "5"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VImg, {
                            class: "align-end text-white ma-4",
                            height: "320",
                            alt: "Manual Thumbnail",
                            src: item.thumbnail,
                            "lazy-src": _imports_0,
                            rounded: "",
                            cover: ""
                          }, {
                            placeholder: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex align-center justify-center fill-height"${_scopeId4}>`);
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
                          _push4(ssrRenderComponent(VCardTitle, { class: "text-wrap text-subtitle-1" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardSubtitle, { class: "text-subtitle-1 font-weight-bold text-black" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` $${ssrInterpolate(item.price)}`);
                              } else {
                                return [
                                  createTextVNode(" $" + toDisplayString(item.price), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div${_scopeId4}>${ssrInterpolate(item.description)}</div>`);
                              } else {
                                return [
                                  createVNode("div", null, toDisplayString(item.description), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardActions, { class: "d-flex flex-column" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VBtn, {
                                  onClick: ($event) => _ctx.$emit("addToCart", item),
                                  color: "white",
                                  text: "Add to Cart",
                                  "prepend-icon": "mdi-cart-check",
                                  elevation: "2",
                                  class: "bg-red-lighten-1 text-none",
                                  width: "100%",
                                  loading: unref(cartStore).addingCart && __props.selectedItem === item.id
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  to: `/manuals/categories/${unref(route).params.main_category_slug}/${unref(route).params.sub_category_slug}/${item.url_slug}`,
                                  color: "white",
                                  text: "View Details",
                                  "prepend-icon": "mdi-text-box-search-outline",
                                  elevation: "2",
                                  width: "100%",
                                  class: "bg-grey-darken-3 text-none"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    onClick: ($event) => _ctx.$emit("addToCart", item),
                                    color: "white",
                                    text: "Add to Cart",
                                    "prepend-icon": "mdi-cart-check",
                                    elevation: "2",
                                    class: "bg-red-lighten-1 text-none",
                                    width: "100%",
                                    loading: unref(cartStore).addingCart && __props.selectedItem === item.id
                                  }, null, 8, ["onClick", "loading"]),
                                  createVNode(VBtn, {
                                    to: `/manuals/categories/${unref(route).params.main_category_slug}/${unref(route).params.sub_category_slug}/${item.url_slug}`,
                                    color: "white",
                                    text: "View Details",
                                    "prepend-icon": "mdi-text-box-search-outline",
                                    elevation: "2",
                                    width: "100%",
                                    class: "bg-grey-darken-3 text-none"
                                  }, null, 8, ["to"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VImg, {
                              class: "align-end text-white ma-4",
                              height: "320",
                              alt: "Manual Thumbnail",
                              src: item.thumbnail,
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
                            createVNode(VCardTitle, { class: "text-wrap text-subtitle-1" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardSubtitle, { class: "text-subtitle-1 font-weight-bold text-black" }, {
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
                            createVNode(VCardActions, { class: "d-flex flex-column" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  onClick: ($event) => _ctx.$emit("addToCart", item),
                                  color: "white",
                                  text: "Add to Cart",
                                  "prepend-icon": "mdi-cart-check",
                                  elevation: "2",
                                  class: "bg-red-lighten-1 text-none",
                                  width: "100%",
                                  loading: unref(cartStore).addingCart && __props.selectedItem === item.id
                                }, null, 8, ["onClick", "loading"]),
                                createVNode(VBtn, {
                                  to: `/manuals/categories/${unref(route).params.main_category_slug}/${unref(route).params.sub_category_slug}/${item.url_slug}`,
                                  color: "white",
                                  text: "View Details",
                                  "prepend-icon": "mdi-text-box-search-outline",
                                  elevation: "2",
                                  width: "100%",
                                  class: "bg-grey-darken-3 text-none"
                                }, null, 8, ["to"])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCard, {
                        width: "100%",
                        height: "fit-content",
                        class: "pa-2",
                        elevation: "5"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            class: "align-end text-white ma-4",
                            height: "320",
                            alt: "Manual Thumbnail",
                            src: item.thumbnail,
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
                          createVNode(VCardTitle, { class: "text-wrap text-subtitle-1" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VCardSubtitle, { class: "text-subtitle-1 font-weight-bold text-black" }, {
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
                          createVNode(VCardActions, { class: "d-flex flex-column" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                onClick: ($event) => _ctx.$emit("addToCart", item),
                                color: "white",
                                text: "Add to Cart",
                                "prepend-icon": "mdi-cart-check",
                                elevation: "2",
                                class: "bg-red-lighten-1 text-none",
                                width: "100%",
                                loading: unref(cartStore).addingCart && __props.selectedItem === item.id
                              }, null, 8, ["onClick", "loading"]),
                              createVNode(VBtn, {
                                to: `/manuals/categories/${unref(route).params.main_category_slug}/${unref(route).params.sub_category_slug}/${item.url_slug}`,
                                color: "white",
                                text: "View Details",
                                "prepend-icon": "mdi-text-box-search-outline",
                                elevation: "2",
                                width: "100%",
                                class: "bg-grey-darken-3 text-none"
                              }, null, 8, ["to"])
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
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.manualItems, (item) => {
                return openBlock(), createBlock(VCol, {
                  cols: "12",
                  sm: "6",
                  md: "4",
                  lg: "4",
                  class: "d-flex justify-sm-center",
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      width: "100%",
                      height: "fit-content",
                      class: "pa-2",
                      elevation: "5"
                    }, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          class: "align-end text-white ma-4",
                          height: "320",
                          alt: "Manual Thumbnail",
                          src: item.thumbnail,
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
                        createVNode(VCardTitle, { class: "text-wrap text-subtitle-1" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VCardSubtitle, { class: "text-subtitle-1 font-weight-bold text-black" }, {
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
                        createVNode(VCardActions, { class: "d-flex flex-column" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              onClick: ($event) => _ctx.$emit("addToCart", item),
                              color: "white",
                              text: "Add to Cart",
                              "prepend-icon": "mdi-cart-check",
                              elevation: "2",
                              class: "bg-red-lighten-1 text-none",
                              width: "100%",
                              loading: unref(cartStore).addingCart && __props.selectedItem === item.id
                            }, null, 8, ["onClick", "loading"]),
                            createVNode(VBtn, {
                              to: `/manuals/categories/${unref(route).params.main_category_slug}/${unref(route).params.sub_category_slug}/${item.url_slug}`,
                              color: "white",
                              text: "View Details",
                              "prepend-icon": "mdi-text-box-search-outline",
                              elevation: "2",
                              width: "100%",
                              class: "bg-grey-darken-3 text-none"
                            }, null, 8, ["to"])
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
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product-view/card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const config = useRuntimeConfig();
    const { isAuthenticated, user } = useSanctumAuth();
    const toggle = ref("card");
    const { data: subCategoryData, status, error, refresh, clear } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "subCategoryData",
      () => useBaseFetch(`${config.public.apiBaseUrl}/store/main-categories/sub-category`, {
        method: "GET",
        params: {
          urlSlug: route.params.sub_category_slug
        }
      })
    )), __temp = await __temp, __restore(), __temp);
    useSeoMeta({
      title: subCategoryData.value.name,
      description: `Find high-quality catalogs available for ${subCategoryData.value.name}.`,
      ogDescription: `Find high-quality catalogs available for ${subCategoryData.value.name}.`,
      twitterCard: "summary_large_image"
    });
    const { $deslugify } = useNuxtApp();
    const page = ref(1);
    const breadcrumbItems = ref([
      {
        title: "Home",
        disabled: false,
        to: "/"
      },
      {
        title: "Main Categories",
        disabled: false,
        to: "/manuals/categories"
      },
      {
        title: `${$deslugify(route.params.main_category_slug)}`,
        disabled: false,
        to: `/manuals/categories/${route.params.main_category_slug}`
      },
      {
        title: `${$deslugify(route.params.sub_category_slug)}`,
        disabled: true
      }
    ]);
    const fetching = ref(true);
    const manualItems = ref([]);
    const itemCount = ref(0);
    const cartStore = useCartStore();
    const pageCount = computed(() => {
      return Math.ceil(itemCount.value / 9);
    });
    const fetchManualItems = async () => {
      try {
        fetching.value = true;
        if (subCategoryData.value) {
          const { data, total } = await useBaseFetch(`store/main-categories/sub-categories/${subCategoryData.value.id}/manuals`, {
            method: "GET",
            params: {
              page: page.value,
              itemsPerPage: 9
            }
          });
          itemCount.value = total;
          manualItems.value = data;
        }
      } catch (error2) {
        console.error(error2);
      } finally {
        fetching.value = false;
      }
    };
    const selectedItem = ref(null);
    const addToCart = async (manual) => {
      try {
        selectedItem.value = manual.id;
        cartStore.setNewAddedCart(false);
        await cartStore.addToCart({
          userId: isAuthenticated.value ? user.value.id : null,
          guestId: isAuthenticated.value ? null : localStorage.getItem("guestId"),
          manualId: manual.id,
          price: Math.round((manual.price + Number.EPSILON) * 100) / 100,
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
      } catch (error2) {
        console.error(error2);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_breadcrumbs = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-0" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_breadcrumbs, { items: unref(breadcrumbItems) }, null, _parent));
      if (unref(fetching)) {
        _push(ssrRenderComponent(VSheet, {
          class: "d-flex justify-between ma-5",
          cols: "12"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VRow, { class: "pa-4" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(3, (item) => {
                      _push3(ssrRenderComponent(VCol, {
                        cols: "12",
                        sm: "6",
                        md: "4",
                        lg: "4",
                        class: "d-flex justify-sm-center",
                        key: item
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VSkeletonLoader, {
                              elevation: "2",
                              class: "ma-4",
                              width: "100%",
                              type: "card, text, actions"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VSkeletonLoader, {
                                elevation: "2",
                                class: "ma-4",
                                width: "100%",
                                type: "card, text, actions"
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(), createBlock(Fragment, null, renderList(3, (item) => {
                        return createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "4",
                          lg: "4",
                          class: "d-flex justify-sm-center",
                          key: item
                        }, {
                          default: withCtx(() => [
                            createVNode(VSkeletonLoader, {
                              elevation: "2",
                              class: "ma-4",
                              width: "100%",
                              type: "card, text, actions"
                            })
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VRow, { class: "pa-4" }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(3, (item) => {
                      return createVNode(VCol, {
                        cols: "12",
                        sm: "6",
                        md: "4",
                        lg: "4",
                        class: "d-flex justify-sm-center",
                        key: item
                      }, {
                        default: withCtx(() => [
                          createVNode(VSkeletonLoader, {
                            elevation: "2",
                            class: "ma-4",
                            width: "100%",
                            type: "card, text, actions"
                          })
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(VSheet, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (!unref(manualItems).length) {
                _push2(`<p class="text-center ma-16"${_scopeId}>No records found.</p>`);
              } else {
                _push2(ssrRenderComponent(VCard, { class: "px-2" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VSheet, { class: "text-right" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VBtnToggle, {
                              modelValue: unref(toggle),
                              "onUpdate:modelValue": ($event) => isRef(toggle) ? toggle.value = $event : null,
                              variant: "outlined",
                              color: "red-lighten-1",
                              density: "comfortable",
                              theme: "red-lighten-1",
                              slim: "",
                              class: "mt-6 mx-4"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VBtn, { value: "card" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VIcon, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`mdi-view-grid-outline`);
                                            } else {
                                              return [
                                                createTextVNode("mdi-view-grid-outline")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-view-grid-outline")
                                            ]),
                                            _: 1
                                          })
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VBtn, { value: "list" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VIcon, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`mdi-view-list-outline`);
                                            } else {
                                              return [
                                                createTextVNode("mdi-view-list-outline")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-view-list-outline")
                                            ]),
                                            _: 1
                                          })
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VBtn, { value: "card" }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, null, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-view-grid-outline")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, { value: "list" }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, null, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-view-list-outline")
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
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VBtnToggle, {
                                modelValue: unref(toggle),
                                "onUpdate:modelValue": ($event) => isRef(toggle) ? toggle.value = $event : null,
                                variant: "outlined",
                                color: "red-lighten-1",
                                density: "comfortable",
                                theme: "red-lighten-1",
                                slim: "",
                                class: "mt-6 mx-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, { value: "card" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-view-grid-outline")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, { value: "list" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-view-list-outline")
                                        ]),
                                        _: 1
                                      })
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
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(VSheet, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_sfc_main$1, {
                              style: unref(toggle) == "card" ? null : { display: "none" },
                              manualItems: unref(manualItems),
                              selectedItem: unref(selectedItem),
                              onAddToCart: addToCart
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_sfc_main$2, {
                              style: unref(toggle) == "list" ? null : { display: "none" },
                              manualItems: unref(manualItems),
                              selectedItem: unref(selectedItem),
                              onAddToCart: addToCart
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              withDirectives(createVNode(_sfc_main$1, {
                                manualItems: unref(manualItems),
                                selectedItem: unref(selectedItem),
                                onAddToCart: addToCart
                              }, null, 8, ["manualItems", "selectedItem"]), [
                                [vShow, unref(toggle) == "card"]
                              ]),
                              withDirectives(createVNode(_sfc_main$2, {
                                manualItems: unref(manualItems),
                                selectedItem: unref(selectedItem),
                                onAddToCart: addToCart
                              }, null, 8, ["manualItems", "selectedItem"]), [
                                [vShow, unref(toggle) == "list"]
                              ])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VSheet, { class: "text-right" }, {
                          default: withCtx(() => [
                            createVNode(VBtnToggle, {
                              modelValue: unref(toggle),
                              "onUpdate:modelValue": ($event) => isRef(toggle) ? toggle.value = $event : null,
                              variant: "outlined",
                              color: "red-lighten-1",
                              density: "comfortable",
                              theme: "red-lighten-1",
                              slim: "",
                              class: "mt-6 mx-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, { value: "card" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-view-grid-outline")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, { value: "list" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-view-list-outline")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VSheet, null, {
                          default: withCtx(() => [
                            withDirectives(createVNode(_sfc_main$1, {
                              manualItems: unref(manualItems),
                              selectedItem: unref(selectedItem),
                              onAddToCart: addToCart
                            }, null, 8, ["manualItems", "selectedItem"]), [
                              [vShow, unref(toggle) == "card"]
                            ]),
                            withDirectives(createVNode(_sfc_main$2, {
                              manualItems: unref(manualItems),
                              selectedItem: unref(selectedItem),
                              onAddToCart: addToCart
                            }, null, 8, ["manualItems", "selectedItem"]), [
                              [vShow, unref(toggle) == "list"]
                            ])
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
            } else {
              return [
                !unref(manualItems).length ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-center ma-16"
                }, "No records found.")) : (openBlock(), createBlock(VCard, {
                  key: 1,
                  class: "px-2"
                }, {
                  default: withCtx(() => [
                    createVNode(VSheet, { class: "text-right" }, {
                      default: withCtx(() => [
                        createVNode(VBtnToggle, {
                          modelValue: unref(toggle),
                          "onUpdate:modelValue": ($event) => isRef(toggle) ? toggle.value = $event : null,
                          variant: "outlined",
                          color: "red-lighten-1",
                          density: "comfortable",
                          theme: "red-lighten-1",
                          slim: "",
                          class: "mt-6 mx-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, { value: "card" }, {
                              default: withCtx(() => [
                                createVNode(VIcon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-view-grid-outline")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, { value: "list" }, {
                              default: withCtx(() => [
                                createVNode(VIcon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-view-list-outline")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VSheet, null, {
                      default: withCtx(() => [
                        withDirectives(createVNode(_sfc_main$1, {
                          manualItems: unref(manualItems),
                          selectedItem: unref(selectedItem),
                          onAddToCart: addToCart
                        }, null, 8, ["manualItems", "selectedItem"]), [
                          [vShow, unref(toggle) == "card"]
                        ]),
                        withDirectives(createVNode(_sfc_main$2, {
                          manualItems: unref(manualItems),
                          selectedItem: unref(selectedItem),
                          onAddToCart: addToCart
                        }, null, 8, ["manualItems", "selectedItem"]), [
                          [vShow, unref(toggle) == "list"]
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }))
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(ssrRenderComponent(VSheet, { class: "mt-5 mb-10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VPagination, {
              "active-color": "red-lighten-1",
              elevation: "0",
              variant: "flat",
              density: "comfortable",
              modelValue: unref(page),
              "onUpdate:modelValue": [($event) => isRef(page) ? page.value = $event : null, fetchManualItems],
              length: unref(pageCount),
              "total-visible": 3
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VPagination, {
                "active-color": "red-lighten-1",
                elevation: "0",
                variant: "flat",
                density: "comfortable",
                modelValue: unref(page),
                "onUpdate:modelValue": [($event) => isRef(page) ? page.value = $event : null, fetchManualItems],
                length: unref(pageCount),
                "total-visible": 3
              }, null, 8, ["modelValue", "onUpdate:modelValue", "length"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/manuals/categories/[main_category_slug]/[sub_category_slug]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue4.mjs.map
