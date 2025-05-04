import { _ as _sfc_main$1 } from './breadcrumbs.vue.mjs';
import { ref, withAsyncContext, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, toDisplayString, isRef, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-icon.png.mjs';
import { _ as _imports_1 } from './image-icon.png.mjs';
import { O as useRoute, c as useNuxtApp, l as useCartStore, m as useSanctumAuth, f as useHead, d as useRuntimeConfig } from './server.mjs';
import { u as useAsyncData } from './asyncData.mjs';
import { a as VCard, d as VCardText, V as VImg, b as VCardTitle, c as VCardSubtitle, e as VCardActions } from './VCard.mjs';
import { V as VContainer } from './VContainer.mjs';
import { V as VSheet } from './VSheet.mjs';
import { V as VSkeletonLoader } from './VSkeletonLoader.mjs';
import { V as VRow, a as VCol } from './VCol.mjs';
import { b as VProgressCircular } from './VProgressCircular.mjs';
import { V as VBtn } from './VBtn.mjs';
import { V as VSelect } from './VSelect.mjs';
import { V as VDivider } from './VDivider.mjs';
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
import './VOverlay.mjs';
import './index.mjs';
import './lazy.mjs';
import './VList.mjs';
import './ssrBoot.mjs';
import './VMenu.mjs';
import './VVirtualScroll.mjs';
import './VSlideGroup.mjs';

const schemaCurrency = "USD";
const storeName = "ManuallyRight";
const _sfc_main = {
  __name: "[product_slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e;
    let __temp, __restore;
    const route = useRoute();
    const { $deslugify } = useNuxtApp();
    const config = useRuntimeConfig();
    const cartStore = useCartStore();
    const { isAuthenticated, user } = useSanctumAuth();
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
        disabled: false,
        to: `/manuals/categories/${route.params.main_category_slug}/${route.params.sub_category_slug}`
      },
      {
        title: `${$deslugify(route.params.product_slug)}`,
        disabled: true
      }
    ]);
    const documentType = ref("Download");
    const quantity = ref(1);
    const selectedThumbnail = ref(0);
    const { data: response, status } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "manualDetails",
      () => $fetch(`${config.public.apiBaseUrl}/store/main-categories/sub-categories/manual-details`, {
        params: {
          urlSlug: route.params.product_slug
        }
      })
    )), __temp = await __temp, __restore(), __temp);
    const manualDetails = ((_a = response.value) == null ? void 0 : _a.data) ?? {};
    const schemaTitle = ((_b = manualDetails.meta_tags) == null ? void 0 : _b.title) || manualDetails.title;
    const schemaDescription = ((_c = manualDetails.meta_tags) == null ? void 0 : _c.description) || manualDetails.description;
    const schemaImage = (_e = (_d = manualDetails.thumbnails) == null ? void 0 : _d[0]) == null ? void 0 : _e.file_url;
    const schemaPrice = manualDetails.price || 0;
    const schemaProductName = manualDetails.title;
    const schemaProductDescription = manualDetails.description;
    useHead({
      title: schemaTitle,
      meta: [
        { name: "description", content: schemaDescription },
        { property: "og:title", content: schemaProductName },
        { property: "og:description", content: schemaProductDescription },
        { property: "og:image", content: schemaImage },
        { property: "og:type", content: "product" }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: schemaProductName,
            image: [schemaImage],
            description: schemaProductDescription,
            brand: {
              "@type": "Brand",
              name: storeName
            },
            offers: {
              "@type": "Offer",
              priceCurrency: schemaCurrency,
              price: schemaPrice,
              itemCondition: "https://schema.org/NewCondition",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: storeName
              }
            }
          })
        }
      ]
    });
    const quantityItems = [1];
    const addCart = async () => {
      try {
        cartStore.setNewAddedCart(false);
        await cartStore.addToCart({
          userId: isAuthenticated.value ? user.value.id : null,
          guestId: isAuthenticated.value ? null : localStorage.getItem("guestId"),
          manualId: manualDetails.id,
          price: parseFloat(manualDetails.price) * parseInt(quantity.value),
          quantity: quantity.value
        });
        await cartStore.fetchCartItems();
        cartStore.setNewAddedCart(true);
      } catch (error) {
        console.error(error);
      }
    };
    const relatedProducts = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_breadcrumbs = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-0" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_breadcrumbs, { items: unref(breadcrumbItems) }, null, _parent));
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(status) == "pending") {
                          _push4(ssrRenderComponent(VSheet, {
                            class: "d-flex justify-center",
                            cols: "12"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VSkeletonLoader, {
                                  width: "100%",
                                  type: "image"
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VSkeletonLoader, {
                                  width: "100%",
                                  type: "text, subtitle"
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VSkeletonLoader, {
                                  width: "100%",
                                  type: "text, button"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VSkeletonLoader, {
                                    width: "100%",
                                    type: "image"
                                  }),
                                  createVNode(VSkeletonLoader, {
                                    width: "100%",
                                    type: "text, subtitle"
                                  }),
                                  createVNode(VSkeletonLoader, {
                                    width: "100%",
                                    type: "text, button"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(VRow, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "4",
                                  class: "d-flex align-center flex-column flex-wrap"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    var _a2, _b2;
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VImg, {
                                        src: (_a2 = unref(manualDetails).thumbnails[unref(selectedThumbnail)]) == null ? void 0 : _a2.file_url,
                                        "lazy-src": _imports_0,
                                        width: "300",
                                        height: "300",
                                        rounded: "",
                                        cover: ""
                                      }, {
                                        placeholder: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="d-flex align-center justify-center fill-height"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VProgressCircular, {
                                              color: "grey-lighten-4",
                                              indeterminate: ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div>`);
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
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VSheet, { height: "30" }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VSheet, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCard, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VCardText, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VRow, null, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<!--[-->`);
                                                              ssrRenderList(unref(manualDetails).thumbnails, (thumbnail, index) => {
                                                                _push10(ssrRenderComponent(VCol, {
                                                                  cols: "4",
                                                                  lg: "3",
                                                                  class: "pa-1",
                                                                  key: index
                                                                }, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(ssrRenderComponent(VBtn, {
                                                                        variant: unref(selectedThumbnail) == index ? "outlined" : null,
                                                                        height: "auto",
                                                                        width: "50",
                                                                        active: unref(selectedThumbnail) == index,
                                                                        onClick: ($event) => selectedThumbnail.value = index,
                                                                        class: "py-1"
                                                                      }, {
                                                                        default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                          if (_push12) {
                                                                            _push12(ssrRenderComponent(VImg, {
                                                                              "lazy-src": _imports_1,
                                                                              src: thumbnail.file_url,
                                                                              width: "50",
                                                                              height: "auto"
                                                                            }, {
                                                                              placeholder: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                                if (_push13) {
                                                                                  _push13(`<div class="d-flex align-center justify-center fill-height"${_scopeId12}>`);
                                                                                  _push13(ssrRenderComponent(VProgressCircular, {
                                                                                    color: "grey-lighten-4",
                                                                                    indeterminate: ""
                                                                                  }, null, _parent13, _scopeId12));
                                                                                  _push13(`</div>`);
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
                                                                            }, _parent12, _scopeId11));
                                                                          } else {
                                                                            return [
                                                                              createVNode(VImg, {
                                                                                "lazy-src": _imports_1,
                                                                                src: thumbnail.file_url,
                                                                                width: "50",
                                                                                height: "auto"
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
                                                                      }, _parent11, _scopeId10));
                                                                    } else {
                                                                      return [
                                                                        createVNode(VBtn, {
                                                                          variant: unref(selectedThumbnail) == index ? "outlined" : null,
                                                                          height: "auto",
                                                                          width: "50",
                                                                          active: unref(selectedThumbnail) == index,
                                                                          onClick: ($event) => selectedThumbnail.value = index,
                                                                          class: "py-1"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(VImg, {
                                                                              "lazy-src": _imports_1,
                                                                              src: thumbnail.file_url,
                                                                              width: "50",
                                                                              height: "auto"
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
                                                                        }, 1032, ["variant", "active", "onClick"])
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                              });
                                                              _push10(`<!--]-->`);
                                                            } else {
                                                              return [
                                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(manualDetails).thumbnails, (thumbnail, index) => {
                                                                  return openBlock(), createBlock(VCol, {
                                                                    cols: "4",
                                                                    lg: "3",
                                                                    class: "pa-1",
                                                                    key: index
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(VBtn, {
                                                                        variant: unref(selectedThumbnail) == index ? "outlined" : null,
                                                                        height: "auto",
                                                                        width: "50",
                                                                        active: unref(selectedThumbnail) == index,
                                                                        onClick: ($event) => selectedThumbnail.value = index,
                                                                        class: "py-1"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(VImg, {
                                                                            "lazy-src": _imports_1,
                                                                            src: thumbnail.file_url,
                                                                            width: "50",
                                                                            height: "auto"
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
                                                                      }, 1032, ["variant", "active", "onClick"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024);
                                                                }), 128))
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VRow, null, {
                                                            default: withCtx(() => [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(manualDetails).thumbnails, (thumbnail, index) => {
                                                                return openBlock(), createBlock(VCol, {
                                                                  cols: "4",
                                                                  lg: "3",
                                                                  class: "pa-1",
                                                                  key: index
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(VBtn, {
                                                                      variant: unref(selectedThumbnail) == index ? "outlined" : null,
                                                                      height: "auto",
                                                                      width: "50",
                                                                      active: unref(selectedThumbnail) == index,
                                                                      onClick: ($event) => selectedThumbnail.value = index,
                                                                      class: "py-1"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(VImg, {
                                                                          "lazy-src": _imports_1,
                                                                          src: thumbnail.file_url,
                                                                          width: "50",
                                                                          height: "auto"
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
                                                                    }, 1032, ["variant", "active", "onClick"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VCardText, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VRow, null, {
                                                          default: withCtx(() => [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(manualDetails).thumbnails, (thumbnail, index) => {
                                                              return openBlock(), createBlock(VCol, {
                                                                cols: "4",
                                                                lg: "3",
                                                                class: "pa-1",
                                                                key: index
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VBtn, {
                                                                    variant: unref(selectedThumbnail) == index ? "outlined" : null,
                                                                    height: "auto",
                                                                    width: "50",
                                                                    active: unref(selectedThumbnail) == index,
                                                                    onClick: ($event) => selectedThumbnail.value = index,
                                                                    class: "py-1"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(VImg, {
                                                                        "lazy-src": _imports_1,
                                                                        src: thumbnail.file_url,
                                                                        width: "50",
                                                                        height: "auto"
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
                                                                  }, 1032, ["variant", "active", "onClick"])
                                                                ]),
                                                                _: 2
                                                              }, 1024);
                                                            }), 128))
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
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCard, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCardText, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VRow, null, {
                                                        default: withCtx(() => [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(manualDetails).thumbnails, (thumbnail, index) => {
                                                            return openBlock(), createBlock(VCol, {
                                                              cols: "4",
                                                              lg: "3",
                                                              class: "pa-1",
                                                              key: index
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VBtn, {
                                                                  variant: unref(selectedThumbnail) == index ? "outlined" : null,
                                                                  height: "auto",
                                                                  width: "50",
                                                                  active: unref(selectedThumbnail) == index,
                                                                  onClick: ($event) => selectedThumbnail.value = index,
                                                                  class: "py-1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(VImg, {
                                                                      "lazy-src": _imports_1,
                                                                      src: thumbnail.file_url,
                                                                      width: "50",
                                                                      height: "auto"
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
                                                                }, 1032, ["variant", "active", "onClick"])
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
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
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VImg, {
                                          src: (_b2 = unref(manualDetails).thumbnails[unref(selectedThumbnail)]) == null ? void 0 : _b2.file_url,
                                          "lazy-src": _imports_0,
                                          width: "300",
                                          height: "300",
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
                                          _: 1
                                        }, 8, ["src"]),
                                        createVNode(VSheet, { height: "30" }),
                                        createVNode(VSheet, null, {
                                          default: withCtx(() => [
                                            createVNode(VCard, null, {
                                              default: withCtx(() => [
                                                createVNode(VCardText, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VRow, null, {
                                                      default: withCtx(() => [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(manualDetails).thumbnails, (thumbnail, index) => {
                                                          return openBlock(), createBlock(VCol, {
                                                            cols: "4",
                                                            lg: "3",
                                                            class: "pa-1",
                                                            key: index
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VBtn, {
                                                                variant: unref(selectedThumbnail) == index ? "outlined" : null,
                                                                height: "auto",
                                                                width: "50",
                                                                active: unref(selectedThumbnail) == index,
                                                                onClick: ($event) => selectedThumbnail.value = index,
                                                                class: "py-1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VImg, {
                                                                    "lazy-src": _imports_1,
                                                                    src: thumbnail.file_url,
                                                                    width: "50",
                                                                    height: "auto"
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
                                                              }, 1032, ["variant", "active", "onClick"])
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
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
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<h2 class="font-weight-regular"${_scopeId5}>${ssrInterpolate(unref(manualDetails).title)}</h2>`);
                                      _push6(ssrRenderComponent(VSheet, { height: "30" }, null, _parent6, _scopeId5));
                                      _push6(`<h3${_scopeId5}>$${ssrInterpolate(unref(manualDetails).price)}</h3>`);
                                      _push6(ssrRenderComponent(VSheet, { height: "30" }, null, _parent6, _scopeId5));
                                      if (unref(manualDetails).description) {
                                        _push6(`<h3 class="font-weight-regular"${_scopeId5}>${ssrInterpolate(unref(manualDetails).description)}</h3>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [
                                        createVNode("h2", { class: "font-weight-regular" }, toDisplayString(unref(manualDetails).title), 1),
                                        createVNode(VSheet, { height: "30" }),
                                        createVNode("h3", null, "$" + toDisplayString(unref(manualDetails).price), 1),
                                        createVNode(VSheet, { height: "30" }),
                                        unref(manualDetails).description ? (openBlock(), createBlock("h3", {
                                          key: 0,
                                          class: "font-weight-regular"
                                        }, toDisplayString(unref(manualDetails).description), 1)) : createCommentVNode("", true)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VSheet, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VSelect, {
                                              modelValue: unref(documentType),
                                              "onUpdate:modelValue": ($event) => isRef(documentType) ? documentType.value = $event : null,
                                              label: "Please select",
                                              items: ["Download"],
                                              variant: "outlined"
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VSelect, {
                                              modelValue: unref(quantity),
                                              "onUpdate:modelValue": ($event) => isRef(quantity) ? quantity.value = $event : null,
                                              label: "Please select",
                                              items: quantityItems,
                                              variant: "outlined"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VSelect, {
                                                modelValue: unref(documentType),
                                                "onUpdate:modelValue": ($event) => isRef(documentType) ? documentType.value = $event : null,
                                                label: "Please select",
                                                items: ["Download"],
                                                variant: "outlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VSelect, {
                                                modelValue: unref(quantity),
                                                "onUpdate:modelValue": ($event) => isRef(quantity) ? quantity.value = $event : null,
                                                label: "Please select",
                                                items: quantityItems,
                                                variant: "outlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VSheet, { class: "my-5" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VBtn, {
                                              width: "400",
                                              size: "large",
                                              color: "white",
                                              text: "Add to Cart",
                                              "prepend-icon": "mdi-cart-check",
                                              elevation: "2",
                                              class: "bg-red-lighten-1 text-none",
                                              loading: unref(cartStore).addingCart,
                                              onClick: ($event) => addCart()
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VBtn, {
                                                width: "400",
                                                size: "large",
                                                color: "white",
                                                text: "Add to Cart",
                                                "prepend-icon": "mdi-cart-check",
                                                elevation: "2",
                                                class: "bg-red-lighten-1 text-none",
                                                loading: unref(cartStore).addingCart,
                                                onClick: ($event) => addCart()
                                              }, null, 8, ["loading", "onClick"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VSheet, null, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(documentType),
                                              "onUpdate:modelValue": ($event) => isRef(documentType) ? documentType.value = $event : null,
                                              label: "Please select",
                                              items: ["Download"],
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(VSelect, {
                                              modelValue: unref(quantity),
                                              "onUpdate:modelValue": ($event) => isRef(quantity) ? quantity.value = $event : null,
                                              label: "Please select",
                                              items: quantityItems,
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VSheet, { class: "my-5" }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              width: "400",
                                              size: "large",
                                              color: "white",
                                              text: "Add to Cart",
                                              "prepend-icon": "mdi-cart-check",
                                              elevation: "2",
                                              class: "bg-red-lighten-1 text-none",
                                              loading: unref(cartStore).addingCart,
                                              onClick: ($event) => addCart()
                                            }, null, 8, ["loading", "onClick"])
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
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "4",
                                    class: "d-flex align-center flex-column flex-wrap"
                                  }, {
                                    default: withCtx(() => {
                                      var _a2;
                                      return [
                                        createVNode(VImg, {
                                          src: (_a2 = unref(manualDetails).thumbnails[unref(selectedThumbnail)]) == null ? void 0 : _a2.file_url,
                                          "lazy-src": _imports_0,
                                          width: "300",
                                          height: "300",
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
                                          _: 1
                                        }, 8, ["src"]),
                                        createVNode(VSheet, { height: "30" }),
                                        createVNode(VSheet, null, {
                                          default: withCtx(() => [
                                            createVNode(VCard, null, {
                                              default: withCtx(() => [
                                                createVNode(VCardText, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VRow, null, {
                                                      default: withCtx(() => [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(manualDetails).thumbnails, (thumbnail, index) => {
                                                          return openBlock(), createBlock(VCol, {
                                                            cols: "4",
                                                            lg: "3",
                                                            class: "pa-1",
                                                            key: index
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VBtn, {
                                                                variant: unref(selectedThumbnail) == index ? "outlined" : null,
                                                                height: "auto",
                                                                width: "50",
                                                                active: unref(selectedThumbnail) == index,
                                                                onClick: ($event) => selectedThumbnail.value = index,
                                                                class: "py-1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VImg, {
                                                                    "lazy-src": _imports_1,
                                                                    src: thumbnail.file_url,
                                                                    width: "50",
                                                                    height: "auto"
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
                                                              }, 1032, ["variant", "active", "onClick"])
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
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
                                        })
                                      ];
                                    }),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("h2", { class: "font-weight-regular" }, toDisplayString(unref(manualDetails).title), 1),
                                      createVNode(VSheet, { height: "30" }),
                                      createVNode("h3", null, "$" + toDisplayString(unref(manualDetails).price), 1),
                                      createVNode(VSheet, { height: "30" }),
                                      unref(manualDetails).description ? (openBlock(), createBlock("h3", {
                                        key: 0,
                                        class: "font-weight-regular"
                                      }, toDisplayString(unref(manualDetails).description), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSheet, null, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(documentType),
                                            "onUpdate:modelValue": ($event) => isRef(documentType) ? documentType.value = $event : null,
                                            label: "Please select",
                                            items: ["Download"],
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(VSelect, {
                                            modelValue: unref(quantity),
                                            "onUpdate:modelValue": ($event) => isRef(quantity) ? quantity.value = $event : null,
                                            label: "Please select",
                                            items: quantityItems,
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VSheet, { class: "my-5" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            width: "400",
                                            size: "large",
                                            color: "white",
                                            text: "Add to Cart",
                                            "prepend-icon": "mdi-cart-check",
                                            elevation: "2",
                                            class: "bg-red-lighten-1 text-none",
                                            loading: unref(cartStore).addingCart,
                                            onClick: ($event) => addCart()
                                          }, null, 8, ["loading", "onClick"])
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
                        }
                        _push4(ssrRenderComponent(VDivider, { class: "my-5" }, null, _parent4, _scopeId3));
                        _push4(`<h3${_scopeId3}>You may also like </h3>`);
                        _push4(ssrRenderComponent(VSheet, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(relatedProducts), (item, index) => {
                                      _push6(ssrRenderComponent(VCol, {
                                        key: index,
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCard, {
                                              class: "ma-4",
                                              "max-width": "350",
                                              width: "100%",
                                              height: "fit-content"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VImg, {
                                                    class: "align-end text-white ma-4",
                                                    height: "320",
                                                    src: item.thumbnail,
                                                    "lazy-src": _imports_0,
                                                    rounded: "",
                                                    cover: ""
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
                                                  _push8(ssrRenderComponent(VCardTitle, { class: "text-wrap text-h6" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(item.title)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(item.title), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VCardSubtitle, { class: "text-h6 font-weight-bold" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` $${ssrInterpolate(item.price)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(" $" + toDisplayString(item.price), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VCardText, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<div${_scopeId8}>${ssrInterpolate(item.description)}</div>`);
                                                      } else {
                                                        return [
                                                          createVNode("div", null, toDisplayString(item.description), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VCardActions, { class: "d-flex justify-end flex-column" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VBtn, {
                                                          to: `/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`,
                                                          color: "white",
                                                          text: "View Details",
                                                          "prepend-icon": "mdi-text-box-search-outline",
                                                          elevation: "2",
                                                          class: "bg-grey-darken-3 text-none",
                                                          block: ""
                                                        }, null, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(VBtn, {
                                                          color: "white",
                                                          text: "Add to Cart",
                                                          "prepend-icon": "mdi-cart-check",
                                                          elevation: "2",
                                                          class: "bg-red-lighten-1 text-none",
                                                          block: "",
                                                          loading: unref(cartStore).addingCart && _ctx.selectedItem === item.id,
                                                          onClick: ($event) => addCart()
                                                        }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VBtn, {
                                                            to: `/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`,
                                                            color: "white",
                                                            text: "View Details",
                                                            "prepend-icon": "mdi-text-box-search-outline",
                                                            elevation: "2",
                                                            class: "bg-grey-darken-3 text-none",
                                                            block: ""
                                                          }, null, 8, ["to"]),
                                                          createVNode(VBtn, {
                                                            color: "white",
                                                            text: "Add to Cart",
                                                            "prepend-icon": "mdi-cart-check",
                                                            elevation: "2",
                                                            class: "bg-red-lighten-1 text-none",
                                                            block: "",
                                                            loading: unref(cartStore).addingCart && _ctx.selectedItem === item.id,
                                                            onClick: ($event) => addCart()
                                                          }, null, 8, ["loading", "onClick"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VImg, {
                                                      class: "align-end text-white ma-4",
                                                      height: "320",
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
                                                    createVNode(VCardTitle, { class: "text-wrap text-h6" }, {
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
                                                    createVNode(VCardActions, { class: "d-flex justify-end flex-column" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VBtn, {
                                                          to: `/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`,
                                                          color: "white",
                                                          text: "View Details",
                                                          "prepend-icon": "mdi-text-box-search-outline",
                                                          elevation: "2",
                                                          class: "bg-grey-darken-3 text-none",
                                                          block: ""
                                                        }, null, 8, ["to"]),
                                                        createVNode(VBtn, {
                                                          color: "white",
                                                          text: "Add to Cart",
                                                          "prepend-icon": "mdi-cart-check",
                                                          elevation: "2",
                                                          class: "bg-red-lighten-1 text-none",
                                                          block: "",
                                                          loading: unref(cartStore).addingCart && _ctx.selectedItem === item.id,
                                                          onClick: ($event) => addCart()
                                                        }, null, 8, ["loading", "onClick"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
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
                                                  createVNode(VCardTitle, { class: "text-wrap text-h6" }, {
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
                                                  createVNode(VCardActions, { class: "d-flex justify-end flex-column" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VBtn, {
                                                        to: `/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`,
                                                        color: "white",
                                                        text: "View Details",
                                                        "prepend-icon": "mdi-text-box-search-outline",
                                                        elevation: "2",
                                                        class: "bg-grey-darken-3 text-none",
                                                        block: ""
                                                      }, null, 8, ["to"]),
                                                      createVNode(VBtn, {
                                                        color: "white",
                                                        text: "Add to Cart",
                                                        "prepend-icon": "mdi-cart-check",
                                                        elevation: "2",
                                                        class: "bg-red-lighten-1 text-none",
                                                        block: "",
                                                        loading: unref(cartStore).addingCart && _ctx.selectedItem === item.id,
                                                        onClick: ($event) => addCart()
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
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(relatedProducts), (item, index) => {
                                        return openBlock(), createBlock(VCol, {
                                          key: index,
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
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
                                                createVNode(VCardTitle, { class: "text-wrap text-h6" }, {
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
                                                createVNode(VCardActions, { class: "d-flex justify-end flex-column" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VBtn, {
                                                      to: `/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`,
                                                      color: "white",
                                                      text: "View Details",
                                                      "prepend-icon": "mdi-text-box-search-outline",
                                                      elevation: "2",
                                                      class: "bg-grey-darken-3 text-none",
                                                      block: ""
                                                    }, null, 8, ["to"]),
                                                    createVNode(VBtn, {
                                                      color: "white",
                                                      text: "Add to Cart",
                                                      "prepend-icon": "mdi-cart-check",
                                                      elevation: "2",
                                                      class: "bg-red-lighten-1 text-none",
                                                      block: "",
                                                      loading: unref(cartStore).addingCart && _ctx.selectedItem === item.id,
                                                      onClick: ($event) => addCart()
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(relatedProducts), (item, index) => {
                                      return openBlock(), createBlock(VCol, {
                                        key: index,
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
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
                                              createVNode(VCardTitle, { class: "text-wrap text-h6" }, {
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
                                              createVNode(VCardActions, { class: "d-flex justify-end flex-column" }, {
                                                default: withCtx(() => [
                                                  createVNode(VBtn, {
                                                    to: `/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`,
                                                    color: "white",
                                                    text: "View Details",
                                                    "prepend-icon": "mdi-text-box-search-outline",
                                                    elevation: "2",
                                                    class: "bg-grey-darken-3 text-none",
                                                    block: ""
                                                  }, null, 8, ["to"]),
                                                  createVNode(VBtn, {
                                                    color: "white",
                                                    text: "Add to Cart",
                                                    "prepend-icon": "mdi-cart-check",
                                                    elevation: "2",
                                                    class: "bg-red-lighten-1 text-none",
                                                    block: "",
                                                    loading: unref(cartStore).addingCart && _ctx.selectedItem === item.id,
                                                    onClick: ($event) => addCart()
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
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          unref(status) == "pending" ? (openBlock(), createBlock(VSheet, {
                            key: 0,
                            class: "d-flex justify-center",
                            cols: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSkeletonLoader, {
                                width: "100%",
                                type: "image"
                              }),
                              createVNode(VSkeletonLoader, {
                                width: "100%",
                                type: "text, subtitle"
                              }),
                              createVNode(VSkeletonLoader, {
                                width: "100%",
                                type: "text, button"
                              })
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(VRow, { key: 1 }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "4",
                                class: "d-flex align-center flex-column flex-wrap"
                              }, {
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    createVNode(VImg, {
                                      src: (_a2 = unref(manualDetails).thumbnails[unref(selectedThumbnail)]) == null ? void 0 : _a2.file_url,
                                      "lazy-src": _imports_0,
                                      width: "300",
                                      height: "300",
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
                                      _: 1
                                    }, 8, ["src"]),
                                    createVNode(VSheet, { height: "30" }),
                                    createVNode(VSheet, null, {
                                      default: withCtx(() => [
                                        createVNode(VCard, null, {
                                          default: withCtx(() => [
                                            createVNode(VCardText, null, {
                                              default: withCtx(() => [
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(manualDetails).thumbnails, (thumbnail, index) => {
                                                      return openBlock(), createBlock(VCol, {
                                                        cols: "4",
                                                        lg: "3",
                                                        class: "pa-1",
                                                        key: index
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VBtn, {
                                                            variant: unref(selectedThumbnail) == index ? "outlined" : null,
                                                            height: "auto",
                                                            width: "50",
                                                            active: unref(selectedThumbnail) == index,
                                                            onClick: ($event) => selectedThumbnail.value = index,
                                                            class: "py-1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VImg, {
                                                                "lazy-src": _imports_1,
                                                                src: thumbnail.file_url,
                                                                width: "50",
                                                                height: "auto"
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
                                                          }, 1032, ["variant", "active", "onClick"])
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
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
                                    })
                                  ];
                                }),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h2", { class: "font-weight-regular" }, toDisplayString(unref(manualDetails).title), 1),
                                  createVNode(VSheet, { height: "30" }),
                                  createVNode("h3", null, "$" + toDisplayString(unref(manualDetails).price), 1),
                                  createVNode(VSheet, { height: "30" }),
                                  unref(manualDetails).description ? (openBlock(), createBlock("h3", {
                                    key: 0,
                                    class: "font-weight-regular"
                                  }, toDisplayString(unref(manualDetails).description), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSheet, null, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(documentType),
                                        "onUpdate:modelValue": ($event) => isRef(documentType) ? documentType.value = $event : null,
                                        label: "Please select",
                                        items: ["Download"],
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VSelect, {
                                        modelValue: unref(quantity),
                                        "onUpdate:modelValue": ($event) => isRef(quantity) ? quantity.value = $event : null,
                                        label: "Please select",
                                        items: quantityItems,
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VSheet, { class: "my-5" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        width: "400",
                                        size: "large",
                                        color: "white",
                                        text: "Add to Cart",
                                        "prepend-icon": "mdi-cart-check",
                                        elevation: "2",
                                        class: "bg-red-lighten-1 text-none",
                                        loading: unref(cartStore).addingCart,
                                        onClick: ($event) => addCart()
                                      }, null, 8, ["loading", "onClick"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })),
                          createVNode(VDivider, { class: "my-5" }),
                          createVNode("h3", null, "You may also like "),
                          createVNode(VSheet, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(relatedProducts), (item, index) => {
                                    return openBlock(), createBlock(VCol, {
                                      key: index,
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
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
                                            createVNode(VCardTitle, { class: "text-wrap text-h6" }, {
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
                                            createVNode(VCardActions, { class: "d-flex justify-end flex-column" }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  to: `/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`,
                                                  color: "white",
                                                  text: "View Details",
                                                  "prepend-icon": "mdi-text-box-search-outline",
                                                  elevation: "2",
                                                  class: "bg-grey-darken-3 text-none",
                                                  block: ""
                                                }, null, 8, ["to"]),
                                                createVNode(VBtn, {
                                                  color: "white",
                                                  text: "Add to Cart",
                                                  "prepend-icon": "mdi-cart-check",
                                                  elevation: "2",
                                                  class: "bg-red-lighten-1 text-none",
                                                  block: "",
                                                  loading: unref(cartStore).addingCart && _ctx.selectedItem === item.id,
                                                  onClick: ($event) => addCart()
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
                              })
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
                    createVNode(VContainer, null, {
                      default: withCtx(() => [
                        unref(status) == "pending" ? (openBlock(), createBlock(VSheet, {
                          key: 0,
                          class: "d-flex justify-center",
                          cols: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSkeletonLoader, {
                              width: "100%",
                              type: "image"
                            }),
                            createVNode(VSkeletonLoader, {
                              width: "100%",
                              type: "text, subtitle"
                            }),
                            createVNode(VSkeletonLoader, {
                              width: "100%",
                              type: "text, button"
                            })
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(VRow, { key: 1 }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "4",
                              class: "d-flex align-center flex-column flex-wrap"
                            }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createVNode(VImg, {
                                    src: (_a2 = unref(manualDetails).thumbnails[unref(selectedThumbnail)]) == null ? void 0 : _a2.file_url,
                                    "lazy-src": _imports_0,
                                    width: "300",
                                    height: "300",
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
                                    _: 1
                                  }, 8, ["src"]),
                                  createVNode(VSheet, { height: "30" }),
                                  createVNode(VSheet, null, {
                                    default: withCtx(() => [
                                      createVNode(VCard, null, {
                                        default: withCtx(() => [
                                          createVNode(VCardText, null, {
                                            default: withCtx(() => [
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(manualDetails).thumbnails, (thumbnail, index) => {
                                                    return openBlock(), createBlock(VCol, {
                                                      cols: "4",
                                                      lg: "3",
                                                      class: "pa-1",
                                                      key: index
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VBtn, {
                                                          variant: unref(selectedThumbnail) == index ? "outlined" : null,
                                                          height: "auto",
                                                          width: "50",
                                                          active: unref(selectedThumbnail) == index,
                                                          onClick: ($event) => selectedThumbnail.value = index,
                                                          class: "py-1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VImg, {
                                                              "lazy-src": _imports_1,
                                                              src: thumbnail.file_url,
                                                              width: "50",
                                                              height: "auto"
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
                                                        }, 1032, ["variant", "active", "onClick"])
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 128))
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
                                  })
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode("h2", { class: "font-weight-regular" }, toDisplayString(unref(manualDetails).title), 1),
                                createVNode(VSheet, { height: "30" }),
                                createVNode("h3", null, "$" + toDisplayString(unref(manualDetails).price), 1),
                                createVNode(VSheet, { height: "30" }),
                                unref(manualDetails).description ? (openBlock(), createBlock("h3", {
                                  key: 0,
                                  class: "font-weight-regular"
                                }, toDisplayString(unref(manualDetails).description), 1)) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VSheet, null, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(documentType),
                                      "onUpdate:modelValue": ($event) => isRef(documentType) ? documentType.value = $event : null,
                                      label: "Please select",
                                      items: ["Download"],
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VSelect, {
                                      modelValue: unref(quantity),
                                      "onUpdate:modelValue": ($event) => isRef(quantity) ? quantity.value = $event : null,
                                      label: "Please select",
                                      items: quantityItems,
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSheet, { class: "my-5" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      width: "400",
                                      size: "large",
                                      color: "white",
                                      text: "Add to Cart",
                                      "prepend-icon": "mdi-cart-check",
                                      elevation: "2",
                                      class: "bg-red-lighten-1 text-none",
                                      loading: unref(cartStore).addingCart,
                                      onClick: ($event) => addCart()
                                    }, null, 8, ["loading", "onClick"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })),
                        createVNode(VDivider, { class: "my-5" }),
                        createVNode("h3", null, "You may also like "),
                        createVNode(VSheet, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(relatedProducts), (item, index) => {
                                  return openBlock(), createBlock(VCol, {
                                    key: index,
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
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
                                          createVNode(VCardTitle, { class: "text-wrap text-h6" }, {
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
                                          createVNode(VCardActions, { class: "d-flex justify-end flex-column" }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                to: `/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`,
                                                color: "white",
                                                text: "View Details",
                                                "prepend-icon": "mdi-text-box-search-outline",
                                                elevation: "2",
                                                class: "bg-grey-darken-3 text-none",
                                                block: ""
                                              }, null, 8, ["to"]),
                                              createVNode(VBtn, {
                                                color: "white",
                                                text: "Add to Cart",
                                                "prepend-icon": "mdi-cart-check",
                                                elevation: "2",
                                                class: "bg-red-lighten-1 text-none",
                                                block: "",
                                                loading: unref(cartStore).addingCart && _ctx.selectedItem === item.id,
                                                onClick: ($event) => addCart()
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VContainer, null, {
                    default: withCtx(() => [
                      unref(status) == "pending" ? (openBlock(), createBlock(VSheet, {
                        key: 0,
                        class: "d-flex justify-center",
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSkeletonLoader, {
                            width: "100%",
                            type: "image"
                          }),
                          createVNode(VSkeletonLoader, {
                            width: "100%",
                            type: "text, subtitle"
                          }),
                          createVNode(VSkeletonLoader, {
                            width: "100%",
                            type: "text, button"
                          })
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(VRow, { key: 1 }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "4",
                            class: "d-flex align-center flex-column flex-wrap"
                          }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(VImg, {
                                  src: (_a2 = unref(manualDetails).thumbnails[unref(selectedThumbnail)]) == null ? void 0 : _a2.file_url,
                                  "lazy-src": _imports_0,
                                  width: "300",
                                  height: "300",
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
                                  _: 1
                                }, 8, ["src"]),
                                createVNode(VSheet, { height: "30" }),
                                createVNode(VSheet, null, {
                                  default: withCtx(() => [
                                    createVNode(VCard, null, {
                                      default: withCtx(() => [
                                        createVNode(VCardText, null, {
                                          default: withCtx(() => [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(manualDetails).thumbnails, (thumbnail, index) => {
                                                  return openBlock(), createBlock(VCol, {
                                                    cols: "4",
                                                    lg: "3",
                                                    class: "pa-1",
                                                    key: index
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VBtn, {
                                                        variant: unref(selectedThumbnail) == index ? "outlined" : null,
                                                        height: "auto",
                                                        width: "50",
                                                        active: unref(selectedThumbnail) == index,
                                                        onClick: ($event) => selectedThumbnail.value = index,
                                                        class: "py-1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VImg, {
                                                            "lazy-src": _imports_1,
                                                            src: thumbnail.file_url,
                                                            width: "50",
                                                            height: "auto"
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
                                                      }, 1032, ["variant", "active", "onClick"])
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 128))
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
                                })
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode("h2", { class: "font-weight-regular" }, toDisplayString(unref(manualDetails).title), 1),
                              createVNode(VSheet, { height: "30" }),
                              createVNode("h3", null, "$" + toDisplayString(unref(manualDetails).price), 1),
                              createVNode(VSheet, { height: "30" }),
                              unref(manualDetails).description ? (openBlock(), createBlock("h3", {
                                key: 0,
                                class: "font-weight-regular"
                              }, toDisplayString(unref(manualDetails).description), 1)) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSheet, null, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(documentType),
                                    "onUpdate:modelValue": ($event) => isRef(documentType) ? documentType.value = $event : null,
                                    label: "Please select",
                                    items: ["Download"],
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VSelect, {
                                    modelValue: unref(quantity),
                                    "onUpdate:modelValue": ($event) => isRef(quantity) ? quantity.value = $event : null,
                                    label: "Please select",
                                    items: quantityItems,
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VSheet, { class: "my-5" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    width: "400",
                                    size: "large",
                                    color: "white",
                                    text: "Add to Cart",
                                    "prepend-icon": "mdi-cart-check",
                                    elevation: "2",
                                    class: "bg-red-lighten-1 text-none",
                                    loading: unref(cartStore).addingCart,
                                    onClick: ($event) => addCart()
                                  }, null, 8, ["loading", "onClick"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })),
                      createVNode(VDivider, { class: "my-5" }),
                      createVNode("h3", null, "You may also like "),
                      createVNode(VSheet, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(relatedProducts), (item, index) => {
                                return openBlock(), createBlock(VCol, {
                                  key: index,
                                  cols: "12",
                                  sm: "6",
                                  md: "3"
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
                                        createVNode(VCardTitle, { class: "text-wrap text-h6" }, {
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
                                        createVNode(VCardActions, { class: "d-flex justify-end flex-column" }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              to: `/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`,
                                              color: "white",
                                              text: "View Details",
                                              "prepend-icon": "mdi-text-box-search-outline",
                                              elevation: "2",
                                              class: "bg-grey-darken-3 text-none",
                                              block: ""
                                            }, null, 8, ["to"]),
                                            createVNode(VBtn, {
                                              color: "white",
                                              text: "Add to Cart",
                                              "prepend-icon": "mdi-cart-check",
                                              elevation: "2",
                                              class: "bg-red-lighten-1 text-none",
                                              block: "",
                                              loading: unref(cartStore).addingCart && _ctx.selectedItem === item.id,
                                              onClick: ($event) => addCart()
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
                          })
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/manuals/categories/[main_category_slug]/[sub_category_slug]/[product_slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_product_slug_.vue.mjs.map
