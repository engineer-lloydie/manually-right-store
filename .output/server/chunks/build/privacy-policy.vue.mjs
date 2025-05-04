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
  __name: "privacy-policy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VContainer, { "max-width": "700" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-center"${_scopeId}>Privacy Policy</h2>`);
            _push2(ssrRenderComponent(VSheet, { height: "30" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSheet, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="font-weight-bold"${_scopeId2}>Effective Date: <span${_scopeId2}>April of 2025</span></p>`);
                  _push3(ssrRenderComponent(VSheet, { height: "30" }, null, _parent3, _scopeId2));
                  _push3(`<p${_scopeId2}> We at Manuallyright are dedicated to safeguarding your personal data since we respect your privacy. This Privacy Policy describes how we gather, process, and protect your information when you use our products. </p>`);
                  _push3(ssrRenderComponent(VSheet, { height: "30" }, null, _parent3, _scopeId2));
                  _push3(`<h2${_scopeId2}>Information We Collect</h2><p class="mb-2"${_scopeId2}>We may collect the following information:</p><ul class="ms-5"${_scopeId2}><li class="mb-2"${_scopeId2}><h4${_scopeId2}>Personal Information:</h4><p${_scopeId2}>Name, email address, and other contact information may be applicable.</p></li><li class="mb-2"${_scopeId2}><h4${_scopeId2}>Usage Data:</h4><p${_scopeId2}>Details on how you use our products, such as your device type, IP address, and activity inside the product.</p></li></ul>`);
                  _push3(ssrRenderComponent(VSheet, { height: "30" }, null, _parent3, _scopeId2));
                  _push3(`<h2${_scopeId2}>How We Use Your Information?</h2><p class="mb-2"${_scopeId2}>We use your personal information to:</p><ul class="ms-5"${_scopeId2}><li class="mb-2"${_scopeId2}><p${_scopeId2}>Provide and enhance our Products.</p></li><li class="mb-2"${_scopeId2}><p${_scopeId2}>Communicate with you about updates, support, and promotions. </p></li><li class="mb-2"${_scopeId2}><p${_scopeId2}>Analyze product usage to improve the user experience.</p></li></ul>`);
                  _push3(ssrRenderComponent(VSheet, { height: "30" }, null, _parent3, _scopeId2));
                  _push3(`<h2${_scopeId2}>Data Sharing</h2><p class="mb-2"${_scopeId2}> We do not share your personal information with third parties except when required by law or as necessary to provide services related to our products. </p>`);
                  _push3(ssrRenderComponent(VSheet, { height: "30" }, null, _parent3, _scopeId2));
                  _push3(`<h2${_scopeId2}>Security</h2><p class="mb-2"${_scopeId2}> We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. </p>`);
                  _push3(ssrRenderComponent(VSheet, { height: "30" }, null, _parent3, _scopeId2));
                  _push3(`<h2${_scopeId2}>Your Rights</h2><p class="mb-2"${_scopeId2}>You&#39;ve got the rights to:</p><ul class="ms-5"${_scopeId2}><li class="mb-2"${_scopeId2}><p${_scopeId2}>Access upgrade, or delete your personal data.</p></li><li class="mb-2"${_scopeId2}><p${_scopeId2}>Pick out of promoting communications.</p></li><li class="mb-2"${_scopeId2}><p${_scopeId2}>Protest to or confine the processing of your information in certain circumstances.</p></li></ul>`);
                  _push3(ssrRenderComponent(VSheet, { height: "30" }, null, _parent3, _scopeId2));
                  _push3(`<h2${_scopeId2}>Changes to This Policy</h2><p class="mb-2"${_scopeId2}> We may update this Privacy Policy from time to time. When changes are made, we will update the &quot;Effective Date&quot; at the top of this policy. We encourage you to review this policy periodically. </p>`);
                  _push3(ssrRenderComponent(VSheet, { height: "30" }, null, _parent3, _scopeId2));
                  _push3(`<h2${_scopeId2}>Contact Us</h2><p class="mb-2"${_scopeId2}> If you have any questions about this Privacy Policy or our practices, please contact us at (we will use different email for inquiry or questions). By using our products, you consent to the collection and use of your information as described in this policy. </p>`);
                } else {
                  return [
                    createVNode("p", { class: "font-weight-bold" }, [
                      createTextVNode("Effective Date: "),
                      createVNode("span", null, "April of 2025")
                    ]),
                    createVNode(VSheet, { height: "30" }),
                    createVNode("p", null, " We at Manuallyright are dedicated to safeguarding your personal data since we respect your privacy. This Privacy Policy describes how we gather, process, and protect your information when you use our products. "),
                    createVNode(VSheet, { height: "30" }),
                    createVNode("h2", null, "Information We Collect"),
                    createVNode("p", { class: "mb-2" }, "We may collect the following information:"),
                    createVNode("ul", { class: "ms-5" }, [
                      createVNode("li", { class: "mb-2" }, [
                        createVNode("h4", null, "Personal Information:"),
                        createVNode("p", null, "Name, email address, and other contact information may be applicable.")
                      ]),
                      createVNode("li", { class: "mb-2" }, [
                        createVNode("h4", null, "Usage Data:"),
                        createVNode("p", null, "Details on how you use our products, such as your device type, IP address, and activity inside the product.")
                      ])
                    ]),
                    createVNode(VSheet, { height: "30" }),
                    createVNode("h2", null, "How We Use Your Information?"),
                    createVNode("p", { class: "mb-2" }, "We use your personal information to:"),
                    createVNode("ul", { class: "ms-5" }, [
                      createVNode("li", { class: "mb-2" }, [
                        createVNode("p", null, "Provide and enhance our Products.")
                      ]),
                      createVNode("li", { class: "mb-2" }, [
                        createVNode("p", null, "Communicate with you about updates, support, and promotions. ")
                      ]),
                      createVNode("li", { class: "mb-2" }, [
                        createVNode("p", null, "Analyze product usage to improve the user experience.")
                      ])
                    ]),
                    createVNode(VSheet, { height: "30" }),
                    createVNode("h2", null, "Data Sharing"),
                    createVNode("p", { class: "mb-2" }, " We do not share your personal information with third parties except when required by law or as necessary to provide services related to our products. "),
                    createVNode(VSheet, { height: "30" }),
                    createVNode("h2", null, "Security"),
                    createVNode("p", { class: "mb-2" }, " We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. "),
                    createVNode(VSheet, { height: "30" }),
                    createVNode("h2", null, "Your Rights"),
                    createVNode("p", { class: "mb-2" }, "You've got the rights to:"),
                    createVNode("ul", { class: "ms-5" }, [
                      createVNode("li", { class: "mb-2" }, [
                        createVNode("p", null, "Access upgrade, or delete your personal data.")
                      ]),
                      createVNode("li", { class: "mb-2" }, [
                        createVNode("p", null, "Pick out of promoting communications.")
                      ]),
                      createVNode("li", { class: "mb-2" }, [
                        createVNode("p", null, "Protest to or confine the processing of your information in certain circumstances.")
                      ])
                    ]),
                    createVNode(VSheet, { height: "30" }),
                    createVNode("h2", null, "Changes to This Policy"),
                    createVNode("p", { class: "mb-2" }, ' We may update this Privacy Policy from time to time. When changes are made, we will update the "Effective Date" at the top of this policy. We encourage you to review this policy periodically. '),
                    createVNode(VSheet, { height: "30" }),
                    createVNode("h2", null, "Contact Us"),
                    createVNode("p", { class: "mb-2" }, " If you have any questions about this Privacy Policy or our practices, please contact us at (we will use different email for inquiry or questions). By using our products, you consent to the collection and use of your information as described in this policy. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", { class: "text-center" }, "Privacy Policy"),
              createVNode(VSheet, { height: "30" }),
              createVNode(VSheet, null, {
                default: withCtx(() => [
                  createVNode("p", { class: "font-weight-bold" }, [
                    createTextVNode("Effective Date: "),
                    createVNode("span", null, "April of 2025")
                  ]),
                  createVNode(VSheet, { height: "30" }),
                  createVNode("p", null, " We at Manuallyright are dedicated to safeguarding your personal data since we respect your privacy. This Privacy Policy describes how we gather, process, and protect your information when you use our products. "),
                  createVNode(VSheet, { height: "30" }),
                  createVNode("h2", null, "Information We Collect"),
                  createVNode("p", { class: "mb-2" }, "We may collect the following information:"),
                  createVNode("ul", { class: "ms-5" }, [
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("h4", null, "Personal Information:"),
                      createVNode("p", null, "Name, email address, and other contact information may be applicable.")
                    ]),
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("h4", null, "Usage Data:"),
                      createVNode("p", null, "Details on how you use our products, such as your device type, IP address, and activity inside the product.")
                    ])
                  ]),
                  createVNode(VSheet, { height: "30" }),
                  createVNode("h2", null, "How We Use Your Information?"),
                  createVNode("p", { class: "mb-2" }, "We use your personal information to:"),
                  createVNode("ul", { class: "ms-5" }, [
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("p", null, "Provide and enhance our Products.")
                    ]),
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("p", null, "Communicate with you about updates, support, and promotions. ")
                    ]),
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("p", null, "Analyze product usage to improve the user experience.")
                    ])
                  ]),
                  createVNode(VSheet, { height: "30" }),
                  createVNode("h2", null, "Data Sharing"),
                  createVNode("p", { class: "mb-2" }, " We do not share your personal information with third parties except when required by law or as necessary to provide services related to our products. "),
                  createVNode(VSheet, { height: "30" }),
                  createVNode("h2", null, "Security"),
                  createVNode("p", { class: "mb-2" }, " We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. "),
                  createVNode(VSheet, { height: "30" }),
                  createVNode("h2", null, "Your Rights"),
                  createVNode("p", { class: "mb-2" }, "You've got the rights to:"),
                  createVNode("ul", { class: "ms-5" }, [
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("p", null, "Access upgrade, or delete your personal data.")
                    ]),
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("p", null, "Pick out of promoting communications.")
                    ]),
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("p", null, "Protest to or confine the processing of your information in certain circumstances.")
                    ])
                  ]),
                  createVNode(VSheet, { height: "30" }),
                  createVNode("h2", null, "Changes to This Policy"),
                  createVNode("p", { class: "mb-2" }, ' We may update this Privacy Policy from time to time. When changes are made, we will update the "Effective Date" at the top of this policy. We encourage you to review this policy periodically. '),
                  createVNode(VSheet, { height: "30" }),
                  createVNode("h2", null, "Contact Us"),
                  createVNode("p", { class: "mb-2" }, " If you have any questions about this Privacy Policy or our practices, please contact us at (we will use different email for inquiry or questions). By using our products, you consent to the collection and use of your information as described in this policy. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/policies/privacy-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=privacy-policy.vue.mjs.map
