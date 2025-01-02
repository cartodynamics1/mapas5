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
var format_DOSBOCAS_2 = new ol.format.GeoJSON();
var features_DOSBOCAS_2 = format_DOSBOCAS_2.readFeatures(json_DOSBOCAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DOSBOCAS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DOSBOCAS_2.addFeatures(features_DOSBOCAS_2);
var lyr_DOSBOCAS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DOSBOCAS_2, 
                style: style_DOSBOCAS_2,
                popuplayertitle: "DOS BOCAS",
                interactive: true,
                title: '<img src="styles/legend/DOSBOCAS_2.png" /> DOS BOCAS'
            });
var format_TAD18DEMARZOAZCDF_3 = new ol.format.GeoJSON();
var features_TAD18DEMARZOAZCDF_3 = format_TAD18DEMARZOAZCDF_3.readFeatures(json_TAD18DEMARZOAZCDF_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TAD18DEMARZOAZCDF_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAD18DEMARZOAZCDF_3.addFeatures(features_TAD18DEMARZOAZCDF_3);
var lyr_TAD18DEMARZOAZCDF_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAD18DEMARZOAZCDF_3, 
                style: style_TAD18DEMARZOAZCDF_3,
                popuplayertitle: "TAD 18 DE MARZO, AZC.,DF",
                interactive: true,
                title: '<img src="styles/legend/TAD18DEMARZOAZCDF_3.png" /> TAD 18 DE MARZO, AZC.,DF'
            });
var format_TADACAPULCOGRO_4 = new ol.format.GeoJSON();
var features_TADACAPULCOGRO_4 = format_TADACAPULCOGRO_4.readFeatures(json_TADACAPULCOGRO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADACAPULCOGRO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADACAPULCOGRO_4.addFeatures(features_TADACAPULCOGRO_4);
var lyr_TADACAPULCOGRO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADACAPULCOGRO_4, 
                style: style_TADACAPULCOGRO_4,
                popuplayertitle: "TAD ACAPULCO, GRO.",
                interactive: true,
                title: '<img src="styles/legend/TADACAPULCOGRO_4.png" /> TAD ACAPULCO, GRO.'
            });
var format_TADAGUASCALIENTESAGS_5 = new ol.format.GeoJSON();
var features_TADAGUASCALIENTESAGS_5 = format_TADAGUASCALIENTESAGS_5.readFeatures(json_TADAGUASCALIENTESAGS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADAGUASCALIENTESAGS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADAGUASCALIENTESAGS_5.addFeatures(features_TADAGUASCALIENTESAGS_5);
var lyr_TADAGUASCALIENTESAGS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADAGUASCALIENTESAGS_5, 
                style: style_TADAGUASCALIENTESAGS_5,
                popuplayertitle: "TAD AGUASCALIENTES, AGS.",
                interactive: true,
                title: '<img src="styles/legend/TADAGUASCALIENTESAGS_5.png" /> TAD AGUASCALIENTES, AGS.'
            });
var format_TADANILDF_6 = new ol.format.GeoJSON();
var features_TADANILDF_6 = format_TADANILDF_6.readFeatures(json_TADANILDF_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADANILDF_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADANILDF_6.addFeatures(features_TADANILDF_6);
var lyr_TADANILDF_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADANILDF_6, 
                style: style_TADANILDF_6,
                popuplayertitle: "TAD ANIL, D.F.",
                interactive: true,
                title: '<img src="styles/legend/TADANILDF_6.png" /> TAD ANIL, D.F.'
            });
var format_TADBARRANCADELMUERTODF_7 = new ol.format.GeoJSON();
var features_TADBARRANCADELMUERTODF_7 = format_TADBARRANCADELMUERTODF_7.readFeatures(json_TADBARRANCADELMUERTODF_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADBARRANCADELMUERTODF_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADBARRANCADELMUERTODF_7.addFeatures(features_TADBARRANCADELMUERTODF_7);
var lyr_TADBARRANCADELMUERTODF_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADBARRANCADELMUERTODF_7, 
                style: style_TADBARRANCADELMUERTODF_7,
                popuplayertitle: "TAD BARRANCA DEL MUERTO, D.F.",
                interactive: true,
                title: '<img src="styles/legend/TADBARRANCADELMUERTODF_7.png" /> TAD BARRANCA DEL MUERTO, D.F.'
            });
var format_TADCADEREYTANL_8 = new ol.format.GeoJSON();
var features_TADCADEREYTANL_8 = format_TADCADEREYTANL_8.readFeatures(json_TADCADEREYTANL_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADCADEREYTANL_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADCADEREYTANL_8.addFeatures(features_TADCADEREYTANL_8);
var lyr_TADCADEREYTANL_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADCADEREYTANL_8, 
                style: style_TADCADEREYTANL_8,
                popuplayertitle: "TAD CADEREYTA, N.L.",
                interactive: true,
                title: '<img src="styles/legend/TADCADEREYTANL_8.png" /> TAD CADEREYTA, N.L.'
            });
var format_TADCAMPECHECAMP_9 = new ol.format.GeoJSON();
var features_TADCAMPECHECAMP_9 = format_TADCAMPECHECAMP_9.readFeatures(json_TADCAMPECHECAMP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADCAMPECHECAMP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADCAMPECHECAMP_9.addFeatures(features_TADCAMPECHECAMP_9);
var lyr_TADCAMPECHECAMP_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADCAMPECHECAMP_9, 
                style: style_TADCAMPECHECAMP_9,
                popuplayertitle: "TAD CAMPECHE, CAMP.",
                interactive: true,
                title: '<img src="styles/legend/TADCAMPECHECAMP_9.png" /> TAD CAMPECHE, CAMP.'
            });
var format_TADCDJUAREZCHIH_10 = new ol.format.GeoJSON();
var features_TADCDJUAREZCHIH_10 = format_TADCDJUAREZCHIH_10.readFeatures(json_TADCDJUAREZCHIH_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADCDJUAREZCHIH_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADCDJUAREZCHIH_10.addFeatures(features_TADCDJUAREZCHIH_10);
var lyr_TADCDJUAREZCHIH_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADCDJUAREZCHIH_10, 
                style: style_TADCDJUAREZCHIH_10,
                popuplayertitle: "TAD CD. JUAREZ, CHIH.",
                interactive: true,
                title: '<img src="styles/legend/TADCDJUAREZCHIH_10.png" /> TAD CD. JUAREZ, CHIH.'
            });
var format_TADCDMANTETAMPS_11 = new ol.format.GeoJSON();
var features_TADCDMANTETAMPS_11 = format_TADCDMANTETAMPS_11.readFeatures(json_TADCDMANTETAMPS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADCDMANTETAMPS_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADCDMANTETAMPS_11.addFeatures(features_TADCDMANTETAMPS_11);
var lyr_TADCDMANTETAMPS_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADCDMANTETAMPS_11, 
                style: style_TADCDMANTETAMPS_11,
                popuplayertitle: "TAD CD. MANTE, TAMPS.",
                interactive: true,
                title: '<img src="styles/legend/TADCDMANTETAMPS_11.png" /> TAD CD. MANTE, TAMPS.'
            });
var format_TADCDOBREGONSON_12 = new ol.format.GeoJSON();
var features_TADCDOBREGONSON_12 = format_TADCDOBREGONSON_12.readFeatures(json_TADCDOBREGONSON_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADCDOBREGONSON_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADCDOBREGONSON_12.addFeatures(features_TADCDOBREGONSON_12);
var lyr_TADCDOBREGONSON_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADCDOBREGONSON_12, 
                style: style_TADCDOBREGONSON_12,
                popuplayertitle: "TAD CD. OBREGON, SON.",
                interactive: true,
                title: '<img src="styles/legend/TADCDOBREGONSON_12.png" /> TAD CD. OBREGON, SON.'
            });
var format_TADCDVALLESSLP_13 = new ol.format.GeoJSON();
var features_TADCDVALLESSLP_13 = format_TADCDVALLESSLP_13.readFeatures(json_TADCDVALLESSLP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADCDVALLESSLP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADCDVALLESSLP_13.addFeatures(features_TADCDVALLESSLP_13);
var lyr_TADCDVALLESSLP_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADCDVALLESSLP_13, 
                style: style_TADCDVALLESSLP_13,
                popuplayertitle: "TAD CD. VALLES, S.L.P.",
                interactive: true,
                title: '<img src="styles/legend/TADCDVALLESSLP_13.png" /> TAD CD. VALLES, S.L.P.'
            });
var format_TADCDVICTORIATAMPS_14 = new ol.format.GeoJSON();
var features_TADCDVICTORIATAMPS_14 = format_TADCDVICTORIATAMPS_14.readFeatures(json_TADCDVICTORIATAMPS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADCDVICTORIATAMPS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADCDVICTORIATAMPS_14.addFeatures(features_TADCDVICTORIATAMPS_14);
var lyr_TADCDVICTORIATAMPS_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADCDVICTORIATAMPS_14, 
                style: style_TADCDVICTORIATAMPS_14,
                popuplayertitle: "TAD CD. VICTORIA, TAMPS.",
                interactive: true,
                title: '<img src="styles/legend/TADCDVICTORIATAMPS_14.png" /> TAD CD. VICTORIA, TAMPS.'
            });
