import { computed, watch, provide, inject, createVNode, mergeProps, ref, watchEffect, capitalize, toRef, Fragment, createTextVNode, withModifiers, toDisplayString, shallowRef, unref, toRefs, withCtx, createBlock, openBlock, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useOrderStore } from './order.mjs';
import { storeToRefs } from 'pinia';
import { p as propsFactory, h as useProxiedModel, o as clamp, q as getCurrentInstance, I as IconValue, g as genericComponent, i as useLocale, j as useRender, s as defineFunctionalComponent, k as convertToUnit, t as consoleError, w as wrapInArray, v as deepEqual, x as getObjectValueByPath, y as isEmpty, z as makeDisplayProps, A as useDisplay, E as EventProp, B as isOn, C as provideTheme, D as makeThemeProps, F as makeComponentProps, G as getPropertyFromItem, H as provideDefaults, J as getUid, K as omit, m as useSanctumAuth, L as useBaseFetch } from './server.mjs';
import { a as VCard, b as VCardTitle, d as VCardText } from './VCard.mjs';
import { V as VPagination } from './VPagination.mjs';
import { V as VSelect, a as VChip, b as VCheckboxBtn } from './VSelect.mjs';
import { u as useBackgroundColor, m as makeTagProps } from './position.mjs';
import { m as makeLoaderProps, u as useLoader, L as LoaderSlot, c as VIcon, d as useDensity, e as makeDensityProps } from './VProgressCircular.mjs';
import { V as VBtn } from './VBtn.mjs';
import { V as VDivider } from './VDivider.mjs';
import { u as useScopeId, f as forwardRefs, m as makeVOverlayProps, V as VOverlay } from './VOverlay.mjs';
import { V as VMenu } from './VMenu.mjs';
import { V as VList, a as VListItem, b as VListItemTitle } from './VList.mjs';
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
import './VVirtualScroll.mjs';
import './index.mjs';
import './VSlideGroup.mjs';
import './lazy.mjs';
import './ssrBoot.mjs';

const makeDataTablePaginateProps = propsFactory({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate");
const VDataTablePaginationSymbol = Symbol.for("vuetify:data-table-pagination");
function createPagination(props) {
  const page = useProxiedModel(props, "page", void 0, (value) => Number(value ?? 1));
  const itemsPerPage = useProxiedModel(props, "itemsPerPage", void 0, (value) => Number(value ?? 10));
  return {
    page,
    itemsPerPage
  };
}
function providePagination(options) {
  const {
    page,
    itemsPerPage,
    itemsLength
  } = options;
  const startIndex = computed(() => {
    if (itemsPerPage.value === -1) return 0;
    return itemsPerPage.value * (page.value - 1);
  });
  const stopIndex = computed(() => {
    if (itemsPerPage.value === -1) return itemsLength.value;
    return Math.min(itemsLength.value, startIndex.value + itemsPerPage.value);
  });
  const pageCount = computed(() => {
    if (itemsPerPage.value === -1 || itemsLength.value === 0) return 1;
    return Math.ceil(itemsLength.value / itemsPerPage.value);
  });
  watch([page, pageCount], () => {
    if (page.value > pageCount.value) {
      page.value = pageCount.value;
    }
  });
  function setItemsPerPage(value) {
    itemsPerPage.value = value;
    page.value = 1;
  }
  function nextPage() {
    page.value = clamp(page.value + 1, 1, pageCount.value);
  }
  function prevPage() {
    page.value = clamp(page.value - 1, 1, pageCount.value);
  }
  function setPage(value) {
    page.value = clamp(value, 1, pageCount.value);
  }
  const data = {
    page,
    itemsPerPage,
    startIndex,
    stopIndex,
    pageCount,
    itemsLength,
    nextPage,
    prevPage,
    setPage,
    setItemsPerPage
  };
  provide(VDataTablePaginationSymbol, data);
  return data;
}
function usePagination() {
  const data = inject(VDataTablePaginationSymbol);
  if (!data) throw new Error("Missing pagination!");
  return data;
}
function usePaginatedItems(options) {
  const vm = getCurrentInstance("usePaginatedItems");
  const {
    items,
    startIndex,
    stopIndex,
    itemsPerPage
  } = options;
  const paginatedItems = computed(() => {
    if (itemsPerPage.value <= 0) return items.value;
    return items.value.slice(startIndex.value, stopIndex.value);
  });
  watch(paginatedItems, (val) => {
    vm.emit("update:currentItems", val);
  }, {
    immediate: true
  });
  return {
    paginatedItems
  };
}

const makeVDataTableFooterProps = propsFactory({
  prevIcon: {
    type: IconValue,
    default: "$prev"
  },
  nextIcon: {
    type: IconValue,
    default: "$next"
  },
  firstIcon: {
    type: IconValue,
    default: "$first"
  },
  lastIcon: {
    type: IconValue,
    default: "$last"
  },
  itemsPerPageText: {
    type: String,
    default: "$vuetify.dataFooter.itemsPerPageText"
  },
  pageText: {
    type: String,
    default: "$vuetify.dataFooter.pageText"
  },
  firstPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.firstPage"
  },
  prevPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.prevPage"
  },
  nextPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.nextPage"
  },
  lastPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.lastPage"
  },
  itemsPerPageOptions: {
    type: Array,
    default: () => [{
      value: 10,
      title: "10"
    }, {
      value: 25,
      title: "25"
    }, {
      value: 50,
      title: "50"
    }, {
      value: 100,
      title: "100"
    }, {
      value: -1,
      title: "$vuetify.dataFooter.itemsPerPageAll"
    }]
  },
  showCurrentPage: Boolean
}, "VDataTableFooter");
const VDataTableFooter = genericComponent()({
  name: "VDataTableFooter",
  props: makeVDataTableFooterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      page,
      pageCount,
      startIndex,
      stopIndex,
      itemsLength,
      itemsPerPage,
      setItemsPerPage
    } = usePagination();
    const itemsPerPageOptions = computed(() => props.itemsPerPageOptions.map((option) => {
      if (typeof option === "number") {
        return {
          value: option,
          title: option === -1 ? t("$vuetify.dataFooter.itemsPerPageAll") : String(option)
        };
      }
      return {
        ...option,
        title: !isNaN(Number(option.title)) ? option.title : t(option.title)
      };
    }));
    useRender(() => {
      var _a;
      const paginationProps = VPagination.filterProps(props);
      return createVNode("div", {
        "class": "v-data-table-footer"
      }, [(_a = slots.prepend) == null ? void 0 : _a.call(slots), createVNode("div", {
        "class": "v-data-table-footer__items-per-page"
      }, [createVNode("span", null, [t(props.itemsPerPageText)]), createVNode(VSelect, {
        "items": itemsPerPageOptions.value,
        "modelValue": itemsPerPage.value,
        "onUpdate:modelValue": (v) => setItemsPerPage(Number(v)),
        "density": "compact",
        "variant": "outlined",
        "hide-details": true
      }, null)]), createVNode("div", {
        "class": "v-data-table-footer__info"
      }, [createVNode("div", null, [t(props.pageText, !itemsLength.value ? 0 : startIndex.value + 1, stopIndex.value, itemsLength.value)])]), createVNode("div", {
        "class": "v-data-table-footer__pagination"
      }, [createVNode(VPagination, mergeProps({
        "modelValue": page.value,
        "onUpdate:modelValue": ($event) => page.value = $event,
        "density": "comfortable",
        "first-aria-label": props.firstPageLabel,
        "last-aria-label": props.lastPageLabel,
        "length": pageCount.value,
        "next-aria-label": props.nextPageLabel,
        "previous-aria-label": props.prevPageLabel,
        "rounded": true,
        "show-first-last-page": true,
        "total-visible": props.showCurrentPage ? 1 : 0,
        "variant": "plain"
      }, paginationProps), null)])]);
    });
    return {};
  }
});

const VDataTableColumn = defineFunctionalComponent({
  align: {
    type: String,
    default: "start"
  },
  fixed: Boolean,
  fixedOffset: [Number, String],
  height: [Number, String],
  lastFixed: Boolean,
  noPadding: Boolean,
  tag: String,
  width: [Number, String],
  maxWidth: [Number, String],
  nowrap: Boolean
}, (props, _ref) => {
  let {
    slots
  } = _ref;
  const Tag = props.tag ?? "td";
  return createVNode(Tag, {
    "class": ["v-data-table__td", {
      "v-data-table-column--fixed": props.fixed,
      "v-data-table-column--last-fixed": props.lastFixed,
      "v-data-table-column--no-padding": props.noPadding,
      "v-data-table-column--nowrap": props.nowrap
    }, `v-data-table-column--align-${props.align}`],
    "style": {
      height: convertToUnit(props.height),
      width: convertToUnit(props.width),
      maxWidth: convertToUnit(props.maxWidth),
      left: convertToUnit(props.fixedOffset || null)
    }
  }, {
    default: () => {
      var _a;
      return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
    }
  });
});

