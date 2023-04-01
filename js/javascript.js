
require([
  'esri/Map',
  'esri/views/SceneView',
  'esri/layers/SceneLayer',
  'esri/layers/GraphicsLayer',
  'esri/Graphic',
  'esri/request',
], function (
  Map,
  SceneView,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) {
  const createGraphicPolygon = (
    data,
    { size, colorMaterial, haveOutline = true, haveEdges = false }
  ) => {
    return new Graphic({
      geometry: data,
      type: 'simple',
      symbol: {
        type: 'polygon-3d',
        symbolLayers: [
          {
            type: 'extrude',
            size: size,
            material: {
              color: colorMaterial,
              outline: {
                color: haveOutline ? [255, 255, 255] : [255, 255, 255, 0],
                width: 10,
              },
            },
            edges: {
              type: 'solid',
              color: haveEdges ? [50, 50, 50, 0.5] : [50, 50, 50, 0],
            },
          },
        ],
      },
    });
  };

  const createGraphicLine = (data, { width }) => {
    return new Graphic({
      geometry: data,
      type: 'simple',
      symbol: {
        type: 'line-3d',

        symbolLayers: [
          {
            type: 'path',
            profile: 'circle',
            width: width,
            material: { color: [248, 248, 255] },
          },
        ],
      },
    });
  };

  

  var createGraphicFloor5_34_Glass = function (data, option = {}) {
    return new Graphic({
      geometry: data,
      symbol: data.symbol,
      attributes: data,
      popupTemplate: data.popupTemplate,
      size: 20,
    });
  };



  const json_options = {
    query: {
      f: 'json',
    },
    responseType: 'json',
  };

  const polygonFileList = [
    {
      fileLink: './data_json/entrance.json',
      option: {
        size: 14,
        colorMaterial: [177, 176, 199, 1],
      },
    },
    {
      fileLink: './data_json/entrance_top.json',
      option: {
        size: 4.5,
        colorMaterial: [205, 133, 63, 1],
      },
    },
    {
      fileLink: './data_json/entrance_columns.json',
      option: {
        size: 9,
        colorMaterial: [207, 207, 207, 1],
      },
    },
    {
      fileLink: './data_json/eaves.json',
      option: {
        size: 0.5,
        colorMaterial: [181, 181, 181, 1],
      },
    },
    {
      fileLink: './data_json/floor_1-3_right.json',
      option: {
        size: 13.5,
        colorMaterial: [7, 58, 148, 0.8],
      },
    },
    {
      fileLink: './data_json/floor_1-3_left.json',
      option: {
        size: 13.5,
        colorMaterial: [248, 248, 255, 1],
        haveOutline: false,
      },
    },
    {
      fileLink: './data_json/floor_1-3_columns.json',
      option: {
        size: 14,
        colorMaterial: [241, 241, 249, 1],
        haveEdges: true,
      },
    },
    {
      fileLink: './data_json/floor_2-3.json',
      option: {
        size: 9.5,
        colorMaterial: [205, 133, 63, 1],
      },
    },
    {
      fileLink: './data_json/floor_2.json',
      option: {
        size: 5,
        colorMaterial: [248, 248, 255, 1],
      },
    },
    {
      fileLink: './data_json/floor_1-3_roof.json',
      option: {
        size: 0.5,
        colorMaterial: [192, 192, 192],
      },
    },
    {
      fileLink: './data_json/floor_roof_c.json',
      option: {
        size: 1,
        colorMaterial: [248, 248, 255],
        haveOutline: false,
      },
    },
    {
      fileLink: './data_json/floor_4.json',
      option: {
        size: 1,
        colorMaterial: [248, 248, 255, 1],
      },
    },
    {
      fileLink: './data_json/floor_4_columns.json',
      option: {
        size: 19.5,
        colorMaterial: [248, 248, 255, 1],
      },
    },
    {
      fileLink: './data_json/floor_5_34.json',
      option: {
        size: 0.5,
        colorMaterial: [192, 192, 192, 1],
      },
    },
  ];

  const lineFileList = [
    {
      fileLink: './data_json/line columns.json',
      option: { width: 0.4 },
    },
    {
      fileLink: './data_json/line.json',
      option: { width: 0.3 },
    },
    
  ];
  // Vẽ nền
  polygonFileList.forEach((polygon) => {
    esriRequest(polygon.fileLink, json_options).then(function (response) {
      var graphicsLayer = new GraphicsLayer();
      console.log(response);
      response.data.forEach(function (data) {
        graphicsLayer.add(createGraphicPolygon(data, polygon.option));
      });
      map.add(graphicsLayer);
    });
  });

  //Vẽ line
  lineFileList.forEach((line) => {
    esriRequest(line.fileLink, json_options).then(function (response) {
      var graphicsLayer = new GraphicsLayer();
      console.log(response);
      response.data.forEach(function (data) {
        graphicsLayer.add(createGraphicLine(data, line.option));
      });
      map.add(graphicsLayer);
    });
  });

  // Vẽ kính
  esriRequest('./data_json/floor_5-34_glass.json', json_options).then(
    function (response) {
      var graphicsLayer = new GraphicsLayer();
      console.log(response);
      response.data.forEach(function (data) {
        graphicsLayer.add(createGraphicFloor5_34_Glass(data));
      });
      map.add(graphicsLayer);
    }
  );


  const map = new Map({
    basemap: 'topo-vector',
    // ground: 'world-elevation',
    layers: [], //end layers geojsonLayer
  });

  const view = new SceneView({
    container: 'viewDiv',
    map: map,
    camera: {
      position: [108.22288513183594, 16.071764175013556, 200],
      heading: 0,
      tilt: 80,
    },
  });

  view.popup.defaultPopupTemplateEnabled = true;
});