var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Poblacinde3a17aospormunicipio_1 = new ol.format.GeoJSON();
var features_Poblacinde3a17aospormunicipio_1 = format_Poblacinde3a17aospormunicipio_1.readFeatures(json_Poblacinde3a17aospormunicipio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacinde3a17aospormunicipio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacinde3a17aospormunicipio_1.addFeatures(features_Poblacinde3a17aospormunicipio_1);
var lyr_Poblacinde3a17aospormunicipio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacinde3a17aospormunicipio_1, 
                style: style_Poblacinde3a17aospormunicipio_1,
                popuplayertitle: "Población de 3 a 17 años por municipio",
                interactive: true,
    title: 'Población de 3 a 17 años por municipio<br />\
    <img src="styles/legend/Poblacinde3a17aospormunicipio_1_0.png" /> 598 - 7892<br />\
    <img src="styles/legend/Poblacinde3a17aospormunicipio_1_1.png" /> 7892 - 17960<br />\
    <img src="styles/legend/Poblacinde3a17aospormunicipio_1_2.png" /> 17960 - 27799<br />\
    <img src="styles/legend/Poblacinde3a17aospormunicipio_1_3.png" /> 27799 - 49758<br />\
    <img src="styles/legend/Poblacinde3a17aospormunicipio_1_4.png" /> 49758 - 69216<br />'
        });
var format_Isocronasapresidenciasmunicipales_2 = new ol.format.GeoJSON();
var features_Isocronasapresidenciasmunicipales_2 = format_Isocronasapresidenciasmunicipales_2.readFeatures(json_Isocronasapresidenciasmunicipales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isocronasapresidenciasmunicipales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isocronasapresidenciasmunicipales_2.addFeatures(features_Isocronasapresidenciasmunicipales_2);
var lyr_Isocronasapresidenciasmunicipales_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isocronasapresidenciasmunicipales_2, 
                style: style_Isocronasapresidenciasmunicipales_2,
                popuplayertitle: "Isocronas a presidencias municipales",
                interactive: true,
    title: 'Isocronas a presidencias municipales<br />\
    <img src="styles/legend/Isocronasapresidenciasmunicipales_2_0.png" /> 5 min<br />\
    <img src="styles/legend/Isocronasapresidenciasmunicipales_2_1.png" /> 10 min<br />\
    <img src="styles/legend/Isocronasapresidenciasmunicipales_2_2.png" /> 20 min<br />'
        });
var format_Marginacinporcolonia_3 = new ol.format.GeoJSON();
var features_Marginacinporcolonia_3 = format_Marginacinporcolonia_3.readFeatures(json_Marginacinporcolonia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marginacinporcolonia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marginacinporcolonia_3.addFeatures(features_Marginacinporcolonia_3);
var lyr_Marginacinporcolonia_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marginacinporcolonia_3, 
                style: style_Marginacinporcolonia_3,
                popuplayertitle: "Marginación por colonia",
                interactive: true,
    title: 'Marginación por colonia<br />\
    <img src="styles/legend/Marginacinporcolonia_3_0.png" /> Muy alto<br />\
    <img src="styles/legend/Marginacinporcolonia_3_1.png" /> Alto<br />\
    <img src="styles/legend/Marginacinporcolonia_3_2.png" /> Medio<br />\
    <img src="styles/legend/Marginacinporcolonia_3_3.png" /> Bajo<br />\
    <img src="styles/legend/Marginacinporcolonia_3_4.png" /> Muy bajo<br />'
        });
var format_Presidenciamunicipal_4 = new ol.format.GeoJSON();
var features_Presidenciamunicipal_4 = format_Presidenciamunicipal_4.readFeatures(json_Presidenciamunicipal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Presidenciamunicipal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Presidenciamunicipal_4.addFeatures(features_Presidenciamunicipal_4);
var lyr_Presidenciamunicipal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Presidenciamunicipal_4, 
                style: style_Presidenciamunicipal_4,
                popuplayertitle: "Presidencia municipal",
                interactive: true,
                title: '<img src="styles/legend/Presidenciamunicipal_4.png" /> Presidencia municipal'
            });