var format_TADCELAYAGTO_15 = new ol.format.GeoJSON();
var features_TADCELAYAGTO_15 = format_TADCELAYAGTO_15.readFeatures(json_TADCELAYAGTO_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADCELAYAGTO_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADCELAYAGTO_15.addFeatures(features_TADCELAYAGTO_15);
var lyr_TADCELAYAGTO_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADCELAYAGTO_15, 
                style: style_TADCELAYAGTO_15,
                popuplayertitle: "TAD CELAYA, GTO.",
                interactive: true,
                title: '<img src="styles/legend/TADCELAYAGTO_15.png" /> TAD CELAYA, GTO.'
            });
var format_TADCHIHUAHUACHIH_16 = new ol.format.GeoJSON();
var features_TADCHIHUAHUACHIH_16 = format_TADCHIHUAHUACHIH_16.readFeatures(json_TADCHIHUAHUACHIH_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADCHIHUAHUACHIH_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADCHIHUAHUACHIH_16.addFeatures(features_TADCHIHUAHUACHIH_16);
var lyr_TADCHIHUAHUACHIH_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADCHIHUAHUACHIH_16, 
                style: style_TADCHIHUAHUACHIH_16,
                popuplayertitle: "TAD CHIHUAHUA, CHIH.",
                interactive: true,
                title: '<img src="styles/legend/TADCHIHUAHUACHIH_16.png" /> TAD CHIHUAHUA, CHIH.'
            });
var format_TADCOLIMACOL_17 = new ol.format.GeoJSON();
var features_TADCOLIMACOL_17 = format_TADCOLIMACOL_17.readFeatures(json_TADCOLIMACOL_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADCOLIMACOL_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADCOLIMACOL_17.addFeatures(features_TADCOLIMACOL_17);
var lyr_TADCOLIMACOL_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADCOLIMACOL_17, 
                style: style_TADCOLIMACOL_17,
                popuplayertitle: "TAD COLIMA, COL.",
                interactive: true,
                title: '<img src="styles/legend/TADCOLIMACOL_17.png" /> TAD COLIMA, COL.'
            });
var format_TADCUAUTLAMOR_18 = new ol.format.GeoJSON();
var features_TADCUAUTLAMOR_18 = format_TADCUAUTLAMOR_18.readFeatures(json_TADCUAUTLAMOR_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADCUAUTLAMOR_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADCUAUTLAMOR_18.addFeatures(features_TADCUAUTLAMOR_18);
var lyr_TADCUAUTLAMOR_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADCUAUTLAMOR_18, 
                style: style_TADCUAUTLAMOR_18,
                popuplayertitle: "TAD CUAUTLA, MOR.",
                interactive: true,
                title: '<img src="styles/legend/TADCUAUTLAMOR_18.png" /> TAD CUAUTLA, MOR.'
            });
var format_TADCUERNAVACAMOR_19 = new ol.format.GeoJSON();
var features_TADCUERNAVACAMOR_19 = format_TADCUERNAVACAMOR_19.readFeatures(json_TADCUERNAVACAMOR_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADCUERNAVACAMOR_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADCUERNAVACAMOR_19.addFeatures(features_TADCUERNAVACAMOR_19);
var lyr_TADCUERNAVACAMOR_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADCUERNAVACAMOR_19, 
                style: style_TADCUERNAVACAMOR_19,
                popuplayertitle: "TAD CUERNAVACA, MOR.",
                interactive: true,
                title: '<img src="styles/legend/TADCUERNAVACAMOR_19.png" /> TAD CUERNAVACA, MOR.'
            });
var format_TADCULIACANSIN_20 = new ol.format.GeoJSON();
var features_TADCULIACANSIN_20 = format_TADCULIACANSIN_20.readFeatures(json_TADCULIACANSIN_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADCULIACANSIN_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADCULIACANSIN_20.addFeatures(features_TADCULIACANSIN_20);
var lyr_TADCULIACANSIN_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADCULIACANSIN_20, 
                style: style_TADCULIACANSIN_20,
                popuplayertitle: "TAD CULIACAN, SIN.",
                interactive: true,
                title: '<img src="styles/legend/TADCULIACANSIN_20.png" /> TAD CULIACAN, SIN.'
            });
var format_TADDURANGODGO_21 = new ol.format.GeoJSON();
var features_TADDURANGODGO_21 = format_TADDURANGODGO_21.readFeatures(json_TADDURANGODGO_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADDURANGODGO_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADDURANGODGO_21.addFeatures(features_TADDURANGODGO_21);
var lyr_TADDURANGODGO_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADDURANGODGO_21, 
                style: style_TADDURANGODGO_21,
                popuplayertitle: "TAD DURANGO, DGO.",
                interactive: true,
                title: '<img src="styles/legend/TADDURANGODGO_21.png" /> TAD DURANGO, DGO.'
            });
var format_TADELCASTILLOJAL_22 = new ol.format.GeoJSON();
var features_TADELCASTILLOJAL_22 = format_TADELCASTILLOJAL_22.readFeatures(json_TADELCASTILLOJAL_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADELCASTILLOJAL_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADELCASTILLOJAL_22.addFeatures(features_TADELCASTILLOJAL_22);
var lyr_TADELCASTILLOJAL_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADELCASTILLOJAL_22, 
                style: style_TADELCASTILLOJAL_22,
                popuplayertitle: "TAD EL CASTILLO, JAL.",
                interactive: true,
                title: '<img src="styles/legend/TADELCASTILLOJAL_22.png" /> TAD EL CASTILLO, JAL.'
            });
var format_TADENSENADABCN_23 = new ol.format.GeoJSON();
var features_TADENSENADABCN_23 = format_TADENSENADABCN_23.readFeatures(json_TADENSENADABCN_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADENSENADABCN_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADENSENADABCN_23.addFeatures(features_TADENSENADABCN_23);
var lyr_TADENSENADABCN_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADENSENADABCN_23, 
                style: style_TADENSENADABCN_23,
                popuplayertitle: "TAD ENSENADA, B.C.N.",
                interactive: true,
                title: '<img src="styles/legend/TADENSENADABCN_23.png" /> TAD ENSENADA, B.C.N.'
            });
var format_TADESCAMELAVER_24 = new ol.format.GeoJSON();
var features_TADESCAMELAVER_24 = format_TADESCAMELAVER_24.readFeatures(json_TADESCAMELAVER_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADESCAMELAVER_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADESCAMELAVER_24.addFeatures(features_TADESCAMELAVER_24);
var lyr_TADESCAMELAVER_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADESCAMELAVER_24, 
                style: style_TADESCAMELAVER_24,
                popuplayertitle: "TAD ESCAMELA, VER.",
                interactive: true,
                title: '<img src="styles/legend/TADESCAMELAVER_24.png" /> TAD ESCAMELA, VER.'
            });
var format_TADGOMEZPALACIODGO_25 = new ol.format.GeoJSON();
var features_TADGOMEZPALACIODGO_25 = format_TADGOMEZPALACIODGO_25.readFeatures(json_TADGOMEZPALACIODGO_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADGOMEZPALACIODGO_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADGOMEZPALACIODGO_25.addFeatures(features_TADGOMEZPALACIODGO_25);
var lyr_TADGOMEZPALACIODGO_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADGOMEZPALACIODGO_25, 
                style: style_TADGOMEZPALACIODGO_25,
                popuplayertitle: "TAD GOMEZ PALACIO, DGO.",
                interactive: true,
                title: '<img src="styles/legend/TADGOMEZPALACIODGO_25.png" /> TAD GOMEZ PALACIO, DGO.'
            });
var format_TADGUAMUCHILSIN_26 = new ol.format.GeoJSON();
var features_TADGUAMUCHILSIN_26 = format_TADGUAMUCHILSIN_26.readFeatures(json_TADGUAMUCHILSIN_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADGUAMUCHILSIN_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADGUAMUCHILSIN_26.addFeatures(features_TADGUAMUCHILSIN_26);
var lyr_TADGUAMUCHILSIN_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADGUAMUCHILSIN_26, 
                style: style_TADGUAMUCHILSIN_26,
                popuplayertitle: "TAD GUAMUCHIL, SIN.",
                interactive: true,
                title: '<img src="styles/legend/TADGUAMUCHILSIN_26.png" /> TAD GUAMUCHIL, SIN.'
            });
var format_TADGUAYMASSON_27 = new ol.format.GeoJSON();
var features_TADGUAYMASSON_27 = format_TADGUAYMASSON_27.readFeatures(json_TADGUAYMASSON_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADGUAYMASSON_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADGUAYMASSON_27.addFeatures(features_TADGUAYMASSON_27);
var lyr_TADGUAYMASSON_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADGUAYMASSON_27, 
                style: style_TADGUAYMASSON_27,
                popuplayertitle: "TAD GUAYMAS, SON.",
                interactive: true,
                title: '<img src="styles/legend/TADGUAYMASSON_27.png" /> TAD GUAYMAS, SON.'
            });
