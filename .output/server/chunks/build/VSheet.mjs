import { toRef, createVNode } from 'vue';
import { u as useBackgroundColor, e as useBorder, h as useDimension, f as useElevation, j as useLocation, k as usePosition, g as useRounded, m as makeTagProps, a as makeRoundedProps, l as makePositionProps, n as makeLocationProps, b as makeElevationProps, i as makeDimensionProps, c as makeBorderProps } from './position.mjs';
import { g as genericComponent, p as propsFactory, C as provideTheme, j as useRender, D as makeThemeProps, F as makeComponentProps } from './server.mjs';

const makeVSheetProps = propsFactory({
  color: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VSheet");
const VSheet = genericComponent()({
  name: "VSheet",
  props: makeVSheetProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
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
    useRender(() => createVNode(props.tag, {
      "class": ["v-sheet", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, props.class],
      "style": [backgroundColorStyles.value, dimensionStyles.value, locationStyles.value, props.style]
    }, slots));
    return {};
  }
});

export { VSheet as V };
//# sourceMappingURL=VSheet.mjs.map