var format_EscuelasportipoenHidalgo_5 = new ol.format.GeoJSON();
var features_EscuelasportipoenHidalgo_5 = format_EscuelasportipoenHidalgo_5.readFeatures(json_EscuelasportipoenHidalgo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EscuelasportipoenHidalgo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EscuelasportipoenHidalgo_5.addFeatures(features_EscuelasportipoenHidalgo_5);
var lyr_EscuelasportipoenHidalgo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EscuelasportipoenHidalgo_5, 
                style: style_EscuelasportipoenHidalgo_5,
                popuplayertitle: "Escuelas por tipo en Hidalgo",
                interactive: true,
    title: 'Escuelas por tipo en Hidalgo<br />\
    <img src="styles/legend/EscuelasportipoenHidalgo_5_0.png" /> BÁSICA<br />\
    <img src="styles/legend/EscuelasportipoenHidalgo_5_1.png" /> CAPACITACIÓN<br />\
    <img src="styles/legend/EscuelasportipoenHidalgo_5_2.png" /> ESPECIAL<br />\
    <img src="styles/legend/EscuelasportipoenHidalgo_5_3.png" /> INICIAL<br />\
    <img src="styles/legend/EscuelasportipoenHidalgo_5_4.png" /> MEDIA SUPERIOR<br />\
    <img src="styles/legend/EscuelasportipoenHidalgo_5_5.png" /> OTROS<br />\
    <img src="styles/legend/EscuelasportipoenHidalgo_5_6.png" /> SUPERIOR<br />'
        });

