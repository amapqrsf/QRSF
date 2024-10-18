<script>
    import {MapLibre, Marker} from "svelte-maplibre";
    import QRSFPing from "../assets/QRSFPing.svelte"
</script>

<div class="map">
    <MapLibre
            style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
            class=""
            standardControls
            center={[-1.547497653123415, 47.18871367452753]}
            zoom={15}
    >
        <Marker
                lngLat={[-1.547497653123415, 47.18871367452753]}
        >
            <span> <QRSFPing /> </span>
        </Marker>
    </MapLibre>
</div>

<style>
    .map > div {
        width: 100%;
        height: 100%
    }
</style>