const makeDataTableHeaderProps = propsFactory({
  headers: Array
}, "DataTable-header");
const VDataTableHeadersSymbol = Symbol.for("vuetify:data-table-headers");
const defaultHeader = {
  title: "",
  sortable: false
};
const defaultActionHeader = {
  ...defaultHeader,
  width: 48
};
function priorityQueue() {
  let arr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const queue = arr.map((element) => ({
    element,
    priority: 0
  }));
  return {
    enqueue: (element, priority) => {
      let added = false;
      for (let i = 0; i < queue.length; i++) {
        const item = queue[i];
        if (item.priority > priority) {
          queue.splice(i, 0, {
            element,
            priority
          });
          added = true;
          break;
        }
      }
      if (!added) queue.push({
        element,
        priority
      });
    },
    size: () => queue.length,
    count: () => {
      let count = 0;
      if (!queue.length) return 0;
      const whole = Math.floor(queue[0].priority);
      for (let i = 0; i < queue.length; i++) {
        if (Math.floor(queue[i].priority) === whole) count += 1;
      }
      return count;
    },
    dequeue: () => {
      return queue.shift();
    }
  };
}
function extractLeaves(item) {
  let columns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!item.children) {
    columns.push(item);
  } else {
    for (const child of item.children) {
      extractLeaves(child, columns);
    }
  }
  return columns;
}
function extractKeys(headers) {
  let keys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const item of headers) {
    if (item.key) keys.add(item.key);
    if (item.children) {
      extractKeys(item.children, keys);
    }
  }
  return keys;
}
function getDefaultItem(item) {
  if (!item.key) return void 0;
  if (item.key === "data-table-group") return defaultHeader;
  if (["data-table-expand", "data-table-select"].includes(item.key)) return defaultActionHeader;
  return void 0;
}
function getDepth(item) {
  let depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!item.children) return depth;
  return Math.max(depth, ...item.children.map((child) => getDepth(child, depth + 1)));
}
function parseFixedColumns(items) {
  let seenFixed = false;
  function setFixed(item) {
    let parentFixed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (!item) return;
    if (parentFixed) {
      item.fixed = true;
    }
    if (item.fixed) {
      if (item.children) {
        for (let i = item.children.length - 1; i >= 0; i--) {
          setFixed(item.children[i], true);
        }
      } else {
        if (!seenFixed) {
          item.lastFixed = true;
        } else if (isNaN(Number(item.width))) {
          consoleError(`Multiple fixed columns should have a static width (key: ${item.key})`);
        } else {
          item.minWidth = Math.max(Number(item.width) || 0, Number(item.minWidth) || 0);
        }
        seenFixed = true;
      }
    } else {
      if (item.children) {
        for (let i = item.children.length - 1; i >= 0; i--) {
          setFixed(item.children[i]);
        }
      } else {
        seenFixed = false;
      }
    }
  }
  for (let i = items.length - 1; i >= 0; i--) {
    setFixed(items[i]);
  }
  function setFixedOffset(item) {
    let fixedOffset2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (!item) return fixedOffset2;
    if (item.children) {
      item.fixedOffset = fixedOffset2;
      for (const child of item.children) {
        fixedOffset2 = setFixedOffset(child, fixedOffset2);
      }
    } else if (item.fixed) {
      item.fixedOffset = fixedOffset2;
      fixedOffset2 += parseFloat(item.width || "0") || 0;
    }
    return fixedOffset2;
  }
  let fixedOffset = 0;
  for (const item of items) {
    fixedOffset = setFixedOffset(item, fixedOffset);
  }
}
function parse(items, maxDepth) {
  const headers = [];
  let currentDepth = 0;
  const queue = priorityQueue(items);
  while (queue.size() > 0) {
    let rowSize = queue.count();
    const row = [];
    let fraction = 1;
    while (rowSize > 0) {
      const {
        element: item,
        priority
      } = queue.dequeue();
      const diff = maxDepth - currentDepth - getDepth(item);
      row.push({
        ...item,
        rowspan: diff ?? 1,
        colspan: item.children ? extractLeaves(item).length : 1
      });
      if (item.children) {
        for (const child of item.children) {
          const sort = priority % 1 + fraction / Math.pow(10, currentDepth + 2);
          queue.enqueue(child, currentDepth + diff + sort);
        }
      }
      fraction += 1;
      rowSize -= 1;
    }
    currentDepth += 1;
    headers.push(row);
  }
  const columns = items.map((item) => extractLeaves(item)).flat();
  return {
    columns,
    headers
  };
}
function convertToInternalHeaders(items) {
  const internalHeaders = [];
  for (const item of items) {
    const defaultItem = {
      ...getDefaultItem(item),
      ...item
    };
    const key = defaultItem.key ?? (typeof defaultItem.value === "string" ? defaultItem.value : null);
    const value = defaultItem.value ?? key ?? null;
    const internalItem = {
      ...defaultItem,
      key,
      value,
      sortable: defaultItem.sortable ?? (defaultItem.key != null || !!defaultItem.sort),
      children: defaultItem.children ? convertToInternalHeaders(defaultItem.children) : void 0
    };
    internalHeaders.push(internalItem);
  }
  return internalHeaders;
}
function createHeaders(props, options) {
  const headers = ref([]);
  const columns = ref([]);
  const sortFunctions = ref({});
  const sortRawFunctions = ref({});
  const filterFunctions = ref({});
  watchEffect(() => {
    var _a, _b, _c;
    const _headers = props.headers || Object.keys(props.items[0] ?? {}).map((key) => ({
      key,
      title: capitalize(key)
    }));
    const items = _headers.slice();
    const keys = extractKeys(items);
    if (((_a = options == null ? void 0 : options.groupBy) == null ? void 0 : _a.value.length) && !keys.has("data-table-group")) {
      items.unshift({
        key: "data-table-group",
        title: "Group"
      });
    }
    if (((_b = options == null ? void 0 : options.showSelect) == null ? void 0 : _b.value) && !keys.has("data-table-select")) {
      items.unshift({
        key: "data-table-select"
      });
    }
    if (((_c = options == null ? void 0 : options.showExpand) == null ? void 0 : _c.value) && !keys.has("data-table-expand")) {
      items.push({
        key: "data-table-expand"
      });
    }
    const internalHeaders = convertToInternalHeaders(items);
    parseFixedColumns(internalHeaders);
    const maxDepth = Math.max(...internalHeaders.map((item) => getDepth(item))) + 1;
    const parsed = parse(internalHeaders, maxDepth);
    headers.value = parsed.headers;
    columns.value = parsed.columns;
    const flatHeaders = parsed.headers.flat(1);
    for (const header of flatHeaders) {
      if (!header.key) continue;
      if (header.sortable) {
        if (header.sort) {
          sortFunctions.value[header.key] = header.sort;
        }
        if (header.sortRaw) {
          sortRawFunctions.value[header.key] = header.sortRaw;
        }
      }
      if (header.filter) {
        filterFunctions.value[header.key] = header.filter;
      }
    }
  });
  const data = {
    headers,
    columns,
    sortFunctions,
    sortRawFunctions,
    filterFunctions
  };
  provide(VDataTableHeadersSymbol, data);
  return data;
}
function useHeaders() {
  const data = inject(VDataTableHeadersSymbol);
  if (!data) throw new Error("Missing headers!");
  return data;
}

