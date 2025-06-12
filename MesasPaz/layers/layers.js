var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_RegionesMesasPaz_1 = new ol.format.GeoJSON();
var features_RegionesMesasPaz_1 = format_RegionesMesasPaz_1.readFeatures(json_RegionesMesasPaz_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegionesMesasPaz_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionesMesasPaz_1.addFeatures(features_RegionesMesasPaz_1);
var lyr_RegionesMesasPaz_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegionesMesasPaz_1, 
                style: style_RegionesMesasPaz_1,
                popuplayertitle: 'RegionesMesasPaz',
                interactive: true,
    title: 'RegionesMesasPaz<br />\
    <img src="styles/legend/RegionesMesasPaz_1_0.png" /> Acapulco de Juárez<br />\
    <img src="styles/legend/RegionesMesasPaz_1_1.png" /> Acatlán<br />\
    <img src="styles/legend/RegionesMesasPaz_1_2.png" /> Actopan<br />\
    <img src="styles/legend/RegionesMesasPaz_1_3.png" /> Aguascalientes<br />\
    <img src="styles/legend/RegionesMesasPaz_1_4.png" /> Ahome<br />\
    <img src="styles/legend/RegionesMesasPaz_1_5.png" /> Ajalpan<br />\
    <img src="styles/legend/RegionesMesasPaz_1_6.png" /> Álvaro Obregón<br />\
    <img src="styles/legend/RegionesMesasPaz_1_7.png" /> Ameca<br />\
    <img src="styles/legend/RegionesMesasPaz_1_8.png" /> Amecameca<br />\
    <img src="styles/legend/RegionesMesasPaz_1_9.png" /> Apatzingán<br />\
    <img src="styles/legend/RegionesMesasPaz_1_10.png" /> Apizaco<br />\
    <img src="styles/legend/RegionesMesasPaz_1_11.png" /> Apodaca<br />\
    <img src="styles/legend/RegionesMesasPaz_1_12.png" /> Atizapán de Zaragoza<br />\
    <img src="styles/legend/RegionesMesasPaz_1_13.png" /> Atlacomulco<br />\
    <img src="styles/legend/RegionesMesasPaz_1_14.png" /> Atlixco<br />\
    <img src="styles/legend/RegionesMesasPaz_1_15.png" /> Autlán de Navarro<br />\
    <img src="styles/legend/RegionesMesasPaz_1_16.png" /> Ayutla de los Libres<br />\
    <img src="styles/legend/RegionesMesasPaz_1_17.png" /> Azcapotzalco<br />\
    <img src="styles/legend/RegionesMesasPaz_1_18.png" /> Bahía de Banderas<br />\
    <img src="styles/legend/RegionesMesasPaz_1_19.png" /> Benito Juárez<br />\
    <img src="styles/legend/RegionesMesasPaz_1_20.png" /> Bochil<br />\
    <img src="styles/legend/RegionesMesasPaz_1_21.png" /> Caborca<br />\
    <img src="styles/legend/RegionesMesasPaz_1_22.png" /> Cajeme<br />\
    <img src="styles/legend/RegionesMesasPaz_1_23.png" /> Campeche<br />\
    <img src="styles/legend/RegionesMesasPaz_1_24.png" /> Cárdenas<br />\
    <img src="styles/legend/RegionesMesasPaz_1_25.png" /> Carmen<br />\
    <img src="styles/legend/RegionesMesasPaz_1_26.png" /> Cd. Delicias<br />\
    <img src="styles/legend/RegionesMesasPaz_1_27.png" /> Celaya<br />\
    <img src="styles/legend/RegionesMesasPaz_1_28.png" /> Centro<br />\
    <img src="styles/legend/RegionesMesasPaz_1_29.png" /> Chalchicomula de Sesma<br />\
    <img src="styles/legend/RegionesMesasPaz_1_30.png" /> Chalco<br />\
    <img src="styles/legend/RegionesMesasPaz_1_31.png" /> Chicoloapan<br />\
    <img src="styles/legend/RegionesMesasPaz_1_32.png" /> Chihuahua<br />\
    <img src="styles/legend/RegionesMesasPaz_1_33.png" /> Chilapa de Álvarez<br />\
    <img src="styles/legend/RegionesMesasPaz_1_34.png" /> Chilpancingo de los Bravo<br />\
    <img src="styles/legend/RegionesMesasPaz_1_35.png" /> Chimalhuacán<br />\
    <img src="styles/legend/RegionesMesasPaz_1_36.png" /> Ciudad Ixtepec<br />\
    <img src="styles/legend/RegionesMesasPaz_1_37.png" /> Ciudad Madero<br />\
    <img src="styles/legend/RegionesMesasPaz_1_38.png" /> Ciudad Valles<br />\
    <img src="styles/legend/RegionesMesasPaz_1_39.png" /> Coacalco de Berriozábal<br />\
    <img src="styles/legend/RegionesMesasPaz_1_40.png" /> Coatepec<br />\
    <img src="styles/legend/RegionesMesasPaz_1_41.png" /> Coatzacoalcos<br />\
    <img src="styles/legend/RegionesMesasPaz_1_42.png" /> Colima<br />\
    <img src="styles/legend/RegionesMesasPaz_1_43.png" /> Colotlán<br />\
    <img src="styles/legend/RegionesMesasPaz_1_44.png" /> Comitán de Domínguez<br />\
    <img src="styles/legend/RegionesMesasPaz_1_45.png" /> Comondú<br />\
    <img src="styles/legend/RegionesMesasPaz_1_46.png" /> Córdoba<br />\
    <img src="styles/legend/RegionesMesasPaz_1_47.png" /> Corregidora<br />\
    <img src="styles/legend/RegionesMesasPaz_1_48.png" /> Cosamaloapan<br />\
    <img src="styles/legend/RegionesMesasPaz_1_49.png" /> Cosoleacaque<br />\
    <img src="styles/legend/RegionesMesasPaz_1_50.png" /> Coyoacán<br />\
    <img src="styles/legend/RegionesMesasPaz_1_51.png" /> Cozumel<br />\
    <img src="styles/legend/RegionesMesasPaz_1_52.png" /> Cuajimalpa de Morelos<br />\
    <img src="styles/legend/RegionesMesasPaz_1_53.png" /> Cuatro Ciénegas<br />\
    <img src="styles/legend/RegionesMesasPaz_1_54.png" /> Cuauhtémoc<br />\
    <img src="styles/legend/RegionesMesasPaz_1_55.png" /> Cuautitlán<br />\
    <img src="styles/legend/RegionesMesasPaz_1_56.png" /> Cuautitlán Izcalli<br />\
    <img src="styles/legend/RegionesMesasPaz_1_57.png" /> Cuautla<br />\
    <img src="styles/legend/RegionesMesasPaz_1_58.png" /> Cuernavaca<br />\
    <img src="styles/legend/RegionesMesasPaz_1_59.png" /> Culiacán<br />\
    <img src="styles/legend/RegionesMesasPaz_1_60.png" /> Durango<br />\
    <img src="styles/legend/RegionesMesasPaz_1_61.png" /> Ecatepec de Morelos<br />\
    <img src="styles/legend/RegionesMesasPaz_1_62.png" /> El Fuerte<br />\
    <img src="styles/legend/RegionesMesasPaz_1_63.png" /> El Mante<br />\
    <img src="styles/legend/RegionesMesasPaz_1_64.png" /> El Marqués<br />\
    <img src="styles/legend/RegionesMesasPaz_1_65.png" /> Ensenada<br />\
    <img src="styles/legend/RegionesMesasPaz_1_66.png" /> Fresnillo<br />\
    <img src="styles/legend/RegionesMesasPaz_1_67.png" /> García<br />\
    <img src="styles/legend/RegionesMesasPaz_1_68.png" /> Gómez Palacio<br />\
    <img src="styles/legend/RegionesMesasPaz_1_69.png" /> Guachochi<br />\
    <img src="styles/legend/RegionesMesasPaz_1_70.png" /> Guadalajara<br />\
    <img src="styles/legend/RegionesMesasPaz_1_71.png" /> Guadalupe<br />\
    <img src="styles/legend/RegionesMesasPaz_1_72.png" /> Guadalupe Victoria<br />\
    <img src="styles/legend/RegionesMesasPaz_1_73.png" /> Guanajuato<br />\
    <img src="styles/legend/RegionesMesasPaz_1_74.png" /> Guasave<br />\
    <img src="styles/legend/RegionesMesasPaz_1_75.png" /> Guaymas<br />\
    <img src="styles/legend/RegionesMesasPaz_1_76.png" /> Guerrero<br />\
    <img src="styles/legend/RegionesMesasPaz_1_77.png" /> Gustavo A. Madero<br />\
    <img src="styles/legend/RegionesMesasPaz_1_78.png" /> Hermosillo<br />\
    <img src="styles/legend/RegionesMesasPaz_1_79.png" /> Heroica Ciudad de Huajuapan de León<br />\
    <img src="styles/legend/RegionesMesasPaz_1_80.png" /> Heroica Ciudad de Tlaxiaco<br />\
    <img src="styles/legend/RegionesMesasPaz_1_81.png" /> Hidalgo<br />\
    <img src="styles/legend/RegionesMesasPaz_1_82.png" /> Hidalgo del Parral<br />\
    <img src="styles/legend/RegionesMesasPaz_1_83.png" /> Huatusco<br />\
    <img src="styles/legend/RegionesMesasPaz_1_84.png" /> Huauchinango<br />\
    <img src="styles/legend/RegionesMesasPaz_1_85.png" /> Huautla de Jiménez<br />\
    <img src="styles/legend/RegionesMesasPaz_1_86.png" /> Huehuetán<br />\
    <img src="styles/legend/RegionesMesasPaz_1_87.png" /> Huejutla de Reyes<br />\
    <img src="styles/legend/RegionesMesasPaz_1_88.png" /> Huetamo<br />\
    <img src="styles/legend/RegionesMesasPaz_1_89.png" /> Huixquilucan<br />\
    <img src="styles/legend/RegionesMesasPaz_1_90.png" /> Iguala de la Independencia<br />\
    <img src="styles/legend/RegionesMesasPaz_1_91.png" /> Irapuato<br />\
    <img src="styles/legend/RegionesMesasPaz_1_92.png" /> Ixmiquilpan<br />\
    <img src="styles/legend/RegionesMesasPaz_1_93.png" /> Ixtapaluca<br />\
    <img src="styles/legend/RegionesMesasPaz_1_94.png" /> Ixtlán de Juárez<br />\
    <img src="styles/legend/RegionesMesasPaz_1_95.png" /> Iztacalco<br />\
    <img src="styles/legend/RegionesMesasPaz_1_96.png" /> Iztapalapa<br />\
    <img src="styles/legend/RegionesMesasPaz_1_97.png" /> Jalpa<br />\
    <img src="styles/legend/RegionesMesasPaz_1_98.png" /> Jalpan de Serra<br />\
    <img src="styles/legend/RegionesMesasPaz_1_99.png" /> Jerécuaro<br />\
    <img src="styles/legend/RegionesMesasPaz_1_100.png" /> Jerez<br />\
    <img src="styles/legend/RegionesMesasPaz_1_101.png" /> Jesús María<br />\
    <img src="styles/legend/RegionesMesasPaz_1_102.png" /> Jilotepec<br />\
    <img src="styles/legend/RegionesMesasPaz_1_103.png" /> Jiquilpan<br />\
    <img src="styles/legend/RegionesMesasPaz_1_104.png" /> Jiutepec<br />\
    <img src="styles/legend/RegionesMesasPaz_1_105.png" /> Jocotepec<br />\
    <img src="styles/legend/RegionesMesasPaz_1_106.png" /> Jojutla<br />\
    <img src="styles/legend/RegionesMesasPaz_1_107.png" /> Juárez<br />\
    <img src="styles/legend/RegionesMesasPaz_1_108.png" /> Juchitán de Zaragoza<br />\
    <img src="styles/legend/RegionesMesasPaz_1_109.png" /> La Barca<br />\
    <img src="styles/legend/RegionesMesasPaz_1_110.png" /> La Magdalena Contreras<br />\
    <img src="styles/legend/RegionesMesasPaz_1_111.png" /> La Paz<br />\
    <img src="styles/legend/RegionesMesasPaz_1_112.png" /> Lagos de Moreno<br />\
    <img src="styles/legend/RegionesMesasPaz_1_113.png" /> Las Margaritas<br />\
    <img src="styles/legend/RegionesMesasPaz_1_114.png" /> Lázaro Cárdenas<br />\
    <img src="styles/legend/RegionesMesasPaz_1_115.png" /> León<br />\
    <img src="styles/legend/RegionesMesasPaz_1_116.png" /> Lerma<br />\
    <img src="styles/legend/RegionesMesasPaz_1_117.png" /> Linares<br />\
    <img src="styles/legend/RegionesMesasPaz_1_118.png" /> Los Cabos<br />\
    <img src="styles/legend/RegionesMesasPaz_1_119.png" /> Macuspana<br />\
    <img src="styles/legend/RegionesMesasPaz_1_120.png" /> Manzanillo<br />\
    <img src="styles/legend/RegionesMesasPaz_1_121.png" /> Martínez de la Torre<br />\
    <img src="styles/legend/RegionesMesasPaz_1_122.png" /> Mascota<br />\
    <img src="styles/legend/RegionesMesasPaz_1_123.png" /> Matamoros<br />\
    <img src="styles/legend/RegionesMesasPaz_1_124.png" /> Matehuala<br />\
    <img src="styles/legend/RegionesMesasPaz_1_125.png" /> Mazatlán<br />\
    <img src="styles/legend/RegionesMesasPaz_1_126.png" /> Mérida<br />\
    <img src="styles/legend/RegionesMesasPaz_1_127.png" /> Metepec<br />\
    <img src="styles/legend/RegionesMesasPaz_1_128.png" /> Mexicali<br />\
    <img src="styles/legend/RegionesMesasPaz_1_129.png" /> Miahuatlán de Porfirio Díaz<br />\
    <img src="styles/legend/RegionesMesasPaz_1_130.png" /> Miguel Hidalgo<br />\
    <img src="styles/legend/RegionesMesasPaz_1_131.png" /> Milpa Alta<br />\
    <img src="styles/legend/RegionesMesasPaz_1_132.png" /> Minatitlán<br />\
    <img src="styles/legend/RegionesMesasPaz_1_133.png" /> Moctezuma<br />\
    <img src="styles/legend/RegionesMesasPaz_1_134.png" /> Monclova<br />\
    <img src="styles/legend/RegionesMesasPaz_1_135.png" /> Montemorelos<br />\
    <img src="styles/legend/RegionesMesasPaz_1_136.png" /> Monterrey<br />\
    <img src="styles/legend/RegionesMesasPaz_1_137.png" /> Morelia<br />\
    <img src="styles/legend/RegionesMesasPaz_1_138.png" /> Múgica<br />\
    <img src="styles/legend/RegionesMesasPaz_1_139.png" /> Mulegé<br />\
    <img src="styles/legend/RegionesMesasPaz_1_140.png" /> Naucalpan de Juárez<br />\
    <img src="styles/legend/RegionesMesasPaz_1_141.png" /> Navojoa<br />\
    <img src="styles/legend/RegionesMesasPaz_1_142.png" /> Navolato<br />\
    <img src="styles/legend/RegionesMesasPaz_1_143.png" /> Nezahualcóyotl<br />\
    <img src="styles/legend/RegionesMesasPaz_1_144.png" /> Nicolás Romero<br />\
    <img src="styles/legend/RegionesMesasPaz_1_145.png" /> Nogales<br />\
    <img src="styles/legend/RegionesMesasPaz_1_146.png" /> Nuevo Casas Grandes<br />\
    <img src="styles/legend/RegionesMesasPaz_1_147.png" /> Nuevo Laredo<br />\
    <img src="styles/legend/RegionesMesasPaz_1_148.png" /> Oaxaca de Juárez<br />\
    <img src="styles/legend/RegionesMesasPaz_1_149.png" /> Ocosingo<br />\
    <img src="styles/legend/RegionesMesasPaz_1_150.png" /> Ojinaga<br />\
    <img src="styles/legend/RegionesMesasPaz_1_151.png" /> Orizaba<br />\
    <img src="styles/legend/RegionesMesasPaz_1_152.png" /> Othón P. Blanco<br />\
    <img src="styles/legend/RegionesMesasPaz_1_153.png" /> Pachuca de Soto<br />\
    <img src="styles/legend/RegionesMesasPaz_1_154.png" /> Palenque<br />\
    <img src="styles/legend/RegionesMesasPaz_1_155.png" /> Pánuco<br />\
    <img src="styles/legend/RegionesMesasPaz_1_156.png" /> Papantla<br />\
    <img src="styles/legend/RegionesMesasPaz_1_157.png" /> Pátzcuaro<br />\
    <img src="styles/legend/RegionesMesasPaz_1_158.png" /> Pénjamo<br />\
    <img src="styles/legend/RegionesMesasPaz_1_159.png" /> Pichucalco<br />\
    <img src="styles/legend/RegionesMesasPaz_1_160.png" /> Piedras Negras<br />\
    <img src="styles/legend/RegionesMesasPaz_1_161.png" /> Poza Rica de Hidalgo<br />\
    <img src="styles/legend/RegionesMesasPaz_1_162.png" /> Progreso<br />\
    <img src="styles/legend/RegionesMesasPaz_1_163.png" /> Puebla<br />\
    <img src="styles/legend/RegionesMesasPaz_1_164.png" /> Puerto Vallarta<br />\
    <img src="styles/legend/RegionesMesasPaz_1_165.png" /> Pungarabato<br />\
    <img src="styles/legend/RegionesMesasPaz_1_166.png" /> Puruándiro<br />\
    <img src="styles/legend/RegionesMesasPaz_1_167.png" /> Querétaro<br />\
    <img src="styles/legend/RegionesMesasPaz_1_168.png" /> Reynosa<br />\
    <img src="styles/legend/RegionesMesasPaz_1_169.png" /> Río Bravo<br />\
    <img src="styles/legend/RegionesMesasPaz_1_170.png" /> Río Grande<br />\
    <img src="styles/legend/RegionesMesasPaz_1_171.png" /> Rioverde<br />\
    <img src="styles/legend/RegionesMesasPaz_1_172.png" /> Sabinas Hidalgo<br />\
    <img src="styles/legend/RegionesMesasPaz_1_173.png" /> Salamanca<br />\
    <img src="styles/legend/RegionesMesasPaz_1_174.png" /> Salina Cruz<br />\
    <img src="styles/legend/RegionesMesasPaz_1_175.png" /> Saltillo<br />\
    <img src="styles/legend/RegionesMesasPaz_1_176.png" /> Salvador Alvarado<br />\
    <img src="styles/legend/RegionesMesasPaz_1_177.png" /> San Andrés Tuxtla<br />\
    <img src="styles/legend/RegionesMesasPaz_1_178.png" /> San Cristóbal de las Casas<br />\
    <img src="styles/legend/RegionesMesasPaz_1_179.png" /> San Felipe del Progreso<br />\
    <img src="styles/legend/RegionesMesasPaz_1_180.png" /> San Francisco del Rincón<br />\
    <img src="styles/legend/RegionesMesasPaz_1_181.png" /> San Juan Bautista Tuxtepec<br />\
    <img src="styles/legend/RegionesMesasPaz_1_182.png" /> San Juan del Río<br />\
    <img src="styles/legend/RegionesMesasPaz_1_183.png" /> San Luis de la Paz<br />\
    <img src="styles/legend/RegionesMesasPaz_1_184.png" /> San Luis Potosí<br />\
    <img src="styles/legend/RegionesMesasPaz_1_185.png" /> San Luis Río Colorado<br />\
    <img src="styles/legend/RegionesMesasPaz_1_186.png" /> San Martín Texmelucan<br />\
    <img src="styles/legend/RegionesMesasPaz_1_187.png" /> San Pedro Mixtepec -Dto. 22 -<br />\
    <img src="styles/legend/RegionesMesasPaz_1_188.png" /> San Quintín<br />\
    <img src="styles/legend/RegionesMesasPaz_1_189.png" /> Santa María del Río<br />\
    <img src="styles/legend/RegionesMesasPaz_1_190.png" /> Santiago Ixcuintla<br />\
    <img src="styles/legend/RegionesMesasPaz_1_191.png" /> Santiago Papasquiaro<br />\
    <img src="styles/legend/RegionesMesasPaz_1_192.png" /> Santiago Pinotepa Nacional<br />\
    <img src="styles/legend/RegionesMesasPaz_1_193.png" /> Santo Domingo Tehuantepec<br />\
    <img src="styles/legend/RegionesMesasPaz_1_194.png" /> Solidaridad<br />\
    <img src="styles/legend/RegionesMesasPaz_1_195.png" /> Soto la Marina<br />\
    <img src="styles/legend/RegionesMesasPaz_1_196.png" /> Tamazunchale<br />\
    <img src="styles/legend/RegionesMesasPaz_1_197.png" /> Tantoyuca<br />\
    <img src="styles/legend/RegionesMesasPaz_1_198.png" /> Tapachula<br />\
    <img src="styles/legend/RegionesMesasPaz_1_199.png" /> Teapa<br />\
    <img src="styles/legend/RegionesMesasPaz_1_200.png" /> Tecámac<br />\
    <img src="styles/legend/RegionesMesasPaz_1_201.png" /> Tecate<br />\
    <img src="styles/legend/RegionesMesasPaz_1_202.png" /> Tehuacán<br />\
    <img src="styles/legend/RegionesMesasPaz_1_203.png" /> Tejupilco<br />\
    <img src="styles/legend/RegionesMesasPaz_1_204.png" /> Tenancingo<br />\
    <img src="styles/legend/RegionesMesasPaz_1_205.png" /> Tenosique<br />\
    <img src="styles/legend/RegionesMesasPaz_1_206.png" /> Teotihuacán<br />\
    <img src="styles/legend/RegionesMesasPaz_1_207.png" /> Teotitlán de Flores Magón<br />\
    <img src="styles/legend/RegionesMesasPaz_1_208.png" /> Tepatitlán de Morelos<br />\
    <img src="styles/legend/RegionesMesasPaz_1_209.png" /> Tepeaca<br />\
    <img src="styles/legend/RegionesMesasPaz_1_210.png" /> Tepeapulco<br />\
    <img src="styles/legend/RegionesMesasPaz_1_211.png" /> Tepic<br />\
    <img src="styles/legend/RegionesMesasPaz_1_212.png" /> Tequila<br />\
    <img src="styles/legend/RegionesMesasPaz_1_213.png" /> Texcoco<br />\
    <img src="styles/legend/RegionesMesasPaz_1_214.png" /> Teziutlán<br />\
    <img src="styles/legend/RegionesMesasPaz_1_215.png" /> Ticul<br />\
    <img src="styles/legend/RegionesMesasPaz_1_216.png" /> Tijuana<br />\
    <img src="styles/legend/RegionesMesasPaz_1_217.png" /> Tlacolula de Matamoros<br />\
    <img src="styles/legend/RegionesMesasPaz_1_218.png" /> Tláhuac<br />\
    <img src="styles/legend/RegionesMesasPaz_1_219.png" /> Tlajomulco de Zúñiga<br />\
    <img src="styles/legend/RegionesMesasPaz_1_220.png" /> Tlalnepantla de Baz<br />\
    <img src="styles/legend/RegionesMesasPaz_1_221.png" /> Tlalpan<br />\
    <img src="styles/legend/RegionesMesasPaz_1_222.png" /> Tlapa de Comonfort<br />\
    <img src="styles/legend/RegionesMesasPaz_1_223.png" /> Tlaxcala<br />\
    <img src="styles/legend/RegionesMesasPaz_1_224.png" /> Toluca<br />\
    <img src="styles/legend/RegionesMesasPaz_1_225.png" /> Tonalá<br />\
    <img src="styles/legend/RegionesMesasPaz_1_226.png" /> Torreón<br />\
    <img src="styles/legend/RegionesMesasPaz_1_227.png" /> Tula de Allende<br />\
    <img src="styles/legend/RegionesMesasPaz_1_228.png" /> Tulancingo de Bravo<br />\
    <img src="styles/legend/RegionesMesasPaz_1_229.png" /> Tultepec<br />\
    <img src="styles/legend/RegionesMesasPaz_1_230.png" /> Tultitlán<br />\
    <img src="styles/legend/RegionesMesasPaz_1_231.png" /> Tuxpan<br />\
    <img src="styles/legend/RegionesMesasPaz_1_232.png" /> Tuxtla Gutiérrez<br />\
    <img src="styles/legend/RegionesMesasPaz_1_233.png" /> Ures<br />\
    <img src="styles/legend/RegionesMesasPaz_1_234.png" /> Uriangato<br />\
    <img src="styles/legend/RegionesMesasPaz_1_235.png" /> Urique<br />\
    <img src="styles/legend/RegionesMesasPaz_1_236.png" /> Uruapan<br />\
    <img src="styles/legend/RegionesMesasPaz_1_237.png" /> Valladolid<br />\
    <img src="styles/legend/RegionesMesasPaz_1_238.png" /> Valle de Chalco Solidaridad<br />\
    <img src="styles/legend/RegionesMesasPaz_1_239.png" /> Venustiano Carranza<br />\
    <img src="styles/legend/RegionesMesasPaz_1_240.png" /> Veracruz<br />\
    <img src="styles/legend/RegionesMesasPaz_1_241.png" /> Vicente Guerrero<br />\
    <img src="styles/legend/RegionesMesasPaz_1_242.png" /> Victoria<br />\
    <img src="styles/legend/RegionesMesasPaz_1_243.png" /> Villaflores<br />\
    <img src="styles/legend/RegionesMesasPaz_1_244.png" /> Xalapa<br />\
    <img src="styles/legend/RegionesMesasPaz_1_245.png" /> Xochimilco<br />\
    <img src="styles/legend/RegionesMesasPaz_1_246.png" /> Yautepec<br />\
    <img src="styles/legend/RegionesMesasPaz_1_247.png" /> Zacapu<br />\
    <img src="styles/legend/RegionesMesasPaz_1_248.png" /> Zacatecas<br />\
    <img src="styles/legend/RegionesMesasPaz_1_249.png" /> Zacatelco<br />\
    <img src="styles/legend/RegionesMesasPaz_1_250.png" /> Zacatlán<br />\
    <img src="styles/legend/RegionesMesasPaz_1_251.png" /> Zacualtipán de Ángeles<br />\
    <img src="styles/legend/RegionesMesasPaz_1_252.png" /> Zamora<br />\
    <img src="styles/legend/RegionesMesasPaz_1_253.png" /> Zapopan<br />\
    <img src="styles/legend/RegionesMesasPaz_1_254.png" /> Zapotlán el Grande<br />\
    <img src="styles/legend/RegionesMesasPaz_1_255.png" /> Zihuatanejo de Azueta<br />\
    <img src="styles/legend/RegionesMesasPaz_1_256.png" /> Zimapán<br />\
    <img src="styles/legend/RegionesMesasPaz_1_257.png" /> Zinacantepec<br />\
    <img src="styles/legend/RegionesMesasPaz_1_258.png" /> Zitácuaro<br />\
    <img src="styles/legend/RegionesMesasPaz_1_259.png" /> Zongolica<br />\
    <img src="styles/legend/RegionesMesasPaz_1_260.png" /> Zumpango<br />' });
