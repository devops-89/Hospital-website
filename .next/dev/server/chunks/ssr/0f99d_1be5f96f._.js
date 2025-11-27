module.exports = [
"[project]/Downloads/Archive/node_modules/next/dist/shared/lib/image-external.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Downloads/Archive/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/Downloads/Archive/node_modules/next/dist/shared/lib/get-img-props.js [app-ssr] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/Downloads/Archive/node_modules/next/dist/client/image-component.js [app-ssr] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Downloads/Archive/node_modules/next/dist/shared/lib/image-loader.js [app-ssr] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", {
            "deviceSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 640),
                ("TURBOPACK compile-time value", 750),
                ("TURBOPACK compile-time value", 828),
                ("TURBOPACK compile-time value", 1080),
                ("TURBOPACK compile-time value", 1200),
                ("TURBOPACK compile-time value", 1920),
                ("TURBOPACK compile-time value", 2048),
                ("TURBOPACK compile-time value", 3840)
            ]),
            "imageSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 32),
                ("TURBOPACK compile-time value", 48),
                ("TURBOPACK compile-time value", 64),
                ("TURBOPACK compile-time value", 96),
                ("TURBOPACK compile-time value", 128),
                ("TURBOPACK compile-time value", 256),
                ("TURBOPACK compile-time value", 384)
            ]),
            "qualities": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 75),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70)
            ]),
            "path": ("TURBOPACK compile-time value", "/_next/image"),
            "loader": ("TURBOPACK compile-time value", "default"),
            "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
            "unoptimized": ("TURBOPACK compile-time value", false),
            "domains": ("TURBOPACK compile-time value", []),
            "remotePatterns": ("TURBOPACK compile-time value", []),
            "localPatterns": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", {
                    "pathname": ("TURBOPACK compile-time value", "**"),
                    "search": ("TURBOPACK compile-time value", "")
                })
            ])
        })
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}),
"[project]/Downloads/Archive/node_modules/next/image.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Downloads/Archive/node_modules/next/dist/shared/lib/image-external.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/Archive/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Send
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Archive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Archive/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }
    ],
    [
        "path",
        {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }
    ]
];
const Send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Archive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("send", __iconNode);
;
 //# sourceMappingURL=send.js.map
}),
"[project]/Downloads/Archive/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Send",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Archive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Archive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Archive/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=0f99d_1be5f96f._.js.map