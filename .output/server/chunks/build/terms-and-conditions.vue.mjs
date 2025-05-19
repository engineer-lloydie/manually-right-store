import { withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { V as VContainer } from './VContainer.mjs';
import { V as VSheet } from './VSheet.mjs';
import './server.mjs';
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

const _sfc_main = {
  __name: "terms-and-conditions",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VContainer, { "max-width": "700" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-center"${_scopeId}>Terms and Conditions</h2>`);
            _push2(ssrRenderComponent(VSheet, { height: "30" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSheet, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="font-weight-bold"${_scopeId2}>Effective Date: <span${_scopeId2}>April of 2025</span></p>`);
                  _push3(ssrRenderComponent(VSheet, { height: "30" }, null, _parent3, _scopeId2));
                  _push3(`<p${_scopeId2}> By purchasing or downloading any digital product from Manuallyright, you accept the following terms and conditions: </p><ul class="ms-5"${_scopeId2}><li class="mb-2"${_scopeId2}><h4${_scopeId2}>Product Delivery</h4><p${_scopeId2}>All digital products are provided electronically via email or direct download once payment has been received. No physical items will be delivered.</p></li><li class="mb-2"${_scopeId2}><h4${_scopeId2}>Refund Policy</h4><p${_scopeId2}>Since our products are digital, all sales are final. After a product has been downloaded or accessed, we are unable to provide exchanges or refunds.</p></li><li class="mb-2"${_scopeId2}><h4${_scopeId2}>Limitation of Liability</h4><p${_scopeId2}>We are not liable for any damages or issues that arise from the use or inability to use any of our product.</p></li><li class="mb-2"${_scopeId2}><h4${_scopeId2}>Modifications</h4><p${_scopeId2}>We reserve the right to modify these terms at any time. Any changes will be updated on this page.</p></li></ul>`);
                  _push3(ssrRenderComponent(VSheet, { height: "30" }, null, _parent3, _scopeId2));
                  _push3(`<p${_scopeId2}> If you have any questions, please contact us at <a href="mailto:manuallyright@gmail.com"${_scopeId2}>manuallyright@gmail.com</a>. </p>`);
                } else {
                  return [
                    createVNode("p", { class: "font-weight-bold" }, [
                      createTextVNode("Effective Date: "),
                      createVNode("span", null, "April of 2025")
                    ]),
                    createVNode(VSheet, { height: "30" }),
                    createVNode("p", null, " By purchasing or downloading any digital product from Manuallyright, you accept the following terms and conditions: "),
                    createVNode("ul", { class: "ms-5" }, [
                      createVNode("li", { class: "mb-2" }, [
                        createVNode("h4", null, "Product Delivery"),
                        createVNode("p", null, "All digital products are provided electronically via email or direct download once payment has been received. No physical items will be delivered.")
                      ]),
                      createVNode("li", { class: "mb-2" }, [
                        createVNode("h4", null, "Refund Policy"),
                        createVNode("p", null, "Since our products are digital, all sales are final. After a product has been downloaded or accessed, we are unable to provide exchanges or refunds.")
                      ]),
                      createVNode("li", { class: "mb-2" }, [
                        createVNode("h4", null, "Limitation of Liability"),
                        createVNode("p", null, "We are not liable for any damages or issues that arise from the use or inability to use any of our product.")
                      ]),
                      createVNode("li", { class: "mb-2" }, [
                        createVNode("h4", null, "Modifications"),
                        createVNode("p", null, "We reserve the right to modify these terms at any time. Any changes will be updated on this page.")
                      ])
                    ]),
                    createVNode(VSheet, { height: "30" }),
                    createVNode("p", null, [
                      createTextVNode(" If you have any questions, please contact us at "),
                      createVNode("a", { href: "mailto:manuallyright@gmail.com" }, "manuallyright@gmail.com"),
                      createTextVNode(". ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", { class: "text-center" }, "Terms and Conditions"),
              createVNode(VSheet, { height: "30" }),
              createVNode(VSheet, null, {
                default: withCtx(() => [
                  createVNode("p", { class: "font-weight-bold" }, [
                    createTextVNode("Effective Date: "),
                    createVNode("span", null, "April of 2025")
                  ]),
                  createVNode(VSheet, { height: "30" }),
                  createVNode("p", null, " By purchasing or downloading any digital product from Manuallyright, you accept the following terms and conditions: "),
                  createVNode("ul", { class: "ms-5" }, [
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("h4", null, "Product Delivery"),
                      createVNode("p", null, "All digital products are provided electronically via email or direct download once payment has been received. No physical items will be delivered.")
                    ]),
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("h4", null, "Refund Policy"),
                      createVNode("p", null, "Since our products are digital, all sales are final. After a product has been downloaded or accessed, we are unable to provide exchanges or refunds.")
                    ]),
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("h4", null, "Limitation of Liability"),
                      createVNode("p", null, "We are not liable for any damages or issues that arise from the use or inability to use any of our product.")
                    ]),
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("h4", null, "Modifications"),
                      createVNode("p", null, "We reserve the right to modify these terms at any time. Any changes will be updated on this page.")
                    ])
                  ]),
                  createVNode(VSheet, { height: "30" }),
                  createVNode("p", null, [
                    createTextVNode(" If you have any questions, please contact us at "),
                    createVNode("a", { href: "mailto:manuallyright@gmail.com" }, "manuallyright@gmail.com"),
                    createTextVNode(". ")
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/policies/terms-and-conditions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=terms-and-conditions.vue.mjs.map
