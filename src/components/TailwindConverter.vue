<template>
    <div class="w-screen min-h-screen">
        <div class="flex min-h-screen">
            <!-- Sidebar / channel list -->
            <div class="w-1/5 pb-6">
                <h1 class="text-black text-xl mb-2 mt-3 px-4 font-sans flex justify-between">
                    <span>Tailwind Converter</span>
                </h1>

                <button type="button" v-on:click="convert">Convert</button>
            </div>
            <div class="grid grid-rows-3 gap-4 w-full">
                <div class="w-full flex -mx-2">
                    <div class="w-1/2 px-2">
                        <div class="h-full">
                            <div>original html</div>
                            <AceEditor
                                    v-model="originalHtml"
                                    @init="editorInit"
                                    lang="html"
                                    theme="chrome"
                            ></AceEditor>
                        </div>
                    </div>
                    <div class="w-1/2 px-2">
                        <div class="h-full">
                            <div>tailwind html</div>
                            <AceEditor ref="tailwindHtml"
                                       v-model="tailwindHtml"
                                       @init="editorInit"
                                       lang="html"
                                       theme="chrome"
                                       readonly
                            ></AceEditor>
                        </div>
                    </div>
                </div>

                <div class="w-full flex -mx-2">
                    <div class="w-1/2 px-2">
                        <div class="h-full">
                            <div>original css</div>
                            <AceEditor
                                    v-model="originalCss"
                                    @init="editorInit"
                                    lang="css"
                                    theme="chrome"
                            ></AceEditor>
                        </div>
                    </div>
                    <div class="w-1/2 px-2">
                        <div class="h-full">
                            <div>tailwind css</div>
                            <AceEditor ref="tailwindCss"
                                       v-model="tailwindCss"
                                       @init="editorInit"
                                       lang="css"
                                       theme="chrome"
                            ></AceEditor>
                        </div>
                    </div>
                </div>

                <div class="w-full flex -mx-2 overflow-x-auto">
                    <div class="w-1/2 px-2">
                        <div class="h-full overflow-x-auto">
                            <div>original preview</div>
                            <iframe
                                    v-bind:style="{width: this.originalPreviewWidth}"
                                    ref="originalPreview"
                                    :srcdoc="originalPreview"/>
                        </div>
                    </div>
                    <div class="w-1/2 px-2">
                        <div class="h-full">
                            <div>tailwind preview</div>
                            <iframe ref="tailwindPreview" :srcdoc="tailwindPreview"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AceEditor from 'vue2-ace-editor';
    import {General} from '../parsers/General';

    let parsers = {General};

    export default {
        name: 'TailwindConverter',
        components: {
            AceEditor
        },
        computed: {
            originalPreview() {
                return '<div id="converter-wrapper">' + this.originalHtml + '</div><style>' + this.originalCss + '</style>';
            },
            tailwindPreview() {
                return this.originalHtml;
            }
        },
        data: function () {
            return {
                originalHtml: '',
                originalCss: '',
                tailwindHtml: '',
                tailwindCss: '',
                originalPreviewWidth: '1920px'
            }
        },
        mounted: function () {
            this.$refs.tailwindHtml.editor.setReadOnly(true);
        },
        methods: {
            convert() {
                let sizes = {
                    '640px': 'sm',
                    '768px': 'md',
                    '1024px': 'lg',
                    '1280px': 'xl',
                    '1440px': 'xxl',
                    '1920px': 'responsive'
                };

                // first duplicate the tree
                let wrapper = this.$refs.originalPreview.contentWindow.document.querySelector('#converter-wrapper');
                let newWrapper = wrapper.cloneNode(true);

                // lets loop through the sizes
                for (let size in sizes) {
                    this.originalPreviewWidth = size;

                    console.log(size);
                    setTimeout(() => {
                        this.parse(wrapper, newWrapper, sizes[size] + ':');
                    }, 100);
                }

                setTimeout(() => {
                    this.tailwindHtml = newWrapper.innerHTML;
                }, 100);
            },

            /**
             *
             * @param {HTMLElement|Node} element
             * @param {HTMLElement|Node} fragment
             * @param {String} prefix
             */
            parse(element, fragment, prefix) {
                if (element) {
                    for (let i = 0; i < element.children.length; i++) {
                        let child = fragment.children[i];

                        for (let k in parsers) {
                            parsers[k](element.children[i], child, prefix);
                        }

                        if (element.children[i].children.length) {
                            this.parse(element.children[i], child, prefix);
                        }
                    }
                }
            },
            editorInit: function () {
                require('brace/ext/language_tools')
                require('brace/mode/css')
                require('brace/mode/html')
            }
        },
        watch: {
            originalPreview() {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
