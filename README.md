geodroid-viewer
===============

An viewer for maps served by https://github.com/jdeolive/geodroid-server/

Copy the contents of this folder to `/sdcard/www/` on your Android device, then navigate e.g. to [http://localhost:8000/www/?layers=ne:tiles&center=48,16&zoom=4](http://localhost:8000/www/?layers=ne:tiles&features=ne:populated_places&center=48,16&zoom=4).

The `layers` parameter is mandatory, `features`, `center` and `zoom` are optional.

The `ne:tiles` layer and 'ne:populated_places' features will be available after unpacking the contents of the http://dev.opengeo.org/~jdeolive/ne.zip GeoPackage to `/sdcard/GeoData/` on your Android device. Any GeoPackage in `/sdcard/GeoData/` with tiles in EPSG:4326 and point features can be used. The layer and feature prefix is the GeoPackage file name (e.g. 'ne' for 'ne.gpkg').