const singleSelectStrategy = {
  showSelectAll: false,
  allSelected: () => [],
  select: (_ref) => {
    var _a;
    let {
      items,
      value
    } = _ref;
    return new Set(value ? [(_a = items[0]) == null ? void 0 : _a.value] : []);
  },
  selectAll: (_ref2) => {
    let {
      selected
    } = _ref2;
    return selected;
  }
};
const pageSelectStrategy = {
  showSelectAll: true,
  allSelected: (_ref3) => {
    let {
      currentPage
    } = _ref3;
    return currentPage;
  },
  select: (_ref4) => {
    let {
      items,
      value,
      selected
    } = _ref4;
    for (const item of items) {
      if (value) selected.add(item.value);
      else selected.delete(item.value);
    }
    return selected;
  },
  selectAll: (_ref5) => {
    let {
      value,
      currentPage,
      selected
    } = _ref5;
    return pageSelectStrategy.select({
      items: currentPage,
      value,
      selected
    });
  }
};
const allSelectStrategy = {
  showSelectAll: true,
  allSelected: (_ref6) => {
    let {
      allItems
    } = _ref6;
    return allItems;
  },
  select: (_ref7) => {
    let {
      items,
      value,
      selected
    } = _ref7;
    for (const item of items) {
      if (value) selected.add(item.value);
      else selected.delete(item.value);
    }
    return selected;
  },
  selectAll: (_ref8) => {
    let {
      value,
      allItems,
      selected
    } = _ref8;
    return allSelectStrategy.select({
      items: allItems,
      value,
      selected
    });
  }
};
const makeDataTableSelectProps = propsFactory({
  showSelect: Boolean,
  selectStrategy: {
    type: [String, Object],
    default: "page"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  valueComparator: {
    type: Function,
    default: deepEqual
  }
}, "DataTable-select");
const VDataTableSelectionSymbol = Symbol.for("vuetify:data-table-selection");
function provideSelection(props, _ref9) {
  let {
    allItems,
    currentPage
  } = _ref9;
  const selected = useProxiedModel(props, "modelValue", props.modelValue, (v) => {
    return new Set(wrapInArray(v).map((v2) => {
      var _a;
      return ((_a = allItems.value.find((item) => props.valueComparator(v2, item.value))) == null ? void 0 : _a.value) ?? v2;
    }));
  }, (v) => {
    return [...v.values()];
  });
  const allSelectable = computed(() => allItems.value.filter((item) => item.selectable));
  const currentPageSelectable = computed(() => currentPage.value.filter((item) => item.selectable));
  const selectStrategy = computed(() => {
    if (typeof props.selectStrategy === "object") return props.selectStrategy;
    switch (props.selectStrategy) {
      case "single":
        return singleSelectStrategy;
      case "all":
        return allSelectStrategy;
      case "page":
      default:
        return pageSelectStrategy;
    }
  });
  function isSelected(items) {
    return wrapInArray(items).every((item) => selected.value.has(item.value));
  }
  function isSomeSelected(items) {
    return wrapInArray(items).some((item) => selected.value.has(item.value));
  }
  function select(items, value) {
    const newSelected = selectStrategy.value.select({
      items,
      value,
      selected: new Set(selected.value)
    });
    selected.value = newSelected;
  }
  function toggleSelect(item) {
    select([item], !isSelected([item]));
  }
  function selectAll(value) {
    const newSelected = selectStrategy.value.selectAll({
      value,
      allItems: allSelectable.value,
      currentPage: currentPageSelectable.value,
      selected: new Set(selected.value)
    });
    selected.value = newSelected;
  }
  const someSelected = computed(() => selected.value.size > 0);
  const allSelected = computed(() => {
    const items = selectStrategy.value.allSelected({
      allItems: allSelectable.value,
      currentPage: currentPageSelectable.value
    });
    return !!items.length && isSelected(items);
  });
  const showSelectAll = computed(() => selectStrategy.value.showSelectAll);
  const data = {
    toggleSelect,
    select,
    selectAll,
    isSelected,
    isSomeSelected,
    someSelected,
    allSelected,
    showSelectAll
  };
  provide(VDataTableSelectionSymbol, data);
  return data;
}
function useSelection() {
  const data = inject(VDataTableSelectionSymbol);
  if (!data) throw new Error("Missing selection!");
  return data;
}

const makeDataTableSortProps = propsFactory({
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: Boolean,
  mustSort: Boolean
}, "DataTable-sort");
const VDataTableSortSymbol = Symbol.for("vuetify:data-table-sort");
function createSort(props) {
  const sortBy = useProxiedModel(props, "sortBy");
  const mustSort = toRef(props, "mustSort");
  const multiSort = toRef(props, "multiSort");
  return {
    sortBy,
    mustSort,
    multiSort
  };
}
function provideSort(options) {
  const {
    sortBy,
    mustSort,
    multiSort,
    page
  } = options;
  const toggleSort = (column) => {
    if (column.key == null) return;
    let newSortBy = sortBy.value.map((x) => ({
      ...x
    })) ?? [];
    const item = newSortBy.find((x) => x.key === column.key);
    if (!item) {
      if (multiSort.value) {
        newSortBy.push({
          key: column.key,
          order: "asc"
        });
      } else {
        newSortBy = [{
          key: column.key,
          order: "asc"
        }];
      }
    } else if (item.order === "desc") {
      if (mustSort.value && newSortBy.length === 1) {
        item.order = "asc";
      } else {
        newSortBy = newSortBy.filter((x) => x.key !== column.key);
      }
    } else {
      item.order = "desc";
    }
    sortBy.value = newSortBy;
    if (page) page.value = 1;
  };
  function isSorted(column) {
    return !!sortBy.value.find((item) => item.key === column.key);
  }
  const data = {
    sortBy,
    toggleSort,
    isSorted
  };
  provide(VDataTableSortSymbol, data);
  return data;
}
function useSort() {
  const data = inject(VDataTableSortSymbol);
  if (!data) throw new Error("Missing sort!");
  return data;
}
function useSortedItems(props, items, sortBy, options) {
  const locale = useLocale();
  const sortedItems = computed(() => {
    var _a, _b;
    if (!sortBy.value.length) return items.value;
    return sortItems(items.value, sortBy.value, locale.current.value, {
      transform: options == null ? void 0 : options.transform,
      sortFunctions: {
        ...props.customKeySort,
        ...(_a = options == null ? void 0 : options.sortFunctions) == null ? void 0 : _a.value
      },
      sortRawFunctions: (_b = options == null ? void 0 : options.sortRawFunctions) == null ? void 0 : _b.value
    });
  });
  return {
    sortedItems
  };
}
function sortItems(items, sortByItems, locale, options) {
  const stringCollator = new Intl.Collator(locale, {
    sensitivity: "accent",
    usage: "sort"
  });
  const transformedItems = items.map((item) => [item, (options == null ? void 0 : options.transform) ? options.transform(item) : item]);
  return transformedItems.sort((a, b) => {
    var _a, _b;
    for (let i = 0; i < sortByItems.length; i++) {
      let hasCustomResult = false;
      const sortKey = sortByItems[i].key;
      const sortOrder = sortByItems[i].order ?? "asc";
      if (sortOrder === false) continue;
      let sortA = getObjectValueByPath(a[1], sortKey);
      let sortB = getObjectValueByPath(b[1], sortKey);
      let sortARaw = a[0].raw;
      let sortBRaw = b[0].raw;
      if (sortOrder === "desc") {
        [sortA, sortB] = [sortB, sortA];
        [sortARaw, sortBRaw] = [sortBRaw, sortARaw];
      }
      if ((_a = options == null ? void 0 : options.sortRawFunctions) == null ? void 0 : _a[sortKey]) {
        const customResult = options.sortRawFunctions[sortKey](sortARaw, sortBRaw);
        if (customResult == null) continue;
        hasCustomResult = true;
        if (customResult) return customResult;
      }
      if ((_b = options == null ? void 0 : options.sortFunctions) == null ? void 0 : _b[sortKey]) {
        const customResult = options.sortFunctions[sortKey](sortA, sortB);
        if (customResult == null) continue;
        hasCustomResult = true;
        if (customResult) return customResult;
      }
      if (hasCustomResult) continue;
      if (sortA instanceof Date && sortB instanceof Date) {
        return sortA.getTime() - sortB.getTime();
      }
      [sortA, sortB] = [sortA, sortB].map((s) => s != null ? s.toString().toLocaleLowerCase() : s);
      if (sortA !== sortB) {
        if (isEmpty(sortA) && isEmpty(sortB)) return 0;
        if (isEmpty(sortA)) return -1;
        if (isEmpty(sortB)) return 1;
        if (!isNaN(sortA) && !isNaN(sortB)) return Number(sortA) - Number(sortB);
        return stringCollator.compare(sortA, sortB);
      }
    }
    return 0;
  }).map((_ref) => {
    let [item] = _ref;
    return item;
  });
}

const makeVDataTableHeadersProps = propsFactory({
  color: String,
  disableSort: Boolean,
  fixedHeader: Boolean,
  multiSort: Boolean,
  sortAscIcon: {
    type: IconValue,
    default: "$sortAsc"
  },
  sortDescIcon: {
    type: IconValue,
    default: "$sortDesc"
  },
  headerProps: {
    type: Object
  },
  /** @deprecated */
  sticky: Boolean,
  ...makeDisplayProps(),
  ...makeLoaderProps()
}, "VDataTableHeaders");
const VDataTableHeaders = genericComponent()({
  name: "VDataTableHeaders",
  props: makeVDataTableHeadersProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      toggleSort,
      sortBy,
      isSorted
    } = useSort();
    const {
      someSelected,
      allSelected,
      selectAll,
      showSelectAll
    } = useSelection();
    const {
      columns,
      headers
    } = useHeaders();
    const {
      loaderClasses
    } = useLoader(props);
    function getFixedStyles(column, y) {
      if (!(props.sticky || props.fixedHeader) && !column.fixed) return void 0;
      return {
        position: "sticky",
        left: column.fixed ? convertToUnit(column.fixedOffset) : void 0,
        top: props.sticky || props.fixedHeader ? `calc(var(--v-table-header-height) * ${y})` : void 0
      };
    }
    function getSortIcon(column) {
      const item = sortBy.value.find((item2) => item2.key === column.key);
      if (!item) return props.sortAscIcon;
      return item.order === "asc" ? props.sortAscIcon : props.sortDescIcon;
    }
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(props, "color");
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const slotProps = computed(() => ({
      headers: headers.value,
      columns: columns.value,
      toggleSort,
      isSorted,
      sortBy: sortBy.value,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      selectAll,
      getSortIcon
    }));
    const headerCellClasses = computed(() => ["v-data-table__th", {
      "v-data-table__th--sticky": props.sticky || props.fixedHeader
    }, displayClasses.value, loaderClasses.value]);
    const VDataTableHeaderCell = (_ref2) => {
      let {
        column,
        x,
        y
      } = _ref2;
      const noPadding = column.key === "data-table-select" || column.key === "data-table-expand";
      const headerProps = mergeProps(props.headerProps ?? {}, column.headerProps ?? {});
      return createVNode(VDataTableColumn, mergeProps({
        "tag": "th",
        "align": column.align,
        "class": [{
          "v-data-table__th--sortable": column.sortable && !props.disableSort,
          "v-data-table__th--sorted": isSorted(column),
          "v-data-table__th--fixed": column.fixed
        }, ...headerCellClasses.value],
        "style": {
          width: convertToUnit(column.width),
          minWidth: convertToUnit(column.minWidth),
          maxWidth: convertToUnit(column.maxWidth),
          ...getFixedStyles(column, y)
        },
        "colspan": column.colspan,
        "rowspan": column.rowspan,
        "onClick": column.sortable ? () => toggleSort(column) : void 0,
        "fixed": column.fixed,
        "nowrap": column.nowrap,
        "lastFixed": column.lastFixed,
        "noPadding": noPadding
      }, headerProps), {
        default: () => {
          var _a;
          const columnSlotName = `header.${column.key}`;
          const columnSlotProps = {
            column,
            selectAll,
            isSorted,
            toggleSort,
            sortBy: sortBy.value,
            someSelected: someSelected.value,
            allSelected: allSelected.value,
            getSortIcon
          };
          if (slots[columnSlotName]) return slots[columnSlotName](columnSlotProps);
          if (column.key === "data-table-select") {
            return ((_a = slots["header.data-table-select"]) == null ? void 0 : _a.call(slots, columnSlotProps)) ?? (showSelectAll.value && createVNode(VCheckboxBtn, {
              "modelValue": allSelected.value,
              "indeterminate": someSelected.value && !allSelected.value,
              "onUpdate:modelValue": selectAll
            }, null));
          }
          return createVNode("div", {
            "class": "v-data-table-header__content"
          }, [createVNode("span", null, [column.title]), column.sortable && !props.disableSort && createVNode(VIcon, {
            "key": "icon",
            "class": "v-data-table-header__sort-icon",
            "icon": getSortIcon(column)
          }, null), props.multiSort && isSorted(column) && createVNode("div", {
            "key": "badge",
            "class": ["v-data-table-header__sort-badge", ...backgroundColorClasses.value],
            "style": backgroundColorStyles.value
          }, [sortBy.value.findIndex((x2) => x2.key === column.key) + 1])]);
        }
      });
    };
    const VDataTableMobileHeaderCell = () => {
      const headerProps = mergeProps(props.headerProps ?? {} ?? {});
      const displayItems = computed(() => {
        return columns.value.filter((column) => (column == null ? void 0 : column.sortable) && !props.disableSort);
      });
      const appendIcon = computed(() => {
        const showSelectColumn = columns.value.find((column) => column.key === "data-table-select");
        if (showSelectColumn == null) return;
        return allSelected.value ? "$checkboxOn" : someSelected.value ? "$checkboxIndeterminate" : "$checkboxOff";
      });
      return createVNode(VDataTableColumn, mergeProps({
        "tag": "th",
        "class": [...headerCellClasses.value],
        "colspan": headers.value.length + 1
      }, headerProps), {
        default: () => [createVNode("div", {
          "class": "v-data-table-header__content"
        }, [createVNode(VSelect, {
          "chips": true,
          "class": "v-data-table__td-sort-select",
          "clearable": true,
          "density": "default",
          "items": displayItems.value,
          "label": t("$vuetify.dataTable.sortBy"),
          "multiple": props.multiSort,
          "variant": "underlined",
          "onClick:clear": () => sortBy.value = [],
          "appendIcon": appendIcon.value,
          "onClick:append": () => selectAll(!allSelected.value)
        }, {
          ...slots,
          chip: (props2) => {
            var _a;
            return createVNode(VChip, {
              "onClick": ((_a = props2.item.raw) == null ? void 0 : _a.sortable) ? () => toggleSort(props2.item.raw) : void 0,
              "onMousedown": (e) => {
                e.preventDefault();
                e.stopPropagation();
              }
            }, {
              default: () => [props2.item.title, createVNode(VIcon, {
                "class": ["v-data-table__td-sort-icon", isSorted(props2.item.raw) && "v-data-table__td-sort-icon-active"],
                "icon": getSortIcon(props2.item.raw),
                "size": "small"
              }, null)]
            });
          }
        })])]
      });
    };
    useRender(() => {
      return mobile.value ? createVNode("tr", null, [createVNode(VDataTableMobileHeaderCell, null, null)]) : createVNode(Fragment, null, [slots.headers ? slots.headers(slotProps.value) : headers.value.map((row, y) => createVNode("tr", null, [row.map((column, x) => createVNode(VDataTableHeaderCell, {
        "column": column,
        "x": x,
        "y": y
      }, null))])), props.loading && createVNode("tr", {
        "class": "v-data-table-progress"
      }, [createVNode("th", {
        "colspan": columns.value.length
      }, [createVNode(LoaderSlot, {
        "name": "v-data-table-progress",
        "absolute": true,
        "active": true,
        "color": typeof props.loading === "boolean" ? void 0 : props.loading,
        "indeterminate": true
      }, {
        default: slots.loader
      })])])]);
    });
  }
});