var format_TADHERMOSILLOSON_28 = new ol.format.GeoJSON();
var features_TADHERMOSILLOSON_28 = format_TADHERMOSILLOSON_28.readFeatures(json_TADHERMOSILLOSON_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADHERMOSILLOSON_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADHERMOSILLOSON_28.addFeatures(features_TADHERMOSILLOSON_28);
var lyr_TADHERMOSILLOSON_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADHERMOSILLOSON_28, 
                style: style_TADHERMOSILLOSON_28,
                popuplayertitle: "TAD HERMOSILLO, SON.",
                interactive: true,
                title: '<img src="styles/legend/TADHERMOSILLOSON_28.png" /> TAD HERMOSILLO, SON.'
            });
var format_TADHGODELPARRALCHIH_29 = new ol.format.GeoJSON();
var features_TADHGODELPARRALCHIH_29 = format_TADHGODELPARRALCHIH_29.readFeatures(json_TADHGODELPARRALCHIH_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADHGODELPARRALCHIH_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADHGODELPARRALCHIH_29.addFeatures(features_TADHGODELPARRALCHIH_29);
var lyr_TADHGODELPARRALCHIH_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADHGODELPARRALCHIH_29, 
                style: style_TADHGODELPARRALCHIH_29,
                popuplayertitle: "TAD HGO.DEL PARRAL, CHIH.",
                interactive: true,
                title: '<img src="styles/legend/TADHGODELPARRALCHIH_29.png" /> TAD HGO.DEL PARRAL, CHIH.'
            });
var format_TADIGUALAGRO_30 = new ol.format.GeoJSON();
var features_TADIGUALAGRO_30 = format_TADIGUALAGRO_30.readFeatures(json_TADIGUALAGRO_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADIGUALAGRO_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADIGUALAGRO_30.addFeatures(features_TADIGUALAGRO_30);
var lyr_TADIGUALAGRO_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADIGUALAGRO_30, 
                style: style_TADIGUALAGRO_30,
                popuplayertitle: "TAD IGUALA, GRO.",
                interactive: true,
                title: '<img src="styles/legend/TADIGUALAGRO_30.png" /> TAD IGUALA, GRO.'
            });
var format_TADIRAPUATOGTO_31 = new ol.format.GeoJSON();
var features_TADIRAPUATOGTO_31 = format_TADIRAPUATOGTO_31.readFeatures(json_TADIRAPUATOGTO_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADIRAPUATOGTO_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADIRAPUATOGTO_31.addFeatures(features_TADIRAPUATOGTO_31);
var lyr_TADIRAPUATOGTO_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADIRAPUATOGTO_31, 
                style: style_TADIRAPUATOGTO_31,
                popuplayertitle: "TAD IRAPUATO, GTO.",
                interactive: true,
                title: '<img src="styles/legend/TADIRAPUATOGTO_31.png" /> TAD IRAPUATO, GTO.'
            });
var format_TADJALAPAVER_32 = new ol.format.GeoJSON();
var features_TADJALAPAVER_32 = format_TADJALAPAVER_32.readFeatures(json_TADJALAPAVER_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADJALAPAVER_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADJALAPAVER_32.addFeatures(features_TADJALAPAVER_32);
var lyr_TADJALAPAVER_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADJALAPAVER_32, 
                style: style_TADJALAPAVER_32,
                popuplayertitle: "TAD JALAPA, VER.",
                interactive: true,
                title: '<img src="styles/legend/TADJALAPAVER_32.png" /> TAD JALAPA, VER.'
            });
var format_TADLAPAZBCS_33 = new ol.format.GeoJSON();
var features_TADLAPAZBCS_33 = format_TADLAPAZBCS_33.readFeatures(json_TADLAPAZBCS_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADLAPAZBCS_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADLAPAZBCS_33.addFeatures(features_TADLAPAZBCS_33);
var lyr_TADLAPAZBCS_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADLAPAZBCS_33, 
                style: style_TADLAPAZBCS_33,
                popuplayertitle: "TAD LA PAZ, B.C.S.",
                interactive: true,
                title: '<img src="styles/legend/TADLAPAZBCS_33.png" /> TAD LA PAZ, B.C.S.'
            });
var format_TADLAZAROCARDENASMICH_34 = new ol.format.GeoJSON();
var features_TADLAZAROCARDENASMICH_34 = format_TADLAZAROCARDENASMICH_34.readFeatures(json_TADLAZAROCARDENASMICH_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADLAZAROCARDENASMICH_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADLAZAROCARDENASMICH_34.addFeatures(features_TADLAZAROCARDENASMICH_34);
var lyr_TADLAZAROCARDENASMICH_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADLAZAROCARDENASMICH_34, 
                style: style_TADLAZAROCARDENASMICH_34,
                popuplayertitle: "TAD LAZARO CARDENAS, MICH.",
                interactive: true,
                title: '<img src="styles/legend/TADLAZAROCARDENASMICH_34.png" /> TAD LAZARO CARDENAS, MICH.'
            });
var format_TADLEONGTO_35 = new ol.format.GeoJSON();
var features_TADLEONGTO_35 = format_TADLEONGTO_35.readFeatures(json_TADLEONGTO_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADLEONGTO_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADLEONGTO_35.addFeatures(features_TADLEONGTO_35);
var lyr_TADLEONGTO_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADLEONGTO_35, 
                style: style_TADLEONGTO_35,
                popuplayertitle: "TAD LEON, GTO.",
                interactive: true,
                title: '<img src="styles/legend/TADLEONGTO_35.png" /> TAD LEON, GTO.'
            });
var format_TADMADEROTAMPS_36 = new ol.format.GeoJSON();
var features_TADMADEROTAMPS_36 = format_TADMADEROTAMPS_36.readFeatures(json_TADMADEROTAMPS_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADMADEROTAMPS_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADMADEROTAMPS_36.addFeatures(features_TADMADEROTAMPS_36);
var lyr_TADMADEROTAMPS_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADMADEROTAMPS_36, 
                style: style_TADMADEROTAMPS_36,
                popuplayertitle: "TAD MADERO, TAMPS.",
                interactive: true,
                title: '<img src="styles/legend/TADMADEROTAMPS_36.png" /> TAD MADERO, TAMPS.'
            });
var format_TADMAGDALENASON_37 = new ol.format.GeoJSON();
var features_TADMAGDALENASON_37 = format_TADMAGDALENASON_37.readFeatures(json_TADMAGDALENASON_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADMAGDALENASON_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADMAGDALENASON_37.addFeatures(features_TADMAGDALENASON_37);
var lyr_TADMAGDALENASON_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADMAGDALENASON_37, 
                style: style_TADMAGDALENASON_37,
                popuplayertitle: "TAD MAGDALENA, SON.",
                interactive: true,
                title: '<img src="styles/legend/TADMAGDALENASON_37.png" /> TAD MAGDALENA, SON.'
            });
var format_TADMATEHUALASLP_38 = new ol.format.GeoJSON();
var features_TADMATEHUALASLP_38 = format_TADMATEHUALASLP_38.readFeatures(json_TADMATEHUALASLP_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADMATEHUALASLP_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADMATEHUALASLP_38.addFeatures(features_TADMATEHUALASLP_38);
var lyr_TADMATEHUALASLP_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADMATEHUALASLP_38, 
                style: style_TADMATEHUALASLP_38,
                popuplayertitle: "TAD MATEHUALA, S.L.P.",
                interactive: true,
                title: '<img src="styles/legend/TADMATEHUALASLP_38.png" /> TAD MATEHUALA, S.L.P.'
            });
var format_TADMAZATLANSIN_39 = new ol.format.GeoJSON();
var features_TADMAZATLANSIN_39 = format_TADMAZATLANSIN_39.readFeatures(json_TADMAZATLANSIN_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADMAZATLANSIN_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADMAZATLANSIN_39.addFeatures(features_TADMAZATLANSIN_39);
var lyr_TADMAZATLANSIN_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADMAZATLANSIN_39, 
                style: style_TADMAZATLANSIN_39,
                popuplayertitle: "TAD MAZATLAN, SIN.",
                interactive: true,
                title: '<img src="styles/legend/TADMAZATLANSIN_39.png" /> TAD MAZATLAN, SIN.'
            });
var format_TADMERIDAYUC_40 = new ol.format.GeoJSON();
var features_TADMERIDAYUC_40 = format_TADMERIDAYUC_40.readFeatures(json_TADMERIDAYUC_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADMERIDAYUC_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADMERIDAYUC_40.addFeatures(features_TADMERIDAYUC_40);
var lyr_TADMERIDAYUC_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADMERIDAYUC_40, 
                style: style_TADMERIDAYUC_40,
                popuplayertitle: "TAD MERIDA, YUC.",
                interactive: true,
                title: '<img src="styles/legend/TADMERIDAYUC_40.png" /> TAD MERIDA, YUC.'
            });
var format_TADMEXICALIBCN_41 = new ol.format.GeoJSON();
var features_TADMEXICALIBCN_41 = format_TADMEXICALIBCN_41.readFeatures(json_TADMEXICALIBCN_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADMEXICALIBCN_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADMEXICALIBCN_41.addFeatures(features_TADMEXICALIBCN_41);
var lyr_TADMEXICALIBCN_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADMEXICALIBCN_41, 
                style: style_TADMEXICALIBCN_41,
                popuplayertitle: "TAD MEXICALI, B.C.N.",
                interactive: true,
                title: '<img src="styles/legend/TADMEXICALIBCN_41.png" /> TAD MEXICALI, B.C.N.'
            });
