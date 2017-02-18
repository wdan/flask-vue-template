import Vue from 'vue';

const PipeService = new Vue({
    data: {
        DATA_CHANGE: 'data-change',
        SUBATTRIBUTE_UPDATE: 'subattribute-update',
        SELECT_POINT: 'select-point',
        SWITCH_TO_FULL_DATA: 'full-data',
    },
});

export default PipeService;
