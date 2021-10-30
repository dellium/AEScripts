// @target aftereffects
// license below
// more: https://blob.pureandapplied.com.au
// selects un-parented layers
(function () {
    var theComp = app.project.activeItem;
    if (theComp && theComp.selectedLayers.length === 1) {
        theLayer = theComp.selectedLayers[0];
        for (var n = 1; n <= theComp.numLayers; n++) {
            theComp.layer(n).selected =
                theComp.layer(n).parent &&
                theComp.layer(n).parent.index === theLayer.parent.index;
        }
    }
})();

//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see https://www.gnu.org/licenses/