const makeDataTableGroupProps = propsFactory({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group");
const VDataTableGroupSymbol = Symbol.for("vuetify:data-table-group");
function createGroupBy(props) {
  const groupBy = useProxiedModel(props, "groupBy");
  return {
    groupBy
  };
}
function provideGroupBy(options) {
  const {
    disableSort,
    groupBy,
    sortBy
  } = options;
  const opened = ref(/* @__PURE__ */ new Set());
  const sortByWithGroups = computed(() => {
    return groupBy.value.map((val) => ({
      ...val,
      order: val.order ?? false
    })).concat((disableSort == null ? void 0 : disableSort.value) ? [] : sortBy.value);
  });
  function isGroupOpen(group) {
    return opened.value.has(group.id);
  }
  function toggleGroup(group) {
    const newOpened = new Set(opened.value);
    if (!isGroupOpen(group)) newOpened.add(group.id);
    else newOpened.delete(group.id);
    opened.value = newOpened;
  }
  function extractRows(items) {
    function dive(group) {
      const arr = [];
      for (const item of group.items) {
        if ("type" in item && item.type === "group") {
          arr.push(...dive(item));
        } else {
          arr.push(item);
        }
      }
      return [...new Set(arr)];
    }
    return dive({
      items
    });
  }
  const data = {
    sortByWithGroups,
    toggleGroup,
    opened,
    groupBy,
    extractRows,
    isGroupOpen
  };
  provide(VDataTableGroupSymbol, data);
  return data;
}
function useGroupBy() {
  const data = inject(VDataTableGroupSymbol);
  if (!data) throw new Error("Missing group!");
  return data;
}
function groupItemsByProperty(items, groupBy) {
  if (!items.length) return [];
  const groups = /* @__PURE__ */ new Map();
  for (const item of items) {
    const value = getObjectValueByPath(item.raw, groupBy);
    if (!groups.has(value)) {
      groups.set(value, []);
    }
    groups.get(value).push(item);
  }
  return groups;
}
function groupItems(items, groupBy) {
  let depth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  let prefix = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!groupBy.length) return [];
  const groupedItems = groupItemsByProperty(items, groupBy[0]);
  const groups = [];
  const rest = groupBy.slice(1);
  groupedItems.forEach((items2, value) => {
    const key = groupBy[0];
    const id = `${prefix}_${key}_${value}`;
    groups.push({
      depth,
      id,
      key,
      value,
      items: rest.length ? groupItems(items2, rest, depth + 1, id) : items2,
      type: "group"
    });
  });
  return groups;
}
function flattenItems(items, opened) {
  const flatItems = [];
  for (const item of items) {
    if ("type" in item && item.type === "group") {
      if (item.value != null) {
        flatItems.push(item);
      }
      if (opened.has(item.id) || item.value == null) {
        flatItems.push(...flattenItems(item.items, opened));
      }
    } else {
      flatItems.push(item);
    }
  }
  return flatItems;
}
function useGroupedItems(items, groupBy, opened) {
  const flatItems = computed(() => {
    if (!groupBy.value.length) return items.value;
    const groupedItems = groupItems(items.value, groupBy.value.map((item) => item.key));
    return flattenItems(groupedItems, opened.value);
  });
  return {
    flatItems
  };
}

const makeVDataTableGroupHeaderRowProps = propsFactory({
  item: {
    type: Object,
    required: true
  }
}, "VDataTableGroupHeaderRow");
const VDataTableGroupHeaderRow = genericComponent()({
  name: "VDataTableGroupHeaderRow",
  props: makeVDataTableGroupHeaderRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isGroupOpen,
      toggleGroup,
      extractRows
    } = useGroupBy();
    const {
      isSelected,
      isSomeSelected,
      select
    } = useSelection();
    const {
      columns
    } = useHeaders();
    const rows = computed(() => {
      return extractRows([props.item]);
    });
    return () => createVNode("tr", {
      "class": "v-data-table-group-header-row",
      "style": {
        "--v-data-table-group-header-row-depth": props.item.depth
      }
    }, [columns.value.map((column) => {
      var _a, _b;
      if (column.key === "data-table-group") {
        const icon = isGroupOpen(props.item) ? "$expand" : "$next";
        const onClick = () => toggleGroup(props.item);
        return ((_a = slots["data-table-group"]) == null ? void 0 : _a.call(slots, {
          item: props.item,
          count: rows.value.length,
          props: {
            icon,
            onClick
          }
        })) ?? createVNode(VDataTableColumn, {
          "class": "v-data-table-group-header-row__column"
        }, {
          default: () => [createVNode(VBtn, {
            "size": "small",
            "variant": "text",
            "icon": icon,
            "onClick": onClick
          }, null), createVNode("span", null, [props.item.value]), createVNode("span", null, [createTextVNode("("), rows.value.length, createTextVNode(")")])]
        });
      }
      if (column.key === "data-table-select") {
        const modelValue = isSelected(rows.value);
        const indeterminate = isSomeSelected(rows.value) && !modelValue;
        const selectGroup = (v) => select(rows.value, v);
        return ((_b = slots["data-table-select"]) == null ? void 0 : _b.call(slots, {
          props: {
            modelValue,
            indeterminate,
            "onUpdate:modelValue": selectGroup
          }
        })) ?? createVNode("td", null, [createVNode(VCheckboxBtn, {
          "modelValue": modelValue,
          "indeterminate": indeterminate,
          "onUpdate:modelValue": selectGroup
        }, null)]);
      }
      return createVNode("td", null, null);
    })]);
  }
});

const makeDataTableExpandProps = propsFactory({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand");
const VDataTableExpandedKey = Symbol.for("vuetify:datatable:expanded");
function provideExpanded(props) {
  const expandOnClick = toRef(props, "expandOnClick");
  const expanded = useProxiedModel(props, "expanded", props.expanded, (v) => {
    return new Set(v);
  }, (v) => {
    return [...v.values()];
  });
  function expand(item, value) {
    const newExpanded = new Set(expanded.value);
    if (!value) {
      newExpanded.delete(item.value);
    } else {
      newExpanded.add(item.value);
    }
    expanded.value = newExpanded;
  }
  function isExpanded(item) {
    return expanded.value.has(item.value);
  }
  function toggleExpand(item) {
    expand(item, !isExpanded(item));
  }
  const data = {
    expand,
    expanded,
    expandOnClick,
    isExpanded,
    toggleExpand
  };
  provide(VDataTableExpandedKey, data);
  return data;
}
function useExpanded() {
  const data = inject(VDataTableExpandedKey);
  if (!data) throw new Error("foo");
  return data;
}

const makeVDataTableRowProps = propsFactory({
  index: Number,
  item: Object,
  cellProps: [Object, Function],
  onClick: EventProp(),
  onContextmenu: EventProp(),
  onDblclick: EventProp(),
  ...makeDisplayProps()
}, "VDataTableRow");
const VDataTableRow = genericComponent()({
  name: "VDataTableRow",
  props: makeVDataTableRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      displayClasses,
      mobile
    } = useDisplay(props, "v-data-table__tr");
    const {
      isSelected,
      toggleSelect,
      someSelected,
      allSelected,
      selectAll
    } = useSelection();
    const {
      isExpanded,
      toggleExpand
    } = useExpanded();
    const {
      toggleSort,
      sortBy,
      isSorted
    } = useSort();
    const {
      columns
    } = useHeaders();
    useRender(() => createVNode("tr", {
      "class": ["v-data-table__tr", {
        "v-data-table__tr--clickable": !!(props.onClick || props.onContextmenu || props.onDblclick)
      }, displayClasses.value],
      "onClick": props.onClick,
      "onContextmenu": props.onContextmenu,
      "onDblclick": props.onDblclick
    }, [props.item && columns.value.map((column, i) => {
      const item = props.item;
      const slotName = `item.${column.key}`;
      const headerSlotName = `header.${column.key}`;
      const slotProps = {
        index: props.index,
        item: item.raw,
        internalItem: item,
        value: getObjectValueByPath(item.columns, column.key),
        column,
        isSelected,
        toggleSelect,
        isExpanded,
        toggleExpand
      };
      const columnSlotProps = {
        column,
        selectAll,
        isSorted,
        toggleSort,
        sortBy: sortBy.value,
        someSelected: someSelected.value,
        allSelected: allSelected.value,
        getSortIcon: () => ""
      };
      const cellProps = typeof props.cellProps === "function" ? props.cellProps({
        index: slotProps.index,
        item: slotProps.item,
        internalItem: slotProps.internalItem,
        value: slotProps.value,
        column
      }) : props.cellProps;
      const columnCellProps = typeof column.cellProps === "function" ? column.cellProps({
        index: slotProps.index,
        item: slotProps.item,
        internalItem: slotProps.internalItem,
        value: slotProps.value
      }) : column.cellProps;
      return createVNode(VDataTableColumn, mergeProps({
        "align": column.align,
        "class": {
          "v-data-table__td--expanded-row": column.key === "data-table-expand",
          "v-data-table__td--select-row": column.key === "data-table-select"
        },
        "fixed": column.fixed,
        "fixedOffset": column.fixedOffset,
        "lastFixed": column.lastFixed,
        "maxWidth": !mobile.value ? column.maxWidth : void 0,
        "noPadding": column.key === "data-table-select" || column.key === "data-table-expand",
        "nowrap": column.nowrap,
        "width": !mobile.value ? column.width : void 0
      }, cellProps, columnCellProps), {
        default: () => {
          var _a, _b, _c, _d;
          if (column.key === "data-table-select") {
            return ((_a = slots["item.data-table-select"]) == null ? void 0 : _a.call(slots, {
              ...slotProps,
              props: {
                disabled: !item.selectable,
                modelValue: isSelected([item]),
                onClick: withModifiers(() => toggleSelect(item), ["stop"])
              }
            })) ?? createVNode(VCheckboxBtn, {
              "disabled": !item.selectable,
              "modelValue": isSelected([item]),
              "onClick": withModifiers(() => toggleSelect(item), ["stop"])
            }, null);
          }
          if (column.key === "data-table-expand") {
            return ((_b = slots["item.data-table-expand"]) == null ? void 0 : _b.call(slots, {
              ...slotProps,
              props: {
                icon: isExpanded(item) ? "$collapse" : "$expand",
                size: "small",
                variant: "text",
                onClick: withModifiers(() => toggleExpand(item), ["stop"])
              }
            })) ?? createVNode(VBtn, {
              "icon": isExpanded(item) ? "$collapse" : "$expand",
              "size": "small",
              "variant": "text",
              "onClick": withModifiers(() => toggleExpand(item), ["stop"])
            }, null);
          }
          if (slots[slotName] && !mobile.value) return slots[slotName](slotProps);
          const displayValue = toDisplayString(slotProps.value);
          return !mobile.value ? displayValue : createVNode(Fragment, null, [createVNode("div", {
            "class": "v-data-table__td-title"
          }, [((_c = slots[headerSlotName]) == null ? void 0 : _c.call(slots, columnSlotProps)) ?? column.title]), createVNode("div", {
            "class": "v-data-table__td-value"
          }, [((_d = slots[slotName]) == null ? void 0 : _d.call(slots, slotProps)) ?? displayValue])]);
        }
      });
    })]));
  }
});

function getPrefixedEventHandlers(attrs, suffix, getData) {
  return Object.keys(attrs).filter((key) => isOn(key) && key.endsWith(suffix)).reduce((acc, key) => {
    acc[key.slice(0, -suffix.length)] = (event) => attrs[key](event, getData(event));
    return acc;
  }, {});
}

const makeVDataTableRowsProps = propsFactory({
  loading: [Boolean, String],
  loadingText: {
    type: String,
    default: "$vuetify.dataIterator.loadingText"
  },
  hideNoData: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  ...makeDisplayProps()
}, "VDataTableRows");
const VDataTableRows = genericComponent()({
  name: "VDataTableRows",
  inheritAttrs: false,
  props: makeVDataTableRowsProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      columns
    } = useHeaders();
    const {
      expandOnClick,
      toggleExpand,
      isExpanded
    } = useExpanded();
    const {
      isSelected,
      toggleSelect
    } = useSelection();
    const {
      toggleGroup,
      isGroupOpen
    } = useGroupBy();
    const {
      t
    } = useLocale();
    const {
      mobile
    } = useDisplay(props);
    useRender(() => {
      var _a, _b;
      if (props.loading && (!props.items.length || slots.loading)) {
        return createVNode("tr", {
          "class": "v-data-table-rows-loading",
          "key": "loading"
        }, [createVNode("td", {
          "colspan": columns.value.length
        }, [((_a = slots.loading) == null ? void 0 : _a.call(slots)) ?? t(props.loadingText)])]);
      }
      if (!props.loading && !props.items.length && !props.hideNoData) {
        return createVNode("tr", {
          "class": "v-data-table-rows-no-data",
          "key": "no-data"
        }, [createVNode("td", {
          "colspan": columns.value.length
        }, [((_b = slots["no-data"]) == null ? void 0 : _b.call(slots)) ?? t(props.noDataText)])]);
      }
      return createVNode(Fragment, null, [props.items.map((item, index) => {
        var _a2;
        if (item.type === "group") {
          const slotProps2 = {
            index,
            item,
            columns: columns.value,
            isExpanded,
            toggleExpand,
            isSelected,
            toggleSelect,
            toggleGroup,
            isGroupOpen
          };
          return slots["group-header"] ? slots["group-header"](slotProps2) : createVNode(VDataTableGroupHeaderRow, mergeProps({
            "key": `group-header_${item.id}`,
            "item": item
          }, getPrefixedEventHandlers(attrs, ":group-header", () => slotProps2)), slots);
        }
        const slotProps = {
          index,
          item: item.raw,
          internalItem: item,
          columns: columns.value,
          isExpanded,
          toggleExpand,
          isSelected,
          toggleSelect
        };
        const itemSlotProps = {
          ...slotProps,
          props: mergeProps({
            key: `item_${item.key ?? item.index}`,
            onClick: expandOnClick.value ? () => {
              toggleExpand(item);
            } : void 0,
            index,
            item,
            cellProps: props.cellProps,
            mobile: mobile.value
          }, getPrefixedEventHandlers(attrs, ":row", () => slotProps), typeof props.rowProps === "function" ? props.rowProps({
            item: slotProps.item,
            index: slotProps.index,
            internalItem: slotProps.internalItem
          }) : props.rowProps)
        };
        return createVNode(Fragment, {
          "key": itemSlotProps.props.key
        }, [slots.item ? slots.item(itemSlotProps) : createVNode(VDataTableRow, itemSlotProps.props, slots), isExpanded(item) && ((_a2 = slots["expanded-row"]) == null ? void 0 : _a2.call(slots, slotProps))]);
      })]);
    });
    return {};
  }
});

