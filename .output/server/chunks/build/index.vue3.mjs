import { _ as _sfc_main$1 } from './breadcrumbs.vue.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { O as useRoute, c as useNuxtApp } from './server.mjs';
import { a as VCard, b as VCardTitle, d as VCardText } from './VCard.mjs';
import { V as VRow, a as VCol } from './VCol.mjs';
import { V as VSkeletonLoader } from './VSkeletonLoader.mjs';
import { V as VBtn } from './VBtn.mjs';
import { c as VIcon } from './VProgressCircular.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { $deslugify } = useNuxtApp();
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
        disabled: true
      }
    ]);
    const subCategories = ref([]);
    const fetching = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_breadcrumbs = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-0" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_breadcrumbs, { items: unref(breadcrumbItems) }, null, _parent));
      _push(ssrRenderComponent(VCard, {
        elevation: "10",
        class: "pa-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, { class: "mb-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Sub Categories`);
                } else {
                  return [
                    createTextVNode("Sub Categories")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(fetching)) {
                    _push3(ssrRenderComponent(VRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(3, (item) => {
                            _push4(ssrRenderComponent(VCol, {
                              key: item,
                              cols: "12",
                              md: "6",
                              lg: "4"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VSkeletonLoader, { type: "list-item-avatar" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VSkeletonLoader, { type: "list-item-avatar" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(3, (item) => {
                              return createVNode(VCol, {
                                key: item,
                                cols: "12",
                                md: "6",
                                lg: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSkeletonLoader, { type: "list-item-avatar" })
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!--[-->`);
                    if (!unref(subCategories).length) {
                      _push3(`<p class="text-center"${_scopeId2}>No records found.</p>`);
                    } else {
                      _push3(ssrRenderComponent(VRow, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            ssrRenderList(unref(subCategories), (item, i) => {
                              _push4(ssrRenderComponent(VCol, {
                                key: i,
                                cols: "12",
                                md: "6",
                                lg: "4"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(VBtn, {
                                      block: "",
                                      variant: "text",
                                      to: `/manuals/categories/${unref(route).params.main_category_slug}/${item.url_slug}`,
                                      class: "d-flex justify-start align-center custom-transform-class text-none"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(VIcon, {
                                            class: "me-5",
                                            color: "red-lighten-1"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`mdi-file-document-arrow-right`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-file-document-arrow-right")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                          _push6(` ${ssrInterpolate(item.name)}`);
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              class: "me-5",
                                              color: "red-lighten-1"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-file-document-arrow-right")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" " + toDisplayString(item.name), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        block: "",
                                        variant: "text",
                                        to: `/manuals/categories/${unref(route).params.main_category_slug}/${item.url_slug}`,
                                        class: "d-flex justify-start align-center custom-transform-class text-none"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            class: "me-5",
                                            color: "red-lighten-1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-file-document-arrow-right")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" " + toDisplayString(item.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(subCategories), (item, i) => {
                                return openBlock(), createBlock(VCol, {
                                  key: i,
                                  cols: "12",
                                  md: "6",
                                  lg: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      block: "",
                                      variant: "text",
                                      to: `/manuals/categories/${unref(route).params.main_category_slug}/${item.url_slug}`,
                                      class: "d-flex justify-start align-center custom-transform-class text-none"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          class: "me-5",
                                          color: "red-lighten-1"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-file-document-arrow-right")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" " + toDisplayString(item.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    }
                    _push3(`<!--]-->`);
                  }
                } else {
                  return [
                    unref(fetching) ? (openBlock(), createBlock(VRow, { key: 0 }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(3, (item) => {
                          return createVNode(VCol, {
                            key: item,
                            cols: "12",
                            md: "6",
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSkeletonLoader, { type: "list-item-avatar" })
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      !unref(subCategories).length ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-center"
                      }, "No records found.")) : (openBlock(), createBlock(VRow, { key: 1 }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(subCategories), (item, i) => {
                            return openBlock(), createBlock(VCol, {
                              key: i,
                              cols: "12",
                              md: "6",
                              lg: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  block: "",
                                  variant: "text",
                                  to: `/manuals/categories/${unref(route).params.main_category_slug}/${item.url_slug}`,
                                  class: "d-flex justify-start align-center custom-transform-class text-none"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      class: "me-5",
                                      color: "red-lighten-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-file-document-arrow-right")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" " + toDisplayString(item.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      }))
                    ], 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardTitle, { class: "mb-5" }, {
                default: withCtx(() => [
                  createTextVNode("Sub Categories")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  unref(fetching) ? (openBlock(), createBlock(VRow, { key: 0 }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(3, (item) => {
                        return createVNode(VCol, {
                          key: item,
                          cols: "12",
                          md: "6",
                          lg: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSkeletonLoader, { type: "list-item-avatar" })
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    !unref(subCategories).length ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-center"
                    }, "No records found.")) : (openBlock(), createBlock(VRow, { key: 1 }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(subCategories), (item, i) => {
                          return openBlock(), createBlock(VCol, {
                            key: i,
                            cols: "12",
                            md: "6",
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                variant: "text",
                                to: `/manuals/categories/${unref(route).params.main_category_slug}/${item.url_slug}`,
                                class: "d-flex justify-start align-center custom-transform-class text-none"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    class: "me-5",
                                    color: "red-lighten-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-file-document-arrow-right")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" " + toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }))
                  ], 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/manuals/categories/[main_category_slug]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue3.mjs.map