var format_TADMINATITLANVER_42 = new ol.format.GeoJSON();
var features_TADMINATITLANVER_42 = format_TADMINATITLANVER_42.readFeatures(json_TADMINATITLANVER_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADMINATITLANVER_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADMINATITLANVER_42.addFeatures(features_TADMINATITLANVER_42);
var lyr_TADMINATITLANVER_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADMINATITLANVER_42, 
                style: style_TADMINATITLANVER_42,
                popuplayertitle: "TAD MINATITLAN, VER.",
                interactive: true,
                title: '<img src="styles/legend/TADMINATITLANVER_42.png" /> TAD MINATITLAN, VER.'
            });
var format_TADMONCLOVACOAH_43 = new ol.format.GeoJSON();
var features_TADMONCLOVACOAH_43 = format_TADMONCLOVACOAH_43.readFeatures(json_TADMONCLOVACOAH_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADMONCLOVACOAH_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADMONCLOVACOAH_43.addFeatures(features_TADMONCLOVACOAH_43);
var lyr_TADMONCLOVACOAH_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADMONCLOVACOAH_43, 
                style: style_TADMONCLOVACOAH_43,
                popuplayertitle: "TAD MONCLOVA, COAH.",
                interactive: true,
                title: '<img src="styles/legend/TADMONCLOVACOAH_43.png" /> TAD MONCLOVA, COAH.'
            });
var format_TADMORELIAMICH_44 = new ol.format.GeoJSON();
var features_TADMORELIAMICH_44 = format_TADMORELIAMICH_44.readFeatures(json_TADMORELIAMICH_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADMORELIAMICH_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADMORELIAMICH_44.addFeatures(features_TADMORELIAMICH_44);
var lyr_TADMORELIAMICH_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADMORELIAMICH_44, 
                style: style_TADMORELIAMICH_44,
                popuplayertitle: "TAD MORELIA, MICH.",
                interactive: true,
                title: '<img src="styles/legend/TADMORELIAMICH_44.png" /> TAD MORELIA, MICH.'
            });
var format_TADNAVOJOASON_45 = new ol.format.GeoJSON();
var features_TADNAVOJOASON_45 = format_TADNAVOJOASON_45.readFeatures(json_TADNAVOJOASON_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADNAVOJOASON_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADNAVOJOASON_45.addFeatures(features_TADNAVOJOASON_45);
var lyr_TADNAVOJOASON_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADNAVOJOASON_45, 
                style: style_TADNAVOJOASON_45,
                popuplayertitle: "TAD NAVOJOA, SON.",
                interactive: true,
                title: '<img src="styles/legend/TADNAVOJOASON_45.png" /> TAD NAVOJOA, SON.'
            });
var format_TADNOGALESSON_46 = new ol.format.GeoJSON();
var features_TADNOGALESSON_46 = format_TADNOGALESSON_46.readFeatures(json_TADNOGALESSON_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADNOGALESSON_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADNOGALESSON_46.addFeatures(features_TADNOGALESSON_46);
var lyr_TADNOGALESSON_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADNOGALESSON_46, 
                style: style_TADNOGALESSON_46,
                popuplayertitle: "TAD NOGALES, SON.",
                interactive: true,
                title: '<img src="styles/legend/TADNOGALESSON_46.png" /> TAD NOGALES, SON.'
            });
var format_TADNVOLAREDOTAMPS_47 = new ol.format.GeoJSON();
var features_TADNVOLAREDOTAMPS_47 = format_TADNVOLAREDOTAMPS_47.readFeatures(json_TADNVOLAREDOTAMPS_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADNVOLAREDOTAMPS_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADNVOLAREDOTAMPS_47.addFeatures(features_TADNVOLAREDOTAMPS_47);
var lyr_TADNVOLAREDOTAMPS_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADNVOLAREDOTAMPS_47, 
                style: style_TADNVOLAREDOTAMPS_47,
                popuplayertitle: "TAD NVO.LAREDO, TAMPS.",
                interactive: true,
                title: '<img src="styles/legend/TADNVOLAREDOTAMPS_47.png" /> TAD NVO.LAREDO, TAMPS.'
            });
var format_TADOAXACAOAX_48 = new ol.format.GeoJSON();
var features_TADOAXACAOAX_48 = format_TADOAXACAOAX_48.readFeatures(json_TADOAXACAOAX_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADOAXACAOAX_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADOAXACAOAX_48.addFeatures(features_TADOAXACAOAX_48);
var lyr_TADOAXACAOAX_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADOAXACAOAX_48, 
                style: style_TADOAXACAOAX_48,
                popuplayertitle: "TAD OAXACA, OAX.",
                interactive: true,
                title: '<img src="styles/legend/TADOAXACAOAX_48.png" /> TAD OAXACA, OAX.'
            });
var format_TADPACHUCAHGO_49 = new ol.format.GeoJSON();
var features_TADPACHUCAHGO_49 = format_TADPACHUCAHGO_49.readFeatures(json_TADPACHUCAHGO_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADPACHUCAHGO_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADPACHUCAHGO_49.addFeatures(features_TADPACHUCAHGO_49);
var lyr_TADPACHUCAHGO_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADPACHUCAHGO_49, 
                style: style_TADPACHUCAHGO_49,
                popuplayertitle: "TAD PACHUCA, HGO.",
                interactive: true,
                title: '<img src="styles/legend/TADPACHUCAHGO_49.png" /> TAD PACHUCA, HGO.'
            });
var format_TADPAJARITOSVER_50 = new ol.format.GeoJSON();
var features_TADPAJARITOSVER_50 = format_TADPAJARITOSVER_50.readFeatures(json_TADPAJARITOSVER_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADPAJARITOSVER_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADPAJARITOSVER_50.addFeatures(features_TADPAJARITOSVER_50);
var lyr_TADPAJARITOSVER_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADPAJARITOSVER_50, 
                style: style_TADPAJARITOSVER_50,
                popuplayertitle: "TAD PAJARITOS, VER.",
                interactive: true,
                title: '<img src="styles/legend/TADPAJARITOSVER_50.png" /> TAD PAJARITOS, VER.'
            });
var format_TADPEROTEVER_51 = new ol.format.GeoJSON();
var features_TADPEROTEVER_51 = format_TADPEROTEVER_51.readFeatures(json_TADPEROTEVER_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADPEROTEVER_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADPEROTEVER_51.addFeatures(features_TADPEROTEVER_51);
var lyr_TADPEROTEVER_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADPEROTEVER_51, 
                style: style_TADPEROTEVER_51,
                popuplayertitle: "TAD PEROTE, VER.",
                interactive: true,
                title: '<img src="styles/legend/TADPEROTEVER_51.png" /> TAD PEROTE, VER.'
            });
var format_TADPOZARICAVER_52 = new ol.format.GeoJSON();
var features_TADPOZARICAVER_52 = format_TADPOZARICAVER_52.readFeatures(json_TADPOZARICAVER_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADPOZARICAVER_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADPOZARICAVER_52.addFeatures(features_TADPOZARICAVER_52);
var lyr_TADPOZARICAVER_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADPOZARICAVER_52, 
                style: style_TADPOZARICAVER_52,
                popuplayertitle: "TAD POZA RICA, VER.",
                interactive: true,
                title: '<img src="styles/legend/TADPOZARICAVER_52.png" /> TAD POZA RICA, VER.'
            });
var format_TADPROGRESOYUC_53 = new ol.format.GeoJSON();
var features_TADPROGRESOYUC_53 = format_TADPROGRESOYUC_53.readFeatures(json_TADPROGRESOYUC_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADPROGRESOYUC_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADPROGRESOYUC_53.addFeatures(features_TADPROGRESOYUC_53);
var lyr_TADPROGRESOYUC_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADPROGRESOYUC_53, 
                style: style_TADPROGRESOYUC_53,
                popuplayertitle: "TAD PROGRESO, YUC.",
                interactive: true,
                title: '<img src="styles/legend/TADPROGRESOYUC_53.png" /> TAD PROGRESO, YUC.'
            });
var format_TADPUEBLAPUE_54 = new ol.format.GeoJSON();
var features_TADPUEBLAPUE_54 = format_TADPUEBLAPUE_54.readFeatures(json_TADPUEBLAPUE_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADPUEBLAPUE_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADPUEBLAPUE_54.addFeatures(features_TADPUEBLAPUE_54);
var lyr_TADPUEBLAPUE_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADPUEBLAPUE_54, 
                style: style_TADPUEBLAPUE_54,
                popuplayertitle: "TAD PUEBLA, PUE.",
                interactive: true,
                title: '<img src="styles/legend/TADPUEBLAPUE_54.png" /> TAD PUEBLA, PUE.'
            });
