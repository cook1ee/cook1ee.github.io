Vue.component("resource-name", {
    props: ["layer", "layerid"],
    methods: {
        getName: function()
        {
            return PrestigeLayer.getNameForLayer(this.layerid);
        }
    },
    template: `<layer-colored-text :layerid="layerid" v-html="getName()"></layer-colored-text>`
})