const makeVTableProps = propsFactory({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VTable");
const VTable = genericComponent()({
  name: "VTable",
  props: makeVTableProps(),
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-table", {
        "v-table--fixed-height": !!props.height,
        "v-table--fixed-header": props.fixedHeader,
        "v-table--fixed-footer": props.fixedFooter,
        "v-table--has-top": !!slots.top,
        "v-table--has-bottom": !!slots.bottom,
        "v-table--hover": props.hover
      }, themeClasses.value, densityClasses.value, props.class],
      "style": props.style
    }, {
      default: () => {
        var _a, _b, _c;
        return [(_a = slots.top) == null ? void 0 : _a.call(slots), slots.default ? createVNode("div", {
          "class": "v-table__wrapper",
          "style": {
            height: convertToUnit(props.height)
          }
        }, [createVNode("table", null, [slots.default()])]) : (_b = slots.wrapper) == null ? void 0 : _b.call(slots), (_c = slots.bottom) == null ? void 0 : _c.call(slots)];
      }
    }));
    return {};
  }
});

const makeDataTableItemsProps = propsFactory({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  returnObject: Boolean
}, "DataTable-items");
function transformItem(props, item, index, columns) {
  const value = props.returnObject ? item : getPropertyFromItem(item, props.itemValue);
  const selectable = getPropertyFromItem(item, props.itemSelectable, true);
  const itemColumns = columns.reduce((obj, column) => {
    if (column.key != null) obj[column.key] = getPropertyFromItem(item, column.value);
    return obj;
  }, {});
  return {
    type: "item",
    key: props.returnObject ? getPropertyFromItem(item, props.itemValue) : value,
    index,
    value,
    selectable,
    columns: itemColumns,
    raw: item
  };
}
function transformItems(props, items, columns) {
  return items.map((item, index) => transformItem(props, item, index, columns));
}
function useDataTableItems(props, columns) {
  const items = computed(() => transformItems(props, props.items, columns.value));
  return {
    items
  };
}

function useOptions(_ref) {
  let {
    page,
    itemsPerPage,
    sortBy,
    groupBy,
    search
  } = _ref;
  const vm = getCurrentInstance("VDataTable");
  const options = computed(() => ({
    page: page.value,
    itemsPerPage: itemsPerPage.value,
    sortBy: sortBy.value,
    groupBy: groupBy.value,
    search: search.value
  }));
  let oldOptions = null;
  watch(options, () => {
    if (deepEqual(oldOptions, options.value)) return;
    if (oldOptions && oldOptions.search !== options.value.search) {
      page.value = 1;
    }
    vm.emit("update:options", options.value);
    oldOptions = options.value;
  }, {
    deep: true,
    immediate: true
  });
}

const defaultFilter = (value, query, item) => {
  if (value == null || query == null) return -1;
  return value.toString().toLocaleLowerCase().indexOf(query.toString().toLocaleLowerCase());
};
const makeFilterProps = propsFactory({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function filterItems(items, query, options) {
  var _a;
  const array = [];
  const filter = (options == null ? void 0 : options.default) ?? defaultFilter;
  const keys = (options == null ? void 0 : options.filterKeys) ? wrapInArray(options.filterKeys) : false;
  const customFiltersLength = Object.keys((options == null ? void 0 : options.customKeyFilter) ?? {}).length;
  if (!(items == null ? void 0 : items.length)) return array;
  loop: for (let i = 0; i < items.length; i++) {
    const [item, transformed = item] = wrapInArray(items[i]);
    const customMatches = {};
    const defaultMatches = {};
    let match = -1;
    if ((query || customFiltersLength > 0) && !(options == null ? void 0 : options.noFilter)) {
      if (typeof item === "object") {
        const filterKeys = keys || Object.keys(transformed);
        for (const key of filterKeys) {
          const value = getPropertyFromItem(transformed, key);
          const keyFilter = (_a = options == null ? void 0 : options.customKeyFilter) == null ? void 0 : _a[key];
          match = keyFilter ? keyFilter(value, query, item) : filter(value, query, item);
          if (match !== -1 && match !== false) {
            if (keyFilter) customMatches[key] = match;
            else defaultMatches[key] = match;
          } else if ((options == null ? void 0 : options.filterMode) === "every") {
            continue loop;
          }
        }
      } else {
        match = filter(item, query, item);
        if (match !== -1 && match !== false) {
          defaultMatches.title = match;
        }
      }
      const defaultMatchesLength = Object.keys(defaultMatches).length;
      const customMatchesLength = Object.keys(customMatches).length;
      if (!defaultMatchesLength && !customMatchesLength) continue;
      if ((options == null ? void 0 : options.filterMode) === "union" && customMatchesLength !== customFiltersLength && !defaultMatchesLength) continue;
      if ((options == null ? void 0 : options.filterMode) === "intersection" && (customMatchesLength !== customFiltersLength || !defaultMatchesLength)) continue;
    }
    array.push({
      index: i,
      matches: {
        ...defaultMatches,
        ...customMatches
      }
    });
  }
  return array;
}
function useFilter(props, items, query, options) {
  const filteredItems = shallowRef([]);
  const filteredMatches = shallowRef(/* @__PURE__ */ new Map());
  const transformedItems = computed(() => (options == null ? void 0 : options.transform) ? unref(items).map((item) => [item, options.transform(item)]) : unref(items));
  watchEffect(() => {
    const _query = typeof query === "function" ? query() : unref(query);
    const strQuery = typeof _query !== "string" && typeof _query !== "number" ? "" : String(_query);
    const results = filterItems(transformedItems.value, strQuery, {
      customKeyFilter: {
        ...props.customKeyFilter,
        ...unref(options == null ? void 0 : options.customKeyFilter)
      },
      default: props.customFilter,
      filterKeys: props.filterKeys,
      filterMode: props.filterMode,
      noFilter: props.noFilter
    });
    const originalItems = unref(items);
    const _filteredItems = [];
    const _filteredMatches = /* @__PURE__ */ new Map();
    results.forEach((_ref) => {
      let {
        index,
        matches
      } = _ref;
      const item = originalItems[index];
      _filteredItems.push(item);
      _filteredMatches.set(item.value, matches);
    });
    filteredItems.value = _filteredItems;
    filteredMatches.value = _filteredMatches;
  });
  function getMatches(item) {
    return filteredMatches.value.get(item.value);
  }
  return {
    filteredItems,
    filteredMatches,
    getMatches
  };
}

const makeDataTableProps = propsFactory({
  ...makeVDataTableRowsProps(),
  hideDefaultBody: Boolean,
  hideDefaultFooter: Boolean,
  hideDefaultHeader: Boolean,
  width: [String, Number],
  search: String,
  ...makeDataTableExpandProps(),
  ...makeDataTableGroupProps(),
  ...makeDataTableHeaderProps(),
  ...makeDataTableItemsProps(),
  ...makeDataTableSelectProps(),
  ...makeDataTableSortProps(),
  ...makeVDataTableHeadersProps(),
  ...makeVTableProps()
}, "DataTable");
const makeVDataTableProps = propsFactory({
  ...makeDataTablePaginateProps(),
  ...makeDataTableProps(),
  ...makeFilterProps(),
  ...makeVDataTableFooterProps()
}, "VDataTable");
genericComponent()({
  name: "VDataTable",
  props: makeVDataTableProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:page": (value) => true,
    "update:itemsPerPage": (value) => true,
    "update:sortBy": (value) => true,
    "update:options": (value) => true,
    "update:groupBy": (value) => true,
    "update:expanded": (value) => true,
    "update:currentItems": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      groupBy
    } = createGroupBy(props);
    const {
      sortBy,
      multiSort,
      mustSort
    } = createSort(props);
    const {
      page,
      itemsPerPage
    } = createPagination(props);
    const {
      disableSort
    } = toRefs(props);
    const {
      columns,
      headers,
      sortFunctions,
      sortRawFunctions,
      filterFunctions
    } = createHeaders(props, {
      groupBy,
      showSelect: toRef(props, "showSelect"),
      showExpand: toRef(props, "showExpand")
    });
    const {
      items
    } = useDataTableItems(props, columns);
    const search = toRef(props, "search");
    const {
      filteredItems
    } = useFilter(props, items, search, {
      transform: (item) => item.columns,
      customKeyFilter: filterFunctions
    });
    const {
      toggleSort
    } = provideSort({
      sortBy,
      multiSort,
      mustSort,
      page
    });
    const {
      sortByWithGroups,
      opened,
      extractRows,
      isGroupOpen,
      toggleGroup
    } = provideGroupBy({
      groupBy,
      sortBy,
      disableSort
    });
    const {
      sortedItems
    } = useSortedItems(props, filteredItems, sortByWithGroups, {
      transform: (item) => ({
        ...item.raw,
        ...item.columns
      }),
      sortFunctions,
      sortRawFunctions
    });
    const {
      flatItems
    } = useGroupedItems(sortedItems, groupBy, opened);
    const itemsLength = computed(() => flatItems.value.length);
    const {
      startIndex,
      stopIndex,
      pageCount,
      setItemsPerPage
    } = providePagination({
      page,
      itemsPerPage,
      itemsLength
    });
    const {
      paginatedItems
    } = usePaginatedItems({
      items: flatItems,
      startIndex,
      stopIndex,
      itemsPerPage
    });
    const paginatedItemsWithoutGroups = computed(() => extractRows(paginatedItems.value));
    const {
      isSelected,
      select,
      selectAll,
      toggleSelect,
      someSelected,
      allSelected
    } = provideSelection(props, {
      allItems: items,
      currentPage: paginatedItemsWithoutGroups
    });
    const {
      isExpanded,
      toggleExpand
    } = provideExpanded(props);
    useOptions({
      page,
      itemsPerPage,
      sortBy,
      groupBy,
      search
    });
    provideDefaults({
      VDataTableRows: {
        hideNoData: toRef(props, "hideNoData"),
        noDataText: toRef(props, "noDataText"),
        loading: toRef(props, "loading"),
        loadingText: toRef(props, "loadingText")
      }
    });
    const slotProps = computed(() => ({
      page: page.value,
      itemsPerPage: itemsPerPage.value,
      sortBy: sortBy.value,
      pageCount: pageCount.value,
      toggleSort,
      setItemsPerPage,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: paginatedItemsWithoutGroups.value.map((item) => item.raw),
      internalItems: paginatedItemsWithoutGroups.value,
      groupedItems: paginatedItems.value,
      columns: columns.value,
      headers: headers.value
    }));
    useRender(() => {
      const dataTableFooterProps = VDataTableFooter.filterProps(props);
      const dataTableHeadersProps = VDataTableHeaders.filterProps(props);
      const dataTableRowsProps = VDataTableRows.filterProps(props);
      const tableProps = VTable.filterProps(props);
      return createVNode(VTable, mergeProps({
        "class": ["v-data-table", {
          "v-data-table--show-select": props.showSelect,
          "v-data-table--loading": props.loading
        }, props.class],
        "style": props.style
      }, tableProps, {
        "fixedHeader": props.fixedHeader || props.sticky
      }), {
        top: () => {
          var _a;
          return (_a = slots.top) == null ? void 0 : _a.call(slots, slotProps.value);
        },
        default: () => {
          var _a, _b, _c, _d, _e, _f;
          return slots.default ? slots.default(slotProps.value) : createVNode(Fragment, null, [(_a = slots.colgroup) == null ? void 0 : _a.call(slots, slotProps.value), !props.hideDefaultHeader && createVNode("thead", {
            "key": "thead"
          }, [createVNode(VDataTableHeaders, dataTableHeadersProps, slots)]), (_b = slots.thead) == null ? void 0 : _b.call(slots, slotProps.value), !props.hideDefaultBody && createVNode("tbody", null, [(_c = slots["body.prepend"]) == null ? void 0 : _c.call(slots, slotProps.value), slots.body ? slots.body(slotProps.value) : createVNode(VDataTableRows, mergeProps(attrs, dataTableRowsProps, {
            "items": paginatedItems.value
          }), slots), (_d = slots["body.append"]) == null ? void 0 : _d.call(slots, slotProps.value)]), (_e = slots.tbody) == null ? void 0 : _e.call(slots, slotProps.value), (_f = slots.tfoot) == null ? void 0 : _f.call(slots, slotProps.value)]);
        },
        bottom: () => slots.bottom ? slots.bottom(slotProps.value) : !props.hideDefaultFooter && createVNode(Fragment, null, [createVNode(VDivider, null, null), createVNode(VDataTableFooter, dataTableFooterProps, {
          prepend: slots["footer.prepend"]
        })])
      });
    });
    return {};
  }
});

