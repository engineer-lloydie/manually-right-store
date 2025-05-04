import { ref, toRef, shallowRef, computed, createVNode, watchEffect, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useBackgroundColor, e as useBorder, f as useElevation, g as useRounded, m as makeTagProps, a as makeRoundedProps, b as makeElevationProps, c as makeBorderProps } from './position.mjs';
import { g as genericComponent, p as propsFactory, C as provideTheme, R as useResizeObserver, Z as useToggleScope, j as useRender, k as convertToUnit, D as makeThemeProps, a9 as makeLayoutItemProps, F as makeComponentProps, aa as useLayoutItem } from './server.mjs';
import { V as VRow, a as VCol } from './VCol.mjs';
import { V as VBtn } from './VBtn.mjs';
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
import './VProgressCircular.mjs';

const makeVFooterProps = propsFactory({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "footer"
  }),
  ...makeThemeProps()
}, "VFooter");
const VFooter = genericComponent()({
  name: "VFooter",
  props: makeVFooterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const layoutItemStyles = ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const autoHeight = shallowRef(32);
    const {
      resizeRef
    } = useResizeObserver();
    const height = computed(() => props.height === "auto" ? autoHeight.value : parseInt(props.height, 10));
    useToggleScope(() => props.app, () => {
      const layout = useLayoutItem({
        id: props.name,
        order: computed(() => parseInt(props.order, 10)),
        position: computed(() => "bottom"),
        layoutSize: height,
        elementSize: computed(() => props.height === "auto" ? void 0 : height.value),
        active: computed(() => props.app),
        absolute: toRef(props, "absolute")
      });
      watchEffect(() => {
        layoutItemStyles.value = layout.layoutItemStyles.value;
      });
    });
    useRender(() => createVNode(props.tag, {
      "ref": resizeRef,
      "class": ["v-footer", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, props.class],
      "style": [backgroundColorStyles.value, props.app ? layoutItemStyles.value : {
        height: convertToUnit(props.height)
      }, props.style]
    }, slots));
    return {};
  }
});

const _sfc_main = {
  __name: "footer-menu",
  __ssrInlineRender: true,
  setup(__props) {
    ref([
      "mdi-facebook",
      "mdi-twitter",
      "mdi-linkedin",
      "mdi-instagram"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VFooter, mergeProps({ class: "bg-grey-lighten-3 text-center d-flex justify-space-around" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6",
                    lg: "8",
                    xl: "9"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` @${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} — <strong${_scopeId3}>Manuallyright</strong>`);
                      } else {
                        return [
                          createTextVNode(" @" + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " — ", 1),
                          createVNode("strong", null, "Manuallyright")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6",
                    lg: "4",
                    xl: "3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex justify-space-around flex-wrap"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, {
                          density: "comfortable",
                          class: "text-none",
                          to: "/policies/terms-and-conditions",
                          "active-color": "red-lighten-1",
                          variant: "text",
                          ripple: false,
                          flat: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Terms and Conditions `);
                            } else {
                              return [
                                createTextVNode(" Terms and Conditions ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          density: "comfortable",
                          class: "text-none",
                          to: "/policies/privacy-policy",
                          "active-color": "red-lighten-1",
                          variant: "text",
                          ripple: false,
                          flat: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Privacy Policy `);
                            } else {
                              return [
                                createTextVNode(" Privacy Policy ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex justify-space-around flex-wrap" }, [
                            createVNode(VBtn, {
                              density: "comfortable",
                              class: "text-none",
                              to: "/policies/terms-and-conditions",
                              "active-color": "red-lighten-1",
                              variant: "text",
                              ripple: false,
                              flat: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Terms and Conditions ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              density: "comfortable",
                              class: "text-none",
                              to: "/policies/privacy-policy",
                              "active-color": "red-lighten-1",
                              variant: "text",
                              ripple: false,
                              flat: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Privacy Policy ")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "6",
                      lg: "8",
                      xl: "9"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" @" + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " — ", 1),
                        createVNode("strong", null, "Manuallyright")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6",
                      lg: "4",
                      xl: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex justify-space-around flex-wrap" }, [
                          createVNode(VBtn, {
                            density: "comfortable",
                            class: "text-none",
                            to: "/policies/terms-and-conditions",
                            "active-color": "red-lighten-1",
                            variant: "text",
                            ripple: false,
                            flat: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Terms and Conditions ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            density: "comfortable",
                            class: "text-none",
                            to: "/policies/privacy-policy",
                            "active-color": "red-lighten-1",
                            variant: "text",
                            ripple: false,
                            flat: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Privacy Policy ")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "6",
                    lg: "8",
                    xl: "9"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" @" + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " — ", 1),
                      createVNode("strong", null, "Manuallyright")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6",
                    lg: "4",
                    xl: "3"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex justify-space-around flex-wrap" }, [
                        createVNode(VBtn, {
                          density: "comfortable",
                          class: "text-none",
                          to: "/policies/terms-and-conditions",
                          "active-color": "red-lighten-1",
                          variant: "text",
                          ripple: false,
                          flat: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Terms and Conditions ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          density: "comfortable",
                          class: "text-none",
                          to: "/policies/privacy-policy",
                          "active-color": "red-lighten-1",
                          variant: "text",
                          ripple: false,
                          flat: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Privacy Policy ")
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
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/footer-menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=footer-menu.vue.mjs.map
