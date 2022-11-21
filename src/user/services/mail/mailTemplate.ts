export const getMailTemplate = (username:string, link: string) => {

    return`
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!-- <link rel="stylesheet" href="../dist/output.css"> -->
        <style>
            /*
! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com
*/

            /*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

            *,
            ::before,
            ::after {
                box-sizing: border-box;
                /* 1 */
                border-width: 0;
                /* 2 */
                border-style: solid;
                /* 2 */
                border-color: #e5e7eb;
                /* 2 */
            }

            ::before,
            ::after {
                --tw-content: "";
            }

            /*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
*/

            html {
                line-height: 1.5;
                /* 1 */
                -webkit-text-size-adjust: 100%;
                /* 2 */
                -moz-tab-size: 4;
                /* 3 */
                -o-tab-size: 4;
                tab-size: 4;
                /* 3 */
                font-family: ui-sans-serif, system-ui, -apple-system,
                    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
                    Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
                    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                /* 4 */
                font-feature-settings: normal;
                /* 5 */
            }

            /*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

            body {
                margin: 0;
                /* 1 */
                line-height: inherit;
                /* 2 */
            }

            /*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

            hr {
                height: 0;
                /* 1 */
                color: inherit;
                /* 2 */
                border-top-width: 1px;
                /* 3 */
            }

            /*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

            abbr:where([title]) {
                -webkit-text-decoration: underline dotted;
                text-decoration: underline dotted;
            }

            /*
Remove the default font size and weight for headings.
*/

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-size: inherit;
                font-weight: inherit;
            }

            /*
Reset links to optimize for opt-in styling instead of opt-out.
*/

            a {
                color: inherit;
                text-decoration: inherit;
            }

            /*
Add the correct font weight in Edge and Safari.
*/

            b,
            strong {
                font-weight: bolder;
            }

            /*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

            code,
            kbd,
            samp,
            pre {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
                    Consolas, "Liberation Mono", "Courier New", monospace;
                /* 1 */
                font-size: 1em;
                /* 2 */
            }

            /*
Add the correct font size in all browsers.
*/

            small {
                font-size: 80%;
            }

            /*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

            sub,
            sup {
                font-size: 75%;
                line-height: 0;
                position: relative;
                /* vertical-align: baseline; */
            }

            sub {
                bottom: -0.25em;
            }

            sup {
                top: -0.5em;
            }

            /*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

            table {
                text-indent: 0;
                /* 1 */
                border-color: inherit;
                /* 2 */
                border-collapse: collapse;
                /* 3 */
            }

            /*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

            button,
            input,
            optgroup,
            select,
            textarea {
                font-family: inherit;
                /* 1 */
                font-size: 100%;
                /* 1 */
                font-weight: inherit;
                /* 1 */
                line-height: inherit;
                /* 1 */
                color: inherit;
                /* 1 */
                margin: 0;
                /* 2 */
                padding: 0;
                /* 3 */
            }

            /*
Remove the inheritance of text transform in Edge and Firefox.
*/

            button,
            select {
                text-transform: none;
            }

            /*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

            button,
            [type="button"],
            [type="reset"],
            [type="submit"] {
                -webkit-appearance: button;
                /* 1 */
                background-color: transparent;
                /* 2 */
                background-image: none;
                /* 2 */
            }

            /*
Use the modern Firefox focus style for all focusable elements.
*/

            :-moz-focusring {
                outline: auto;
            }

            /*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

            :-moz-ui-invalid {
                box-shadow: none;
            }

            /*
Add the correct vertical alignment in Chrome and Firefox.
*/

            progress {
                /* vertical-align: baseline; */
            }

            /*
Correct the cursor style of increment and decrement buttons in Safari.
*/

            ::-webkit-inner-spin-button,
            ::-webkit-outer-spin-button {
                height: auto;
            }

            /*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

            [type="search"] {
                -webkit-appearance: textfield;
                /* 1 */
                outline-offset: -2px;
                /* 2 */
            }

            /*
Remove the inner padding in Chrome and Safari on macOS.
*/

            ::-webkit-search-decoration {
                -webkit-appearance: none;
            }

            /*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

            ::-webkit-file-upload-button {
                -webkit-appearance: button;
                /* 1 */
                font: inherit;
                /* 2 */
            }

            /*
Add the correct display in Chrome and Safari.
*/

            summary {
                display: list-item;
            }

            /*
Removes the default spacing and border for appropriate elements.
*/

            blockquote,
            dl,
            dd,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            hr,
            figure,
            p,
            pre {
                margin: 0;
            }

            fieldset {
                margin: 0;
                padding: 0;
            }

            legend {
                padding: 0;
            }

            ol,
            ul,
            menu {
                list-style: none;
                margin: 0;
                padding: 0;
            }

            /*
Prevent resizing textareas horizontally by default.
*/

            textarea {
                resize: vertical;
            }

            /*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

            input::-moz-placeholder,
            textarea::-moz-placeholder {
                opacity: 1;
                /* 1 */
                color: #9ca3af;
                /* 2 */
            }

            input::placeholder,
            textarea::placeholder {
                opacity: 1;
                /* 1 */
                color: #9ca3af;
                /* 2 */
            }

            /*
Set the default cursor for buttons.
*/

            button,
            [role="button"] {
                cursor: pointer;
            }

            /*
Make sure disabled buttons don't get the pointer cursor.
*/

            :disabled {
                cursor: default;
            }

            /*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

            img,
            svg,
            video,
            canvas,
            audio,
            iframe,
            embed,
            object {
                display: block;
                /* 1 */
                /* vertical-align: middle; */
                /* 2 */
            }

            /*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

            img,
            video {
                max-width: 100%;
                height: auto;
            }

            /* Make elements with the HTML hidden attribute stay hidden by default */

            [hidden] {
                display: none;
            }

            :root,
            [data-theme] {
                background-color: hsla(var(--b1) / var(--tw-bg-opacity, 1));
                color: hsla(var(--bc) / var(--tw-text-opacity, 1));
            }

            html {
                -webkit-tap-highlight-color: transparent;
            }

            :root {
                color-scheme: dark;
                --pf: 210 64% 24%;
                --sf: 200 13% 44%;
                --af: 13 80% 48%;
                --nf: 213 14% 13%;
                --b2: 0 0% 11%;
                --b3: 0 0% 10%;
                --bc: 0 0% 83%;
                --pc: 210 100% 86%;
                --sc: 200 100% 11%;
                --ac: 13 100% 12%;
                --nc: 213 28% 83%;
                --inc: 199 100% 88%;
                --suc: 144 100% 11%;
                --wac: 39 100% 12%;
                --erc: 6 100% 89%;
                --animation-btn: 0.25s;
                --animation-input: 0.2s;
                --btn-text-case: uppercase;
                --btn-focus-scale: 0.95;
                --border-btn: 1px;
                --tab-border: 1px;
                --tab-radius: 0.5rem;
                --p: 210 64% 31%;
                --s: 200 13% 55%;
                --a: 13 80% 60%;
                --n: 213 14% 16%;
                --b1: 0 0% 13%;
                --in: 199 100% 42%;
                --su: 144 31% 56%;
                --wa: 39 64% 60%;
                --er: 6 56% 43%;
                --rounded-box: 0.25rem;
                --rounded-btn: 0.125rem;
                --rounded-badge: 0.125rem;
            }

            *,
            ::before,
            ::after {
                --tw-border-spacing-x: 0;
                --tw-border-spacing-y: 0;
                --tw-translate-x: 0;
                --tw-translate-y: 0;
                --tw-rotate: 0;
                --tw-skew-x: 0;
                --tw-skew-y: 0;
                --tw-scale-x: 1;
                --tw-scale-y: 1;
                --tw-pan-x: ;
                --tw-pan-y: ;
                --tw-pinch-zoom: ;
                --tw-scroll-snap-strictness: proximity;
                --tw-ordinal: ;
                --tw-slashed-zero: ;
                --tw-numeric-figure: ;
                --tw-numeric-spacing: ;
                --tw-numeric-fraction: ;
                --tw-ring-inset: ;
                --tw-ring-offset-width: 0px;
                --tw-ring-offset-color: #fff;
                --tw-ring-color: rgb(59 130 246 / 0.5);
                --tw-ring-offset-shadow: 0 0 #0000;
                --tw-ring-shadow: 0 0 #0000;
                --tw-shadow: 0 0 #0000;
                --tw-shadow-colored: 0 0 #0000;
                --tw-blur: ;
                --tw-brightness: ;
                --tw-contrast: ;
                --tw-grayscale: ;
                --tw-hue-rotate: ;
                --tw-invert: ;
                --tw-saturate: ;
                --tw-sepia: ;
                --tw-drop-shadow: ;
                --tw-backdrop-blur: ;
                --tw-backdrop-brightness: ;
                --tw-backdrop-contrast: ;
                --tw-backdrop-grayscale: ;
                --tw-backdrop-hue-rotate: ;
                --tw-backdrop-invert: ;
                --tw-backdrop-opacity: ;
                --tw-backdrop-saturate: ;
                --tw-backdrop-sepia: ;
            }

            ::backdrop {
                --tw-border-spacing-x: 0;
                --tw-border-spacing-y: 0;
                --tw-translate-x: 0;
                --tw-translate-y: 0;
                --tw-rotate: 0;
                --tw-skew-x: 0;
                --tw-skew-y: 0;
                --tw-scale-x: 1;
                --tw-scale-y: 1;
                --tw-pan-x: ;
                --tw-pan-y: ;
                --tw-pinch-zoom: ;
                --tw-scroll-snap-strictness: proximity;
                --tw-ordinal: ;
                --tw-slashed-zero: ;
                --tw-numeric-figure: ;
                --tw-numeric-spacing: ;
                --tw-numeric-fraction: ;
                --tw-ring-inset: ;
                --tw-ring-offset-width: 0px;
                --tw-ring-offset-color: #fff;
                --tw-ring-color: rgb(59 130 246 / 0.5);
                --tw-ring-offset-shadow: 0 0 #0000;
                --tw-ring-shadow: 0 0 #0000;
                --tw-shadow: 0 0 #0000;
                --tw-shadow-colored: 0 0 #0000;
                --tw-blur: ;
                --tw-brightness: ;
                --tw-contrast: ;
                --tw-grayscale: ;
                --tw-hue-rotate: ;
                --tw-invert: ;
                --tw-saturate: ;
                --tw-sepia: ;
                --tw-drop-shadow: ;
                --tw-backdrop-blur: ;
                --tw-backdrop-brightness: ;
                --tw-backdrop-contrast: ;
                --tw-backdrop-grayscale: ;
                --tw-backdrop-hue-rotate: ;
                --tw-backdrop-invert: ;
                --tw-backdrop-opacity: ;
                --tw-backdrop-saturate: ;
                --tw-backdrop-sepia: ;
            }

            .avatar.placeholder > div {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .badge {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, -webkit-backdrop-filter;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, backdrop-filter;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, backdrop-filter, -webkit-backdrop-filter;
                transition-duration: 200ms;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                height: 1.25rem;
                font-size: 0.875rem;
                line-height: 1.25rem;
                width: -moz-fit-content;
                width: fit-content;
                padding-left: 0.563rem;
                padding-right: 0.563rem;
                border-width: 1px;
                --tw-border-opacity: 1;
                border-color: hsl(var(--n) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(var(--n) / var(--tw-bg-opacity));
                --tw-text-opacity: 1;
                color: hsl(var(--nc) / var(--tw-text-opacity));
                border-radius: var(--rounded-badge, 1.9rem);
            }

            .btn {
                display: inline-flex;
                flex-shrink: 0;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                border-color: transparent;
                border-color: hsl(var(--n) / var(--tw-border-opacity));
                text-align: center;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, -webkit-backdrop-filter;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, backdrop-filter;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, backdrop-filter, -webkit-backdrop-filter;
                transition-duration: 200ms;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                border-radius: var(--rounded-btn, 0.5rem);
                height: 3rem;
                padding-left: 1rem;
                padding-right: 1rem;
                font-size: 0.875rem;
                line-height: 1.25rem;
                line-height: 1em;
                min-height: 3rem;
                font-weight: 600;
                text-transform: uppercase;
                text-transform: var(--btn-text-case, uppercase);
                text-decoration-line: none;
                border-width: var(--border-btn, 1px);
                animation: button-pop var(--animation-btn, 0.25s) ease-out;
                --tw-border-opacity: 1;
                --tw-bg-opacity: 1;
                background-color: hsl(var(--n) / var(--tw-bg-opacity));
                --tw-text-opacity: 1;
                color: hsl(var(--nc) / var(--tw-text-opacity));
            }

            .btn-disabled,
            .btn[disabled] {
                pointer-events: none;
            }

            .btn.loading,
            .btn.loading:hover {
                pointer-events: none;
            }

            .btn.loading:before {
                margin-right: 0.5rem;
                height: 1rem;
                width: 1rem;
                border-radius: 9999px;
                border-width: 2px;
                animation: spin 2s linear infinite;
                content: "";
                border-top-color: transparent;
                border-left-color: transparent;
                border-bottom-color: currentColor;
                border-right-color: currentColor;
            }

            @media (prefers-reduced-motion: reduce) {
                .btn.loading:before {
                    animation: spin 10s linear infinite;
                }
            }

            @keyframes spin {
                from {
                    transform: rotate(0deg);
                }

                to {
                    transform: rotate(360deg);
                }
            }

            .btn-group {
                display: inline-flex;
            }

            .btn-group > input[type="radio"].btn {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
            }

            .btn-group > input[type="radio"].btn:before {
                content: attr(data-title);
            }

            .card {
                position: relative;
                display: flex;
                flex-direction: column;
                border-radius: var(--rounded-box, 1rem);
            }

            .card:focus {
                outline: 2px solid transparent;
                outline-offset: 2px;
            }

            .card-body {
                display: flex;
                flex: 1 1 auto;
                flex-direction: column;
                padding: var(--padding-card, 2rem);
                gap: 0.5rem;
            }

            .card-body :where(p) {
                flex-grow: 1;
            }

            .card-actions {
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
                gap: 0.5rem;
            }

            .card figure {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .card.image-full {
                display: grid;
            }

            .card.image-full:before {
                position: relative;
                content: "";
                z-index: 10;
                --tw-bg-opacity: 1;
                background-color: hsl(var(--n) / var(--tw-bg-opacity));
                opacity: 0.75;
                border-radius: var(--rounded-box, 1rem);
            }

            .card.image-full:before,
            .card.image-full > * {
                grid-column-start: 1;
                grid-row-start: 1;
            }

            .card.image-full > figure img {
                height: 100%;
                -o-object-fit: cover;
                object-fit: cover;
            }

            .card.image-full > .card-body {
                position: relative;
                z-index: 20;
                --tw-text-opacity: 1;
                color: hsl(var(--nc) / var(--tw-text-opacity));
            }

            .collapse.collapse {
                visibility: visible;
            }

            .collapse {
                position: relative;
                display: grid;
                overflow: hidden;
            }

            .collapse-title,
            .collapse > input[type="checkbox"],
            .collapse-content {
                grid-column-start: 1;
                grid-row-start: 1;
            }

            .collapse > input[type="checkbox"] {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                opacity: 0;
            }

            .collapse-open .collapse-content,
            .collapse:focus:not(.collapse-close) .collapse-content,
            .collapse:not(.collapse-close)
                input[type="checkbox"]:checked
                ~ .collapse-content {
                max-height: none;
            }

            :where(.drawer-toggle ~ .drawer-content) {
                height: inherit;
            }

            .drawer-toggle ~ .drawer-content {
                z-index: 0;
                grid-column-start: 1;
                grid-row-start: 1;
                overflow-y: auto;
                transition-property: all;
                transition-duration: 300ms;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            }

            [dir="rtl"]
                .drawer.drawer-end
                > .drawer-toggle:checked
                ~ .drawer-content {
                --tw-translate-x: 0.5rem;
            }

            @media (min-width: 1024px) {
                .drawer-mobile {
                    grid-auto-columns: max-content auto;
                }

                .drawer-mobile > .drawer-toggle ~ .drawer-content {
                    height: auto;
                }

                @media (min-width: 1024px) {
                    .drawer-mobile > .drawer-toggle ~ .drawer-content {
                        grid-column-start: 2;
                    }

                    .drawer-mobile
                        > .drawer-toggle
                        ~ .drawer-side
                        > .drawer-overlay {
                        visibility: visible;
                    }

                    .drawer-mobile
                        > .drawer-toggle
                        ~ .drawer-side
                        > .drawer-overlay
                        + * {
                        --tw-translate-x: 0px;
                        transform: translate(
                                var(--tw-translate-x),
                                var(--tw-translate-y)
                            )
                            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
                            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
                            scaleY(var(--tw-scale-y));
                    }

                    .drawer-mobile.drawer-end
                        > .drawer-toggle
                        ~ .drawer-content {
                        grid-column-start: 1;
                    }

                    .drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-side {
                        grid-column-start: 2;
                    }

                    .drawer-mobile.drawer-end
                        > .drawer-toggle
                        ~ .drawer-side
                        > .drawer-overlay {
                        visibility: visible;
                    }

                    .drawer-mobile.drawer-end
                        > .drawer-toggle
                        ~ .drawer-side
                        > .drawer-overlay
                        + * {
                        --tw-translate-x: 0px;
                        transform: translate(
                                var(--tw-translate-x),
                                var(--tw-translate-y)
                            )
                            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
                            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
                            scaleY(var(--tw-scale-y));
                    }
                }

                .drawer-mobile > .drawer-toggle ~ .drawer-side {
                    overflow-y: auto;
                }

                .drawer-mobile.drawer-end {
                    grid-auto-columns: auto max-content;
                    direction: ltr;
                }

                .drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-content {
                    height: auto;
                }

                .drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-side {
                    overflow-y: auto;
                }

                .drawer-mobile > .drawer-toggle:checked ~ .drawer-content {
                    --tw-translate-x: 0px;
                    transform: translate(
                            var(--tw-translate-x),
                            var(--tw-translate-y)
                        )
                        rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
                        skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
                        scaleY(var(--tw-scale-y));
                }
            }

            .input {
                flex-shrink: 1;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, -webkit-backdrop-filter;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, backdrop-filter;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, backdrop-filter, -webkit-backdrop-filter;
                transition-duration: 200ms;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                height: 3rem;
                padding-left: 1rem;
                padding-right: 1rem;
                font-size: 1rem;
                line-height: 2;
                line-height: 1.5rem;
                border-width: 1px;
                border-color: hsl(var(--bc) / var(--tw-border-opacity));
                --tw-border-opacity: 0;
                --tw-bg-opacity: 1;
                background-color: hsl(var(--b1) / var(--tw-bg-opacity));
                border-radius: var(--rounded-btn, 0.5rem);
            }

            .input-group > .input {
                isolation: isolate;
            }

            .input-group > *,
            .input-group > .input,
            .input-group > .select {
                border-radius: 0px;
            }

            .kbd {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-width: 1px;
                border-color: hsl(var(--bc) / var(--tw-border-opacity));
                --tw-border-opacity: 0.2;
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--b2, var(--b1)) / var(--tw-bg-opacity)
                );
                padding-left: 0.5rem;
                padding-right: 0.5rem;
                border-radius: var(--rounded-btn, 0.5rem);
                border-bottom-width: 2px;
                min-height: 2.2em;
                min-width: 2.2em;
            }

            .link {
                cursor: pointer;
                text-decoration-line: underline;
            }

            .menu {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
            }

            .menu.horizontal {
                display: inline-flex;
                flex-direction: row;
            }

            .menu.horizontal :where(li) {
                flex-direction: row;
            }

            .menu :where(li) {
                position: relative;
                display: flex;
                flex-shrink: 0;
                flex-direction: column;
                flex-wrap: wrap;
                align-items: stretch;
            }

            .menu :where(li:not(.menu-title)) > :where(*:not(ul)) {
                display: flex;
            }

            .menu
                :where(li:not(.disabled):not(.menu-title))
                > :where(*:not(ul)) {
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
                align-items: center;
                outline: 2px solid transparent;
                outline-offset: 2px;
            }

            .menu > :where(li > *:not(ul):focus) {
                outline: 2px solid transparent;
                outline-offset: 2px;
            }

            .menu > :where(li.disabled > *:not(ul):focus) {
                cursor: auto;
            }

            .menu > :where(li) :where(ul) {
                display: flex;
                flex-direction: column;
                align-items: stretch;
            }

            .menu > :where(li) > :where(ul) {
                position: absolute;
                display: none;
                top: initial;
                left: 100%;
                border-top-left-radius: inherit;
                border-top-right-radius: inherit;
                border-bottom-right-radius: inherit;
                border-bottom-left-radius: inherit;
            }

            .menu > :where(li:hover) > :where(ul) {
                display: flex;
            }

            .menu > :where(li:focus) > :where(ul) {
                display: flex;
            }

            .progress {
                position: relative;
                width: 100%;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                overflow: hidden;
                height: 0.5rem;
                border-radius: var(--rounded-box, 1rem);
            }

            .radio {
                flex-shrink: 0;
                --chkbg: var(--bc);
                height: 1.5rem;
                width: 1.5rem;
                cursor: pointer;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                border-radius: 9999px;
                border-width: 1px;
                border-color: hsl(var(--bc) / var(--tw-border-opacity));
                --tw-border-opacity: 0.2;
                transition: background,
                    box-shadow var(--animation-input, 0.2s) ease-in-out;
            }

            .select {
                display: inline-flex;
                flex-shrink: 0;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                height: 3rem;
                padding-left: 1rem;
                padding-right: 2.5rem;
                font-size: 0.875rem;
                line-height: 1.25rem;
                line-height: 2;
                min-height: 3rem;
                border-width: 1px;
                border-color: hsl(var(--bc) / var(--tw-border-opacity));
                --tw-border-opacity: 0;
                --tw-bg-opacity: 1;
                background-color: hsl(var(--b1) / var(--tw-bg-opacity));
                font-weight: 600;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, -webkit-backdrop-filter;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, backdrop-filter;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, backdrop-filter, -webkit-backdrop-filter;
                transition-duration: 200ms;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                border-radius: var(--rounded-btn, 0.5rem);
                background-image: linear-gradient(
                        45deg,
                        transparent 50%,
                        currentColor 50%
                    ),
                    linear-gradient(135deg, currentColor 50%, transparent 50%);
                background-position: calc(100% - 20px) calc(1px + 50%),
                    calc(100% - 16px) calc(1px + 50%);
                background-size: 4px 4px, 4px 4px;
                background-repeat: no-repeat;
            }

            .select[multiple] {
                height: auto;
            }

            .tab {
                position: relative;
                display: inline-flex;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                text-align: center;
                height: 2rem;
                font-size: 0.875rem;
                line-height: 1.25rem;
                line-height: 2;
                --tab-padding: 1rem;
                --tw-text-opacity: 0.5;
                --tab-color: hsla(var(--bc) / var(--tw-text-opacity, 1));
                --tab-bg: hsla(var(--b1) / var(--tw-bg-opacity, 1));
                --tab-border-color: hsla(var(--b3) / var(--tw-bg-opacity, 1));
                color: var(--tab-color);
                padding-left: var(--tab-padding, 1rem);
                padding-right: var(--tab-padding, 1rem);
            }

            .table {
                position: relative;
                text-align: left;
            }

            .table th:first-child {
                position: sticky;
                position: -webkit-sticky;
                left: 0px;
                z-index: 11;
            }

            .textarea {
                flex-shrink: 1;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, -webkit-backdrop-filter;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, backdrop-filter;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, backdrop-filter, -webkit-backdrop-filter;
                transition-duration: 200ms;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                padding-left: 1rem;
                padding-right: 1rem;
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                font-size: 0.875rem;
                line-height: 1.25rem;
                line-height: 2;
                min-height: 3rem;
                border-width: 1px;
                border-color: hsl(var(--bc) / var(--tw-border-opacity));
                --tw-border-opacity: 0;
                --tw-bg-opacity: 1;
                background-color: hsl(var(--b1) / var(--tw-bg-opacity));
                border-radius: var(--rounded-btn, 0.5rem);
            }

            .badge-outline {
                border-color: currentColor;
                --tw-border-opacity: 0.5;
                background-color: transparent;
                color: currentColor;
            }

            .badge-outline.badge-primary {
                --tw-text-opacity: 1;
                color: hsl(var(--p) / var(--tw-text-opacity));
            }

            .badge-outline.badge-secondary {
                --tw-text-opacity: 1;
                color: hsl(var(--s) / var(--tw-text-opacity));
            }

            .badge-outline.badge-accent {
                --tw-text-opacity: 1;
                color: hsl(var(--a) / var(--tw-text-opacity));
            }

            .badge-outline.badge-info {
                --tw-text-opacity: 1;
                color: hsl(var(--in) / var(--tw-text-opacity));
            }

            .badge-outline.badge-success {
                --tw-text-opacity: 1;
                color: hsl(var(--su) / var(--tw-text-opacity));
            }

            .badge-outline.badge-warning {
                --tw-text-opacity: 1;
                color: hsl(var(--wa) / var(--tw-text-opacity));
            }

            .badge-outline.badge-error {
                --tw-text-opacity: 1;
                color: hsl(var(--er) / var(--tw-text-opacity));
            }

            .btn-outline .badge {
                --tw-border-opacity: 1;
                border-color: hsl(
                    var(--nf, var(--n)) / var(--tw-border-opacity)
                );
                --tw-text-opacity: 1;
                color: hsl(var(--nc) / var(--tw-text-opacity));
            }

            .btn-outline.btn-primary .badge {
                --tw-border-opacity: 1;
                border-color: hsl(var(--p) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(var(--p) / var(--tw-bg-opacity));
                --tw-text-opacity: 1;
                color: hsl(var(--pc) / var(--tw-text-opacity));
            }

            .btn-outline.btn-secondary .badge {
                --tw-border-opacity: 1;
                border-color: hsl(var(--s) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(var(--s) / var(--tw-bg-opacity));
                --tw-text-opacity: 1;
                color: hsl(var(--sc) / var(--tw-text-opacity));
            }

            .btn-outline.btn-accent .badge {
                --tw-border-opacity: 1;
                border-color: hsl(var(--a) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(var(--a) / var(--tw-bg-opacity));
                --tw-text-opacity: 1;
                color: hsl(var(--ac) / var(--tw-text-opacity));
            }

            .btn-outline .badge.outline {
                --tw-border-opacity: 1;
                border-color: hsl(
                    var(--nf, var(--n)) / var(--tw-border-opacity)
                );
                background-color: transparent;
            }

            .btn-outline.btn-primary .badge-outline {
                --tw-border-opacity: 1;
                border-color: hsl(var(--p) / var(--tw-border-opacity));
                background-color: transparent;
                --tw-text-opacity: 1;
                color: hsl(var(--p) / var(--tw-text-opacity));
            }

            .btn-outline.btn-secondary .badge-outline {
                --tw-border-opacity: 1;
                border-color: hsl(var(--s) / var(--tw-border-opacity));
                background-color: transparent;
                --tw-text-opacity: 1;
                color: hsl(var(--s) / var(--tw-text-opacity));
            }

            .btn-outline.btn-accent .badge-outline {
                --tw-border-opacity: 1;
                border-color: hsl(var(--a) / var(--tw-border-opacity));
                background-color: transparent;
                --tw-text-opacity: 1;
                color: hsl(var(--a) / var(--tw-text-opacity));
            }

            .btn-outline.btn-info .badge-outline {
                --tw-border-opacity: 1;
                border-color: hsl(var(--in) / var(--tw-border-opacity));
                background-color: transparent;
                --tw-text-opacity: 1;
                color: hsl(var(--in) / var(--tw-text-opacity));
            }

            .btn-outline.btn-success .badge-outline {
                --tw-border-opacity: 1;
                border-color: hsl(var(--su) / var(--tw-border-opacity));
                background-color: transparent;
                --tw-text-opacity: 1;
                color: hsl(var(--su) / var(--tw-text-opacity));
            }

            .btn-outline.btn-warning .badge-outline {
                --tw-border-opacity: 1;
                border-color: hsl(var(--wa) / var(--tw-border-opacity));
                background-color: transparent;
                --tw-text-opacity: 1;
                color: hsl(var(--wa) / var(--tw-text-opacity));
            }

            .btn-outline.btn-error .badge-outline {
                --tw-border-opacity: 1;
                border-color: hsl(var(--er) / var(--tw-border-opacity));
                background-color: transparent;
                --tw-text-opacity: 1;
                color: hsl(var(--er) / var(--tw-text-opacity));
            }

            .btn-outline:hover .badge {
                --tw-border-opacity: 1;
                border-color: hsl(
                    var(--b2, var(--b1)) / var(--tw-border-opacity)
                );
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--b2, var(--b1)) / var(--tw-bg-opacity)
                );
                --tw-text-opacity: 1;
                color: hsl(var(--bc) / var(--tw-text-opacity));
            }

            .btn-outline:hover .badge.outline {
                --tw-border-opacity: 1;
                border-color: hsl(
                    var(--b2, var(--b1)) / var(--tw-border-opacity)
                );
                --tw-text-opacity: 1;
                color: hsl(var(--nc) / var(--tw-text-opacity));
            }

            .btn-outline.btn-primary:hover .badge {
                --tw-border-opacity: 1;
                border-color: hsl(var(--pc) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(var(--pc) / var(--tw-bg-opacity));
                --tw-text-opacity: 1;
                color: hsl(var(--p) / var(--tw-text-opacity));
            }

            .btn-outline.btn-primary:hover .badge.outline {
                --tw-border-opacity: 1;
                border-color: hsl(var(--pc) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--pf, var(--p)) / var(--tw-bg-opacity)
                );
                --tw-text-opacity: 1;
                color: hsl(var(--pc) / var(--tw-text-opacity));
            }

            .btn-outline.btn-secondary:hover .badge {
                --tw-border-opacity: 1;
                border-color: hsl(var(--sc) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(var(--sc) / var(--tw-bg-opacity));
                --tw-text-opacity: 1;
                color: hsl(var(--s) / var(--tw-text-opacity));
            }

            .btn-outline.btn-secondary:hover .badge.outline {
                --tw-border-opacity: 1;
                border-color: hsl(var(--sc) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--sf, var(--s)) / var(--tw-bg-opacity)
                );
                --tw-text-opacity: 1;
                color: hsl(var(--sc) / var(--tw-text-opacity));
            }

            .btn-outline.btn-accent:hover .badge {
                --tw-border-opacity: 1;
                border-color: hsl(var(--ac) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(var(--ac) / var(--tw-bg-opacity));
                --tw-text-opacity: 1;
                color: hsl(var(--a) / var(--tw-text-opacity));
            }

            .btn-outline.btn-accent:hover .badge.outline {
                --tw-border-opacity: 1;
                border-color: hsl(var(--ac) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--af, var(--a)) / var(--tw-bg-opacity)
                );
                --tw-text-opacity: 1;
                color: hsl(var(--ac) / var(--tw-text-opacity));
            }

            .btm-nav > *.disabled,
            .btm-nav > *.disabled:hover,
            .btm-nav > *[disabled],
            .btm-nav > *[disabled]:hover {
                pointer-events: none;
                --tw-border-opacity: 0;
                background-color: hsl(var(--n) / var(--tw-bg-opacity));
                --tw-bg-opacity: 0.1;
                color: hsl(var(--bc) / var(--tw-text-opacity));
                --tw-text-opacity: 0.2;
            }

            .btn:active:hover,
            .btn:active:focus {
                animation: none;
                transform: scale(var(--btn-focus-scale, 0.95));
            }

            .btn:hover,
            .btn-active {
                --tw-border-opacity: 1;
                border-color: hsl(
                    var(--nf, var(--n)) / var(--tw-border-opacity)
                );
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--nf, var(--n)) / var(--tw-bg-opacity)
                );
            }

            .btn:focus-visible {
                outline: 2px solid hsl(var(--nf));
                outline-offset: 2px;
            }

            .btn-primary {
                --tw-border-opacity: 1;
                border-color: hsl(var(--p) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(var(--p) / var(--tw-bg-opacity));
                --tw-text-opacity: 1;
                color: hsl(var(--pc) / var(--tw-text-opacity));
            }

            .btn-primary:hover,
            .btn-primary.btn-active {
                --tw-border-opacity: 1;
                border-color: hsl(
                    var(--pf, var(--p)) / var(--tw-border-opacity)
                );
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--pf, var(--p)) / var(--tw-bg-opacity)
                );
            }

            .btn-primary:focus-visible {
                outline: 2px solid hsl(var(--p));
            }

            .btn-secondary:hover,
            .btn-secondary.btn-active {
                --tw-border-opacity: 1;
                border-color: hsl(
                    var(--sf, var(--s)) / var(--tw-border-opacity)
                );
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--sf, var(--s)) / var(--tw-bg-opacity)
                );
            }

            .btn-accent:hover,
            .btn-accent.btn-active {
                --tw-border-opacity: 1;
                border-color: hsl(
                    var(--af, var(--a)) / var(--tw-border-opacity)
                );
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--af, var(--a)) / var(--tw-bg-opacity)
                );
            }

            .btn-info:hover,
            .btn-info.btn-active {
                --tw-border-opacity: 1;
                border-color: hsl(var(--in) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(var(--in) / var(--tw-bg-opacity));
            }

            .btn-success:hover,
            .btn-success.btn-active {
                --tw-border-opacity: 1;
                border-color: hsl(var(--su) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(var(--su) / var(--tw-bg-opacity));
            }

            .btn-warning:hover,
            .btn-warning.btn-active {
                --tw-border-opacity: 1;
                border-color: hsl(var(--wa) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(var(--wa) / var(--tw-bg-opacity));
            }

            .btn-error:hover,
            .btn-error.btn-active {
                --tw-border-opacity: 1;
                border-color: hsl(var(--er) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(var(--er) / var(--tw-bg-opacity));
            }

            .btn.glass:hover,
            .btn.glass.btn-active {
                --glass-opacity: 25%;
                --glass-border-opacity: 15%;
            }

            .btn.glass:focus-visible {
                outline: 2px solid currentColor;
            }

            .btn-ghost:hover,
            .btn-ghost.btn-active {
                --tw-border-opacity: 0;
                background-color: hsl(var(--bc) / var(--tw-bg-opacity));
                --tw-bg-opacity: 0.2;
            }

            .btn-link:hover,
            .btn-link.btn-active {
                border-color: transparent;
                background-color: transparent;
                text-decoration-line: underline;
            }

            .btn-outline {
                border-color: currentColor;
                background-color: transparent;
                --tw-text-opacity: 1;
                color: hsl(var(--bc) / var(--tw-text-opacity));
            }

            .btn-outline:hover,
            .btn-outline.btn-active {
                --tw-border-opacity: 1;
                border-color: hsl(var(--bc) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(var(--bc) / var(--tw-bg-opacity));
                --tw-text-opacity: 1;
                color: hsl(var(--b1) / var(--tw-text-opacity));
            }

            .btn-outline.btn-primary {
                --tw-text-opacity: 1;
                color: hsl(var(--p) / var(--tw-text-opacity));
            }

            .btn-outline.btn-primary:hover,
            .btn-outline.btn-primary.btn-active {
                --tw-border-opacity: 1;
                border-color: hsl(
                    var(--pf, var(--p)) / var(--tw-border-opacity)
                );
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--pf, var(--p)) / var(--tw-bg-opacity)
                );
                --tw-text-opacity: 1;
                color: hsl(var(--pc) / var(--tw-text-opacity));
            }

            .btn-outline.btn-secondary {
                --tw-text-opacity: 1;
                color: hsl(var(--s) / var(--tw-text-opacity));
            }

            .btn-outline.btn-secondary:hover,
            .btn-outline.btn-secondary.btn-active {
                --tw-border-opacity: 1;
                border-color: hsl(
                    var(--sf, var(--s)) / var(--tw-border-opacity)
                );
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--sf, var(--s)) / var(--tw-bg-opacity)
                );
                --tw-text-opacity: 1;
                color: hsl(var(--sc) / var(--tw-text-opacity));
            }

            .btn-outline.btn-accent {
                --tw-text-opacity: 1;
                color: hsl(var(--a) / var(--tw-text-opacity));
            }

            .btn-outline.btn-accent:hover,
            .btn-outline.btn-accent.btn-active {
                --tw-border-opacity: 1;
                border-color: hsl(
                    var(--af, var(--a)) / var(--tw-border-opacity)
                );
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--af, var(--a)) / var(--tw-bg-opacity)
                );
                --tw-text-opacity: 1;
                color: hsl(var(--ac) / var(--tw-text-opacity));
            }

            .btn-outline.btn-success {
                --tw-text-opacity: 1;
                color: hsl(var(--su) / var(--tw-text-opacity));
            }

            .btn-outline.btn-success:hover,
            .btn-outline.btn-success.btn-active {
                --tw-border-opacity: 1;
                border-color: hsl(var(--su) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(var(--su) / var(--tw-bg-opacity));
                --tw-text-opacity: 1;
                color: hsl(var(--suc, var(--nc)) / var(--tw-text-opacity));
            }

            .btn-outline.btn-info {
                --tw-text-opacity: 1;
                color: hsl(var(--in) / var(--tw-text-opacity));
            }

            .btn-outline.btn-info:hover,
            .btn-outline.btn-info.btn-active {
                --tw-border-opacity: 1;
                border-color: hsl(var(--in) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(var(--in) / var(--tw-bg-opacity));
                --tw-text-opacity: 1;
                color: hsl(var(--inc, var(--nc)) / var(--tw-text-opacity));
            }

            .btn-outline.btn-warning {
                --tw-text-opacity: 1;
                color: hsl(var(--wa) / var(--tw-text-opacity));
            }

            .btn-outline.btn-warning:hover,
            .btn-outline.btn-warning.btn-active {
                --tw-border-opacity: 1;
                border-color: hsl(var(--wa) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(var(--wa) / var(--tw-bg-opacity));
                --tw-text-opacity: 1;
                color: hsl(var(--wac, var(--nc)) / var(--tw-text-opacity));
            }

            .btn-outline.btn-error {
                --tw-text-opacity: 1;
                color: hsl(var(--er) / var(--tw-text-opacity));
            }

            .btn-outline.btn-error:hover,
            .btn-outline.btn-error.btn-active {
                --tw-border-opacity: 1;
                border-color: hsl(var(--er) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(var(--er) / var(--tw-bg-opacity));
                --tw-text-opacity: 1;
                color: hsl(var(--erc, var(--nc)) / var(--tw-text-opacity));
            }

            .btn-disabled,
            .btn-disabled:hover,
            .btn[disabled],
            .btn[disabled]:hover {
                --tw-border-opacity: 0;
                background-color: hsl(var(--n) / var(--tw-bg-opacity));
                --tw-bg-opacity: 0.2;
                color: hsl(var(--bc) / var(--tw-text-opacity));
                --tw-text-opacity: 0.2;
            }

            .btn.loading.btn-square:before,
            .btn.loading.btn-circle:before {
                margin-right: 0px;
            }

            .btn.loading.btn-xl:before,
            .btn.loading.btn-lg:before {
                height: 1.25rem;
                width: 1.25rem;
            }

            .btn.loading.btn-sm:before,
            .btn.loading.btn-xs:before {
                height: 0.75rem;
                width: 0.75rem;
            }

            .btn-group > input[type="radio"]:checked.btn,
            .btn-group > .btn-active {
                --tw-border-opacity: 1;
                border-color: hsl(var(--p) / var(--tw-border-opacity));
                --tw-bg-opacity: 1;
                background-color: hsl(var(--p) / var(--tw-bg-opacity));
                --tw-text-opacity: 1;
                color: hsl(var(--pc) / var(--tw-text-opacity));
            }

            .btn-group > input[type="radio"]:checked.btn:focus-visible,
            .btn-group > .btn-active:focus-visible {
                outline: 2px solid hsl(var(--p));
            }

            @keyframes button-pop {
                0% {
                    transform: scale(var(--btn-focus-scale, 0.95));
                }

                40% {
                    transform: scale(1.02);
                }

                100% {
                    transform: scale(1);
                }
            }

            .card :where(figure:first-child) {
                overflow: hidden;
                border-start-start-radius: inherit;
                border-start-end-radius: inherit;
                border-end-start-radius: unset;
                border-end-end-radius: unset;
            }

            .card :where(figure:last-child) {
                overflow: hidden;
                border-start-start-radius: unset;
                border-start-end-radius: unset;
                border-end-start-radius: inherit;
                border-end-end-radius: inherit;
            }

            .card:focus-visible {
                outline: 2px solid currentColor;
                outline-offset: 2px;
            }

            .card.bordered {
                border-width: 1px;
                --tw-border-opacity: 1;
                border-color: hsl(
                    var(--b2, var(--b1)) / var(--tw-border-opacity)
                );
            }

            .card.compact .card-body {
                padding: 1rem;
                font-size: 0.875rem;
                line-height: 1.25rem;
            }

            .card-title {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 1.25rem;
                line-height: 1.75rem;
                font-weight: 600;
            }

            .card.image-full :where(figure) {
                overflow: hidden;
                border-radius: inherit;
            }

            @keyframes checkmark {
                0% {
                    background-position-y: 5px;
                }

                50% {
                    background-position-y: -2px;
                }

                100% {
                    background-position-y: 0;
                }
            }

            .collapse:focus-visible {
                outline: 2px solid hsl(var(--nf));
                outline-offset: 2px;
            }

            .collapse:not(.collapse-open):not(.collapse-close)
                input[type="checkbox"],
            .collapse:not(.collapse-open):not(.collapse-close) .collapse-title {
                cursor: pointer;
            }

            .collapse:focus:not(.collapse-open):not(.collapse-close)
                .collapse-title {
                cursor: unset;
            }

            :where(.collapse > input[type="checkbox"]) {
                z-index: 1;
            }

            .collapse-title,
            :where(.collapse > input[type="checkbox"]) {
                width: 100%;
                padding: 1rem;
                padding-right: 3rem;
                min-height: 3.75rem;
                transition: background-color 0.2s ease-in-out;
            }

            .collapse-open :where(.collapse-content),
            .collapse:focus:not(.collapse-close) :where(.collapse-content),
            .collapse:not(.collapse-close)
                :where(input[type="checkbox"]:checked ~ .collapse-content) {
                padding-bottom: 1rem;
                transition: padding 0.2s ease-in-out,
                    background-color 0.2s ease-in-out;
            }

            .drawer.drawer-end > .drawer-toggle:checked ~ .drawer-content {
                --tw-translate-x: -0.5rem;
                transform: translate(
                        var(--tw-translate-x),
                        var(--tw-translate-y)
                    )
                    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
                    skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
                    scaleY(var(--tw-scale-y));
            }

            .drawer-toggle:checked ~ .drawer-content {
                --tw-translate-x: 0.5rem;
                transform: translate(
                        var(--tw-translate-x),
                        var(--tw-translate-y)
                    )
                    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
                    skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
                    scaleY(var(--tw-scale-y));
            }

            .drawer-toggle:focus-visible ~ .drawer-content .drawer-button {
                outline: 2px solid hsl(var(--nf));
                outline-offset: 2px;
            }

            .drawer-toggle:focus-visible
                ~ .drawer-content
                .drawer-button.btn-primary {
                outline: 2px solid hsl(var(--p));
            }

            .drawer-toggle:focus-visible
                ~ .drawer-content
                .drawer-button.btn-secondary {
                outline: 2px solid hsl(var(--s));
            }

            .drawer-toggle:focus-visible
                ~ .drawer-content
                .drawer-button.btn-accent {
                outline: 2px solid hsl(var(--a));
            }

            .drawer-toggle:focus-visible
                ~ .drawer-content
                .drawer-button.btn-info {
                outline: 2px solid hsl(var(--in));
            }

            .drawer-toggle:focus-visible
                ~ .drawer-content
                .drawer-button.btn-success {
                outline: 2px solid hsl(var(--su));
            }

            .drawer-toggle:focus-visible
                ~ .drawer-content
                .drawer-button.btn-warning {
                outline: 2px solid hsl(var(--wa));
            }

            .drawer-toggle:focus-visible
                ~ .drawer-content
                .drawer-button.btn-error {
                outline: 2px solid hsl(var(--er));
            }

            .drawer-toggle:focus-visible
                ~ .drawer-content
                .drawer-button.glass {
                outline: 2px solid currentColor;
            }

            .drawer-toggle:focus-visible
                ~ .drawer-content
                .drawer-button.btn-ghost {
                outline: 2px solid currentColor;
            }

            .drawer-toggle:focus-visible
                ~ .drawer-content
                .drawer-button.btn-link {
                outline: 2px solid currentColor;
            }

            .input[list]::-webkit-calendar-picker-indicator {
                line-height: 1em;
            }

            .input:focus {
                outline: 2px solid hsla(var(--bc) / 0.2);
                outline-offset: 2px;
            }

            .input-disabled,
            .input[disabled] {
                cursor: not-allowed;
                --tw-border-opacity: 1;
                border-color: hsl(
                    var(--b2, var(--b1)) / var(--tw-border-opacity)
                );
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--b2, var(--b1)) / var(--tw-bg-opacity)
                );
                --tw-text-opacity: 0.2;
            }

            .input-disabled::-moz-placeholder,
            .input[disabled]::-moz-placeholder {
                color: hsl(var(--bc) / var(--tw-placeholder-opacity));
                --tw-placeholder-opacity: 0.2;
            }

            .input-disabled::placeholder,
            .input[disabled]::placeholder {
                color: hsl(var(--bc) / var(--tw-placeholder-opacity));
                --tw-placeholder-opacity: 0.2;
            }

            .link:focus {
                outline: 2px solid transparent;
                outline-offset: 2px;
            }

            .link:focus-visible {
                outline: 2px solid currentColor;
                outline-offset: 2px;
            }

            .menu.horizontal li.bordered > a,
            .menu.horizontal li.bordered > button,
            .menu.horizontal li.bordered > span {
                border-left-width: 0px;
                border-bottom-width: 4px;
                --tw-border-opacity: 1;
                border-color: hsl(var(--p) / var(--tw-border-opacity));
            }

            .menu[class*=" px-"]:not(.menu[class*=" px-0"]) li > *,
            .menu[class^="px-"]:not(.menu[class^="px-0"]) li > *,
            .menu[class*=" p-"]:not(.menu[class*=" p-0"]) li > *,
            .menu[class^="p-"]:not(.menu[class^="p-0"]) li > * {
                border-radius: var(--rounded-btn, 0.5rem);
            }

            .menu :where(li.bordered > *) {
                border-left-width: 4px;
                --tw-border-opacity: 1;
                border-color: hsl(var(--p) / var(--tw-border-opacity));
            }

            .menu :where(li) > :where(*:not(ul)) {
                gap: 0.75rem;
                padding-left: 1rem;
                padding-right: 1rem;
                padding-top: 0.75rem;
                padding-bottom: 0.75rem;
                color: currentColor;
            }

            .menu
                :where(li:not(.menu-title):not(:empty))
                > :where(*:not(ul):focus),
            .menu
                :where(li:not(.menu-title):not(:empty))
                > :where(*:not(ul):hover) {
                background-color: hsl(var(--bc) / var(--tw-bg-opacity));
                --tw-bg-opacity: 0.1;
            }

            .menu
                :where(li:not(.menu-title):not(:empty))
                > :where(:not(ul).active),
            .menu
                :where(li:not(.menu-title):not(:empty))
                > :where(*:not(ul):active) {
                --tw-bg-opacity: 1;
                background-color: hsl(var(--p) / var(--tw-bg-opacity));
                --tw-text-opacity: 1;
                color: hsl(var(--pc) / var(--tw-text-opacity));
            }

            .menu :where(li:empty) {
                margin-left: 1rem;
                margin-right: 1rem;
                margin-top: 0.5rem;
                margin-bottom: 0.5rem;
                height: 1px;
                background-color: hsl(var(--bc) / var(--tw-bg-opacity));
                --tw-bg-opacity: 0.1;
            }

            .menu li.disabled > * {
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
                color: hsl(var(--bc) / var(--tw-text-opacity));
                --tw-text-opacity: 0.2;
            }

            .menu li.disabled > *:hover {
                background-color: transparent;
            }

            .menu li.hover-bordered a {
                border-left-width: 4px;
                border-color: transparent;
            }

            .menu li.hover-bordered a:hover {
                --tw-border-opacity: 1;
                border-color: hsl(var(--p) / var(--tw-border-opacity));
            }

            .menu.compact li > a,
            .menu.compact li > span {
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                font-size: 0.875rem;
                line-height: 1.25rem;
            }

            .menu .menu-title > * {
                padding-top: 0.25rem;
                padding-bottom: 0.25rem;
                font-size: 0.75rem;
                line-height: 1rem;
                font-weight: 700;
                color: hsl(var(--bc) / var(--tw-text-opacity));
                --tw-text-opacity: 0.4;
            }

            .menu :where(li:not(.disabled)) > :where(*:not(ul)) {
                outline: 2px solid transparent;
                outline-offset: 2px;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, -webkit-backdrop-filter;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, backdrop-filter;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, backdrop-filter, -webkit-backdrop-filter;
                transition-duration: 200ms;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            }

            .menu > :where(li:first-child) {
                border-top-left-radius: inherit;
                border-top-right-radius: inherit;
                border-bottom-right-radius: unset;
                border-bottom-left-radius: unset;
            }

            .menu > :where(li:first-child) > :where(:not(ul)) {
                border-top-left-radius: inherit;
                border-top-right-radius: inherit;
                border-bottom-right-radius: unset;
                border-bottom-left-radius: unset;
            }

            .menu > :where(li:last-child) {
                border-top-left-radius: unset;
                border-top-right-radius: unset;
                border-bottom-right-radius: inherit;
                border-bottom-left-radius: inherit;
            }

            .menu > :where(li:last-child) > :where(:not(ul)) {
                border-top-left-radius: unset;
                border-top-right-radius: unset;
                border-bottom-right-radius: inherit;
                border-bottom-left-radius: inherit;
            }

            .menu > :where(li) > :where(ul) :where(li) {
                width: 100%;
                white-space: nowrap;
            }

            .menu > :where(li) > :where(ul) :where(li) :where(ul) {
                padding-left: 1rem;
            }

            .menu > :where(li) > :where(ul) :where(li) > :where(:not(ul)) {
                width: 100%;
                white-space: nowrap;
            }

            .menu > :where(li) > :where(ul) > :where(li:first-child) {
                border-top-left-radius: inherit;
                border-top-right-radius: inherit;
                border-bottom-right-radius: unset;
                border-bottom-left-radius: unset;
            }

            .menu
                > :where(li)
                > :where(ul)
                > :where(li:first-child)
                > :where(:not(ul)) {
                border-top-left-radius: inherit;
                border-top-right-radius: inherit;
                border-bottom-right-radius: unset;
                border-bottom-left-radius: unset;
            }

            .menu > :where(li) > :where(ul) > :where(li:last-child) {
                border-top-left-radius: unset;
                border-top-right-radius: unset;
                border-bottom-right-radius: inherit;
                border-bottom-left-radius: inherit;
            }

            .menu
                > :where(li)
                > :where(ul)
                > :where(li:last-child)
                > :where(:not(ul)) {
                border-top-left-radius: unset;
                border-top-right-radius: unset;
                border-bottom-right-radius: inherit;
                border-bottom-left-radius: inherit;
            }

            .mockup-phone .display {
                overflow: hidden;
                border-radius: 40px;
                margin-top: -25px;
            }

            .progress::-moz-progress-bar {
                --tw-bg-opacity: 1;
                background-color: hsl(var(--n) / var(--tw-bg-opacity));
            }

            .progress:indeterminate::after {
                --tw-bg-opacity: 1;
                background-color: hsl(var(--n) / var(--tw-bg-opacity));
                content: "";
                position: absolute;
                top: 0px;
                bottom: 0px;
                left: -40%;
                width: 33.333333%;
                border-radius: var(--rounded-box, 1rem);
                animation: progress-loading 5s infinite ease-in-out;
            }

            .progress::-webkit-progress-bar {
                background-color: hsl(var(--n) / var(--tw-bg-opacity));
                --tw-bg-opacity: 0.2;
                border-radius: var(--rounded-box, 1rem);
            }

            .progress::-webkit-progress-value {
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--nf, var(--n)) / var(--tw-bg-opacity)
                );
                border-radius: var(--rounded-box, 1rem);
            }

            @keyframes progress-loading {
                50% {
                    left: 107%;
                }
            }

            .radio:focus-visible {
                outline: 2px solid hsl(var(--bc));
                outline-offset: 2px;
            }

            .radio:checked,
            .radio[aria-checked="true"] {
                --tw-bg-opacity: 1;
                background-color: hsl(var(--bc) / var(--tw-bg-opacity));
                animation: radiomark var(--animation-input, 0.2s) ease-in-out;
                box-shadow: 0 0 0 4px hsl(var(--b1)) inset,
                    0 0 0 4px hsl(var(--b1)) inset;
            }

            .radio:disabled {
                cursor: not-allowed;
                opacity: 0.2;
            }

            @keyframes radiomark {
                0% {
                    box-shadow: 0 0 0 12px hsl(var(--b1)) inset,
                        0 0 0 12px hsl(var(--b1)) inset;
                }

                50% {
                    box-shadow: 0 0 0 3px hsl(var(--b1)) inset,
                        0 0 0 3px hsl(var(--b1)) inset;
                }

                100% {
                    box-shadow: 0 0 0 4px hsl(var(--b1)) inset,
                        0 0 0 4px hsl(var(--b1)) inset;
                }
            }

            @keyframes rating-pop {
                0% {
                    transform: translateY(-0.125em);
                }

                40% {
                    transform: translateY(-0.125em);
                }

                100% {
                    transform: translateY(0);
                }
            }

            .select:focus {
                outline: 2px solid hsla(var(--bc) / 0.2);
                outline-offset: 2px;
            }

            .select-disabled,
            .select[disabled] {
                cursor: not-allowed;
                --tw-border-opacity: 1;
                border-color: hsl(
                    var(--b2, var(--b1)) / var(--tw-border-opacity)
                );
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--b2, var(--b1)) / var(--tw-bg-opacity)
                );
                --tw-text-opacity: 0.2;
            }

            .select-disabled::-moz-placeholder,
            .select[disabled]::-moz-placeholder {
                color: hsl(var(--bc) / var(--tw-placeholder-opacity));
                --tw-placeholder-opacity: 0.2;
            }

            .select-disabled::placeholder,
            .select[disabled]::placeholder {
                color: hsl(var(--bc) / var(--tw-placeholder-opacity));
                --tw-placeholder-opacity: 0.2;
            }

            .select-multiple,
            .select[multiple],
            .select[size].select:not([size="1"]) {
                background-image: none;
                padding-right: 1rem;
            }

            .tab:hover {
                --tw-text-opacity: 1;
            }

            .tab.tab-active {
                border-color: hsl(var(--bc) / var(--tw-border-opacity));
                --tw-border-opacity: 1;
                --tw-text-opacity: 1;
            }

            .tab:focus {
                outline: 2px solid transparent;
                outline-offset: 2px;
            }

            .tab:focus-visible {
                outline: 2px solid currentColor;
                outline-offset: -3px;
            }

            .tab:focus-visible.tab-lifted {
                border-bottom-right-radius: var(--tab-radius, 0.5rem);
                border-bottom-left-radius: var(--tab-radius, 0.5rem);
            }

            .table :where(th, td) {
                white-space: nowrap;
                padding: 1rem;
                /* vertical-align: middle; */
            }

            .table tr.active th,
            .table tr.active td,
            .table tr.active:nth-child(even) th,
            .table tr.active:nth-child(even) td {
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--b3, var(--b2)) / var(--tw-bg-opacity)
                );
            }

            .table tr.hover:hover th,
            .table tr.hover:hover td,
            .table tr.hover:nth-child(even):hover th,
            .table tr.hover:nth-child(even):hover td {
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--b3, var(--b2)) / var(--tw-bg-opacity)
                );
            }

            .table:where(:not(.table-zebra))
                :where(thead, tbody, tfoot)
                :where(tr:not(:last-child) :where(th, td)) {
                border-bottom-width: 1px;
                --tw-border-opacity: 1;
                border-color: hsl(
                    var(--b2, var(--b1)) / var(--tw-border-opacity)
                );
            }

            .table :where(thead, tfoot) :where(th, td) {
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--b2, var(--b1)) / var(--tw-bg-opacity)
                );
                font-size: 0.75rem;
                line-height: 1rem;
                font-weight: 700;
                text-transform: uppercase;
            }

            .table :where(tbody th, tbody td) {
                --tw-bg-opacity: 1;
                background-color: hsl(var(--b1) / var(--tw-bg-opacity));
            }

            :where(.table *:first-child)
                :where(*:first-child)
                :where(th, td):first-child {
                border-top-left-radius: 0.5rem;
            }

            :where(.table *:first-child)
                :where(*:first-child)
                :where(th, td):last-child {
                border-top-right-radius: 0.5rem;
            }

            :where(.table *:last-child)
                :where(*:last-child)
                :where(th, td):first-child {
                border-bottom-left-radius: 0.5rem;
            }

            :where(.table *:last-child)
                :where(*:last-child)
                :where(th, td):last-child {
                border-bottom-right-radius: 0.5rem;
            }

            .textarea:focus {
                outline: 2px solid hsla(var(--bc) / 0.2);
                outline-offset: 2px;
            }

            .textarea-disabled,
            .textarea[disabled] {
                cursor: not-allowed;
                --tw-border-opacity: 1;
                border-color: hsl(
                    var(--b2, var(--b1)) / var(--tw-border-opacity)
                );
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--b2, var(--b1)) / var(--tw-bg-opacity)
                );
                --tw-text-opacity: 0.2;
            }

            .textarea-disabled::-moz-placeholder,
            .textarea[disabled]::-moz-placeholder {
                color: hsl(var(--bc) / var(--tw-placeholder-opacity));
                --tw-placeholder-opacity: 0.2;
            }

            .textarea-disabled::placeholder,
            .textarea[disabled]::placeholder {
                color: hsl(var(--bc) / var(--tw-placeholder-opacity));
                --tw-placeholder-opacity: 0.2;
            }

            @keyframes toast-pop {
                0% {
                    transform: scale(0.9);
                    opacity: 0;
                }

                100% {
                    transform: scale(1);
                    opacity: 1;
                }
            }

            .glass,
            .glass:hover,
            .glass.btn-active {
                border: none;
                -webkit-backdrop-filter: blur(var(--glass-blur, 40px));
                backdrop-filter: blur(var(--glass-blur, 40px));
                background-color: transparent;
                background-image: linear-gradient(
                        135deg,
                        rgb(255 255 255 / var(--glass-opacity, 30%)) 0%,
                        rgb(0 0 0 / 0%) 100%
                    ),
                    linear-gradient(
                        var(--glass-reflex-degree, 100deg),
                        rgb(255 255 255 / var(--glass-reflex-opacity, 10%)) 25%,
                        rgb(0 0 0 / 0%) 25%
                    );
                box-shadow: 0 0 0 1px
                        rgb(255 255 255 / var(--glass-border-opacity, 10%))
                        inset,
                    0 0 0 2px rgb(0 0 0 / 5%);
                text-shadow: 0 1px
                    rgb(0 0 0 / var(--glass-text-shadow-opacity, 5%));
            }

            .artboard.phone-1.horizontal,
            .artboard.phone-1.artboard-horizontal {
                width: 568px;
                height: 320px;
            }

            .artboard.phone-2.horizontal,
            .artboard.phone-2.artboard-horizontal {
                width: 667px;
                height: 375px;
            }

            .artboard.phone-3.horizontal,
            .artboard.phone-3.artboard-horizontal {
                width: 736px;
                height: 414px;
            }

            .artboard.phone-4.horizontal,
            .artboard.phone-4.artboard-horizontal {
                width: 812px;
                height: 375px;
            }

            .artboard.phone-5.horizontal,
            .artboard.phone-5.artboard-horizontal {
                width: 896px;
                height: 414px;
            }

            .artboard.phone-6.horizontal,
            .artboard.phone-6.artboard-horizontal {
                width: 1024px;
                height: 320px;
            }

            .btn-group-horizontal {
                flex-direction: row;
            }

            .btn-group-vertical {
                flex-direction: column;
            }

            .btn-group .btn:not(:first-child):not(:last-child),
            .btn-group.btn-group-horizontal
                .btn:not(:first-child):not(:last-child) {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }

            .btn-group .btn:first-child:not(:last-child),
            .btn-group.btn-group-horizontal .btn:first-child:not(:last-child) {
                margin-left: -1px;
                margin-top: -0px;
                border-top-left-radius: var(--rounded-btn, 0.5rem);
                border-top-right-radius: 0;
                border-bottom-left-radius: var(--rounded-btn, 0.5rem);
                border-bottom-right-radius: 0;
            }

            .btn-group .btn:last-child:not(:first-child),
            .btn-group.btn-group-horizontal .btn:last-child:not(:first-child) {
                border-top-left-radius: 0;
                border-top-right-radius: var(--rounded-btn, 0.5rem);
                border-bottom-left-radius: 0;
                border-bottom-right-radius: var(--rounded-btn, 0.5rem);
            }

            .btn-group.btn-group-vertical .btn:first-child:not(:last-child) {
                margin-left: -0px;
                margin-top: -1px;
                border-top-left-radius: var(--rounded-btn, 0.5rem);
                border-top-right-radius: var(--rounded-btn, 0.5rem);
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }

            .btn-group.btn-group-vertical .btn:last-child:not(:first-child) {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                border-bottom-left-radius: var(--rounded-btn, 0.5rem);
                border-bottom-right-radius: var(--rounded-btn, 0.5rem);
            }

            .card-compact .card-body {
                padding: 1rem;
                font-size: 0.875rem;
                line-height: 1.25rem;
            }

            .card-compact .card-title {
                margin-bottom: 0.25rem;
            }

            .card-normal .card-body {
                padding: var(--padding-card, 2rem);
                font-size: 1rem;
                line-height: 1.5rem;
            }

            .card-normal .card-title {
                margin-bottom: 0.75rem;
            }

            .menu-vertical :where(li.bordered > *) {
                border-left-width: 4px;
                border-bottom-width: 0px;
            }

            .menu-horizontal :where(li.bordered > *) {
                border-left-width: 0px;
                border-bottom-width: 4px;
            }

            .visible {
                visibility: visible;
            }

            .collapse {
                visibility: collapse;
            }

            .relative {
                position: relative;
            }

            .block {
                display: block;
            }

            .flex {
                display: flex;
            }

            .table {
                display: table;
            }

            .grid {
                display: grid;
            }

            .contents {
                display: contents;
            }

            .hidden {
                display: none;
            }

            .h-14 {
                height: 3.5rem;
            }

            .h-10 {
                height: 2.5rem;
            }

            .w-96 {
                width: 24rem;
            }

            .max-w-md {
                max-width: 28rem;
            }

            .flex-shrink {
                flex-shrink: 1;
            }

            .flex-grow {
                flex-grow: 1;
            }

            .border-collapse {
                border-collapse: collapse;
            }

            .transform {
                transform: translate(
                        var(--tw-translate-x),
                        var(--tw-translate-y)
                    )
                    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
                    skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
                    scaleY(var(--tw-scale-y));
            }

            .resize {
                resize: both;
            }

            .flex-col {
                flex-direction: column;
            }

            .flex-wrap {
                flex-wrap: wrap;
            }

            .items-center {
                align-items: center;
            }

            .justify-end {
                justify-content: flex-end;
            }

            .justify-center {
                justify-content: center;
            }

            .gap-6 {
                gap: 1.5rem;
            }

            .gap-5 {
                gap: 1.25rem;
            }

            .gap-4 {
                gap: 1rem;
            }

            .gap-3 {
                gap: 0.75rem;
            }

            .rounded-lg {
                border-radius: 0.5rem;
            }

            .rounded-xl {
                border-radius: 0.75rem;
            }

            .border {
                border-width: 1px;
            }

            .bg-base-100 {
                --tw-bg-opacity: 1;
                background-color: hsl(var(--b1) / var(--tw-bg-opacity));
            }

            .bg-base-200 {
                --tw-bg-opacity: 1;
                background-color: hsl(
                    var(--b2, var(--b1)) / var(--tw-bg-opacity)
                );
            }

            .p-5 {
                padding: 1.25rem;
            }

            .text-xl {
                font-size: 1.25rem;
                line-height: 1.75rem;
            }

            .text-base {
                font-size: 1rem;
                line-height: 1.5rem;
            }

            .text-3xl {
                font-size: 1.875rem;
                line-height: 2.25rem;
            }

            .text-2xl {
                font-size: 1.5rem;
                line-height: 2rem;
            }

            .text-sm {
                font-size: 0.875rem;
                line-height: 1.25rem;
            }

            .uppercase {
                text-transform: uppercase;
            }

            .lowercase {
                text-transform: lowercase;
            }

            .text-white {
                --tw-text-opacity: 1;
                color: rgb(255 255 255 / var(--tw-text-opacity));
            }

            .text-accent {
                --tw-text-opacity: 1;
                color: hsl(var(--a) / var(--tw-text-opacity));
            }

            .text-info {
                --tw-text-opacity: 1;
                color: hsl(var(--in) / var(--tw-text-opacity));
            }

            .underline {
                text-decoration-line: underline;
            }

            .opacity-70 {
                opacity: 0.7;
            }

            .shadow-xl {
                --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
                    0 8px 10px -6px rgb(0 0 0 / 0.1);
                --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
                    0 8px 10px -6px var(--tw-shadow-color);
                box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
                    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            }

            .outline {
                outline-style: solid;
            }

            .filter {
                filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
                    var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
                    var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
            }
        </style>
    </head>
    <body class="max-w-md bg-base-100">
        <div class="flex flex-col p-5 gap-3" data-theme="business">
            <div class="h-10 flex items-center">
                <div>Имя сайта</div>
            </div>
            <h1 class="text-2xl">Подтверждение почты на</h1>
            <div>
                <span class="flex flex-col gap-5">
                    <div class="text-sm flex flex-col gap-5">
                        <div>
                            Привет
                            <span class="text-accent">${username}</span>
                        </div>
                        <div class="opacity-70">
                            Благодарим вас за регистрацию на нашей платформе для
                            хранения данных. Для безопасности ваших данных вам
                            следует подтвержить. С подвтержденной почтой ваши
                            данные еще в большей сохранности
                        </div>
                    </div>
                    <div class="card w-full bg-base-200 shadow-xl rounded-xl">
                        <div class="card-body">
                            <h2 class="card-title">Подтверждение почты</h2>
                            <p>Для подвтерждения почты перейдите по ссылку</p>
                            <div class="card-actions justify-end">
                                <a href="${link}" class="btn btn-primary rounded-lg"
                                    >Подтвердить</a
                                >
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    </body>
</html>

    `
}