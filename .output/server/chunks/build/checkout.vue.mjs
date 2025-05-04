import { useSSRContext, ref, mergeProps, withCtx, createVNode, unref, toDisplayString, createBlock, createCommentVNode, openBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './partial-logo.png.mjs';
import { _ as _imports_1 } from './image-icon.png.mjs';
import { l as useCartStore, m as useSanctumAuth } from './server.mjs';
import { u as usePaymentStore } from './payment.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { V as VContainer } from './VContainer.mjs';
import { V as VSheet } from './VSheet.mjs';
import { V as VImg, a as VCard, f as VCardItem } from './VCard.mjs';
import { c as VIcon, b as VProgressCircular } from './VProgressCircular.mjs';
import { V as VDivider } from './VDivider.mjs';
import { V as VRow, a as VCol } from './VCol.mjs';
import { V as VList, a as VListItem } from './VList.mjs';
import { V as VVirtualScroll } from './VVirtualScroll.mjs';
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
import './ssrBoot.mjs';

const _sfc_main = {
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    usePaymentStore();
    const loadingPayPayButton = ref(true);
    useSanctumAuth();
    const checkoutInformation = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-5" }, _attrs))} data-v-5e2b6648>`);
      _push(ssrRenderComponent(VContainer, { "max-width": "1300" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VSheet, { class: "d-flex mb-6 align-end justify-space-between" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, {
                    src: _imports_0,
                    "max-height": "100",
                    "max-width": "250",
                    onClick: ($event) => _ctx.$router.push("/"),
                    class: "cursor-pointer"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSheet, { class: "d-flex align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "mdi-shield-check",
                          color: "grey-lighten-1",
                          size: "40"
                        }, null, _parent4, _scopeId3));
                        _push4(`<h2 color="grey-darken-3" data-v-5e2b6648${_scopeId3}>Secure Checkout</h2>`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: "mdi-shield-check",
                            color: "grey-lighten-1",
                            size: "40"
                          }),
                          createVNode("h2", { color: "grey-darken-3" }, "Secure Checkout")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, {
                      src: _imports_0,
                      "max-height": "100",
                      "max-width": "250",
                      onClick: ($event) => _ctx.$router.push("/"),
                      class: "cursor-pointer"
                    }, null, 8, ["onClick"]),
                    createVNode(VSheet, { class: "d-flex align-center" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: "mdi-shield-check",
                          color: "grey-lighten-1",
                          size: "40"
                        }),
                        createVNode("h2", { color: "grey-darken-3" }, "Secure Checkout")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSheet, { class: "mt-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "7",
                          lg: "7"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, { class: "my-5" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardItem, { id: "checkout-information" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSheet, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<h3 data-v-5e2b6648${_scopeId7}>Checkout Information</h3>`);
                                              } else {
                                                return [
                                                  createVNode("h3", null, "Checkout Information")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          if (unref(checkoutInformation)) {
                                            _push7(ssrRenderComponent(VList, { lines: "two" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VListItem, {
                                                    title: "First Name:",
                                                    disabled: ""
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<h4 data-v-5e2b6648${_scopeId8}>${ssrInterpolate(unref(checkoutInformation).firstName)}</h4>`);
                                                      } else {
                                                        return [
                                                          createVNode("h4", null, toDisplayString(unref(checkoutInformation).firstName), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VDivider, null, null, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VDivider, null, null, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VListItem, {
                                                    title: "Email Address:",
                                                    disabled: ""
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<h4 data-v-5e2b6648${_scopeId8}>${ssrInterpolate(unref(checkoutInformation).emailAddress)}</h4>`);
                                                      } else {
                                                        return [
                                                          createVNode("h4", null, toDisplayString(unref(checkoutInformation).emailAddress), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VListItem, {
                                                      title: "First Name:",
                                                      disabled: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("h4", null, toDisplayString(unref(checkoutInformation).firstName), 1)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VDivider),
                                                    createVNode(VDivider),
                                                    createVNode(VListItem, {
                                                      title: "Email Address:",
                                                      disabled: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("h4", null, toDisplayString(unref(checkoutInformation).emailAddress), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode(VSheet, null, {
                                              default: withCtx(() => [
                                                createVNode("h3", null, "Checkout Information")
                                              ]),
                                              _: 1
                                            }),
                                            unref(checkoutInformation) ? (openBlock(), createBlock(VList, {
                                              key: 0,
                                              lines: "two"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VListItem, {
                                                  title: "First Name:",
                                                  disabled: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("h4", null, toDisplayString(unref(checkoutInformation).firstName), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VDivider),
                                                createVNode(VDivider),
                                                createVNode(VListItem, {
                                                  title: "Email Address:",
                                                  disabled: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("h4", null, toDisplayString(unref(checkoutInformation).emailAddress), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardItem, { id: "checkout-information" }, {
                                        default: withCtx(() => [
                                          createVNode(VSheet, null, {
                                            default: withCtx(() => [
                                              createVNode("h3", null, "Checkout Information")
                                            ]),
                                            _: 1
                                          }),
                                          unref(checkoutInformation) ? (openBlock(), createBlock(VList, {
                                            key: 0,
                                            lines: "two"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VListItem, {
                                                title: "First Name:",
                                                disabled: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("h4", null, toDisplayString(unref(checkoutInformation).firstName), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VDivider),
                                              createVNode(VDivider),
                                              createVNode(VListItem, {
                                                title: "Email Address:",
                                                disabled: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("h4", null, toDisplayString(unref(checkoutInformation).emailAddress), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCard, { class: "my-5" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardItem, { id: "payment" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSheet, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<h3 data-v-5e2b6648${_scopeId7}>Payment</h3>`);
                                              } else {
                                                return [
                                                  createVNode("h3", null, "Payment")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VSheet, { class: "mt-6" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                if (unref(loadingPayPayButton)) {
                                                  _push8(`<div class="d-flex align-center justify-center fill-height" data-v-5e2b6648${_scopeId7}>`);
                                                  _push8(ssrRenderComponent(VProgressCircular, {
                                                    color: "grey-lighten-4",
                                                    indeterminate: ""
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(`</div>`);
                                                } else {
                                                  _push8(`<!---->`);
                                                }
                                                _push8(`<div id="paypal-button-container" data-v-5e2b6648${_scopeId7}></div>`);
                                              } else {
                                                return [
                                                  unref(loadingPayPayButton) ? (openBlock(), createBlock("div", {
                                                    key: 0,
                                                    class: "d-flex align-center justify-center fill-height"
                                                  }, [
                                                    createVNode(VProgressCircular, {
                                                      color: "grey-lighten-4",
                                                      indeterminate: ""
                                                    })
                                                  ])) : createCommentVNode("", true),
                                                  createVNode("div", { id: "paypal-button-container" })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSheet, null, {
                                              default: withCtx(() => [
                                                createVNode("h3", null, "Payment")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VSheet, { class: "mt-6" }, {
                                              default: withCtx(() => [
                                                unref(loadingPayPayButton) ? (openBlock(), createBlock("div", {
                                                  key: 0,
                                                  class: "d-flex align-center justify-center fill-height"
                                                }, [
                                                  createVNode(VProgressCircular, {
                                                    color: "grey-lighten-4",
                                                    indeterminate: ""
                                                  })
                                                ])) : createCommentVNode("", true),
                                                createVNode("div", { id: "paypal-button-container" })
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
                                      createVNode(VCardItem, { id: "payment" }, {
                                        default: withCtx(() => [
                                          createVNode(VSheet, null, {
                                            default: withCtx(() => [
                                              createVNode("h3", null, "Payment")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VSheet, { class: "mt-6" }, {
                                            default: withCtx(() => [
                                              unref(loadingPayPayButton) ? (openBlock(), createBlock("div", {
                                                key: 0,
                                                class: "d-flex align-center justify-center fill-height"
                                              }, [
                                                createVNode(VProgressCircular, {
                                                  color: "grey-lighten-4",
                                                  indeterminate: ""
                                                })
                                              ])) : createCommentVNode("", true),
                                              createVNode("div", { id: "paypal-button-container" })
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
                            } else {
                              return [
                                createVNode(VCard, { class: "my-5" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardItem, { id: "checkout-information" }, {
                                      default: withCtx(() => [
                                        createVNode(VSheet, null, {
                                          default: withCtx(() => [
                                            createVNode("h3", null, "Checkout Information")
                                          ]),
                                          _: 1
                                        }),
                                        unref(checkoutInformation) ? (openBlock(), createBlock(VList, {
                                          key: 0,
                                          lines: "two"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VListItem, {
                                              title: "First Name:",
                                              disabled: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("h4", null, toDisplayString(unref(checkoutInformation).firstName), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VDivider),
                                            createVNode(VDivider),
                                            createVNode(VListItem, {
                                              title: "Email Address:",
                                              disabled: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("h4", null, toDisplayString(unref(checkoutInformation).emailAddress), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCard, { class: "my-5" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardItem, { id: "payment" }, {
                                      default: withCtx(() => [
                                        createVNode(VSheet, null, {
                                          default: withCtx(() => [
                                            createVNode("h3", null, "Payment")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VSheet, { class: "mt-6" }, {
                                          default: withCtx(() => [
                                            unref(loadingPayPayButton) ? (openBlock(), createBlock("div", {
                                              key: 0,
                                              class: "d-flex align-center justify-center fill-height"
                                            }, [
                                              createVNode(VProgressCircular, {
                                                color: "grey-lighten-4",
                                                indeterminate: ""
                                              })
                                            ])) : createCommentVNode("", true),
                                            createVNode("div", { id: "paypal-button-container" })
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          xs: "12",
                          md: "5",
                          lg: "5"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSheet, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCard, { class: "my-5" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardItem, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSheet, { class: "mb-5" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<h3 data-v-5e2b6648${_scopeId8}>Payment Summary</h3>`);
                                                    } else {
                                                      return [
                                                        createVNode("h3", null, "Payment Summary")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, { class: "d-flex justify-space-between" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<h4 class="font-weight-regular" data-v-5e2b6648${_scopeId9}>Number of Item(s)</h4><p class="font-weight-regular" data-v-5e2b6648${_scopeId9}>${ssrInterpolate(unref(cartStore).totalCount)}</p>`);
                                                          } else {
                                                            return [
                                                              createVNode("h4", { class: "font-weight-regular" }, "Number of Item(s)"),
                                                              createVNode("p", { class: "font-weight-regular" }, toDisplayString(unref(cartStore).totalCount), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, { class: "d-flex justify-space-between" }, {
                                                          default: withCtx(() => [
                                                            createVNode("h4", { class: "font-weight-regular" }, "Number of Item(s)"),
                                                            createVNode("p", { class: "font-weight-regular" }, toDisplayString(unref(cartStore).totalCount), 1)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VDivider, { class: "my-5" }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, { class: "d-flex justify-space-between" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<h4 class="font-weight-regular" data-v-5e2b6648${_scopeId9}>Total Cost</h4><h4 class="price-text-color text-right" data-v-5e2b6648${_scopeId9}>$${ssrInterpolate(unref(cartStore).totalPrice)}</h4>`);
                                                          } else {
                                                            return [
                                                              createVNode("h4", { class: "font-weight-regular" }, "Total Cost"),
                                                              createVNode("h4", { class: "price-text-color text-right" }, "$" + toDisplayString(unref(cartStore).totalPrice), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, { class: "d-flex justify-space-between" }, {
                                                          default: withCtx(() => [
                                                            createVNode("h4", { class: "font-weight-regular" }, "Total Cost"),
                                                            createVNode("h4", { class: "price-text-color text-right" }, "$" + toDisplayString(unref(cartStore).totalPrice), 1)
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
                                                  createVNode(VSheet, { class: "mb-5" }, {
                                                    default: withCtx(() => [
                                                      createVNode("h3", null, "Payment Summary")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, { class: "d-flex justify-space-between" }, {
                                                        default: withCtx(() => [
                                                          createVNode("h4", { class: "font-weight-regular" }, "Number of Item(s)"),
                                                          createVNode("p", { class: "font-weight-regular" }, toDisplayString(unref(cartStore).totalCount), 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VDivider, { class: "my-5" }),
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, { class: "d-flex justify-space-between" }, {
                                                        default: withCtx(() => [
                                                          createVNode("h4", { class: "font-weight-regular" }, "Total Cost"),
                                                          createVNode("h4", { class: "price-text-color text-right" }, "$" + toDisplayString(unref(cartStore).totalPrice), 1)
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
                                            createVNode(VCardItem, null, {
                                              default: withCtx(() => [
                                                createVNode(VSheet, { class: "mb-5" }, {
                                                  default: withCtx(() => [
                                                    createVNode("h3", null, "Payment Summary")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, { class: "d-flex justify-space-between" }, {
                                                      default: withCtx(() => [
                                                        createVNode("h4", { class: "font-weight-regular" }, "Number of Item(s)"),
                                                        createVNode("p", { class: "font-weight-regular" }, toDisplayString(unref(cartStore).totalCount), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VDivider, { class: "my-5" }),
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, { class: "d-flex justify-space-between" }, {
                                                      default: withCtx(() => [
                                                        createVNode("h4", { class: "font-weight-regular" }, "Total Cost"),
                                                        createVNode("h4", { class: "price-text-color text-right" }, "$" + toDisplayString(unref(cartStore).totalPrice), 1)
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
                                      createVNode(VCard, { class: "my-5" }, {
                                        default: withCtx(() => [
                                          createVNode(VCardItem, null, {
                                            default: withCtx(() => [
                                              createVNode(VSheet, { class: "mb-5" }, {
                                                default: withCtx(() => [
                                                  createVNode("h3", null, "Payment Summary")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, { class: "d-flex justify-space-between" }, {
                                                    default: withCtx(() => [
                                                      createVNode("h4", { class: "font-weight-regular" }, "Number of Item(s)"),
                                                      createVNode("p", { class: "font-weight-regular" }, toDisplayString(unref(cartStore).totalCount), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VDivider, { class: "my-5" }),
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, { class: "d-flex justify-space-between" }, {
                                                    default: withCtx(() => [
                                                      createVNode("h4", { class: "font-weight-regular" }, "Total Cost"),
                                                      createVNode("h4", { class: "price-text-color text-right" }, "$" + toDisplayString(unref(cartStore).totalPrice), 1)
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
                              _push5(ssrRenderComponent(VSheet, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCard, { class: "my-5" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardItem, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSheet, { class: "mb-5" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<h3 data-v-5e2b6648${_scopeId8}>Item Summary</h3>`);
                                                    } else {
                                                      return [
                                                        createVNode("h3", null, "Item Summary")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VSheet, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      if (unref(cartStore).totalCount == 0) {
                                                        _push9(ssrRenderComponent(VSheet, null, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<p class="text-center" data-v-5e2b6648${_scopeId9}>No records found</p>`);
                                                            } else {
                                                              return [
                                                                createVNode("p", { class: "text-center" }, "No records found")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        _push9(ssrRenderComponent(VVirtualScroll, {
                                                          "max-height": "295",
                                                          "item-height": "50",
                                                          items: unref(cartStore).cartItems
                                                        }, {
                                                          default: withCtx(({ item }, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(VListItem, { class: "pa-0 my-5" }, {
                                                                prepend: withCtx((_9, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(VImg, {
                                                                      src: item.thumbnail,
                                                                      "lazy-src": _imports_1,
                                                                      width: "50",
                                                                      height: "50",
                                                                      rounded: ""
                                                                    }, {
                                                                      placeholder: withCtx((_10, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(`<div class="d-flex align-center justify-center fill-height" data-v-5e2b6648${_scopeId11}>`);
                                                                          _push12(ssrRenderComponent(VProgressCircular, {
                                                                            color: "grey-lighten-4",
                                                                            indeterminate: ""
                                                                          }, null, _parent12, _scopeId11));
                                                                          _push12(`</div>`);
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
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(VImg, {
                                                                        src: item.thumbnail,
                                                                        "lazy-src": _imports_1,
                                                                        width: "50",
                                                                        height: "50",
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
                                                                append: withCtx((_9, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(`<h5 class="price-text-color text-right font-weight-medium" data-v-5e2b6648${_scopeId10}>$${ssrInterpolate(item.price)}</h5>`);
                                                                  } else {
                                                                    return [
                                                                      createVNode("h5", { class: "price-text-color text-right font-weight-medium" }, "$" + toDisplayString(item.price), 1)
                                                                    ];
                                                                  }
                                                                }),
                                                                default: withCtx((_9, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(VSheet, { class: "ms-5" }, {
                                                                      default: withCtx((_10, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(`<h5 class="mb-1" data-v-5e2b6648${_scopeId11}>${ssrInterpolate(item.title)}</h5><h5 class="font-weight-regular" data-v-5e2b6648${_scopeId11}>Quantity: ${ssrInterpolate(item.quantity)}</h5>`);
                                                                        } else {
                                                                          return [
                                                                            createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1),
                                                                            createVNode("h5", { class: "font-weight-regular" }, "Quantity: " + toDisplayString(item.quantity), 1)
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(VSheet, { class: "ms-5" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1),
                                                                          createVNode("h5", { class: "font-weight-regular" }, "Quantity: " + toDisplayString(item.quantity), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                createVNode(VListItem, { class: "pa-0 my-5" }, {
                                                                  prepend: withCtx(() => [
                                                                    createVNode(VImg, {
                                                                      src: item.thumbnail,
                                                                      "lazy-src": _imports_1,
                                                                      width: "50",
                                                                      height: "50",
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
                                                                  append: withCtx(() => [
                                                                    createVNode("h5", { class: "price-text-color text-right font-weight-medium" }, "$" + toDisplayString(item.price), 1)
                                                                  ]),
                                                                  default: withCtx(() => [
                                                                    createVNode(VSheet, { class: "ms-5" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1),
                                                                        createVNode("h5", { class: "font-weight-regular" }, "Quantity: " + toDisplayString(item.quantity), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      }
                                                    } else {
                                                      return [
                                                        unref(cartStore).totalCount == 0 ? (openBlock(), createBlock(VSheet, { key: 0 }, {
                                                          default: withCtx(() => [
                                                            createVNode("p", { class: "text-center" }, "No records found")
                                                          ]),
                                                          _: 1
                                                        })) : (openBlock(), createBlock(VVirtualScroll, {
                                                          key: 1,
                                                          "max-height": "295",
                                                          "item-height": "50",
                                                          items: unref(cartStore).cartItems
                                                        }, {
                                                          default: withCtx(({ item }) => [
                                                            createVNode(VListItem, { class: "pa-0 my-5" }, {
                                                              prepend: withCtx(() => [
                                                                createVNode(VImg, {
                                                                  src: item.thumbnail,
                                                                  "lazy-src": _imports_1,
                                                                  width: "50",
                                                                  height: "50",
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
                                                              append: withCtx(() => [
                                                                createVNode("h5", { class: "price-text-color text-right font-weight-medium" }, "$" + toDisplayString(item.price), 1)
                                                              ]),
                                                              default: withCtx(() => [
                                                                createVNode(VSheet, { class: "ms-5" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1),
                                                                    createVNode("h5", { class: "font-weight-regular" }, "Quantity: " + toDisplayString(item.quantity), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 1
                                                        }, 8, ["items"]))
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSheet, { class: "mb-5" }, {
                                                    default: withCtx(() => [
                                                      createVNode("h3", null, "Item Summary")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VSheet, null, {
                                                    default: withCtx(() => [
                                                      unref(cartStore).totalCount == 0 ? (openBlock(), createBlock(VSheet, { key: 0 }, {
                                                        default: withCtx(() => [
                                                          createVNode("p", { class: "text-center" }, "No records found")
                                                        ]),
                                                        _: 1
                                                      })) : (openBlock(), createBlock(VVirtualScroll, {
                                                        key: 1,
                                                        "max-height": "295",
                                                        "item-height": "50",
                                                        items: unref(cartStore).cartItems
                                                      }, {
                                                        default: withCtx(({ item }) => [
                                                          createVNode(VListItem, { class: "pa-0 my-5" }, {
                                                            prepend: withCtx(() => [
                                                              createVNode(VImg, {
                                                                src: item.thumbnail,
                                                                "lazy-src": _imports_1,
                                                                width: "50",
                                                                height: "50",
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
                                                            append: withCtx(() => [
                                                              createVNode("h5", { class: "price-text-color text-right font-weight-medium" }, "$" + toDisplayString(item.price), 1)
                                                            ]),
                                                            default: withCtx(() => [
                                                              createVNode(VSheet, { class: "ms-5" }, {
                                                                default: withCtx(() => [
                                                                  createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1),
                                                                  createVNode("h5", { class: "font-weight-regular" }, "Quantity: " + toDisplayString(item.quantity), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 1
                                                      }, 8, ["items"]))
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
                                                createVNode(VSheet, { class: "mb-5" }, {
                                                  default: withCtx(() => [
                                                    createVNode("h3", null, "Item Summary")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VSheet, null, {
                                                  default: withCtx(() => [
                                                    unref(cartStore).totalCount == 0 ? (openBlock(), createBlock(VSheet, { key: 0 }, {
                                                      default: withCtx(() => [
                                                        createVNode("p", { class: "text-center" }, "No records found")
                                                      ]),
                                                      _: 1
                                                    })) : (openBlock(), createBlock(VVirtualScroll, {
                                                      key: 1,
                                                      "max-height": "295",
                                                      "item-height": "50",
                                                      items: unref(cartStore).cartItems
                                                    }, {
                                                      default: withCtx(({ item }) => [
                                                        createVNode(VListItem, { class: "pa-0 my-5" }, {
                                                          prepend: withCtx(() => [
                                                            createVNode(VImg, {
                                                              src: item.thumbnail,
                                                              "lazy-src": _imports_1,
                                                              width: "50",
                                                              height: "50",
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
                                                          append: withCtx(() => [
                                                            createVNode("h5", { class: "price-text-color text-right font-weight-medium" }, "$" + toDisplayString(item.price), 1)
                                                          ]),
                                                          default: withCtx(() => [
                                                            createVNode(VSheet, { class: "ms-5" }, {
                                                              default: withCtx(() => [
                                                                createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1),
                                                                createVNode("h5", { class: "font-weight-regular" }, "Quantity: " + toDisplayString(item.quantity), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 1
                                                    }, 8, ["items"]))
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
                                      createVNode(VCard, { class: "my-5" }, {
                                        default: withCtx(() => [
                                          createVNode(VCardItem, null, {
                                            default: withCtx(() => [
                                              createVNode(VSheet, { class: "mb-5" }, {
                                                default: withCtx(() => [
                                                  createVNode("h3", null, "Item Summary")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VSheet, null, {
                                                default: withCtx(() => [
                                                  unref(cartStore).totalCount == 0 ? (openBlock(), createBlock(VSheet, { key: 0 }, {
                                                    default: withCtx(() => [
                                                      createVNode("p", { class: "text-center" }, "No records found")
                                                    ]),
                                                    _: 1
                                                  })) : (openBlock(), createBlock(VVirtualScroll, {
                                                    key: 1,
                                                    "max-height": "295",
                                                    "item-height": "50",
                                                    items: unref(cartStore).cartItems
                                                  }, {
                                                    default: withCtx(({ item }) => [
                                                      createVNode(VListItem, { class: "pa-0 my-5" }, {
                                                        prepend: withCtx(() => [
                                                          createVNode(VImg, {
                                                            src: item.thumbnail,
                                                            "lazy-src": _imports_1,
                                                            width: "50",
                                                            height: "50",
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
                                                        append: withCtx(() => [
                                                          createVNode("h5", { class: "price-text-color text-right font-weight-medium" }, "$" + toDisplayString(item.price), 1)
                                                        ]),
                                                        default: withCtx(() => [
                                                          createVNode(VSheet, { class: "ms-5" }, {
                                                            default: withCtx(() => [
                                                              createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1),
                                                              createVNode("h5", { class: "font-weight-regular" }, "Quantity: " + toDisplayString(item.quantity), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["items"]))
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
                            } else {
                              return [
                                createVNode(VSheet, null, {
                                  default: withCtx(() => [
                                    createVNode(VCard, { class: "my-5" }, {
                                      default: withCtx(() => [
                                        createVNode(VCardItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VSheet, { class: "mb-5" }, {
                                              default: withCtx(() => [
                                                createVNode("h3", null, "Payment Summary")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { class: "d-flex justify-space-between" }, {
                                                  default: withCtx(() => [
                                                    createVNode("h4", { class: "font-weight-regular" }, "Number of Item(s)"),
                                                    createVNode("p", { class: "font-weight-regular" }, toDisplayString(unref(cartStore).totalCount), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VDivider, { class: "my-5" }),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { class: "d-flex justify-space-between" }, {
                                                  default: withCtx(() => [
                                                    createVNode("h4", { class: "font-weight-regular" }, "Total Cost"),
                                                    createVNode("h4", { class: "price-text-color text-right" }, "$" + toDisplayString(unref(cartStore).totalPrice), 1)
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
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSheet, null, {
                                  default: withCtx(() => [
                                    createVNode(VCard, { class: "my-5" }, {
                                      default: withCtx(() => [
                                        createVNode(VCardItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VSheet, { class: "mb-5" }, {
                                              default: withCtx(() => [
                                                createVNode("h3", null, "Item Summary")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VSheet, null, {
                                              default: withCtx(() => [
                                                unref(cartStore).totalCount == 0 ? (openBlock(), createBlock(VSheet, { key: 0 }, {
                                                  default: withCtx(() => [
                                                    createVNode("p", { class: "text-center" }, "No records found")
                                                  ]),
                                                  _: 1
                                                })) : (openBlock(), createBlock(VVirtualScroll, {
                                                  key: 1,
                                                  "max-height": "295",
                                                  "item-height": "50",
                                                  items: unref(cartStore).cartItems
                                                }, {
                                                  default: withCtx(({ item }) => [
                                                    createVNode(VListItem, { class: "pa-0 my-5" }, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VImg, {
                                                          src: item.thumbnail,
                                                          "lazy-src": _imports_1,
                                                          width: "50",
                                                          height: "50",
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
                                                      append: withCtx(() => [
                                                        createVNode("h5", { class: "price-text-color text-right font-weight-medium" }, "$" + toDisplayString(item.price), 1)
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VSheet, { class: "ms-5" }, {
                                                          default: withCtx(() => [
                                                            createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1),
                                                            createVNode("h5", { class: "font-weight-regular" }, "Quantity: " + toDisplayString(item.quantity), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 1
                                                }, 8, ["items"]))
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            md: "7",
                            lg: "7"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, { class: "my-5" }, {
                                default: withCtx(() => [
                                  createVNode(VCardItem, { id: "checkout-information" }, {
                                    default: withCtx(() => [
                                      createVNode(VSheet, null, {
                                        default: withCtx(() => [
                                          createVNode("h3", null, "Checkout Information")
                                        ]),
                                        _: 1
                                      }),
                                      unref(checkoutInformation) ? (openBlock(), createBlock(VList, {
                                        key: 0,
                                        lines: "two"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VListItem, {
                                            title: "First Name:",
                                            disabled: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("h4", null, toDisplayString(unref(checkoutInformation).firstName), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VDivider),
                                          createVNode(VDivider),
                                          createVNode(VListItem, {
                                            title: "Email Address:",
                                            disabled: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("h4", null, toDisplayString(unref(checkoutInformation).emailAddress), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCard, { class: "my-5" }, {
                                default: withCtx(() => [
                                  createVNode(VCardItem, { id: "payment" }, {
                                    default: withCtx(() => [
                                      createVNode(VSheet, null, {
                                        default: withCtx(() => [
                                          createVNode("h3", null, "Payment")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VSheet, { class: "mt-6" }, {
                                        default: withCtx(() => [
                                          unref(loadingPayPayButton) ? (openBlock(), createBlock("div", {
                                            key: 0,
                                            class: "d-flex align-center justify-center fill-height"
                                          }, [
                                            createVNode(VProgressCircular, {
                                              color: "grey-lighten-4",
                                              indeterminate: ""
                                            })
                                          ])) : createCommentVNode("", true),
                                          createVNode("div", { id: "paypal-button-container" })
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
                          }),
                          createVNode(VCol, {
                            xs: "12",
                            md: "5",
                            lg: "5"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSheet, null, {
                                default: withCtx(() => [
                                  createVNode(VCard, { class: "my-5" }, {
                                    default: withCtx(() => [
                                      createVNode(VCardItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VSheet, { class: "mb-5" }, {
                                            default: withCtx(() => [
                                              createVNode("h3", null, "Payment Summary")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, { class: "d-flex justify-space-between" }, {
                                                default: withCtx(() => [
                                                  createVNode("h4", { class: "font-weight-regular" }, "Number of Item(s)"),
                                                  createVNode("p", { class: "font-weight-regular" }, toDisplayString(unref(cartStore).totalCount), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VDivider, { class: "my-5" }),
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, { class: "d-flex justify-space-between" }, {
                                                default: withCtx(() => [
                                                  createVNode("h4", { class: "font-weight-regular" }, "Total Cost"),
                                                  createVNode("h4", { class: "price-text-color text-right" }, "$" + toDisplayString(unref(cartStore).totalPrice), 1)
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
                                ]),
                                _: 1
                              }),
                              createVNode(VSheet, null, {
                                default: withCtx(() => [
                                  createVNode(VCard, { class: "my-5" }, {
                                    default: withCtx(() => [
                                      createVNode(VCardItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VSheet, { class: "mb-5" }, {
                                            default: withCtx(() => [
                                              createVNode("h3", null, "Item Summary")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VSheet, null, {
                                            default: withCtx(() => [
                                              unref(cartStore).totalCount == 0 ? (openBlock(), createBlock(VSheet, { key: 0 }, {
                                                default: withCtx(() => [
                                                  createVNode("p", { class: "text-center" }, "No records found")
                                                ]),
                                                _: 1
                                              })) : (openBlock(), createBlock(VVirtualScroll, {
                                                key: 1,
                                                "max-height": "295",
                                                "item-height": "50",
                                                items: unref(cartStore).cartItems
                                              }, {
                                                default: withCtx(({ item }) => [
                                                  createVNode(VListItem, { class: "pa-0 my-5" }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VImg, {
                                                        src: item.thumbnail,
                                                        "lazy-src": _imports_1,
                                                        width: "50",
                                                        height: "50",
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
                                                    append: withCtx(() => [
                                                      createVNode("h5", { class: "price-text-color text-right font-weight-medium" }, "$" + toDisplayString(item.price), 1)
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VSheet, { class: "ms-5" }, {
                                                        default: withCtx(() => [
                                                          createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1),
                                                          createVNode("h5", { class: "font-weight-regular" }, "Quantity: " + toDisplayString(item.quantity), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 1
                                              }, 8, ["items"]))
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
                          md: "7",
                          lg: "7"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, { class: "my-5" }, {
                              default: withCtx(() => [
                                createVNode(VCardItem, { id: "checkout-information" }, {
                                  default: withCtx(() => [
                                    createVNode(VSheet, null, {
                                      default: withCtx(() => [
                                        createVNode("h3", null, "Checkout Information")
                                      ]),
                                      _: 1
                                    }),
                                    unref(checkoutInformation) ? (openBlock(), createBlock(VList, {
                                      key: 0,
                                      lines: "two"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VListItem, {
                                          title: "First Name:",
                                          disabled: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("h4", null, toDisplayString(unref(checkoutInformation).firstName), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VDivider),
                                        createVNode(VDivider),
                                        createVNode(VListItem, {
                                          title: "Email Address:",
                                          disabled: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("h4", null, toDisplayString(unref(checkoutInformation).emailAddress), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCard, { class: "my-5" }, {
                              default: withCtx(() => [
                                createVNode(VCardItem, { id: "payment" }, {
                                  default: withCtx(() => [
                                    createVNode(VSheet, null, {
                                      default: withCtx(() => [
                                        createVNode("h3", null, "Payment")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VSheet, { class: "mt-6" }, {
                                      default: withCtx(() => [
                                        unref(loadingPayPayButton) ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "d-flex align-center justify-center fill-height"
                                        }, [
                                          createVNode(VProgressCircular, {
                                            color: "grey-lighten-4",
                                            indeterminate: ""
                                          })
                                        ])) : createCommentVNode("", true),
                                        createVNode("div", { id: "paypal-button-container" })
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
                        }),
                        createVNode(VCol, {
                          xs: "12",
                          md: "5",
                          lg: "5"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSheet, null, {
                              default: withCtx(() => [
                                createVNode(VCard, { class: "my-5" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VSheet, { class: "mb-5" }, {
                                          default: withCtx(() => [
                                            createVNode("h3", null, "Payment Summary")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { class: "d-flex justify-space-between" }, {
                                              default: withCtx(() => [
                                                createVNode("h4", { class: "font-weight-regular" }, "Number of Item(s)"),
                                                createVNode("p", { class: "font-weight-regular" }, toDisplayString(unref(cartStore).totalCount), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VDivider, { class: "my-5" }),
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { class: "d-flex justify-space-between" }, {
                                              default: withCtx(() => [
                                                createVNode("h4", { class: "font-weight-regular" }, "Total Cost"),
                                                createVNode("h4", { class: "price-text-color text-right" }, "$" + toDisplayString(unref(cartStore).totalPrice), 1)
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
                              ]),
                              _: 1
                            }),
                            createVNode(VSheet, null, {
                              default: withCtx(() => [
                                createVNode(VCard, { class: "my-5" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VSheet, { class: "mb-5" }, {
                                          default: withCtx(() => [
                                            createVNode("h3", null, "Item Summary")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VSheet, null, {
                                          default: withCtx(() => [
                                            unref(cartStore).totalCount == 0 ? (openBlock(), createBlock(VSheet, { key: 0 }, {
                                              default: withCtx(() => [
                                                createVNode("p", { class: "text-center" }, "No records found")
                                              ]),
                                              _: 1
                                            })) : (openBlock(), createBlock(VVirtualScroll, {
                                              key: 1,
                                              "max-height": "295",
                                              "item-height": "50",
                                              items: unref(cartStore).cartItems
                                            }, {
                                              default: withCtx(({ item }) => [
                                                createVNode(VListItem, { class: "pa-0 my-5" }, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VImg, {
                                                      src: item.thumbnail,
                                                      "lazy-src": _imports_1,
                                                      width: "50",
                                                      height: "50",
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
                                                  append: withCtx(() => [
                                                    createVNode("h5", { class: "price-text-color text-right font-weight-medium" }, "$" + toDisplayString(item.price), 1)
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VSheet, { class: "ms-5" }, {
                                                      default: withCtx(() => [
                                                        createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1),
                                                        createVNode("h5", { class: "font-weight-regular" }, "Quantity: " + toDisplayString(item.quantity), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 1
                                            }, 8, ["items"]))
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
              createVNode(VSheet, { class: "d-flex mb-6 align-end justify-space-between" }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    src: _imports_0,
                    "max-height": "100",
                    "max-width": "250",
                    onClick: ($event) => _ctx.$router.push("/"),
                    class: "cursor-pointer"
                  }, null, 8, ["onClick"]),
                  createVNode(VSheet, { class: "d-flex align-center" }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        icon: "mdi-shield-check",
                        color: "grey-lighten-1",
                        size: "40"
                      }),
                      createVNode("h2", { color: "grey-darken-3" }, "Secure Checkout")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VSheet, { class: "mt-5" }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "7",
                        lg: "7"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, { class: "my-5" }, {
                            default: withCtx(() => [
                              createVNode(VCardItem, { id: "checkout-information" }, {
                                default: withCtx(() => [
                                  createVNode(VSheet, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "Checkout Information")
                                    ]),
                                    _: 1
                                  }),
                                  unref(checkoutInformation) ? (openBlock(), createBlock(VList, {
                                    key: 0,
                                    lines: "two"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, {
                                        title: "First Name:",
                                        disabled: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("h4", null, toDisplayString(unref(checkoutInformation).firstName), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider),
                                      createVNode(VDivider),
                                      createVNode(VListItem, {
                                        title: "Email Address:",
                                        disabled: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("h4", null, toDisplayString(unref(checkoutInformation).emailAddress), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCard, { class: "my-5" }, {
                            default: withCtx(() => [
                              createVNode(VCardItem, { id: "payment" }, {
                                default: withCtx(() => [
                                  createVNode(VSheet, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "Payment")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VSheet, { class: "mt-6" }, {
                                    default: withCtx(() => [
                                      unref(loadingPayPayButton) ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "d-flex align-center justify-center fill-height"
                                      }, [
                                        createVNode(VProgressCircular, {
                                          color: "grey-lighten-4",
                                          indeterminate: ""
                                        })
                                      ])) : createCommentVNode("", true),
                                      createVNode("div", { id: "paypal-button-container" })
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
                      }),
                      createVNode(VCol, {
                        xs: "12",
                        md: "5",
                        lg: "5"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSheet, null, {
                            default: withCtx(() => [
                              createVNode(VCard, { class: "my-5" }, {
                                default: withCtx(() => [
                                  createVNode(VCardItem, null, {
                                    default: withCtx(() => [
                                      createVNode(VSheet, { class: "mb-5" }, {
                                        default: withCtx(() => [
                                          createVNode("h3", null, "Payment Summary")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { class: "d-flex justify-space-between" }, {
                                            default: withCtx(() => [
                                              createVNode("h4", { class: "font-weight-regular" }, "Number of Item(s)"),
                                              createVNode("p", { class: "font-weight-regular" }, toDisplayString(unref(cartStore).totalCount), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, { class: "my-5" }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { class: "d-flex justify-space-between" }, {
                                            default: withCtx(() => [
                                              createVNode("h4", { class: "font-weight-regular" }, "Total Cost"),
                                              createVNode("h4", { class: "price-text-color text-right" }, "$" + toDisplayString(unref(cartStore).totalPrice), 1)
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
                            ]),
                            _: 1
                          }),
                          createVNode(VSheet, null, {
                            default: withCtx(() => [
                              createVNode(VCard, { class: "my-5" }, {
                                default: withCtx(() => [
                                  createVNode(VCardItem, null, {
                                    default: withCtx(() => [
                                      createVNode(VSheet, { class: "mb-5" }, {
                                        default: withCtx(() => [
                                          createVNode("h3", null, "Item Summary")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VSheet, null, {
                                        default: withCtx(() => [
                                          unref(cartStore).totalCount == 0 ? (openBlock(), createBlock(VSheet, { key: 0 }, {
                                            default: withCtx(() => [
                                              createVNode("p", { class: "text-center" }, "No records found")
                                            ]),
                                            _: 1
                                          })) : (openBlock(), createBlock(VVirtualScroll, {
                                            key: 1,
                                            "max-height": "295",
                                            "item-height": "50",
                                            items: unref(cartStore).cartItems
                                          }, {
                                            default: withCtx(({ item }) => [
                                              createVNode(VListItem, { class: "pa-0 my-5" }, {
                                                prepend: withCtx(() => [
                                                  createVNode(VImg, {
                                                    src: item.thumbnail,
                                                    "lazy-src": _imports_1,
                                                    width: "50",
                                                    height: "50",
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
                                                append: withCtx(() => [
                                                  createVNode("h5", { class: "price-text-color text-right font-weight-medium" }, "$" + toDisplayString(item.price), 1)
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VSheet, { class: "ms-5" }, {
                                                    default: withCtx(() => [
                                                      createVNode("h5", { class: "mb-1" }, toDisplayString(item.title), 1),
                                                      createVNode("h5", { class: "font-weight-regular" }, "Quantity: " + toDisplayString(item.quantity), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 1
                                          }, 8, ["items"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const checkout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e2b6648"]]);

export { checkout as default };
//# sourceMappingURL=checkout.vue.mjs.map
