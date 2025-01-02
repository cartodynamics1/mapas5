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
    <img src="styles/legend/Municipios_2_0.png" /> DOS BOCAS<br />\
    <img src="styles/legend/Municipios_2_1.png" /> TAD 18 DE MARZO, AZC.,DF<br />\
    <img src="styles/legend/Municipios_2_2.png" /> TAD ACAPULCO, GRO.<br />\
    <img src="styles/legend/Municipios_2_3.png" /> TAD AGUASCALIENTES, AGS.<br />\
    <img src="styles/legend/Municipios_2_4.png" /> TAD ANIL, D.F.<br />\
    <img src="styles/legend/Municipios_2_5.png" /> TAD BARRANCA DEL MUERTO, D.F.<br />\
    <img src="styles/legend/Municipios_2_6.png" /> TAD CADEREYTA, N.L.<br />\
    <img src="styles/legend/Municipios_2_7.png" /> TAD CAMPECHE, CAMP.<br />\
    <img src="styles/legend/Municipios_2_8.png" /> TAD CD. JUAREZ, CHIH.<br />\
    <img src="styles/legend/Municipios_2_9.png" /> TAD CD. MANTE, TAMPS.<br />\
    <img src="styles/legend/Municipios_2_10.png" /> TAD CD. OBREGON, SON.<br />\
    <img src="styles/legend/Municipios_2_11.png" /> TAD CD. VALLES, S.L.P.<br />\
    <img src="styles/legend/Municipios_2_12.png" /> TAD CD. VICTORIA, TAMPS.<br />\
    <img src="styles/legend/Municipios_2_13.png" /> TAD CELAYA, GTO.<br />\
    <img src="styles/legend/Municipios_2_14.png" /> TAD CHIHUAHUA, CHIH.<br />\
    <img src="styles/legend/Municipios_2_15.png" /> TAD COLIMA, COL.<br />\
    <img src="styles/legend/Municipios_2_16.png" /> TAD CUAUTLA, MOR.<br />\
    <img src="styles/legend/Municipios_2_17.png" /> TAD CUERNAVACA, MOR.<br />\
    <img src="styles/legend/Municipios_2_18.png" /> TAD CULIACAN, SIN.<br />\
    <img src="styles/legend/Municipios_2_19.png" /> TAD DURANGO, DGO.<br />\
    <img src="styles/legend/Municipios_2_20.png" /> TAD EL CASTILLO, JAL.<br />\
    <img src="styles/legend/Municipios_2_21.png" /> TAD ENSENADA, B.C.N.<br />\
    <img src="styles/legend/Municipios_2_22.png" /> TAD ESCAMELA, VER.<br />\
    <img src="styles/legend/Municipios_2_23.png" /> TAD GOMEZ PALACIO, DGO.<br />\
    <img src="styles/legend/Municipios_2_24.png" /> TAD GUAMUCHIL, SIN.<br />\
    <img src="styles/legend/Municipios_2_25.png" /> TAD GUAYMAS, SON.<br />\
    <img src="styles/legend/Municipios_2_26.png" /> TAD HERMOSILLO, SON.<br />\
    <img src="styles/legend/Municipios_2_27.png" /> TAD HGO.DEL PARRAL, CHIH.<br />\
    <img src="styles/legend/Municipios_2_28.png" /> TAD IGUALA, GRO.<br />\
    <img src="styles/legend/Municipios_2_29.png" /> TAD IRAPUATO, GTO.<br />\
    <img src="styles/legend/Municipios_2_30.png" /> TAD JALAPA, VER.<br />\
    <img src="styles/legend/Municipios_2_31.png" /> TAD LA PAZ, B.C.S.<br />\
    <img src="styles/legend/Municipios_2_32.png" /> TAD LAZARO CARDENAS, MICH.<br />\
    <img src="styles/legend/Municipios_2_33.png" /> TAD LEON, GTO.<br />\
    <img src="styles/legend/Municipios_2_34.png" /> TAD MADERO, TAMPS.<br />\
    <img src="styles/legend/Municipios_2_35.png" /> TAD MAGDALENA, SON.<br />\
    <img src="styles/legend/Municipios_2_36.png" /> TAD MATEHUALA, S.L.P.<br />\
    <img src="styles/legend/Municipios_2_37.png" /> TAD MAZATLAN, SIN.<br />\
    <img src="styles/legend/Municipios_2_38.png" /> TAD MERIDA, YUC.<br />\
    <img src="styles/legend/Municipios_2_39.png" /> TAD MEXICALI, B.C.N.<br />\
    <img src="styles/legend/Municipios_2_40.png" /> TAD MINATITLAN, VER.<br />\
    <img src="styles/legend/Municipios_2_41.png" /> TAD MONCLOVA, COAH.<br />\
    <img src="styles/legend/Municipios_2_42.png" /> TAD MORELIA, MICH.<br />\
    <img src="styles/legend/Municipios_2_43.png" /> TAD NAVOJOA, SON.<br />\
    <img src="styles/legend/Municipios_2_44.png" /> TAD NOGALES, SON.<br />\
    <img src="styles/legend/Municipios_2_45.png" /> TAD NVO.LAREDO, TAMPS.<br />\
    <img src="styles/legend/Municipios_2_46.png" /> TAD OAXACA, OAX.<br />\
    <img src="styles/legend/Municipios_2_47.png" /> TAD PACHUCA, HGO.<br />\
    <img src="styles/legend/Municipios_2_48.png" /> TAD PAJARITOS, VER.<br />\
    <img src="styles/legend/Municipios_2_49.png" /> TAD PEROTE, VER.<br />\
    <img src="styles/legend/Municipios_2_50.png" /> TAD POZA RICA, VER.<br />\
    <img src="styles/legend/Municipios_2_51.png" /> TAD PROGRESO, YUC.<br />\
    <img src="styles/legend/Municipios_2_52.png" /> TAD PUEBLA, PUE.<br />\
    <img src="styles/legend/Municipios_2_53.png" /> TAD QUERETARO, QRO.<br />\
    <img src="styles/legend/Municipios_2_54.png" /> TAD REYNOSA, TAMPS.<br />\
    <img src="styles/legend/Municipios_2_55.png" /> TAD ROSARITO, B.C.N.<br />\
    <img src="styles/legend/Municipios_2_56.png" /> TAD S.MIAHUATLAN, PUE.<br />\
    <img src="styles/legend/Municipios_2_57.png" /> TAD SABINAS, COAH.<br />\
    <img src="styles/legend/Municipios_2_58.png" /> TAD SALINA CRUZ, OAX.<br />\
    <img src="styles/legend/Municipios_2_59.png" /> TAD SALTILLO, COAH.<br />\
    <img src="styles/legend/Municipios_2_60.png" /> TAD SAN JUAN IXHUATEPEC, MEX.<br />\
    <img src="styles/legend/Municipios_2_61.png" /> TAD SAN LUIS POTOSI, S.L.P.<br />\
    <img src="styles/legend/Municipios_2_62.png" /> TAD STA.CATARINA MTY.,NL<br />\
    <img src="styles/legend/Municipios_2_63.png" /> TAD TAPACHULA, CHIS.<br />\
    <img src="styles/legend/Municipios_2_64.png" /> TAD TEPEIXTLES, COL.<br />\
    <img src="styles/legend/Municipios_2_65.png" /> TAD TEPIC, NAY.<br />\
    <img src="styles/legend/Municipios_2_66.png" /> TAD TIERRA BLANCA, VER.<br />\
    <img src="styles/legend/Municipios_2_67.png" /> TAD TOLUCA, MEX.<br />\
    <img src="styles/legend/Municipios_2_68.png" /> TAD TOPOLOBAMPO, SIN.<br />\
    <img src="styles/legend/Municipios_2_69.png" /> TAD TULA, HGO.<br />\
    <img src="styles/legend/Municipios_2_70.png" /> TAD TUXTLA GTZ., CHIS.<br />\
    <img src="styles/legend/Municipios_2_71.png" /> TAD URUAPAN, MICH.<br />\
    <img src="styles/legend/Municipios_2_72.png" /> TAD VERACRUZ, VER.<br />\
    <img src="styles/legend/Municipios_2_73.png" /> TAD VILLAHERMOSA, TAB.<br />\
    <img src="styles/legend/Municipios_2_74.png" /> TAD ZACATECAS, ZAC.<br />\
    <img src="styles/legend/Municipios_2_75.png" /> TAD ZAMORA, MICH.<br />\
    <img src="styles/legend/Municipios_2_76.png" /> TAD ZAPOPAN, JAL.<br />'
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