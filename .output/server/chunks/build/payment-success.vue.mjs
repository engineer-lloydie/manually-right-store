import { unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as usePaymentStore } from './payment.mjs';
import { n as navigateTo } from './server.mjs';
import { V as VContainer } from './VContainer.mjs';
import { V as VSheet } from './VSheet.mjs';
import { c as VIcon } from './VProgressCircular.mjs';
import { V as VBtn } from './VBtn.mjs';
import { V as VDivider } from './VDivider.mjs';
import 'pinia';
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
import './position.mjs';

const _sfc_main = {
  __name: "payment-success",
  __ssrInlineRender: true,
  setup(__props) {
    const paymentStore = usePaymentStore();
    if (!paymentStore.orderTransactionDetails) {
      navigateTo("/");
    }
    const copyToClipboard = async () => {
      const clipboardText = `Order Number: ${paymentStore.orderTransactionDetails.orderNumber}
    Transaction ID: ${paymentStore.orderTransactionDetails.transactionId}
    Total Amount Paid: $${paymentStore.orderTransactionDetails.totalPrice}`;
      try {
        await (void 0).clipboard.writeText(clipboardText);
        alert("Copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(paymentStore).orderTransactionDetails) {
        _push(ssrRenderComponent(VContainer, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h1 class="text-center mb-10"${_scopeId}>Transaction Was Successful</h1>`);
              _push2(ssrRenderComponent(VSheet, { class: "d-flex justify-center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      size: "100",
                      color: "success"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` mdi-check-circle `);
                        } else {
                          return [
                            createTextVNode(" mdi-check-circle ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, {
                        size: "100",
                        color: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" mdi-check-circle ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VSheet, { class: "d-flex flex-column align-center mt-10" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="my-2"${_scopeId2}>Order Number: ${ssrInterpolate(unref(paymentStore).orderTransactionDetails.orderNumber)}</p><p class="my-2"${_scopeId2}>Transaction ID: ${ssrInterpolate(unref(paymentStore).orderTransactionDetails.transactionId)}</p><p class="my-2"${_scopeId2}>Total Amount Paid: $${ssrInterpolate(unref(paymentStore).orderTransactionDetails.totalPrice)}</p>`);
                    _push3(ssrRenderComponent(VBtn, {
                      color: "primary",
                      onClick: copyToClipboard
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Copy`);
                        } else {
                          return [
                            createTextVNode("Copy")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("p", { class: "my-2" }, "Order Number: " + toDisplayString(unref(paymentStore).orderTransactionDetails.orderNumber), 1),
                      createVNode("p", { class: "my-2" }, "Transaction ID: " + toDisplayString(unref(paymentStore).orderTransactionDetails.transactionId), 1),
                      createVNode("p", { class: "my-2" }, "Total Amount Paid: $" + toDisplayString(unref(paymentStore).orderTransactionDetails.totalPrice), 1),
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: copyToClipboard
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Copy")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VDivider, {
                class: "ma-10",
                inset: ""
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(VSheet, { class: "mb-10" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h2 class="text-center"${_scopeId2}>Thank you for your order. </h2>`);
                  } else {
                    return [
                      createVNode("h2", { class: "text-center" }, "Thank you for your order. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VSheet, { class: "d-flex justify-center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VBtn, {
                      to: "/orders",
                      color: "red-lighten-1"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Go to orders`);
                        } else {
                          return [
                            createTextVNode("Go to orders")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VBtn, {
                        to: "/orders",
                        color: "red-lighten-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Go to orders")
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
                createVNode("h1", { class: "text-center mb-10" }, "Transaction Was Successful"),
                createVNode(VSheet, { class: "d-flex justify-center" }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      size: "100",
                      color: "success"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" mdi-check-circle ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VSheet, { class: "d-flex flex-column align-center mt-10" }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "my-2" }, "Order Number: " + toDisplayString(unref(paymentStore).orderTransactionDetails.orderNumber), 1),
                    createVNode("p", { class: "my-2" }, "Transaction ID: " + toDisplayString(unref(paymentStore).orderTransactionDetails.transactionId), 1),
                    createVNode("p", { class: "my-2" }, "Total Amount Paid: $" + toDisplayString(unref(paymentStore).orderTransactionDetails.totalPrice), 1),
                    createVNode(VBtn, {
                      color: "primary",
                      onClick: copyToClipboard
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Copy")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VDivider, {
                  class: "ma-10",
                  inset: ""
                }),
                createVNode(VSheet, { class: "mb-10" }, {
                  default: withCtx(() => [
                    createVNode("h2", { class: "text-center" }, "Thank you for your order. ")
                  ]),
                  _: 1
                }),
                createVNode(VSheet, { class: "d-flex justify-center" }, {
                  default: withCtx(() => [
                    createVNode(VBtn, {
                      to: "/orders",
                      color: "red-lighten-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Go to orders")
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
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/payment-success.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=payment-success.vue.mjs.map
