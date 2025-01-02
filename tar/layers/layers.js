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
var format_Municipios_2 = new ol.format.GeoJSON();
var features_Municipios_2 = format_Municipios_2.readFeatures(json_Municipios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_2.addFeatures(features_Municipios_2);
var lyr_Municipios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_2, 
                style: style_Municipios_2,
                popuplayertitle: "Municipios",
                interactive: true,
    title: 'Municipios<br />\
    <img src="styles/legend/Municipios_2_0.png" /> Grupo 1<br />\
    <img src="styles/legend/Municipios_2_1.png" /> Grupo 2<br />\
    <img src="styles/legend/Municipios_2_2.png" /> Grupo 3<br />\
    <img src="styles/legend/Municipios_2_3.png" /> Grupo 4<br />\
    <img src="styles/legend/Municipios_2_4.png" /> Grupo 5<br />\
    <img src="styles/legend/Municipios_2_5.png" /> Grupo 6<br />\
    <img src="styles/legend/Municipios_2_6.png" /> Grupo 7<br />\
    <img src="styles/legend/Municipios_2_7.png" /> Grupo 8<br />'
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

lyr_GoogleSatellite_0.setVisible(false);lyr_Positron_1.setVisible(true);lyr_Municipios_2.setVisible(true);lyr_Lmiteestatal_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Positron_1,lyr_Municipios_2,lyr_Lmiteestatal_3];
lyr_Municipios_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'Municipio', 'tar': 'TAR', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'Precio TAR', 'precio_ven': 'Precio vendedores', 'ganancia': 'Ganancia', 'nom_entida': 'Entidad', 'nom_munici': 'nom_munici', });
lyr_Lmiteestatal_3.set('fieldAliases', {'qc_id': 'qc_id', 'cvegeo': 'cvegeo', 'cve_ent': 'cve_ent', 'nomgeo': 'nomgeo', 'stemreg': 'stemreg', 'egresados': 'egresados', });
lyr_Municipios_2.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_Lmiteestatal_3.set('fieldImages', {'qc_id': 'TextEdit', 'cvegeo': 'TextEdit', 'cve_ent': 'TextEdit', 'nomgeo': 'TextEdit', 'stemreg': 'TextEdit', 'egresados': 'TextEdit', });
lyr_Municipios_2.set('fieldLabels', {'CVEGEO': 'hidden field', 'CVE_ENT': 'hidden field', 'CVE_MUN': 'hidden field', 'NOMGEO': 'inline label - always visible', 'tar': 'inline label - always visible', 'color': 'hidden field', 'nombre_tar': 'hidden field', 'precio_tar': 'inline label - always visible', 'precio_ven': 'inline label - always visible', 'ganancia': 'inline label - always visible', 'nom_entida': 'inline label - always visible', 'nom_munici': 'hidden field', });
lyr_Lmiteestatal_3.set('fieldLabels', {'qc_id': 'no label', 'cvegeo': 'no label', 'cve_ent': 'no label', 'nomgeo': 'no label', 'stemreg': 'no label', 'egresados': 'no label', });
lyr_Lmiteestatal_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});