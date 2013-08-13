(function() {

  var pairs = window.location.search.substr(1).split('&');
  var params = {};
  for (var i = pairs.length - 1; i >= 0; --i) {
    var pair = pairs[i].split('=');
    params[pair[0]] = pair.length > 1 ? pair[1] : true;
  }

  if (!params.layers) {
    alert('No layers specified in URL.\nRedirecting to the README for instructions');
    window.location.href = 'https://github.com/ahocevar/geodroid-viewer/blob/master/README.md';
    return;
  }
  params.layers = params.layers.split(',');
  var layers = [];
  for (var i = 0, ii = params.layers.length; i < ii; ++i) {
    var layer = params.layers[i].replace(':', '/').split('.');
    // TODO: Implement features layers
    layers.push(new ol.layer.TileLayer({
      source: new ol.source.ImageTileSource({
        attributions: [new ol.Attribution('OpenLayers - GeoDroid')],
        extent: [-180, 180, -90, 90],
        tileGrid: new ol.tilegrid.TileGrid({
          origin: [-180, -90],
          resolutions: [0.7031, 0.3516, 0.1758, 0.0879, 0.0439]
        }),
        tileUrlFunction: ol.TileUrlFunction.createFromTemplate(
            '/tiles/' + layer[0] + '/{z}/{x}/{y}.' +
            (layer.length > 1 ? layer[1] : 'png'))
      })
    }));
  }

  if (params.center) {
    params.center = [
      parseFloat(params.center.substr(params.center.indexOf(',') + 1)),
      parseFloat(params.center.substr(0, params.center.indexOf(',')))
    ];
  }

  new ol.Map({
    target: 'map',
    renderer: ol.RendererHint.CANVAS,
    view: new ol.View2D({
      center: params.center || [0, 0],
      projection: 'EPSG:4326',
      zoom: params.zoom ? parseInt(params.zoom, 10) : 0
    }),
    layers: layers
  });
})();