var format_Entidades_2 = new ol.format.GeoJSON();
var features_Entidades_2 = format_Entidades_2.readFeatures(json_Entidades_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Entidades_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entidades_2.addFeatures(features_Entidades_2);
var lyr_Entidades_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Entidades_2, 
                style: style_Entidades_2,
                popuplayertitle: 'Entidades',
                interactive: false,
                title: '<img src="styles/legend/Entidades_2.png" /> Entidades'
            });
var format_PresidenciasMunicipales_3 = new ol.format.GeoJSON();
var features_PresidenciasMunicipales_3 = format_PresidenciasMunicipales_3.readFeatures(json_PresidenciasMunicipales_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PresidenciasMunicipales_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PresidenciasMunicipales_3.addFeatures(features_PresidenciasMunicipales_3);
var lyr_PresidenciasMunicipales_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PresidenciasMunicipales_3, 
                style: style_PresidenciasMunicipales_3,
                popuplayertitle: 'Presidencias Municipales',
                interactive: true,
                title: '<img src="styles/legend/PresidenciasMunicipales_3.png" /> Presidencias Municipales'
            });

lyr_Positron_0.setVisible(true);lyr_RegionesMesasPaz_1.setVisible(true);lyr_Entidades_2.setVisible(true);lyr_PresidenciasMunicipales_3.setVisible(true);
var layersList = [lyr_Positron_0,lyr_RegionesMesasPaz_1,lyr_Entidades_2,lyr_PresidenciasMunicipales_3];
lyr_RegionesMesasPaz_1.set('fieldAliases', {'fid': 'fid', 'CVEGEO': 'CVEGEO', 'NOMGEO': 'Municipio', 'cvegeo2': 'cvegeo2', '_NOM_ENT': 'Entidad', '_REGION': 'Región', '_NOM_REGION': 'Nombre Región', });
lyr_Entidades_2.set('fieldAliases', {'fid': 'fid', 'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'NOMGEO': 'NOMGEO', });
lyr_PresidenciasMunicipales_3.set('fieldAliases', {'fid': 'fid', 'entidad': 'Entidad', 'municipio': 'Municipio', 'nombre': 'Nombre', 'direccion': 'Dirección', 'lon': 'lon', 'lat': 'lat', });
lyr_RegionesMesasPaz_1.set('fieldImages', {'fid': 'TextEdit', 'CVEGEO': 'TextEdit', 'NOMGEO': 'TextEdit', 'cvegeo2': 'TextEdit', '_NOM_ENT': 'TextEdit', '_REGION': 'Range', '_NOM_REGION': 'TextEdit', });
lyr_Entidades_2.set('fieldImages', {'fid': 'TextEdit', 'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_PresidenciasMunicipales_3.set('fieldImages', {'fid': 'TextEdit', 'entidad': 'TextEdit', 'municipio': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'lon': 'TextEdit', 'lat': 'TextEdit', });
lyr_RegionesMesasPaz_1.set('fieldLabels', {'fid': 'hidden field', 'CVEGEO': 'hidden field', 'NOMGEO': 'inline label - always visible', 'cvegeo2': 'hidden field', '_NOM_ENT': 'inline label - always visible', '_REGION': 'inline label - always visible', '_NOM_REGION': 'inline label - always visible', });
lyr_Entidades_2.set('fieldLabels', {'fid': 'no label', 'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'NOMGEO': 'no label', });
lyr_PresidenciasMunicipales_3.set('fieldLabels', {'fid': 'hidden field', 'entidad': 'inline label - always visible', 'municipio': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'lon': 'hidden field', 'lat': 'hidden field', });
lyr_PresidenciasMunicipales_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});