var format_TADQUERETAROQRO_55 = new ol.format.GeoJSON();
var features_TADQUERETAROQRO_55 = format_TADQUERETAROQRO_55.readFeatures(json_TADQUERETAROQRO_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADQUERETAROQRO_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADQUERETAROQRO_55.addFeatures(features_TADQUERETAROQRO_55);
var lyr_TADQUERETAROQRO_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADQUERETAROQRO_55, 
                style: style_TADQUERETAROQRO_55,
                popuplayertitle: "TAD QUERETARO, QRO.",
                interactive: true,
                title: '<img src="styles/legend/TADQUERETAROQRO_55.png" /> TAD QUERETARO, QRO.'
            });
var format_TADREYNOSATAMPS_56 = new ol.format.GeoJSON();
var features_TADREYNOSATAMPS_56 = format_TADREYNOSATAMPS_56.readFeatures(json_TADREYNOSATAMPS_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADREYNOSATAMPS_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADREYNOSATAMPS_56.addFeatures(features_TADREYNOSATAMPS_56);
var lyr_TADREYNOSATAMPS_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADREYNOSATAMPS_56, 
                style: style_TADREYNOSATAMPS_56,
                popuplayertitle: "TAD REYNOSA, TAMPS.",
                interactive: true,
                title: '<img src="styles/legend/TADREYNOSATAMPS_56.png" /> TAD REYNOSA, TAMPS.'
            });
var format_TADROSARITOBCN_57 = new ol.format.GeoJSON();
var features_TADROSARITOBCN_57 = format_TADROSARITOBCN_57.readFeatures(json_TADROSARITOBCN_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADROSARITOBCN_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADROSARITOBCN_57.addFeatures(features_TADROSARITOBCN_57);
var lyr_TADROSARITOBCN_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADROSARITOBCN_57, 
                style: style_TADROSARITOBCN_57,
                popuplayertitle: "TAD ROSARITO, B.C.N.",
                interactive: true,
                title: '<img src="styles/legend/TADROSARITOBCN_57.png" /> TAD ROSARITO, B.C.N.'
            });
var format_TADSMIAHUATLANPUE_58 = new ol.format.GeoJSON();
var features_TADSMIAHUATLANPUE_58 = format_TADSMIAHUATLANPUE_58.readFeatures(json_TADSMIAHUATLANPUE_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADSMIAHUATLANPUE_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADSMIAHUATLANPUE_58.addFeatures(features_TADSMIAHUATLANPUE_58);
var lyr_TADSMIAHUATLANPUE_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADSMIAHUATLANPUE_58, 
                style: style_TADSMIAHUATLANPUE_58,
                popuplayertitle: "TAD S.MIAHUATLAN, PUE.",
                interactive: true,
                title: '<img src="styles/legend/TADSMIAHUATLANPUE_58.png" /> TAD S.MIAHUATLAN, PUE.'
            });
var format_TADSABINASCOAH_59 = new ol.format.GeoJSON();
var features_TADSABINASCOAH_59 = format_TADSABINASCOAH_59.readFeatures(json_TADSABINASCOAH_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADSABINASCOAH_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADSABINASCOAH_59.addFeatures(features_TADSABINASCOAH_59);
var lyr_TADSABINASCOAH_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADSABINASCOAH_59, 
                style: style_TADSABINASCOAH_59,
                popuplayertitle: "TAD SABINAS, COAH.",
                interactive: true,
                title: '<img src="styles/legend/TADSABINASCOAH_59.png" /> TAD SABINAS, COAH.'
            });
var format_TADSALINACRUZOAX_60 = new ol.format.GeoJSON();
var features_TADSALINACRUZOAX_60 = format_TADSALINACRUZOAX_60.readFeatures(json_TADSALINACRUZOAX_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADSALINACRUZOAX_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADSALINACRUZOAX_60.addFeatures(features_TADSALINACRUZOAX_60);
var lyr_TADSALINACRUZOAX_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADSALINACRUZOAX_60, 
                style: style_TADSALINACRUZOAX_60,
                popuplayertitle: "TAD SALINA CRUZ, OAX.",
                interactive: true,
                title: '<img src="styles/legend/TADSALINACRUZOAX_60.png" /> TAD SALINA CRUZ, OAX.'
            });
var format_TADSALTILLOCOAH_61 = new ol.format.GeoJSON();
var features_TADSALTILLOCOAH_61 = format_TADSALTILLOCOAH_61.readFeatures(json_TADSALTILLOCOAH_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADSALTILLOCOAH_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADSALTILLOCOAH_61.addFeatures(features_TADSALTILLOCOAH_61);
var lyr_TADSALTILLOCOAH_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADSALTILLOCOAH_61, 
                style: style_TADSALTILLOCOAH_61,
                popuplayertitle: "TAD SALTILLO, COAH.",
                interactive: true,
                title: '<img src="styles/legend/TADSALTILLOCOAH_61.png" /> TAD SALTILLO, COAH.'
            });
var format_TADSANJUANIXHUATEPECMEX_62 = new ol.format.GeoJSON();
var features_TADSANJUANIXHUATEPECMEX_62 = format_TADSANJUANIXHUATEPECMEX_62.readFeatures(json_TADSANJUANIXHUATEPECMEX_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADSANJUANIXHUATEPECMEX_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADSANJUANIXHUATEPECMEX_62.addFeatures(features_TADSANJUANIXHUATEPECMEX_62);
var lyr_TADSANJUANIXHUATEPECMEX_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADSANJUANIXHUATEPECMEX_62, 
                style: style_TADSANJUANIXHUATEPECMEX_62,
                popuplayertitle: "TAD SAN JUAN IXHUATEPEC, MEX.",
                interactive: true,
                title: '<img src="styles/legend/TADSANJUANIXHUATEPECMEX_62.png" /> TAD SAN JUAN IXHUATEPEC, MEX.'
            });
var format_TADSANLUISPOTOSISLP_63 = new ol.format.GeoJSON();
var features_TADSANLUISPOTOSISLP_63 = format_TADSANLUISPOTOSISLP_63.readFeatures(json_TADSANLUISPOTOSISLP_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADSANLUISPOTOSISLP_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADSANLUISPOTOSISLP_63.addFeatures(features_TADSANLUISPOTOSISLP_63);
var lyr_TADSANLUISPOTOSISLP_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADSANLUISPOTOSISLP_63, 
                style: style_TADSANLUISPOTOSISLP_63,
                popuplayertitle: "TAD SAN LUIS POTOSI, S.L.P.",
                interactive: true,
                title: '<img src="styles/legend/TADSANLUISPOTOSISLP_63.png" /> TAD SAN LUIS POTOSI, S.L.P.'
            });
var format_TADSTACATARINAMTYNL_64 = new ol.format.GeoJSON();
var features_TADSTACATARINAMTYNL_64 = format_TADSTACATARINAMTYNL_64.readFeatures(json_TADSTACATARINAMTYNL_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADSTACATARINAMTYNL_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADSTACATARINAMTYNL_64.addFeatures(features_TADSTACATARINAMTYNL_64);
var lyr_TADSTACATARINAMTYNL_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADSTACATARINAMTYNL_64, 
                style: style_TADSTACATARINAMTYNL_64,
                popuplayertitle: "TAD STA.CATARINA MTY.,NL",
                interactive: true,
                title: '<img src="styles/legend/TADSTACATARINAMTYNL_64.png" /> TAD STA.CATARINA MTY.,NL'
            });
var format_TADTAPACHULACHIS_65 = new ol.format.GeoJSON();
var features_TADTAPACHULACHIS_65 = format_TADTAPACHULACHIS_65.readFeatures(json_TADTAPACHULACHIS_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADTAPACHULACHIS_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADTAPACHULACHIS_65.addFeatures(features_TADTAPACHULACHIS_65);
var lyr_TADTAPACHULACHIS_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADTAPACHULACHIS_65, 
                style: style_TADTAPACHULACHIS_65,
                popuplayertitle: "TAD TAPACHULA, CHIS.",
                interactive: true,
                title: '<img src="styles/legend/TADTAPACHULACHIS_65.png" /> TAD TAPACHULA, CHIS.'
            });
var format_TADTEPEIXTLESCOL_66 = new ol.format.GeoJSON();
var features_TADTEPEIXTLESCOL_66 = format_TADTEPEIXTLESCOL_66.readFeatures(json_TADTEPEIXTLESCOL_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADTEPEIXTLESCOL_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADTEPEIXTLESCOL_66.addFeatures(features_TADTEPEIXTLESCOL_66);
var lyr_TADTEPEIXTLESCOL_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADTEPEIXTLESCOL_66, 
                style: style_TADTEPEIXTLESCOL_66,
                popuplayertitle: "TAD TEPEIXTLES, COL.",
                interactive: true,
                title: '<img src="styles/legend/TADTEPEIXTLESCOL_66.png" /> TAD TEPEIXTLES, COL.'
            });
var format_TADTEPICNAY_67 = new ol.format.GeoJSON();
var features_TADTEPICNAY_67 = format_TADTEPICNAY_67.readFeatures(json_TADTEPICNAY_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADTEPICNAY_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADTEPICNAY_67.addFeatures(features_TADTEPICNAY_67);
var lyr_TADTEPICNAY_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADTEPICNAY_67, 
                style: style_TADTEPICNAY_67,
                popuplayertitle: "TAD TEPIC, NAY.",
                interactive: true,
                title: '<img src="styles/legend/TADTEPICNAY_67.png" /> TAD TEPIC, NAY.'
            });
