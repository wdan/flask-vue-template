<template>
    <div id="app">
        <navbar></navbar>
        <div class="row" :style="{width: setting.width + 'px', height: setting.height + 'px'}" style="margin: 0">
            <control-panel :setting="setting"></control-panel>
            <div class="col-10" style="height: 100%; padding: 0">
                <div id="main-view">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/nav-bar';
import ControlPanel from './components/control-panel/control-panel';

export default {
    name: 'App',
    components: {
        Navbar,
        ControlPanel,
        PointView,
        Overview,
        RadialView,
    },
    data() {
        return {
            setting: {
                width: 0,
                height: 0,
            },
        };
    },
    mounted() {
        this.$nextTick(function foo() {
            this.initialize();
        });
    },
    methods: {
        initialize() {
            this.setting.height = window.innerHeight - document.querySelector('.navbar').clientHeight;
            this.setting.width = window.innerWidth;
            window.addEventListener('resize', () => {
                this.setting.height = window.innerHeight - document.querySelector('.navbar').clientHeight;
                this.setting.width = window.innerWidth;
            });
        },
    },
};
</script>

<style lang="stylus">
#app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    font-size: 0.875em
    color: #2c3e50

.selected
    background-color: rgba(0, 0, 0, 0.1)

#main-view
    height: 69%
    border-bottom: 1px solid rgba(0, 0, 0, 0.4)

button
    cursor: pointer
</style>