lyr_Positron_0.setVisible(true);lyr_Poblacinde3a17aospormunicipio_1.setVisible(true);lyr_Isocronasapresidenciasmunicipales_2.setVisible(true);lyr_Marginacinporcolonia_3.setVisible(true);lyr_Presidenciamunicipal_4.setVisible(false);lyr_EscuelasportipoenHidalgo_5.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Poblacinde3a17aospormunicipio_1,lyr_Isocronasapresidenciasmunicipales_2,lyr_Marginacinporcolonia_3,lyr_Presidenciamunicipal_4,lyr_EscuelasportipoenHidalgo_5];
lyr_Poblacinde3a17aospormunicipio_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'Municipio', 'NOM_MUN': 'NOM_MUN', 'NOM_ENT': 'NOM_ENT', 'ENTIDAD': 'Entodad', 'MUN': 'MUN', 'POBTOT_INE': 'Población total', 'P_3A5': 'Población 3 a 5 años', 'P_3A5_F': 'Población 3 a 5 F', 'P_3A5_M': 'Población 3 a 5 M', 'P_6A11': 'Población 6 a 11 ', 'P_6A11_F': 'Población 6 a 11 F', 'P_6A11_M': 'P_6A11_M', 'P_12A14': 'Población 12 a 14', 'P_12A14_F': 'Población 12 a 14 F', 'P_12A14_M': 'Población 12 a 14 M', 'P_15A17': 'Población 15 a 17', 'P_15A17_F': 'Población 15 a 17 F', 'P_15A17_M': 'Población 15 a 17 M', 'P_3A17': 'Población 3 a 17 ', 'P3A17_F': 'Población 3 a 17 F', 'P3A17_M': 'Población 3 a 17 M', 'Tasa': 'Tasa (3 a 17 años) por 10 mil hab', });
lyr_Isocronasapresidenciasmunicipales_2.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Marginacinporcolonia_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CVE_COL': 'CVE_COL', 'ID_COL': 'ID_COL', 'COLONIA': 'Colonia', 'CP': 'CP', 'CVE_ENT': 'CVE_ENT', 'NOM_ENT': 'NOM_ENT', 'MUN': 'MUN', 'CVE_MUN': 'CVE_MUN', 'NOM_MUN': 'Municipio', 'LOC': 'LOC', 'NOM_LOC': 'Localidad', 'POBTOT': 'Población total', 'SBASC': '% sin educación básica', 'GM_2020': 'Grado de marginación', 'CLASIF': 'Tipo de asentamiento', });
lyr_Presidenciamunicipal_4.set('fieldAliases', {'field_1': 'field_1', 'entidad': 'Entidad', 'municipio': 'Municipio', });
lyr_EscuelasportipoenHidalgo_5.set('fieldAliases', {'CV_CCT': 'Clave CCT', 'C_NOMBRE': 'Nombre', 'C_TIPO': 'Tipo', 'CV_ADMINISTRATIVA': 'CV_ADMINISTRATIVA', 'C_ADMINISTRATIVA': 'C_ADMINISTRATIVA', 'C_ESTATUS': 'C_ESTATUS', 'INMUEBLE_CV_MUN': 'INMUEBLE_CV_MUN', 'INMUEBLE_C_NOM_MUN': 'Municipio', 'INMUEBLE_CV_LOC': 'INMUEBLE_CV_LOC', 'INMUEBLE_C_NOM_LOC': 'Localidad', 'INMUEBLE_LATITUD': 'INMUEBLE_LATITUD', 'INMUEBLE_LONGITUD': 'INMUEBLE_LONGITUD', 'SOSTENIMIENTO_CV_CONTROL': 'SOSTENIMIENTO_CV_CONTROL', 'SOSTENIMIENTO_C_CONTROL': 'Sostenimiento', 'TIPONIVELSUB_C_SERVICION1': 'Nivel/Tipo', 'TIPONIVELSUB_C_SERVICION2': 'Nivel', 'CARACTERISTCA_C_CARACTERIZAN2': 'CARACTERISTCA_C_CARACTERIZAN2', });
lyr_Poblacinde3a17aospormunicipio_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'NOM_MUN': 'TextEdit', 'NOM_ENT': 'TextEdit', 'ENTIDAD': 'TextEdit', 'MUN': 'TextEdit', 'POBTOT_INE': 'TextEdit', 'P_3A5': 'TextEdit', 'P_3A5_F': 'TextEdit', 'P_3A5_M': 'TextEdit', 'P_6A11': 'TextEdit', 'P_6A11_F': 'TextEdit', 'P_6A11_M': 'TextEdit', 'P_12A14': 'TextEdit', 'P_12A14_F': 'TextEdit', 'P_12A14_M': 'TextEdit', 'P_15A17': 'TextEdit', 'P_15A17_F': 'TextEdit', 'P_15A17_M': 'TextEdit', 'P_3A17': 'TextEdit', 'P3A17_F': 'TextEdit', 'P3A17_M': 'TextEdit', 'Tasa': 'TextEdit', });
lyr_Isocronasapresidenciasmunicipales_2.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Marginacinporcolonia_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'CVE_COL': 'TextEdit', 'ID_COL': 'Range', 'COLONIA': 'TextEdit', 'CP': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOM_ENT': 'TextEdit', 'MUN': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'POBTOT': 'TextEdit', 'SBASC': 'TextEdit', 'GM_2020': 'TextEdit', 'CLASIF': 'TextEdit', });
lyr_Presidenciamunicipal_4.set('fieldImages', {'field_1': 'TextEdit', 'entidad': 'TextEdit', 'municipio': 'TextEdit', });
lyr_EscuelasportipoenHidalgo_5.set('fieldImages', {'CV_CCT': 'TextEdit', 'C_NOMBRE': 'TextEdit', 'C_TIPO': 'TextEdit', 'CV_ADMINISTRATIVA': 'Range', 'C_ADMINISTRATIVA': 'TextEdit', 'C_ESTATUS': 'TextEdit', 'INMUEBLE_CV_MUN': 'Range', 'INMUEBLE_C_NOM_MUN': 'TextEdit', 'INMUEBLE_CV_LOC': 'Range', 'INMUEBLE_C_NOM_LOC': 'TextEdit', 'INMUEBLE_LATITUD': 'TextEdit', 'INMUEBLE_LONGITUD': 'TextEdit', 'SOSTENIMIENTO_CV_CONTROL': 'Range', 'SOSTENIMIENTO_C_CONTROL': 'TextEdit', 'TIPONIVELSUB_C_SERVICION1': 'TextEdit', 'TIPONIVELSUB_C_SERVICION2': 'TextEdit', 'CARACTERISTCA_C_CARACTERIZAN2': 'TextEdit', });
lyr_Poblacinde3a17aospormunicipio_1.set('fieldLabels', {'CVEGEO': 'hidden field', 'CVE_ENT': 'hidden field', 'CVE_MUN': 'hidden field', 'NOMGEO': 'inline label - always visible', 'NOM_MUN': 'inline label - always visible', 'NOM_ENT': 'inline label - always visible', 'ENTIDAD': 'hidden field', 'MUN': 'hidden field', 'POBTOT_INE': 'no label', 'P_3A5': 'inline label - always visible', 'P_3A5_F': 'inline label - always visible', 'P_3A5_M': 'inline label - always visible', 'P_6A11': 'inline label - always visible', 'P_6A11_F': 'inline label - always visible', 'P_6A11_M': 'inline label - always visible', 'P_12A14': 'inline label - always visible', 'P_12A14_F': 'inline label - always visible', 'P_12A14_M': 'inline label - always visible', 'P_15A17': 'inline label - always visible', 'P_15A17_F': 'inline label - always visible', 'P_15A17_M': 'inline label - always visible', 'P_3A17': 'inline label - always visible', 'P3A17_F': 'inline label - always visible', 'P3A17_M': 'inline label - always visible', 'Tasa': 'inline label - always visible', });
lyr_Isocronasapresidenciasmunicipales_2.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Marginacinporcolonia_3.set('fieldLabels', {'OBJECTID': 'no label', 'CVE_COL': 'no label', 'ID_COL': 'no label', 'COLONIA': 'no label', 'CP': 'no label', 'CVE_ENT': 'no label', 'NOM_ENT': 'no label', 'MUN': 'no label', 'CVE_MUN': 'no label', 'NOM_MUN': 'no label', 'LOC': 'no label', 'NOM_LOC': 'no label', 'POBTOT': 'no label', 'SBASC': 'no label', 'GM_2020': 'no label', 'CLASIF': 'no label', });
lyr_Presidenciamunicipal_4.set('fieldLabels', {'field_1': 'hidden field', 'entidad': 'inline label - always visible', 'municipio': 'inline label - always visible', });
lyr_EscuelasportipoenHidalgo_5.set('fieldLabels', {'CV_CCT': 'inline label - always visible', 'C_NOMBRE': 'inline label - always visible', 'C_TIPO': 'inline label - always visible', 'CV_ADMINISTRATIVA': 'hidden field', 'C_ADMINISTRATIVA': 'hidden field', 'C_ESTATUS': 'hidden field', 'INMUEBLE_CV_MUN': 'hidden field', 'INMUEBLE_C_NOM_MUN': 'hidden field', 'INMUEBLE_CV_LOC': 'hidden field', 'INMUEBLE_C_NOM_LOC': 'hidden field', 'INMUEBLE_LATITUD': 'hidden field', 'INMUEBLE_LONGITUD': 'hidden field', 'SOSTENIMIENTO_CV_CONTROL': 'hidden field', 'SOSTENIMIENTO_C_CONTROL': 'inline label - always visible', 'TIPONIVELSUB_C_SERVICION1': 'inline label - always visible', 'TIPONIVELSUB_C_SERVICION2': 'inline label - always visible', 'CARACTERISTCA_C_CARACTERIZAN2': 'hidden field', });
lyr_EscuelasportipoenHidalgo_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});