var format_TADTIERRABLANCAVER_68 = new ol.format.GeoJSON();
var features_TADTIERRABLANCAVER_68 = format_TADTIERRABLANCAVER_68.readFeatures(json_TADTIERRABLANCAVER_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADTIERRABLANCAVER_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADTIERRABLANCAVER_68.addFeatures(features_TADTIERRABLANCAVER_68);
var lyr_TADTIERRABLANCAVER_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADTIERRABLANCAVER_68, 
                style: style_TADTIERRABLANCAVER_68,
                popuplayertitle: "TAD TIERRA BLANCA, VER.",
                interactive: true,
                title: '<img src="styles/legend/TADTIERRABLANCAVER_68.png" /> TAD TIERRA BLANCA, VER.'
            });
var format_TADTOLUCAMEX_69 = new ol.format.GeoJSON();
var features_TADTOLUCAMEX_69 = format_TADTOLUCAMEX_69.readFeatures(json_TADTOLUCAMEX_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADTOLUCAMEX_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADTOLUCAMEX_69.addFeatures(features_TADTOLUCAMEX_69);
var lyr_TADTOLUCAMEX_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADTOLUCAMEX_69, 
                style: style_TADTOLUCAMEX_69,
                popuplayertitle: "TAD TOLUCA, MEX.",
                interactive: true,
                title: '<img src="styles/legend/TADTOLUCAMEX_69.png" /> TAD TOLUCA, MEX.'
            });
var format_TADTOPOLOBAMPOSIN_70 = new ol.format.GeoJSON();
var features_TADTOPOLOBAMPOSIN_70 = format_TADTOPOLOBAMPOSIN_70.readFeatures(json_TADTOPOLOBAMPOSIN_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADTOPOLOBAMPOSIN_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADTOPOLOBAMPOSIN_70.addFeatures(features_TADTOPOLOBAMPOSIN_70);
var lyr_TADTOPOLOBAMPOSIN_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADTOPOLOBAMPOSIN_70, 
                style: style_TADTOPOLOBAMPOSIN_70,
                popuplayertitle: "TAD TOPOLOBAMPO, SIN.",
                interactive: true,
                title: '<img src="styles/legend/TADTOPOLOBAMPOSIN_70.png" /> TAD TOPOLOBAMPO, SIN.'
            });
var format_TADTULAHGO_71 = new ol.format.GeoJSON();
var features_TADTULAHGO_71 = format_TADTULAHGO_71.readFeatures(json_TADTULAHGO_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADTULAHGO_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADTULAHGO_71.addFeatures(features_TADTULAHGO_71);
var lyr_TADTULAHGO_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADTULAHGO_71, 
                style: style_TADTULAHGO_71,
                popuplayertitle: "TAD TULA, HGO.",
                interactive: true,
                title: '<img src="styles/legend/TADTULAHGO_71.png" /> TAD TULA, HGO.'
            });
var format_TADTUXTLAGTZCHIS_72 = new ol.format.GeoJSON();
var features_TADTUXTLAGTZCHIS_72 = format_TADTUXTLAGTZCHIS_72.readFeatures(json_TADTUXTLAGTZCHIS_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADTUXTLAGTZCHIS_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADTUXTLAGTZCHIS_72.addFeatures(features_TADTUXTLAGTZCHIS_72);
var lyr_TADTUXTLAGTZCHIS_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADTUXTLAGTZCHIS_72, 
                style: style_TADTUXTLAGTZCHIS_72,
                popuplayertitle: "TAD TUXTLA GTZ., CHIS.",
                interactive: true,
                title: '<img src="styles/legend/TADTUXTLAGTZCHIS_72.png" /> TAD TUXTLA GTZ., CHIS.'
            });
var format_TADURUAPANMICH_73 = new ol.format.GeoJSON();
var features_TADURUAPANMICH_73 = format_TADURUAPANMICH_73.readFeatures(json_TADURUAPANMICH_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADURUAPANMICH_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADURUAPANMICH_73.addFeatures(features_TADURUAPANMICH_73);
var lyr_TADURUAPANMICH_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADURUAPANMICH_73, 
                style: style_TADURUAPANMICH_73,
                popuplayertitle: "TAD URUAPAN, MICH.",
                interactive: true,
                title: '<img src="styles/legend/TADURUAPANMICH_73.png" /> TAD URUAPAN, MICH.'
            });
var format_TADVERACRUZVER_74 = new ol.format.GeoJSON();
var features_TADVERACRUZVER_74 = format_TADVERACRUZVER_74.readFeatures(json_TADVERACRUZVER_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADVERACRUZVER_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADVERACRUZVER_74.addFeatures(features_TADVERACRUZVER_74);
var lyr_TADVERACRUZVER_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADVERACRUZVER_74, 
                style: style_TADVERACRUZVER_74,
                popuplayertitle: "TAD VERACRUZ, VER.",
                interactive: true,
                title: '<img src="styles/legend/TADVERACRUZVER_74.png" /> TAD VERACRUZ, VER.'
            });
var format_TADVILLAHERMOSATAB_75 = new ol.format.GeoJSON();
var features_TADVILLAHERMOSATAB_75 = format_TADVILLAHERMOSATAB_75.readFeatures(json_TADVILLAHERMOSATAB_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADVILLAHERMOSATAB_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADVILLAHERMOSATAB_75.addFeatures(features_TADVILLAHERMOSATAB_75);
var lyr_TADVILLAHERMOSATAB_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADVILLAHERMOSATAB_75, 
                style: style_TADVILLAHERMOSATAB_75,
                popuplayertitle: "TAD VILLAHERMOSA, TAB.",
                interactive: true,
                title: '<img src="styles/legend/TADVILLAHERMOSATAB_75.png" /> TAD VILLAHERMOSA, TAB.'
            });
var format_TADZACATECASZAC_76 = new ol.format.GeoJSON();
var features_TADZACATECASZAC_76 = format_TADZACATECASZAC_76.readFeatures(json_TADZACATECASZAC_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADZACATECASZAC_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADZACATECASZAC_76.addFeatures(features_TADZACATECASZAC_76);
var lyr_TADZACATECASZAC_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADZACATECASZAC_76, 
                style: style_TADZACATECASZAC_76,
                popuplayertitle: "TAD ZACATECAS, ZAC.",
                interactive: true,
                title: '<img src="styles/legend/TADZACATECASZAC_76.png" /> TAD ZACATECAS, ZAC.'
            });
var format_TADZAMORAMICH_77 = new ol.format.GeoJSON();
var features_TADZAMORAMICH_77 = format_TADZAMORAMICH_77.readFeatures(json_TADZAMORAMICH_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADZAMORAMICH_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADZAMORAMICH_77.addFeatures(features_TADZAMORAMICH_77);
var lyr_TADZAMORAMICH_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADZAMORAMICH_77, 
                style: style_TADZAMORAMICH_77,
                popuplayertitle: "TAD ZAMORA, MICH.",
                interactive: true,
                title: '<img src="styles/legend/TADZAMORAMICH_77.png" /> TAD ZAMORA, MICH.'
            });
var format_TADZAPOPANJAL_78 = new ol.format.GeoJSON();
var features_TADZAPOPANJAL_78 = format_TADZAPOPANJAL_78.readFeatures(json_TADZAPOPANJAL_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TADZAPOPANJAL_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TADZAPOPANJAL_78.addFeatures(features_TADZAPOPANJAL_78);
var lyr_TADZAPOPANJAL_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TADZAPOPANJAL_78, 
                style: style_TADZAPOPANJAL_78,
                popuplayertitle: "TAD ZAPOPAN, JAL.",
                interactive: true,
                title: '<img src="styles/legend/TADZAPOPANJAL_78.png" /> TAD ZAPOPAN, JAL.'
            });
var format_Lmiteestatal_79 = new ol.format.GeoJSON();
var features_Lmiteestatal_79 = format_Lmiteestatal_79.readFeatures(json_Lmiteestatal_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmiteestatal_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmiteestatal_79.addFeatures(features_Lmiteestatal_79);
var lyr_Lmiteestatal_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmiteestatal_79, 
                style: style_Lmiteestatal_79,
                popuplayertitle: "Límite estatal",
                interactive: false,
                title: '<img src="styles/legend/Lmiteestatal_79.png" /> Límite estatal'
            });

