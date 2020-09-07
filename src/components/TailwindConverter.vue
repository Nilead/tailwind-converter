<template>
    <div class="flex flex-col w-screen h-screen bg-gray-900">
        <!-- Sidebar / channel list -->
        <div class="flex items-center w-full py-3 text-white">
            <h1 class="text-xl my-0 font-sans px-3">
                <span>Tailwind Converter</span>
            </h1>

            <div class="ml-auto">
                <button type="button" class="bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded"
                        @click="toggle = 'settings'">Settings</button>

                <button type="button" class="bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded mx-4"
                        v-on:click="convert">Convert</button>
            </div>
        </div>
        <div class="flex h-full w-full">
            <div class="h-full w-1/3 bg-gray-700 text-white" style="cursor: col-resize;">
                <div class="cursor-default mr-4 grid grid-rows-2 h-full">
                    <div class="flex flex-col pt-1 shadow-2xl">
                        <div class="flex bg-black p-1">
                            {{ formatView }} html

                            <div class="relative ml-auto">
                                <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded inline-flex items-center"
                                        @click="toggle = 'formatHtml1'"
                                >
                                    <svg class="fill-current w-3 h-3" viewBox="-122.9 121.1 105.9 61.9">
                                        <path d="M-63.2 180.3l43.5-43.5c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7L-69.9 161l-37.2-37.2c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.6c-1.9 1.8-2.8 4.2-2.8 6.6 0 2.3.9 4.6 2.6 6.5 11.4 11.5 41 41.2 43 43.3l.2.2c3.6 3.6 10.3 3.6 13.9 0z"></path>
                                    </svg>
                                </button>

                                <div class="absolute z-10 right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl text-sm" v-show="toggle == 'formatHtml1'">
                                    <a class="block px-4 py-2 text-gray-800 hover:bg-gray-300 cursor-pointer" v-show="'original' == formatView" @click="formatView = 'tailwind'">Format tailwind</a>
                                    <a class="block px-4 py-2 text-gray-800 hover:bg-gray-300 cursor-pointer" v-show="'tailwind' == formatView" @click="formatView = 'original'">Format original</a>
                                </div>
                            </div>
                        </div>
                        <AceEditor v-show="'original' == formatView"
                                v-model="originalHtml"
                                @init="editorInit"
                                lang="html"
                                theme="chrome"
                        ></AceEditor>
                        <AceEditor v-show="'tailwind' == formatView"
                                ref="tailwindHtml"
                               v-model="tailwindHtml"
                               @init="editorInit"
                               lang="html"
                               theme="chrome"
                               readonly
                        ></AceEditor>
                    </div>

                    <div class="flex flex-col pt-1 shadow-2xl">
                        <div class="flex bg-black p-1">
                            {{ formatView }} css

                            <div class="relative ml-auto">
                                <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded inline-flex items-center"
                                        @click="toggle = 'formatHtml2'"
                                >
                                    <svg class="fill-current w-3 h-3" viewBox="-122.9 121.1 105.9 61.9">
                                        <path d="M-63.2 180.3l43.5-43.5c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7L-69.9 161l-37.2-37.2c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.6c-1.9 1.8-2.8 4.2-2.8 6.6 0 2.3.9 4.6 2.6 6.5 11.4 11.5 41 41.2 43 43.3l.2.2c3.6 3.6 10.3 3.6 13.9 0z"></path>
                                    </svg>
                                </button>

                                <div class="absolute z-10 right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl text-sm" v-show="toggle == 'formatHtml2'">
                                    <a class="block px-4 py-2 text-gray-800 hover:bg-gray-300 cursor-pointer" v-show="'original' == formatView" @click="formatView = 'tailwind'">Format tailwind</a>
                                    <a class="block px-4 py-2 text-gray-800 hover:bg-gray-300 cursor-pointer" v-show="'tailwind' == formatView" @click="formatView = 'original'">Format original</a>
                                </div>
                            </div>
                        </div>
                        <AceEditor v-show="'original' == formatView"
                                v-model="originalCss"
                                @init="editorInit"
                                lang="css"
                                theme="chrome"
                        ></AceEditor>
                        <AceEditor v-show="'tailwind' == formatView"
                                v-model="tailwindCss"
                                @init="editorInit"
                                lang="css"
                                theme="chrome"
                        ></AceEditor>
                    </div>
                </div>
            </div>

            <div class="w-2/3">
                <div class="flex flex-col h-full overflow-auto bg-white">
                    <div>{{ formatView }} preview</div>
                    <iframe v-show="'original' == formatView"
                            v-bind:style="{width: this.originalPreviewWidth}"
                            ref="originalPreview"
                            :srcdoc="originalPreview"/>

                    <iframe v-show="'tailwind' == formatView"
                            ref="tailwindPreview" :srcdoc="tailwindPreview"/>
                </div>
            </div>
        </div>

        <div class="fixed inset-0 z-50" v-show="toggle == 'settings'">
            <div class="flex justify-center items-center w-full h-full bg-black bg-opacity-25">
                <div class="flex flex-col rounded bg-white w-1/2 shadow-xl overflow-y-auto" style="height: 50vh">
                    <div class="flex items-center px-2 border-b">
                        <span class="p-3">Settings</span>
                        <button type="button" class="ml-auto p-3 border-0 hover:text-gray-700 outline-none" @click="toggle = ''">
                            <svg viewBox="0 0 100 100" class="fill-current w-3 h-3">
                                <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path></svg>
                        </button>
                    </div>
                    <div class="h-full m-5 overflow-hidden border hover:border-gray-500">
                        <AceEditor v-model="settingsJson"
                                   @init="editorInit"
                                   lang="json"
                                   theme="chrome"
                        ></AceEditor>
                    </div>
                    <div class="text-right px-5 mb-5">
                        <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-500 py-2 px-4 rounded">Submit</button>
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
                toggle: '',
                formatView: 'original',
                settingsJson: '',
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
