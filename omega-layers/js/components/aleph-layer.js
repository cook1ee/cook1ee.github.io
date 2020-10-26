Vue.component("aleph-layer", {
    data: function()
    {
        return {
            aleph: game.alephLayer
        }
    },
    computed: {
        canProduceAleph: function()
        {
            return this.aleph.getAlephBoostFromLayer().gt(0);
        },
        isSoftCapped: function()
        {
            return this.aleph.aleph.gt(1e300);
        }
    },
    methods: {
        formatNumber: (n, prec, prec1000, lim) => functions.formatNumber(n, prec, prec1000, lim),
        highestLayer: () => functions.maxLayerUnlocked()
    },
    template: `<div class="aleph-layer">
<div class="resource">
    <p>You have {{formatNumber(aleph.aleph, 2, 2, 1e9)}} <span class="aleph">&aleph;</span></p>
    <p>You get {{formatNumber(aleph.getAlephGain(), 2, 2, 1e9)}} <span class="aleph">&aleph;</span>/s</p>
</div>
<div class="boosts">
    <div v-if="canProduceAleph">
        <p>Your Aleph raises <resource-name :layerid="0"></resource-name> Production to the Power of {{formatNumber(aleph.getAlphaPower(), 2, 3, 1e6)}} 
            <span v-if="isSoftCapped">(softcapped)</span></p>
        <p>Your highest Layer is <resource-name :layerid="highestLayer()"></resource-name>, translated to a x{{formatNumber(aleph.getAlephBoostFromLayer(), 2, 2)}} Boost on <span class="aleph">&aleph;</span> Production</p>
    </div>
    <div v-else>
        <p>You need to go <resource-name :layerid="3"></resource-name> at least once to produce <span class="aleph">&aleph;</span></p>
    </div>
</div>
<div class="tabs">
    <button @click="aleph.maxAll()">Max All (M)</button>
</div>
<div class="upgrades">
    <aleph-upgrade :upgrade="aleph.upgrades.alephGain"></aleph-upgrade>
    <aleph-upgrade :upgrade="aleph.upgrades.alephGainBonus"></aleph-upgrade>
</div>
</div>`
});