lyr_GoogleSatellite_0.setVisible(false);lyr_Positron_1.setVisible(true);lyr_DOSBOCAS_2.setVisible(true);lyr_TAD18DEMARZOAZCDF_3.setVisible(true);lyr_TADACAPULCOGRO_4.setVisible(true);lyr_TADAGUASCALIENTESAGS_5.setVisible(true);lyr_TADANILDF_6.setVisible(true);lyr_TADBARRANCADELMUERTODF_7.setVisible(true);lyr_TADCADEREYTANL_8.setVisible(true);lyr_TADCAMPECHECAMP_9.setVisible(true);lyr_TADCDJUAREZCHIH_10.setVisible(true);lyr_TADCDMANTETAMPS_11.setVisible(true);lyr_TADCDOBREGONSON_12.setVisible(true);lyr_TADCDVALLESSLP_13.setVisible(true);lyr_TADCDVICTORIATAMPS_14.setVisible(true);lyr_TADCELAYAGTO_15.setVisible(true);lyr_TADCHIHUAHUACHIH_16.setVisible(true);lyr_TADCOLIMACOL_17.setVisible(true);lyr_TADCUAUTLAMOR_18.setVisible(true);lyr_TADCUERNAVACAMOR_19.setVisible(true);lyr_TADCULIACANSIN_20.setVisible(true);lyr_TADDURANGODGO_21.setVisible(true);lyr_TADELCASTILLOJAL_22.setVisible(true);lyr_TADENSENADABCN_23.setVisible(true);lyr_TADESCAMELAVER_24.setVisible(true);lyr_TADGOMEZPALACIODGO_25.setVisible(true);lyr_TADGUAMUCHILSIN_26.setVisible(true);lyr_TADGUAYMASSON_27.setVisible(true);lyr_TADHERMOSILLOSON_28.setVisible(true);lyr_TADHGODELPARRALCHIH_29.setVisible(true);lyr_TADIGUALAGRO_30.setVisible(true);lyr_TADIRAPUATOGTO_31.setVisible(true);lyr_TADJALAPAVER_32.setVisible(true);lyr_TADLAPAZBCS_33.setVisible(true);lyr_TADLAZAROCARDENASMICH_34.setVisible(true);lyr_TADLEONGTO_35.setVisible(true);lyr_TADMADEROTAMPS_36.setVisible(true);lyr_TADMAGDALENASON_37.setVisible(true);lyr_TADMATEHUALASLP_38.setVisible(true);lyr_TADMAZATLANSIN_39.setVisible(true);lyr_TADMERIDAYUC_40.setVisible(true);lyr_TADMEXICALIBCN_41.setVisible(true);lyr_TADMINATITLANVER_42.setVisible(true);lyr_TADMONCLOVACOAH_43.setVisible(true);lyr_TADMORELIAMICH_44.setVisible(true);lyr_TADNAVOJOASON_45.setVisible(true);lyr_TADNOGALESSON_46.setVisible(true);lyr_TADNVOLAREDOTAMPS_47.setVisible(true);lyr_TADOAXACAOAX_48.setVisible(true);lyr_TADPACHUCAHGO_49.setVisible(true);lyr_TADPAJARITOSVER_50.setVisible(true);lyr_TADPEROTEVER_51.setVisible(true);lyr_TADPOZARICAVER_52.setVisible(true);lyr_TADPROGRESOYUC_53.setVisible(true);lyr_TADPUEBLAPUE_54.setVisible(true);lyr_TADQUERETAROQRO_55.setVisible(true);lyr_TADREYNOSATAMPS_56.setVisible(true);lyr_TADROSARITOBCN_57.setVisible(true);lyr_TADSMIAHUATLANPUE_58.setVisible(true);lyr_TADSABINASCOAH_59.setVisible(true);lyr_TADSALINACRUZOAX_60.setVisible(true);lyr_TADSALTILLOCOAH_61.setVisible(true);lyr_TADSANJUANIXHUATEPECMEX_62.setVisible(true);lyr_TADSANLUISPOTOSISLP_63.setVisible(true);lyr_TADSTACATARINAMTYNL_64.setVisible(true);lyr_TADTAPACHULACHIS_65.setVisible(true);lyr_TADTEPEIXTLESCOL_66.setVisible(true);lyr_TADTEPICNAY_67.setVisible(true);lyr_TADTIERRABLANCAVER_68.setVisible(true);lyr_TADTOLUCAMEX_69.setVisible(true);lyr_TADTOPOLOBAMPOSIN_70.setVisible(true);lyr_TADTULAHGO_71.setVisible(true);lyr_TADTUXTLAGTZCHIS_72.setVisible(true);lyr_TADURUAPANMICH_73.setVisible(true);lyr_TADVERACRUZVER_74.setVisible(true);lyr_TADVILLAHERMOSATAB_75.setVisible(true);lyr_TADZACATECASZAC_76.setVisible(true);lyr_TADZAMORAMICH_77.setVisible(true);lyr_TADZAPOPANJAL_78.setVisible(true);lyr_Lmiteestatal_79.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Positron_1,lyr_DOSBOCAS_2,lyr_TAD18DEMARZOAZCDF_3,lyr_TADACAPULCOGRO_4,lyr_TADAGUASCALIENTESAGS_5,lyr_TADANILDF_6,lyr_TADBARRANCADELMUERTODF_7,lyr_TADCADEREYTANL_8,lyr_TADCAMPECHECAMP_9,lyr_TADCDJUAREZCHIH_10,lyr_TADCDMANTETAMPS_11,lyr_TADCDOBREGONSON_12,lyr_TADCDVALLESSLP_13,lyr_TADCDVICTORIATAMPS_14,lyr_TADCELAYAGTO_15,lyr_TADCHIHUAHUACHIH_16,lyr_TADCOLIMACOL_17,lyr_TADCUAUTLAMOR_18,lyr_TADCUERNAVACAMOR_19,lyr_TADCULIACANSIN_20,lyr_TADDURANGODGO_21,lyr_TADELCASTILLOJAL_22,lyr_TADENSENADABCN_23,lyr_TADESCAMELAVER_24,lyr_TADGOMEZPALACIODGO_25,lyr_TADGUAMUCHILSIN_26,lyr_TADGUAYMASSON_27,lyr_TADHERMOSILLOSON_28,lyr_TADHGODELPARRALCHIH_29,lyr_TADIGUALAGRO_30,lyr_TADIRAPUATOGTO_31,lyr_TADJALAPAVER_32,lyr_TADLAPAZBCS_33,lyr_TADLAZAROCARDENASMICH_34,lyr_TADLEONGTO_35,lyr_TADMADEROTAMPS_36,lyr_TADMAGDALENASON_37,lyr_TADMATEHUALASLP_38,lyr_TADMAZATLANSIN_39,lyr_TADMERIDAYUC_40,lyr_TADMEXICALIBCN_41,lyr_TADMINATITLANVER_42,lyr_TADMONCLOVACOAH_43,lyr_TADMORELIAMICH_44,lyr_TADNAVOJOASON_45,lyr_TADNOGALESSON_46,lyr_TADNVOLAREDOTAMPS_47,lyr_TADOAXACAOAX_48,lyr_TADPACHUCAHGO_49,lyr_TADPAJARITOSVER_50,lyr_TADPEROTEVER_51,lyr_TADPOZARICAVER_52,lyr_TADPROGRESOYUC_53,lyr_TADPUEBLAPUE_54,lyr_TADQUERETAROQRO_55,lyr_TADREYNOSATAMPS_56,lyr_TADROSARITOBCN_57,lyr_TADSMIAHUATLANPUE_58,lyr_TADSABINASCOAH_59,lyr_TADSALINACRUZOAX_60,lyr_TADSALTILLOCOAH_61,lyr_TADSANJUANIXHUATEPECMEX_62,lyr_TADSANLUISPOTOSISLP_63,lyr_TADSTACATARINAMTYNL_64,lyr_TADTAPACHULACHIS_65,lyr_TADTEPEIXTLESCOL_66,lyr_TADTEPICNAY_67,lyr_TADTIERRABLANCAVER_68,lyr_TADTOLUCAMEX_69,lyr_TADTOPOLOBAMPOSIN_70,lyr_TADTULAHGO_71,lyr_TADTUXTLAGTZCHIS_72,lyr_TADURUAPANMICH_73,lyr_TADVERACRUZVER_74,lyr_TADVILLAHERMOSATAB_75,lyr_TADZACATECASZAC_76,lyr_TADZAMORAMICH_77,lyr_TADZAPOPANJAL_78,lyr_Lmiteestatal_79];
lyr_DOSBOCAS_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TAD18DEMARZOAZCDF_3.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADACAPULCOGRO_4.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADAGUASCALIENTESAGS_5.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADANILDF_6.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADBARRANCADELMUERTODF_7.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADCADEREYTANL_8.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADCAMPECHECAMP_9.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADCDJUAREZCHIH_10.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADCDMANTETAMPS_11.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADCDOBREGONSON_12.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADCDVALLESSLP_13.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADCDVICTORIATAMPS_14.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADCELAYAGTO_15.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADCHIHUAHUACHIH_16.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADCOLIMACOL_17.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADCUAUTLAMOR_18.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADCUERNAVACAMOR_19.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADCULIACANSIN_20.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADDURANGODGO_21.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADELCASTILLOJAL_22.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADENSENADABCN_23.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADESCAMELAVER_24.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADGOMEZPALACIODGO_25.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADGUAMUCHILSIN_26.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADGUAYMASSON_27.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADHERMOSILLOSON_28.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADHGODELPARRALCHIH_29.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADIGUALAGRO_30.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADIRAPUATOGTO_31.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADJALAPAVER_32.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADLAPAZBCS_33.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADLAZAROCARDENASMICH_34.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADLEONGTO_35.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADMADEROTAMPS_36.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADMAGDALENASON_37.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADMATEHUALASLP_38.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADMAZATLANSIN_39.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADMERIDAYUC_40.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADMEXICALIBCN_41.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADMINATITLANVER_42.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADMONCLOVACOAH_43.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADMORELIAMICH_44.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADNAVOJOASON_45.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADNOGALESSON_46.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADNVOLAREDOTAMPS_47.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADOAXACAOAX_48.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADPACHUCAHGO_49.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADPAJARITOSVER_50.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADPEROTEVER_51.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADPOZARICAVER_52.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADPROGRESOYUC_53.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADPUEBLAPUE_54.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADQUERETAROQRO_55.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADREYNOSATAMPS_56.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADROSARITOBCN_57.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADSMIAHUATLANPUE_58.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADSABINASCOAH_59.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADSALINACRUZOAX_60.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADSALTILLOCOAH_61.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADSANJUANIXHUATEPECMEX_62.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADSANLUISPOTOSISLP_63.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADSTACATARINAMTYNL_64.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADTAPACHULACHIS_65.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADTEPEIXTLESCOL_66.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADTEPICNAY_67.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADTIERRABLANCAVER_68.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADTOLUCAMEX_69.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADTOPOLOBAMPOSIN_70.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADTULAHGO_71.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADTUXTLAGTZCHIS_72.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADURUAPANMICH_73.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADVERACRUZVER_74.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADVILLAHERMOSATAB_75.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADZACATECASZAC_76.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADZAMORAMICH_77.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_TADZAPOPANJAL_78.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'tar': 'tar', 'color': 'color', 'nombre_tar': 'nombre_tar', 'precio_tar': 'precio_tar', 'precio_ven': 'precio_ven', 'ganancia': 'ganancia', 'nom_entida': 'nom_entida', 'nom_munici': 'nom_munici', });
lyr_Lmiteestatal_79.set('fieldAliases', {'qc_id': 'qc_id', 'cvegeo': 'cvegeo', 'cve_ent': 'cve_ent', 'nomgeo': 'nomgeo', 'stemreg': 'stemreg', 'egresados': 'egresados', });
lyr_DOSBOCAS_2.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TAD18DEMARZOAZCDF_3.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADACAPULCOGRO_4.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADAGUASCALIENTESAGS_5.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADANILDF_6.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADBARRANCADELMUERTODF_7.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADCADEREYTANL_8.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADCAMPECHECAMP_9.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADCDJUAREZCHIH_10.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADCDMANTETAMPS_11.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADCDOBREGONSON_12.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADCDVALLESSLP_13.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADCDVICTORIATAMPS_14.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADCELAYAGTO_15.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADCHIHUAHUACHIH_16.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADCOLIMACOL_17.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADCUAUTLAMOR_18.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADCUERNAVACAMOR_19.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADCULIACANSIN_20.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADDURANGODGO_21.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADELCASTILLOJAL_22.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADENSENADABCN_23.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADESCAMELAVER_24.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADGOMEZPALACIODGO_25.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADGUAMUCHILSIN_26.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADGUAYMASSON_27.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADHERMOSILLOSON_28.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADHGODELPARRALCHIH_29.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADIGUALAGRO_30.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADIRAPUATOGTO_31.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADJALAPAVER_32.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADLAPAZBCS_33.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADLAZAROCARDENASMICH_34.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADLEONGTO_35.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADMADEROTAMPS_36.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADMAGDALENASON_37.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADMATEHUALASLP_38.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADMAZATLANSIN_39.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADMERIDAYUC_40.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADMEXICALIBCN_41.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADMINATITLANVER_42.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADMONCLOVACOAH_43.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADMORELIAMICH_44.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADNAVOJOASON_45.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADNOGALESSON_46.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADNVOLAREDOTAMPS_47.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADOAXACAOAX_48.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADPACHUCAHGO_49.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADPAJARITOSVER_50.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADPEROTEVER_51.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADPOZARICAVER_52.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADPROGRESOYUC_53.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADPUEBLAPUE_54.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADQUERETAROQRO_55.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADREYNOSATAMPS_56.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADROSARITOBCN_57.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADSMIAHUATLANPUE_58.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADSABINASCOAH_59.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADSALINACRUZOAX_60.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADSALTILLOCOAH_61.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADSANJUANIXHUATEPECMEX_62.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADSANLUISPOTOSISLP_63.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADSTACATARINAMTYNL_64.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADTAPACHULACHIS_65.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADTEPEIXTLESCOL_66.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADTEPICNAY_67.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADTIERRABLANCAVER_68.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADTOLUCAMEX_69.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADTOPOLOBAMPOSIN_70.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADTULAHGO_71.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADTUXTLAGTZCHIS_72.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADURUAPANMICH_73.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADVERACRUZVER_74.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADVILLAHERMOSATAB_75.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADZACATECASZAC_76.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADZAMORAMICH_77.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_TADZAPOPANJAL_78.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'tar': 'TextEdit', 'color': 'TextEdit', 'nombre_tar': 'TextEdit', 'precio_tar': 'TextEdit', 'precio_ven': 'TextEdit', 'ganancia': 'TextEdit', 'nom_entida': 'TextEdit', 'nom_munici': 'TextEdit', });
lyr_Lmiteestatal_79.set('fieldImages', {'qc_id': 'TextEdit', 'cvegeo': 'TextEdit', 'cve_ent': 'TextEdit', 'nomgeo': 'TextEdit', 'stemreg': 'TextEdit', 'egresados': 'TextEdit', });
lyr_DOSBOCAS_2.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TAD18DEMARZOAZCDF_3.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADACAPULCOGRO_4.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADAGUASCALIENTESAGS_5.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADANILDF_6.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADBARRANCADELMUERTODF_7.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADCADEREYTANL_8.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADCAMPECHECAMP_9.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADCDJUAREZCHIH_10.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADCDMANTETAMPS_11.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADCDOBREGONSON_12.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADCDVALLESSLP_13.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADCDVICTORIATAMPS_14.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADCELAYAGTO_15.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADCHIHUAHUACHIH_16.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADCOLIMACOL_17.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADCUAUTLAMOR_18.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADCUERNAVACAMOR_19.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADCULIACANSIN_20.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADDURANGODGO_21.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADELCASTILLOJAL_22.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADENSENADABCN_23.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADESCAMELAVER_24.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADGOMEZPALACIODGO_25.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADGUAMUCHILSIN_26.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADGUAYMASSON_27.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADHERMOSILLOSON_28.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADHGODELPARRALCHIH_29.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADIGUALAGRO_30.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADIRAPUATOGTO_31.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADJALAPAVER_32.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADLAPAZBCS_33.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADLAZAROCARDENASMICH_34.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADLEONGTO_35.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADMADEROTAMPS_36.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADMAGDALENASON_37.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADMATEHUALASLP_38.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADMAZATLANSIN_39.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADMERIDAYUC_40.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADMEXICALIBCN_41.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADMINATITLANVER_42.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADMONCLOVACOAH_43.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADMORELIAMICH_44.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADNAVOJOASON_45.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADNOGALESSON_46.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADNVOLAREDOTAMPS_47.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADOAXACAOAX_48.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADPACHUCAHGO_49.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADPAJARITOSVER_50.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADPEROTEVER_51.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADPOZARICAVER_52.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADPROGRESOYUC_53.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADPUEBLAPUE_54.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADQUERETAROQRO_55.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADREYNOSATAMPS_56.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADROSARITOBCN_57.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADSMIAHUATLANPUE_58.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADSABINASCOAH_59.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADSALINACRUZOAX_60.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADSALTILLOCOAH_61.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADSANJUANIXHUATEPECMEX_62.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADSANLUISPOTOSISLP_63.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADSTACATARINAMTYNL_64.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADTAPACHULACHIS_65.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADTEPEIXTLESCOL_66.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADTEPICNAY_67.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADTIERRABLANCAVER_68.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADTOLUCAMEX_69.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADTOPOLOBAMPOSIN_70.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADTULAHGO_71.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADTUXTLAGTZCHIS_72.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADURUAPANMICH_73.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADVERACRUZVER_74.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADVILLAHERMOSATAB_75.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADZACATECASZAC_76.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADZAMORAMICH_77.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_TADZAPOPANJAL_78.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'tar': 'no label', 'color': 'no label', 'nombre_tar': 'no label', 'precio_tar': 'no label', 'precio_ven': 'no label', 'ganancia': 'no label', 'nom_entida': 'no label', 'nom_munici': 'no label', });
lyr_Lmiteestatal_79.set('fieldLabels', {'qc_id': 'no label', 'cvegeo': 'no label', 'cve_ent': 'no label', 'nomgeo': 'no label', 'stemreg': 'no label', 'egresados': 'no label', });
lyr_Lmiteestatal_79.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});