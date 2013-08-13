geodroid-viewer
===============

An viewer for maps served by https://github.com/jdeolive/geodroid/

Copy the contents of this folder to `/sdcard/www/` on your Android device, then navigate e.g. to [http://localhost:8000/www/?layers=ne:tiles&center=48,16&zoom=4](http://localhost:8000/www/?layers=ne:tiles&center=48,16&zoom=4).

The `layers` parameter is mandatory, `center` and `zoom` are optional.

The `ne:tiles` layer will be available after unpacking the contents of the http://dev.opengeo.org/~jdeolive/ne.zip GeoPackage to `/sdcard/GeoData/` on your Android device. Any GeoPackage in `/sdcard/GeoData/` with tiles in EPSG:4326 can be used. The layer prefix is the GeoPackage file name (e.g. 'ne').