const makeVDataTableServerProps = propsFactory({
  itemsLength: {
    type: [Number, String],
    required: true
  },
  ...makeDataTablePaginateProps(),
  ...makeDataTableProps(),
  ...makeVDataTableFooterProps()
}, "VDataTableServer");
const VDataTableServer = genericComponent()({
  name: "VDataTableServer",
  props: makeVDataTableServerProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:page": (page) => true,
    "update:itemsPerPage": (page) => true,
    "update:sortBy": (sortBy) => true,
    "update:options": (options) => true,
    "update:expanded": (options) => true,
    "update:groupBy": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      groupBy
    } = createGroupBy(props);
    const {
      sortBy,
      multiSort,
      mustSort
    } = createSort(props);
    const {
      page,
      itemsPerPage
    } = createPagination(props);
    const {
      disableSort
    } = toRefs(props);
    const itemsLength = computed(() => parseInt(props.itemsLength, 10));
    const {
      columns,
      headers
    } = createHeaders(props, {
      groupBy,
      showSelect: toRef(props, "showSelect"),
      showExpand: toRef(props, "showExpand")
    });
    const {
      items
    } = useDataTableItems(props, columns);
    const {
      toggleSort
    } = provideSort({
      sortBy,
      multiSort,
      mustSort,
      page
    });
    const {
      opened,
      isGroupOpen,
      toggleGroup,
      extractRows
    } = provideGroupBy({
      groupBy,
      sortBy,
      disableSort
    });
    const {
      pageCount,
      setItemsPerPage
    } = providePagination({
      page,
      itemsPerPage,
      itemsLength
    });
    const {
      flatItems
    } = useGroupedItems(items, groupBy, opened);
    const {
      isSelected,
      select,
      selectAll,
      toggleSelect,
      someSelected,
      allSelected
    } = provideSelection(props, {
      allItems: items,
      currentPage: items
    });
    const {
      isExpanded,
      toggleExpand
    } = provideExpanded(props);
    const itemsWithoutGroups = computed(() => extractRows(items.value));
    useOptions({
      page,
      itemsPerPage,
      sortBy,
      groupBy,
      search: toRef(props, "search")
    });
    provide("v-data-table", {
      toggleSort,
      sortBy
    });
    provideDefaults({
      VDataTableRows: {
        hideNoData: toRef(props, "hideNoData"),
        noDataText: toRef(props, "noDataText"),
        loading: toRef(props, "loading"),
        loadingText: toRef(props, "loadingText")
      }
    });
    const slotProps = computed(() => ({
      page: page.value,
      itemsPerPage: itemsPerPage.value,
      sortBy: sortBy.value,
      pageCount: pageCount.value,
      toggleSort,
      setItemsPerPage,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: itemsWithoutGroups.value.map((item) => item.raw),
      internalItems: itemsWithoutGroups.value,
      groupedItems: flatItems.value,
      columns: columns.value,
      headers: headers.value
    }));
    useRender(() => {
      const dataTableFooterProps = VDataTableFooter.filterProps(props);
      const dataTableHeadersProps = VDataTableHeaders.filterProps(props);
      const dataTableRowsProps = VDataTableRows.filterProps(props);
      const tableProps = VTable.filterProps(props);
      return createVNode(VTable, mergeProps({
        "class": ["v-data-table", {
          "v-data-table--loading": props.loading
        }, props.class],
        "style": props.style
      }, tableProps, {
        "fixedHeader": props.fixedHeader || props.sticky
      }), {
        top: () => {
          var _a;
          return (_a = slots.top) == null ? void 0 : _a.call(slots, slotProps.value);
        },
        default: () => {
          var _a, _b, _c, _d, _e, _f;
          return slots.default ? slots.default(slotProps.value) : createVNode(Fragment, null, [(_a = slots.colgroup) == null ? void 0 : _a.call(slots, slotProps.value), !props.hideDefaultHeader && createVNode("thead", {
            "key": "thead",
            "class": "v-data-table__thead",
            "role": "rowgroup"
          }, [createVNode(VDataTableHeaders, dataTableHeadersProps, slots)]), (_b = slots.thead) == null ? void 0 : _b.call(slots, slotProps.value), !props.hideDefaultBody && createVNode("tbody", {
            "class": "v-data-table__tbody",
            "role": "rowgroup"
          }, [(_c = slots["body.prepend"]) == null ? void 0 : _c.call(slots, slotProps.value), slots.body ? slots.body(slotProps.value) : createVNode(VDataTableRows, mergeProps(attrs, dataTableRowsProps, {
            "items": flatItems.value
          }), slots), (_d = slots["body.append"]) == null ? void 0 : _d.call(slots, slotProps.value)]), (_e = slots.tbody) == null ? void 0 : _e.call(slots, slotProps.value), (_f = slots.tfoot) == null ? void 0 : _f.call(slots, slotProps.value)]);
        },
        bottom: () => slots.bottom ? slots.bottom(slotProps.value) : !props.hideDefaultFooter && createVNode(Fragment, null, [createVNode(VDivider, null, null), createVNode(VDataTableFooter, dataTableFooterProps, {
          prepend: slots["footer.prepend"]
        })])
      });
    });
  }
});

const makeVTooltipProps = propsFactory({
  id: String,
  text: String,
  ...omit(makeVOverlayProps({
    closeOnBack: false,
    location: "end",
    locationStrategy: "connected",
    eager: true,
    minWidth: 0,
    offset: 10,
    openOnClick: false,
    openOnHover: true,
    origin: "auto",
    scrim: false,
    scrollStrategy: "reposition",
    transition: false
  }), ["absolute", "persistent"])
}, "VTooltip");
const VTooltip = genericComponent()({
  name: "VTooltip",
  props: makeVTooltipProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const uid = getUid();
    const id = computed(() => props.id || `v-tooltip-${uid}`);
    const overlay = ref();
    const location = computed(() => {
      return props.location.split(" ").length > 1 ? props.location : props.location + " center";
    });
    const origin = computed(() => {
      return props.origin === "auto" || props.origin === "overlap" || props.origin.split(" ").length > 1 || props.location.split(" ").length > 1 ? props.origin : props.origin + " center";
    });
    const transition = computed(() => {
      if (props.transition) return props.transition;
      return isActive.value ? "scale-transition" : "fade-transition";
    });
    const activatorProps = computed(() => mergeProps({
      "aria-describedby": id.value
    }, props.activatorProps));
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-tooltip", props.class],
        "style": props.style,
        "id": id.value
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "transition": transition.value,
        "absolute": true,
        "location": location.value,
        "origin": origin.value,
        "persistent": true,
        "role": "tooltip",
        "activatorProps": activatorProps.value,
        "_disableGlobalStack": true
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          var _a;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return ((_a = slots.default) == null ? void 0 : _a.call(slots, ...args)) ?? props.text;
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});

