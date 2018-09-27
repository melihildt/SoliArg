function moveMapToBerlin(map) {
  map.setCenter({lat: -34.5974, lng: -58.43713});
  map.setZoom(14);
}
var platform = new H
  .service
  .Platform({app_id: 'devportal-demo-20180625', app_code: '9v2BkviRwi9Ot26kp2IysQ', useHTTPS: true});
var pixelRatio = window.devicePixelRatio || 1;
var defaultLayers = platform.createDefaultLayers({
  tileSize: pixelRatio === 1
    ? 256
    : 512,
  ppi: pixelRatio === 1
    ? undefined
    : 320
});

// Step 2: initialize a map  - not specificing a location will give a whole world
// view.
var map = new H.Map(document.getElementById('map'), defaultLayers.normal.map, {pixelRatio: pixelRatio});

// Step 3: make the map interactive MapEvents enables the event system Behavior
// implements default interactions for pan/zoom (also on mobile touch
// environments)
var behavior = new H
  .mapevents
  .Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H
  .ui
  .UI
  .createDefault(map, defaultLayers);

// Now use the map as required...
moveMapToBerlin(map);

function addDraggableMarker(map, behavior) {

  var marker = new H
    .map
    .Marker({lat: -34.5974, lng: -58.43713});
  // Ensure that the marker can receive drag events
  marker.draggable = true;
  map.addObject(marker);

  // disable the default draggability of the underlying map when starting to drag
  // a marker object:
  map.addEventListener('dragstart', function (ev) {
    var target = ev.target;
    if (target instanceof H.map.Marker) {
      behavior.disable();
    }
  }, false);

  // re-enable the default draggability of the underlying map when dragging has
  // completed
  map.addEventListener('dragend', function (ev) {
    var target = ev.target;
    if (target instanceof mapsjs.map.Marker) {
      behavior.enable();
    }
  }, false);

  // Listen to the drag event and move the position of the marker as necessary
  map.addEventListener('drag', function (ev) {
    var target = ev.target,
      pointer = ev.currentPointer;
    if (target instanceof mapsjs.map.Marker) {
      target.setPosition(map.screenToGeo(pointer.viewportX, pointer.viewportY));
    }
  }, false);
}

function addDraggableMarker(map, behavior) {

  var marker = new H
    .map
    .Marker({lat: -34.5974, lng: -58.43713});
  // Ensure that the marker can receive drag events
  marker.draggable = true;
  map.addObject(marker);

  // disable the default draggability of the underlying map when starting to drag
  // a marker object:
  map.addEventListener('dragstart', function (ev) {
    var target = ev.target;
    if (target instanceof H.map.Marker) {
      behavior.disable();
    }
  }, false);

  // re-enable the default draggability of the underlying map when dragging has
  // completed
  map.addEventListener('dragend', function (ev) {
    var target = ev.target;
    if (target instanceof mapsjs.map.Marker) {
      behavior.enable();
    }
  }, false);

  // Listen to the drag event and move the position of the marker as necessary
  map.addEventListener('drag', function (ev) {
    var target = ev.target,
      pointer = ev.currentPointer;
    if (target instanceof mapsjs.map.Marker) {
      target.setPosition(map.screenToGeo(pointer.viewportX, pointer.viewportY));
    }
  }, false);
}

/**
* Boilerplate map initialization code starts below:
*/
