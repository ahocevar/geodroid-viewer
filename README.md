geodroid-viewer
===============

An viewer for maps served by https://github.com/jdeolive/geodroid-server/

## Preparation

geodroid-viewer needs [geodroid-server](https://github.com/jdeolive/geodroid-server/) installed and running on the Android device.

To make use of geodroid-server, it is recommended to install a GeoPackage on the device's SD-card. This can be done by unpacking the contents of the http://dev.opengeo.org/~jdeolive/ne.zip GeoPackage to `/sdcard/GeoData/` on the Android device.

## Installation

To install the viewer, copy the contents of this folder to `/sdcard/www/` on your Android device. To make sure that everything works, navigate to [http://localhost:8000/www/?layers=ne:tiles&features=ne:populated_places&center=48,16&zoom=4](http://localhost:8000/www/?layers=ne:tiles&features=ne:populated_places&center=48,16&zoom=4).

## URL Parameters

The content of the viewed map is controlled with URL parameters:

### layers

This parameter is used to pull in tile layers, and is mandatory. At least one layer needs to be specified, multiple tile layers can be provided as a comma separated list. Each tile layer consists of a prefix (e.g. 'ne' - the name of the GeoPackage that provides the layer, without the file extension) and a name (e.g. 'tiles' - the name of the layer in the GeoPackage), separated by a colon (':'). An optional file extension can also be appended (e.g. '.png').

    layers=<prefix>:<name>[.<extension>][,...]

### features

This optional parameter is used to pull in vector feature layers. Multiple feature layers can be provided as comma separated list. Each feature layer consists of a prefix (e.g. 'ne' - the name of the GeoPackage that provides the layer, without the file extension) and a name (e.g. 'populated_places' - the name of the feature layer in the GeoPackage).

    features=<prefix>:<name>[,...]

### center

This optional parameter is used to specify the initial center of the map.

    center=<latitude>,<longitude>

### zoom

This optional parameter is used to specify the initial zoom level of the map.

    zoom=<zoomlevel>
