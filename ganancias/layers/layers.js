var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Positron_1 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Gananciasporquintiles_2 = new ol.format.GeoJSON();
var features_Gananciasporquintiles_2 = format_Gananciasporquintiles_2.readFeatures(json_Gananciasporquintiles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gananciasporquintiles_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gananciasporquintiles_2.addFeatures(features_Gananciasporquintiles_2);
var lyr_Gananciasporquintiles_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gananciasporquintiles_2, 
                style: style_Gananciasporquintiles_2,
                popuplayertitle: "Ganancias por quintiles",
                interactive: true,
    title: 'Ganancias por quintiles<br />\
    <img src="styles/legend/Gananciasporquintiles_2_0.png" /> -1.57 - 1.62<br />\
    <img src="styles/legend/Gananciasporquintiles_2_1.png" /> 1.62 - 1.92<br />\
    <img src="styles/legend/Gananciasporquintiles_2_2.png" /> 1.92 - 2.18<br />\
    <img src="styles/legend/Gananciasporquintiles_2_3.png" /> 2.18 - 2.48<br />\
    <img src="styles/legend/Gananciasporquintiles_2_4.png" /> 2.48 - 3.44<br />'
        });
var format_Lmiteestatal_3 = new ol.format.GeoJSON();
var features_Lmiteestatal_3 = format_Lmiteestatal_3.readFeatures(json_Lmiteestatal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmiteestatal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmiteestatal_3.addFeatures(features_Lmiteestatal_3);
var lyr_Lmiteestatal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmiteestatal_3, 
                style: style_Lmiteestatal_3,
                popuplayertitle: "Límite estatal",
                interactive: false,
                title: '<img src="styles/legend/Lmiteestatal_3.png" /> Límite estatal'
            });

lyr_GoogleSatellite_0.setVisible(false);lyr_Positron_1.setVisible(true);lyr_Gananciasporquintiles_2.setVisible(true);lyr_Lmiteestatal_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Positron_1,lyr_Gananciasporquintiles_2,lyr_Lmiteestatal_3];
lyr_Gananciasporquintiles_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'ENTIDAD': 'Entidad', 'NOMGEO': 'Municipio', 'precio_tar': 'Precio TAR', 'precio_ven': 'Precio vendedores', 'ganancia_a': 'Ganancia', 'nombre_tar': 'Proveedores', });
lyr_Lmiteestatal_3.set('fieldAliases', {'qc_id': 'qc_id', 'cvegeo': 'cvegeo', 'cve_ent': 'cve_ent', 'nomgeo': 'nomgeo', 'stemreg': 'stemreg', 'egresados': 'egresados', });
lyr_Gananciasporquintiles_2.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'ENTIDAD': 'TextEdit', 'NOMGEO': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia_a': 'TextEdit', 'nombre_tar': 'TextEdit', });
lyr_Lmiteestatal_3.set('fieldImages', {'qc_id': 'TextEdit', 'cvegeo': 'TextEdit', 'cve_ent': 'TextEdit', 'nomgeo': 'TextEdit', 'stemreg': 'TextEdit', 'egresados': 'TextEdit', });
lyr_Gananciasporquintiles_2.set('fieldLabels', {'CVEGEO': 'hidden field', 'CVE_ENT': 'hidden field', 'CVE_MUN': 'hidden field', 'ENTIDAD': 'inline label - always visible', 'NOMGEO': 'inline label - always visible', 'precio_tar': 'inline label - always visible', 'precio_ven': 'inline label - always visible', 'ganancia_a': 'inline label - always visible', 'nombre_tar': 'inline label - always visible', });
lyr_Lmiteestatal_3.set('fieldLabels', {'qc_id': 'no label', 'cvegeo': 'no label', 'cve_ent': 'no label', 'nomgeo': 'no label', 'stemreg': 'no label', 'egresados': 'no label', });
lyr_Lmiteestatal_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});