const _sfc_main = {
  __name: "orders",
  __ssrInlineRender: true,
  setup(__props) {
    const ordersLists = ref([]);
    const fetching = ref(false);
    const isDownloading = ref(false);
    const { isAuthenticated, user } = useSanctumAuth();
    const orderStore = useOrderStore();
    const { guestOrderMasterIds } = storeToRefs(orderStore);
    watch(guestOrderMasterIds, () => {
      getOrderLists({ page: 1, itemsPerPage: itemsPerPage.value });
    });
    watch(isAuthenticated, () => {
      getOrderLists({ page: 1, itemsPerPage: itemsPerPage.value }, true);
    });
    const headers = ref([
      { title: "Order No.", key: "order_number", align: "start" },
      { title: "Transaction ID.", key: "transaction_id", align: "end" },
      { title: "Order Date", key: "purchase_date", align: "end" },
      { title: "Total Price", key: "total_price", align: "end" },
      { title: "Order Status", key: "payment_status", align: "end", sortable: false },
      { title: "Actions", key: "actions", align: "center", sortable: false }
    ]);
    const itemsPerPage = ref(5);
    const totalItems = ref(0);
    const expanded = ref([]);
    const currentPage = ref(1);
    const getOrderLists = async ({ page, itemsPerPage: itemsPerPage2, sortBy }, excludeOrderMasterIds = false) => {
      try {
        fetching.value = true;
        currentPage.value = page;
        const params = {
          page,
          itemsPerPage: itemsPerPage2,
          sortBy
        };
        if (orderStore.guestOrderMasterIds && !excludeOrderMasterIds) {
          params.orderMasterIds = JSON.stringify(orderStore.guestOrderMasterIds);
        }
        if (isAuthenticated.value) {
          params.userId = user.value.id;
        } else {
          params.guestId = localStorage.getItem("guestId");
        }
        const { data, total } = await useBaseFetch("/orders/lists", {
          method: "get",
          params
        });
        ordersLists.value = data;
        totalItems.value = total;
      } catch (error) {
        console.error(error);
      } finally {
        fetching.value = false;
      }
    };
    const selectedIndex = ref(null);
    const downloadFiles = async (item, cart, index) => {
      isDownloading.value = true;
      selectedIndex.value = index;
      try {
        const response = await useBaseFetch("/download-files", {
          method: "POST",
          body: {
            manualId: cart.manual_id,
            orderMasterId: item.id
          },
          responseType: "blob"
        });
        getOrderLists({ page: currentPage.value, itemsPerPage: itemsPerPage.value });
        const blob = new Blob([response], { type: "application/zip" });
        const downloadUrl = (void 0).URL.createObjectURL(blob);
        const a = (void 0).createElement("a");
        a.href = downloadUrl;
        a.download = `${item.order_number}-item-${item.order_details.item_number}.zip`;
        (void 0).body.appendChild(a);
        a.style.display = "none";
        a.click();
        a.remove();
        (void 0).URL.revokeObjectURL(downloadUrl);
      } catch (error) {
        console.error("Download failed:", error);
      } finally {
        isDownloading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VCard, {
        elevation: "10",
        class: "pa-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, { class: "mb-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Orders`);
                } else {
                  return [
                    createTextVNode("Orders")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDataTableServer, {
                    expanded: unref(expanded),
                    "items-per-page": unref(itemsPerPage),
                    "items-per-page-options": [5, 10, 25, 50],
                    headers: unref(headers),
                    items: unref(ordersLists),
                    "items-length": unref(totalItems),
                    loading: unref(fetching),
                    "item-value": "order_number",
                    "onUpdate:options": getOrderLists
                  }, {
                    "item.order_number": withCtx(({ value }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="font-weight-bold"${_scopeId3}>${ssrInterpolate(value)}</p>`);
                      } else {
                        return [
                          createVNode("p", { class: "font-weight-bold" }, toDisplayString(value), 1)
                        ];
                      }
                    }),
                    "item.payment_status": withCtx(({ value }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="font-weight-bold text-success"${_scopeId3}>${ssrInterpolate(value.toUpperCase())}</p>`);
                      } else {
                        return [
                          createVNode("p", { class: "font-weight-bold text-success" }, toDisplayString(value.toUpperCase()), 1)
                        ];
                      }
                    }),
                    "item.actions": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "text",
                          class: "text-none",
                          id: `download-activator-${item.id}`
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` mdi-file-download `);
                                  } else {
                                    return [
                                      createTextVNode(" mdi-file-download ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(` Download Manuals `);
                            } else {
                              return [
                                createVNode(VIcon, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" mdi-file-download ")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Download Manuals ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VMenu, {
                          activator: `#download-activator-${item.id}`,
                          "close-on-content-click": false,
                          "max-height": "300px"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItem, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VListItemTitle, null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTable, null, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<thead class="bg-grey-lighten-2"${_scopeId8}><tr${_scopeId8}><th${_scopeId8}>Name</th><th${_scopeId8}>Price</th><th${_scopeId8}>Download Previlige</th><th${_scopeId8}>Download</th></tr></thead><tbody${_scopeId8}><!--[-->`);
                                                      ssrRenderList(item.carts, (cart, index) => {
                                                        _push9(`<tr${_scopeId8}><td${_scopeId8}>${ssrInterpolate(cart.manual.title)}</td><td${_scopeId8}>${ssrInterpolate(cart.price)}</td><td${_scopeId8}>${ssrInterpolate(item.order_details.download_count)}</td><td${_scopeId8}>`);
                                                        _push9(ssrRenderComponent(VBtn, {
                                                          onClick: ($event) => downloadFiles(item, cart, index),
                                                          loading: unref(isDownloading) && unref(selectedIndex) == index,
                                                          disabled: item.order_details.download_count == 0,
                                                          variant: "text",
                                                          icon: "mdi-file-download"
                                                        }, null, _parent9, _scopeId8));
                                                        _push9(`</td></tr>`);
                                                      });
                                                      _push9(`<!--]--></tbody>`);
                                                    } else {
                                                      return [
                                                        createVNode("thead", { class: "bg-grey-lighten-2" }, [
                                                          createVNode("tr", null, [
                                                            createVNode("th", null, "Name"),
                                                            createVNode("th", null, "Price"),
                                                            createVNode("th", null, "Download Previlige"),
                                                            createVNode("th", null, "Download")
                                                          ])
                                                        ]),
                                                        createVNode("tbody", null, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(item.carts, (cart, index) => {
                                                            return openBlock(), createBlock("tr", {
                                                              key: cart.id
                                                            }, [
                                                              createVNode("td", null, toDisplayString(cart.manual.title), 1),
                                                              createVNode("td", null, toDisplayString(cart.price), 1),
                                                              createVNode("td", null, toDisplayString(item.order_details.download_count), 1),
                                                              createVNode("td", null, [
                                                                createVNode(VBtn, {
                                                                  onClick: ($event) => downloadFiles(item, cart, index),
                                                                  loading: unref(isDownloading) && unref(selectedIndex) == index,
                                                                  disabled: item.order_details.download_count == 0,
                                                                  variant: "text",
                                                                  icon: "mdi-file-download"
                                                                }, null, 8, ["onClick", "loading", "disabled"])
                                                              ])
                                                            ]);
                                                          }), 128))
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTable, null, {
                                                    default: withCtx(() => [
                                                      createVNode("thead", { class: "bg-grey-lighten-2" }, [
                                                        createVNode("tr", null, [
                                                          createVNode("th", null, "Name"),
                                                          createVNode("th", null, "Price"),
                                                          createVNode("th", null, "Download Previlige"),
                                                          createVNode("th", null, "Download")
                                                        ])
                                                      ]),
                                                      createVNode("tbody", null, [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(item.carts, (cart, index) => {
                                                          return openBlock(), createBlock("tr", {
                                                            key: cart.id
                                                          }, [
                                                            createVNode("td", null, toDisplayString(cart.manual.title), 1),
                                                            createVNode("td", null, toDisplayString(cart.price), 1),
                                                            createVNode("td", null, toDisplayString(item.order_details.download_count), 1),
                                                            createVNode("td", null, [
                                                              createVNode(VBtn, {
                                                                onClick: ($event) => downloadFiles(item, cart, index),
                                                                loading: unref(isDownloading) && unref(selectedIndex) == index,
                                                                disabled: item.order_details.download_count == 0,
                                                                variant: "text",
                                                                icon: "mdi-file-download"
                                                              }, null, 8, ["onClick", "loading", "disabled"])
                                                            ])
                                                          ]);
                                                        }), 128))
                                                      ])
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
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createVNode(VTable, null, {
                                                  default: withCtx(() => [
                                                    createVNode("thead", { class: "bg-grey-lighten-2" }, [
                                                      createVNode("tr", null, [
                                                        createVNode("th", null, "Name"),
                                                        createVNode("th", null, "Price"),
                                                        createVNode("th", null, "Download Previlige"),
                                                        createVNode("th", null, "Download")
                                                      ])
                                                    ]),
                                                    createVNode("tbody", null, [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(item.carts, (cart, index) => {
                                                        return openBlock(), createBlock("tr", {
                                                          key: cart.id
                                                        }, [
                                                          createVNode("td", null, toDisplayString(cart.manual.title), 1),
                                                          createVNode("td", null, toDisplayString(cart.price), 1),
                                                          createVNode("td", null, toDisplayString(item.order_details.download_count), 1),
                                                          createVNode("td", null, [
                                                            createVNode(VBtn, {
                                                              onClick: ($event) => downloadFiles(item, cart, index),
                                                              loading: unref(isDownloading) && unref(selectedIndex) == index,
                                                              disabled: item.order_details.download_count == 0,
                                                              variant: "text",
                                                              icon: "mdi-file-download"
                                                            }, null, 8, ["onClick", "loading", "disabled"])
                                                          ])
                                                        ]);
                                                      }), 128))
                                                    ])
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
                                  } else {
                                    return [
                                      createVNode(VListItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createVNode(VTable, null, {
                                                default: withCtx(() => [
                                                  createVNode("thead", { class: "bg-grey-lighten-2" }, [
                                                    createVNode("tr", null, [
                                                      createVNode("th", null, "Name"),
                                                      createVNode("th", null, "Price"),
                                                      createVNode("th", null, "Download Previlige"),
                                                      createVNode("th", null, "Download")
                                                    ])
                                                  ]),
                                                  createVNode("tbody", null, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(item.carts, (cart, index) => {
                                                      return openBlock(), createBlock("tr", {
                                                        key: cart.id
                                                      }, [
                                                        createVNode("td", null, toDisplayString(cart.manual.title), 1),
                                                        createVNode("td", null, toDisplayString(cart.price), 1),
                                                        createVNode("td", null, toDisplayString(item.order_details.download_count), 1),
                                                        createVNode("td", null, [
                                                          createVNode(VBtn, {
                                                            onClick: ($event) => downloadFiles(item, cart, index),
                                                            loading: unref(isDownloading) && unref(selectedIndex) == index,
                                                            disabled: item.order_details.download_count == 0,
                                                            variant: "text",
                                                            icon: "mdi-file-download"
                                                          }, null, 8, ["onClick", "loading", "disabled"])
                                                        ])
                                                      ]);
                                                    }), 128))
                                                  ])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createVNode(VTable, null, {
                                              default: withCtx(() => [
                                                createVNode("thead", { class: "bg-grey-lighten-2" }, [
                                                  createVNode("tr", null, [
                                                    createVNode("th", null, "Name"),
                                                    createVNode("th", null, "Price"),
                                                    createVNode("th", null, "Download Previlige"),
                                                    createVNode("th", null, "Download")
                                                  ])
                                                ]),
                                                createVNode("tbody", null, [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(item.carts, (cart, index) => {
                                                    return openBlock(), createBlock("tr", {
                                                      key: cart.id
                                                    }, [
                                                      createVNode("td", null, toDisplayString(cart.manual.title), 1),
                                                      createVNode("td", null, toDisplayString(cart.price), 1),
                                                      createVNode("td", null, toDisplayString(item.order_details.download_count), 1),
                                                      createVNode("td", null, [
                                                        createVNode(VBtn, {
                                                          onClick: ($event) => downloadFiles(item, cart, index),
                                                          loading: unref(isDownloading) && unref(selectedIndex) == index,
                                                          disabled: item.order_details.download_count == 0,
                                                          variant: "text",
                                                          icon: "mdi-file-download"
                                                        }, null, 8, ["onClick", "loading", "disabled"])
                                                      ])
                                                    ]);
                                                  }), 128))
                                                ])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            variant: "text",
                            class: "text-none",
                            id: `download-activator-${item.id}`
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, null, {
                                default: withCtx(() => [
                                  createTextVNode(" mdi-file-download ")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Download Manuals ")
                            ]),
                            _: 2
                          }, 1032, ["id"]),
                          createVNode(VMenu, {
                            activator: `#download-activator-${item.id}`,
                            "close-on-content-click": false,
                            "max-height": "300px"
                          }, {
                            default: withCtx(() => [
                              createVNode(VList, null, {
                                default: withCtx(() => [
                                  createVNode(VListItem, null, {
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createVNode(VTable, null, {
                                            default: withCtx(() => [
                                              createVNode("thead", { class: "bg-grey-lighten-2" }, [
                                                createVNode("tr", null, [
                                                  createVNode("th", null, "Name"),
                                                  createVNode("th", null, "Price"),
                                                  createVNode("th", null, "Download Previlige"),
                                                  createVNode("th", null, "Download")
                                                ])
                                              ]),
                                              createVNode("tbody", null, [
                                                (openBlock(true), createBlock(Fragment, null, renderList(item.carts, (cart, index) => {
                                                  return openBlock(), createBlock("tr", {
                                                    key: cart.id
                                                  }, [
                                                    createVNode("td", null, toDisplayString(cart.manual.title), 1),
                                                    createVNode("td", null, toDisplayString(cart.price), 1),
                                                    createVNode("td", null, toDisplayString(item.order_details.download_count), 1),
                                                    createVNode("td", null, [
                                                      createVNode(VBtn, {
                                                        onClick: ($event) => downloadFiles(item, cart, index),
                                                        loading: unref(isDownloading) && unref(selectedIndex) == index,
                                                        disabled: item.order_details.download_count == 0,
                                                        variant: "text",
                                                        icon: "mdi-file-download"
                                                      }, null, 8, ["onClick", "loading", "disabled"])
                                                    ])
                                                  ]);
                                                }), 128))
                                              ])
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
                            ]),
                            _: 2
                          }, 1032, ["activator"])
                        ];
                      }
                    }),
                    "expanded-row": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(item.carts, (cart, index) => {
                          _push4(`<tr class="bg-grey-lighten-2"${_scopeId3}><td${_scopeId3}>${ssrInterpolate(cart.manual.title)}</td><td${_scopeId3}>${ssrInterpolate(cart.price)}</td><td${_scopeId3}>${ssrInterpolate(cart.quantity)}</td><td${_scopeId3}>${ssrInterpolate(item.order_details.download_count)}</td><td${_scopeId3}>`);
                          _push4(ssrRenderComponent(VTooltip, { text: "Download Manual Files" }, {
                            activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VBtn, mergeProps({
                                  onClick: ($event) => downloadFiles(item, cart, index),
                                  loading: unref(isDownloading) && unref(selectedIndex) == index,
                                  disabled: item.order_details.download_count == 0,
                                  variant: "text",
                                  icon: "mdi-file-download",
                                  ref_for: true
                                }, props), null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtn, mergeProps({
                                    onClick: ($event) => downloadFiles(item, cart, index),
                                    loading: unref(isDownloading) && unref(selectedIndex) == index,
                                    disabled: item.order_details.download_count == 0,
                                    variant: "text",
                                    icon: "mdi-file-download",
                                    ref_for: true
                                  }, props), null, 16, ["onClick", "loading", "disabled"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</td></tr>`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(item.carts, (cart, index) => {
                            return openBlock(), createBlock("tr", {
                              class: "bg-grey-lighten-2",
                              key: cart.id
                            }, [
                              createVNode("td", null, toDisplayString(cart.manual.title), 1),
                              createVNode("td", null, toDisplayString(cart.price), 1),
                              createVNode("td", null, toDisplayString(cart.quantity), 1),
                              createVNode("td", null, toDisplayString(item.order_details.download_count), 1),
                              createVNode("td", null, [
                                createVNode(VTooltip, { text: "Download Manual Files" }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(VBtn, mergeProps({
                                      onClick: ($event) => downloadFiles(item, cart, index),
                                      loading: unref(isDownloading) && unref(selectedIndex) == index,
                                      disabled: item.order_details.download_count == 0,
                                      variant: "text",
                                      icon: "mdi-file-download",
                                      ref_for: true
                                    }, props), null, 16, ["onClick", "loading", "disabled"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDataTableServer, {
                      expanded: unref(expanded),
                      "items-per-page": unref(itemsPerPage),
                      "items-per-page-options": [5, 10, 25, 50],
                      headers: unref(headers),
                      items: unref(ordersLists),
                      "items-length": unref(totalItems),
                      loading: unref(fetching),
                      "item-value": "order_number",
                      "onUpdate:options": getOrderLists
                    }, {
                      "item.order_number": withCtx(({ value }) => [
                        createVNode("p", { class: "font-weight-bold" }, toDisplayString(value), 1)
                      ]),
                      "item.payment_status": withCtx(({ value }) => [
                        createVNode("p", { class: "font-weight-bold text-success" }, toDisplayString(value.toUpperCase()), 1)
                      ]),
                      "item.actions": withCtx(({ item }) => [
                        createVNode(VBtn, {
                          variant: "text",
                          class: "text-none",
                          id: `download-activator-${item.id}`
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, null, {
                              default: withCtx(() => [
                                createTextVNode(" mdi-file-download ")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Download Manuals ")
                          ]),
                          _: 2
                        }, 1032, ["id"]),
                        createVNode(VMenu, {
                          activator: `#download-activator-${item.id}`,
                          "close-on-content-click": false,
                          "max-height": "300px"
                        }, {
                          default: withCtx(() => [
                            createVNode(VList, null, {
                              default: withCtx(() => [
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createVNode(VTable, null, {
                                          default: withCtx(() => [
                                            createVNode("thead", { class: "bg-grey-lighten-2" }, [
                                              createVNode("tr", null, [
                                                createVNode("th", null, "Name"),
                                                createVNode("th", null, "Price"),
                                                createVNode("th", null, "Download Previlige"),
                                                createVNode("th", null, "Download")
                                              ])
                                            ]),
                                            createVNode("tbody", null, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(item.carts, (cart, index) => {
                                                return openBlock(), createBlock("tr", {
                                                  key: cart.id
                                                }, [
                                                  createVNode("td", null, toDisplayString(cart.manual.title), 1),
                                                  createVNode("td", null, toDisplayString(cart.price), 1),
                                                  createVNode("td", null, toDisplayString(item.order_details.download_count), 1),
                                                  createVNode("td", null, [
                                                    createVNode(VBtn, {
                                                      onClick: ($event) => downloadFiles(item, cart, index),
                                                      loading: unref(isDownloading) && unref(selectedIndex) == index,
                                                      disabled: item.order_details.download_count == 0,
                                                      variant: "text",
                                                      icon: "mdi-file-download"
                                                    }, null, 8, ["onClick", "loading", "disabled"])
                                                  ])
                                                ]);
                                              }), 128))
                                            ])
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
                          ]),
                          _: 2
                        }, 1032, ["activator"])
                      ]),
                      "expanded-row": withCtx(({ item }) => [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.carts, (cart, index) => {
                          return openBlock(), createBlock("tr", {
                            class: "bg-grey-lighten-2",
                            key: cart.id
                          }, [
                            createVNode("td", null, toDisplayString(cart.manual.title), 1),
                            createVNode("td", null, toDisplayString(cart.price), 1),
                            createVNode("td", null, toDisplayString(cart.quantity), 1),
                            createVNode("td", null, toDisplayString(item.order_details.download_count), 1),
                            createVNode("td", null, [
                              createVNode(VTooltip, { text: "Download Manual Files" }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(VBtn, mergeProps({
                                    onClick: ($event) => downloadFiles(item, cart, index),
                                    loading: unref(isDownloading) && unref(selectedIndex) == index,
                                    disabled: item.order_details.download_count == 0,
                                    variant: "text",
                                    icon: "mdi-file-download",
                                    ref_for: true
                                  }, props), null, 16, ["onClick", "loading", "disabled"])
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["expanded", "items-per-page", "headers", "items", "items-length", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardTitle, { class: "mb-5" }, {
                default: withCtx(() => [
                  createTextVNode("Orders")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VDataTableServer, {
                    expanded: unref(expanded),
                    "items-per-page": unref(itemsPerPage),
                    "items-per-page-options": [5, 10, 25, 50],
                    headers: unref(headers),
                    items: unref(ordersLists),
                    "items-length": unref(totalItems),
                    loading: unref(fetching),
                    "item-value": "order_number",
                    "onUpdate:options": getOrderLists
                  }, {
                    "item.order_number": withCtx(({ value }) => [
                      createVNode("p", { class: "font-weight-bold" }, toDisplayString(value), 1)
                    ]),
                    "item.payment_status": withCtx(({ value }) => [
                      createVNode("p", { class: "font-weight-bold text-success" }, toDisplayString(value.toUpperCase()), 1)
                    ]),
                    "item.actions": withCtx(({ item }) => [
                      createVNode(VBtn, {
                        variant: "text",
                        class: "text-none",
                        id: `download-activator-${item.id}`
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-file-download ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Download Manuals ")
                        ]),
                        _: 2
                      }, 1032, ["id"]),
                      createVNode(VMenu, {
                        activator: `#download-activator-${item.id}`,
                        "close-on-content-click": false,
                        "max-height": "300px"
                      }, {
                        default: withCtx(() => [
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createVNode(VTable, null, {
                                        default: withCtx(() => [
                                          createVNode("thead", { class: "bg-grey-lighten-2" }, [
                                            createVNode("tr", null, [
                                              createVNode("th", null, "Name"),
                                              createVNode("th", null, "Price"),
                                              createVNode("th", null, "Download Previlige"),
                                              createVNode("th", null, "Download")
                                            ])
                                          ]),
                                          createVNode("tbody", null, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.carts, (cart, index) => {
                                              return openBlock(), createBlock("tr", {
                                                key: cart.id
                                              }, [
                                                createVNode("td", null, toDisplayString(cart.manual.title), 1),
                                                createVNode("td", null, toDisplayString(cart.price), 1),
                                                createVNode("td", null, toDisplayString(item.order_details.download_count), 1),
                                                createVNode("td", null, [
                                                  createVNode(VBtn, {
                                                    onClick: ($event) => downloadFiles(item, cart, index),
                                                    loading: unref(isDownloading) && unref(selectedIndex) == index,
                                                    disabled: item.order_details.download_count == 0,
                                                    variant: "text",
                                                    icon: "mdi-file-download"
                                                  }, null, 8, ["onClick", "loading", "disabled"])
                                                ])
                                              ]);
                                            }), 128))
                                          ])
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
                        ]),
                        _: 2
                      }, 1032, ["activator"])
                    ]),
                    "expanded-row": withCtx(({ item }) => [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.carts, (cart, index) => {
                        return openBlock(), createBlock("tr", {
                          class: "bg-grey-lighten-2",
                          key: cart.id
                        }, [
                          createVNode("td", null, toDisplayString(cart.manual.title), 1),
                          createVNode("td", null, toDisplayString(cart.price), 1),
                          createVNode("td", null, toDisplayString(cart.quantity), 1),
                          createVNode("td", null, toDisplayString(item.order_details.download_count), 1),
                          createVNode("td", null, [
                            createVNode(VTooltip, { text: "Download Manual Files" }, {
                              activator: withCtx(({ props }) => [
                                createVNode(VBtn, mergeProps({
                                  onClick: ($event) => downloadFiles(item, cart, index),
                                  loading: unref(isDownloading) && unref(selectedIndex) == index,
                                  disabled: item.order_details.download_count == 0,
                                  variant: "text",
                                  icon: "mdi-file-download",
                                  ref_for: true
                                }, props), null, 16, ["onClick", "loading", "disabled"])
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["expanded", "items-per-page", "headers", "items", "items-length", "loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=orders.vue.mjs.map
