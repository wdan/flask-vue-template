<template>
    <div class="col-2" id="control-panel">
        <data-loader></data-loader>
    </div>
</template>

<script>
import './control-panel.styl';
import DataLoader from './data-loader';

export default {
    name: 'ControlPanel',
    mounted() {
    },
    data() {
        return {
        };
    },
    components: {
        DataLoader,
    },
    props: {
        setting: Object,
    },
};
</script>

