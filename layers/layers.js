var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental'
            });var format_PreciosporDepartamento_1 = new ol.format.GeoJSON();
var features_PreciosporDepartamento_1 = format_PreciosporDepartamento_1.readFeatures(json_PreciosporDepartamento_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PreciosporDepartamento_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PreciosporDepartamento_1.addFeatures(features_PreciosporDepartamento_1);var lyr_PreciosporDepartamento_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PreciosporDepartamento_1, 
                style: style_PreciosporDepartamento_1,
    title: 'Precios por Departamento<br />\
    <img src="styles/legend/PreciosporDepartamento_1_0.png" />  1525 - 1785 <br />\
    <img src="styles/legend/PreciosporDepartamento_1_1.png" />  1785 - 2045 <br />\
    <img src="styles/legend/PreciosporDepartamento_1_2.png" />  2045 - 2305 <br />\
    <img src="styles/legend/PreciosporDepartamento_1_3.png" />  2305 - 2565 <br />\
    <img src="styles/legend/PreciosporDepartamento_1_4.png" />  2565 - 2825 <br />'
        });var format_MunicipiosTomadePrecios_2 = new ol.format.GeoJSON();
var features_MunicipiosTomadePrecios_2 = format_MunicipiosTomadePrecios_2.readFeatures(json_MunicipiosTomadePrecios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosTomadePrecios_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MunicipiosTomadePrecios_2.addFeatures(features_MunicipiosTomadePrecios_2);var lyr_MunicipiosTomadePrecios_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosTomadePrecios_2, 
                style: style_MunicipiosTomadePrecios_2,
                title: '<img src="styles/legend/MunicipiosTomadePrecios_2.png" /> Municipios Toma de Precios'
            });

lyr_LimiteDepartamental_0.setVisible(true);lyr_PreciosporDepartamento_1.setVisible(true);lyr_MunicipiosTomadePrecios_2.setVisible(true);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_PreciosporDepartamento_1,lyr_MunicipiosTomadePrecios_2];
lyr_LimiteDepartamental_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id_espacia': 'id_espacia', 'area_ofici': 'area_ofici', 'nombre_dep': 'nombre_dep', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'AREA  SEMB': 'AREA  SEMB', });
lyr_PreciosporDepartamento_1.set('fieldAliases', {'Departamen': 'Departamen', 'MES': 'MES', 'SEMANA': 'SEMANA', '$ Kg Panel': '$ Kg Panel', '$ Prom Año': '$ Prom Año', 'Año': 'Año', 'Prom_ Pais': 'Prom_ Pais', });
lyr_MunicipiosTomadePrecios_2.set('fieldAliases', {'Id': 'Id', 'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', });
lyr_LimiteDepartamental_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'id_espacia': 'TextEdit', 'area_ofici': 'TextEdit', 'nombre_dep': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_len': 'TextEdit', 'AREA  SEMB': 'TextEdit', });
lyr_PreciosporDepartamento_1.set('fieldImages', {'Departamen': 'TextEdit', 'MES': 'TextEdit', 'SEMANA': 'TextEdit', '$ Kg Panel': 'TextEdit', '$ Prom Año': 'TextEdit', 'Año': 'TextEdit', 'Prom_ Pais': 'TextEdit', });
lyr_MunicipiosTomadePrecios_2.set('fieldImages', {'Id': 'TextEdit', 'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_LimiteDepartamental_0.set('fieldLabels', {'OBJECTID': 'no label', 'id_espacia': 'no label', 'area_ofici': 'no label', 'nombre_dep': 'no label', 'Shape_area': 'no label', 'Shape_len': 'no label', 'AREA  SEMB': 'no label', });
lyr_PreciosporDepartamento_1.set('fieldLabels', {'Departamen': 'inline label', 'MES': 'inline label', 'SEMANA': 'inline label', '$ Kg Panel': 'inline label', '$ Prom Año': 'inline label', 'Año': 'inline label', 'Prom_ Pais': 'inline label', });
lyr_MunicipiosTomadePrecios_2.set('fieldLabels', {'Id': 'no label', 'DEPT': 'inline label', 'MUNICIPIO': 'inline label', });
lyr_MunicipiosTomadePrecios_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});